# 🔍 Jak dostat web do Google vyhledávání

## ⚠️ DŮLEŽITÉ: Váš web není vidět v Google, protože není zaindexovaný!

To je **normální** u nových webů. Google automaticky **NEPŘIDÁ** váš web do vyhledávání. Musíte ho manuálně nahlásit.

---

## 📋 KROK ZA KROKEM NÁVOD

### **KROK 1: Google Search Console (NEJDŮLEŽITĚJŠÍ!)**

1. **Jděte na:** https://search.google.com/search-console
2. **Přihlaste se** Google účtem
3. **Klikněte "Přidat web" (Add property)**
4. **Zadejte URL:** `https://www.mujdruhymozek.cz`
5. **Ověřte vlastnictví** (nejjednodušší metoda: **HTML tag**)
   - Search Console vám dá meta tag typu: `<meta name="google-site-verification" content="XXX...">`
   - Tento tag přidáte do `/app/frontend/public/index.html` v sekci `<head>`
   - Klikněte "Ověřit"

### **KROK 2: Odešlete Sitemap**

Po ověření webu:
1. V Google Search Console klikněte **"Sitemaps"** (vlevo v menu)
2. **Zadejte:** `https://www.mujdruhymozek.cz/sitemap.xml`
3. **Klikněte "Submit"**

### **KROK 3: Požádejte o indexaci**

1. V Search Console klikněte **"URL Inspection"** (nahoře)
2. **Zadejte:** `https://www.mujdruhymozek.cz`
3. Klikněte **"Request Indexing"** (Požádat o indexaci)

---

## ⏱️ **KDY SE WEB OBJEVÍ V GOOGLE?**

- **První indexace:** 1-7 dní (někdy i 24 hodin)
- **Zobrazení ve výsledcích:** 1-4 týdny
- **Vyšší pozice:** 1-3 měsíce (závisí na konkurenci a kvalitě obsahu)

---

## 🚀 **JAK URYCHLIT INDEXACI?**

### 1. **Backlinky** (nejdůležitější!)
   Sdílejte váš web na:
   - **Sociální sítě** (LinkedIn, Facebook, Instagram)
   - **Profesní profily** (LinkedIn personal website)
   - **Online fóra** (Reddit, české diskuse o produktivitě)
   - **Medium, Substack** (články o "druhém mozku")

### 2. **Google My Business**
   Pokud máte firmu, přidejte web do Google Business Profile

### 3. **Pravidelný obsah**
   - Přidávejte nové sekce/blog příspěvky
   - Aktualizujte sitemap.xml (datum `lastmod`)

### 4. **Rychlost webu**
   ✅ Váš web je rychlý (React SPA)

### 5. **Mobile-friendly**
   ✅ Váš web je responsive

---

## 🔧 **CO JE UŽ HOTOVO NA VAŠEM WEBU?**

✅ **SEO Meta tagy** (title, description, keywords)  
✅ **Open Graph** (Facebook, LinkedIn preview)  
✅ **Twitter Card** (Twitter preview)  
✅ **Sitemap.xml** (aktualizován na 2026-04-19)  
✅ **Robots.txt** (povoluje indexaci)  
✅ **JSON-LD Schema** (Person, WebSite, HowTo)  
✅ **Canonical URL**  
✅ **Mobile responsive**  
✅ **Rychlý loading**

---

## 📊 **SLEDOVÁNÍ VÝSLEDKŮ**

Po nastavení Google Search Console můžete sledovat:
- **Kolik lidí vidí váš web** v Google
- **Na jaké dotazy** se zobrazuje
- **Klik-through rate (CTR)**
- **Průměrná pozice** ve výsledcích

---

## ⚡ **EXTRA TIPY PRO LEPŠÍ VIDITELNOST**

### 1. **Optimalizace pro klíčová slova**
   Vaše hlavní klíčová slova:
   - "druhý mozek"
   - "jak si dělat poznámky"
   - "organizace poznámek"
   - "systém poznámek"
   - "osobní knowledge management"

   ✅ Tyto klíčové slova už máte v meta tags!

### 2. **Rich Snippets**
   ✅ Už máte implementované JSON-LD schemas

### 3. **Alt texty u obrázků**
   - Přidejte popisné alt texty k obrázkům
   - Např. author-photo.jpg by měl mít alt="Jana - tvůrce Můj druhý mozek"

### 4. **Interní odkazy**
   ✅ Už používáte scroll navigation

---

## 🎯 **REALISTICKÁ OČEKÁVÁNÍ**

**"Můj druhý mozek"** - středně konkurenční fráze
- **1. stránka Google:** 1-3 měsíce s pravidelným obsahem
- **Top 3 pozice:** 3-6 měsíců s backlinky a kvalitním obsahem

**"druhý mozek"** - vysoce konkurenční (Building a Second Brain, knihy, atd.)
- **1. stránka:** 3-6 měsíců
- **Top 10:** 6-12 měsíců (vyžaduje silné backlinky a autoritu)

---

## ✅ **CHECKLIST - CO UDĚLAT DNES**

1. [ ] Zaregistrovat web v Google Search Console
2. [ ] Ověřit vlastnictví webu
3. [ ] Odeslat sitemap.xml
4. [ ] Požádat o indexaci hlavní stránky
5. [ ] Sdílet web na sociálních sítích (první backlinky!)
6. [ ] Přidat web do LinkedIn profilu
7. [ ] Napsat článek na Medium/Substack o "druhém mozku" s odkazem na váš web

---

## 📞 **POTŘEBUJETE POMOC?**

Pokud máte problémy s Google Search Console, napište mi a pomohu vám s konkrétními kroky!

---

**Poslední aktualizace:** 19.04.2026  
**Status:** Web je SEO-ready, čeká na indexaci ✅
