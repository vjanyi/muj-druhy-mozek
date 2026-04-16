# 🖼️ PLACEHOLDER OBRÁZKY - NUTNÉ NAHRADIT

## ⚠️ DŮLEŽITÉ!

Následující obrázky jsou momentálně pouze **1x1 pixel placeholdery** a **MUSÍ BÝT NAHRAZENY** před nasazením na produkci:

### 📱 Apple Touch Icon
**Soubor:** `/app/frontend/public/apple-touch-icon.png`
- **Požadovaná velikost:** 180x180px
- **Formát:** PNG
- **Účel:** Ikona pro iOS zařízení (když si uživatel přidá stránku na plochu)
- **Design:** Minimalistický design s oranžovou barvou (#f4a261), bílé pozadí, abstract brain nebo note-taking symbol

### 🌐 Open Graph Image (Social Media)
**Soubor:** `/app/frontend/public/og-image.png`
- **Požadovaná velikost:** 1200x630px
- **Formát:** PNG
- **Účel:** Náhledový obrázek pro Facebook, LinkedIn, Twitter, WhatsApp
- **Design:** Landing page preview s nadpisem "Píšeš si poznámky", oranžový akcent (#f4a261), minimalistický styl

### 🔖 Favicon (32x32 a 16x16)
**Soubory:** 
- `/app/frontend/public/favicon-32x32.png`
- `/app/frontend/public/favicon-16x16.png`
- **Účel:** Ikony pro browser tabu a záložky
- **Design:** Zjednodušená verze Apple Touch Icon

---

## 🎨 Jak vytvořit náhradní obrázky?

### Možnost 1: Online nástroje
- **Canva** (canva.com) - šablony pro social media a ikony
- **Figma** (figma.com) - pro profesionální design
- **Remove.bg + Photopea** - pro úpravu obrázků

### Možnost 2: AI generátor (po doplnění kvóty)
Použij tento prompt:
```
OG Image (1200x630px):
"Minimalist landing page preview for 'Můj druhý mozek'. Clean design with lots of white space, 
elegant black handwritten heading 'Píšeš si poznámky', subtle orange accent #f4a261, 
professional and calm aesthetic"

Apple Touch Icon (180x180px):
"Simple app icon for 'Můj druhý mozek'. Minimalist design with orange accent #f4a261 
on white background, abstract brain or note symbol, clean and modern"
```

### Možnost 3: Najmi designéra
- Fiverr, Upwork - cena cca $10-30
- Poskytni jim brand identity (minimalistický styl, oranžová #f4a261, bílá, černá)

---

## ✅ Po vytvoření obrázků:

1. **Nahraď soubory** v `/app/frontend/public/`:
   - `og-image.png` (1200x630px)
   - `apple-touch-icon.png` (180x180px)
   - `favicon-32x32.png` (32x32px)
   - `favicon-16x16.png` (16x16px)

2. **Otestuj na produkci:**
   - Facebook Sharing Debugger: https://developers.facebook.com/tools/debug/
   - Twitter Card Validator: https://cards-dev.twitter.com/validator
   - LinkedIn Post Inspector: https://www.linkedin.com/post-inspector/

3. **Vyčisti cache:**
   - Někdy je potřeba počkat 24-48 hodin, než se nové obrázky zobrazí na social médiích

---

## 📌 Poznámky
- Současné placeholder soubory jsou funkční, ale vypadají špatně
- Priorita: **VYSOKÁ** - Social media sharing bez obrázku vypadá neprofesionálně
- Po nasazení na produkci je NUTNÉ obrázky nahradit co nejdříve
