#!/bin/bash
# Spektr yordamchisini Mac'da avtomatik qiladi: kompyuter yoqilganda (kirganingizda) o'zi ishga tushadi,
# yiqilsa 30 soniyada qayta yoqiladi, ishlab turganda Mac uxlamaydi (quvvatga ulangan bo'lsa).
# Bir marta bajariladi:  cd ~/Downloads && bash yordamchi_avtomatik.sh
# O'chirish (eski holatga qaytish):  bash yordamchi_avtomatik.sh --ochir

set -e
NOM="uz.spektr.yordamchi"
UY="$HOME/Spektr"                       # Downloads emas: macOS fon dasturiga Downloads'ni o'qishga ruxsat bermaydi
MANBA="${MANBA:-$HOME/Downloads}"        # ornat.sh fayllarni to'g'ridan-to'g'ri ~/Spektr ga qo'yadi
PLIST="$HOME/Library/LaunchAgents/$NOM.plist"
GUI="gui/$(id -u)"

if [ "$1" = "--ochir" ]; then
  launchctl bootout "$GUI/$NOM" 2>/dev/null || true
  rm -f "$PLIST"
  echo "✅ Avtomatik ishga tushish o'chirildi. Fayllar $UY da qoldi — qo'lda: cd ~/Spektr && caffeinate -i python3 spektr_telegram.py"
  exit 0
fi

# 1. Telethon o'rnatilgan python3 ni topish (Terminal'dagi bilan bir xil bo'lishi kerak).
PY=""
for p in "$(zsh -lc 'command -v python3' 2>/dev/null)" "$(command -v python3)" /opt/homebrew/bin/python3 /usr/local/bin/python3 \
         /Library/Frameworks/Python.framework/Versions/Current/bin/python3 /usr/bin/python3; do
  if [ -n "$p" ] && [ -x "$p" ] && "$p" -c "import telethon" 2>/dev/null; then PY="$p"; break; fi
done
[ -n "$PY" ] || { echo "❌ Telethon o'rnatilgan python3 topilmadi."; exit 1; }
echo "🐍 Python: $PY"

# 2. Sozlama qayerda: ~/Spektr (avval o'rnatilgan) yoki Downloads.
if [ -f "$UY/spektr_telegram.json" ]; then
  ESKI="$UY"
elif [ -f "$MANBA/spektr_telegram.json" ]; then
  ESKI="$MANBA"
else
  echo "❌ spektr_telegram.json topilmadi (Downloads'da yordamchi bir marta qo'lda ishga tushirilgan bo'lishi kerak)."
  exit 1
fi

# 3. Ishlab turgan yordamchini to'xtatish: bitta Telegram sessiyasi ikki joyda ishlasa, Telegram uni bekor qilishi mumkin.
launchctl bootout "$GUI/$NOM" 2>/dev/null || true
pkill -f "spektr_telegram.py" 2>/dev/null || true
sleep 3

# 4. Fayllarni ~/Spektr ga ko'chirish. Sozlama va sessiya KO'CHIRILADI (nusxa emas) — Downloads'dan qo'lda
#    ikkinchi marta ishga tushirib yuborilmasin.
mkdir -p "$UY"
if [ "$MANBA" != "$UY" ]; then
  for f in spektr_telegram.py natija_fayl.py; do
    if [ -f "$MANBA/$f" ]; then cp -p "$MANBA/$f" "$UY/$f"; fi
  done
fi
[ -f "$UY/spektr_telegram.py" ] || { echo "❌ spektr_telegram.py topilmadi."; exit 1; }
"$PY" - "$ESKI" "$UY" <<'PY'
import json, shutil, sys
from pathlib import Path
eski, uy = Path(sys.argv[1]), Path(sys.argv[2])
c = json.loads((eski / "spektr_telegram.json").read_text("utf-8"))
s = Path(c.get("sessiya") or (eski / "spektr"))
if not s.is_absolute():
    s = eski / s
stem = s.name[:-8] if s.name.endswith(".session") else s.name
for qosh in (".session", ".session-journal"):
    src, dst = s.parent / (stem + qosh), uy / (stem + qosh)
    if src.exists() and src.resolve() != dst.resolve():
        shutil.move(str(src), str(dst))
if not (uy / (stem + ".session")).exists():
    sys.exit("Telegram sessiya fayli topilmadi: " + str(s.parent / (stem + ".session")))
c["sessiya"] = str(uy / stem)
(uy / "spektr_telegram.json").write_text(json.dumps(c, ensure_ascii=False, indent=2), "utf-8")
if eski != uy:
    (eski / "spektr_telegram.json").unlink()
if (eski / "natijalar").is_dir() and not (uy / "natijalar").exists():
    shutil.move(str(eski / "natijalar"), str(uy / "natijalar"))
print("📁 Sozlama va sessiya:", uy)
PY

# 5. launchd: kirganda ishga tushadi, yiqilsa qayta yoqiladi. caffeinate -is: ishlab turganda Mac uxlamaydi.
mkdir -p "$HOME/Library/LaunchAgents"
cat > "$PLIST" <<EOF
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>Label</key><string>$NOM</string>
  <key>ProgramArguments</key>
  <array>
    <string>/usr/bin/caffeinate</string><string>-is</string>
    <string>$PY</string><string>$UY/spektr_telegram.py</string>
  </array>
  <key>WorkingDirectory</key><string>$UY</string>
  <key>EnvironmentVariables</key>
  <dict><key>PYTHONUNBUFFERED</key><string>1</string><key>LANG</key><string>en_US.UTF-8</string></dict>
  <key>RunAtLoad</key><true/>
  <key>KeepAlive</key><true/>
  <key>ThrottleInterval</key><integer>30</integer>
  <key>StandardOutPath</key><string>$UY/yordamchi.log</string>
  <key>StandardErrorPath</key><string>$UY/yordamchi.log</string>
</dict>
</plist>
EOF
: > "$UY/yordamchi.log"
launchctl bootstrap "$GUI" "$PLIST" 2>/dev/null || launchctl load -w "$PLIST"

# 6. Ishga tushganini tekshirish.
echo "⏳ Ishga tushyapti..."
for i in $(seq 1 90); do
  if grep -q "yordamchisi ishlayapti" "$UY/yordamchi.log" 2>/dev/null; then
    echo "✅ Tayyor! Yordamchi endi o'zi ishlaydi — Terminal'ni yopsangiz ham, Mac qayta yoqilganda ham."
    echo
    echo "   Holatini ko'rish:   tail -f ~/Spektr/yordamchi.log"
    echo "   Qayta ishga tushirish: launchctl kickstart -k $GUI/$NOM"
    echo "   O'chirish:          bash ~/Downloads/yordamchi_avtomatik.sh --ochir"
    echo
    echo "⚠️  Endi «python3 spektr_telegram.py» ni qo'lda ishga TUSHIRMANG — u allaqachon ishlayapti."
    exit 0
  fi
  sleep 1
done
echo "❌ 90 soniyada ishga tushmadi. Oxirgi qatorlar:"
tail -20 "$UY/yordamchi.log"
exit 1
