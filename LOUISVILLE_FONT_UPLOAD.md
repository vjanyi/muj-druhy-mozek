# 📦 LOUISVILLE FONT - Návod na nahrání

## ✅ CO JSEM UDĚLAL:

1. ✅ Vytvořil složku `/app/frontend/public/fonts/`
2. ✅ Nakonfiguroval CSS pro Louisville font
3. ✅ Připravil @font-face pro:
   - `Louisville.woff` (Regular - font-weight: 400)
   - `LouisvilleBold.woff` (Bold - font-weight: 700)

---

## 📋 CO MUSÍŠ UDĚLAT:

### **KROK 1: Nahraj fonty na GitHub**

Máš **2 způsoby**:

---

#### **ZPŮSOB A: Přes GitHub Web (jednodušší)**

1. **Jdi na GitHub:**
   https://github.com/vjanyi/muj-druhy-mozek

2. **Vytvoř složku `public/fonts/`:**
   - Klikni na **"Add file"** → **"Create new file"**
   - Do pole "Name your file" napiš: `public/fonts/.gitkeep`
   - Klikni **"Commit new file"**
   
   (Tím vytvoříš prázdnou složku)

3. **Nahraj font soubory:**
   - Jdi do složky `public/fonts/`
   - Klikni **"Add file"** → **"Upload files"**
   - **Přetáhni nebo vyber:**
     - `Louisville.woff`
     - `LouisvilleBold.woff`
   - Klikni **"Commit changes"**

---

#### **ZPŮSOB B: Lokálně (pokud máš Git)**

1. **Naklonuj repozitář:**
   ```bash
   git clone https://github.com/vjanyi/muj-druhy-mozek.git
   cd muj-druhy-mozek
   ```

2. **Vytvoř složku:**
   ```bash
   mkdir -p public/fonts
   ```

3. **Zkopíruj font soubory:**
   ```bash
   # Zkopíruj Louisville.woff a LouisvilleBold.woff do public/fonts/
   cp /cesta/ke/tvym/fontum/*.woff public/fonts/
   ```

4. **Commit a push:**
   ```bash
   git add public/fonts/
   git commit -m "Add Louisville font files"
   git push
   ```

---

### **KROK 2: Ověř strukturu**

Na GitHubu by měla být tato struktura:

```
muj-druhy-mozek/
├── public/
│   └── fonts/
│       ├── Louisville.woff          ← MUSÍ BÝT ZDE
│       └── LouisvilleBold.woff      ← MUSÍ BÝT ZDE
├── src/
│   └── pages/
│       └── LandingPage.css          ← UŽ AKTUALIZOVÁNO ✓
└── ...
```

---

### **KROK 3: Redeploy na Vercel**

Jakmile jsou fonty na GitHubu:

1. **Jdi na Vercel dashboard**
2. **Projekt "muj-druhy-mozek"**
3. **Klikni "Redeploy"**

Vercel automaticky:
- Detekuje nové soubory
- Zkopíruje fonty do `/fonts/`
- Načte je podle CSS

---

## 🔍 JAK TO FUNGUJE:

### **CSS konfigurace:**

```css
/* Louisville Regular */
@font-face {
  font-family: 'Louisville';
  src: url('/fonts/Louisville.woff') format('woff');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

/* Louisville Bold */
@font-face {
  font-family: 'Louisville';
  src: url('/fonts/LouisvilleBold.woff') format('woff');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

/* Použití */
:root {
  --font-heading: 'Louisville', 'Playfair Display', Georgia, serif;
}
```

### **Kde se používá:**

- ✅ H1 (Hero title) → Louisville Bold
- ✅ H2 (Section headings) → Louisville Bold
- ✅ H3 (Subheadings) → Louisville Bold
- ✅ Zvýrazněné texty → Louisville Regular

---

## ✅ CHECKLIST:

- [x] CSS nakonfigurováno ✓
- [x] Složka `public/fonts/` vytvořena ✓
- [ ] `Louisville.woff` nahrán na GitHub
- [ ] `LouisvilleBold.woff` nahrán na GitHub
- [ ] Redeploy na Vercel
- [ ] Ověřit na živém webu, že font se načítá

---

## 🎯 PO NAHRÁNÍ:

### **Jak ověřit, že font funguje:**

1. **Otevři web** (Vercel URL)
2. **Pravý klik** na nadpis → **Inspect** (Prozkoumát prvek)
3. **V Computed styles** hledej `font-family`
4. **Mělo by tam být:** `Louisville` (ne Playfair Display)

### **Pokud se font nenačítá:**

1. **Zkontroluj Developer Console** (F12)
   - Hledej chyby typu "404 - font not found"

2. **Zkontroluj cestu:**
   - Fonty MUSÍ být v `public/fonts/`
   - NE v `src/fonts/`

3. **Zkontroluj názvy:**
   - Přesně `Louisville.woff` (case sensitive!)
   - Přesně `LouisvilleBold.woff`

---

## 📞 POTŘEBUJEŠ POMOC?

Ozvi se, pokud:
- Nevíš, jak nahrát soubory na GitHub
- Font se nenačítá po deployi
- Vidíš chyby v konzoli

**Teď nahraj fonty a ozvi se! 🚀**
