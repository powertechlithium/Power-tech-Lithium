# MS Powertech – Lithium Battery Solutions Website

A modern, premium, professional, multi-page business website for **MS Powertech – Lithium Battery Solutions**, Moradabad, Uttar Pradesh, India.

---

## 🚀 Live Preview & Local Testing

You can run this website with any static server or open the HTML files directly in your browser:

### Option 1: Python (Recommended)
```bash
python -m http.server 8080
```
Then open: [http://localhost:8080](http://localhost:8080)

### Option 2: Node.js (npx serve)
```bash
npx serve .
```

### Option 3: Direct Browser
Double-click `index.html` to open directly in Google Chrome, Microsoft Edge, or Firefox.

---

## 🌐 How to Host on GitHub Pages (Free & Simple)

1. **Initialize Git & Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "MS Powertech Lithium Battery Solutions complete website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository on GitHub.
   - Click **Settings** ➔ **Pages** (under the "Code and automation" left sidebar).
   - Under **Build and deployment > Source**, select **Deploy from a branch**.
   - Under **Branch**, select `main` and folder `/ (root)`.
   - Click **Save**.
   - Your website will be live in ~60 seconds at `https://YOUR_USERNAME.github.io/YOUR_REPOSITORY/`!

---

## ⚙️ How to Change Contact Info & Details (Simple Use)

All contact numbers, WhatsApp numbers, email addresses, and facility details are centralized in **[`assets/js/config.js`](file:///D:/MTIOT1/WEB_PROJECT/assets/js/config.js)**. 

### Edit `assets/js/config.js`:
```javascript
const SITE_CONFIG = {
  brandName: "MS Powertech",
  domain: "www.powertechlithium.in",
  contact: {
    phone: "+91 82184 92525",       // Change phone number here
    phoneTel: "+91 82184 92525",      // tel: link format
    whatsapp: "918218492525",       // WhatsApp number (with country code, no +)
    email: "Powertechlithium18@gmail.com",
    address: {
      full: "Bhojpur Dharampur, Moradabad, Uttar Pradesh, India - 244001"
    }
  }
};
```
Whenever you update `assets/js/config.js`, **every page**, **every WhatsApp button**, and **every contact link** updates automatically!

---

## 📑 Pages Included

| Page | File | Purpose |
|---|---|---|
| **Home** | [`index.html`](file:///D:/MTIOT1/WEB_PROJECT/index.html) | Hero banner, highlights, 4 product categories, why choose us, custom manufacturing, CTA |
| **About Us** | [`about.html`](file:///D:/MTIOT1/WEB_PROJECT/about.html) | Company background, Moradabad facility, vision & mission, operational pillars |
| **Products Catalogue** | [`products.html`](file:///D:/MTIOT1/WEB_PROJECT/products.html) | Interactive product catalogue with category filter tabs and real-time search |
| **Product Detail** | [`product-detail.html`](file:///D:/MTIOT1/WEB_PROJECT/product-detail.html) | Dynamic deep-dive with image gallery, specs table, order options, and pre-filled WhatsApp link |
| **Applications** | [`applications.html`](file:///D:/MTIOT1/WEB_PROJECT/applications.html) | E-Scooter, E-Rickshaw, Home Inverter & Solar, Custom Industrial power comparison |
| **Custom Battery** | [`custom-battery.html`](file:///D:/MTIOT1/WEB_PROJECT/custom-battery.html) | Interactive custom battery requirement form & live watt-hour calculator |
| **Manufacturing** | [`manufacturing.html`](file:///D:/MTIOT1/WEB_PROJECT/manufacturing.html) | "From Quality Cells to Reliable Battery Packs" 6-step manufacturing workflow |
| **Technology & Safety** | [`technology-safety.html`](file:///D:/MTIOT1/WEB_PROJECT/technology-safety.html) | LiFePO4 chemistry, Smart BMS vs Standard BMS, accurate safety transparency |
| **Contact Us** | [`contact.html`](file:///D:/MTIOT1/WEB_PROJECT/contact.html) | Bhojpur Dharampur Moradabad location, phone, email, contact form, Google Maps |

---

## 🔋 Product Architecture (3 Core Standard Models + Made-by-Custom)
> **Order Policy:** No minimum order quantity – users can order anything from single prototype/sample units to bulk commercial fleet supply.

### 🌟 3 Core Standard Production Models
1. **MS Powertech 48V 20Ah LiFePO4 Battery Pack:** Standard green lid/black steel chassis with Anderson quick connector, 1,024 Wh, for electric scooters and e-bikes.
2. **MS Powertech 51V 30Ah LiFePO4 Battery Pack:** High-efficiency 1,536 Wh pack, Grade-A+ LiFePO4 cells, Smart/Normal BMS, for commercial two-wheelers.
3. **MS Powertech 60V 30Ah LiFePO4 Battery Pack:** Safety orange lid, folding handle, dual heavy Anderson leads, 1,824 Wh, for long-range EV fleets.

### 🛠️ Made by Custom (Built to Order)
All other requirements are custom engineered and manufactured to order in our Moradabad facility:
- **Electric Rickshaw Batteries:** 48V 72Ah, 48V 100Ah, 48V 120Ah (with digital LED SOC meters and brass M8 terminal posts).
- **Home Inverter Lithium Batteries:** 12V 100Ah/200Ah, 24V 100Ah/200Ah, 48V 100Ah/200Ah.
- **Extended Range Two-Wheelers:** 60V 45Ah, 72V 45Ah high-voltage packs.
- **Custom Industrial Packs:** 12V to 96V+, 10Ah to 300Ah+, CAN/RS485 Smart BMS, tailored sheet-metal enclosures.
