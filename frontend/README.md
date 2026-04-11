# Můj druhý mozek

Minimalistická landing page pro projekt "Můj druhý mozek".

## 🚀 Nasazení na Vercel

### DŮLEŽITÉ: Nasazuj JEN tuto složku (frontend)

**Na GitHubu by měly být JEN tyto soubory:**
```
/
├── public/
├── src/
├── package.json
├── vercel.json
├── tailwind.config.js
├── craco.config.js
└── další config soubory...
```

**NESMÍ tam být:**
- ❌ Složka `backend/`
- ❌ Složka `app/`
- ❌ Jakékoliv soubory mimo frontend

### Jak nasadit:

1. **Na Vercel dashboardu:**
   - Framework Preset: **Create React App**
   - Root Directory: **`.`** (tečka nebo prázdné)
   - Build Command: **`yarn build`**
   - Output Directory: **`build`**
   - Install Command: **`yarn install`**

2. **Klikni Deploy**

### Build příkazy:

- **Build**: `yarn build`
- **Start (lokálně)**: `yarn start`
- **Install**: `yarn install`

## 📦 Co obsahuje vercel.json:

```json
{
  "version": 2,
  "name": "muj-druhy-mozek",
  "builds": [{
    "src": "package.json",
    "use": "@vercel/static-build",
    "config": { "distDir": "build" }
  }],
  "routes": [
    // Static assets
    // SPA routing (všechny cesty → index.html)
  ]
}
```

## ⚠️ Řešení problémů:

### "Multiple services detected"
→ Ujisti se, že na GitHubu je JEN frontend, ne celý projekt

### Build selhává
→ Zkontroluj, že všechny dependencies jsou v package.json

### 404 při refreshi stránky
→ Zkontroluj routes v vercel.json (měly by přesměrovat na index.html)

## 🔗 Odkazy

- Instagram: [@muj_druhy_mozek](https://www.instagram.com/muj_druhy_mozek/)
- Vercel Docs: https://vercel.com/docs

---

**Vytvořeno s ❤️**
