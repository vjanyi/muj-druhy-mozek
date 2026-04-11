# ✅ OPRAVA: Jak nasadit na Vercel

## 🎯 Problém:
Vercel hlásí: "vercel.json required to deploy projects with multiple services"

## 💡 Řešení:
Vercel vidí backend + frontend. Musíme nasadit JEN frontend.

---

## 📋 CO JSEM UDĚLAL:

### 1. Vytvořil nový `vercel.json` ✅
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
    // Statické soubory
    { "src": "/static/(.*)", "dest": "/static/$1" },
    // Assets (JS, CSS, obrázky)
    { "src": "/(.*)\\.(js|css|ico|png|jpg|jpeg|svg|woff|woff2)", "dest": "/$1.$2" },
    // SPA routing - všechno ostatní → index.html
    { "src": "/(.*)", "dest": "/index.html" }
  ]
}
```

**Co to dělá:**
- Říká Vercelu: "Tohle je statická React app"
- Nastavuje build output do složky `build/`
- Zajišťuje správné routování (SPA)

### 2. Zkontroloval `package.json` ✅
```json
{
  "scripts": {
    "build": "craco build",  ← Build příkaz
    "start": "craco start"   ← Lokální dev
  }
}
```

### 3. Aktualizoval README ✅
- Jasné instrukce pro nasazení
- Vysvětlení, co má a nemá být na GitHubu

### 4. Vytvořil `.gitignore` ✅
- Ignoruje node_modules, build, .env soubory

---

## 🚀 JAK NASADIT (Krok za krokem):

### VARIANTA A: GitHub má JEN frontend ✅ (Doporučeno)

Pokud na GitHubu (https://github.com/vjanyi/muj-druhy-mozek) máš JEN soubory z frontendu:

1. **Jdi na vercel.com**
2. **Přihlas se** (Continue with GitHub)
3. **"Add New Project"** → vyber `muj-druhy-mozek`
4. **Nastav:**
   ```
   Framework Preset: Create React App
   Root Directory: ./        (nebo prázdné)
   Build Command: yarn build
   Output Directory: build
   Install Command: yarn install
   ```
5. **Deploy** → Hotovo! 🎉

---

### VARIANTA B: GitHub má frontend + backend ❌ (Musíš upravit)

Pokud na GitHubu máš celý projekt (včetně backend složky):

#### Řešení 1: Nový repozitář (NEJJEDNODUŠŠÍ)

1. **Vytvoř nový repozitář na GitHubu:**
   - Název: `muj-druhy-mozek-web` (nebo jiný)

2. **Nahraj JEN frontend soubory:**
   - Všechny soubory ze složky `/app/frontend/`
   - BEZ složky backend
   - BEZ složky app

3. **Nasaď z nového repozitáře na Vercel**

#### Řešení 2: Říct Vercelu, kde je frontend

Na Vercel při importu nastav:
```
Root Directory: frontend
```

Tím Vercelu řekneš: "Nasazuj jen složku frontend"

---

## 🔍 KONTROLA před nasazením:

### Na GitHubu by měla být tato struktura:

```
muj-druhy-mozek/          ← Root repozitáře
├── public/               ✓
│   └── index.html
├── src/                  ✓
│   ├── pages/
│   ├── components/
│   ├── App.js
│   └── index.js
├── package.json          ✓
├── vercel.json           ✓ (NOVÝ - důležité!)
├── tailwind.config.js    ✓
├── craco.config.js       ✓
├── postcss.config.js     ✓
├── README.md             ✓
└── .gitignore            ✓
```

### NESMÍ tam být:
```
❌ backend/
❌ app/
❌ node_modules/
❌ build/
```

---

## ⚙️ Vercel nastavení (důležité):

```
Framework Preset:     Create React App
Root Directory:       ./    (pokud je frontend v rootu)
                      nebo
                      frontend  (pokud máš frontend ve složce)

Build Command:        yarn build
Output Directory:     build
Install Command:      yarn install
Node.js Version:      18.x (automaticky)
```

---

## ⚠️ Řešení chyb:

### "Multiple services detected"
→ Na GitHubu je backend + frontend
→ **Řešení:** Nastav Root Directory na `frontend` NEBO vytvoř nový repo jen s frontendem

### "Build failed"
→ Chybí dependencies v package.json
→ **Řešení:** Ujisti se, že package.json obsahuje všechny balíčky

### "404 Not Found" při refreshi
→ SPA routing nefunguje
→ **Řešení:** Zkontroluj routes v vercel.json

### "Module not found"
→ Špatné import cesty
→ **Řešení:** Zkontroluj, že všechny importy používají správné cesty

---

## ✅ Checklist:

- [ ] vercel.json je v root složce projektu
- [ ] package.json obsahuje "build": "craco build"
- [ ] Na GitHubu JEN frontend soubory (ne backend)
- [ ] .gitignore ignoruje node_modules a build
- [ ] Build funguje lokálně: `cd /app/frontend && yarn build`

---

## 📞 Další pomoc:

Pokud to stále nefunguje, pošli mi:
1. Screenshot chyby z Vercelu
2. Odkaz na tvůj GitHub repo
3. Screenshot Vercel nastavení (Framework, Root Directory, atd.)

**Určitě to zvládneme! 🚀**
