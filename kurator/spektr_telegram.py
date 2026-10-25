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

Xavfsizlik: dastur faqat shu kompyuterdan (127.0.0.1) so'rov qabul qiladi, kalitsiz so'rovni rad etadi.
Guruh/kanallarga yozadi; shaxsiy xabarni esa FAQAT tanlangan guruhning a'zolariga (o'quvchilarga) yuboradi —
begona odamga yozmaydi. Telegram spam cheklovi (PeerFlood) chiqsa, darhol to'xtaydi.
"""

import asyncio
import hashlib
import json
import os
import random
import secrets
import shutil
import ssl
import sys
import time
import urllib.error
import urllib.parse
import urllib.request
from datetime import datetime, timezone
from pathlib import Path
from urllib.parse import parse_qs, urlsplit

try:
    sys.stdout.reconfigure(encoding="utf-8")
except Exception:
    pass

from telethon import TelegramClient, errors

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
SOZLAMA = PAPKA / "spektr_telegram.json"
RUXSAT_SAYT = {"https://behruz051122.github.io"}
RUXSAT_HOST = {"localhost", "127.0.0.1"}


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
        hujjatlar = f"projects/{FB_PROJECT or 'demo-spektr'}/databases/(default)/documents"
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

    def belgi(self, men):
        """Saytga: yordamchi yoniq (qaysi akkaunt, qachon)."""
        self._yoz(f"{self.nom}/yordamchi/holat", {"men": men, "vaqt": datetime.now(timezone.utc)})

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


C = sozlamalar()
client = TelegramClient(C["sessiya"], C["api_id"], C["api_hash"])


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


async def marshrut(usul, yol, sarlavha, tana):
    if sarlavha.get("x-spektr-kalit") != C["kalit"]:
        return 401, {"ok": False, "xato": "Kalit noto'g'ri — saytga dasturdagi KALIT ni kiriting"}
    u = urlsplit(yol)
    q = parse_qs(u.query)
    if usul == "GET" and u.path == "/holat":
        men = await client.get_me()
        return 200, {"ok": True, "men": " ".join(x for x in [men.first_name, men.last_name] if x) or men.username or ""}
    if usul == "GET" and u.path == "/chatlar":
        chatlar = [{"id": str(d.id), "nom": d.name} async for d in client.iter_dialogs() if guruhmi(d)]
        return 200, {"ok": True, "chatlar": chatlar}
    if usul == "GET" and u.path == "/azolar":
        ent = await chat_ol(q.get("chat", [""])[0])
        azolar = []
        async for a in client.iter_participants(ent):
            if a.bot or a.deleted:
                continue
            azolar.append({"id": str(a.id), "username": a.username or None, "ism": " ".join(x for x in [a.first_name, a.last_name] if x)})
        return 200, {"ok": True, "azolar": azolar}
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
    b = Bulut(C["bulut"])
    keyingi_belgi = 0
    while True:
        try:
            if time.time() >= keyingi_belgi:
                await asyncio.to_thread(b.belgi, men)
                keyingi_belgi = time.time() + BELGI_ORALIGI
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
