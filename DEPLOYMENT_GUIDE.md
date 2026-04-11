# Můj druhý mozek - Vercel Deployment Guide

## 📋 Co je připraveno

Projekt je nyní připraven k nasazení na Vercel. Všechny potřebné soubory jsou nakonfigurovány:

- ✅ `vercel.json` - Konfigurace pro Vercel
- ✅ `package.json` - Build skripty
- ✅ React aplikace v `/app/frontend`
- ✅ Routing nastavení pro SPA

---

## 🚀 Krok za krokem: Nasazení na Vercel

### **Metoda 1: Přes GitHub (Doporučeno)**

Toto je nejjednodušší způsob s automatickým nasazením při každé změně.

#### **Krok 1: Nahraj projekt na GitHub**

1. Jdi na [github.com](https://github.com) a přihlásit se
2. Klikni na "New repository" (zelené tlačítko)
3. Pojmenuj repository: `muj-druhy-mozek`
4. Nastav jako **Public** nebo **Private** (oba fungují)
5. Klikni "Create repository"

#### **Krok 2: Nahraj kód do GitHub**

Zkopíruj celý obsah složky `/app/frontend` na svůj počítač, pak v terminálu:

```bash
cd /cesta/k/frontend
git init
git add .
git commit -m "Initial commit - Můj druhý mozek landing page"
git branch -M main
git remote add origin https://github.com/TVOJE_JMENO/muj-druhy-mozek.git
git push -u origin main
```

*Pozn: Nahraď `TVOJE_JMENO` svým GitHub uživatelským jménem*

#### **Krok 3: Připoj Vercel k GitHub**

1. Jdi na [vercel.com](https://vercel.com)
2. Klikni "Sign Up" nebo "Log In"
3. Vyber **"Continue with GitHub"**
4. Autorizuj Vercel přístup k tvým repositářům

#### **Krok 4: Import projektu**

1. Na Vercel dashboardu klikni **"Add New Project"**
2. Najdi a vyber repository `muj-druhy-mozek`
3. Klikni **"Import"**

#### **Krok 5: Konfigurace projektu**

Vercel automaticky detekuje Create React App. Zkontroluj nastavení:

```
Framework Preset: Create React App
Root Directory: ./  (nebo prázdné)
Build Command: yarn build
Output Directory: build
Install Command: yarn install
```

**DŮLEŽITÉ**: Pokud je tvůj kód přímo v root složce projektu, ponech "Root Directory" prázdné. Pokud je v podsložce, nastav správnou cestu.

#### **Krok 6: Nasaď projekt**

1. Klikni **"Deploy"**
2. Počkej 2-3 minuty (Vercel staví projekt)
3. Hotovo! 🎉

---

### **Metoda 2: Přes Vercel CLI (Rychlé nasazení)**

Pokud nechceš používat GitHub:

#### **Krok 1: Nainstaluj Vercel CLI**

```bash
npm install -g vercel
```

#### **Krok 2: Přihlásit se**

```bash
vercel login
```

Zadej svůj email - dostaneš ověřovací email.

#### **Krok 3: Nasaď projekt**

```bash
cd /app/frontend
vercel
```

Odpověz na otázky:
- Set up and deploy? **Y**
- Which scope? Vyber svůj účet
- Link to existing project? **N**
- What's your project's name? `muj-druhy-mozek`
- In which directory is your code located? `./`
- Want to override settings? **N**

#### **Krok 4: Production deployment**

```bash
vercel --prod
```

Hotovo! 🎉

---

## 🔧 Po nasazení

### **Získáš:**
- Production URL: `https://muj-druhy-mozek.vercel.app`
- Automatické HTTPS
- CDN distribuce (rychlé načítání po celém světě)
- Automatické buildy při push na GitHub (Metoda 1)

### **Vlastní doména (volitelné)**

Pokud chceš vlastní doménu (např. `mujdruhymozek.cz`):

1. Na Vercel dashboardu jdi do svého projektu
2. Klikni "Settings" → "Domains"
3. Přidej svou doménu
4. Následuj instrukce pro DNS nastavení

---

## 📱 Test po nasazení

Po nasazení otevři URL a zkontroluj:

- ✅ Stránka se načte
- ✅ Všechny sekce jsou viditelné
- ✅ CTA tlačítka vedou na Instagram
- ✅ Animace fungují (fade-in při scrollu)
- ✅ Responzivní design (otevři na mobilu)
- ✅ Oranžové tečky a šipky jsou viditelné

---

## 🔄 Aktualizace webu

### **S GitHub (Metoda 1):**
```bash
git add .
git commit -m "Aktualizace obsahu"
git push
```
Vercel automaticky nasadí novou verzi za 2-3 minuty.

### **S Vercel CLI (Metoda 2):**
```bash
cd /app/frontend
vercel --prod
```

---

## ⚠️ Řešení problémů

### **Build selhává:**
- Zkontroluj, že `vercel.json` je ve správné složce
- Ujisti se, že všechny dependencies jsou v `package.json`
- Zkus build lokálně: `yarn build`

### **404 při refreshi stránky:**
- Zkontroluj, že `vercel.json` obsahuje rewrites
- Vercel by měl automaticky přesměrovat všechny cesty na `index.html`

### **Styling nefunguje:**
- Ujisti se, že `build` složka obsahuje CSS soubory
- Zkontroluj, že Tailwind CSS je správně nakonfigurován

---

## 📊 Monitoring

Na Vercel dashboardu můžeš sledovat:
- Návštěvnost
- Build logy
- Performance metriky
- Error reporting

---

## 💡 Tipy

1. **Preview URLs**: Každý commit do GitHub branch vytvoří preview URL
2. **Rollback**: Můžeš se vrátit k jakékoli předchozí verzi
3. **Environment Variables**: Pro budoucí rozšíření (newsletter, analytics)
4. **Analytics**: Zapni Vercel Analytics pro sledování návštěvnosti

---

## ✅ Checklist před nasazením

- [ ] Instagram URL je správně nastavené (`https://www.instagram.com/muj_druhy_mozek/`)
- [ ] Všechny texty jsou správně (žádné placeholdery)
- [ ] Design vypadá dobře na mobilu i desktopu
- [ ] Footer rok je 2026
- [ ] Otestováno lokálně: `yarn build` && otevři `build/index.html`

---

**Potřebuješ pomoc?**
- Vercel dokumentace: https://vercel.com/docs
- Vercel support: https://vercel.com/support

Hodně štěstí s nasazením! 🚀
