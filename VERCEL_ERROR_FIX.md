# 🔧 Oprava 31 chyb na Vercelu

## 📋 Nejčastější příčiny:

### 1. **Chybějící @emergentbase/visual-edits**
Vercel nemůže stáhnout tento balíček z Emergent assetu.

### 2. **Import cesty @/**
Některé importy používají `@/` alias

### 3. **Node verze**
Může být potřeba správná Node.js verze

---

## ✅ ŘEŠENÍ:

Pošli mi prosím chyby, mezitím zkus toto:

### Fix 1: Odstraň problematický balíček

Na Vercelu v **Environment Variables** přidej:
```
SKIP_PREFLIGHT_CHECK=true
```

### Fix 2: Nastav správnou Node verzi

V **Project Settings** → **General**:
```
Node.js Version: 18.x
```

### Fix 3: Ujisti se, že Root Directory je správně

```
Root Directory: frontend
```

### Fix 4: Přidej vercel-build script

Potřebuju vidět chyby, ale možná pomoct toto:

Zkopíruj tenhle nový package.json:

```json
{
  "name": "frontend",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    ... (tvé dependencies)
  },
  "scripts": {
    "start": "craco start",
    "build": "craco build",
    "vercel-build": "craco build"
  }
}
```

---

## 🎯 CO POTŘEBUJU OD TEBE:

**Pošli mi:**

1. **Screenshot deployment logu z Vercelu**
   - Klikni na failed deployment
   - Zkopíruj text chyb NEBO pošli screenshot

2. **První 5 chyb**, které vidíš

3. **Screenshot Vercel nastavení:**
   - Root Directory
   - Build Command  
   - Output Directory

---

## 💡 Rychlé tipy:

Zatímco mi posíláš chyby, zkus:

1. **Redeploy:**
   - Na Vercelu klikni "Redeploy" (někdy pomůže)

2. **Vyčisti cache:**
   - V deployment settings → "Redeploy without cache"

3. **Zkontroluj GitHub:**
   - Je na GitHubu správná struktura?
   - Jsou tam všechny soubory?

---

**Jakmile mi pošleš chyby, okamžitě to opravím! 🚀**
