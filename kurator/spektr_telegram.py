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
KM kuratorlar guruhiga yuboriladi; oyning 1-kuni — o'tgan oy uchun har kurator bo'yicha oylik hisobot ham.
To'lov va komissiya bu hisobotga kirmaydi.

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

VERSIYA = "2026.11.22a"  # saytdagi «Sozlash holati» shu bilan eski yordamchini taniydi
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

    def nazorat_belgi(self, qiymat, maydon="oxirgiSana"):
        """Hisobot yuborildi (oxirgiSana — kunlik, oxirgiOy — oylik): boshqa yordamchi takror yubormaydi."""
        self._yoz(f"{self.hujjatlar}/nazoratSozlama/asosiy", {maydon: qiymat})

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
            qv = f.get("qv", {})
            qv = int(float(qv.get("integerValue") or qv.get("doubleValue") or 0))
            ishlar.append({"nom": d["name"], "vaqt": d["updateTime"], "yol": fs_matn(f.get("yol")) or "", "usul": fs_matn(f.get("usul")) or "GET", "tana": fs_matn(f.get("tana")), "qv": qv})
        return ishlar

    def ol(self, ish):
        """Ishni egallash: boshqa yordamchi (yoki o'chirilgan ish) bo'lsa — False."""
        st, _ = self._yoz(ish["nom"], {"holat": "ishlanmoqda"}, shart=ish["vaqt"])
        return st == 200

    def tugat(self, ish, status, data):
        self._yoz(ish["nom"], {"holat": "tayyor" if status == 200 else "xato", "status": status, "javob": json.dumps(data, ensure_ascii=False)})

    def yangi_xatlar(self):
        """O'quvchilar saytidan kelgan (NB olgan darsi uchun sababi), kuratorga hali yuborilmagan xatlar."""
        so = {"structuredQuery": {"from": [{"collectionId": "oquvchiXat"}], "where": {"fieldFilter": {"field": {"fieldPath": "kurator"}, "op": "EQUAL", "value": {"stringValue": self.uid}}}, "limit": 50}}
        st, r = http("POST", f"{FS_ILDIZ}/v1/{self.hujjatlar}:runQuery", so, self._token())
        if st != 200:
            raise RuntimeError(f"o'quvchi xatlarini o'qib bo'lmadi ({st}): {r}")
        return xat_qatorlari(r)

    def xat_yuborildi(self, nom):
        self._yoz(nom, {"xabar": True})


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


def xat_qatorlari(r):
    """runQuery javobidan yangi xatlar (xabar yuborilmagan va kurator hali o'qimagan)."""
    natija = []
    for x in r:
        d = x.get("document")
        if not d:
            continue
        f = d.get("fields", {})
        if (f.get("xabar") or {}).get("booleanValue") or (f.get("oqildi") or {}).get("booleanValue"):
            continue
        natija.append({"nom": d["name"], **{k: fs_matn(f.get(k)) or "" for k in ("sahifa", "sana", "sabab", "matn")}})
    return natija


def xat_matni(x, baza):
    """Kuratorga (Saqlangan xabarlar): kim, qaysi dars, sababi. O'quvchi sahifa kaliti bo'yicha topiladi."""
    import html as H

    o = next((q for q in baza.get("oquvchilar", []) if q.get("sahifaKalit") == x["sahifa"]), None)
    g = next((q for q in baza.get("guruhlar", []) if o and q.get("id") == o.get("guruhId")), None)
    kim = f"{o.get('ism', '')} ({g.get('nom', '')})" if o and g else (o or {}).get("ism") or "O'quvchi (topilmadi)"
    sana = f"{x['sana'][8:10]}.{x['sana'][5:7]}" if len(x.get("sana", "")) == 10 else x.get("sana", "")
    qator = [f"<b>O'quvchidan xat:</b> {H.escape(kim, quote=False)}", f"{sana} darsidagi NB — sababi: {H.escape(x.get('sabab') or '-', quote=False)}"]
    if x.get("matn"):
        qator.append(f"«{H.escape(x['matn'][:600], quote=False)}»")
    qator.append("Saytda: Bosh sahifa → «O‘quvchilardan xatlar» (Uzrli / O‘qildi).")
    return "\n".join(qator)


def oquvchi_testlari(oynalar, sid, kun=45, bugun=None):
    """O'quvchining platformadagi testlari (imtihon oynalari, oxirgi `kun` kun): sana (ochilgan kun, Toshkent), dars nomi,
    holat va foiz — sayt o'quvchi sahifasiga qo'yadi (har darsning test natijasi)."""
    bugun = bugun or datetime.now(TOSHKENT).date()
    chegara = (bugun - timedelta(days=kun)).isoformat()
    r = []
    for w in oynalar:
        if w.get("studentId") != sid or not w.get("openFrom"):
            continue
        try:
            sana = mahalliy_sana(w["openFrom"])
        except ValueError:
            continue
        if sana < chegara:
            continue
        f = w.get("scorePercent")
        r.append({"sana": sana, "dars": str(w.get("lessonTitle") or "")[:80], "holat": str(w.get("status") or ""), "foiz": round(float(f)) if isinstance(f, (int, float)) else None, "gacha": str(w.get("openTo") or "")})
    return sorted(r, key=lambda x: x["sana"])[-40:]


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


def kurs_darslari(modullar):
    """Platforma kursidagi darslar: modul «PK-1 | …» / «PK-2 | …», dars «12-dars | 23,24-mavzu» → [{id, n, mav, kitob, nom}]."""
    out = []
    for m in modullar or []:
        mt = str(m.get("title") or "")
        # «PK-2 | …», «PK2», «Premium kimyo-2», «Kimyo 1» — hammasi taniladi.
        km = re.search(r"(?:\bPK|kimyo)\s*-?\s*([12])\b", mt, re.I)
        kitob = f"pk{km.group(1)}" if km else None
        for l in m.get("lessons") or []:
            nom = str(l.get("title") or "")
            n = re.match(r"\s*(\d+)\s*-\s*dars", nom, re.I)
            mav = [int(x) for x in re.findall(r"\d+", nom.split("|", 1)[1])] if "|" in nom else []
            if l.get("id"):
                out.append({"id": l["id"], "n": int(n.group(1)) if n else None, "mav": mav, "kitob": kitob, "nom": nom.strip()})
    return out


def test_darslari(darslar, kitob=None, dars=None, mavzular=()):
    """O'quvchining bugungi mavzulari (kitob § raqamlari) uchun platformadagi dars(lar). Raqamlar kitobdan-kitobga
    farq qilishi mumkin (sayt PK-2 rejasi 86, platformaniki 84 dars), shuning uchun asosan § bo'yicha topiladi;
    bir § ikki darsda bo'lsa (37, 81, 94) — dars raqami mos kelgani olinadi."""
    shu = [x for x in darslar if x["kitob"] == kitob] if kitob else []
    kerak = sorted({int(t) for t in mavzular})
    # Kitob bo'yicha ajratilgan ro'yxatda mavzu topilmasa (modul nomi boshqacha bo'lishi mumkin) — butun kursdan qidiriladi.
    hammasi = shu if shu and (not kerak or any(t in x["mav"] for x in shu for t in kerak)) else list(darslar)
    if not kerak:
        return [x for x in hammasi if dars and x["n"] == dars][:1]
    tanlov, qoplangan = [], set()
    for t in kerak:
        if t in qoplangan:
            continue
        nomzod = [x for x in hammasi if t in x["mav"]]
        if not nomzod:
            continue
        x = min(nomzod, key=lambda x: (x["n"] != dars, -len(set(x["mav"]) & set(kerak)), x["n"] or 0))
        tanlov.append(x)
        qoplangan |= set(x["mav"])
    return tanlov


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

    def test_och(self, d):
        """Dars boshida testlarni ochish. d = {guruh: platformaId, soat?: 24, oquvchilar: [{k, studentId, kitob?, dars?, mavzular: [§...]}]}.
        Har o'quvchiga o'z mavzusi testi (imtihon oynasi) ochiladi; ishlab bo'lingan yoki ochiq turgani platformaning o'zi o'tkazib yuboradi."""
        gid = str(d.get("guruh") or "")
        if not gid:
            raise ValueError("guruh ko'rsatilmagan")
        soat = max(1, min(72, int(d.get("soat") or 24)))
        s = rsc_matn(self.sahifa(f"/curator/groups/{urllib.parse.quote(gid)}"))
        darslar = kurs_darslari(json_keyin(s, "modules") or [])
        if not darslar:
            return {"ok": False, "xato": "Platformada guruhning kursi (darslar ro'yxati) topilmadi."}
        items, natija = [], []
        for o in d.get("oquvchilar") or []:
            sid = str(o.get("studentId") or "")
            if not sid:
                natija.append({"k": o.get("k"), "holat": "xato", "xato": "platformada topilmagan o'quvchi"})
                continue
            ds = test_darslari(darslar, o.get("kitob"), o.get("dars"), o.get("mavzular") or [])
            if not ds:
                natija.append({"k": o.get("k"), "holat": "xato", "xato": "platformada mos dars topilmadi"})
                continue
            items += [{"studentId": sid, "lessonId": x["id"]} for x in ds]
            natija.append({"k": o.get("k"), "holat": "ok", "darslar": [x["nom"] for x in ds]})
        if not items:
            return {"ok": False, "xato": "Ochiladigan test topilmadi.", "natija": natija}
        hozir = datetime.now(timezone.utc).replace(second=0, microsecond=0)
        z = lambda t: t.isoformat().replace("+00:00", "Z")
        tana = {"groupId": gid, "items": items, "openFrom": z(hozir), "openTo": z(hozir + timedelta(hours=soat))}
        st, txt = 0, ""
        for _ in range(2):
            st, url, txt = self._so("POST", "/api/curator/lesson-exam-windows/bulk", tana)
            if st in (401, 403) or "/login" in url:
                self.kir()
                continue
            break
        try:
            j = json.loads(txt or "{}")
        except ValueError:
            j = {}
        if not (200 <= st < 300) or not isinstance(j, dict) or j.get("ok") is False:
            xato = j.get("error") if isinstance(j, dict) else None
            return {"ok": False, "xato": xato or f"Platforma testlarni ochmadi ({st}).", "natija": natija}
        return {"ok": True, "ochildi": int(j.get("created") or 0), "otkazildi": int(j.get("skipped") or 0), "sabablar": j.get("reasons") or {}, "soat": soat, "natija": natija}

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
            oynalar = json_keyin(s, "initialWindows") or []
            for x in json.loads(s[m.start() + len('"students":'):m.end() - 1]):
                k = s.find(f'/student/{x["id"]}"')
                tel = re.findall(r'"children":"(\+998\d{9})"', s[max(0, k - 1500):k]) if k >= 0 else []
                oquvchilar.append({"platformaUuid": x["id"], "ism": (x.get("fullName") or "").strip(), "telefon": tel[-1] if tel else "", "guruhPlatformaId": g["id"], "testlar": oquvchi_testlari(oynalar, x["id"])})
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
NAZORAT_BOSHI = "2026-11-02"  # bundan oldingi (Spektr ishlatilmagan) kunlar «qayd etilmagan» deb sanalmaydi
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
            boshi = g["boshlangan"] if g.get("boshlangan") and g["boshlangan"] < NAZORAT_BOSHI else NAZORAT_BOSHI
            if not ds and jv and rejadami(g, sana) and sana >= boshi:
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


def _oy_oraligi(oy):
    y, m = int(oy[:4]), int(oy[5:7])
    keyingi = datetime(y + (m == 12), m % 12 + 1, 1).date()
    return f"{oy}-01", (keyingi - timedelta(days=1)).isoformat()


def _oy_qosh(oy, n):
    y, m = int(oy[:4]), int(oy[5:7]) - 1 + n
    return f"{y + m // 12:04d}-{m % 12 + 1:02d}"


def nazorat_oylik_yig(kuratorlar, oy, hozir):
    """Oylik hisobot (har kurator): intizom bali o'tgan oy bilan, darslar, o'z vaqtida, savol-javob, kelish, qayd etilmaganlar.
    kuratorlar — nazorat(o'tgan oy boshi, shu oy oxiri)."""
    dan, gacha = _oy_oraligi(oy)
    gacha = min(gacha, datetime.fromtimestamp(hozir / 1000, TOSHKENT).date().isoformat())
    o_dan, o_gacha = _oy_oraligi(_oy_qosh(oy, -1))
    oldingi = {x["ism"]: x for x in kurator_reytingi(kuratorlar, o_dan, o_gacha, hozir)}
    joriy = kurator_reytingi(kuratorlar, dan, gacha, hozir)
    bloklar = [f"📅 <b>Oylik hisobot · {OYLAR[int(oy[5:7]) - 1].capitalize()} {oy[:4]}</b>\n<i>Kuratorlar intizomi — o'tgan oy bilan solishtirib.</i>"]
    for i, x in enumerate(joriy, 1):
        k = next(k for k in kuratorlar if k["p"].get("ism", "") == x["ism"])
        o = oldingi.get(x["ism"], {})
        farq = ""
        if x["ball"] is not None and o.get("ball") is not None and x["ball"] != o["ball"]:
            farq = f" ({'▲' if x['ball'] > o['ball'] else '▼'}{abs(x['ball'] - o['ball'])})"
        qatorlar, s = [], date_iso(dan)
        while s.isoformat() <= gacha:
            qatorlar += [{**q, "sana": s.isoformat()} for q in kun_jadvali([k], s.isoformat(), hozir)]
            s += timedelta(days=1)
        otdi = [q["dars"] for q in qatorlar if q["holat"] == "otdi"]
        sj = sum(d.get("sj", 0) for d in otdi)
        t = [f"{i}. <b>{_e(x['ism'])}</b> — intizom <b>{x['ball'] if x['ball'] is not None else '—'}</b>{farq}"]
        qism = [f"darslar {x['bajarildi']}/{x['rejada']}"]
        if x["ozVaqtida"] is not None:
            qism.append(f"o'z vaqtida {x['ozVaqtida']}%")
        if otdi:
            qism.append(f"savol-javob {sj // 60} soat {sj % 60} daq (o'rt. {x['sj']} daq)")
        if x["davomat"] is not None:
            qism.append(f"kelish {x['davomat']}%")
        if x["yuborildi"] is not None:
            qism.append(f"natija yuborildi {x['yuborildi']}%")
        t.append("    " + " · ".join(qism))
        yoq = [q for q in qatorlar if q["holat"] == "yoq"]
        if yoq:
            t.append(f"    ❌ qayd etilmagan ({len(yoq)}): " + _ismlar((f"{_kun(q['sana'])} {_e(q['guruh'])}" for q in yoq), 8))
        kech = [q for q in qatorlar if ((q["dars"] or {}).get("kech") or 0) > KECH_CHEGARA]
        if kech:
            t.append(f"    ⏰ kech boshlangan: {len(kech)} ta dars")
        bloklar.append("\n".join(t))
    if len(bloklar) == 1:
        bloklar.append("Bu oyda kurator ma'lumoti yo'q.")
    bloklar[-1] += "\n\n<i>Spektr · batafsil: kurator sayti → Kuratorlar nazorati → Oy.</i>"
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


SABAB_NOMI = {"tayyorlanmadi": "tayyorlana olmagan", "internet": "internet", "svet": "svet", "kasal": "kasal", "oilaviy": "oilaviy tadbir",
              "oqish": "maktab/o'qish", "ish": "ish/mashg'ulot", "safar": "safar", "unutdi": "esdan chiqqan", "qiynalyapti": "qiynalyapti", "boshqa": "boshqa"}
DARS_HISOBOT_SOAT = 6  # yakunlanganiga shundan ko'p bo'lgan dars hisobotga kirmaydi (birinchi ishga tushganda eski darslar yog'ilmasin)


def dars_hisobot_matni(kurator, d):
    """Bitta yakunlangan dars — boshliqqa (Saqlangan xabarlar). To'lov ma'lumoti yo'q."""
    t = [f"📋 <b>{_e(kurator)}</b> · {_e(d.get('guruh', ''))} · {_e(d.get('sana', ''))[8:10]}.{_e(d.get('sana', ''))[5:7]}"]
    bosh = d.get("bosh") or "—"
    vaqt = f"Reja {d['reja']} · boshladi {bosh}" if d.get("reja") else f"Boshladi {bosh}"
    if d.get("kech") is not None and d["kech"] > 1:
        vaqt += f" (<b>{d['kech']} daq kech</b>)"
    t.append(vaqt + (f" · tugadi {d['oxir']}" if d.get("oxir") else ""))
    t.append(f"Keldi {d.get('keldi', 0)}/{d.get('jami', 0)} · so'raldi {d.get('soralgan', 0)} · {d.get('savol', 0)} savol · SJ {d.get('sj', 0)} daq"
             + (f" · ball {d['ball']}" if d.get("ball") is not None else ""))
    n = d.get("nbIsh")
    if n:
        q = [f"{n['aniq']}/{n['kelmagan']} sababi aniq"]
        if n.get("qongiroq"):
            q.append(f"{n['qongiroq']} qo'ng'iroq")
        if n.get("kuzatuv"):
            q.append(f"kuzatuv qolgan {n['kuzatuv']}")
        if n.get("umidsiz"):
            q.append(f"umidsiz {n['umidsiz']}")
        tf = ", ".join(f"{SABAB_NOMI.get(k, k)}{f' ×{v}' if v > 1 else ''}" for k, v in (n.get("toifa") or {}).items())
        t.append("NB ishi: " + " · ".join(q) + (f" ({_e(tf)})" if tf else ""))
    elif d.get("nb"):
        t.append(f"NB: {d['nb']} kishi")
    a = d.get("amaliy")
    if a:
        t.append(f"Amaliy (PK-1): {a['oquvchi']} o'quvchi, {a['masala']} masala, to'g'ri {a['togri']}")
    reg = d.get("reg") or {}
    bandlar = reg.get("bandlar") or []
    if bandlar:
        ok = sum(1 for b in bandlar if b.get("holat") == "ok")
        buz = [f"{b['n']}. {b.get('nom', '')}" for b in bandlar if b.get("holat") == "buzildi"]
        kut = sum(1 for b in bandlar if b.get("holat") == "kutilmoqda")
        t.append(f"Reglament: {ok} band joyida" + (f", ⏳ {kut} muddati bor" if kut else "") + (f"\n❗ Buzilgan: {_e('; '.join(buz))}" if buz else ""))
    yub = [x for x, k in (("shaxsan", "shaxsiy"), ("platforma", "platforma"), ("guruhga", "tg")) if d.get(k)]
    t.append("Natija yuborildi: " + (", ".join(yub) if yub else "<b>hali yo'q</b>"))
    return "\n".join(t)


def yangi_dars_hisobotlari(kuratorlar, yuborilgan, hozir_ms):
    """Hisobot yuborilmagan, yaqinda yakunlangan darslar: [(kalit, matn)]."""
    out = []
    for k in kuratorlar:
        ism = (k.get("p") or {}).get("ism") or "Kurator"
        for d in k.get("darslar", []):
            if d.get("holat") != "yakunlangan" or not d.get("tugash"):
                continue
            if hozir_ms - d["tugash"] > DARS_HISOBOT_SOAT * 3600_000:
                continue
            kalit = f"{k['uid']}:{d['id']}"
            if kalit in yuborilgan:
                continue
            out.append((kalit, dars_hisobot_matni(ism, d)))
    return out


async def nazorat_hisobot(sana, yubor, avto=False, oy=None):
    """Kunlik (yoki `oy` berilsa — oylik) nazorat hisoboti (boshliq akkaunti).
    avto — vaqti kelganda: o'chirilgan yoki allaqachon yuborilgan bo'lsa jim o'tadi."""
    if not BULUT:
        raise ValueError("Nazorat hisoboti uchun yordamchi bulutga ulangan bo'lishi kerak (python3 spektr_telegram.py --bulut)")
    soz = await asyncio.to_thread(BULUT.nazorat_sozlama)
    belgi = "oxirgiOy" if oy else "oxirgiSana"
    if avto and (not soz.get("chat") or soz.get("yoqilgan") is False or (soz.get(belgi) or "") >= (oy or sana)):
        return {"ok": True, "xabarlar": [], "yuborildi": False}
    hozir = int(time.time() * 1000)
    if oy:
        kuratorlar = await asyncio.to_thread(BULUT.nazorat, _oy_oraligi(_oy_qosh(oy, -1))[0], _oy_oraligi(oy)[1])
        xabarlar = nazorat_oylik_yig(kuratorlar, oy, hozir)
    else:
        kuratorlar = await asyncio.to_thread(BULUT.nazorat, (date_iso(sana) - timedelta(days=6)).isoformat(), sana)
        xabarlar = nazorat_yig(kuratorlar, sana, hozir)
    if yubor:
        if not soz.get("chat"):
            raise ValueError("KM kuratorlar guruhi tanlanmagan: saytda Kuratorlar nazorati → Hisobot → «Telegramdan tanlash».")
        ent = await chat_ol(soz["chat"])
        for x in xabarlar:
            await bitta_yubor(ent, x)
            await asyncio.sleep(1)
        await asyncio.to_thread(BULUT.nazorat_belgi, oy or sana, belgi)
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


NATIJA_FAYL_URL = "https://behruz051122.github.io/kimyo-mock/kurator/natija_fayl.py"


def natija_fayl_modul():
    """natija_fayl.py shu dastur yonida bo'lmasa — kurator saytidan bir marta yuklab olinadi (deploy.sh boshqa papkaga qo'ygan bo'lishi mumkin)."""
    if str(PAPKA) not in sys.path:
        sys.path.insert(0, str(PAPKA))
    try:
        import natija_fayl
        return natija_fayl
    except ImportError:
        pass
    with urllib.request.urlopen(NATIJA_FAYL_URL, timeout=30) as r:
        kod = r.read()
    if b"def yasash" not in kod:
        raise RuntimeError("saytdagi natija_fayl.py noto'g'ri")
    (PAPKA / "natija_fayl.py").write_bytes(kod)
    print("  natija_fayl.py saytdan yuklab olindi.")
    import natija_fayl
    return natija_fayl


async def natija_fayl_yubor(d):
    """Saytdan kelgan natijalar → PDF (reyting, har o'quvchi beti, tahlil va qarzdorlik) → guruhga bitta fayl. Fayl yasab bo'lmasa — ok=False, faylsiz=True
    (sayt o'shanda eski usulda matn bilan yuboradi)."""
    try:
        natija_fayl = await asyncio.to_thread(natija_fayl_modul)
    except Exception as e:  # noqa: BLE001
        return {"ok": False, "faylsiz": True, "xato": f"natija_fayl.py topilmadi yoki ochilmadi ({e}) — yangi build bilan deploy.sh ni qayta ishga tushiring."}
    try:
        import reportlab  # noqa: F401
    except ImportError:
        return {"ok": False, "faylsiz": True, "xato": "PDF uchun kutubxona yo'q: terminalda «pip3 install reportlab» ni bir marta bajaring."}
    ent = await chat_ol(d.get("chat", ""))
    # Nazorat testi: platformadagi test oynalari (dars boshidan keyin ochilganlar) — har o'quvchiga natijasi.
    t = d.get("test") or {}
    if PLATFORMA and t.get("guruhlar"):
        try:
            dan = datetime.fromtimestamp((t.get("dan") or 0) / 1000, tz=timezone.utc).isoformat().replace("+00:00", "Z")
            oynalar = []
            for gid in [str(x) for x in t["guruhlar"]][:6]:
                oynalar += (await asyncio.to_thread(PLATFORMA.guruh, gid))["oynalar"]
            by = {}
            for w in oynalar:
                if str(w.get("openFrom") or "") >= dan[:19]:
                    by.setdefault(w.get("studentId"), []).append({"dars": w.get("lessonTitle") or "", "holat": w.get("status") or "", "foiz": w.get("scorePercent")})
            for o in d.get("oquvchilar") or []:
                if o.get("uuid"):
                    o["test"] = by.get(o["uuid"], [])
            d["testOlindi"] = True
        except Exception as e:  # noqa: BLE001
            print("  Nazorat testi olinmadi:", e)
    papka = PAPKA / "natijalar"
    papka.mkdir(exist_ok=True)
    nom = natija_fayl.fayl_nomi(d)
    (papka / nom).with_suffix(".json").write_text(json.dumps(d, ensure_ascii=False, indent=1), "utf-8")
    pdf, _ = await asyncio.to_thread(natija_fayl.yasash, d)
    yol = papka / nom
    yol.write_bytes(pdf)
    izoh = f"{d.get('guruh', '')} · {d.get('sana', '')} — savol-javob natijalari.\n1-betda reyting, keyingi betlarda har bir o‘quvchining savollari va tahlili."
    for _ in range(3):
        try:
            await client.send_file(ent, str(yol), caption=izoh, force_document=True)
            break
        except errors.FloodWaitError as e:
            if e.seconds > 300:
                raise
            await asyncio.sleep(e.seconds + 1)
    print(f"  Natija fayli yuborildi: {nom} ({len(pdf) // 1024} KB)")
    return {"ok": True, "yuborildi": 1, "fayl": nom}


def matn_norm(s):
    """Taqqoslash uchun: HTML teglari va belgilari olib tashlanadi, bo'shliqlar bittaga."""
    import html as H

    return " ".join(H.unescape(re.sub(r"<[^>]+>", "", s or "")).split())


def takrorlar(xabarlar, oyna_s=3 * 3600, eng_kam=15):
    """Bir suhbatdagi O'ZIMIZ yuborgan bir xil matnli xabarlar: birinchisi qoladi, undan `oyna_s` ichida
    yuborilgan keyingi nusxalar — o'chiriladigan id'lar. xabarlar: [{id, out, t (soniya), matn}]."""
    birinchi, ochir = {}, []
    for x in sorted(xabarlar, key=lambda x: (x["t"], x["id"])):
        m = matn_norm(x.get("matn"))
        if not x.get("out") or len(m) < eng_kam:
            continue
        if m in birinchi and x["t"] - birinchi[m] <= oyna_s:
            ochir.append(x["id"])
        else:
            birinchi[m] = x["t"]
    return ochir


def oldin_yuborilganmi(xabarlar, matn, hozir_s, oyna_s):
    """Shu matn (normallashgan) bizdan oxirgi `oyna_s` ichida ketganmi — takror yuborilmasin."""
    m = matn_norm(matn)
    return len(m) >= 15 and any(x.get("out") and hozir_s - x["t"] <= oyna_s and matn_norm(x.get("matn")) == m for x in xabarlar)


async def oxirgi_xabarlar(kimga, limit):
    return [{"id": m.id, "out": m.out, "t": m.date.timestamp(), "matn": m.message or ""} async for m in client.iter_messages(kimga, limit=limit)]


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
        oy = str(d["oy"])[:7] if d.get("oy") else None
        try:
            return 200, await nazorat_hisobot(sana, bool(d.get("yubor")), oy=oy)
        except PermissionError:
            return 403, {"ok": False, "xato": "Bu kurator akkaunti boshliq emas: nazorat hisoboti faqat boshliq akkauntida."}
    if usul == "POST" and u.path == "/platforma":
        if not PLATFORMA:
            return 400, {"ok": False, "xato": "Platforma paroli kiritilmagan: kompyuterda «python3 spektr_telegram.py --platforma» bilan qayta ishga tushiring."}
        return 200, await asyncio.to_thread(PLATFORMA.baholar, json.loads(tana or b"{}"))
    if usul == "POST" and u.path == "/platforma/test":
        # Dars boshida (kurator rozi bo'lsa): har o'quvchiga bugungi mavzusi testini ochish.
        if not PLATFORMA:
            return 400, {"ok": False, "xato": "Platforma paroli kiritilmagan: kompyuterda «python3 spektr_telegram.py --platforma» bilan qayta ishga tushiring."}
        d = json.loads(tana or b"{}")
        r = await asyncio.to_thread(PLATFORMA.test_och, d)
        e = d.get("eslatma")
        if isinstance(e, dict) and e.get("chat") and e.get("qachon") and r.get("ok") is not False:
            # Ertasi kuni testni hali yechmaganlarni guruhda eslatish (bulut_tsikli tekshiradi).
            ruy = [x for x in C.get("eslatmalar", []) if not (x.get("guruh") == d.get("guruh") and x.get("chat") == e["chat"] and abs(int(x.get("qachon", 0)) - int(e["qachon"])) < 6 * 3600 * 1000)]
            ruy.append({"guruh": str(d.get("guruh")), "chat": str(e["chat"]), "qachon": int(e["qachon"]), "vaqt": int(time.time() * 1000), "nom": str(e.get("nom") or ""),
                        "oquvchilar": [{"sid": str(o.get("studentId")), "ism": str(o.get("ism") or ""), "username": o.get("username"), "telegramId": o.get("telegramId")} for o in e.get("oquvchilar") or [] if o.get("studentId")]})
            C["eslatmalar"] = ruy[-40:]
            SOZLAMA.write_text(json.dumps(C, ensure_ascii=False, indent=2), "utf-8")
            r["eslatma"] = True
        return 200, r
    if usul == "POST" and u.path == "/test-qarz/royxat":
        # Kunlik: ochilganiga bir sutkadan oshgan, yechilmagan testlar (kurator saytida ro'yxat, ptichkalar bilan).
        if not PLATFORMA:
            return 400, {"ok": False, "xato": "Platforma paroli kiritilmagan."}
        d = json.loads(tana or b"{}")
        hozir = int(time.time() * 1000)
        natija = {}
        for gid in [str(x) for x in d.get("guruhlar") or []][:12]:
            oyn = (await asyncio.to_thread(PLATFORMA.guruh, gid))["oynalar"]
            sidlar = sorted({w.get("studentId") for w in oyn if w.get("studentId")})
            natija[gid] = [{"sid": sid, "darslar": [{"id": k, **v} for k, v in q.items()]} for sid in sidlar if (q := kunlik_qarzlar(oyn, sid, hozir, int(d.get("soat") or 24)))]
        return 200, {"ok": True, "guruhlar": natija}
    if usul == "POST" and u.path == "/test-qarz/och":
        # Kurator tanlaganlarga: testni yana 24 soatga ochish va shaxsan yozish (Telegram ulanmaganlarga — faqat ochiladi).
        if not PLATFORMA:
            return 400, {"ok": False, "xato": "Platforma paroli kiritilmagan."}
        d = json.loads(tana or b"{}")
        gid, chat = str(d.get("guruh") or ""), str(d.get("chat") or "")
        soat = max(1, min(72, int(d.get("soat") or 24)))
        oq = [o for o in d.get("oquvchilar") or [] if o.get("sid") and o.get("darslar")][:80]
        if not gid or not oq:
            return 400, {"ok": False, "xato": "Ochiladigan test yo'q."}
        # Ro'yxat saytda keshda turgan bo'lishi mumkin: ochishdan oldin platformadan yangidan tekshiriladi —
        # shu orada yechgan yoki testi hali ochiq turgan o'quvchiga test ochilmaydi va xabar ham bormaydi.
        oyn = (await asyncio.to_thread(PLATFORMA.guruh, gid))["oynalar"]
        hozir_ms = int(time.time() * 1000)
        otkazildi = 0
        for o in oq:
            hali = kunlik_qarzlar(oyn, o["sid"], hozir_ms, 0)
            nomlar = dict(zip(o["darslar"], o.get("nomlar") or []))
            yangi = [lid for lid in o["darslar"] if lid in hali]
            otkazildi += len(o["darslar"]) - len(yangi)
            o["darslar"], o["nomlar"] = yangi, [nomlar.get(lid) or hali[lid]["nom"] for lid in yangi]
        oq = [o for o in oq if o["darslar"]]
        items = [{"studentId": o["sid"], "lessonId": lid} for o in oq for lid in o["darslar"]]
        if not items:
            return 200, {"ok": True, "ochildi": 0, "yuborildi": 0, "otkazildi": otkazildi}
        z = lambda t: t.isoformat().replace("+00:00", "Z")  # noqa: E731
        hz = datetime.now(timezone.utc).replace(second=0, microsecond=0)
        st, _, txt = await asyncio.to_thread(PLATFORMA._so, "POST", "/api/curator/lesson-exam-windows/bulk", {"groupId": gid, "items": items, "openFrom": z(hz), "openTo": z(hz + timedelta(hours=soat))})
        if not 200 <= st < 300:
            return 200, {"ok": False, "xato": f"Platforma testni ochmadi ({st}): {str(txt)[:200]}"}
        tugash = datetime.fromtimestamp(time.time() + soat * 3600, TOSHKENT)
        qabul = [{"k": o.get("k"), "id": o.get("telegramId"), "username": o.get("username"), "xabarlar": [qarz_xabari(o.get("nomlar") or [], tugash)]} for o in oq if o.get("telegramId") or o.get("username")]
        yuborildi = 0
        if qabul and chat:
            _, r = await marshrut("POST", "/shaxsiy", {"x-spektr-kalit": C["kalit"]}, json.dumps({"chat": chat, "qabul": qabul}).encode())
            yuborildi = sum(1 for x in (r.get("natija") or []) if x.get("holat") == "ok")
        print(f"Test qarzi (kunlik): {len(items)} ta test ochildi, {yuborildi} ta xabar")
        return 200, {"ok": True, "ochildi": len(items), "yuborildi": yuborildi, "otkazildi": otkazildi, "tugash": int(tugash.timestamp() * 1000)}
    if usul == "POST" and u.path == "/platforma/ballar":
        # Xolislik indeksi: guruhning platformadagi baholari (og'zaki theoryScore va test examScore) — dars nomlari bilan.
        if not PLATFORMA:
            return 400, {"ok": False, "xato": "Platforma paroli kiritilmagan."}
        d = json.loads(tana or b"{}")
        natija = {}
        for gid in [str(x) for x in d.get("guruhlar") or []][:10]:
            def ol(g=gid):
                s = rsc_matn(PLATFORMA.sahifa(f"/curator/groups/{urllib.parse.quote(g)}"))
                darslar = {x["id"]: x["nom"] for x in kurs_darslari(json_keyin(s, "modules") or [])}
                return {"baholar": json_keyin(s, "gradingInitial") or {}, "darslar": darslar}
            natija[gid] = await asyncio.to_thread(ol)
        return 200, {"ok": True, "guruhlar": natija}
    if usul == "POST" and u.path == "/oldindan":
        # Darsdan oldin ogohlantirganlar: «dan»dan keyin o'quvchi guruh chatiga yoki kuratorga shaxsan yozgan matnlar.
        d = json.loads(tana or b"{}")
        ent = await chat_ol(d.get("chat", ""))
        if ent == "me":
            raise ValueError("Guruh tanlanishi kerak")
        dan = datetime.fromtimestamp((d.get("dan") or 0) / 1000, tz=timezone.utc)
        qabul = [x for x in d.get("qabul", []) if isinstance(x, dict)][:80]
        id_k = {str(x.get("id")): x.get("k") for x in qabul if x.get("id")}
        un_k = {str(x.get("username")).lstrip("@").lower(): x.get("k") for x in qabul if x.get("username")}
        natija = {}
        async for m in client.iter_messages(ent, limit=800):
            if m.date < dan:
                break
            if m.out or not (m.message or "").strip():
                continue
            k = id_k.get(str(m.sender_id))
            if not k and m.sender and getattr(m.sender, "username", None):
                k = un_k.get(m.sender.username.lower())
            if k:
                natija.setdefault(k, []).append({"matn": m.message.strip()[:300], "vaqt": int(m.date.timestamp() * 1000), "joy": "guruh"})
        for x in qabul:
            kim = x.get("id") or x.get("username")
            if not kim:
                continue
            try:
                e = await client.get_entity(int(kim) if str(kim).isdigit() else str(kim))
                async for m in client.iter_messages(e, limit=15):
                    if m.date < dan:
                        break
                    if not m.out and (m.message or "").strip():
                        natija.setdefault(x.get("k"), []).append({"matn": m.message.strip()[:300], "vaqt": int(m.date.timestamp() * 1000), "joy": "shaxsiy"})
            except Exception:  # noqa: BLE001
                pass
            await asyncio.sleep(0.3)
        return 200, {"ok": True, "natija": natija}
    if usul == "POST" and u.path == "/konspekt-tg":
        # Konspekt tekshiruvi: guruh chatiga «dan»dan keyin rasm/fayl (konspekt) tashlaganlar — kim, nechta, qachon.
        d = json.loads(tana or b"{}")
        ent = await chat_ol(d.get("chat", ""))
        if ent == "me":
            raise ValueError("Guruh tanlanishi kerak")
        dan = datetime.fromtimestamp((d.get("dan") or 0) / 1000, tz=timezone.utc)
        kim = {}
        async for m in client.iter_messages(ent, limit=1500):
            if m.date < dan:
                break
            if m.out or not m.sender_id or not (m.photo or m.document):
                continue
            k = kim.setdefault(str(m.sender_id), {"id": str(m.sender_id), "soni": 0, "vaqt": 0, "matn": ""})
            k["soni"] += 1
            k["vaqt"] = max(k["vaqt"], int(m.date.timestamp() * 1000))
            if (m.message or "").strip() and not k["matn"]:
                k["matn"] = m.message.strip()[:120]
        for k in kim.values():
            try:
                e = await client.get_entity(int(k["id"]))
                k["username"] = getattr(e, "username", None)
            except Exception:  # noqa: BLE001
                pass
        return 200, {"ok": True, "tashladi": list(kim.values())}
    if usul == "POST" and u.path == "/konspekt-reaksiya":
        # Baholangan konspekt: o'quvchining «dan»dan keyingi rasm/fayl xabarlariga reaksiya (🔥/👍/👌).
        from telethon import functions, types
        d = json.loads(tana or b"{}")
        ent = await chat_ol(d.get("chat", ""))
        if ent == "me":
            raise ValueError("Guruh tanlanishi kerak")
        dan = datetime.fromtimestamp((d.get("dan") or 0) / 1000, tz=timezone.utc)
        qabul = [x for x in d.get("qabul", []) if isinstance(x, dict)][:80]
        by_id = {str(x.get("id")): x for x in qabul if x.get("id")}
        by_un = {str(x.get("username")).lstrip("@").lower(): x for x in qabul if x.get("username")}
        xabarlar = {}
        async for m in client.iter_messages(ent, limit=1500):
            if m.date < dan:
                break
            if m.out or not m.sender_id or not (m.photo or m.document):
                continue
            q = by_id.get(str(m.sender_id))
            if not q and by_un:
                try:
                    e = await m.get_sender()
                    q = by_un.get((getattr(e, "username", None) or "").lower())
                except Exception:  # noqa: BLE001
                    q = None
            if q:
                xabarlar.setdefault(q.get("k"), (q, []))[1].append(m.id)
        natija = []
        for q in qabul:
            if q.get("k") not in xabarlar:
                natija.append({"k": q.get("k"), "holat": "topilmadi"})
                continue
            _, ids = xabarlar[q.get("k")]
            soni = 0
            for mid in ids[:6]:
                try:
                    await client(functions.messages.SendReactionRequest(peer=ent, msg_id=mid, reaction=[types.ReactionEmoji(emoticon=q.get("emoji") or "👍")]))
                    soni += 1
                    await asyncio.sleep(random.uniform(0.6, 1.2))
                except errors.FloodWaitError as e:
                    await asyncio.sleep(min(e.seconds, 30) + 1)
                except Exception as e:  # noqa: BLE001 — guruhda bu reaksiya o'chirilgan bo'lishi mumkin
                    print("  reaksiya qo'yilmadi:", e)
            natija.append({"k": q.get("k"), "holat": "ok" if soni else "xato", "soni": soni})
        return 200, {"ok": True, "natija": natija}
    if usul == "POST" and u.path == "/nb-javoblar":
        # Kelmaganlar NB xabariga nima deb javob yozgani: «dan» (ms) dan keyingi kiruvchi shaxsiy xabarlar (o'qiladi, yuborilmaydi).
        d = json.loads(tana or b"{}")
        ent = await chat_ol(d.get("chat", ""))
        if ent == "me":
            raise ValueError("Guruh tanlanishi kerak")
        dan = datetime.fromtimestamp((d.get("dan") or 0) / 1000, tz=timezone.utc)
        azolar = [a for a in await client.get_participants(ent) if not a.bot and not a.deleted]
        by_id = {str(a.id): a for a in azolar}
        by_un = {a.username.lower(): a for a in azolar if a.username}
        natija = []
        for q in [x for x in d.get("qabul", []) if isinstance(x, dict)][:60]:
            a = by_id.get(str(q.get("id") or "")) or by_un.get(str(q.get("username") or "").lstrip("@").lower())
            if not a:
                natija.append({"k": q.get("k"), "holat": "topilmadi"})
                continue
            xabarlar = []
            async for m in client.iter_messages(a, limit=15):
                if m.date < dan:
                    break
                if not m.out and (m.message or "").strip():
                    xabarlar.append({"matn": m.message.strip()[:400], "vaqt": int(m.date.timestamp() * 1000)})
            natija.append({"k": q.get("k"), "holat": "ok", "javoblar": list(reversed(xabarlar))})
            await asyncio.sleep(0.4)
        return 200, {"ok": True, "natija": natija}
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
        n = takror = 0
        oldingi = await oxirgi_xabarlar(ent, 20) if ent != "me" else []
        for x in xabarlar:
            if oldin_yuborilganmi(oldingi, x, time.time(), 6 * 3600):
                takror += 1
                print("  takror — guruhga qayta yuborilmadi")
                continue
            await bitta_yubor(ent, x)
            n += 1
            print(f"  yuborildi {n}/{len(xabarlar)}")
            await asyncio.sleep(1.2)
        return 200, {"ok": True, "yuborildi": n, "takror": takror}
    if usul == "POST" and u.path == "/natija-fayl":
        # Guruhga bitta PDF: 1-bet reyting, keyin har o'quvchining beti, tahlil va qarzdorlik (natija_fayl.py).
        d = json.loads(tana or b"{}")
        return 200, await natija_fayl_yubor(d)
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
                # Shu xabar oxirgi 24 soatda allaqachon ketgan bo'lsa (tugma ikki marta bosilgan) — qayta yuborilmaydi.
                oldingi = await oxirgi_xabarlar(a, 15)
                yangi = [x for x in xabarlar if not oldin_yuborilganmi(oldingi, x, time.time(), 24 * 3600)]
                if not yangi:
                    natija.append({"k": k, "holat": "ok", "takror": True})
                    print(f"  shaxsan {i + 1}/{len(qabul)}: {a.first_name or a.id} — avval yuborilgan, takrorlanmadi")
                    continue
                for x in yangi:
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
    if usul == "POST" and u.path == "/takror-ochir":
        # Ikki marta ketgan shaxsiy xabarlarning ortiqcha nusxasini (ikkala tomondan) o'chirish. ochir=false — faqat ro'yxat.
        d = json.loads(tana or b"{}")
        soat = max(1, min(48, int(d.get("soat") or 24)))
        ochir = d.get("ochir") is True
        chegara = datetime.now(timezone.utc) - timedelta(hours=soat)
        yozilmasin = {str(x) for x in C.get("yozilmasin", [])}
        men_id = (await client.get_me()).id
        natija, jami = [], 0
        async for dlg in client.iter_dialogs(limit=400):
            if not dlg.date or dlg.date < chegara:
                continue  # (qadalgan suhbatlar tepada turadi — shuning uchun «break» emas)
            e = dlg.entity
            if not dlg.is_user or getattr(e, "bot", False) or e.id == men_id or str(e.id) in yozilmasin:
                continue
            xs = [x for x in await oxirgi_xabarlar(e, 40) if x["t"] >= chegara.timestamp()]
            ids = takrorlar(xs)
            if not ids:
                continue
            nusxa = next(x["matn"] for x in xs if x["id"] == ids[0])
            q = {"ism": " ".join(x for x in [e.first_name, e.last_name] if x) or e.username or str(e.id), "soni": len(ids), "matn": matn_norm(nusxa)[:70]}
            if ochir:
                try:
                    await client.delete_messages(e, ids, revoke=True)
                    q["ochirildi"] = True
                except errors.FloodWaitError as fe:
                    natija.append({**q, "xato": f"Telegram cheklovi {fe.seconds} s"})
                    return 200, {"ok": True, "natija": natija, "jami": jami, "toxtadi": True}
                except Exception as ex:  # noqa: BLE001
                    q["xato"] = str(ex)[:120]
                await asyncio.sleep(random.uniform(1, 2))
            jami += len(ids)
            natija.append(q)
        return 200, {"ok": True, "natija": natija, "jami": jami, "ochirildi": ochir}
    if usul == "POST" and u.path == "/ochir":
        # Shu guruh a'zolariga «dan» (ms) dan keyin O'ZIMIZ yozgan shaxsiy xabarlarni ikkala tomondan o'chirish.
        d = json.loads(tana or b"{}")
        ent = await chat_ol(d.get("chat", ""))
        if ent == "me":
            raise ValueError("O'quvchilar guruhi tanlanishi kerak")
        dan = datetime.fromtimestamp((d.get("dan") or 0) / 1000, tz=timezone.utc)
        if datetime.now(timezone.utc) - dan > timedelta(hours=48):
            raise ValueError("Faqat oxirgi 48 soatdagi xabarlar o'chiriladi")
        azolar = [a for a in await client.get_participants(ent) if not a.bot and not a.deleted]
        by_id = {str(a.id): a for a in azolar}
        by_un = {a.username.lower(): a for a in azolar if a.username}
        natija = []
        for q in [q for q in d.get("qabul", []) if isinstance(q, dict)][:SHAXSIY_CHEGARA]:
            a = by_id.get(str(q.get("id") or "")) or by_un.get(str(q.get("username") or "").lstrip("@").lower())
            if not a:
                natija.append({"k": q.get("k"), "holat": "topilmadi"})
                continue
            ids = [m.id async for m in client.iter_messages(a, limit=50) if m.out and m.date >= dan]
            if ids:
                await client.delete_messages(a, ids, revoke=True)
            natija.append({"k": q.get("k"), "holat": "ok", "ochirildi": len(ids)})
            await asyncio.sleep(random.uniform(1, 2))
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


def _hq(x):
    return str(x).replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")


def _belgila(o):
    if o.get("username"):
        return "@" + _hq(str(o["username"]).lstrip("@"))
    if str(o.get("telegramId") or "").isdigit():
        return f'<a href="tg://user?id={o["telegramId"]}">{_hq(o.get("ism") or "O‘quvchi")}</a>'
    return f"<b>{_hq(o.get('ism') or 'O‘quvchi')}</b>"


def test_eslatma_matni(x, oynalar, hozir_ms):
    """Testni hali yechmaganlar (oyna ochiq, FINISHED emas) — guruhga eslatma matni yoki None."""
    def ms(t):
        try:
            return int(datetime.fromisoformat(str(t).replace("Z", "+00:00")).timestamp() * 1000)
        except ValueError:
            return 0
    bosh = int(x.get("vaqt", 0)) - 72 * 3600 * 1000
    qolgan, tugash = [], []
    for o in x.get("oquvchilar") or []:
        ochiq = [w for w in oynalar if w.get("studentId") == o["sid"] and w.get("status") != "FINISHED" and ms(w.get("openTo")) > hozir_ms and ms(w.get("openFrom")) >= bosh]
        if ochiq:
            qolgan.append(o)
            tugash.append(min(ms(w.get("openTo")) for w in ochiq))
    if not qolgan:
        return None
    t = datetime.fromtimestamp(min(tugash) / 1000, TOSHKENT)
    return "\n".join([
        "Assalomu alaykum. Kechagi dars testini hali yechmaganlar:",
        "",
        "<blockquote>" + "\n".join(_belgila(o) for o in qolgan) + "</blockquote>",
        "",
        f"Test platformada <b>{t.strftime('%d.%m')} soat {t.strftime('%H:%M')}</b> gacha ochiq. Bugun yechib qo‘ying — natija reytingga kiradi.",
    ])


def _davomat(d, oid):
    v = (d.get("davomat") or {}).get(oid)
    if v:
        return v
    return {"holat": "sababsiz"} if oid in (d.get("yoqlar") or []) else {"holat": "bor"}


def xavf_royxati(baza, bugun):
    """Saytdagi «Ketish xavfi» (engine/xavf.ts) ning qisqa nusxasi: ketma-ket/oxirgi uzrsiz NB, davomat <40%."""
    gnom = {g["id"]: g.get("nom", "") for g in baza.get("guruhlar", [])}
    darslar = {}
    for d in baza.get("darslar", []):
        if d.get("holat") == "yakunlangan":
            darslar.setdefault(d.get("guruhId"), []).append(d)
    for v in darslar.values():
        v.sort(key=lambda d: d.get("sana", ""), reverse=True)
    out = []
    for o in baza.get("oquvchilar", []):
        if not o.get("faol") or o.get("chiqqanSana") or o.get("guruhId") not in gnom:
            continue
        ds = [d for d in darslar.get(o["guruhId"], []) if o["id"] in (d.get("tartib") or [])][:6]
        hs = [_davomat(d, o["id"]) for d in ds]
        ketma = 0
        for h in hs:
            if h.get("holat") != "sababsiz":
                break
            ketma += 1
        sabab, ball = [], 0
        if ketma >= 2:
            sabab.append(f"{ketma} dars ketma-ket NB")
            ball += 40 + ketma * 10
        elif ketma == 1:
            sabab.append("oxirgi darsda NB")
            ball += 30
        if len(ds) >= 3:
            foiz = round(sum(1 for h in hs if h.get("holat") == "bor") * 100 / len(ds))
            if foiz < 40:
                sabab.append(f"davomat {foiz}%")
                ball += 25
        if not sabab:
            continue
        q = o.get("qongiroq")
        if q and (datetime.now(timezone.utc).timestamp() * 1000 - q) < 3 * 86400000:
            yangi = any(h.get("holat") == "sababsiz" and (d.get("tugash") or d.get("boshlanish") or 0) > q for d, h in zip(ds, hs))
            if not yangi:
                continue
        out.append((ball, o.get("ism", ""), gnom.get(o["guruhId"], ""), ", ".join(sabab)))
    return sorted(out, key=lambda x: (-x[0], x[1]))


def brifing_matni(baza, bugun):
    """Ertalabki brifing (FAQAT kuratorning o'ziga — to'lov ma'lumoti bor): bugungi darslar, kimga qo'ng'iroq, to'lovi yaqinlar."""
    b = bugun.isoformat()
    oq = baza.get("oquvchilar", [])
    sanoq = Counter(o.get("guruhId") for o in oq if o.get("faol"))
    darslar = sorted([(jadval_vaqti(g.get("vaqt"))[0], g) for g in baza.get("guruhlar", []) if sanoq.get(g.get("id")) and rejadami(g, b)], key=lambda x: x[0])
    q = [f"☀️ <b>Xayrli tong! {bugun.strftime('%d.%m')} — kun rejasi</b>", ""]
    if darslar:
        q.append("<b>Bugungi darslar:</b>")
        q += [f"• {_soat(t)} — {_hq(g.get('nom', ''))} ({sanoq.get(g.get('id'))} o‘quvchi)" for t, g in darslar]
    else:
        q.append("Bugun jadval bo‘yicha dars yo‘q.")
    xv = xavf_royxati(baza, b)
    if xv:
        q += ["", f"<b>📞 Qo‘ng‘iroq qiling ({len(xv)}):</b>"]
        q += [f"• {_hq(i)} <i>({_hq(g)})</i> — {_hq(s)}" for _, i, g, s in xv[:10]]
        if len(xv) > 10:
            q.append(f"… yana {len(xv) - 10} ta — saytda «Ketish xavfi».")
    gacha = (bugun + timedelta(days=3)).isoformat()
    tol = sorted([o for o in oq if o.get("faol") and not o.get("chiqqanSana") and b <= (o.get("tolovTugash") or "") <= gacha], key=lambda o: o["tolovTugash"])
    if tol:
        q += ["", f"<b>💳 To‘lov muddati yaqin ({len(tol)}):</b>"]
        q += [f"• {_hq(o.get('ism', ''))} — {o['tolovTugash'][8:10]}.{o['tolovTugash'][5:7]}" for o in tol[:10]]
        yoq = [o for o in tol if o.get("rivojXat") != o.get("tolovTugash") and (o.get("telegramId") or o.get("username"))]
        if yoq:
            q.append(f"✉️ {len(yoq)} tasiga «Rivojlanish xati» hali yuborilmagan — saytdagi bosh sahifada bitta tugma.")
    eslatma = [x for x in C.get("eslatmalar", []) if int(x.get("qachon", 0)) > time.time() * 1000]
    if eslatma:
        q += ["", f"🧪 Bugun 13:00 da {len(eslatma)} ta guruhga «testni yechmaganlar» eslatmasi ketadi."]
    return "\n".join(q)


ESLATMA_ODDIY = ["Bugun soat {t} da dars bor, kutib qolamiz.", "Eslatma: bugun {t} da darsimiz bor, kechikmang.", "Bugun {t} da darsda ko‘rishamiz."]
ESLATMA_GURUH = ["Bugun {t} da darsda ko‘rishamiz, kechikmasdan kiring."]
ESLATMA_NB = ["Bugun soat {t} da dars bor. O‘tgan safar ko‘rinmadingiz — bugun albatta qo‘shiling, kutamiz.",
              "Bugun {t} da dars. Oldingi darsni qoldirgandingiz, bugungisini o‘tkazib yubormang."]


JURNAL = []  # yordamchi nima qildi — saytda «Yordamchi jurnali» (oxirgi 60 ta, bulutga BELGI bilan birga yoziladi)
JURNAL_YOZILGAN = {"n": -1}


def qayd(*qism):
    """Terminalga chiqaradi va jurnalga yozadi. Ketma-ket bir xil yozuv — bitta (soni oshadi)."""
    m = " ".join(str(x) for x in qism).strip()
    print(m)
    t = int(time.time() * 1000)
    if JURNAL and JURNAL[-1]["m"] == m[:240]:
        JURNAL[-1].update(t=t, n=JURNAL[-1].get("n", 1) + 1)
    else:
        JURNAL.append({"t": t, "m": m[:240]})
        del JURNAL[:-60]
    JURNAL_YOZILGAN["ozgardi"] = True


def guruh_eslatma_matni(x):
    """Guruhga bitta eslatma (HTML): matn, hamma o'quvchi belgilanadi (username — @, bo'lmasa ismi bilan havola),
    oxirida — bugun keladiganlar reaksiya bossin. x — dars_eslatmalari() qatori. Kurator qarori: doim shu ko'rinishda."""
    import html as H

    bosh = ESLATMA_GURUH[sum(map(ord, x["kalit"])) % len(ESLATMA_GURUH)].format(t=x["t"])
    belgi = []
    for q in x.get("qabul") or []:
        if q.get("username"):
            belgi.append("@" + H.escape(str(q["username"]).lstrip("@")))
        elif q.get("id"):
            belgi.append(f'<a href="tg://user?id={int(q["id"])}">{H.escape(q.get("ism") or "o‘quvchi")}</a>')
    qism = [H.escape(bosh)]
    if belgi:
        qism.append(" ".join(belgi))
    qism.append("Bugun darsga kiradiganlar shu xabarga 👍 reaksiya bosib qo‘ying.")
    return "\n\n".join(qism)


def dars_eslatmalari(baza, hozir, oldin=(25, 40)):
    """Dars boshlanishiga 25–40 daqiqa qolgan guruhlar: har o'quvchiga shaxsan qisqa eslatma (salomlashish va ismsiz).
    Oxirgi darsida uzrsiz NB bo'lganga — boshqa matn. Ko'chirilgan darslar hisobga olinadi. → [{kalit, chat, qabul}]"""
    bugun = hozir.date().isoformat()
    daq = hozir.hour * 60 + hozir.minute
    darslar = {}
    for d in baza.get("darslar", []):
        if d.get("holat") == "yakunlangan":
            darslar.setdefault(d.get("guruhId"), []).append(d)
    natija = []
    for g in baza.get("guruhlar", []):
        if not g.get("telegramChat"):
            continue
        kochir = g.get("kochirishlar") or []
        bosh = None
        yangi = next((k for k in kochir if k.get("yangi") == bugun), None)
        if yangi:
            v = jadval_vaqti(yangi.get("vaqt"))
            bosh = v[0] if v else None
        elif rejadami(g, bugun) and not any(k.get("eski") == bugun for k in kochir):
            bosh = jadval_vaqti(g.get("vaqt"))[0]
        if bosh is None or not (oldin[0] <= bosh - daq <= oldin[1]):
            continue
        oxirgi = sorted(darslar.get(g["id"], []), key=lambda d: (d.get("sana") or "", d.get("boshlanish") or 0))
        if oxirgi and oxirgi[-1].get("sana") == bugun:
            continue  # bugun dars allaqachon o'tgan
        t = _soat(bosh)
        chatlar = {}
        for o in baza.get("oquvchilar", []):
            if o.get("guruhId") != g["id"] or not o.get("faol") or not (o.get("telegramId") or o.get("username")):
                continue
            pg = o.get("platformaGuruh")
            chat = ((g.get("qoshimchaChat") or {}).get(pg) or {}).get("chat") if pg and pg != g.get("platformaId") else None
            ozi = [d for d in oxirgi if o["id"] in (d.get("tartib") or [])]
            nb = bool(ozi) and _davomat(ozi[-1], o["id"]).get("holat") == "sababsiz"
            shablon = ESLATMA_NB if nb else ESLATMA_ODDIY
            matn = shablon[sum(map(ord, o["id"] + bugun)) % len(shablon)].format(t=t)
            chatlar.setdefault(chat or g["telegramChat"], []).append({"k": o["id"], "id": o.get("telegramId"), "username": o.get("username"), "ism": _qisqa_ism(o.get("ism")), "xabarlar": [matn]})
        for chat, qabul in chatlar.items():
            natija.append({"kalit": f"{g['id']}|{bugun}|{chat}", "chat": chat, "qabul": qabul, "guruh": g.get("nom", ""), "t": t})
    return natija


ESLATMA_KESH = {"vaqt": 0.0, "baza": None}
ESKIRISH_SONIYA = 12 * 3600  # navbatdagi so'rov shundan eski bo'lsa — bajarilmaydi
SEKIN_ORALIQ = 30  # soniya: dars bo'lmagan paytda navbat shunchalik kam tekshiriladi (bulut limitini tejash)


def eskirganmi(ish, hozir_s):
    """Saytda bosilganidan (qurilma vaqti `qv`) 12 soatdan oshgan so'rov. `qv` yo'q (eski sayt) — eskirgan emas."""
    return bool(ish.get("qv")) and hozir_s - ish["qv"] / 1000 > ESKIRISH_SONIYA


def dars_oynasidami(baza, hozir, oldin=30, keyin=180):
    """Biror guruhning bugungi darsi boshlanishiga `oldin` daqiqa qolgandan `keyin` daqiqa o'tguncha."""
    bugun = hozir.date().isoformat()
    daq = hozir.hour * 60 + hozir.minute
    for g in baza.get("guruhlar", []):
        kochir = g.get("kochirishlar") or []
        yangi = next((k for k in kochir if k.get("yangi") == bugun), None)
        v = None
        if yangi:
            v = jadval_vaqti(yangi.get("vaqt"))
        elif rejadami(g, bugun) and not any(k.get("eski") == bugun for k in kochir):
            v = jadval_vaqti(g.get("vaqt"))
        if v and -oldin <= daq - v[0] <= keyin:
            return True
    return False


def navbat_oraligi(baza, hozir, ishsiz_s):
    """Navbat qanchada bir tekshiriladi: dars paytida, oxirgi 15 daqiqada ish bo'lgan yoki jadval hali o'qilmagan bo'lsa —
    tez (8 s); qolgan vaqtda sekin (30 s). Bo'sh so'rov ham bulutning kunlik limitidan bitta o'qish oladi."""
    if baza is None or ishsiz_s < 900:
        return NAVBAT_ORALIGI
    try:
        return NAVBAT_ORALIGI if dars_oynasidami(baza, hozir) else SEKIN_ORALIQ
    except Exception:  # noqa: BLE001 — jadvalda kutilmagan qiymat: tez rejim xavfsizroq
        return NAVBAT_ORALIGI
ESLATMA_KESH_SONIYA = 3 * 3600  # jadval (guruh kunlari/vaqti) kamdan-kam o'zgaradi


async def dars_eslatmasi():
    """Bulutni tejash (Firestore kunlik limiti!): butun baza 3 soatda bir marta o'qiladi; faqat biror guruhning
    darsiga 25–40 daqiqa qolganda yangisi o'qiladi (davomat va Telegram ma'lumoti aniq bo'lishi uchun)."""
    if ESLATMA_KESH["baza"] is None or time.time() - ESLATMA_KESH["vaqt"] > ESLATMA_KESH_SONIYA:
        ESLATMA_KESH.update(baza=await asyncio.to_thread(BULUT.yozuvlar, 3), vaqt=time.time())
    hozir = datetime.now(TOSHKENT)
    yuborilgan = C.setdefault("darsEslatmalar", [])
    if not [x for x in dars_eslatmalari(ESLATMA_KESH["baza"], hozir) if x["kalit"] not in yuborilgan]:
        return 0
    baza = await asyncio.to_thread(BULUT.yozuvlar, 3)
    ESLATMA_KESH.update(baza=baza, vaqt=time.time())
    soz = next(iter(baza.get("sozlamalar", [])), {})
    if soz.get("darsEslatma") is False:
        return 0
    jami = 0
    for x in dars_eslatmalari(baza, hozir):
        if x["kalit"] in yuborilgan:
            continue
        yuborilgan.append(x["kalit"])
        del yuborilgan[:-60]
        SOZLAMA.write_text(json.dumps(C, ensure_ascii=False, indent=2), "utf-8")
        # Kurator qarori: eslatma guruhga bitta xabar (lichkaga faqat NB xabari boradi — akkaunt spam cheklovidan asraladi).
        await bitta_yubor(await chat_ol(x["chat"]), guruh_eslatma_matni(x))
        qayd(f"Dars eslatmasi guruhga: {x['guruh']}")
        jami += 1
    return jami


def _qisqa_ism(ism):
    """«Rahimov Azizbek» → «Azizbek» (guruhga — familiyasiz)."""
    s = (ism or "").split()
    if len(s) < 2:
        return s[0] if s else "O‘quvchi"
    return s[1] if re.search(r"(ova|yeva|eva|ov|yev|ev)$", s[0], re.I) else s[0]


def osish_eloni(baza, bugun, eng_kam=5):
    """Dushanba: har guruhda shu hafta (oxirgi 7 kun) o'rtacha bali o'tgan haftadagidan eng ko'p o'sgan 3 o'quvchi.
    → [{guruh, chat, matn}] (o'sgan o'quvchi bo'lmasa — guruh o'tkaziladi)."""
    b = bugun.isoformat()
    h1 = (bugun - timedelta(days=7)).isoformat()
    h2 = (bugun - timedelta(days=14)).isoformat()
    darslar = {d["id"]: d for d in baza.get("darslar", []) if d.get("holat") == "yakunlangan" and h2 <= (d.get("sana") or "") < b}
    jb = {}
    for j in baza.get("jurnal", []):
        d = darslar.get(j.get("darsId"))
        if d and j.get("ball") is not None:
            jb.setdefault((d["guruhId"], j["oquvchiId"], d["id"]), []).append(j)
    ballar = {}
    for (gid, oid, did), js in jb.items():
        w = sum(DARAJA_VAZN.get(j.get("daraja"), 1) for j in js)
        bal = sum(j["ball"] * DARAJA_VAZN.get(j.get("daraja"), 1) for j in js) / w
        hafta = "bu" if darslar[did]["sana"] >= h1 else "otgan"
        ballar.setdefault((gid, oid), {}).setdefault(hafta, []).append(bal)
    oq = {o["id"]: o for o in baza.get("oquvchilar", []) if o.get("faol")}
    natija = []
    for g in baza.get("guruhlar", []):
        if not g.get("telegramChat"):
            continue
        qator = []
        for (gid, oid), x in ballar.items():
            if gid != g["id"] or oid not in oq or not x.get("bu") or not x.get("otgan"):
                continue
            a, c = sum(x["otgan"]) / len(x["otgan"]), sum(x["bu"]) / len(x["bu"])
            if c - a >= eng_kam:
                qator.append((round(c - a), round(a), round(c), _qisqa_ism(oq[oid].get("ism"))))
        if not qator:
            continue
        qator.sort(key=lambda q: (-q[0], q[3]))
        satr = [f"{n}. {q[3]} — {q[1]} → {q[2]} (+{q[0]})" for n, q in enumerate(qator[:3], 1)]
        matn = "Bu hafta eng ko‘p o‘sganlar:\n" + "\n".join(satr) + "\n\nBarakalla! Keyingi hafta ro‘yxatda kim bo‘larkin?"
        natija.append({"guruh": g.get("nom", ""), "chat": g["telegramChat"], "matn": matn})
    return natija


def osish_vaqtimi(hozir, oxirgi):
    """Dushanba 10:00–14:00, haftada bir marta."""
    if hozir.weekday() != 0 or not (10 <= hozir.hour < 14):
        return None
    k = hozir.date().isoformat()
    return None if k == oxirgi else k


def brifing_vaqtimi(hozir, oxirgi):
    """09:00–12:00 oralig'ida kuniga bir marta."""
    if not (9 <= hozir.hour < 12):
        return None
    k = hozir.date().isoformat()
    return None if k == oxirgi else k


async def ertalabki_brifing():
    baza = await asyncio.to_thread(BULUT.yozuvlar)
    soz = next(iter(baza.get("sozlamalar", [])), {})
    if soz.get("ertalabkiBrifing") is False:
        return False
    await bitta_yubor("me", brifing_matni(baza, datetime.now(TOSHKENT).date()))
    return True


def qarz_vaqtimi(hozir, oxirgi):
    """Yakshanba 18:00 dan keyin, haftada bir marta (kalit — yakshanba sanasi)."""
    if hozir.weekday() != 6 or hozir.hour < 18:
        return None
    k = hozir.date().isoformat()
    return None if k == oxirgi else k


def _iso_ms(t):
    try:
        return int(datetime.fromisoformat(str(t).replace("Z", "+00:00")).timestamp() * 1000)
    except ValueError:
        return 0


def test_qarzlari(oynalar, sid, hozir_ms):
    """O'quvchining shu hafta muddati o'tib ketgan, yechilmagan testlari (shu dars uchun yechilgan/ochiq oyna yo'q)."""
    hafta = hozir_ms - 7 * 86400000
    ozi = [w for w in oynalar if w.get("studentId") == sid]
    yechilgan = {w.get("lessonId") for w in ozi if w.get("status") == "FINISHED" or _iso_ms(w.get("openTo")) > hozir_ms}
    qarz = {}
    for w in ozi:
        if w.get("status") != "FINISHED" and hafta <= _iso_ms(w.get("openTo")) <= hozir_ms and w.get("lessonId") not in yechilgan:
            qarz[w["lessonId"]] = w.get("lessonTitle") or ""
    return qarz


def kunlik_qarzlar(oynalar, sid, hozir_ms, soat=24, kun=7):
    """Yechilmay qolgan testlar (oxirgi `kun` kunda ochilgan): shu darsning HAMMA oynasi yopilgan (muddati o'tgan) va
    hech biri FINISHED emas. Hozir ochiq oyna bo'lsa — o'quvchining hali vaqti bor, qarz emas (kurator qaroriga ko'ra
    «ochilganiga bir sutka» emas, oyna yopilgani hisobga olinadi). → {lessonId: {"nom", "ochilgan" (ms), "boshlagan"?}}"""
    ozi = [w for w in oynalar if w.get("studentId") == sid]
    yechilgan = {w.get("lessonId") for w in ozi if w.get("status") == "FINISHED"}
    ochiq = {w.get("lessonId") for w in ozi if _iso_ms(w.get("openTo")) > hozir_ms}
    qarz = {}
    for w in sorted(ozi, key=lambda x: _iso_ms(x.get("openFrom"))):
        lid, bosh = w.get("lessonId"), _iso_ms(w.get("openFrom"))
        if not lid or lid in yechilgan or lid in ochiq or bosh < hozir_ms - kun * 86400000 or bosh > hozir_ms - soat * 3600000:
            continue
        q = qarz.setdefault(lid, {"nom": (w.get("lessonTitle") or "").strip(), "ochilgan": bosh})
        q["ochilgan"] = max(q["ochilgan"], bosh)
        if w.get("status") == "STARTED":
            q["boshlagan"] = True
    return qarz


def qarz_xabari(nomlar, tugash):
    """O'quvchiga shaxsan (odam yozgandek, salomlashish va ismsiz)."""
    nomlar = [(t.split("|", 1)[1] if "|" in t else t).strip() for t in nomlar if t][:6]
    ruy = nomlar[0] if len(nomlar) == 1 else ", ".join(nomlar[:-1]) + " va " + nomlar[-1]
    nima = "testingiz" if len(nomlar) == 1 else f"{len(nomlar)} ta testingiz"
    return f"{ruy} — {nima} hali yechilmagan ekan. Yana bir kunga ochib qo‘ydim, {tugash.strftime('%d.%m')} kuni soat {tugash.strftime('%H:%M')} gacha ishlab qo‘ying."


def qarz_guruhlari(baza, bugun):
    """Test qarzi faqat oxirgi 7 kunda Spektr'da dars o'tgan guruhlarga (kurator dars o'tmaydigan guruh — masalan PK3 — tegilmaydi)."""
    dan = (bugun - timedelta(days=7)).isoformat()
    faol = {d.get("guruhId") for d in baza.get("darslar", []) if d.get("holat") == "yakunlangan" and (d.get("sana") or "") >= dan}
    return [g for g in baza.get("guruhlar", []) if g.get("id") in faol and g.get("telegramChat") and g.get("platformaId")]


async def haftalik_test_qarzi():
    """Yakshanba: shu hafta yechilmay qolgan testlarni 48 soatga qayta ochib, har o'quvchiga shaxsan ro'yxat."""
    baza = await asyncio.to_thread(BULUT.yozuvlar, 9)
    soz = next(iter(baza.get("sozlamalar", [])), {})
    # Kurator qarori (15.11): har kuni saytdagi «Testni yechmaganlar» ro'yxatidan, ptichka bilan — yakshanbadagi
    # avtomatik ochish endi faqat Sozlamalarda ataylab yoqilsa (testQarzi: true).
    if soz.get("testQarzi") is not True:
        return 0
    hozir = int(time.time() * 1000)
    tugash = datetime.fromtimestamp(hozir / 1000 + 48 * 3600, TOSHKENT)
    jami = 0
    for g in qarz_guruhlari(baza, datetime.now(TOSHKENT).date()):
        gidlar = {g["platformaId"]: g["telegramChat"], **{k: v.get("chat") for k, v in (g.get("qoshimchaChat") or {}).items() if v.get("chat")}}
        for gid, chat in gidlar.items():
            oq = [o for o in baza.get("oquvchilar", []) if o.get("guruhId") == g["id"] and o.get("faol") and o.get("platformaUuid") and (o.get("platformaGuruh") or g["platformaId"]) == gid]
            if not oq:
                continue
            try:
                oyn = (await asyncio.to_thread(PLATFORMA.guruh, gid))["oynalar"]
            except Exception as e:  # noqa: BLE001
                qayd("Test qarzi: platforma —", e)
                continue
            items, qabul = [], []
            for o in oq:
                qarz = test_qarzlari(oyn, o["platformaUuid"], hozir)
                if not qarz:
                    continue
                items += [{"studentId": o["platformaUuid"], "lessonId": lid} for lid in qarz]
                if o.get("telegramId") or o.get("username"):
                    # Odam yozgandek: salomlashish va ismsiz, qisqa (o'quvchi «bot» deb sezmasin).
                    nomlar = [(t.split("|", 1)[1] if "|" in t else t).strip() for t in list(qarz.values())[:6]]
                    ruy = nomlar[0] if len(nomlar) == 1 else ", ".join(nomlar[:-1]) + " va " + nomlar[-1]
                    soni = "testingiz" if len(nomlar) == 1 else f"{len(nomlar)} ta testingiz"
                    qabul.append({"k": o["id"], "id": o.get("telegramId"), "username": o.get("username"), "xabarlar": [
                        f"Bu hafta {soni} yechilmay qoldi ({ruy}). Yana ochib qo‘ydim, {tugash.strftime('%d.%m')} kuni soat {tugash.strftime('%H:%M')} gacha yechib qo‘ying."]})
            if not items:
                continue
            z = lambda t: t.isoformat().replace("+00:00", "Z")  # noqa: E731
            hz = datetime.now(timezone.utc).replace(second=0, microsecond=0)
            st, _, txt = await asyncio.to_thread(PLATFORMA._so, "POST", "/api/curator/lesson-exam-windows/bulk", {"groupId": gid, "items": items, "openFrom": z(hz), "openTo": z(hz + timedelta(hours=48))})
            qayd(f"Test qarzi ({g.get('nom')}): {len(items)} ta test qayta ochildi ({st})")
            if qabul and 200 <= st < 300:
                await marshrut("POST", "/shaxsiy", {"x-spektr-kalit": C["kalit"]}, json.dumps({"chat": chat, "qabul": qabul}).encode())
                jami += len(qabul)
    return jami


async def test_eslatmalar():
    """Vaqti kelgan eslatmalar: platformadan holatni olib, yechmaganlarni guruhda belgilaydi."""
    if not PLATFORMA or not C.get("eslatmalar"):
        return
    hozir = int(time.time() * 1000)
    qoldi, ozgardi = [], False
    for x in C["eslatmalar"]:
        if int(x.get("qachon", 0)) > hozir:
            qoldi.append(x)
            continue
        ozgardi = True
        if hozir - int(x["qachon"]) > 6 * 3600 * 1000:
            continue  # juda kech (kompyuter o'chiq bo'lgan) — yubormaymiz
        try:
            g = await asyncio.to_thread(PLATFORMA.guruh, x["guruh"])
            matn = test_eslatma_matni(x, g["oynalar"], hozir)
            if matn:
                ent = await chat_ol(x["chat"])
                await client.get_participants(ent)
                await bitta_yubor(ent, matn)
                qayd(f"Test eslatmasi yuborildi: {x.get('nom') or x['chat']}")
        except Exception as e:  # noqa: BLE001
            qayd("Test eslatmasi yuborilmadi:", e)
    if ozgardi:
        C["eslatmalar"] = qoldi
        SOZLAMA.write_text(json.dumps(C, ensure_ascii=False, indent=2), "utf-8")


async def bulut_tsikli(men):
    global BULUT
    b = BULUT = Bulut(C["bulut"])
    keyingi_belgi, keyingi_platforma, keyingi_hisobot, keyingi_nazorat = 0, time.time() + 60, time.time() + 90, time.time() + 120
    keyingi_dars_hisobot = time.time() + 150
    keyingi_eslatma, keyingi_xat, keyingi_dars = time.time() + 150, time.time() + 30, time.time() + 45
    oxirgi_ish = time.time()
    while True:
        try:
            kalit_o = osish_vaqtimi(datetime.now(TOSHKENT), C.get("osishHafta"))
            if kalit_o:
                C["osishHafta"] = kalit_o
                SOZLAMA.write_text(json.dumps(C, ensure_ascii=False, indent=2), "utf-8")
                try:
                    import html as H

                    baza_o = await asyncio.to_thread(b.yozuvlar, 15)
                    if next(iter(baza_o.get("sozlamalar", [])), {}).get("osishEloni") is not False:
                        for x in osish_eloni(baza_o, datetime.now(TOSHKENT).date()):
                            await bitta_yubor(await chat_ol(x["chat"]), H.escape(x["matn"], quote=False))
                            qayd(f"Haftalik o‘sish e’loni: {x['guruh']}")
                            await asyncio.sleep(2)
                except Exception as e:  # noqa: BLE001
                    qayd("O‘sish e’loni yuborilmadi:", str(e)[:200])
            if time.time() >= keyingi_dars:
                # Dars boshlanishidan ~30 daqiqa oldin har o'quvchiga shaxsan eslatma.
                keyingi_dars = time.time() + 240
                try:
                    await dars_eslatmasi()
                except Exception as e:  # noqa: BLE001
                    qayd("Dars eslatmasi yuborilmadi:", str(e)[:200])
            if time.time() >= keyingi_xat:
                # O'quvchilar saytidan NB uchun yozilgan xatlar — kuratorning Saqlangan xabarlariga (bir marta).
                keyingi_xat = time.time() + 600
                try:
                    xatlar = await asyncio.to_thread(b.yangi_xatlar)
                    if xatlar:
                        baza = await asyncio.to_thread(b.yozuvlar, 1)
                        for x in xatlar:
                            await bitta_yubor("me", xat_matni(x, baza))
                            await asyncio.to_thread(b.xat_yuborildi, x["nom"])
                            qayd(f"O'quvchidan xat Saqlangan xabarlarga yuborildi ({x['sana']}).")
                except Exception as e:  # noqa: BLE001
                    qayd("O'quvchi xatlari olinmadi:", str(e)[:200])
                    keyingi_xat = time.time() + 900
            if time.time() >= keyingi_dars_hisobot and C.get("darsHisobot", True):
                # Har dars yakunlangach — boshliqqa (faqat boshliq akkaunti) «Saqlangan xabarlar»ga qisqa hisobot.
                # Faqat 16:00–01:00 oralig'ida, 15 daqiqada bir (kuniga ~40 o'qish × kuratorlar).
                keyingi_dars_hisobot = time.time() + 900
                soat_t = datetime.now(TOSHKENT)
                if (soat_t.hour >= 16 or soat_t.hour < 1) and C.get("darsHisobotYoq") != soat_t.date().isoformat():
                    try:
                        bugun = soat_t.date()
                        kuratorlar = await asyncio.to_thread(BULUT.nazorat, (bugun - timedelta(days=1)).isoformat(), bugun.isoformat())
                        yuborilgan = set(C.get("darsHisobotlar") or [])
                        for kalit, matn in yangi_dars_hisobotlari(kuratorlar, yuborilgan, int(time.time() * 1000)):
                            await bitta_yubor("me", matn)
                            yuborilgan.add(kalit)
                            qayd(f"Dars hisoboti Saqlangan xabarlarga yuborildi ({kalit.split(':', 1)[1]}).")
                            await asyncio.sleep(2)
                        C["darsHisobotlar"] = sorted(yuborilgan)[-400:]
                        SOZLAMA.write_text(json.dumps(C, ensure_ascii=False, indent=2), "utf-8")
                    except PermissionError:
                        C["darsHisobotYoq"] = soat_t.date().isoformat()  # boshliq emas — bugun qayta urinilmaydi
                    except Exception as e:  # noqa: BLE001
                        qayd("Dars hisoboti yuborilmadi:", str(e)[:200])
                        keyingi_dars_hisobot = time.time() + 1800
            if time.time() >= keyingi_nazorat:
                # Kuratorlar nazorati: har kuni 00:30 dan keyin kechagi kun — KM kuratorlar guruhiga (faqat boshliq akkaunti).
                keyingi_nazorat = time.time() + 300
                sana = nazorat_vaqtimi(datetime.now(TOSHKENT))
                if sana and C.get("nazoratSana") != sana:
                    try:
                        r = await nazorat_hisobot(sana, True, avto=True)
                        if r["xabarlar"]:
                            qayd(f"Kuratorlar nazorati ({sana}) KM kuratorlar guruhiga yuborildi.")
                        # Oyning 1-kuni — o'tgan oy uchun oylik hisobot ham.
                        oy = sana[:7]
                        if (date_iso(sana) + timedelta(days=1)).day == 1 and C.get("nazoratOy") != oy:
                            r = await nazorat_hisobot(sana, True, avto=True, oy=oy)
                            if r["xabarlar"]:
                                qayd(f"Oylik hisobot ({oy}) KM kuratorlar guruhiga yuborildi.")
                            C["nazoratOy"] = oy
                        C["nazoratSana"] = sana
                    except PermissionError:
                        C["nazoratSana"] = sana  # boshliq emas — bugun qayta urinilmaydi
                    except Exception as e:  # noqa: BLE001
                        qayd("Kuratorlar nazorati yuborilmadi:", e)
                        keyingi_nazorat = time.time() + 1800
                    else:
                        SOZLAMA.write_text(json.dumps(C, ensure_ascii=False, indent=2), "utf-8")

            if time.time() >= keyingi_eslatma:
                keyingi_eslatma = time.time() + 300
                await test_eslatmalar()
                hozir_t = datetime.now(TOSHKENT)
                k = brifing_vaqtimi(hozir_t, C.get("brifingSana"))
                if k:
                    try:
                        if await ertalabki_brifing():
                            qayd("Ertalabki brifing Saqlangan xabarlarga yuborildi.")
                        C["brifingSana"] = k
                        SOZLAMA.write_text(json.dumps(C, ensure_ascii=False, indent=2), "utf-8")
                    except Exception as e:  # noqa: BLE001
                        qayd("Ertalabki brifing yuborilmadi:", e)
                k = qarz_vaqtimi(hozir_t, C.get("qarzHafta")) if PLATFORMA else None
                if k:
                    try:
                        n = await haftalik_test_qarzi()
                        qayd(f"Haftalik test qarzi: {n} o‘quvchiga yozildi.")
                        C["qarzHafta"] = k
                        SOZLAMA.write_text(json.dumps(C, ensure_ascii=False, indent=2), "utf-8")
                    except Exception as e:  # noqa: BLE001
                        qayd("Haftalik test qarzi bajarilmadi:", e)

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
                            qayd("Haftalik hisobot Saqlangan xabarlarga yuborildi.")
                        C["hisobotHafta"] = kalit
                        SOZLAMA.write_text(json.dumps(C, ensure_ascii=False, indent=2), "utf-8")
                    except Exception as e:  # noqa: BLE001
                        qayd("Haftalik hisobot yuborilmadi:", e)
                        keyingi_hisobot = time.time() + 1800

            if time.time() >= keyingi_belgi:
                try:
                    await tg_ulan()
                except Exception as e:  # noqa: BLE001 — internet yo'q: belgida ko'rinadi, keyingi safar yana urinadi
                    qayd("Telegramga ulanib bo'lmadi:", e)
                if JURNAL_YOZILGAN.pop("ozgardi", False):
                    await asyncio.to_thread(b._yoz, f"{b.nom}/yordamchi/jurnal", {"j": json.dumps(JURNAL, ensure_ascii=False), "vaqt": datetime.now(timezone.utc)})
                await asyncio.to_thread(b.belgi, men, kalit=C["kalit"], platforma=bool(PLATFORMA), platformaVaqt=int(HOLAT_P["vaqt"] * 1000), platformaXato=HOLAT_P["xato"], telegram=client.is_connected())
                keyingi_belgi = time.time() + BELGI_ORALIGI
            if PLATFORMA and time.time() >= keyingi_platforma:
                # Platformadan yangi ma'lumot (o'quvchilar, to'lov sanalari, komissiya) — sayt o'zi qo'llaydi.
                try:
                    malumot = await asyncio.to_thread(PLATFORMA.toplam)
                    await asyncio.to_thread(b.platforma_yoz, malumot)
                    HOLAT_P.update(vaqt=time.time(), xato="", malumot=malumot)
                    keyingi_platforma = time.time() + PLATFORMA_ORALIGI
                    qayd(f"Platformadan yangilandi: {len(malumot['guruhlar'])} guruh, {len(malumot['oquvchilar'])} o'quvchi")
                except Exception as e:  # noqa: BLE001
                    HOLAT_P["xato"] = str(e)[:200]
                    keyingi_platforma = time.time() + 1800
                    qayd("Platformadan yangilab bo'lmadi:", e)
                keyingi_belgi = 0
            for ish in await asyncio.to_thread(b.navbat):
                if not await asyncio.to_thread(b.ol, ish):
                    continue
                oxirgi_ish = time.time()
                if eskirganmi(ish, time.time()):
                    # Bulutga kech yetgan (internet yo'q edi yoki kunlik limit tugagan edi) — bajarilmaydi: kurator
                    # o'shanda qayta bosgan bo'lishi mumkin, xabar ikki marta ketmasin.
                    qayd(f"Eskirgan so'rov bajarilmadi: {ish['yol']}")
                    await asyncio.to_thread(b.tugat, ish, 410, {"ok": False, "xato": "Eskirgan so‘rov (12 soatdan oldin bosilgan) — kerak bo‘lsa qayta bosing."})
                    continue
                print(f"Bulutdan so'rov: {ish['yol']}")
                try:
                    tana = ish["tana"].encode("utf-8") if ish["tana"] else b""
                    status, data = await marshrut(ish["usul"], ish["yol"], {"x-spektr-kalit": C["kalit"]}, tana)
                except Exception as e:  # noqa: BLE001
                    status, data = (400 if isinstance(e, ValueError) else 500), {"ok": False, "xato": str(e)}
                await asyncio.to_thread(b.tugat, ish, status, data)
                qayd(f"Saytdan so‘rov {ish['yol']}: " + ("bajarildi" if status == 200 else f"xato ({status}) — {str(data.get('xato') or '')[:120]}"))
        except Exception as e:  # noqa: BLE001
            if "(429)" in str(e):
                # Firestore kunlik bepul limiti tugagan: tez-tez urinish foydasiz (Toshkent ~13:00 da tiklanadi).
                qayd("Bulut: kunlik limit tugagan (429) — 10 daqiqadan keyin yana urinaman. Sayt shu kompyuterda Chrome’da bulutsiz ishlaydi.")
                await asyncio.sleep(600)
            else:
                qayd("Bulut xatosi:", e)
                await asyncio.sleep(20)
        await asyncio.sleep(navbat_oraligi(ESLATMA_KESH["baza"], datetime.now(TOSHKENT), time.time() - oxirgi_ish))


def uygoq_tut():
    """Bepul «doim yoniq»: Mac'da yordamchi ishlab turganda kompyuter uxlab qolmaydi (ekran o'chsa ham).
    caffeinate yordamchi jarayoniga bog'lanadi (-w) — yordamchi to'xtasa, o'zi ham tugaydi."""
    if sys.platform != "darwin" or not shutil.which("caffeinate"):
        return
    try:
        import subprocess

        subprocess.Popen(["caffeinate", "-is", "-w", str(os.getpid())], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
        print(" Mac uxlab qolmaydi (yordamchi ishlab turganda).")
    except Exception as e:  # noqa: BLE001
        print(" caffeinate ishga tushmadi:", e)


async def main():
    uygoq_tut()
    await client.connect()
    if not await client.is_user_authorized():
        print("Telegramga kirish kerak (bir marta): telefon raqam va kod so'raladi.")
        await client.start()
    men = await client.get_me()
    if "--sozla" in sys.argv:
        # O'rnatuvchi (ornat.sh): sozlash va Telegramga kirish tugadi — fon rejimi alohida ishga tushiriladi.
        print(f"Sozlash tugadi: {men.first_name or ''} {men.last_name or ''} (@{men.username or '-'}).")
        print(f"KALIT: {C['kalit']}")
        await client.disconnect()
        return
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
