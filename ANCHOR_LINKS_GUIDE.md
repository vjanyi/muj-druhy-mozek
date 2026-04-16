# 📍 Návod na Anchor Links (Kotvy)

## ✅ Co bylo přidáno

Na sekci s PDF ke stažení byl přidán `id="download"`, což umožňuje přímé odkazování na tuto část stránky.

---

## 🔗 Jak používat kotvu

### 1. **Přímý URL link**
Můžeš sdílet tento přímý odkaz:
```
https://www.mujdruhymozek.cz/#download
```

**Použití:**
- V Instagram bio
- V emailové kampani
- V social media postech
- V QR kódech
- Jako zkratka pro stažení PDF

---

### 2. **V HTML odkazech**
Pokud budeš chtít vytvořit odkaz z jiné stránky:
```html
<a href="https://www.mujdruhymozek.cz/#download">
  Stáhnout průvodce
</a>
```

---

### 3. **Na stejné stránce (interní odkazy)**
Pokud bys chtěla přidat odkaz přímo na stránce, který scrollne na tuto sekci:
```html
<a href="#download">Přejít na stažení</a>
```

---

### 4. **JavaScript navigace**
Pokud bys chtěla programově scrollovat na tuto sekci:
```javascript
// Smooth scroll na download sekci
document.getElementById('download').scrollIntoView({ 
  behavior: 'smooth' 
});

// Nebo změna URL
window.location.hash = '#download';
```

---

## 🎨 Jak to funguje

- **Smooth scroll**: Při kliknutí na kotvu stránka plynule scrollne na danou sekci
- **Scroll offset**: Nastaveno 80px padding shora, aby sekce nebyla úplně nahoře
- **URL změna**: Po scrollování se změní URL v prohlížeči na `.../#download`

---

## 💡 Další možné kotvy (pokud bys chtěla přidat)

Můžeš přidat další kotvy na jiné sekce:

```jsx
// Příklady:
<section id="problem">...</section>     → #problem
<section id="benefits">...</section>    → #benefits
<section id="use-cases">...</section>   → #use-cases
<section id="contact">...</section>     → #contact
```

**URL by pak bylo:**
- `https://www.mujdruhymozek.cz/#problem`
- `https://www.mujdruhymozek.cz/#benefits`
- atd.

---

## 📱 Testování

**Desktop:**
```
https://www.mujdruhymozek.cz/#download
```

**Mobil:**
```
https://www.mujdruhymozek.cz/#download
```

Obě verze fungují stejně - stránka scrollne na download sekci.

---

## ⚠️ Důležité poznámky

1. **SEO**: Kotvy (anchor links) nemají negativní vliv na SEO
2. **Analytics**: Google Analytics tracking funguje normálně i s kotvámi
3. **Social media**: Při sdílení URL s kotvou (#download) se kotva zachová
4. **Bookmark**: Uživatelé si mohou uložit přímý link na download sekci do záložek

---

## 🚀 Použití v marketingu

**Instagram Bio:**
```
📖 Stáhni si zdarma průvodce 👇
mujdruhymozek.cz/#download
```

**Email kampaň:**
```
Klikni zde pro okamžité stažení:
https://www.mujdruhymozek.cz/#download
```

**QR kód:**
- Vygeneruj QR kód s URL `https://www.mujdruhymozek.cz/#download`
- Po naskenování se uživatel dostane přímo na download formulář

---

Hotovo! Kotva je plně funkční a připravená k použití. 🎉
