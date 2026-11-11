#!/usr/bin/env python3
"""Savol-javob natijalari — guruhga bitta PDF fayl (tahlil — shu skriptning o'zi, AI ishlatilmaydi).

1-bet: guruh reytingi, ball taqsimoti, mavzular bo'yicha guruh natijasi va xulosa.
Keyingi betlar: har o'quvchiga alohida bet — bali, mavzular bo'yicha natija, kuchli tomonlar,
qayta o'qish kerak bo'lgan mavzular (sababi bilan), qarzdorlik (oldingi darslardan: yopilgan / yopilmagan),
tavsiya va har bir savol (to'g'ri javobi bilan).

Yordamchi (spektr_telegram.py) shu fayldan foydalanadi: saytda «Guruhga natija» bosilganda PDF yasab, guruhga yuboradi.
Terminaldan ham ishlaydi:

    python3 natija_fayl.py natijalar/G0010-2026-11-09.json           # PDF yasaydi (yubormaydi)
    python3 natija_fayl.py natijalar/G0010-2026-11-09.json --yubor   # yoqiq yordamchi orqali guruhga qayta yuboradi
    python3 natija_fayl.py natijalar/G0010-2026-11-09.json --sinov   # faqat o'zingizga (Saqlangan xabarlar)

natijalar/ papkasi yordamchi turgan joyda: har yuborilgan dars shu yerda .json va .pdf bo'lib saqlanadi.
Kerakli kutubxona (bir marta):  pip3 install reportlab
"""

import io
import json
import re
import sys
from datetime import datetime
from pathlib import Path
from xml.sax.saxutils import escape

UL = {"berdi": 1.0, "chala": 0.5, "berolmadi": 0.0}
NATIJA_NOMI = {"berdi": "To‘g‘ri", "chala": "Chala", "berolmadi": "Javob yo‘q"}
DARAJA = {1: "I", 2: "II", 3: "III"}
YAXSHI, QAYTA = 0.75, 0.5


def _urug(s):
    h = 0
    for c in str(s):
        h = (h * 31 + ord(c)) & 0xFFFFFFFF
    return h


def _tanla(variantlar, kalit):
    """Har o'quvchiga boshqa gap: bir xil matn takrorlanmasin (kalit — o'quvchi)."""
    return variantlar[_urug(kalit) % len(variantlar)]


def _qisqa(s, n=95):
    s = re.sub(r"\*\*|`", "", str(s or "")).replace("\n", " ").strip()
    return s if len(s) <= n else s[: n - 1].rstrip() + "…"


# ── Tahlil (qoidalar asosida) ───────────────────────────────────────────────

def mavzular_holati(o):
    """Mavzu → {ul (0..1), n, daraja: {1: [jami, ul]}, xato: [savollar], chala}. Savollar tartibida."""
    m = {}
    for s in o.get("savollar", []):
        x = m.setdefault(s.get("mavzu") or "Mavzu", {"j": 0.0, "n": 0, "daraja": {}, "xato": [], "chala": 0})
        u = UL.get(s.get("natija"), 0)
        x["j"] += u
        x["n"] += 1
        dr = x["daraja"].setdefault(s.get("daraja") or 1, [0, 0.0])
        dr[0] += 1
        dr[1] += u
        if s.get("natija") == "berolmadi":
            x["xato"].append(s)
        elif s.get("natija") == "chala":
            x["chala"] += 1
    for x in m.values():
        x["ul"] = x["j"] / x["n"]
    return m


def _sabab(x, kalit):
    """Zaif mavzu: qaysi darajada qiynalgani bo'yicha aniq izoh (faqat so'ralgan darajalar haqida gapiradi)."""
    d = x["daraja"]

    def ul(k):
        return (d[k][1] / d[k][0]) if k in d else None

    joy = {1: "asosiy ta’rif va atamalarda", 2: "bilimni qo‘llashda (reaksiyalar, misollar)", 3: "«nega?» degan savollarni tushuntirishda"}
    zaif = [k for k in (1, 2, 3) if ul(k) is not None and ul(k) < 0.5]
    kuchli = [k for k in (1, 2, 3) if ul(k) is not None and ul(k) >= 0.75]
    if x["chala"] >= max(1, x["n"] // 2) and not x["xato"]:
        asosiy = "Javoblaringiz to‘liq emas — kalit atamalar tushib qolyapti."
    elif zaif and kuchli and min(kuchli) < zaif[0]:
        asosiy = _tanla([f"{'Ta’riflarni' if min(kuchli) == 1 else 'Qo‘llashni'} bilasiz, lekin {joy[zaif[0]]} qiynaldingiz.",
                         f"Asos bor, ammo {joy[zaif[0]]} bo‘shliq qoldi."], kalit)
    elif zaif:
        asosiy = _tanla([f"Qiyinchilik {joy[zaif[0]]}.", f"Asosiy bo‘shliq — {joy[zaif[0]]}."], kalit)
    else:
        asosiy = "Mavzu bo‘yicha javoblar yetarli emas."
    if x["xato"]:
        sv = _qisqa(x["xato"][0].get("savol"))
        asosiy += f" Javob berilmagan savol: {sv if sv.startswith('«') else '«' + sv + '»'}"
    return asosiy


def oquvchi_tahlili(o):
    k = o.get("k", o.get("ism", ""))
    mh = mavzular_holati(o)
    yaxshi = [m for m, x in mh.items() if x["ul"] >= YAXSHI]
    orta = [m for m, x in mh.items() if QAYTA <= x["ul"] < YAXSHI]
    qayta = [{"mavzu": m, "sabab": _sabab(x, k + m)} for m, x in mh.items() if x["ul"] < QAYTA]
    qarz = o.get("qarz") or {"yopildi": [], "ochiq": []}
    # Darajalar bo'yicha (I — ta'rif, II — qo'llash, III — tushuntirish)
    dar = {}
    for s in o.get("savollar", []):
        x = dar.setdefault(s.get("daraja") or 1, [0, 0.0])
        x[0] += 1
        x[1] += UL.get(s.get("natija"), 0)
    ball = o.get("ball")
    gap = []
    if ball is None or not o.get("savollar"):
        gap.append("Bu darsda savol berilmagan.")
    elif ball >= 85:
        gap.append(_tanla(["Ajoyib natija — mavzularni puxta o‘zlashtirgansiz.", "Zo‘r ishladingiz: deyarli barcha savollarga to‘liq javob berdingiz.", "A’lo natija, shu darajani saqlab qoling."], k))
    elif ball >= 70:
        gap.append(_tanla(["Yaxshi natija, ozgina e’tibor bilan a’loga chiqasiz.", "Natijangiz yaxshi — bir-ikki bo‘shliqni yopsangiz, yanada yuqori bo‘ladi."], k))
    elif ball >= 50:
        gap.append(_tanla(["O‘rtacha natija: asosiy narsalarni bilasiz, lekin bo‘shliqlar bor.", "Natija qoniqarli, ammo bir nechta mavzuni mustahkamlash kerak."], k))
    else:
        gap.append(_tanla(["Bu safar natija past — mavzularni qaytadan, sekin va puxta o‘qib chiqish kerak.", "Natija past: tayyorgarlikni kuchaytirish zarur."], k))
    if qayta:
        nomlar = ", ".join(q["mavzu"] for q in qayta[:2])
        gap.append(_tanla([f"Avval {nomlar} bo‘yicha konspektingizni qayta ko‘rib, darslikdagi ta’riflarni o‘z so‘zlaringiz bilan aytib chiqing.",
                           f"{nomlar} mavzusini darslikdan qayta o‘qing va har bir ta’rifni ovoz chiqarib takrorlang."], k))
    if 3 in dar and dar[3][0] and dar[3][1] / dar[3][0] < 0.5 and ball is not None and ball >= 50:
        gap.append("«Nega shunday?» turidagi savollarga tayyorlaning: har qoidaning sababini tushuntira olish muhim.")
    if qarz.get("yopildi"):
        gap.append(f"Oldingi qarzingiz yopildi ({', '.join(x['mavzu'] for x in qarz['yopildi'][:2])}) — bu jiddiy mehnat natijasi, barakalla!")
    eski = [x for x in qarz.get("ochiq", []) if not x.get("yangi")]
    if eski:
        gap.append(f"Eski qarzlaringiz hali yopilmagan: {', '.join(x['mavzu'] for x in eski[:3])}. Keyingi darsgacha shularni ham tayyorlang.")
    kon = o.get("konspekt") or {}
    if kon.get("yoq"):
        gap.append("Konspekt topshirilmadi — u ham bahoga kiradi.")
    return {"yaxshi": yaxshi, "orta": orta, "qayta": qayta, "tavsiya": " ".join(gap), "mavzular": mh, "darajalar": dar}


def guruh_tahlili(d):
    oq = [o for o in d.get("oquvchilar", []) if o.get("savollar")]
    ballar = [o["ball"] for o in oq if o.get("ball") is not None]
    mav = {}
    for o in oq:
        for m, x in mavzular_holati(o).items():
            y = mav.setdefault(m, [0.0, 0, 0])
            y[0] += x["ul"]
            y[1] += 1
            y[2] += x["n"]
    mavzular = sorted(((m, y[0] / y[1], y[1], y[2]) for m, y in mav.items()), key=lambda t: t[1])
    xato = {}
    for o in oq:
        for s in o.get("savollar", []):
            if s.get("natija") == "berolmadi" and s.get("savol"):
                xato[s["savol"]] = xato.get(s["savol"], 0) + 1
    yopildi = sum(len((o.get("qarz") or {}).get("yopildi", [])) for o in oq)
    ochiq = sum(len((o.get("qarz") or {}).get("ochiq", [])) for o in oq)
    gap = []
    if ballar:
        o_ = round(sum(ballar) / len(ballar))
        gap.append(f"Guruhning o‘rtacha bali — {o_}. " + ("Umumiy daraja yaxshi." if o_ >= 70 else "Umumiy daraja o‘rtacha, tayyorgarlikni kuchaytirish kerak." if o_ >= 50 else "Umumiy daraja past — mavzular qayta ko‘rib chiqilishi kerak."))
    ko = [m for m in mavzular if m[2] >= 2]
    if ko:
        qiyin = [m for m in ko if m[1] < QAYTA][:2]
        oson = [m for m in reversed(ko) if m[1] >= YAXSHI][:2]
        if qiyin:
            gap.append("Ko‘pchilik qiynalgan mavzu: " + ", ".join(f"{m[0]} ({round(m[1] * 100)}%)" for m in qiyin) + ".")
        if oson:
            gap.append("Eng yaxshi o‘zlashtirilgan: " + ", ".join(m[0] for m in oson) + ".")
    if xato:
        s, n = max(xato.items(), key=lambda t: t[1])
        if n >= 2:
            gap.append(f"{n} kishi javob bera olmagan savol: «{_qisqa(s, 110)}»")
    if yopildi:
        gap.append(f"Shu darsda {yopildi} ta oldingi qarz yopildi.")
    if ochiq:
        gap.append(f"Guruhda hali yopilmagan qarzlar: {ochiq} ta.")
    return {"umumiy": " ".join(gap), "mavzular": mavzular}


def tahlil(d):
    return {"guruh": guruh_tahlili(d), "oquvchilar": {o["k"]: oquvchi_tahlili(o) for o in d.get("oquvchilar", [])}}


def reyting(oquvchilar):
    """Teng ballilar bir xil o'rinda (1, 2, 2, 4 …)."""
    tartib = sorted(oquvchilar, key=lambda o: -(o.get("ball") if o.get("ball") is not None else -1))
    out, oldingi, orin = [], object(), 0
    for i, o in enumerate(tartib, 1):
        if o.get("ball") != oldingi:
            orin, oldingi = i, o.get("ball")
        out.append((orin, o))
    return out


# ── Dizayn ──────────────────────────────────────────────────────────────────

SHRIFTLAR = [
    ("/System/Library/Fonts/Supplemental/Arial.ttf", "/System/Library/Fonts/Supplemental/Arial Bold.ttf"),
    ("/Library/Fonts/Arial.ttf", "/Library/Fonts/Arial Bold.ttf"),
    ("C:/Windows/Fonts/arial.ttf", "C:/Windows/Fonts/arialbd.ttf"),
    ("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"),
    ("/usr/share/fonts/truetype/liberation/LiberationSans-Regular.ttf", "/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf"),
]

PASTKI = str.maketrans("₀₁₂₃₄₅₆₇₈₉", "0123456789")
YUQORI = str.maketrans("⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻", "0123456789+−")
ALMASH = {"⇌": "⇄", "⟶": "→", "\u00a0": " "}


def m(s):
    """Oddiy matn → Paragraph matni: XML qochiriladi, H₂SO₄ indekslari <sub>/<super>, **qalin** va `kod` olib tashlanadi."""
    s = str(s or "")
    for a, b in ALMASH.items():
        s = s.replace(a, b)
    s = re.sub(r"\*\*(.+?)\*\*", r"\1", s).replace("`", "")
    s = escape(s)
    s = re.sub(r"[₀-₉]+", lambda x: f"<sub>{x.group(0).translate(PASTKI)}</sub>", s)
    s = re.sub(r"[⁰-⁹⁺⁻]+", lambda x: f"<super>{x.group(0).translate(YUQORI)}</super>", s)
    return s.replace("\n", "<br/>")


def test_matn(o, qisqa=False):
    """Nazorat testi: ishlangan bo'lsa — foiz (bir nechta bo'lsa o'rtacha), aks holda «ishlanmagan»."""
    t = o.get("test")
    if t is None:
        return "—"
    foizlar = [x["foiz"] for x in t if isinstance(x.get("foiz"), (int, float))]
    if foizlar:
        f = round(sum(foizlar) / len(foizlar))
        rang = "#16A34A" if f >= 85 else "#2563EB" if f >= 70 else "#D97706" if f >= 50 else "#DC2626"
        return f"<font color='{rang}'><b>{f}%</b></font>" if qisqa else f"{f}%" + (f" ({len(foizlar)} ta test)" if len(foizlar) > 1 else "")
    return ("hali yo‘q" if qisqa else "hali ishlanmagan (test 24 soat ochiq)") if t else "ochilmagan"


def pdf_yasa(d, tx):
    from reportlab.lib import colors
    from reportlab.lib.pagesizes import A4
    from reportlab.lib.styles import ParagraphStyle
    from reportlab.lib.units import mm
    from reportlab.pdfbase import pdfmetrics
    from reportlab.pdfbase.ttfonts import TTFont
    from reportlab.platypus import CondPageBreak, Flowable, KeepTogether, PageBreak, Paragraph, SimpleDocTemplate, Spacer, Table, TableStyle

    sh, shq = "Helvetica", "Helvetica-Bold"
    for a, b in SHRIFTLAR:
        if Path(a).exists() and Path(b).exists():
            pdfmetrics.registerFont(TTFont("Spektr", a))
            pdfmetrics.registerFont(TTFont("Spektr-Qalin", b))
            sh, shq = "Spektr", "Spektr-Qalin"
            break

    H = colors.HexColor
    R = {"brend": H("#1E3A8A"), "brend2": H("#2563EB"), "siyoh": H("#0F172A"), "kul": H("#64748B"), "chiziq": H("#E2E8F0"),
         "fon": H("#F8FAFC"), "yashil": H("#16A34A"), "yashil_f": H("#DCFCE7"), "sariq": H("#D97706"), "sariq_f": H("#FEF3C7"),
         "qizil": H("#DC2626"), "qizil_f": H("#FEE2E2"), "kok_f": H("#DBEAFE"), "oltin": H("#F59E0B"), "kumush": H("#94A3B8"),
         "bronza": H("#B45309"), "oq": colors.white, "trek": H("#E5E7EB")}

    def rang_ball(v):
        return R["yashil"] if v >= 85 else R["brend2"] if v >= 70 else R["sariq"] if v >= 50 else R["qizil"]

    def ust(n, **k):
        return ParagraphStyle(n, fontName=k.pop("f", sh), fontSize=k.pop("s", 9.5), leading=k.pop("l", 13), textColor=k.pop("c", R["siyoh"]), **k)

    MATN, KICHIK, QALIN, BOLIM, KARTA_S = ust("m"), ust("k", s=8, l=10.5, c=R["kul"]), ust("q", f=shq), ust("b", f=shq, s=12, l=15, spaceBefore=10, spaceAfter=6), ust("ks", f=shq, s=9.5, l=12)
    guruh, sana = d.get("guruh", ""), d.get("sana", "")
    W = A4[0] - 30 * mm

    class Bar(Flowable):
        def __init__(self, v, w=40 * mm, h=6, rang=None):
            super().__init__()
            self.v, self.w, self.h, self.rang = max(0, min(1, v)), w, h, rang

        def wrap(self, *_):
            return self.w, self.h

        def draw(self):
            c = self.canv
            c.setFillColor(R["trek"])
            c.roundRect(0, 0, self.w, self.h, self.h / 2, stroke=0, fill=1)
            if self.v > 0:
                c.setFillColor(self.rang or rang_ball(self.v * 100))
                c.roundRect(0, 0, max(self.h, self.w * self.v), self.h, self.h / 2, stroke=0, fill=1)

    class Nishon(Flowable):
        """O'rin raqami doirada: 1 — oltin, 2 — kumush, 3 — bronza."""

        def __init__(self, n, r=8):
            super().__init__()
            self.n, self.r = n, r

        def wrap(self, *_):
            return 2 * self.r, 2 * self.r

        def draw(self):
            c = self.canv
            medal = self.n <= 3
            c.setFillColor({1: R["oltin"], 2: R["kumush"], 3: R["bronza"]}.get(self.n, R["fon"]))
            c.setStrokeColor(R["chiziq"])
            c.circle(self.r, self.r, self.r, stroke=0 if medal else 1, fill=1)
            c.setFillColor(R["oq"] if medal else R["siyoh"])
            c.setFont(shq, 8.5)
            c.drawCentredString(self.r, self.r - 3, str(self.n))

    class Sarlavha(Flowable):
        """Rangli sarlavha bloki: chapda matnlar, o'ngda ixtiyoriy ball halqasi."""

        def __init__(self, katta, kichik, izoh="", ball=None, orin=None, h=34 * mm):
            super().__init__()
            self.katta, self.kichik, self.izoh, self.ball, self.orin, self.h = katta, kichik, izoh, ball, orin, h

        def wrap(self, aw, *_):
            self.w = aw
            return aw, self.h

        def draw(self):
            c = self.canv
            c.saveState()
            p = c.beginPath()
            p.roundRect(0, 0, self.w, self.h, 10)
            c.clipPath(p, stroke=0, fill=0)
            c.setFillColor(R["brend"])
            c.rect(0, 0, self.w, self.h, stroke=0, fill=1)
            c.setFillColor(H("#2B4BA8"))
            c.circle(self.w - 6 * mm, self.h, 28 * mm, stroke=0, fill=1)
            c.setFillColor(H("#3557BD"))
            c.circle(self.w + 6 * mm, self.h - 6 * mm, 18 * mm, stroke=0, fill=1)
            c.restoreState()
            x = 8 * mm
            if self.orin:
                c.setFillColor({1: R["oltin"], 2: R["kumush"], 3: R["bronza"]}.get(self.orin, H("#334155")))
                c.circle(x + 6 * mm, self.h / 2, 6 * mm, stroke=0, fill=1)
                c.setFillColor(R["oq"])
                c.setFont(shq, 12)
                c.drawCentredString(x + 6 * mm, self.h / 2 - 4, str(self.orin))
                x += 16 * mm
            maks = self.w - x - (36 * mm if self.ball is not None else 10 * mm)
            o = 20
            while o > 11 and pdfmetrics.stringWidth(self.katta, shq, o) > maks:
                o -= 1
            c.setFillColor(R["oq"])
            c.setFont(shq, o)
            c.drawString(x, self.h / 2 + 3, self.katta)
            c.setFont(sh, 9.5)
            c.setFillColor(H("#C7D2FE"))
            c.drawString(x, self.h / 2 - 11, self.kichik)
            if self.izoh:
                f = 8
                while f > 6 and pdfmetrics.stringWidth(self.izoh, sh, f) > maks:
                    f -= 0.5
                c.setFont(sh, f)
                c.drawString(x, self.h / 2 - 23, self.izoh)
            if self.ball is not None:
                r, cx, cy = 11 * mm, self.w - 18 * mm, self.h / 2
                c.setLineWidth(6)
                c.setStrokeColor(H("#3B5BA9"))
                c.circle(cx, cy, r, stroke=1, fill=0)
                if self.ball > 0:
                    c.setStrokeColor(H("#4ADE80") if self.ball >= 85 else H("#93C5FD") if self.ball >= 70 else H("#FCD34D") if self.ball >= 50 else H("#FCA5A5"))
                    c.setLineCap(1)
                    p = c.beginPath()
                    p.arc(cx - r, cy - r, cx + r, cy + r, startAng=90, extent=-3.6 * min(self.ball, 99.9))
                    c.drawPath(p, stroke=1, fill=0)
                    c.setLineCap(0)
                c.setFillColor(R["oq"])
                c.setFont(shq, 17)
                c.drawCentredString(cx, cy - 2, str(self.ball))
                c.setFont(sh, 6.5)
                c.drawCentredString(cx, cy - 10, "/ 100")

    KW = (W - 9 * mm) / 4

    def katak(yuqori, past, fon, chegara=True):
        t = Table([[yuqori], [past]], colWidths=[KW], cornerRadii=[6, 6, 6, 6])
        st = [("BACKGROUND", (0, 0), (-1, -1), fon), ("LEFTPADDING", (0, 0), (-1, -1), 9), ("TOPPADDING", (0, 0), (0, 0), 8), ("BOTTOMPADDING", (0, -1), (-1, -1), 8)]
        if chegara:
            st.append(("BOX", (0, 0), (-1, -1), 0.6, R["chiziq"]))
        t.setStyle(TableStyle(st))
        return t

    def qator4(kataklar):
        t = Table([kataklar], colWidths=[KW + 3 * mm] * 3 + [KW])
        t.setStyle(TableStyle([("LEFTPADDING", (0, 0), (-1, -1), 0), ("RIGHTPADDING", (0, 0), (-1, -1), 0)]))
        return t

    def kpi(qiymat, nom, rang):
        return katak(Paragraph(f"<font name='{shq}' size='18' color='{rang}'>{m(qiymat)}</font>", ust("kv", l=21)), Paragraph(m(nom), KICHIK), R["fon"])

    def karta(sarlavha, qatorlar, rang, fon):
        ichi = [[Paragraph(f"<font color='{rang.hexval()}'>{m(sarlavha)}</font>", KARTA_S)]] + [[q] for q in qatorlar]
        t = Table(ichi, colWidths=[W], cornerRadii=[6, 6, 6, 6])
        t.setStyle(TableStyle([("BACKGROUND", (0, 0), (-1, -1), fon), ("LINEBEFORE", (0, 0), (0, -1), 3, rang),
                               ("LEFTPADDING", (0, 0), (-1, -1), 10), ("RIGHTPADDING", (0, 0), (-1, -1), 10),
                               ("TOPPADDING", (0, 0), (-1, -1), 2.5), ("BOTTOMPADDING", (0, 0), (-1, -1), 2.5),
                               ("TOPPADDING", (0, 0), (-1, 0), 7), ("BOTTOMPADDING", (0, -1), (-1, -1), 7)]))
        return KeepTogether([t, Spacer(0, 6)])

    def pill(matn, rang, fon):
        return f"<font backColor='{fon.hexval()}' color='{rang.hexval()}' name='{shq}'>&nbsp;{m(matn)}&nbsp;</font>"

    def jadval_uslubi(valign="MIDDLE"):
        return [("VALIGN", (0, 0), (-1, -1), valign), ("LINEBELOW", (0, 0), (-1, -1), 0.5, R["chiziq"]), ("TOPPADDING", (0, 0), (-1, -1), 4.5), ("BOTTOMPADDING", (0, 0), (-1, -1), 4.5)]

    oquvchilar = list(d.get("oquvchilar", []))
    rey = reyting(oquvchilar)
    individual = bool(d.get("individual"))
    g = tx["guruh"]
    hikoya = []

    # ═══ 1-bet ═══
    mavzu_izoh = "Har bir o‘quvchi o‘z darsi bo‘yicha so‘raldi" if individual else "Mavzular: " + "; ".join(d.get("mavzular", []))
    if d.get("kurator"):
        mavzu_izoh += f"  ·  Kurator: {d['kurator']}"
    hikoya += [Sarlavha("Savol-javob natijalari", f"{guruh}  ·  {sana}", mavzu_izoh), Spacer(0, 8)]
    ballar = [o["ball"] for o in oquvchilar if o.get("ball") is not None]
    ortacha = round(sum(ballar) / len(ballar)) if ballar else 0
    konsp = (d.get("konspekt") or {}).get("ortacha")
    k4 = (str(konsp), "Konspekt o‘rtacha", R["brend2"].hexval()) if konsp is not None else (str(len(d.get("nb", []))), "Darsga kelmadi", R["qizil"].hexval())
    hikoya += [qator4([kpi(str(len(oquvchilar)), "O‘quvchi so‘raldi", R["brend"].hexval()), kpi(str(ortacha), "O‘rtacha ball", rang_ball(ortacha).hexval()),
                       kpi(str(max(ballar)) if ballar else "—", "Eng yuqori ball", R["yashil"].hexval()), kpi(*k4)]),
               Paragraph(m("Reyting"), BOLIM)]

    test_bor = bool(d.get("testOlindi"))
    sat = [[Paragraph(m(x), KICHIK) for x in ["O‘rin", "O‘quvchi", "Natija", "Ball", "To‘g‘ri · Chala · Yo‘q", "Konspekt"] + (["Test"] if test_bor else [])]]
    for orin, o in rey:
        def son(n, o=o):
            return sum(1 for s in o.get("savollar", []) if s.get("natija") == n)
        b = o.get("ball")
        kon = o.get("konspekt") or {}
        sat.append([
            Nishon(orin),
            [Paragraph(m(o.get("ism", "")), QALIN)] + ([Paragraph(m(o["kurs"]), KICHIK)] if individual and o.get("kurs") else []),
            Bar((b or 0) / 100, 36 * mm),
            Paragraph(f"<font name='{shq}' size='12' color='{rang_ball(b or 0).hexval()}'>{'—' if b is None else b}</font>", ust("bb", l=14)),
            Paragraph(f"<font color='#16A34A'>{son('berdi')}</font>  ·  <font color='#D97706'>{son('chala')}</font>  ·  <font color='#DC2626'>{son('berolmadi')}</font>", MATN),
            Paragraph(m("—" if not kon else "topshirmadi" if kon.get("yoq") else str(kon.get("ball"))), MATN),
        ] + ([Paragraph(test_matn(o, qisqa=True), MATN if "%" in test_matn(o, qisqa=True) else KICHIK)] if test_bor else []))
    eni = [13 * mm, 0, 40 * mm, 16 * mm, 34 * mm, 20 * mm] + ([22 * mm] if test_bor else [])
    eni[1] = W - sum(eni)
    rt = Table(sat, colWidths=eni, repeatRows=1)
    st = jadval_uslubi()
    for i, (orin, _) in enumerate(rey, 1):
        if orin <= 3:
            st.append(("BACKGROUND", (0, i), (-1, i), H(["#FFFBEB", "#F8FAFC", "#FFF7ED"][orin - 1])))
    rt.setStyle(TableStyle(st))
    hikoya.append(rt)

    bandlar = [("A’lo", "85–100", lambda v: v >= 85, R["yashil"], R["yashil_f"]), ("Yaxshi", "70–84", lambda v: 70 <= v < 85, R["brend2"], R["kok_f"]),
               ("Qoniqarli", "50–69", lambda v: 50 <= v < 70, R["sariq"], R["sariq_f"]), ("Past", "0–49", lambda v: v < 50, R["qizil"], R["qizil_f"])]
    kataklar = []
    for nom, oraliq, f, rang, fon in bandlar:
        n = sum(1 for v in ballar if f(v))
        kataklar.append(katak(Paragraph(f"<font name='{shq}' size='15' color='{rang.hexval()}'>{n}</font> <font size='8' color='#64748B'>kishi</font>", ust("t", l=18)),
                              Paragraph(f"<font name='{shq}' color='{rang.hexval()}'>{m(nom)}</font> <font size='7.5' color='#64748B'>{oraliq}</font>", MATN), fon, False))
    hikoya.append(KeepTogether([Paragraph(m("Ball taqsimoti"), BOLIM), qator4(kataklar)]))

    mv = [x for x in g["mavzular"] if x[2] >= 2] or g["mavzular"]
    if mv:
        sat = [[Paragraph(m(x), KICHIK) for x in ["Mavzu", "O‘zlashtirish", "%", "So‘raldi"]]]
        for nom, ul, kishi, savol in mv[:10]:
            sat.append([Paragraph(m(nom), MATN), Bar(ul, 50 * mm), Paragraph(f"<font name='{shq}' color='{rang_ball(ul * 100).hexval()}'>{round(ul * 100)}%</font>", MATN),
                        Paragraph(m(f"{kishi} kishi · {savol} savol"), KICHIK)])
        mt = Table(sat, colWidths=[W - 54 * mm - 16 * mm - 30 * mm, 54 * mm, 16 * mm, 30 * mm])
        mt.setStyle(TableStyle(jadval_uslubi()))
        hikoya += [CondPageBreak(40 * mm), Paragraph(m("Mavzular bo‘yicha guruh natijasi" + (" (qiyinidan boshlab)" if len(mv) > 1 else "")), BOLIM), mt]
    if g.get("umumiy"):
        hikoya += [Spacer(0, 8), karta("Guruh bo‘yicha xulosa", [Paragraph(m(g["umumiy"]), MATN)], R["brend2"], H("#EFF6FF"))]
    if d.get("nb"):
        hikoya.append(karta("Darsga kelmaganlar", [Paragraph(m(", ".join(d["nb"])), MATN)], R["qizil"], H("#FEF2F2")))
    hikoya.append(Paragraph(m("Keyingi betlarda har bir o‘quvchining shaxsiy natijasi, tahlili va qarzdorligi — o‘z ismingiz yozilgan betni oching."), KICHIK))

    # ═══ O'quvchi betlari ═══
    for orin, o in rey:
        hikoya.append(PageBreak())
        t = tx["oquvchilar"].get(o["k"]) or oquvchi_tahlili(o)
        kon = o.get("konspekt") or {}
        meta = [f"{len(o.get('savollar', []))} ta savol"]
        if o.get("kurs"):
            meta.insert(0, o["kurs"])
        if kon:
            meta.append("Konspekt: topshirilmadi" if kon.get("yoq") else f"Konspekt: {kon.get('ball')}/100")
        if d.get("testOlindi"):
            meta.append("Nazorat testi: " + test_matn(o))
        hikoya += [Sarlavha(o.get("ism", ""), f"{guruh}  ·  {sana}  ·  {orin}-o‘rin", "  ·  ".join(meta), o.get("ball"), orin, h=30 * mm), Spacer(0, 8)]

        def son(n, o=o):
            return sum(1 for s in o.get("savollar", []) if s.get("natija") == n)
        dar = t["darajalar"]
        chiplar = [pill(f"To‘g‘ri {son('berdi')}", R["yashil"], R["yashil_f"]), pill(f"Chala {son('chala')}", R["sariq"], R["sariq_f"]), pill(f"Javob yo‘q {son('berolmadi')}", R["qizil"], R["qizil_f"])]
        for k in (1, 2, 3):
            if k in dar and dar[k][0]:
                chiplar.append(pill(f"{DARAJA[k]} daraja {round(dar[k][1] / dar[k][0] * 100)}%", R["brend"], R["kok_f"]))
        hikoya += [Paragraph("&nbsp;&nbsp;".join(chiplar), ust("ch", l=15)), Spacer(0, 2)]

        if t["mavzular"]:
            sat = []
            for nom, x in t["mavzular"].items():
                holat = ("Yaxshi", R["yashil"], R["yashil_f"]) if x["ul"] >= YAXSHI else ("O‘rtacha", R["sariq"], R["sariq_f"]) if x["ul"] >= QAYTA else ("Qayta o‘qish", R["qizil"], R["qizil_f"])
                sat.append([Paragraph(m(nom), MATN), Bar(x["ul"], 42 * mm), Paragraph(f"<font name='{shq}'>{round(x['ul'] * 100)}%</font>", MATN), Paragraph(pill(holat[0], holat[1], holat[2]), MATN)])
            mt = Table(sat, colWidths=[W - 46 * mm - 16 * mm - 33 * mm, 46 * mm, 16 * mm, 33 * mm])
            mt.setStyle(TableStyle(jadval_uslubi()))
            hikoya += [Paragraph(m("Mavzular bo‘yicha natija"), BOLIM), mt, Spacer(0, 8)]

        if t["yaxshi"]:
            hikoya.append(karta("Kuchli tomonlar", [Paragraph(m("Yaxshi o‘zlashtirilgan: " + ", ".join(t["yaxshi"])), MATN)], R["yashil"], H("#F0FDF4")))
        if t["qayta"]:
            hikoya.append(karta("Qayta o‘qish kerak", [Paragraph(f"<font name='{shq}'>{m(q['mavzu'])}</font> — {m(q['sabab'])}", MATN) for q in t["qayta"]], R["qizil"], H("#FEF2F2")))
        qarz = o.get("qarz") or {}
        if qarz.get("yopildi") or qarz.get("ochiq"):
            qq = [Paragraph(pill("Yopildi", R["yashil"], R["yashil_f"]) + f"  {m(y['mavzu'])} <font color='#64748B' size='8'>— {m(y['bosh'])}da qarz bo‘lgan, {m(y['yopildi'])}da yopildi</font>", MATN) for y in qarz.get("yopildi", [])]
            for y in qarz.get("ochiq", []):
                if y.get("yangi"):
                    yorliq, izoh = pill("Yangi qarz", R["qizil"], R["qizil_f"]), "shu darsda paydo bo‘ldi"
                else:
                    yorliq, izoh = pill("Qarz", R["sariq"], R["sariq_f"]), f"{y['bosh']}dan beri" + (f", {y['urinish']} marta yopilmadi" if y.get("urinish") else ", hali qayta so‘ralmagan")
                qq.append(Paragraph(yorliq + f"  {m(y['mavzu'])} <font color='#64748B' size='8'>— {m(izoh)}</font>", MATN))
            qq.append(Paragraph(m("Qarz — 50% dan past bilingan mavzu. Keyingi darslarda shu mavzudan so‘ralib 75% va undan yuqori natija ko‘rsatilsa, qarz yopiladi."), KICHIK))
            hikoya.append(karta("Qarzdorlik", qq, R["sariq"], H("#FFFBEB")))
        if t["tavsiya"]:
            hikoya.append(karta("Tavsiya", [Paragraph(m(t["tavsiya"]), MATN)], R["brend2"], H("#EFF6FF")))

        if o.get("savollar"):
            sat = [[Paragraph(m(x), KICHIK) for x in ["#", "Savol va to‘g‘ri javob", "Natija"]]]
            st = jadval_uslubi("TOP")
            for j, s in enumerate(o["savollar"], 1):
                n = s.get("natija")
                rang, fon = {"berdi": (R["yashil"], R["yashil_f"]), "chala": (R["sariq"], R["sariq_f"]), "berolmadi": (R["qizil"], R["qizil_f"])}.get(n, (R["kul"], R["fon"]))
                ichi = [Paragraph(m(f"{s.get('mavzu') or ''}  ·  {DARAJA.get(s.get('daraja'), '')} daraja"), KICHIK), Paragraph(m(s.get("savol") or "Savol bazadan o‘chirilgan"), MATN)]
                if s.get("javob"):
                    ichi.append(Paragraph("<font color='#64748B'>" + m("To‘g‘ri javob: " + s["javob"]) + "</font>", ust("tj", s=8.3, l=11)))
                sat.append([Paragraph(f"<font name='{shq}'>{j}</font>", MATN), ichi, Paragraph(pill(NATIJA_NOMI.get(n, n or ""), rang, fon), MATN)])
                st.append(("LINEBEFORE", (0, j), (0, j), 3, rang))
            jt = Table(sat, colWidths=[10 * mm, W - 10 * mm - 27 * mm, 27 * mm], repeatRows=1)
            jt.setStyle(TableStyle(st))
            hikoya += [CondPageBreak(30 * mm), Paragraph(m("Savollar"), BOLIM), jt]

    def pastki(c, doc):
        c.saveState()
        c.setStrokeColor(R["chiziq"])
        c.setLineWidth(0.6)
        c.line(15 * mm, 12 * mm, A4[0] - 15 * mm, 12 * mm)
        c.setFont(shq, 7.5)
        c.setFillColor(R["brend"])
        c.drawString(15 * mm, 8 * mm, "SPEKTR")
        c.setFont(sh, 7.5)
        c.setFillColor(R["kul"])
        c.drawString(15 * mm + pdfmetrics.stringWidth("SPEKTR ", shq, 7.5), 8 * mm, f"·  {guruh}  ·  {sana}  ·  Kimyo savol-javob")
        c.drawRightString(A4[0] - 15 * mm, 8 * mm, f"{doc.page}-bet")
        c.restoreState()

    buf = io.BytesIO()
    doc = SimpleDocTemplate(buf, pagesize=A4, leftMargin=15 * mm, rightMargin=15 * mm, topMargin=12 * mm, bottomMargin=17 * mm,
                            title=f"{guruh} · {sana} · natijalar", author=d.get("kurator") or "Spektr")
    doc.build(hikoya, onFirstPage=pastki, onLaterPages=pastki)
    return buf.getvalue()


def fayl_nomi(d):
    return f"{d.get('guruh') or 'guruh'}-{d.get('sanaIso') or datetime.now().date().isoformat()}.pdf"


def yasash(d):
    """Payload → (pdf bayt, tahlil). Yordamchi ham, terminal ham shuni chaqiradi."""
    tx = tahlil(d)
    return pdf_yasa(d, tx), tx


if __name__ == "__main__":
    if len(sys.argv) < 2 or sys.argv[1].startswith("-"):
        print(__doc__)
        sys.exit(1)
    manba = Path(sys.argv[1])
    d = json.loads(manba.read_text("utf-8"))
    if "--yubor" in sys.argv or "--sinov" in sys.argv:
        import urllib.request

        soz_yol = Path(__file__).with_name("spektr_telegram.json")
        soz = json.loads(soz_yol.read_text("utf-8")) if soz_yol.exists() else {}
        if "--sinov" in sys.argv:
            d["chat"] = "me"
        req = urllib.request.Request("http://127.0.0.1:8765/natija-fayl", data=json.dumps(d).encode(), method="POST",
                                     headers={"Content-Type": "application/json", "X-Spektr-Kalit": soz.get("kalit", "")})
        try:
            with urllib.request.urlopen(req, timeout=600) as r:
                j = json.loads(r.read() or b"{}")
        except OSError as e:
            sys.exit(f"Yordamchi javob bermadi ({e}): avval «python3 spektr_telegram.py» ni ishga tushiring.")
        print("Yuborildi." if j.get("ok") else f"Yuborilmadi: {j.get('xato')}")
        sys.exit(0)
    pdf, _ = yasash(d)
    chiq = manba.with_suffix(".pdf")
    chiq.write_bytes(pdf)
    print(f"Tayyor: {chiq} ({len(pdf) // 1024} KB)")
