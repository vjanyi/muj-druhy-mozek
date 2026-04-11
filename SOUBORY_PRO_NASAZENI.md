# 📦 Soubory potřebné pro nasazení

## ✅ Tyto soubory MUSÍ být ve složce frontend:

```
frontend/
├── public/                    # Veřejné soubory
│   ├── index.html
│   └── ...
├── src/                       # Zdrojové soubory
│   ├── pages/
│   │   ├── LandingPage.jsx   ✓ (hlavní komponenta)
│   │   └── LandingPage.css   ✓ (styly)
│   ├── components/
│   │   └── ui/               ✓ (shadcn komponenty)
│   ├── App.js                ✓ (routing)
│   ├── App.css               ✓ (globální styly)
│   ├── index.css             ✓ (tailwind)
│   └── index.js
├── package.json              ✓ (dependencies + skripty)
├── vercel.json               ✓ (konfigurace Vercel)
├── craco.config.js           ✓ (CRACO konfigurace)
├── tailwind.config.js        ✓ (Tailwind konfigurace)
├── postcss.config.js         ✓ (PostCSS)
└── README.md                 ✓ (dokumentace)
```

## 🚫 Tyto soubory NEJSOU potřeba:

- `node_modules/` (Vercel si je nainstaluje sám)
- `build/` (Vercel vytvoří nový build)
- `.env` (není potřeba pro tento projekt)
- `.git/` (pokud nepoužíváš GitHub)

## 📋 Kontrolní seznam před nasazením:

### 1. Zkontroluj package.json:
```json
{
  "scripts": {
    "build": "craco build"  ← MUSÍ být
  }
}
```

### 2. Zkontroluj vercel.json:
```json
{
  "buildCommand": "yarn build",
  "outputDirectory": "build",
  "framework": "create-react-app"
}
```

### 3. Zkontroluj LandingPage.jsx:
- Instagram URL: `https://www.instagram.com/muj_druhy_mozek/` ✓
- Všechny texty v češtině ✓
- Žádné placeholdery ✓

### 4. Test build lokálně:
```bash
cd frontend
yarn install
yarn build
```
→ Mělo by uspět bez chyb

## 🎯 Co udělat:

### Varianta A: Přímé nahrání na Vercel
1. Stáhni celou složku `frontend/` na svůj počítač
2. Ujisti se, že obsahuje všechny soubory výše
3. Jdi na vercel.com → "Add New Project"
4. Přetáhni složku `frontend/`

### Varianta B: Přes GitHub
1. Vytvoř nový repozitář na GitHub
2. Nahraj složku `frontend/` (bez node_modules a build)
3. Připoj Vercel k repozitáři

## ⚠️ Důležité:

- **Root Directory**: Na Vercel nastav jako `./` (pokud nahrajes celou frontend složku)
- **Build Command**: `yarn build` (ne npm!)
- **Output Directory**: `build`
- **Node Version**: 18.x nebo vyšší (Vercel použije automaticky)

## 🔍 Jak ověřit, že je vše připraveno:

```bash
cd /app/frontend

# 1. Zkontroluj, že vercel.json existuje
ls -la vercel.json

# 2. Zkontroluj package.json
cat package.json | grep "build"

# 3. Zkus build
yarn build

# 4. Zkontroluj, že build složka obsahuje soubory
ls -la build/
```

Pokud všechny kroky proběhnou bez chyby → Projekt je připraven! ✅

---

**Další kroky:**
- Přečti si QUICK_START.md pro rychlé nasazení
- Nebo DEPLOYMENT_GUIDE.md pro detailní návod
