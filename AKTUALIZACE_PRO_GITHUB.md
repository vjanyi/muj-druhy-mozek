# 📦 AKTUALIZOVANÉ SOUBORY - Nahraj na GitHub

## ✅ CO JSEM OPRAVIL:

### 1. **Opravil date-fns verzi**
```json
"date-fns": "^3.6.0"  ← Byla 4.1.0, nyní kompatibilní
```

### 2. **Přidal .npmrc**
Říká Vercelu, aby použil správné nastavení

### 3. **Aktualizoval vercel.json**
```json
{
  "installCommand": "yarn install",  ← NOVÉ
  "buildCommand": "yarn build"       ← NOVÉ
}
```

### 4. **Odstranil problematický balíček**
`@emergentbase/visual-edits` - Vercel ho nemůže stáhnout

---

## 🚀 CO TEĎ UDĚLAT:

### VARIANTA A: Commitni změny (pokud máš GitHub nastavený)

```bash
cd /cesta/k/frontend
git add .
git commit -m "Fix: Vercel deployment - oprava dependencies"
git push
```

Vercel automaticky spustí nový build.

---

### VARIANTA B: Nahraj soubory ručně

Na GitHubu (**https://github.com/vjanyi/muj-druhy-mozek**):

#### 1. Aktualizuj `package.json`
- Najdi soubor na GitHubu
- Klikni "Edit" (ikona tužky)
- Změň řádek:
  ```json
  "date-fns": "^3.6.0",  ← Změň z 4.1.0
  ```
- V `devDependencies` ODSTRAŇ řádek:
  ```json
  "@emergentbase/visual-edits": "https://...",  ← SMAŽ tento řádek
  ```
- Commit změny

#### 2. Aktualizuj `vercel.json`
- Edit soubor
- Přidej na začátek (za `"name":`):
  ```json
  "installCommand": "yarn install",
  "buildCommand": "yarn build",
  "outputDirectory": "build",
  ```

#### 3. Vytvoř nový soubor `.npmrc`
- "Add file" → "Create new file"
- Název: `.npmrc`
- Obsah:
  ```
  enable-pre-post-scripts=true
  ```
- Commit

---

### VARIANTA C: Použij Deploy button (jednodušší)

Pokud vidíš tlačítko **"Deploy"** v Emergentu:

1. Klikni na něj
2. Emergent možná automaticky nahraje změny na GitHub

---

## ⚙️ Pak na Vercel:

1. **Jdi do Project Settings**
2. **General** → přidej:
   ```
   Install Command: yarn install
   Build Command: yarn build
   ```

3. **Klikni "Redeploy"**

---

## ✅ Po úspěšném deployi:

Dostaneš URL typu:
```
https://muj-druhy-mozek.vercel.app
```

Zkontroluj:
- [ ] Stránka se načte
- [ ] Všechny sekce jsou viditelné
- [ ] CTA tlačítka fungují
- [ ] Animace při scrollu
- [ ] Responzivní na mobilu

---

**Ozvi se, až to zkusíš! 🚀**
