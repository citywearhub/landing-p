# AutoMossos Landing — Canvis pendents

## Fitxer a modificar
`c:\Users\Usuari\Desktop\BIG ONE\AUTOMOSSOS\landing-p\index.html`

---

## 1. Testimonis / Prova social
Afegir una secció just **després del before/after** i **abans del "Com funciona"**.

### Contingut:
- Comptador: **"Més de 40 propietaris ja ho fan automàtic"**
- 3 cites de propietaris (inventades de prova, realistes):

> **Marta G. — Casa Rural La Fageda**
> "Abans trigava 20 minuts per reserva. Ara no faig res. Els hostes s'ho gestionen sols."

> **Josep M. — Apartaments Costa Daurada**
> "El primer mes vaig tenir 12 reserves. No vaig trucar a ningú. El document va arribar sol."

> **Núria P. — Finca El Solei**
> "Tenia por que fos complicat. En 10 minuts estava configurat. No té cap misteri."

### Disseny:
- Fons blanc, 3 cards horitzontals (grid 3 cols en desktop, 1 col mòbil)
- Cada card: text entrecomillat en gris, nom + propietat en negreta, estrelletes ⭐⭐⭐⭐⭐ a dalt
- Border or subtil a les cards

### Traduccions (ES / EN):
Adaptar les cites a castellà i anglès (mantenir noms i propietats).

---

## 2. FAQ (Preguntes freqüents)
Afegir **abans de la secció de preus** (`#preus`).

### Preguntes i respostes:

**CA:**
- P: I si l'hoste no omple el formulari?
  R: El sistema li envia un recordatori automàtic. Si tot i així no ho fa, t'avisem a tu perquè puguis actuar.
- P: Funciona amb Booking.com i Airbnb?
  R: Sí. AutoMossos s'integra amb les principals plataformes de reserves. La connexió es configura en menys de 5 minuts.
- P: Les dades dels hostes estan segures?
  R: Sí. Totes les dades es guarden xifrades i complim el RGPD. No compartim informació amb tercers.
- P: Qui puja el document als Mossos, jo o el programa?
  R: Tu. AutoMossos genera el document oficial llest per pujar. Només has d'entrar a la web dels Mossos i adjuntar-lo. Tot el procés triga menys de 2 minuts.
- P: Necessito contractar res addicional?
  R: No. Tot està inclòs al pla. Sense costos ocults, sense integracions de pagament extra.

**ES / EN:** Traduir les mateixes 5 preguntes.

### Disseny:
- Acordió igual que el de "Com funciona" (mateixos estils `.step`)
- Fons blanc (`section-alt`), títol "Preguntes freqüents" / "Preguntas frecuentes" / "FAQ"
- Primer ítem obert per defecte

---

## 3. Política de privacitat (footer)
Afegir al footer dos links:

```html
<a href="/privacitat">Política de privacitat</a> · 
<a href="/avis-legal">Avís legal</a>
```

- Els fitxers `/privacitat` i `/avis-legal` de moment poden ser pàgines buides o un placeholder
- Afegir en les 3 llengües (data-i18n)
- Traduccions:
  - CA: "Política de privacitat · Avís legal"
  - ES: "Política de privacidad · Aviso legal"
  - EN: "Privacy policy · Legal notice"

---

## 4. Logos plataformes (opcional / bonus)
Afegir una franja just **sota el hero** (abans del before/after) amb:

```
Compatible amb:  [Booking.com]  [Airbnb]  [Vrbo]  [qualsevol plataforma]
```

- Fons blanc, text molt petit en gris
- Logos en gris (no colors per no demanar permisos de marca)
- O simplement text: "Booking.com · Airbnb · Vrbo · i qualsevol altra plataforma"

---

## 5. Botó WhatsApp flotant (opcional / bonus)
Afegir un botó flotant baix-dreta:

```html
<a href="https://wa.me/34XXXXXXXXX" target="_blank" class="whatsapp-btn">
  <!-- icona WhatsApp SVG -->
</a>
```

- Color verd WhatsApp (#25D366)
- Tooltip: "Parla amb nosaltres" / "Habla con nosotros" / "Chat with us"
- Substituir XXXXXXXXX pel número real

---

## Ordre d'implementació recomanat
1. Política privacitat al footer (legal, urgent)
2. FAQ (conversió)
3. Testimonis (conversió)
4. Logos plataformes (confiança)
5. WhatsApp flotant (contacte)
