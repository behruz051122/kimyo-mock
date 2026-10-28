"""
Spektr — Telegram yordamchisi (kurator kompyuterida ishlaydi).

Sayt (kurator sahifasi) dars natijalarini o'quvchilar guruhiga va har o'quvchiga shaxsan SIZNING
Telegram akkauntingizdan yuborishi uchun shu dastur kerak: sayt unga http://localhost:8765 orqali
murojaat qiladi, dastur esa Telethon sessiyangiz orqali xabarni yuboradi.

Ishga tushirish (Windows):
    pip install telethon
    set PYTHONIOENCODING=utf-8
    python spektr_telegram.py

Ishga tushirish (Mac, Terminal):
    pip3 install telethon cryptg certifi
    python3 spektr_telegram.py

Birinchi marta: api_id, api_hash va mavjud sessiya fayli (masalan kimyo.session) so'raladi.
Sessiya nusxasi shu papkaga olinadi («database is locked» bo'lmasligi uchun).
Ekranda chiqqan KALIT ni saytdagi Sozlamalar → Telegram bo'limiga kiriting.

Bulut rejimi: sayt bulutga ulangan bo'lsa, tugmalar istalgan qurilmadan (telefon, Safari) ishlaydi —
so'rovlar bulutdagi navbatga tushadi, bu dastur ularni olib bajaradi. Birinchi ishga tushganda kurator
kodi so'raladi (keyin eslab qolinadi). Keyinroq ulash uchun: python3 spektr_telegram.py --bulut

Platforma: Spektr'dagi SJ (savol-javob) bali, konspekt va davomatni online.kelajakmediklari.uz ga
SIZNING kurator akkauntingizdan yozadi. Birinchi marta platforma telefoni va paroli so'raladi (faqat shu
kompyuterdagi spektr_telegram.json da saqlanadi). Qayta kiritish: python3 spektr_telegram.py --platforma

Haftalik hisobot: har yakshanba 20:00 da (kompyuter o'chiq bo'lsa — dushanba 12:00 gacha) shu hafta darslari,
kelish, o'rtacha ball, ketma-ket NB, qolib ketgan ishlar, to'lovi tugaganlar va komissiya — FAQAT sizning
«Saqlangan xabarlar» ingizga yuboriladi (bulut rejimida). O'chirish: saytda Sozlamalar → Telegram.

Kuratorlar nazorati: boshliq akkaunti bilan ulangan bo'lsa — har kuni 00:30 da (kompyuter o'chiq bo'lsa — yoqilganda,
18:00 gacha) kechagi kun hisoboti (kim qachon boshladi, savol-javob daqiqasi, davomat, reyting) saytda tanlangan
KM kuratorlar guruhiga yuboriladi. To'lov va komissiya bu hisobotga kirmaydi.

Xavfsizlik: dastur faqat shu kompyuterdan (127.0.0.1) so'rov qabul qiladi, kalitsiz so'rovni rad etadi.
Guruh/kanallarga yozadi; shaxsiy xabarni esa FAQAT tanlangan guruhning a'zolariga (o'quvchilarga) yuboradi —
begona odamga yozmaydi. Telegram spam cheklovi (PeerFlood) chiqsa, darhol to'xtaydi.
"""

import asyncio
import copy
import getpass
import hashlib
import json
import os
import random
import re
import secrets
import shutil
import ssl
import sys
import time
import urllib.error
import urllib.parse
import urllib.request
from collections import Counter
from datetime import datetime, timedelta, timezone
from http.cookiejar import CookieJar
from pathlib import Path
from urllib.parse import parse_qs, urlsplit

try:
    sys.stdout.reconfigure(encoding="utf-8")
except Exception:
    pass

from telethon import TelegramClient, errors

VERSIYA = "2026.10.30"  # saytdagi «Sozlash holati» shu bilan eski yordamchini taniydi
PORT = 8765
# Bitta so'rovda shaxsan yoziladigan odamlar soni va ular orasidagi pauza (soniya) — spam cheklovidan saqlanish uchun.
SHAXSIY_CHEGARA = 60
SHAXSIY_PAUZA = (4, 8)
PAPKA = Path(__file__).resolve().parent

# Bulut (Firebase) — saytdagi src/data/bulutConfig.ts bilan bir xil loyiha. Bo'sh bo'lsa — faqat shu kompyuterdan.
FB_API_KEY = "AIzaSyAY__UILFvh58fNndy9DcL4rHVf2Xc__eM"
FB_PROJECT = "spektr-kurator"
FB_EMULYATOR = os.environ.get("SPEKTR_FB_EMU") == "1"  # sinov uchun (Firebase emulyatori)
NAVBAT_ORALIGI = 8  # soniya: navbat shunchalik tez-tez tekshiriladi
BELGI_ORALIGI = 120  # soniya: saytga «yordamchi yoniq» belgisi
PLATFORMA_ORALIGI = 6 * 3600  # soniya: platformadan guruhlar, to'lovlar va komissiya shunchalik tez-tez olinadi
SOZLAMA = PAPKA / "spektr_telegram.json"
RUXSAT_SAYT = {"https://behruz051122.github.io"}
RUXSAT_HOST = {"localhost", "127.0.0.1"}
PLATFORMA_URL = os.environ.get("SPEKTR_PLATFORMA_URL", "https://online.kelajakmediklari.uz")
TOSHKENT = timezone(timedelta(hours=5))


def sozlamalar():
    c = json.loads(SOZLAMA.read_text("utf-8")) if SOZLAMA.exists() else {}
    if not c.get("api_id"):
        c["api_id"] = int(input("api_id: ").strip())
    if not c.get("api_hash"):
        c["api_hash"] = input("api_hash: ").strip()
    if not c.get("sessiya"):
        manba = input("Mavjud sessiya fayli (masalan C:\\...\\kimyo.session; yangi kirish uchun bo'sh qoldiring): ").strip().strip('"')
        nusxa = PAPKA / "spektr.session"
        if manba:
            m = Path(manba if manba.endswith(".session") else manba + ".session")
            if m.exists() and not nusxa.exists():
                shutil.copy(m, nusxa)
                print(f"Sessiya nusxasi olindi: {nusxa}")
        c["sessiya"] = str(PAPKA / "spektr")
    if not c.get("kalit"):
        c["kalit"] = secrets.token_urlsafe(12)
    if "--bulut" in sys.argv:
        c.pop("bulut", None)
    if "--platforma" in sys.argv:
        c.pop("platforma", None)
    if "platforma" not in c:
        tel = input("Platforma (online.kelajakmediklari.uz) kurator telefoni — ballarni platformaga yozish uchun (bo'sh qoldirsangiz o'tkaziladi): ").strip()
        c["platforma"] = {"tel": tel, "parol": getpass.getpass("Platforma paroli (yozganda ko'rinmaydi): ")} if tel else ""
    if bulut_sozlanganmi() and "bulut" not in c:
        kod = input("Kurator kodi (bulut uchun — telefon va Safari'dan ham yuborish; bo'sh qoldirsangiz faqat shu kompyuterdan): ").strip()
        c["bulut"] = bulut_kirish(kod) if kod else ""
        if c["bulut"]:
            print("Bulutga ulandi.")
    SOZLAMA.write_text(json.dumps(c, ensure_ascii=False, indent=2), "utf-8")
    return c


# ── Bulut (Firebase REST) ──

def bulut_sozlanganmi():
    return FB_EMULYATOR or bool(FB_API_KEY and FB_PROJECT)


def kod_kirish(kod):
    """Kurator kodi → bulut akkaunti. Saytdagi bulutYadro.kodKirish bilan aynan bir xil bo'lishi shart."""
    k = kod.strip().lower()
    h = lambda x: hashlib.sha256(x.encode("utf-8")).hexdigest()  # noqa: E731
    return f"k{h('spektr-bulut:' + k)[:24]}@spektr-kurator.uz", h("spektr-parol:" + k)[:32]


def _ssl():
    # Mac'dagi python.org Python'da sertifikatlar bo'lmasligi mumkin: certifi (yoki pip ichidagisi) ishlatiladi.
    for m in ("certifi", "pip._vendor.certifi"):
        try:
            return ssl.create_default_context(cafile=__import__(m, fromlist=["where"]).where())
        except Exception:  # noqa: BLE001
            pass
    return ssl.create_default_context()


SSL = _ssl()


def http(usul, url, tana=None, token=None, forma=False):
    if forma:
        data, tur = urllib.parse.urlencode(tana).encode(), "application/x-www-form-urlencoded"
    else:
        data, tur = (None if tana is None else json.dumps(tana).encode()), "application/json"
    sarlavha = {"Content-Type": tur, **({"Authorization": f"Bearer {token}"} if token else {})}
    req = urllib.request.Request(url, data=data, method=usul, headers=sarlavha)
    try:
        with urllib.request.urlopen(req, timeout=30, context=None if url.startswith("http:") else SSL) as r:
            return r.status, json.loads(r.read() or b"{}")
    except urllib.error.HTTPError as e:
        try:
            return e.code, json.loads(e.read() or b"{}")
        except Exception:  # noqa: BLE001
            return e.code, {}


def fb_auth(xizmat, yol):
    kalit = FB_API_KEY or "demo"
    return f"http://127.0.0.1:9099/{xizmat}/{yol}?key={kalit}" if FB_EMULYATOR else f"https://{xizmat}/{yol}?key={kalit}"


FS_ILDIZ = "http://127.0.0.1:8080" if FB_EMULYATOR else "https://firestore.googleapis.com"


def bulut_kirish(kod):
    """Kod bilan kirish (bulutda akkaunt bo'lmasa — yaratiladi). Kod saqlanmaydi, faqat yangilash tokeni."""
    email, parol = kod_kirish(kod)
    tana = {"email": email, "password": parol, "returnSecureToken": True}
    st, r = http("POST", fb_auth("identitytoolkit.googleapis.com", "v1/accounts:signInWithPassword"), tana)
    if st != 200:
        st, r = http("POST", fb_auth("identitytoolkit.googleapis.com", "v1/accounts:signUp"), tana)
    if st != 200:
        raise SystemExit(f"Bulutga kirib bo'lmadi: {r.get('error', {}).get('message', st)}")
    return {"uid": r["localId"], "refresh": r["refreshToken"]}


def fs_qiymat(x):
    if x is None:
        return {"nullValue": None}
    if isinstance(x, bool):
        return {"booleanValue": x}
    if isinstance(x, int):
        return {"integerValue": str(x)}
    if isinstance(x, datetime):
        return {"timestampValue": x.strftime("%Y-%m-%dT%H:%M:%S.%fZ")}
    return {"stringValue": str(x)}


def fs_matn(maydon):
    return (maydon or {}).get("stringValue")


class Bulut:
    """Sayt navbatga qo'ygan so'rovlarni oladi, bajaradi va javobni yozadi (Firestore REST)."""

    def __init__(self, b):
        self.uid, self.refresh = b["uid"], b["refresh"]
        self.token, self.muddat = None, 0
        hujjatlar = self.hujjatlar = f"projects/{FB_PROJECT or 'demo-spektr'}/databases/(default)/documents"
        self.nom = f"{hujjatlar}/kuratorlar/{self.uid}"
        self.asos = f"{FS_ILDIZ}/v1/{self.nom}"
        self.commit = f"{FS_ILDIZ}/v1/{hujjatlar}:commit"

    def _token(self):
        if self.token and time.time() < self.muddat - 300:
            return self.token
        st, r = http("POST", fb_auth("securetoken.googleapis.com", "v1/token"), {"grant_type": "refresh_token", "refresh_token": self.refresh}, forma=True)
        if st != 200:
            raise RuntimeError(f"bulut tokeni yangilanmadi ({st}): python3 spektr_telegram.py --bulut bilan qayta ulang")
        self.token, self.refresh = r["id_token"], r.get("refresh_token", self.refresh)
        self.muddat = time.time() + int(r.get("expires_in", 3600))
        return self.token

    def _yoz(self, nom, maydonlar, shart=None):
        """Hujjatga yozish (:commit). `shart` — hujjat shu vaqtdan beri o'zgarmagan bo'lsagina yoziladi."""
        w = {"update": {"name": nom, "fields": {k: fs_qiymat(v) for k, v in maydonlar.items()}}, "updateMask": {"fieldPaths": list(maydonlar)}}
        if shart:
            w["currentDocument"] = {"updateTime": shart}
        return http("POST", self.commit, {"writes": [w]}, self._token())

    def belgi(self, men, **qoshimcha):
        """Saytga: yordamchi yoniq (qaysi akkaunt, qachon, versiya, platforma ulanganmi)."""
        self._yoz(f"{self.nom}/yordamchi/holat", {"men": men, "vaqt": datetime.now(timezone.utc), "versiya": VERSIYA, **qoshimcha})

    def platforma_yoz(self, malumot):
        """Platformadan olingan import fayli — sayt shu hujjatni tinglaydi va o'zi qo'llaydi."""
        st, r = self._yoz(f"{self.nom}/platforma/oxirgi", {"json": json.dumps(malumot, ensure_ascii=False), "vaqt": datetime.now(timezone.utc), "kurator": malumot.get("kurator", "")})
        if st != 200:
            raise RuntimeError(f"platforma ma'lumoti bulutga yozilmadi ({st}): {r}")

    def _sorov(self, so):
        st, r = http("POST", self.asos + ":runQuery", {"structuredQuery": so}, self._token())
        if st != 200:
            raise RuntimeError(f"bulutdan o'qib bo'lmadi ({st}): {r}")
        return [x["document"] for x in r if x.get("document")]

    def yozuvlar(self, kun=16):
        """Saytning ma'lumoti (faqat o'qish): guruhlar, o'quvchilar, sozlamalar — hammasi; darslar, jurnal, holatlar —
        oxirgi `kun` kunda o'zgarganlari (hisobotga shu yetadi, bepul limit tejaladi). → {kolleksiya: [yozuv, ...]}"""
        fr = [{"collectionId": "yozuvlar"}]
        kollar = {"arrayValue": {"values": [{"stringValue": k} for k in ("guruhlar", "oquvchilar", "sozlamalar")]}}
        hujjatlar = self._sorov({"from": fr, "where": {"fieldFilter": {"field": {"fieldPath": "k"}, "op": "IN", "value": kollar}}})
        dan = datetime.now(timezone.utc) - timedelta(days=kun)
        hujjatlar += self._sorov({"from": fr, "where": {"fieldFilter": {"field": {"fieldPath": "t"}, "op": "GREATER_THAN_OR_EQUAL", "value": fs_qiymat(dan)}}})
        eng = {}
        for h in hujjatlar:
            f = h.get("fields", {})
            k, i = fs_matn(f.get("k")), fs_matn(f.get("i"))
            v = f.get("v", {})
            v = float(v.get("integerValue") or v.get("doubleValue") or 0)
            if k and i is not None and ((k, i) not in eng or v > eng[(k, i)][0]):
                eng[(k, i)] = (v, fs_matn(f.get("d")))
        baza = {}
        for (k, _), (_, d) in eng.items():
            if d:
                baza.setdefault(k, []).append(json.loads(d))
        return baza

    # ── Kuratorlar nazorati (faqat boshliq akkaunti o'qiy oladi — Firestore qoidalari) ──

    def _nz_oqi(self, usul, url, tana=None):
        st, r = http(usul, url, tana, self._token())
        if st == 403:
            raise PermissionError("bu akkaunt boshliq emas (Firestore qoidalari)")
        return st, r

    def nazorat_sozlama(self):
        """KM kuratorlar guruhi: {chat, chatNom, yoqilgan, oxirgiSana}. Boshliq bo'lmasa — PermissionError."""
        st, r = self._nz_oqi("GET", f"{FS_ILDIZ}/v1/{self.hujjatlar}/nazoratSozlama/asosiy")
        if st == 404:
            return {}
        if st != 200:
            raise RuntimeError(f"nazorat sozlamasini o'qib bo'lmadi ({st})")
        f = r.get("fields", {})
        return {k: (v.get("stringValue") if "stringValue" in v else v.get("booleanValue")) for k, v in f.items()}

    def nazorat_belgi(self, sana):
        """Kunlik hisobot yuborildi — boshqa yordamchi takror yubormaydi."""
        self._yoz(f"{self.hujjatlar}/nazoratSozlama/asosiy", {"oxirgiSana": sana})

    def nazorat(self, dan, gacha):
        """Hamma kuratorlar: [{uid, p: profil, darslar: [xulosa]}] — darslar [dan, gacha] sanalari bo'yicha."""
        ildiz = f"{FS_ILDIZ}/v1/{self.hujjatlar}"
        st, r = self._nz_oqi("GET", f"{ildiz}/nazorat?pageSize=300")
        if st != 200:
            raise RuntimeError(f"nazoratni o'qib bo'lmadi ({st}): {r}")
        natija = []
        for h in r.get("documents", []):
            uid = h["name"].rsplit("/", 1)[1]
            try:
                p = json.loads(fs_matn(h.get("fields", {}).get("d")) or "null")
            except ValueError:
                continue
            if not p:
                continue
            filtr = lambda op, v: {"fieldFilter": {"field": {"fieldPath": "sana"}, "op": op, "value": {"stringValue": v}}}  # noqa: E731
            so = {"structuredQuery": {"from": [{"collectionId": "darslar"}], "where": {"compositeFilter": {"op": "AND", "filters": [filtr("GREATER_THAN_OR_EQUAL", dan), filtr("LESS_THAN_OR_EQUAL", gacha)]}}}}
            st, rr = self._nz_oqi("POST", f"{ildiz}/nazorat/{uid}:runQuery", so)
            if st != 200:
                raise RuntimeError(f"nazorat darslarini o'qib bo'lmadi ({st}): {rr}")
            darslar = []
            for x in rr:
                d = (x.get("document") or {}).get("fields", {}).get("d")
                try:
                    if d:
                        darslar.append(json.loads(fs_matn(d)))
                except ValueError:
                    pass
            natija.append({"uid": uid, "p": p, "darslar": darslar})
        return sorted(natija, key=lambda k: k["p"].get("ism", ""))

    def navbat(self):
        so = {"structuredQuery": {"from": [{"collectionId": "navbat"}], "where": {"fieldFilter": {"field": {"fieldPath": "holat"}, "op": "EQUAL", "value": {"stringValue": "kutilmoqda"}}}, "limit": 10}}
        st, r = http("POST", self.asos + ":runQuery", so, self._token())
        if st != 200:
            raise RuntimeError(f"navbatni o'qib bo'lmadi ({st}): {r}")
        ishlar = []
        for x in r:
            d = x.get("document")
            if not d:
                continue
            f = d.get("fields", {})
            ishlar.append({"nom": d["name"], "vaqt": d["updateTime"], "yol": fs_matn(f.get("yol")) or "", "usul": fs_matn(f.get("usul")) or "GET", "tana": fs_matn(f.get("tana"))})
        return ishlar

    def ol(self, ish):
        """Ishni egallash: boshqa yordamchi (yoki o'chirilgan ish) bo'lsa — False."""
        st, _ = self._yoz(ish["nom"], {"holat": "ishlanmoqda"}, shart=ish["vaqt"])
        return st == 200

    def tugat(self, ish, status, data):
        self._yoz(ish["nom"], {"holat": "tayyor" if status == 200 else "xato", "status": status, "javob": json.dumps(data, ensure_ascii=False)})


# ── Platforma (online.kelajakmediklari.uz): SJ, konspekt, davomat ──

def rsc_matn(html):
    """Next.js sahifasidagi server ma'lumoti (self.__next_f.push) — bitta matn."""
    return "".join(json.loads('"' + c + '"') for c in re.findall(r'self\.__next_f\.push\(\[1,"(.*?)"\]\)', html, flags=re.S))


def json_keyin(s, kalit):
    """`"kalit":` dan keyingi JSON qiymat (topilmasa None)."""
    i = s.find(f'"{kalit}":')
    if i < 0:
        return None
    return json.JSONDecoder().raw_decode(s, i + len(kalit) + 3)[0]


def mahalliy_sana(iso):
    """«2026-10-24T15:36:00.000Z» → Toshkent sanasi «2026-10-24» (platforma ham kuratorning mahalliy sanasini oladi)."""
    return datetime.fromisoformat(iso.replace("Z", "+00:00")).astimezone(TOSHKENT).date().isoformat()


def html_qatorlar(html):
    """Sahifadagi ko'rinadigan matn — qator-qator (skriptlarsiz)."""
    import html as H

    t = re.sub(r"<script.*?</script>", "", html, flags=re.S)
    t = re.sub(r"<[^>]+>", "\n", t)
    return [H.unescape(x).strip() for x in t.split("\n") if x.strip()]


def _iso(x, sep):
    return "-".join(reversed(x.split(sep)))


def _som(x):
    return int(re.sub(r"\D", "", x) or 0)


def komissiya_sahifasi(L, birinchi):
    """«Komissiya» sahifasining matn qatorlaridan: balans (1-sahifada), so'rovlar (karta raqamisiz) va to'lov yozuvlari."""
    try:
        i = L.index("Davrlar bo'yicha tarix")
    except ValueError:
        return None
    balans, sorovlar, tolovlar = {}, [], []
    if birinchi:
        for nom, kalit in [("To'ladi", "toladi"), ("Tekshirildi", "tekshirildi"), ("Yechildi", "yechildi"), ("Olishingiz mumkin", "olishMumkin"), ("Kutilayotgan", "kutilayotgan"), ("Sovish davrida", "sovishda"), ("Qarzdorlik (avans)", "qarz")]:
            if nom in L[:i]:
                k = L.index(nom)
                q = next((x for x in L[k + 1:k + 4] if "so'm" in x), None)
                if q:
                    balans[kalit] = _som(q)
        j0 = L.index("So'ngi so'rovlar") if "So'ngi so'rovlar" in L[:i] else i
        for k in range(j0, i - 4):
            if re.fullmatch(r"\d\d\.\d\d\.\d{4} \d\d:\d\d", L[k]) and L[k + 1] in ("Avans", "Yechish") and "so'm" in L[k + 2]:
                sorovlar.append({"sana": _iso(L[k][:10], "."), "tur": L[k + 1], "summa": _som(L[k + 2]), "holat": next((x for x in L[k + 3:k + 6] if x in ("Tasdiqlandi", "Rad etildi", "Kutilmoqda", "Kutilayotgan")), "")})
    for k in range(i, len(L) - 10):
        if not re.fullmatch(r"\d\d\.\d\d\.\d{4} \d\d:\d\d", L[k]):
            continue
        j = k + 1 if L[k + 1].startswith("+") else k + 2
        if not re.fullmatch(r"\+?\d{9,12}", L[j]) or L[j + 4] != "–":
            continue
        tolovlar.append({"sana": _iso(L[k][:10], "."), "ism": L[k + 1] if j == k + 2 else "", "tel": L[j][-9:], "guruh": L[j + 1], "bosh": _iso(L[j + 3], "/"),
                         "tugash": _iso(L[j + 5], "/"), "summa": _som(L[j + 6]), "mavjud": _iso(L[j + 7], "/"), "holat": L[j + 8]})
    return {"balans": balans, "sorovlar": sorovlar, "tolovlar": tolovlar, "keyingi": "Keyingi" in " ".join(L[-5:])}


def toplam_yig(guruhlar, oquvchilar, kurator, sahifalar, bugun=None):
    """Guruhlar, o'quvchilar va komissiya sahifalaridan saytga import fayli («spektr-guruhlar/1»):
    o'quvchining to'lov sanasi — komissiyadagi eng oxirgi davri (telefon + guruh bo'yicha). Karta raqami olinmaydi."""
    bugun = bugun or datetime.now(TOSHKENT).date()
    balans, sorovlar, tolovlar = {}, [], []
    for n, x in enumerate(sahifalar):
        if n == 0:
            balans, sorovlar = x["balans"], x["sorovlar"]
        tolovlar += x["tolovlar"]
    chegara = (bugun.replace(day=1) - timedelta(days=40)).replace(day=1).isoformat()
    faol = [x for x in tolovlar if not x["holat"].startswith("Qaytar")]
    gnom = {g["platformaId"]: g["nom"] for g in guruhlar}
    for o in oquvchilar:
        t = re.sub(r"\D", "", o.get("telefon") or "")[-9:]
        mos = [x for x in faol if t and x["tel"] == t and x["guruh"] == gnom.get(o["guruhPlatformaId"])] or [x for x in faol if t and x["tel"] == t]
        if mos:
            x = max(mos, key=lambda x: (x["tugash"], x["sana"]))
            o["tolovSana"], o["tolovTugash"] = x["sana"], x["tugash"]
            if not o["ism"] and x["ism"]:
                o["ism"] = x["ism"]
    return {
        "format": "spektr-guruhlar/1",
        "manba": "online.kelajakmediklari.uz",
        "kurator": kurator,
        "guruhlar": guruhlar,
        "oquvchilar": oquvchilar,
        "komissiya": {
            "yangilangan": datetime.now(TOSHKENT).isoformat(timespec="minutes")[:16],
            "balans": balans,
            "sorovlar": sorovlar[:30],
            "jami": len(tolovlar),
            "yozuvlar": [{**{k: v for k, v in x.items() if k != "tel"}, "tel": x["tel"][-4:]} for x in tolovlar if max(x["sana"], x["mavjud"]) >= chegara],
        },
    }


class Platforma:
    """Kurator akkaunti bilan (sessiya cookie). Baho platformaning o'z sahifasi kabi /api/curator/lesson-grade ga yoziladi."""

    MAYDONLAR = ("theoryScore", "konspektScore", "attendance")

    def __init__(self, tel, parol):
        self.tel, self.parol, self.kirgan = tel, parol, 0
        self.op = urllib.request.build_opener(urllib.request.HTTPCookieProcessor(CookieJar()), urllib.request.HTTPSHandler(context=SSL))

    def _so(self, usul, yol, tana=None, forma=False):
        sarlavha = {"Origin": PLATFORMA_URL, "Referer": PLATFORMA_URL + "/curator", "User-Agent": "Mozilla/5.0 (Spektr yordamchisi)"}
        data = None
        if tana is not None:
            data = urllib.parse.urlencode(tana).encode() if forma else json.dumps(tana).encode()
            sarlavha["Content-Type"] = "application/x-www-form-urlencoded" if forma else "application/json"
        req = urllib.request.Request(PLATFORMA_URL + yol, data=data, method=usul, headers=sarlavha)
        try:
            with self.op.open(req, timeout=40) as r:
                return r.status, r.geturl(), r.read().decode("utf-8", "replace")
        except urllib.error.HTTPError as e:
            return e.code, e.geturl() or PLATFORMA_URL + yol, e.read().decode("utf-8", "replace")

    def kir(self):
        d = re.sub(r"\D", "", self.tel)[-9:]
        _, url, _ = self._so("POST", "/api/auth/login", {"phone": f"+998 {d[:2]} {d[2:5]} {d[5:7]} {d[7:]}", "password": self.parol, "remember": "on"}, forma=True)
        if "/curator" not in url:
            raise RuntimeError("Platformaga kirib bo'lmadi: telefon yoki parol noto'g'ri (python3 spektr_telegram.py --platforma bilan qayta kiriting)")
        self.kirgan = time.time()

    def sahifa(self, yol):
        if time.time() - self.kirgan > 1800:
            self.kir()
        st, url, html = self._so("GET", yol)
        if "/login" in url or st in (401, 403):
            self.kir()
            st, url, html = self._so("GET", yol)
        if st != 200:
            raise RuntimeError(f"Platforma sahifasi ochilmadi ({st})")
        return html

    def guruh(self, gid):
        s = rsc_matn(self.sahifa(f"/curator/groups/{urllib.parse.quote(gid)}"))
        return {"oynalar": json_keyin(s, "initialWindows") or [], "baholar": json_keyin(s, "gradingInitial") or {}, "qotirilgan": json_keyin(s, "frozenDays") or []}

    def yoz(self, gid, sid, lid, sana, maydon, qiymat):
        tana = {"groupId": gid, "studentId": sid, "courseLessonId": lid, "lessonDate": sana, maydon: qiymat}
        for i in range(3):
            st, url, txt = self._so("POST", "/api/curator/lesson-grade", tana)
            if st in (401, 403) or "/login" in url:
                self.kir()
                continue
            try:
                j = json.loads(txt or "{}")
            except ValueError:
                j = {}
            if 200 <= st < 300 and j.get("ok"):
                return None
            if 400 <= st < 500:
                return j.get("error") or f"platforma rad etdi ({st})"
            time.sleep(0.5 * (i + 1))
        return "platforma javob bermadi"

    def toplam(self):
        """Aktiv guruhlar, o'quvchilar (telefon bilan), to'lov sanalari va komissiya — saytga import fayli (dict)."""
        st = self.sahifa("/curator/students")
        ids = list(dict.fromkeys(re.findall(r'href="/curator/groups/([0-9a-f-]+)"', st)))
        L, gs, cur = html_qatorlar(st), [], None
        for i, x in enumerate(L):
            if x == "Gurux:" and i + 1 < len(L):
                cur = {"nom": L[i + 1]}
                gs.append(cur)
            elif cur is not None and x.endswith(":") and i + 1 < len(L):
                cur[x[:-1]] = L[i + 1]
        for g, i in zip(gs, ids):
            g["id"] = i
        kurator = next((g.get("Kuratori") for g in gs if g.get("Kuratori")), "")
        guruhlar, oquvchilar = [], []
        for g in gs:
            if not g.get("id") or g.get("Status") != "BOSHLANGAN" or int(g.get("Aktiv o'quvchi", "0") or 0) == 0:
                continue
            s = rsc_matn(self.sahifa(f"/curator/groups/{g['id']}"))
            m = re.search(r'"students":\[\{"id".*?\]\}', s)
            if not m:
                continue
            for x in json.loads(s[m.start() + len('"students":'):m.end() - 1]):
                k = s.find(f'/student/{x["id"]}"')
                tel = re.findall(r'"children":"(\+998\d{9})"', s[max(0, k - 1500):k]) if k >= 0 else []
                oquvchilar.append({"platformaUuid": x["id"], "ism": (x.get("fullName") or "").strip(), "telefon": tel[-1] if tel else "", "guruhPlatformaId": g["id"]})
            guruhlar.append({"platformaId": g["id"], "nom": g["nom"], "kunlar": g.get("Kunlar"), "vaqt": g.get("Vaqti")})
        sahifalar = []
        for n in range(1, 60):
            x = komissiya_sahifasi(html_qatorlar(self.sahifa(f"/curator/komissiya?page={n}")), n == 1)
            if not x:
                break
            sahifalar.append(x)
            if not x["keyingi"]:
                break
        return toplam_yig(guruhlar, oquvchilar, kurator, sahifalar)

    def baholar(self, d):
        """d = {guruh: platformaId, sana: YYYY-MM-DD, baholar: [{k, studentId, theoryScore?, konspektScore?, attendance?}]}.
        Dars (courseLessonId) — o'quvchining shu sanada ochilgan imtihon oynasidan; topilmasa — guruhda shu kuni eng ko'p ochilgan dars."""
        gid, sana = str(d.get("guruh") or ""), str(d.get("sana") or "")
        if not gid or not re.fullmatch(r"\d{4}-\d{2}-\d{2}", sana):
            raise ValueError("guruh yoki sana noto'g'ri")
        g = self.guruh(gid)
        if sana in g["qotirilgan"]:
            return {"ok": False, "xato": "Bu kun platformada qotirilgan (natijalar guruhga yuborilgan) — baholarni o'zgartirib bo'lmaydi."}
        kun = [w for w in g["oynalar"] if w.get("openFrom") and mahalliy_sana(w["openFrom"]) == sana]
        if not kun:
            return {"ok": False, "xato": f"Platformada {sana} kuni dars (imtihon oynasi) ochilmagan. Avval platformada shu dars uchun imtihon oynasini oching."}
        asosiy = Counter(w["lessonId"] for w in kun).most_common(1)[0][0]
        natija = []
        for b in [x for x in d.get("baholar", []) if isinstance(x, dict)][:80]:
            sid = str(b.get("studentId") or "")
            ozi = [w for w in kun if w.get("studentId") == sid]
            lid = asosiy if (not ozi or any(w["lessonId"] == asosiy for w in ozi)) else max(ozi, key=lambda w: w["openFrom"])["lessonId"]
            xatolar = []
            for m in self.MAYDONLAR:
                if m not in b:
                    continue
                v = b[m]
                if m != "attendance":
                    v = None if v is None else max(0, min(100, int(round(float(v)))))
                elif v not in ("PRESENT", "ABSENT", "EXCUSED"):
                    continue
                x = self.yoz(gid, sid, lid, sana, m, v)
                if x:
                    xatolar.append(f"{m}: {x}")
            natija.append({"k": b.get("k"), "holat": "xato" if xatolar else "ok", "xato": "; ".join(xatolar) or None, "taxminiy": not ozi})
            print(f"  platforma {len(natija)}: {'ok' if not xatolar else xatolar[0]}")
        dars = next((w.get("lessonTitle") for w in kun if w["lessonId"] == asosiy), "")
        return {"ok": True, "natija": natija, "dars": dars}


# ── Haftalik hisobot: FAQAT kuratorning o'ziga (Saqlangan xabarlar) — o'quvchiga hech qachon ──
# To'lov va komissiya shu yerda bor, shuning uchun hisobot boshqa hech qayerga yuborilmaydi.

HISOBOT_SOAT = 20  # yakshanba, Toshkent vaqti; kompyuter o'sha payt o'chiq bo'lsa — dushanba 12:00 gacha
OYLAR = ["yanvar", "fevral", "mart", "aprel", "may", "iyun", "iyul", "avgust", "sentabr", "oktabr", "noyabr", "dekabr"]
DARAJA_VAZN = {1: 0.5, 2: 1, 3: 1.5}


def _e(x):
    import html as H

    return H.escape(str(x or ""), quote=False)


def _kun(iso):
    return f"{iso[8:10]}.{iso[5:7]}"


def _oraliq(dan, gacha):
    d, g = date_iso(dan), date_iso(gacha)
    if d.month == g.month:
        return f"{d.day}–{g.day}-{OYLAR[g.month - 1]}"
    return f"{d.day}-{OYLAR[d.month - 1]} – {g.day}-{OYLAR[g.month - 1]}"


def date_iso(s):
    return datetime.strptime(s[:10], "%Y-%m-%d").date()


def _somm(n):
    return f"{int(round(n)):,}".replace(",", " ") + " so'm"


def vaznli_ball(js):
    """Saytdagi vaznliBall bilan bir xil: Σ(ball × vazn) / Σ vazn, daraja vazni 0,5 / 1 / 1,5."""
    if not js:
        return None
    s = sum(j["ball"] * DARAJA_VAZN.get(j.get("daraja"), 1) for j in js)
    w = sum(DARAJA_VAZN.get(j.get("daraja"), 1) for j in js)
    return round(s / w)


def davomat_ol(d, oid):
    x = (d.get("davomat") or {}).get(oid)
    if x:
        return x
    return {"holat": "sababsiz"} if oid in (d.get("yoqlar") or []) else {"holat": "bor"}


def _ortacha(xs):
    xs = [x for x in xs if x is not None]
    return round(sum(xs) / len(xs)) if xs else None


def _ismlar(xs, n=5):
    xs = list(xs)
    q = ", ".join(xs[:n])
    return q + (f" va yana {len(xs) - n}" if len(xs) > n else "")


def _farq(a, b):
    if a is None or b is None or a == b:
        return ""
    return f" ({'▲' if a > b else '▼'}{abs(a - b)})"


def hafta_oraligi(bugun):
    """Hisobot haftasi: dushanba – yakshanba. Dushanba kuni — o'tgan hafta (kechikkan avtomatik hisobot), boshqa kunlari — shu hafta."""
    bosh = bugun - timedelta(days=bugun.weekday() + (7 if bugun.weekday() == 0 else 0))
    return bosh.isoformat(), (bosh + timedelta(days=6)).isoformat()


def hisobot_vaqtimi(hozir, oxirgi):
    """Avtomatik yuborish vaqti bo'lsa — hafta kaliti (yakshanba sanasi), aks holda None. Har hafta bir marta."""
    if hozir.weekday() == 6 and hozir.hour >= HISOBOT_SOAT:
        kalit = hozir.date().isoformat()
    elif hozir.weekday() == 0 and hozir.hour < 12:
        kalit = (hozir.date() - timedelta(days=1)).isoformat()
    else:
        return None
    return None if kalit == oxirgi else kalit


def hisobot_yig(baza, bugun, platforma=None):
    """Kuratorga haftalik hisobot (Telegram HTML, bo'laklarga bo'lingan). baza — bulutdagi yozuvlar,
    platforma — yordamchi platformadan olgan oxirgi ma'lumot (to'lov sanalari va komissiya yangiroq bo'lsa)."""
    bugun_s = bugun.isoformat()
    dan, gacha = hafta_oraligi(bugun)
    odan, ogacha = (date_iso(dan) - timedelta(days=7)).isoformat(), (date_iso(dan) - timedelta(days=1)).isoformat()
    soz = next(iter(baza.get("sozlamalar", [])), {})
    guruhlar = sorted(baza.get("guruhlar", []), key=lambda g: g.get("nom", ""))
    oquvchilar = [o for o in baza.get("oquvchilar", []) if o.get("faol")]
    darslar = [d for d in baza.get("darslar", []) if d.get("holat") != "tayyor"]
    jurnal = baza.get("jurnal", [])

    # Platformadan yangi to'lov sanalari; platformada guruhdan chiqqanlar «guruhda» hisoblanmaydi.
    pl_oq = {x["platformaUuid"]: x for x in (platforma or {}).get("oquvchilar", []) if x.get("platformaUuid")}
    pl_gr = {g["platformaId"] for g in (platforma or {}).get("guruhlar", [])}
    gmap = {g["id"]: g for g in guruhlar}

    def tolov(o):
        x = pl_oq.get(o.get("platformaUuid"))
        return (x or o).get("tolovTugash")

    def guruhda(o):
        g = gmap.get(o.get("guruhId"), {})
        if platforma and o.get("platformaUuid") and g.get("platformaId") in pl_gr:
            return o["platformaUuid"] in pl_oq
        return True

    jdars = {}
    for j in jurnal:
        jdars.setdefault(j["darsId"], {}).setdefault(j["oquvchiId"], []).append(j)

    def dars_ballari(d):
        return {oid: vaznli_ball(js) for oid, js in jdars.get(d["id"], {}).items()}

    qismlar, jami_dars, jami_bor, jami_n, jami_b, jami_ob, qolgan = [], 0, 0, 0, [], [], []
    for g in guruhlar:
        oq = sorted([o for o in oquvchilar if o.get("guruhId") == g["id"]], key=lambda o: o.get("ism", ""))
        if not oq:
            continue
        oid = {o["id"]: o for o in oq}
        gd = sorted([d for d in darslar if d.get("guruhId") == g["id"]], key=lambda d: (d["sana"], d.get("boshlanish") or 0))
        hafta = [d for d in gd if dan <= d["sana"] <= gacha]
        otgan = [d for d in gd if odan <= d["sana"] <= ogacha]
        q = [f"<b>{_e(g.get('nom'))}</b> — " + (f"{len(hafta)} dars ({', '.join(_kun(d['sana']) for d in hafta)})" if hafta else "bu hafta dars bo'lmagan")]

        if hafta:
            bor = n = nb = sababli = 0
            for d in hafta:
                for x in [x for x in d.get("tartib", []) if x in oid]:
                    h = davomat_ol(d, x)["holat"]
                    n += 1
                    bor += h == "bor"
                    nb += h == "sababsiz"
                    sababli += h == "sababli"
            jami_dars += len(hafta)
            jami_bor += bor
            jami_n += n
            if n:
                kelmadi = ", ".join(x for x in [f"NB {nb} ta" if nb else "", f"sababli {sababli} ta" if sababli else ""] if x)
                q.append(f"• Kelish: <b>{round(bor * 100 / n)}%</b>" + (f" · {kelmadi}" if kelmadi else ""))

            def oquvchi_ortacha(ds):
                m = {}
                for d in ds:
                    for k, b in dars_ballari(d).items():
                        if k in oid and b is not None:
                            m.setdefault(k, []).append(b)
                return {k: _ortacha(v) for k, v in m.items()}

            hb, ob = oquvchi_ortacha(hafta), oquvchi_ortacha(otgan)
            ballar = [b for d in hafta for k, b in dars_ballari(d).items() if k in oid and b is not None]
            oballar = [b for d in otgan for k, b in dars_ballari(d).items() if k in oid and b is not None]
            jami_b += ballar
            jami_ob += oballar
            ort, oort = _ortacha(ballar), _ortacha(oballar)
            if ort is not None:
                fq = _farq(ort, oort).strip(" ()")
                q.append(f"• O'rtacha ball: <b>{ort}</b>" + (f" (o'tgan hafta {oort}" + (f", {fq}" if fq else "") + ")" if oort is not None else ""))
                top = sorted(hb.items(), key=lambda x: -x[1])[:3]
                q.append("• 🏆 Eng yaxshi: " + ", ".join(f"{_e(oid[k]['ism'])} {b}" for k, b in top))
                osdi = sorted([(k, hb[k] - ob[k]) for k in hb if k in ob and hb[k] - ob[k] >= 10], key=lambda x: -x[1])
                if osdi:
                    q.append("• 📈 O'sdi: " + _ismlar(f"{_e(oid[k]['ism'])} +{f}" for k, f in osdi))
                tushdi = sorted([(k, ob[k] - hb[k]) for k in hb if k in ob and ob[k] - hb[k] >= 15], key=lambda x: -x[1])
                if tushdi:
                    q.append("• 📉 Pasaydi: " + _ismlar(f"{_e(oid[k]['ism'])} −{f}" for k, f in tushdi))
                past = sorted([(k, b) for k, b in hb.items() if b < 50], key=lambda x: x[1])
                if past:
                    q.append("• 🆘 Yordam kerak (50 dan past): " + _ismlar(f"{_e(oid[k]['ism'])} {b}" for k, b in past))

            # Konspekt: darsda bo'lib, topshirmaganlar (konspekt baholangan darslarda).
            yoq = {}
            for d in hafta:
                for k, kb in (d.get("konspekt") or {}).items():
                    if k in oid and (kb.get("yoq") or not kb.get("ball")) and davomat_ol(d, k)["holat"] == "bor":
                        yoq[k] = yoq.get(k, 0) + 1
            if yoq:
                q.append("• 📝 Konspekt topshirmagan: " + _ismlar(f"{_e(oid[k]['ism'])}" + (f" ({n} marta)" if n > 1 else "") for k, n in sorted(yoq.items(), key=lambda x: -x[1])))

        # Ketma-ket 2+ darsga sababsiz kelmaganlar (eng oxirgi darsdan orqaga).
        ketma = []
        for o in oq:
            n = 0
            for d in reversed(gd):
                if o["id"] not in d.get("tartib", []):
                    continue
                if davomat_ol(d, o["id"])["holat"] != "sababsiz":
                    break
                n += 1
            if n >= 2:
                ketma.append((o, n))
        if ketma:
            q.append("• 🚫 Ketma-ket NB: " + _ismlar(f"{_e(o['ism'])} ({n})" for o, n in sorted(ketma, key=lambda x: -x[1])))

        hol = [h for h in baza.get("holatlar", []) if h.get("oquvchiId") in oid]
        qizil = [h for h in hol if h.get("status") == "qizil" and dan <= (h.get("qizilSana") or "")[:10] <= gacha]
        yashil = [h for h in hol if h.get("status") == "yashil" and dan <= (h.get("yashilSana") or "")[:10] <= gacha]
        if qizil or yashil:
            q.append("• " + " · ".join(x for x in [
                f"🟢 Yashilga o'tgan mavzu: {len(yashil)}" if yashil else "",
                f"🔴 Yangi qizil: {len({h['mavzuId'] for h in qizil})} mavzu, {len({h['oquvchiId'] for h in qizil})} o'quvchi" if qizil else "",
            ] if x))

        for d in [d for d in gd if d["sana"] >= dan and d["sana"] <= gacha]:
            ish = []
            if d.get("holat") == "jarayonda":
                ish.append("yakunlanmagan")
            else:
                if not d.get("konspekt"):
                    ish.append("konspekt baholanmagan")
                if g.get("telegramChat") and d["id"] in jdars and not d.get("shaxsiyYuborildi") and not d.get("shaxsiyNavbat"):
                    ish.append("natija o'quvchilarga yuborilmagan")
                if g.get("platformaId") and not d.get("platforma"):
                    ish.append("platformaga yozilmagan")
            if ish:
                qolgan.append(f"• {_e(g.get('nom'))} · {_kun(d['sana'])} — {', '.join(ish)}")
        qismlar.append("\n".join(q))

    bosh = [f"📊 <b>Haftalik hisobot</b> · {_oraliq(dan, gacha)}", "<i>Faqat sizga — o'quvchilarga yuborilmaydi.</i>"]
    if jami_dars:
        u = _ortacha(jami_b)
        bosh.append(f"\nJami: <b>{jami_dars}</b> dars" + (f" · kelish <b>{round(jami_bor * 100 / jami_n)}%</b>" if jami_n else "") + (f" · o'rtacha ball <b>{u}</b>{_farq(u, _ortacha(jami_ob))}" if u is not None else ""))
    else:
        bosh.append("\nBu hafta yakunlangan dars yo'q.")
    bloklar = ["\n".join(bosh)] + qismlar
    if qolgan:
        bloklar.append("⏳ <b>Qolib ketgan ishlar</b>\n" + "\n".join(qolgan))

    # To'lov — faqat kuratorga.
    keyin7 = (bugun + timedelta(days=7)).isoformat()
    gnom = {g["id"]: g.get("nom", "") for g in guruhlar}
    tugagan = sorted([o for o in oquvchilar if tolov(o) and tolov(o) < bugun_s and guruhda(o)], key=lambda o: tolov(o))
    yaqin = sorted([o for o in oquvchilar if tolov(o) and bugun_s <= tolov(o) <= keyin7 and guruhda(o)], key=lambda o: tolov(o))
    if tugagan or yaqin:
        t = ["💳 <b>To'lov</b> (faqat siz uchun)"]
        if tugagan:
            t.append(f"• Guruhda turibdi, to'lovi tugagan — {len(tugagan)}: " + _ismlar((f"{_e(o['ism'])} ({_e(gnom.get(o['guruhId']))}, {_kun(tolov(o))})" for o in tugagan), 8))
        if yaqin:
            t.append(f"• 7 kun ichida tugaydi — {len(yaqin)}: " + _ismlar((f"{_e(o['ism'])} ({_kun(tolov(o))})" for o in yaqin), 8))
        bloklar.append("\n".join(t))

    k = (platforma or {}).get("komissiya") or soz.get("komissiya")
    if k and k.get("yozuvlar") is not None:
        b = k.get("balans", {})
        faol = [y for y in k["yozuvlar"] if not str(y.get("holat", "")).startswith("Qaytar")]
        kutish = [y for y in faol if y.get("holat") == "Sovutilmoqda"]
        sof = b.get("tekshirildi", 0) - b.get("yechildi", 0) - b.get("kutilayotgan", 0) + sum(y["summa"] for y in kutish if y["mavjud"] <= bugun_s)
        hafta_ichida = [y for y in kutish if bugun_s < y["mavjud"] <= keyin7]
        oy = [y for y in faol if y.get("bosh", "")[:7] == bugun_s[:7]]
        t = ["💰 <b>Komissiya</b>", f"• Hozir olish mumkin: <b>{_somm(max(0, sof))}</b>" + (f" (avans qarzi {_somm(-sof)})" if sof < 0 else "")]
        if hafta_ichida:
            t.append(f"• 7 kun ichida soviydi: {_somm(sum(y['summa'] for y in hafta_ichida))} ({len(hafta_ichida)} to'lov)")
        t.append(f"• {OYLAR[bugun.month - 1].capitalize()} oyi uchun hisoblangan: {_somm(sum(y['summa'] for y in oy))} ({len(oy)} to'lov)")
        if k.get("yangilangan"):
            t.append(f"<i>Platforma: {_e(k['yangilangan'].replace('T', ' '))}</i>")
        bloklar.append("\n".join(t))

    # Telegram xabari 4096 belgigacha: bloklar bo'yicha bo'linadi.
    xabarlar, joriy = [], ""
    for b in bloklar:
        if joriy and len(joriy) + len(b) + 2 > 3800:
            xabarlar.append(joriy)
            joriy = ""
        joriy = f"{joriy}\n\n{b}" if joriy else b
    if joriy:
        xabarlar.append(joriy)
    return xabarlar



# ── Kuratorlar nazorati: har kuni 00:30 da KM kuratorlar guruhiga (boshliq akkaunti bilan ulangan yordamchi) ──
# Saytdagi src/engine/nazorat.ts bilan bir xil qoidalar. Hisobotda to'lov va komissiya YO'Q — faqat dars intizomi va davomat.

NAZORAT_SOAT = (0, 30)  # Toshkent: kechagi kun hisoboti; kompyuter o'chiq bo'lsa — yoqilganda, 18:00 gacha
NAZORAT_OXIRGI = 18
KECH_CHEGARA = 10  # daqiqa
SJ_KAM, SJ_MAQSAD = 0.5, 0.75  # dars vaqtining ulushi: «qisqa» va reytingda to'liq ball
KUTISH_MS = 30 * 60_000
TASHLANGAN_MS = 3 * 3600_000
KUN_BOSHLARI = [("chor", 3), ("shan", 6), ("yak", 0), ("pay", 4), ("du", 1), ("se", 2), ("ju", 5)]
HAFTA_KUNLARI = ["yakshanba", "dushanba", "seshanba", "chorshanba", "payshanba", "juma", "shanba"]


def jadval_kunlari(kunlar):
    """«Du-Chor-Ju» → hafta kunlari (0 — yakshanba)."""
    t = (kunlar or "").lower()
    if re.search(r"har\s*kun", t):
        return [1, 2, 3, 4, 5, 6]
    r = set()
    for so in re.split(r"[^a-z]+", t):
        for b, n in KUN_BOSHLARI:
            if so.startswith(b):
                r.add(n)
                break
    return sorted(r)


def jadval_vaqti(vaqt):
    """«20:00-22:00» → (boshlanish, tugash) kun boshidan daqiqada."""
    m = re.search(r"(\d{1,2})[:.](\d{2})(?:\s*[-–—]\s*(\d{1,2})[:.](\d{2}))?", vaqt or "")
    if not m:
        return None
    bosh = int(m[1]) * 60 + int(m[2])
    oxir = int(m[3]) * 60 + int(m[4]) if m[3] else bosh + 120
    return bosh, (oxir if oxir > bosh else oxir + 1440)


def _hafta_kuni(sana):
    return date_iso(sana).isoweekday() % 7


def rejadami(g, sana):
    return bool(jadval_vaqti(g.get("vaqt"))) and _hafta_kuni(sana) in jadval_kunlari(g.get("kunlar"))


def toshkent_ms(sana, daqiqa):
    d = date_iso(sana)
    return int(datetime(d.year, d.month, d.day, tzinfo=TOSHKENT).timestamp() * 1000) + daqiqa * 60_000


def _soat(daqiqa):
    return f"{daqiqa // 60 % 24:02d}:{daqiqa % 60:02d}"


def _qator_muammolari(q, hozir):
    d, h = q.get("dars"), q["holat"]
    if h == "yoq":
        return ["dars qayd etilmagan"]
    m = []
    if not d:
        return m
    if d.get("kech") is not None and d["kech"] > KECH_CHEGARA:
        m.append(f"{d['kech']} daqiqa kech boshlandi")
    if h == "tayyor":
        m.append("tayyorlangan, lekin boshlanmagan")
    if h == "jarayonda" and hozir - d.get("faollik", hozir) > TASHLANGAN_MS:
        m.append("yakunlanmagan")
    if h == "otdi":
        if d.get("sj", 0) < SJ_KAM * (d.get("rejaDaq") or 120):
            m.append(f"savol-javob qisqa: {d.get('sj', 0)} daqiqa")
        if d.get("soralmagan"):
            m.append(f"{d['soralmagan']} kishi so'ralmadi")
        if not d.get("tg") and not d.get("shaxsiy"):
            m.append("natija o'quvchilarga yuborilmagan")
        if not d.get("platforma"):
            m.append("platformaga yozilmagan")
    return m


def kun_jadvali(kuratorlar, sana, hozir):
    """Saytdagi kunJadvali: rejadagi darslar (o'tgan-o'tmagani bilan) va rejadan tashqarilari."""
    r = []
    holat = lambda d: "otdi" if d.get("holat") == "yakunlangan" else "jarayonda" if d.get("holat") == "jarayonda" else "tayyor"  # noqa: E731
    for k in kuratorlar:
        p = k["p"]
        kunda = sorted([d for d in k["darslar"] if d.get("sana") == sana], key=lambda d: d.get("boshlanish") or float("inf"))
        ishlatildi = set()

        def qosh(q):
            q["muammolar"] = _qator_muammolari(q, hozir)
            r.append(q)

        for g in p.get("guruhlar", []):
            ds = [d for d in kunda if d.get("guruhId") == g.get("id")]
            jv = jadval_vaqti(g.get("vaqt"))
            for d in ds:
                ishlatildi.add(d["id"])
                qosh({"uid": k["uid"], "kurator": p.get("ism", ""), "guruh": g.get("nom", ""), "reja": d.get("reja"), "dars": d, "holat": holat(d)})
            if not ds and jv and rejadami(g, sana):
                qosh({"uid": k["uid"], "kurator": p.get("ism", ""), "guruh": g.get("nom", ""), "reja": _soat(jv[0]), "dars": None, "holat": "kutilmoqda" if hozir < toshkent_ms(sana, jv[0]) + KUTISH_MS else "yoq"})
        for d in kunda:
            if d["id"] not in ishlatildi:
                qosh({"uid": k["uid"], "kurator": p.get("ism", ""), "guruh": d.get("guruh") or "—", "reja": d.get("reja"), "dars": d, "holat": holat(d)})
    tartib = lambda q: (q["dars"] or {}).get("bosh") or q.get("reja") or "99"  # noqa: E731
    return sorted(r, key=lambda q: (q["kurator"], tartib(q), q["guruh"]))


def _foiz(a, b):
    return round(a * 100 / b) if b else None


def kurator_reytingi(kuratorlar, dan, gacha, hozir):
    """Saytdagi kuratorReytingi: intizom bali = qayd etilgan darslar 30% + o'z vaqtida 20% + SJ davomiyligi 20% + qamrov 15% + natija yuborish 15%."""
    natija = []
    for k in kuratorlar:
        qatorlar, s = [], date_iso(dan)
        while s.isoformat() <= gacha:
            qatorlar += kun_jadvali([k], s.isoformat(), hozir)
            s += timedelta(days=1)
        rejadagi = [q for q in qatorlar if q.get("reja") and q["holat"] != "kutilmoqda"]
        otdi = [q["dars"] for q in qatorlar if q["holat"] == "otdi"]
        kechli = [d for d in otdi if d.get("kech") is not None]
        sj_foiz = [min(1, d.get("sj", 0) / (SJ_MAQSAD * (d.get("rejaDaq") or 120))) for d in otdi]
        keldi = sum(d.get("keldi", 0) for d in otdi)
        x = {
            "ism": k["p"].get("ism", ""),
            "rejada": len(rejadagi),
            "bajarildi": len([q for q in rejadagi if q["holat"] != "yoq"]),
            "otdi": len(otdi),
            "ozVaqtida": _foiz(len([d for d in kechli if d["kech"] <= KECH_CHEGARA]), len(kechli)),
            "sj": _ortacha([d.get("sj", 0) for d in otdi]),
            "qamrov": min(100, _foiz(sum(d.get("soralgan", 0) for d in otdi), keldi)) if keldi else None,
            "yuborildi": _foiz(len([d for d in otdi if d.get("tg") or d.get("shaxsiy")]), len(otdi)),
            "davomat": _foiz(keldi, sum(d.get("jami", 0) for d in otdi)),
        }
        qism = [(_foiz(x["bajarildi"], x["rejada"]), 30), (x["ozVaqtida"], 20), (sum(sj_foiz) / len(sj_foiz) * 100 if sj_foiz else None, 20), (x["qamrov"], 15), (x["yuborildi"], 15)]
        bor = [(q, v) for q, v in qism if q is not None]
        vazn = sum(v for _, v in bor)
        x["ball"] = round(sum(q * v for q, v in bor) / vazn) if vazn else None
        natija.append(x)
    return sorted(natija, key=lambda x: (-(x["ball"] if x["ball"] is not None else -1), x["ism"]))


def _bolakla(bloklar):
    """Telegram xabari 4096 belgigacha: bloklar bo'yicha bo'linadi."""
    xabarlar, joriy = [], ""
    for b in bloklar:
        if joriy and len(joriy) + len(b) + 2 > 3800:
            xabarlar.append(joriy)
            joriy = ""
        joriy = f"{joriy}\n\n{b}" if joriy else b
    if joriy:
        xabarlar.append(joriy)
    return xabarlar


def nazorat_yig(kuratorlar, sana, hozir):
    """KM kuratorlar guruhiga kunlik hisobot (Telegram HTML). kuratorlar — nazorat(sana-6, sana)."""
    d0 = date_iso(sana)
    q = kun_jadvali(kuratorlar, sana, hozir)
    rejada = [x for x in q if x.get("reja") and x["holat"] != "kutilmoqda"]
    yoq = [x for x in q if x["holat"] == "yoq"]
    otdi = [x["dars"] for x in q if x["holat"] == "otdi"]
    kech = [x for x in q if ((x["dars"] or {}).get("kech") or 0) > KECH_CHEGARA]
    jami, keldi = sum(d.get("jami", 0) for d in otdi), sum(d.get("keldi", 0) for d in otdi)
    bosh = [f"📋 <b>Kuratorlar nazorati</b> · {d0.day}-{OYLAR[d0.month - 1]}, {HAFTA_KUNLARI[_hafta_kuni(sana)]}"]
    if rejada or otdi:
        bosh.append(f"Rejada <b>{len(rejada)}</b> dars: qayd etildi <b>{len(rejada) - len(yoq)}</b>" + (f" · ❌ qayd etilmagan <b>{len(yoq)}</b>" if yoq else "") + (f" · ⏰ kech boshlangan <b>{len(kech)}</b>" if kech else ""))
    if otdi:
        bosh.append(f"Kelish: <b>{_foiz(keldi, jami)}%</b> ({keldi}/{jami}) · o'rtacha savol-javob <b>{_ortacha([d.get('sj', 0) for d in otdi])} daqiqa</b>")
    if not q:
        bosh.append("Bu kunda rejada dars yo'q va dars qayd etilmagan.")
    bloklar = ["\n".join(bosh)]

    for uid in dict.fromkeys(x["uid"] for x in q):
        qs = [x for x in q if x["uid"] == uid]
        t = [f"👤 <b>{_e(qs[0]['kurator'])}</b>"]
        for x in qs:
            d = x["dars"]
            if x["holat"] == "yoq":
                t.append(f"❌ <b>{_e(x['guruh'])}</b> · reja {x['reja']} — dars qayd etilmagan")
                continue
            if x["holat"] == "kutilmoqda":
                continue
            belgi = "⏳" if x["holat"] in ("jarayonda", "tayyor") else "⚠️" if x["muammolar"] else "✅"
            qism = [f"{belgi} <b>{_e(x['guruh'])}</b>"]
            if d.get("bosh"):
                qism.append(f"{d['bosh']}" + (f" (reja {x['reja']})" if x.get("reja") else " (rejadan tashqari)"))
                qism.append(f"SJ {d.get('sj', 0)} daq")
            qism.append(f"keldi {d.get('keldi', 0)}/{d.get('jami', 0)}")
            if d.get("savol"):
                qism.append(f"so'raldi {d.get('soralgan', 0)} · {d['savol']} savol" + (f" · ball {d['ball']}" if d.get("ball") is not None else ""))
            t.append(" · ".join(qism))
            if x["muammolar"]:
                t.append("    ↳ " + "; ".join(x["muammolar"]))
            if d.get("nbIsm"):
                t.append("    NB: " + _ismlar((_e(i) for i in d["nbIsm"]), 6))
        bloklar.append("\n".join(t))

    past = [{**o, "kurator": k["p"].get("ism", "")} for k in kuratorlar for o in k["p"].get("kamDavomat", [])]
    if past:
        past.sort(key=lambda o: (-o.get("ketma", 0), o.get("keldi", 0) / max(1, o.get("jami", 1))))
        t = ["📉 <b>Davomati past o'quvchilar</b> (oxirgi 30 kun)"]
        for o in past[:15]:
            t.append(f"• {_e(o['ism'])} — {_e(o['guruh'])} · keldi {o['keldi']}/{o['jami']}" + (f" · <b>{o['ketma']} ta ketma-ket NB</b>" if o.get("ketma", 0) >= 2 else ""))
        if len(past) > 15:
            t.append(f"… va yana {len(past) - 15} kishi (saytda: Kuratorlar nazorati → Davomat)")
        bloklar.append("\n".join(t))

    r = [x for x in kurator_reytingi(kuratorlar, (d0 - timedelta(days=6)).isoformat(), sana, hozir) if x["rejada"] or x["otdi"]]
    if r:
        t = ["🏆 <b>Intizom reytingi</b> (oxirgi 7 kun)"]
        for i, x in enumerate(r, 1):
            qism = [f"darslar {x['bajarildi']}/{x['rejada']}"]
            if x["ozVaqtida"] is not None:
                qism.append(f"o'z vaqtida {x['ozVaqtida']}%")
            if x["sj"] is not None:
                qism.append(f"SJ {x['sj']} daq")
            if x["davomat"] is not None:
                qism.append(f"kelish {x['davomat']}%")
            t.append(f"{i}. {_e(x['ism'])} — <b>{x['ball'] if x['ball'] is not None else '—'}</b> ({', '.join(qism)})")
        bloklar.append("\n".join(t))
    bloklar[-1] += "\n\n<i>Spektr · avtomatik hisobot. Batafsil: kurator sayti → Kuratorlar nazorati.</i>"
    return _bolakla(bloklar)


def nazorat_vaqtimi(hozir):
    """Kunlik hisobot vaqti: 00:30 dan 18:00 gacha — kechagi sana (Toshkent), aks holda None."""
    if (hozir.hour, hozir.minute) >= NAZORAT_SOAT and hozir.hour < NAZORAT_OXIRGI:
        return (hozir.date() - timedelta(days=1)).isoformat()
    return None


C = sozlamalar()
PLATFORMA = Platforma(C["platforma"]["tel"], C["platforma"]["parol"]) if C.get("platforma") else None
BULUT = None  # bulut rejimida — Bulut (main ichida)
HOLAT_P = {"vaqt": 0.0, "xato": "", "malumot": None}  # platformadan oxirgi muvaffaqiyatli olish (va o'zi — hisobot uchun)
# Internet uzilib-ulanganda Telethon cheksiz qayta urinadi (standart 5 marta — keyin «disconnected» bo'lib qolardi).
client = TelegramClient(C["sessiya"], C["api_id"], C["api_hash"], connection_retries=None, retry_delay=5)


async def tg_ulan():
    """Telegram aloqasi uzilgan bo'lsa — qayta ulanadi (so'rov va bulut belgisidan oldin)."""
    if not client.is_connected():
        print("Telegram aloqasi uzilgan — qayta ulanmoqda…")
        await client.connect()


async def haftalik_hisobot(yubor):
    """Bulutdagi ma'lumotdan haftalik hisobot; yubor=True bo'lsa — FAQAT o'zimizga ('me', Saqlangan xabarlar)."""
    if not BULUT:
        raise ValueError("Haftalik hisobot uchun yordamchi bulutga ulangan bo'lishi kerak (python3 spektr_telegram.py --bulut)")
    baza = await asyncio.to_thread(BULUT.yozuvlar)
    platforma = HOLAT_P["malumot"]
    if platforma is None and PLATFORMA:
        try:
            platforma = HOLAT_P["malumot"] = await asyncio.to_thread(PLATFORMA.toplam)
        except Exception as e:  # noqa: BLE001
            print("Hisobot: platformadan olib bo'lmadi —", e)
    xabarlar = hisobot_yig(baza, datetime.now(TOSHKENT).date(), platforma)
    if yubor:
        for x in xabarlar:
            await bitta_yubor("me", x)
            await asyncio.sleep(1)
    soz = next(iter(baza.get("sozlamalar", [])), {})
    return {"ok": True, "xabarlar": xabarlar, "yuborildi": bool(yubor), "yoqilgan": soz.get("haftalikHisobot") is not False}


async def nazorat_hisobot(sana, yubor, avto=False):
    """Kunlik nazorat hisoboti (boshliq akkaunti). avto — vaqti kelganda: o'chirilgan yoki allaqachon yuborilgan bo'lsa jim o'tadi."""
    if not BULUT:
        raise ValueError("Nazorat hisoboti uchun yordamchi bulutga ulangan bo'lishi kerak (python3 spektr_telegram.py --bulut)")
    soz = await asyncio.to_thread(BULUT.nazorat_sozlama)
    if avto and (not soz.get("chat") or soz.get("yoqilgan") is False or (soz.get("oxirgiSana") or "") >= sana):
        return {"ok": True, "xabarlar": [], "yuborildi": False}
    dan = (date_iso(sana) - timedelta(days=6)).isoformat()
    kuratorlar = await asyncio.to_thread(BULUT.nazorat, dan, sana)
    xabarlar = nazorat_yig(kuratorlar, sana, int(time.time() * 1000))
    if yubor:
        if not soz.get("chat"):
            raise ValueError("KM kuratorlar guruhi tanlanmagan: saytda Kuratorlar nazorati → Hisobot → «Telegramdan tanlash».")
        ent = await chat_ol(soz["chat"])
        for x in xabarlar:
            await bitta_yubor(ent, x)
            await asyncio.sleep(1)
        await asyncio.to_thread(BULUT.nazorat_belgi, sana)
    return {"ok": True, "xabarlar": xabarlar, "yuborildi": bool(yubor)}


def guruhmi(d):
    return d.is_group or (d.is_channel and not d.is_user)


async def chat_ol(chat):
    if str(chat) == "me":
        return "me"
    try:
        n = int(chat)
    except ValueError:
        raise ValueError("Chat ID noto'g'ri")
    if n >= 0:
        raise ValueError("Faqat guruh yoki kanalga yuboriladi (ID manfiy bo'lishi kerak)")
    return await client.get_entity(n)


async def bitta_yubor(kimga, matn):
    """Bitta xabar: qisqa FloodWait'ni kutib, 3 marta urinadi; uzun kutish (5 daqiqadan ko'p) — xato."""
    for _ in range(3):
        try:
            return await client.send_message(kimga, matn, parse_mode="html", link_preview=False)
        except errors.FloodWaitError as e:
            if e.seconds > 300:
                raise
            print(f"Telegram cheklovi: {e.seconds} s kutilmoqda…")
            await asyncio.sleep(e.seconds + 1)
    raise RuntimeError("Telegram cheklovi: 3 marta urinildi, yuborilmadi")


def _u16(s):
    return len(s.encode("utf-16-le")) // 2


def matn_almashtir(matn, belgilar, eski, yangi):
    """Telegram xabaridagi `eski` ni `yangi` ga almashtiradi, formatlash (qalin, izoh bloki…) o'rnini siljitadi.
    Telegram o'rinlari UTF-16 birliklarida."""
    belgilar = [copy.copy(e) for e in (belgilar or [])]
    farq = _u16(yangi) - _u16(eski)
    qidir = 0
    while True:
        i = matn.find(eski, qidir)
        if i < 0:
            return matn, belgilar
        bosh, oxir = _u16(matn[:i]), _u16(matn[:i]) + _u16(eski)
        for e in belgilar:
            if e.offset >= oxir:
                e.offset += farq
            elif e.offset <= bosh and e.offset + e.length >= oxir:
                e.length += farq
        matn = matn[:i] + yangi + matn[i + len(eski):]
        qidir = i + len(yangi)


async def marshrut(usul, yol, sarlavha, tana):
    if sarlavha.get("x-spektr-kalit") != C["kalit"]:
        return 401, {"ok": False, "xato": "Kalit noto'g'ri — saytga dasturdagi KALIT ni kiriting"}
    await tg_ulan()
    u = urlsplit(yol)
    q = parse_qs(u.query)
    if usul == "GET" and u.path == "/holat":
        men = await client.get_me()
        return 200, {"ok": True, "men": " ".join(x for x in [men.first_name, men.last_name] if x) or men.username or "", "platforma": bool(PLATFORMA), "versiya": VERSIYA}
    if usul == "POST" and u.path == "/platforma/yangila":
        if not PLATFORMA:
            return 400, {"ok": False, "xato": "Platforma paroli kiritilmagan: kompyuterda «python3 spektr_telegram.py --platforma» bilan qayta ishga tushiring."}
        malumot = await asyncio.to_thread(PLATFORMA.toplam)
        HOLAT_P["malumot"] = malumot
        if BULUT:
            await asyncio.to_thread(BULUT.platforma_yoz, malumot)
            HOLAT_P["vaqt"] = time.time()
        return 200, {"ok": True, "json": json.dumps(malumot, ensure_ascii=False), "guruh": len(malumot["guruhlar"]), "oquvchi": len(malumot["oquvchilar"])}
    if usul == "POST" and u.path == "/hisobot":
        # Ko'rish yoki o'zimizga yuborish. Chat tanlanmaydi: hisobot faqat Saqlangan xabarlarga boradi.
        d = json.loads(tana or b"{}")
        return 200, await haftalik_hisobot(bool(d.get("yubor")))
    if usul == "POST" and u.path == "/nazorat":
        # Kuratorlar nazorati: ko'rish yoki KM kuratorlar guruhiga (boshliq sozlamasidagi chat) yuborish.
        d = json.loads(tana or b"{}")
        sana = str(d.get("sana") or (datetime.now(TOSHKENT).date() - timedelta(days=1)).isoformat())[:10]
        try:
            return 200, await nazorat_hisobot(sana, bool(d.get("yubor")))
        except PermissionError:
            return 403, {"ok": False, "xato": "Bu kurator akkaunti boshliq emas: nazorat hisoboti faqat boshliq akkauntida."}
    if usul == "POST" and u.path == "/platforma":
        if not PLATFORMA:
            return 400, {"ok": False, "xato": "Platforma paroli kiritilmagan: kompyuterda «python3 spektr_telegram.py --platforma» bilan qayta ishga tushiring."}
        return 200, await asyncio.to_thread(PLATFORMA.baholar, json.loads(tana or b"{}"))
    if usul == "GET" and u.path == "/chatlar":
        chatlar = [{"id": str(d.id), "nom": d.name} async for d in client.iter_dialogs() if guruhmi(d)]
        return 200, {"ok": True, "chatlar": chatlar}
    if usul == "GET" and u.path == "/azolar":
        ent = await chat_ol(q.get("chat", [""])[0])
        azolar = []
        async for a in client.iter_participants(ent):
            if a.bot or a.deleted:
                continue
            # Telefon — faqat Telegram ko'rsatsa (kontaktda yoki maxfiylik ruxsat bersa): o'quvchini aniq topish uchun.
            azolar.append({"id": str(a.id), "username": a.username or None, "ism": " ".join(x for x in [a.first_name, a.last_name] if x), "tel": a.phone or None})
        return 200, {"ok": True, "azolar": azolar}
    # ── Faqat o'qish: o'quvchilarni Telegram akkauntiga ulash uchun dalil (kurator ruxsati bilan) ──
    if usul == "GET" and u.path == "/tarix":
        # Guruh yozishmalari: kim nima yozgan, kimni belgilagan (ism/username). Xabar yuborilmaydi.
        ent = await chat_ol(q.get("chat", [""])[0])
        if ent == "me":
            raise ValueError("Guruh tanlanishi kerak")
        xabarlar = []
        async for m in client.iter_messages(ent, limit=min(1500, int(q.get("limit", ["400"])[0]))):
            s = m.sender
            belgilar = []
            for e, t in m.get_entities_text():
                if hasattr(e, "user_id"):
                    belgilar.append({"id": str(e.user_id), "matn": t})
                elif type(e).__name__ == "MessageEntityMention":
                    belgilar.append({"username": t.lstrip("@"), "matn": t})
            xabarlar.append({"id": m.id, "kim": str(m.sender_id or ""), "ism": " ".join(x for x in [getattr(s, "first_name", None), getattr(s, "last_name", None)] if x) or getattr(s, "title", "") or "",
                             "sana": m.date.isoformat(), "matn": (m.message or "")[:500], "javob": m.reply_to_msg_id, "media": type(m.media).__name__ if m.media else None, "belgilar": belgilar})
        return 200, {"ok": True, "xabarlar": xabarlar}
    if usul == "GET" and u.path == "/suhbat":
        # Shaxsiy yozishma — faqat shu guruhning a'zosi bilan (boshqa odamlar bilan suhbat o'qilmaydi).
        ent = await chat_ol(q.get("chat", [""])[0])
        if ent == "me":
            raise ValueError("Guruh tanlanishi kerak")
        uid = q.get("user", [""])[0]
        a = next((x for x in await client.get_participants(ent) if str(x.id) == uid), None)
        if not a:
            raise ValueError("Bu odam shu guruhning a'zosi emas")
        xabarlar = [{"out": m.out, "sana": m.date.isoformat(), "matn": (m.message or "")[:500], "media": type(m.media).__name__ if m.media else None}
                    async for m in client.iter_messages(a, limit=min(200, int(q.get("limit", ["60"])[0])))]
        return 200, {"ok": True, "xabarlar": xabarlar}
    if usul == "POST" and u.path == "/telefonlar":
        # Telefon raqami → Telegram akkaunti (egasi «raqam bo'yicha topish»ga ruxsat bergan bo'lsa). Kontaktlarga qo'shilmaydi.
        from telethon import functions
        natija = []
        for t in [re.sub(r"\D", "", str(x)) for x in json.loads(tana or b"{}").get("tel", [])][:60]:
            try:
                r = await client(functions.contacts.ResolvePhoneRequest(phone=t))
                a = r.users[0] if r.users else None
                natija.append({"tel": t, "id": str(a.id), "username": a.username, "ism": " ".join(x for x in [a.first_name, a.last_name] if x)} if a else {"tel": t})
            except (errors.FloodWaitError, errors.PhoneNumberFloodError) as e:
                natija.append({"tel": t, "xato": f"cheklov: {getattr(e, 'seconds', '')}"})
                break
            except Exception as e:  # noqa: BLE001 — raqam Telegram'da yo'q yoki egasi yashirgan
                natija.append({"tel": t, "xato": type(e).__name__})
            await asyncio.sleep(random.uniform(2, 4))
        return 200, {"ok": True, "natija": natija}
    if usul == "POST" and u.path == "/yubor":
        d = json.loads(tana or b"{}")
        ent = await chat_ol(d.get("chat", ""))
        xabarlar = [x for x in d.get("xabarlar", []) if isinstance(x, str) and x.strip()][:80]
        if ent != "me":
            # tg://user?id= belgilashlari ishlashi uchun a'zolar keshga olinadi.
            await client.get_participants(ent)
        n = 0
        for x in xabarlar:
            await bitta_yubor(ent, x)
            n += 1
            print(f"  yuborildi {n}/{len(xabarlar)}")
            await asyncio.sleep(1.2)
        return 200, {"ok": True, "yuborildi": n}
    if usul == "POST" and u.path == "/shaxsiy":
        # Har o'quvchiga shaxsan — faqat shu guruhning a'zolariga (ID yoki username bo'yicha topiladi).
        d = json.loads(tana or b"{}")
        ent = await chat_ol(d.get("chat", ""))
        if ent == "me":
            raise ValueError("Shaxsiy xabar uchun o'quvchilar guruhi tanlanishi kerak")
        azolar = [a for a in await client.get_participants(ent) if not a.bot and not a.deleted]
        by_id = {str(a.id): a for a in azolar}
        by_un = {a.username.lower(): a for a in azolar if a.username}
        qabul = [q for q in d.get("qabul", []) if isinstance(q, dict)][:SHAXSIY_CHEGARA]
        # Kelishilgan qoida: bu odamlarga (nazoratchi, admin, boshqa kurator) hech qachon shaxsan yozilmaydi.
        # Ro'yxat ochiq saytda emas, shu kompyuterdagi spektr_telegram.json da: "yozilmasin": ["123", ...]
        yozilmasin = {str(x) for x in C.get("yozilmasin", [])}
        natija = []
        for i, q in enumerate(qabul):
            k = str(q.get("k", ""))
            a = by_id.get(str(q.get("id") or "")) or by_un.get(str(q.get("username") or "").lstrip("@").lower())
            if not a:
                natija.append({"k": k, "holat": "topilmadi"})
                continue
            if str(a.id) in yozilmasin:
                natija.append({"k": k, "holat": "rad", "xato": "yozilmasin ro'yxatida"})
                continue
            xabarlar = [x for x in q.get("xabarlar", []) if isinstance(x, str) and x.strip()][:10]
            try:
                for x in xabarlar:
                    await bitta_yubor(a, x)
                natija.append({"k": k, "holat": "ok"})
                print(f"  shaxsan {i + 1}/{len(qabul)}: {a.first_name or a.id}")
            except (errors.PeerFloodError, errors.FloodWaitError):
                natija.append({"k": k, "holat": "flood"})
                return 200, {"ok": True, "natija": natija, "toxtadi": "Telegram spam cheklovi: qolganlarga yuborilmadi. Bir necha soatdan keyin qayta urinib ko'ring."}
            except (errors.UserIsBlockedError, errors.YouBlockedUserError, errors.UserPrivacyRestrictedError, errors.InputUserDeactivatedError, errors.PeerIdInvalidError) as e:
                natija.append({"k": k, "holat": "rad", "xato": type(e).__name__})
            except Exception as e:  # noqa: BLE001
                natija.append({"k": k, "holat": "xato", "xato": str(e)})
            if i < len(qabul) - 1:
                await asyncio.sleep(random.uniform(*SHAXSIY_PAUZA))
        return 200, {"ok": True, "natija": natija}
    if usul == "POST" and u.path == "/tahrir":
        # Yuborilgan xabarni tuzatish (masalan, «Bugungi» → «24-oktabrdagi»): faqat shu guruhning a'zolariga
        # O'ZIMIZ yuborgan, oxirgi `soat` (≤72) ichidagi va `eski` matni bor xabarlar. Yangi xabar yuborilmaydi.
        d = json.loads(tana or b"{}")
        ent = await chat_ol(d.get("chat", ""))
        if ent == "me":
            raise ValueError("Tahrir uchun o'quvchilar guruhi tanlanishi kerak")
        eski, yangi = str(d.get("eski") or ""), str(d.get("yangi") or "")
        if len(eski) < 5 or not yangi or eski == yangi:
            raise ValueError("eski (kamida 5 belgi) va yangi matn kerak")
        chegara = datetime.now(timezone.utc) - timedelta(hours=min(72, int(d.get("soat") or 48)))
        azolar = [a for a in await client.get_participants(ent) if not a.bot and not a.deleted]
        by_id = {str(a.id): a for a in azolar}
        by_un = {a.username.lower(): a for a in azolar if a.username}
        natija = []
        for q in [q for q in d.get("qabul", []) if isinstance(q, dict)][:SHAXSIY_CHEGARA]:
            k = str(q.get("k", ""))
            a = by_id.get(str(q.get("id") or "")) or by_un.get(str(q.get("username") or "").lstrip("@").lower())
            if not a:
                natija.append({"k": k, "holat": "topilmadi"})
                continue
            n = 0
            try:
                async for m in client.iter_messages(a, limit=30):
                    if m.date < chegara:
                        break
                    if not m.out or not m.message or eski not in m.message:
                        continue
                    yangi_matn, belgilar = matn_almashtir(m.message, m.entities, eski, yangi)
                    await client.edit_message(a, m.id, yangi_matn, formatting_entities=belgilar, link_preview=False)
                    n += 1
                natija.append({"k": k, "holat": "ok" if n else "yoq", "tahrir": n})
                print(f"  tahrir: {a.first_name or a.id} — {n} ta")
            except Exception as e:  # noqa: BLE001
                natija.append({"k": k, "holat": "xato", "xato": str(e)})
            await asyncio.sleep(1.5)
        return 200, {"ok": True, "natija": natija}
    return 404, {"ok": False, "xato": "Topilmadi"}


def ruxsatmi(origin):
    o = urlsplit(origin)
    return origin in RUXSAT_SAYT or o.hostname in RUXSAT_HOST


HOLAT = {200: "OK", 204: "No Content", 400: "Bad Request", 401: "Unauthorized", 403: "Forbidden", 404: "Not Found", 500: "Server Error"}


async def ishla(reader, writer):
    status, data, origin = 500, {"ok": False}, ""
    try:
        bosh = await reader.readuntil(b"\r\n\r\n")
        qatorlar = bosh.decode("latin1").split("\r\n")
        usul, yol, _ = qatorlar[0].split(" ", 2)
        sarlavha = {}
        for q in qatorlar[1:]:
            if ":" in q:
                k, v = q.split(":", 1)
                sarlavha[k.strip().lower()] = v.strip()
        origin = sarlavha.get("origin", "")
        n = int(sarlavha.get("content-length") or 0)
        tana = await reader.readexactly(n) if n else b""
        if origin and not ruxsatmi(origin):
            status, data = 403, {"ok": False, "xato": "Bu saytga ruxsat yo'q"}
        elif usul == "OPTIONS":
            status, data = 204, None
        else:
            status, data = await marshrut(usul, yol, sarlavha, tana)
    except Exception as e:  # noqa: BLE001
        status, data = 400 if isinstance(e, ValueError) else 500, {"ok": False, "xato": str(e)}
        print("Xato:", e)
    tana = b"" if data is None else json.dumps(data, ensure_ascii=False).encode("utf-8")
    sarlavhalar = [
        f"HTTP/1.1 {status} {HOLAT.get(status, 'OK')}",
        "Content-Type: application/json; charset=utf-8",
        f"Content-Length: {len(tana)}",
        f"Access-Control-Allow-Origin: {origin or '*'}",
        "Access-Control-Allow-Headers: content-type, x-spektr-kalit",
        "Access-Control-Allow-Methods: GET, POST, OPTIONS",
        "Access-Control-Allow-Private-Network: true",
        "Vary: Origin",
        "Connection: close",
    ]
    writer.write(("\r\n".join(sarlavhalar) + "\r\n\r\n").encode() + tana)
    await writer.drain()
    writer.close()


async def bulut_tsikli(men):
    global BULUT
    b = BULUT = Bulut(C["bulut"])
    keyingi_belgi, keyingi_platforma, keyingi_hisobot, keyingi_nazorat = 0, time.time() + 60, time.time() + 90, time.time() + 120
    while True:
        try:
            if time.time() >= keyingi_nazorat:
                # Kuratorlar nazorati: har kuni 00:30 dan keyin kechagi kun — KM kuratorlar guruhiga (faqat boshliq akkaunti).
                keyingi_nazorat = time.time() + 300
                sana = nazorat_vaqtimi(datetime.now(TOSHKENT))
                if sana and C.get("nazoratSana") != sana:
                    try:
                        r = await nazorat_hisobot(sana, True, avto=True)
                        if r["xabarlar"]:
                            print(f"Kuratorlar nazorati ({sana}) KM kuratorlar guruhiga yuborildi.")
                        C["nazoratSana"] = sana
                    except PermissionError:
                        C["nazoratSana"] = sana  # boshliq emas — bugun qayta urinilmaydi
                    except Exception as e:  # noqa: BLE001
                        print("Kuratorlar nazorati yuborilmadi:", e)
                        keyingi_nazorat = time.time() + 1800
                    else:
                        SOZLAMA.write_text(json.dumps(C, ensure_ascii=False, indent=2), "utf-8")

            if time.time() >= keyingi_hisobot:
                keyingi_hisobot = time.time() + 600
                kalit = hisobot_vaqtimi(datetime.now(TOSHKENT), C.get("hisobotHafta"))
                if kalit:
                    try:
                        r = await haftalik_hisobot(False)
                        if r["yoqilgan"]:
                            for x in r["xabarlar"]:
                                await bitta_yubor("me", x)
                                await asyncio.sleep(1)
                            print("Haftalik hisobot Saqlangan xabarlarga yuborildi.")
                        C["hisobotHafta"] = kalit
                        SOZLAMA.write_text(json.dumps(C, ensure_ascii=False, indent=2), "utf-8")
                    except Exception as e:  # noqa: BLE001
                        print("Haftalik hisobot yuborilmadi:", e)
                        keyingi_hisobot = time.time() + 1800

            if time.time() >= keyingi_belgi:
                try:
                    await tg_ulan()
                except Exception as e:  # noqa: BLE001 — internet yo'q: belgida ko'rinadi, keyingi safar yana urinadi
                    print("Telegramga ulanib bo'lmadi:", e)
                await asyncio.to_thread(b.belgi, men, platforma=bool(PLATFORMA), platformaVaqt=int(HOLAT_P["vaqt"] * 1000), platformaXato=HOLAT_P["xato"], telegram=client.is_connected())
                keyingi_belgi = time.time() + BELGI_ORALIGI
            if PLATFORMA and time.time() >= keyingi_platforma:
                # Platformadan yangi ma'lumot (o'quvchilar, to'lov sanalari, komissiya) — sayt o'zi qo'llaydi.
                try:
                    malumot = await asyncio.to_thread(PLATFORMA.toplam)
                    await asyncio.to_thread(b.platforma_yoz, malumot)
                    HOLAT_P.update(vaqt=time.time(), xato="", malumot=malumot)
                    keyingi_platforma = time.time() + PLATFORMA_ORALIGI
                    print(f"Platformadan yangilandi: {len(malumot['guruhlar'])} guruh, {len(malumot['oquvchilar'])} o'quvchi")
                except Exception as e:  # noqa: BLE001
                    HOLAT_P["xato"] = str(e)[:200]
                    keyingi_platforma = time.time() + 1800
                    print("Platformadan yangilab bo'lmadi:", e)
                keyingi_belgi = 0
            for ish in await asyncio.to_thread(b.navbat):
                if not await asyncio.to_thread(b.ol, ish):
                    continue
                print(f"Bulutdan so'rov: {ish['yol']}")
                try:
                    tana = ish["tana"].encode("utf-8") if ish["tana"] else b""
                    status, data = await marshrut(ish["usul"], ish["yol"], {"x-spektr-kalit": C["kalit"]}, tana)
                except Exception as e:  # noqa: BLE001
                    status, data = (400 if isinstance(e, ValueError) else 500), {"ok": False, "xato": str(e)}
                await asyncio.to_thread(b.tugat, ish, status, data)
                print(f"  tayyor ({status})")
        except Exception as e:  # noqa: BLE001
            print("Bulut xatosi:", e)
            await asyncio.sleep(20)
        await asyncio.sleep(NAVBAT_ORALIGI)


async def main():
    await client.connect()
    if not await client.is_user_authorized():
        print("Telegramga kirish kerak (bir marta): telefon raqam va kod so'raladi.")
        await client.start()
    men = await client.get_me()
    await client.get_dialogs()
    server = await asyncio.start_server(ishla, "127.0.0.1", PORT)
    print("=" * 56)
    print(f" Spektr Telegram yordamchisi ishlayapti: http://localhost:{PORT}")
    print(f" Akkaunt: {men.first_name or ''} {men.last_name or ''} (@{men.username or '-'})")
    print(f" KALIT: {C['kalit']}")
    # Vazifaga havola saqlanadi: aks holda Python uni yig'ib tashlashi mumkin.
    bulut_vazifa = None
    if C.get("bulut"):
        print(" Bulut: ulangan — tugmalar telefon va Safari'dan ham ishlaydi.")
        bulut_vazifa = asyncio.create_task(bulut_tsikli(" ".join(x for x in [men.first_name, men.last_name] if x) or men.username or ""))
    if PLATFORMA:
        try:
            await asyncio.to_thread(PLATFORMA.kir)
            print(" Platforma: ulangan — ballar online.kelajakmediklari.uz ga yoziladi.")
        except Exception as e:  # noqa: BLE001
            print(f" Platforma: {e}")
    print(" Saytda: Sozlamalar → Telegram → kalitni kiriting.")
    print(" To'xtatish: Ctrl+C. Oyna ochiq tursa, «Yubor» va «Hammaga shaxsan» tugmalari ishlaydi.")
    print("=" * 56)
    async with server:
        await server.serve_forever()
    del bulut_vazifa


if __name__ == "__main__":
    try:
        asyncio.run(main())
    except KeyboardInterrupt:
        print("To'xtatildi.")
