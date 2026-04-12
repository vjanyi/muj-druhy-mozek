# 🎨 LOUVILLE II FONT - Instalační návod

## ✅ CO BYLO ZMĚNĚNO:

Typografie aktualizována na:
- **Louville II** → Všechny nadpisy (H1, H2, H3)
- **Inter** → Veškerý text, tlačítka, popisky

---

## 📦 JAK PŘIDAT LOUVILLE II FONT:

### **VARIANTA 1: Máš font soubory (.woff2, .woff, .ttf)**

1. **Vytvoř složku pro fonty:**
   ```
   /app/frontend/public/fonts/
   ```

2. **Nahraj Louville II soubory:**
   ```
   /app/frontend/public/fonts/
   ├── LouvilleII-Regular.woff2
   ├── LouvilleII-Regular.woff
   ├── LouvilleII-SemiBold.woff2
   ├── LouvilleII-SemiBold.woff
   ├── LouvilleII-Bold.woff2
   └── LouvilleII-Bold.woff
   ```

3. **Aktualizuj LandingPage.css:**

   Nahraď současné `@font-face` pravidla tímto:

   ```css
   /* Louville II Regular */
   @font-face {
     font-family: 'Louville II';
     src: url('/fonts/LouvilleII-Regular.woff2') format('woff2'),
          url('/fonts/LouvilleII-Regular.woff') format('woff');
     font-weight: 400;
     font-style: normal;
     font-display: swap;
   }

   /* Louville II SemiBold */
   @font-face {
     font-family: 'Louville II';
     src: url('/fonts/LouvilleII-SemiBold.woff2') format('woff2'),
          url('/fonts/LouvilleII-SemiBold.woff') format('woff');
     font-weight: 600;
     font-style: normal;
     font-display: swap;
   }

   /* Louville II Bold */
   @font-face {
     font-family: 'Louville II';
     src: url('/fonts/LouvilleII-Bold.woff2') format('woff2'),
          url('/fonts/LouvilleII-Bold.woff') format('woff');
     font-weight: 700;
     font-style: normal;
     font-display: swap;
   }
   ```

---

### **VARIANTA 2: Font je na Adobe Fonts / Typekit**

Pokud máš Louville II přes Adobe Fonts:

1. **Získej embed kód z Adobe Fonts**

2. **Přidej do `/app/frontend/public/index.html` do `<head>`:**
   ```html
   <link rel="stylesheet" href="https://use.typekit.net/TVUJ_KOD.css">
   ```

3. **V LandingPage.css odstraň** `@font-face` pravidla (Adobe je načte automaticky)

---

### **VARIANTA 3: Nemáš Louville II**

Pokud font nemáš, používá se **fallback**: `Playfair Display` (velmi podobný elegantní serif)

**Aktuální nastavení:**
```css
--font-heading: 'Louville II', 'Playfair Display', Georgia, 'Times New Roman', serif;
```

To znamená:
1. Pokusí se načíst Louville II
2. Pokud není dostupný → použije Playfair Display
3. Pokud ani ten není → Georgia
4. Poslední možnost → Times New Roman

**Playfair Display se načítá automaticky** (není potřeba instalace)

---

## 🔍 KDE SEHNAT LOUVILLE II:

Louville II je **prémiový komerční font**. Možnosti:

### **1. MyFonts.com**
https://www.myfonts.com/
→ Hledej "Louville II"
→ Kup licenci (web font license)

### **2. Adobe Fonts** (součást Creative Cloud)
Pokud máš Adobe Creative Cloud předplatné:
→ fonts.adobe.com
→ Aktivuj Louville II

### **3. Fonts.com**
https://www.fonts.com/
→ Hledej a kup licenci

### **4. Alternativa zdarma:**
Pokud nechceš kupovat, použij podobný font:
- **Playfair Display** (Google Fonts) ← UŽ IMPLEMENTOVÁNO jako fallback
- **Cormorant Garamond** (Google Fonts)
- **Libre Baskerville** (Google Fonts)

---

## ✅ AKTUÁLNÍ STAV:

**CSS je připraveno:**
```css
:root {
  --font-heading: 'Louville II', 'Playfair Display', Georgia, serif;
  --font-body: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}
```

**Všude použito správně:**
- ✅ H1, H2, H3 → `var(--font-heading)`
- ✅ Paragraphs, buttons → `var(--font-body)`
- ✅ Fallback fonty nastaveny

---

## 🚀 CO UDĚLAT:

### **Pokud máš Louville II soubory:**
1. Nahraj do `/public/fonts/`
2. Aktualizuj `@font-face` v CSS (viz VARIANTA 1)
3. Commit + push na GitHub
4. Redeploy na Vercel

### **Pokud nemáš Louville II:**
- **Nic nedělej!** Fallback Playfair Display se používá automaticky
- Web vypadá skvěle i bez něj (velmi podobný vzhled)

### **Pokud chceš koupit:**
1. Kup web font licenci (MyFonts, Adobe Fonts)
2. Stáhni .woff2 soubory
3. Postupuj podle VARIANTY 1

---

## 📋 CHECKLIST:

- [x] CSS aktualizováno na Louville II
- [x] Fallback fonty nastaveny (Playfair Display)
- [x] Inter pro body text
- [x] Font variables (--font-heading, --font-body)
- [x] Build funguje ✓
- [ ] Louville II soubory nahrány (volitelné)
- [ ] `@font-face` aktualizováno s cestami (pokud máš soubory)

---

## 🎯 VÝSLEDEK:

**Web je FUNKČNÍ i bez Louville II**
→ Používá Playfair Display (krásný serif font zdarma)

**Jakmile přidáš Louville II soubory**
→ Automaticky se použije místo fallbacku

---

**Otázky?**
- Mám ti pomoct s instalací konkrétního fontu?
- Chceš použít alternativní font zdarma?
- Potřebuješ pomoct se stažením/konverzí?
