# 🚀 RYCHLÝ START: Nasazení na Vercel

## ✅ Co je hotovo:
- Build funguje správně ✓
- vercel.json nakonfigurován ✓
- Projekt připraven k nasazení ✓

---

## 📋 DVA ZPŮSOBY NASAZENÍ:

### **ZPŮSOB 1: Přes Vercel Web (Nejjednodušší) - BEZ GITHUB**

1. **Stáhni složku frontend na svůj počítač**
   - Zkopíruj celý obsah `/app/frontend`

2. **Jdi na vercel.com**
   - Přihlas se (email nebo GitHub)

3. **Klikni "Add New Project"**

4. **Vyber "Browse" nebo přetáhni složku frontend**
   - Vercel ti umožní nahrát projekt přímo

5. **Klikni "Deploy"**
   - Počkaj 2-3 minuty
   - Hotovo! 🎉

---

### **ZPŮSOB 2: Přes GitHub + Vercel (Doporučeno pro budoucnost)**

#### A) Nahraj na GitHub:

```bash
# 1. Vytvoř nový repozitář na github.com
#    Pojmenuj: muj-druhy-mozek

# 2. Na svém počítači (v složce frontend):
git init
git add .
git commit -m "Můj druhý mozek - landing page"
git branch -M main
git remote add origin https://github.com/TVOJE_JMENO/muj-druhy-mozek.git
git push -u origin main
```

#### B) Připoj Vercel:

1. Jdi na **vercel.com**
2. Klikni **"Add New Project"**
3. Vyber **"Import Git Repository"**
4. Najdi **muj-druhy-mozek**
5. Klikni **"Import"**
6. Nastav:
   - Framework: Create React App (auto-detect)
   - Root Directory: ./
   - Build Command: yarn build
   - Output Directory: build
7. Klikni **"Deploy"**

---

## 🎯 Po nasazení dostaneš:

- URL: `https://muj-druhy-mozek.vercel.app`
- Automatické HTTPS ✓
- Globální CDN ✓
- Automatické buildy (s GitHub) ✓

---

## 🔧 Vlastní doména (volitelné):

Na Vercel dashboardu:
1. Settings → Domains
2. Přidej svou doménu (např. mujdruhymozek.cz)
3. Následuj DNS instrukce

---

## 🔄 Jak aktualizovat web:

**S GitHub:**
```bash
git add .
git commit -m "Update"
git push
```
→ Vercel automaticky nasadí novou verzi

**Bez GitHub:**
→ Nahraj novou verzi přes Vercel dashboard (drag & drop)

---

## ⚠️ Pokud něco nefunguje:

1. **Build error:**
   ```bash
   cd /app/frontend
   yarn build
   ```
   → Zkontroluj, zda build funguje lokálně

2. **404 při refreshi:**
   → Zkontroluj, že vercel.json je ve frontend složce

3. **Kontakt Vercel support:**
   → https://vercel.com/support

---

## 📱 Test po nasazení:

Otevři URL a zkontroluj:
- [ ] Stránka se načte
- [ ] CTA tlačítka fungují (Instagram)
- [ ] Animace při scrollu
- [ ] Mobil + desktop verze
- [ ] Tečky a šipky jsou viditelné

---

**Hodně štěstí! 🚀**

Pro detailní informace viz: /app/DEPLOYMENT_GUIDE.md
