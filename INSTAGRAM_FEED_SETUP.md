# 📸 Instagram Feed - Návod na aktivaci

## Aktuální stav
Na stránce je připravená sekce pro Instagram feed s 3 placeholder kartami. Pro zobrazení skutečných příspěvků z @muj_druhy_mozek potřebujete přidat widget.

---

## 🚀 Doporučené řešení: Lightwidget (ZDARMA)

### Proč Lightwidget?
- ✅ **Zdarma** (s malým watermarkem)
- ✅ **Automaticky aktualizuje** nejnovější příspěvky
- ✅ **Jednoduché nastavení** (5 minut)
- ✅ **Responzivní design**
- ✅ **Žádný kód** nutný

---

## 📝 Krok za krokem návod:

### 1. Vytvořte Lightwidget účet
1. Jděte na [https://lightwidget.com](https://lightwidget.com)
2. Klikněte **"Create Widget"**
3. Zadejte email a vytvořte účet (zdarma)

### 2. Nastavte widget
1. **Account**: Zadejte `muj_druhy_mozek` (vaše Instagram username)
2. **Layout**: Vyberte **"Grid"** (mřížka)
3. **Number of posts**: Nastavte **3** (pro 3 nejnovější příspěvky)
4. **Width**: `100%`
5. **Responsive**: **Ano**

### 3. Customize vzhled (volitelné)
- **Image spacing**: 20px
- **Show captions**: Ano/Ne (dle preference)
- **Open in**: New window

### 4. Získejte embed kód
Po nastavení klikněte **"Get Widget"** a zkopírujte celý `<iframe>` kód.

Příklad kódu:
```html
<iframe src="//lightwidget.com/widgets/VASID.html" 
  scrolling="no" 
  allowtransparency="true" 
  class="lightwidget-widget"
  style="width:100%;border:0;overflow:hidden;">
</iframe>
```

### 5. Nahraďte placeholder v kódu

Otevřete `/app/frontend/src/pages/LandingPage.jsx` a najděte sekci:

```jsx
{/* Instagram Posts Grid - Placeholder for Lightwidget */}
<div className="instagram-posts-grid">
  ...placeholder karty...
</div>
```

Nahraďte celý `<div className="instagram-posts-grid">` tímto:

```jsx
{/* Instagram Feed Widget */}
<div className="instagram-widget-container" style={{maxWidth: '1000px', margin: '0 auto 48px'}}>
  <iframe 
    src="//lightwidget.com/widgets/VASID.html" 
    scrolling="no" 
    allowtransparency="true" 
    className="lightwidget-widget"
    style={{
      width: '100%',
      border: 0,
      overflow: 'hidden',
      minHeight: '400px'
    }}
  ></iframe>
</div>
```

**DŮLEŽITÉ**: Nahraďte `VASID` vaším skutečným Lightwidget ID z kroku 4.

### 6. Přidejte Lightwidget script

Do `/app/frontend/public/index.html` přidejte před `</body>`:

```html
<script src="https://cdn.lightwidget.com/widgets/lightwidget.js"></script>
</body>
```

### 7. Deploy na Vercel

Po změnách:
```bash
git add .
git commit -m "Add Instagram feed widget"
git push
```

Vercel automaticky znovu nasadí stránku s živým Instagram feedem!

---

## 🔄 Alternativy (pokud Lightwidget nevyhovuje)

### Option 2: Elfsight (Free tier)
- [https://elfsight.com/instagram-feed-instashow/](https://elfsight.com/instagram-feed-instashow/)
- Zdarma až 200 views/měsíc
- Více customizačních možností

### Option 3: SnapWidget
- [https://snapwidget.com](https://snapwidget.com)
- Free tier dostupný
- Jednodušší než Lightwidget

### Option 4: Instagram Basic Display API (Advanced)
Pro pokročilé uživatele s Facebook Business účtem:
- Vyžaduje Facebook App
- Access Token setup
- Vlastní implementace
- **Náročnější**, ale plná kontrola

---

## ✅ Výsledek

Po implementaci uvidíte:
- ✅ **3 nejnovější Instagram příspěvky** z @muj_druhy_mozek
- ✅ **Automaticky aktualizované** (každých 24 hodin)
- ✅ **Klikací** - vedou přímo na Instagram
- ✅ **Responzivní** - funguje na mobilu i desktopu

---

## 🆘 Pomoc

Pokud máte problémy:
1. Zkontrolujte že Instagram účet je **veřejný** (ne privátní)
2. Počkejte 5-10 minut po vytvoření widgetu (cache)
3. Kontaktujte Lightwidget support (velmi responzivní)

---

**Poznámka**: Placeholder karty jsou připravené stylově odpovídat celkovému minimalistickému designu webu. Po přidání widgetu se automaticky přizpůsobí.
