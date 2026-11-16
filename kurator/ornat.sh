#!/bin/bash
# Spektr yordamchisini yangi kurator Mac'iga bitta buyruq bilan o'rnatish:
#   bash -c "$(curl -fsSL https://behruz051122.github.io/kimyo-mock/kurator/ornat.sh)"
# Nima qiladi: Python kutubxonalari → ~/Spektr ga yordamchi → sozlash (api_id, api_hash, Telegram kodi,
# platforma paroli, kurator kodi — hammasi faqat shu kompyuterda qoladi) → kompyuter yoqilganda o'zi ishga tushadi.
set -e
SAYT="https://behruz051122.github.io/kimyo-mock/kurator"
UY="$HOME/Spektr"

echo "━━━ Spektr yordamchisini o'rnatish ━━━"
if [ "$(uname)" != "Darwin" ]; then echo "❌ Bu o'rnatuvchi faqat Mac uchun. Windows'da: saytdagi yo'riqnoma."; exit 1; fi

# 1. Python 3
PY=""
for p in "$(command -v python3)" /opt/homebrew/bin/python3 /usr/local/bin/python3 /Library/Frameworks/Python.framework/Versions/Current/bin/python3; do
  if [ -n "$p" ] && [ -x "$p" ] && "$p" -c "import sys; sys.exit(0 if sys.version_info >= (3, 9) else 1)" 2>/dev/null; then PY="$p"; break; fi
done
if [ -z "$PY" ]; then
  echo "❌ Python 3 topilmadi."
  echo "   1) https://www.python.org/downloads/ dan yuklab o'rnating."
  echo "   2) Applications → Python 3.x → «Install Certificates» ni bir marta oching."
  echo "   3) Shu buyruqni qayta ishga tushiring."
  open "https://www.python.org/downloads/" 2>/dev/null || true
  exit 1
fi
echo "🐍 Python: $PY"

# 2. Kutubxonalar (Telegram, PDF, sertifikatlar)
echo "📦 Kutubxonalar o'rnatilmoqda (1–2 daqiqa)…"
"$PY" -m pip install --user --quiet --upgrade telethon cryptg reportlab certifi 2>/dev/null \
  || "$PY" -m pip install --user --quiet --break-system-packages --upgrade telethon cryptg reportlab certifi
"$PY" -c "import telethon" || { echo "❌ Telethon o'rnatilmadi."; exit 1; }

# 3. Yordamchi fayllari
mkdir -p "$UY"
for f in spektr_telegram.py natija_fayl.py yordamchi_avtomatik.sh; do
  curl -fsSLo "$UY/$f" "$SAYT/$f"
done
echo "📁 Fayllar: $UY"

# 4. Bir martalik sozlash (allaqachon sozlangan bo'lsa — o'tkaziladi)
cd "$UY"
if [ ! -f "$UY/spektr_telegram.json" ] || ! ls "$UY"/*.session >/dev/null 2>&1; then
  echo
  echo "━━━ Sozlash: savollarga javob bering ━━━"
  echo "  • api_id va api_hash: https://my.telegram.org → API development tools (hech kimga bermang)"
  echo "  • sessiya fayli so'ralsa — bo'sh qoldirib Enter bosing: Telegram raqamingiz va kelgan kod so'raladi"
  echo "  • platforma telefoni va paroli (online.kelajakmediklari.uz), keyin KURATOR KODINGIZ"
  echo
  "$PY" "$UY/spektr_telegram.py" --sozla
fi

# 5. Avtomatik ishga tushish (kompyuter yoqilganda, yiqilsa qayta yoqiladi, Mac uxlamaydi)
pkill -f "spektr_telegram.py" 2>/dev/null || true
MANBA="$UY" bash "$UY/yordamchi_avtomatik.sh"
echo
echo "Saytda: Sozlamalar → Sozlash holati → «Tekshirish». Kurator kodi bilan kirgan bo'lsangiz, hammasi bulut orqali ishlaydi."
