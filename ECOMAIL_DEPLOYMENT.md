# 🚀 ECOMAIL Integrace - Deployment Guide

## ✅ Co bylo změněno:

### 1. **Přechod z FastAPI na Vercel Serverless Function**
- ❌ Odstraněn FastAPI backend pro emaily (`/backend/routes/emails.py`)
- ✅ Vytvořena Vercel Serverless Function (`/api/subscribe.js`)
- ✅ Frontend upravený pro volání `/api/subscribe`

### 2. **ECOMAIL API Integrace**
- **API Klíč**: Bezpečně uložený v environment variables
- **List ID**: 1
- **Endpoint**: `https://api2.ecomailapp.cz/lists/1/subscribers`

---

## 📦 Deployment na Vercel

### Krok 1: Příprava projektu

1. **Zkopírujte celý `/app/frontend` folder** do vašeho GitHub repository
2. **Zkopírujte `/app/api` folder** do root GitHub repository
3. **Zkopírujte `/app/vercel.json`** do root GitHub repository

Výsledná struktura v GitHubu:
```
your-repo/
├── api/
│   └── subscribe.js
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
└── vercel.json
```

### Krok 2: Nastavení Vercel

1. Přihlaste se na [vercel.com](https://vercel.com)
2. Klikněte na **"Add New Project"**
3. Import z GitHub repository
4. **Build Settings**:
   - Framework Preset: **Create React App**
   - Root Directory: **`frontend`**
   - Build Command: **`yarn build`**
   - Output Directory: **`build`**

### Krok 3: Environment Variables

V Vercel project settings → **Environment Variables**, přidejte:

```
ECOMAIL_API_KEY = 2b0adccba47da8496b64d51b80521f8d5a3c4ed03efccf015d92de2fd35cf86a
ECOMAIL_LIST_ID = 1
```

⚠️ **DŮLEŽITÉ**: API klíč musí být přidán jako **Secret** (Vercel automaticky skryje hodnotu)

### Krok 4: Deploy

Klikněte na **"Deploy"** a počkejte 2-3 minuty.

---

## 🧪 Testování po deploymentu

### Test 1: Email formulář
1. Otevřete váš web
2. Scrollujte na e-mail sekci
3. Zadejte email: `test@example.com`
4. Klikněte **"STÁHNOUT PDF"**
5. ✅ Měli byste vidět: "Díky! PDF si můžeš stáhnout níže."
6. ✅ PDF by se měl automaticky stáhnout

### Test 2: Kontrola v ECOMAIL

1. Přihlaste se do [ecomail.cz](https://ecomail.cz)
2. Jděte na **Kontakty** → **Seznamy kontaktů**
3. Otevřete svůj seznam (ID: 1)
4. ✅ Měli byste vidět nového subscribera: `test@example.com`

### Test 3: Duplikát prevence
1. Zkuste odeslat stejný email znovu
2. ✅ Měli byste vidět: "Email already subscribed"

---

## 🔧 Lokální vývoj (optional)

Pokud chcete testovat lokálně:

### Instalace Vercel CLI:
```bash
npm install -g vercel
```

### Spuštění:
```bash
cd /app/frontend
vercel dev
```

Tím se spustí:
- Frontend na `http://localhost:3000`
- API functions na `http://localhost:3000/api/subscribe`

---

## 📝 Co dělat po deploym

### Důležité soubory pro GitHub:

**Zkopírujte tyto soubory:**
1. `/app/frontend/**` (celý frontend folder)
2. `/app/api/subscribe.js` (serverless function)
3. `/app/vercel.json` (Vercel config)
4. `/app/frontend/public/druhy-mozek-guide.pdf` (váš PDF průvodce)

**NESMÍ jít do GitHubu:**
- `/app/backend/**` (už není potřeba pro ECOMAIL)
- `/app/.env` (obsahuje API klíč - NIKDY nepublikovat!)

---

## ⚙️ Troubleshooting

### Problém: "Email se neuložil do ECOMAIL"

**Řešení:**
1. Zkontrolujte Vercel logs: Project → Deployments → [Latest] → Functions
2. Zkontrolujte ECOMAIL API klíč v Environment Variables
3. Zkontrolujte List ID (mělo by být `1`)

### Problém: "CORS error"

**Řešení:**
Serverless function má správné CORS headers. Pokud problém přetrvává:
1. Zkontrolujte že `/api/subscribe.js` existuje v deploymentu
2. Zkontrolujte `vercel.json` routes

### Problém: "Function timeout"

**Řešení:**
ECOMAIL API by měl odpovědět do 3 sekund. Pokud timeout:
1. Zkontrolujte ECOMAIL API status
2. Zkuste znovu později

---

## 🎉 Shrnutí

✅ **ECOMAIL integrace kompletní**
✅ **Čistě statický deployment** (React + Vercel Serverless Functions)
✅ **Žádný samostatný backend** potřeba
✅ **PDF download funkční**
✅ **API klíč bezpečně uložený**

**Výhody tohoto řešení:**
- 💰 Zdarma na Vercel (až 100K requests/měsíc)
- ⚡ Rychlé nasazení (2-3 minuty)
- 🔒 Bezpečné (API klíč na serveru)
- 🌍 CDN globálně distribuované
- 📈 Automatické škálování

---

**Máte-li jakékoliv problémy, zkontrolujte Vercel deployment logs!**
