# 🔍 ECOMAIL Troubleshooting Guide

## ✅ Co funguje:
- **PDF download**: ✓ Funguje okamžitě (frontend)
- **Localhost**: Email submit zobrazí success message

## ⚠️ Co NEFUNGUJE na localhost:
- **ECOMAIL API**: `/api/subscribe` Vercel function nefunguje na localhost
- **Důvod**: Vercel serverless functions vyžadují Vercel runtime

---

## 🧪 Jak ověřit že ECOMAIL funguje na produkci:

### Krok 1: Deploy na www.mujdruhymozek.cz
```bash
git add .
git commit -m "Fix hero typewriter layout"
git push
```

### Krok 2: Počkejte na Vercel deploy (2-3 minuty)

### Krok 3: Test na živém webu
1. Jděte na **www.mujdruhymozek.cz**
2. Najděte e-mail formulář
3. Zadejte testovací email: `vase-jmeno@example.com`
4. Klikněte "STÁHNOUT PDF"

### Krok 4: Ověřte v ECOMAIL
1. Přihlaste se na [ecomail.cz](https://ecomail.cz)
2. Jděte na **Kontakty** → **Seznamy kontaktů**
3. Otevřete seznam s ID: **1**
4. ✅ Měli byste vidět nový kontakt: `vase-jmeno@example.com`

---

## 🐛 Pokud email není v ECOMAIL:

### Debug kroky:

#### 1. Zkontrolujte Vercel Logs:
1. Jděte na [vercel.com](https://vercel.com)
2. Otevřete projekt
3. Deployments → [Latest] → **Functions**
4. Najděte `/api/subscribe`
5. Zkontrolujte logy

#### 2. Zkontrolujte Environment Variables:
V Vercel project settings → Environment Variables:
```
ECOMAIL_API_KEY = 2b0adccba47da8496b64d51b80521f8d5a3c4ed03efccf015d92de2fd35cf86a
ECOMAIL_LIST_ID = 1
```

#### 3. Test API přímo:
```bash
curl -X POST https://www.mujdruhymozek.cz/api/subscribe \
  -H "Content-Type: application/json" \
  -d '{"email":"test@test.com","firstName":"Test","lastName":"User"}'
```

**Očekávaná odpověď:**
```json
{
  "message": "Email saved successfully",
  "email": "test@test.com",
  "already_subscribed": false
}
```

---

## 🔧 Časté problémy:

### Problem 1: "Missing first name" error
**Příčina**: Frontend neposílá `firstName`  
**Řešení**: Už opraveno - frontend posílá `firstName: 'Subscriber'`

### Problem 2: "409 Conflict" - Email už existuje
**Řešení**: To je OK! Znamená to že email už je v ECOMAIL  
**Odpověď API**: `{"already_subscribed": true}`

### Problem 3: API timeout
**Příčina**: ECOMAIL API nereaguje  
**Řešení**: Zkuste znovu za pár minut

---

## 📊 Očekávané chování:

### Na localhost:
```
✅ PDF se stáhne okamžitě
✅ Zobrazí se: "✓ Hotovo! PDF se právě stahuje..."
❌ Email se NEULOŽÍ do ECOMAIL (serverless function nefunguje)
```

### Na produkci (www.mujdruhymozek.cz):
```
✅ PDF se stáhne okamžitě
✅ Zobrazí se: "✓ Hotovo! PDF se právě stahuje..."
✅ Email se ULOŽÍ do ECOMAIL (do 5 sekund)
```

---

## ✅ Test checklist:

Po deploy na produkci:
- [ ] Otevřít www.mujdruhymozek.cz
- [ ] Zadat testovací email
- [ ] Kliknout "STÁHNOUT PDF"
- [ ] PDF se stáhl ✓
- [ ] Success message zobrazená ✓
- [ ] Zkontrolovat ECOMAIL účet
- [ ] Email v seznamu kontaktů ✓

---

**Pokud email NENÍ v ECOMAIL po testu na produkci, pošlete mi Vercel function logs!**
