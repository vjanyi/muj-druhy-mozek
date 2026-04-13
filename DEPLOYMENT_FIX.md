# 🚀 Deployment Guide - OPRAVENO

## ⚠️ DŮLEŽITÁ ZMĚNA:

API funkce byla přesunuta do správného místa pro Vercel deployment.

---

## 📁 Nová struktura pro GitHub:

**Zkopírujte tyto soubory do GitHubu:**

```
frontend/
├── api/
│   └── subscribe.js          ← ✅ ECOMAIL serverless funkce
├── public/
│   ├── druhy-mozek-guide.pdf ← ✅ PDF soubor
│   ├── test-ecomail.html     ← ✅ Test stránka
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   └── ... (všechny React soubory)
├── package.json
└── vercel.json               ← ✅ Vercel konfigurace
```

**❌ NEMUSÍTE kopírovat:**
- `/backend/` folder (není potřeba)
- `/api/` folder v rootu (přesunuto do `/frontend/api/`)

---

## ⚙️ Vercel nastavení:

### Build Settings:
```
Framework Preset: Create React App
Root Directory: frontend
Build Command: yarn build
Output Directory: build
```

### Environment Variables:
**Vercel automaticky použije hodnoty z `vercel.json`, ALE pro jistotu je přidejte manuálně:**

```
ECOMAIL_API_KEY = 2b0adccba47da8496b64d51b80521f8d5a3c4ed03efccf015d92de2fd35cf86a
ECOMAIL_LIST_ID = 1
```

---

## 🧪 Po deployment - Test:

### 1. Otevřete test stránku:
```
https://www.mujdruhymozek.cz/test-ecomail.html
```

### 2. Klikněte "TESTOVAT ECOMAIL API"

**Očekávaný výsledek:**
```json
{
  "message": "Email saved successfully",
  "email": "test@example.com",
  "already_subscribed": false,
  "subscriber_id": "..."
}
```

### 3. Zkontrolujte ECOMAIL:
- Jděte na [ecomail.cz](https://ecomail.cz)
- Kontakty → Seznamy kontaktů → Seznam ID: 1
- ✅ Měl by tam být email `test@example.com`

---

## 🐛 Pokud stále nefunguje:

### Check 1: Vercel Function existuje?
1. Vercel Dashboard → Functions
2. Měla by tam být funkce `/api/subscribe`
3. Pokud NE, zkontrolujte že `/frontend/api/subscribe.js` je v GitHubu

### Check 2: Environment Variables
1. Vercel → Settings → Environment Variables
2. Zkontrolujte že jsou nastavené
3. **REDEPLOY** projekt po přidání

### Check 3: Logs
1. Deployments → [Latest] → Functions → `/api/subscribe`
2. Podívejte se na errory

---

## ✅ Shrnutí změn:

**Co se změnilo:**
- `/api/subscribe.js` → `/frontend/api/subscribe.js`
- `/vercel.json` → `/frontend/vercel.json`
- Zjednodušená Vercel konfigurace

**Proč:**
- Vercel má Root Directory = `frontend`
- API funkce musí být UVNITŘ root directory
- Teď Vercel správně najde `/api/subscribe`

---

**Po push do GitHubu by ECOMAIL měl začít fungovat!** 🎉
