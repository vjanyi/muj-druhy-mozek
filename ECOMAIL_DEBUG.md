# 🔧 ECOMAIL Debug Guide

## Problém: Emaily se neukládají do ECOMAIL

### ✅ Co funguje:
- PDF download: ✓
- Frontend formulář: ✓
- Success message: ✓

### ❌ Co nefunguje:
- Email se neuloží do ECOMAIL databáze

---

## 🧪 KROK 1: Test ECOMAIL API

**Otevřete tuto stránku na vašem webu:**
```
https://www.mujdruhymozek.cz/test-ecomail.html
```

1. Zadejte testovací email
2. Klikněte "TESTOVAT ECOMAIL API"
3. Uvidíte přesnou chybu nebo úspěch

---

## 🔑 KROK 2: Ověřte Environment Variables

### Ve Vercel Dashboardu:

1. Jděte na [vercel.com](https://vercel.com)
2. Otevřete projekt
3. **Settings** → **Environment Variables**

### Musí být tyto 2 proměnné:

```
ECOMAIL_API_KEY
```
**Value:** `2b0adccba47da8496b64d51b80521f8d5a3c4ed03efccf015d92de2fd35cf86a`

```
ECOMAIL_LIST_ID
```
**Value:** `1`

### ⚠️ KRITICKÉ:
- Pokud jste je právě přidali, musíte **REDEPLOY** projekt!
- Deployments → [...] menu → **Redeploy**

---

## 📋 KROK 3: Zkontrolujte Vercel Logs

1. Vercel Dashboard → **Deployments**
2. Klikněte na nejnovější deployment
3. **Functions** tab
4. Najděte `/api/subscribe`
5. Klikněte na funkci → **Logs**

**Co hledat:**
- ❌ `Error: ECOMAIL_API_KEY is undefined` → ENV variables nejsou nastavené
- ❌ `403 Forbidden` → API klíč je neplatný
- ❌ `404 Not Found` → Endpoint URL je špatný
- ✅ `200 OK` → Funguje!

---

## 🐛 Časté problémy:

### Problem 1: "ECOMAIL_API_KEY is undefined"
**Řešení:**
1. Přidejte ENV variables ve Vercel
2. **REDEPLOY** projekt (důležité!)

### Problem 2: "403 Forbidden"
**Příčina:** ECOMAIL API klíč je neplatný/vypršel

**Řešení:**
1. Jděte na [ecomail.cz](https://ecomail.cz)
2. Nastavení → Integrace → API klíč
3. Vygenerujte nový klíč
4. Aktualizujte ve Vercel ENV variables
5. Redeploy

### Problem 3: "409 Conflict - Email already exists"
**Příčina:** Email už je v ECOMAIL (to je OK!)

**Řešení:** Zkuste jiný testovací email

### Problem 4: Serverless funkce nenalezena
**Příčina:** `/api/subscribe.js` není nasazený

**Řešení:**
1. Zkontrolujte že `/api/subscribe.js` existuje v GitHubu
2. Zkontrolujte `vercel.json` - měl by routovat `/api/*` správně
3. Redeploy

---

## ✅ Když vše funguje:

Po úspěšném testu na `/test-ecomail.html`:

1. Jděte na [ecomail.cz](https://ecomail.cz)
2. **Kontakty** → **Seznamy kontaktů**
3. Otevřete seznam s ID: **1**
4. ✅ Měl by tam být testovací email!

---

## 🆘 Pokud nic nepomůže:

**Pošlete mi screenshot:**
1. Vercel Environment Variables page
2. Vercel Function logs (`/api/subscribe`)
3. Output z `/test-ecomail.html`

A můžeme to debugovat dál!
