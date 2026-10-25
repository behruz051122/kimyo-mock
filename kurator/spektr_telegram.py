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
    pip3 install telethon cryptg
    python3 spektr_telegram.py

Birinchi marta: api_id, api_hash va mavjud sessiya fayli (masalan kimyo.session) so'raladi.
Sessiya nusxasi shu papkaga olinadi («database is locked» bo'lmasligi uchun).
Ekranda chiqqan KALIT ni saytdagi Sozlamalar → Telegram bo'limiga kiriting.

Xavfsizlik: dastur faqat shu kompyuterdan (127.0.0.1) so'rov qabul qiladi, kalitsiz so'rovni rad etadi.
Guruh/kanallarga yozadi; shaxsiy xabarni esa FAQAT tanlangan guruhning a'zolariga (o'quvchilarga) yuboradi —
begona odamga yozmaydi. Telegram spam cheklovi (PeerFlood) chiqsa, darhol to'xtaydi.
"""

import asyncio
import json
import random
import secrets
import shutil
import sys
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
    SOZLAMA.write_text(json.dumps(c, ensure_ascii=False, indent=2), "utf-8")
    return c


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
        natija = []
        for i, q in enumerate(qabul):
            k = str(q.get("k", ""))
            a = by_id.get(str(q.get("id") or "")) or by_un.get(str(q.get("username") or "").lstrip("@").lower())
            if not a:
                natija.append({"k": k, "holat": "topilmadi"})
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
    print(" Saytda: Sozlamalar → Telegram → kalitni kiriting.")
    print(" To'xtatish: Ctrl+C. Oyna ochiq tursa, «Yubor» va «Hammaga shaxsan» tugmalari ishlaydi.")
    print("=" * 56)
    async with server:
        await server.serve_forever()


if __name__ == "__main__":
    try:
        asyncio.run(main())
    except KeyboardInterrupt:
        print("To'xtatildi.")
