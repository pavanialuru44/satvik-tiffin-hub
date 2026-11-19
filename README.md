# 🍲 Annapurna Pure Veg Tiffins

A modern, responsive, 100% pure vegetarian homestyle tiffin delivery web application built with HTML5, CSS3, and Vanilla JavaScript.

![Pure Veg Badge](https://img.shields.io/badge/Food-100%25%20Pure%20Vegetarian-15803d?style=for-the-badge)
![Status](https://img.shields.io/badge/Deployment-Ready-success?style=for-the-badge)

---

## ✨ Key Features

### 🥗 100% Pure Vegetarian & Satvik Menu
- Official green vegetarian badge on all items.
- Prepared with unadulterated cold-pressed oils, pure cow desi ghee, and fresh organic vegetables.
- **Dietary Filter Chips:**
  - **All Pure Veg:** Full homestyle menu.
  - **Jain Satvik:** Strictly no onion, no garlic options.
  - **High Protein:** Paneer, lentils, and sprout-rich tiffins.
  - **Bestsellers:** Crowd-favorite combos.

### 🛒 Dynamic Add-to-Cart System
- Quantity steppers (`+` / `−`) directly on menu cards.
- Animated slide-over Cart Drawer.
- Floating mobile cart indicator with live item counts and rupee totals.
- Special cooking instructions field (e.g. *"Less spicy"*, *"Extra chutney"*).
- Eco-friendly biodegradable cutlery toggle.
- Coupon code system (`VEG10`, `FREEDEL`, `FIRST50`).
- Real-time bill breakdown (Subtotal, Delivery Fee, Taxes/GST, Discounts, Grand Total).

### 💳 Complete Payment Checkout
- **📱 UPI & QR Code:** Dynamic scan-and-pay SVG QR code (offline-ready), copyable shop UPI ID (`annapurna.veg@okaxis`), deep link to mobile UPI apps (Google Pay, PhonePe, Paytm, BHIM, CRED), and VPA verification.
- **💵 Cash on Delivery (COD):** Pay at doorstep via cash or delivery executive's QR code.
- **💳 Credit / Debit Cards:** Interactive 3D card preview with live formatted inputs and 256-bit encryption badge.
- **🏦 Net Banking:** Direct selection for major Indian banks (SBI, HDFC, ICICI, Axis, Kotak, PNB).

### 📦 Order Confirmation & Management
- Animated kitchen processing modal.
- Order confirmation receipt with unique Order ID (e.g. `#VT-2026-XXXX`).
- **Live 4-Step Order Tracker:** `Order Placed` → `Kitchen Preparing` → `Out for Delivery` → `Delivered`.
- **Share on WhatsApp:** One-click pre-formatted order summary ready to send to the kitchen.
- **Print / Save Receipt:** Printable layout (`window.print()`).
- **📜 My Orders:** Order history with 1-click re-ordering.
- **👨‍🍳 Live Kitchen Dashboard:** Chef dispatch monitor to change statuses and view total sales.
- **⚙️ Shop Settings:** Store configuration modal to customize shop details and UPI ID.

---

## 🚀 How to Run Locally

1. Clone or download this repository.
2. Open `index.html` in any modern web browser (Google Chrome, Microsoft Edge, Firefox, Safari).
3. Or run a quick local server with Python:
   ```bash
   python -m http.server 8000
   ```
   Navigate to `http://localhost:8000`.

---

## 🛠️ Tech Stack
- **HTML5:** Semantic markup & accessibility
- **CSS3:** Custom properties, Flexbox, CSS Grid, mobile-first responsive design, animations
- **JavaScript (ES6+):** State management, DOM manipulation, Web Audio API, dynamic SVG generation, localStorage persistence
