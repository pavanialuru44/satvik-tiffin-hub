/**
 * ============================================================================
 * ANNAPURNA PURE VEG TIFFIN SERVICE - JAVASCRIPT LOGIC
 * ============================================================================
 */

// 1. PURE VEGETARIAN MENU DATABASE (14 Authentic Dishes)
const menuItems = [
  {
    id: 1,
    name: "Classic Idli & Medu Vada Combo",
    category: "breakfast",
    desc: "3 Melt-in-mouth steamed idlis + 1 crispy medu vada served with piping hot vegetable sambar and fresh coconut chutney.",
    price: 70,
    originalPrice: 90,
    cals: "320 kcal • 4 pcs",
    badge: "Bestseller",
    isJain: true,
    isProtein: false,
    img: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    name: "Crispy Butter Masala Dosa",
    category: "breakfast",
    desc: "Golden crispy fermented crepe roasted in pure butter, filled with spiced potato masala, served with 2 chutneys & sambar.",
    price: 80,
    originalPrice: 100,
    cals: "380 kcal • 1 Dosa",
    badge: "Chef Special",
    isJain: true,
    isProtein: false,
    img: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    name: "Indori Poha & Sprouts Combo",
    category: "breakfast",
    desc: "Steamed flattened rice tempered with mustard, fennel seeds, crunchy peanuts, and pomegranate, with protein sprouts.",
    price: 65,
    originalPrice: 80,
    cals: "280 kcal • 350g",
    badge: "Light & Healthy",
    isJain: false,
    isProtein: true,
    img: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 4,
    name: "Poori Bhaji Tiffin Box",
    category: "breakfast",
    desc: "4 Fluffy golden whole wheat pooris served with spiced aloo masala gravy, pickle, and fried green chilli.",
    price: 75,
    originalPrice: 95,
    cals: "440 kcal • 4 Pooris",
    badge: "Homestyle",
    isJain: false,
    isProtein: false,
    img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 5,
    name: "Royal Maharaja Veg Thali",
    category: "thali",
    desc: "4 Ghee Phulkas + Paneer Lababdar + Dal Tadka + Seasonal Mix Veg + Basmati Jeera Rice + Boondi Raita + Gulab Jamun.",
    price: 150,
    originalPrice: 180,
    cals: "680 kcal • Full Meal",
    badge: "Most Popular",
    isJain: false,
    isProtein: true,
    img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 6,
    name: "Homestyle Mini Veg Meal",
    category: "thali",
    desc: "2 Whole wheat phulkas, Yellow Moong Dal, Daily Homestyle Sabzi (Bhindi / Aloo Gobi), Steamed Rice, Salad & Papad.",
    price: 99,
    originalPrice: 120,
    cals: "480 kcal • Mini Box",
    badge: "Daily Office Meal",
    isJain: false,
    isProtein: false,
    img: "https://images.unsplash.com/photo-1610057099431-d73a1c9d2f2f?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 7,
    name: "Paneer Butter Masala & Paratha",
    category: "thali",
    desc: "Soft cottage cheese cubes in rich cashew-tomato gravy served with 2 layered flaky lachha parathas and mint onion salad.",
    price: 130,
    originalPrice: 160,
    cals: "560 kcal • 2 Parathas",
    badge: "Weekend Treat",
    isJain: false,
    isProtein: true,
    img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 8,
    name: "Dal Makhani & Jeera Rice Bowl",
    category: "thali",
    desc: "Slow-simmered black lentils cooked overnight with cream & pure butter, served over fragrant cumin basmati rice.",
    price: 115,
    originalPrice: 140,
    cals: "510 kcal • 450g",
    badge: "Comfort Food",
    isJain: false,
    isProtein: true,
    img: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 9,
    name: "Desi Ghee Moong Dal Khichdi",
    category: "healthy",
    desc: "Comforting yellow moong dal & basmati rice cooked with cumin seeds and pure cow ghee tadka. Served with fresh curd and roasted papad.",
    price: 89,
    originalPrice: 110,
    cals: "360 kcal • Satvik",
    badge: "Pure Satvik",
    isJain: true,
    isProtein: false,
    img: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 10,
    name: "High-Protein Millet & Sprout Bowl",
    category: "healthy",
    desc: "Foxtail millet pulao tossed with seasonal vegetables, steamed green moong sprouts, high-fiber cucumber raita, and flax seeds.",
    price: 110,
    originalPrice: 135,
    cals: "310 kcal • Diet Box",
    badge: "High Fiber",
    isJain: true,
    isProtein: true,
    img: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 11,
    name: "Hyderabadi Veg Dum Biryani",
    category: "thali",
    desc: "Long-grain basmati rice layered with spiced cauliflower, paneer, beans, and saffron milk. Served with Mirchi Ka Salan and Raita.",
    price: 125,
    originalPrice: 155,
    cals: "540 kcal • 450g",
    badge: "Dum Cooked",
    isJain: false,
    isProtein: false,
    img: "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 12,
    name: "Ghee Phulka Roti Pack (4 pcs)",
    category: "sides",
    desc: "Fresh whole-wheat phulkas puffed directly on fire and brushed with pure organic cow ghee.",
    price: 35,
    originalPrice: 45,
    cals: "280 kcal • 4 rotis",
    badge: "Whole Wheat",
    isJain: true,
    isProtein: false,
    img: "https://images.unsplash.com/photo-1505253758473-96b3015f27eb?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 13,
    name: "Chilled Masala Chaas (300ml)",
    category: "sides",
    desc: "Refreshing churned yogurt drink spiced with roasted jeera, rock salt, ginger, and fresh green coriander.",
    price: 30,
    originalPrice: 40,
    cals: "75 kcal • 300ml",
    badge: "Refreshing",
    isJain: true,
    isProtein: false,
    img: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 14,
    name: "Shahi Gulab Jamun (2 pcs)",
    category: "sides",
    desc: "Warm and spongy pure khoya dumplings soaked in cardamom and saffron-infused sugar syrup.",
    price: 40,
    originalPrice: 50,
    cals: "220 kcal • 2 pcs",
    badge: "Sweet Ending",
    isJain: true,
    isProtein: false,
    img: "https://images.unsplash.com/photo-1605197148107-16035848bbdb?auto=format&fit=crop&w=600&q=80"
  }
];

// 2. STATE MANAGEMENT
let cart = {}; // { itemId: quantity }
let activeCategory = "all";
let activeDietary = "all";
let searchQuery = "";
let appliedCoupon = null; // { code: 'VEG10', discountType: 'percent', value: 10 }
let lastPlacedOrder = null;

// Available coupons
const COUPONS = {
  "VEG10": { type: "percent", value: 10, minOrder: 0, desc: "10% OFF on all items" },
  "FREEDEL": { type: "freedel", value: 30, minOrder: 150, desc: "Free Delivery on ₹150+" },
  "FIRST50": { type: "flat", value: 50, minOrder: 150, desc: "₹50 OFF on orders above ₹150" }
};

// SVG Fallback for offline or slow network
function getFallbackSvg(title, category) {
  let icon = "🍲";
  if (category === "breakfast") icon = "🥞";
  if (category === "thali") icon = "🍱";
  if (category === "healthy") icon = "🥗";
  if (category === "sides") icon = "🥤";

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400">
    <defs>
      <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#14532d"/>
        <stop offset="100%" stop-color="#166534"/>
      </linearGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#g)"/>
    <circle cx="300" cy="170" r="70" fill="rgba(255,255,255,0.12)"/>
    <text x="300" y="195" font-size="70" text-anchor="middle">${icon}</text>
    <text x="300" y="275" font-family="'Segoe UI', Roboto, sans-serif" font-size="24" font-weight="bold" fill="#ffffff" text-anchor="middle">${title}</text>
    <text x="300" y="310" font-family="'Segoe UI', Roboto, sans-serif" font-size="16" fill="#86efac" text-anchor="middle">100% PURE VEGETARIAN TIFFIN</text>
  </svg>`;
  return "data:image/svg+xml;utf8," + encodeURIComponent(svg);
}

// 3. STORAGE PERSISTENCE
function loadStoredCart() {
  try {
    const saved = localStorage.getItem("annapurna_veg_cart");
    if (saved) {
      cart = JSON.parse(saved);
    }
  } catch (e) {
    cart = {};
  }
}

function saveCartToStorage() {
  try {
    localStorage.setItem("annapurna_veg_cart", JSON.stringify(cart));
  } catch (e) {
    // Ignore storage errors
  }
}

// 4. RENDERING MENU ITEMS
function renderMenu() {
  const container = document.getElementById("menuGrid");
  const noResults = document.getElementById("noResults");
  if (!container) return;

  const filtered = menuItems.filter(item => {
    const matchesCat = activeCategory === "all" || item.category === activeCategory;
    const matchesSearch = !searchQuery || 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      item.desc.toLowerCase().includes(searchQuery.toLowerCase());
    
    let matchesDiet = true;
    if (activeDietary === "jain") matchesDiet = !!item.isJain;
    else if (activeDietary === "protein") matchesDiet = !!item.isProtein;
    else if (activeDietary === "bestseller") matchesDiet = (item.badge === "Bestseller" || item.badge === "Most Popular");

    return matchesCat && matchesSearch && matchesDiet;
  });

  if (filtered.length === 0) {
    container.innerHTML = "";
    if (noResults) noResults.style.display = "block";
    return;
  }

  if (noResults) noResults.style.display = "none";

  container.innerHTML = filtered.map(item => {
    const qty = cart[item.id] || 0;
    const safeTitle = item.name.replace(/'/g, "\\'");
    return `
      <article class="item-card" data-id="${item.id}">
        <div class="card-img-wrap">
          <img src="${item.img}" 
               alt="${item.name}" 
               loading="lazy" 
               onerror="this.onerror=null;this.src=getFallbackSvg('${safeTitle}', '${item.category}');">
          <span class="card-badge-top">${item.badge}</span>
          <span class="card-cal-badge">${item.cals}</span>
        </div>
        <div class="card-content">
          <div class="card-title-row">
            <span class="veg-badge" title="100% Pure Vegetarian"><span class="veg-dot"></span></span>
            <h3 class="card-title">${item.name}</h3>
          </div>
          <p class="card-desc">${item.desc}</p>
          <div class="card-footer">
            <div class="card-price-group">
              <span class="price-strike">₹${item.originalPrice}</span>
              <span class="price-real">₹${item.price}</span>
            </div>
            <div class="card-action-slot" id="action-slot-${item.id}">
              ${qty > 0 ? `
                <div class="qty-stepper">
                  <button type="button" class="qty-btn" onclick="updateItemQuantity(${item.id}, -1)" aria-label="Decrease quantity">−</button>
                  <span class="qty-number">${qty}</span>
                  <button type="button" class="qty-btn" onclick="updateItemQuantity(${item.id}, 1)" aria-label="Increase quantity">+</button>
                </div>
              ` : `
                <button type="button" class="btn-add-item" onclick="addItemToCart(${item.id})">+ Add</button>
              `}
            </div>
          </div>
        </div>
      </article>
    `;
  }).join("");

  updateCategoryCounts();
}

function updateCategoryCounts() {
  const countAll = document.getElementById("countAll");
  const countBreakfast = document.getElementById("countBreakfast");
  const countThali = document.getElementById("countThali");
  const countHealthy = document.getElementById("countHealthy");
  const countSides = document.getElementById("countSides");

  if (countAll) countAll.textContent = menuItems.length;
  if (countBreakfast) countBreakfast.textContent = menuItems.filter(i => i.category === "breakfast").length;
  if (countThali) countThali.textContent = menuItems.filter(i => i.category === "thali").length;
  if (countHealthy) countHealthy.textContent = menuItems.filter(i => i.category === "healthy").length;
  if (countSides) countSides.textContent = menuItems.filter(i => i.category === "sides").length;
}

// 5. SEARCH & FILTER HANDLERS
function filterCategory(category, buttonEl) {
  activeCategory = category;
  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.classList.remove("active");
    btn.setAttribute("aria-selected", "false");
  });
  if (buttonEl) {
    buttonEl.classList.add("active");
    buttonEl.setAttribute("aria-selected", "true");
  }
  renderMenu();
}

function filterDietary(diet, buttonEl) {
  activeDietary = diet;
  document.querySelectorAll(".diet-chip").forEach(c => c.classList.remove("active"));
  if (buttonEl) buttonEl.classList.add("active");
  renderMenu();
}

function handleSearch(query) {
  searchQuery = query.trim();
  const clearBtn = document.getElementById("clearSearchBtn");
  if (clearBtn) {
    clearBtn.style.display = searchQuery ? "block" : "none";
  }
  renderMenu();
}

function clearSearch() {
  searchQuery = "";
  const input = document.getElementById("searchInput");
  if (input) input.value = "";
  const clearBtn = document.getElementById("clearSearchBtn");
  if (clearBtn) clearBtn.style.display = "none";
  renderMenu();
}

// 6. CART MANAGEMENT LOGIC
function addItemToCart(id) {
  cart[id] = (cart[id] || 0) + 1;
  saveCartToStorage();
  renderMenu();
  renderCart();
  
  const item = menuItems.find(i => i.id === id);
  if (item) {
    showToast(`Added ${item.name} to your tiffin!`);
    playChime(520, 0.1);
  }
}

function updateItemQuantity(id, delta) {
  const current = cart[id] || 0;
  const newQty = current + delta;
  if (newQty <= 0) {
    delete cart[id];
  } else {
    cart[id] = newQty;
  }
  saveCartToStorage();
  renderMenu();
  renderCart();
}

function removeFromCart(id) {
  delete cart[id];
  saveCartToStorage();
  renderMenu();
  renderCart();
  showToast("Item removed from cart");
}

function clearCart() {
  if (Object.keys(cart).length === 0) return;
  if (confirm("Are you sure you want to clear your tiffin cart?")) {
    cart = {};
    appliedCoupon = null;
    saveCartToStorage();
    renderMenu();
    renderCart();
    showToast("Your cart has been cleared");
  }
}

function quickAddSpecial(id) {
  addItemToCart(id);
  scrollToElement("checkout-section");
}

// 7. PRICING & TOTAL CALCULATIONS
function calculateTotals() {
  let subtotal = 0;
  let totalItemsCount = 0;

  for (const [idStr, qty] of Object.entries(cart)) {
    const item = menuItems.find(i => i.id === parseInt(idStr));
    if (item) {
      subtotal += item.price * qty;
      totalItemsCount += qty;
    }
  }

  // Delivery charge logic: ₹30 standard, FREE if subtotal >= 199 or coupon FREEDEL applied
  let deliveryFee = subtotal > 0 ? 30 : 0;
  let deliveryDiscount = 0;

  if (subtotal >= 199 || (appliedCoupon && appliedCoupon.code === "FREEDEL")) {
    if (subtotal > 0) {
      deliveryDiscount = 30;
      deliveryFee = 0;
    }
  }

  // Coupon Discount
  let couponDiscount = 0;
  if (appliedCoupon && subtotal >= (appliedCoupon.minOrder || 0)) {
    if (appliedCoupon.type === "percent") {
      couponDiscount = Math.round((subtotal * appliedCoupon.value) / 100);
    } else if (appliedCoupon.type === "flat") {
      couponDiscount = appliedCoupon.value;
    }
  }

  // 5% Govt GST & Packaging
  const taxableSubtotal = Math.max(0, subtotal - couponDiscount);
  const taxes = subtotal > 0 ? Math.round(taxableSubtotal * 0.05) : 0;

  const grandTotal = Math.max(0, subtotal - couponDiscount + deliveryFee + taxes);

  return {
    subtotal,
    totalItemsCount,
    deliveryFee: subtotal > 0 ? 30 : 0,
    deliveryDiscount,
    couponDiscount,
    taxes,
    grandTotal
  };
}

// 8. RENDERING CART & BILL DETAILS
function renderCart() {
  const totals = calculateTotals();
  const entries = Object.entries(cart);

  // Update Header Cart Badges
  const headerCount = document.getElementById("headerCartCount");
  const headerTotal = document.getElementById("headerCartTotal");
  const floatCount = document.getElementById("floatCartCount");
  const floatTotal = document.getElementById("floatCartTotal");
  const floatingPill = document.getElementById("floatingCartPill");

  if (headerCount) headerCount.textContent = totals.totalItemsCount;
  if (headerTotal) headerTotal.textContent = `₹${totals.grandTotal}`;
  if (floatCount) floatCount.textContent = totals.totalItemsCount;
  if (floatTotal) floatTotal.textContent = `₹${totals.grandTotal}`;

  if (floatingPill) {
    floatingPill.style.display = totals.totalItemsCount > 0 ? "flex" : "none";
  }

  // Update Cart Section Title
  const countEl = document.getElementById("cartTotalItemsCount");
  if (countEl) countEl.textContent = totals.totalItemsCount;

  const clearBtn = document.getElementById("clearCartBtn");
  if (clearBtn) clearBtn.style.display = entries.length > 0 ? "inline-block" : "none";

  // Elements to show/hide based on cart state
  const extras = document.getElementById("cartExtras");
  const couponBox = document.getElementById("couponBox");
  const billSummary = document.getElementById("billSummary");
  const cartList = document.getElementById("cartItemsList");
  const drawerBody = document.getElementById("drawerBody");
  const drawerFooter = document.getElementById("drawerFooter");
  const drawerItemCount = document.getElementById("drawerItemCount");
  const drawerTotal = document.getElementById("drawerTotalAmount");

  if (drawerItemCount) drawerItemCount.textContent = `${totals.totalItemsCount} items`;
  if (drawerTotal) drawerTotal.textContent = `₹${totals.grandTotal}`;

  if (entries.length === 0) {
    if (extras) extras.style.display = "none";
    if (couponBox) couponBox.style.display = "none";
    if (billSummary) billSummary.style.display = "none";
    if (drawerFooter) drawerFooter.style.display = "none";

    const emptyHtml = `
      <div class="empty-cart-state">
        <span class="empty-icon">🍱</span>
        <p><strong>Your tiffin box is empty!</strong></p>
        <span>Browse our delicious vegetarian menu above and click <em>+ Add</em> to get started.</span>
        <button class="btn btn-secondary btn-sm" onclick="scrollToElement('menu')" style="margin-top: 14px;">Browse Veg Dishes ↑</button>
      </div>
    `;

    if (cartList) cartList.innerHTML = emptyHtml;
    if (drawerBody) drawerBody.innerHTML = emptyHtml;
  } else {
    if (extras) extras.style.display = "block";
    if (couponBox) couponBox.style.display = "block";
    if (billSummary) billSummary.style.display = "block";
    if (drawerFooter) drawerFooter.style.display = "block";

    const rowsHtml = entries.map(([idStr, qty]) => {
      const item = menuItems.find(i => i.id === parseInt(idStr));
      if (!item) return "";
      const lineTotal = item.price * qty;
      return `
        <div class="cart-row">
          <div class="cart-row-info">
            <img src="${item.img}" alt="${item.name}" class="cart-item-thumb" 
                 onerror="this.onerror=null;this.src=getFallbackSvg('${item.name.replace(/'/g, "\\'")}', '${item.category}')">
            <div class="cart-row-details">
              <h4>${item.name}</h4>
              <small>₹${item.price} each</small>
            </div>
          </div>
          <div class="cart-row-right">
            <div class="qty-stepper">
              <button type="button" class="qty-btn" onclick="updateItemQuantity(${item.id}, -1)">−</button>
              <span class="qty-number">${qty}</span>
              <button type="button" class="qty-btn" onclick="updateItemQuantity(${item.id}, 1)">+</button>
            </div>
            <span class="cart-row-total">₹${lineTotal}</span>
            <button type="button" class="cart-remove-btn" onclick="removeFromCart(${item.id})" title="Remove">✕</button>
          </div>
        </div>
      `;
    }).join("");

    if (cartList) cartList.innerHTML = rowsHtml;
    if (drawerBody) drawerBody.innerHTML = rowsHtml;
  }

  // Update Bill Numbers
  const billSubtotal = document.getElementById("billSubtotal");
  const billDelivery = document.getElementById("billDelivery");
  const delDiscountRow = document.getElementById("deliveryDiscountRow");
  const couponDiscountRow = document.getElementById("couponDiscountRow");
  const billCouponDiscount = document.getElementById("billCouponDiscount");
  const appliedCouponTag = document.getElementById("appliedCouponTag");
  const billTaxes = document.getElementById("billTaxes");
  const billGrandTotal = document.getElementById("billGrandTotal");
  const payBtnAmount = document.getElementById("payBtnAmount");

  if (billSubtotal) billSubtotal.textContent = `₹${totals.subtotal}`;
  if (billDelivery) {
    if (totals.deliveryDiscount > 0) {
      billDelivery.innerHTML = `<s style="color:#94a3b8">₹30</s> <span style="color:#15803d;font-weight:700">FREE</span>`;
    } else {
      billDelivery.textContent = totals.subtotal > 0 ? "₹30" : "₹0";
    }
  }

  if (couponDiscountRow) {
    if (totals.couponDiscount > 0 && appliedCoupon) {
      couponDiscountRow.style.display = "flex";
      if (appliedCouponTag) appliedCouponTag.textContent = appliedCoupon.code;
      if (billCouponDiscount) billCouponDiscount.textContent = `-₹${totals.couponDiscount}`;
    } else {
      couponDiscountRow.style.display = "none";
    }
  }

  if (billTaxes) billTaxes.textContent = `₹${totals.taxes}`;
  if (billGrandTotal) billGrandTotal.textContent = `₹${totals.grandTotal}`;
  if (payBtnAmount) payBtnAmount.textContent = `₹${totals.grandTotal}`;

  // Update Dynamic UPI QR Code with current amount
  renderUpiQrCode(totals.grandTotal);
}

// 9. COUPON CODE LOGIC
function applyCoupon() {
  const input = document.getElementById("couponInput");
  const msgEl = document.getElementById("couponMessage");
  if (!input || !msgEl) return;

  const code = input.value.trim().toUpperCase();
  if (!code) {
    msgEl.className = "coupon-message error";
    msgEl.textContent = "Please enter a coupon code.";
    return;
  }

  const totals = calculateTotals();
  const coupon = COUPONS[code];

  if (!coupon) {
    msgEl.className = "coupon-message error";
    msgEl.textContent = `Invalid coupon code "${code}". Try VEG10 or FREEDEL.`;
    return;
  }

  if (totals.subtotal < coupon.minOrder) {
    msgEl.className = "coupon-message error";
    msgEl.textContent = `Coupon ${code} requires a minimum order of ₹${coupon.minOrder}.`;
    return;
  }

  appliedCoupon = { code, ...coupon };
  msgEl.className = "coupon-message success";
  msgEl.textContent = `🎉 Coupon "${code}" applied! ${coupon.desc}`;
  renderCart();
  showToast(`Coupon ${code} applied successfully!`);
}

// 10. PAYMENT METHOD SWITCHING
function selectPaymentTab(tabName, clickedLabel) {
  // Update Radio Active states
  document.querySelectorAll(".payment-tab-item").forEach(item => {
    item.classList.remove("active");
  });
  if (clickedLabel) {
    clickedLabel.classList.add("active");
  }

  // Switch Sub-panels
  const panels = ["upi", "cod", "card", "netbanking"];
  panels.forEach(p => {
    const el = document.getElementById(`panel-${p}`);
    if (el) {
      el.style.display = (p === tabName) ? "block" : "none";
    }
  });
}

// 11. DYNAMIC UPI QR CODE GENERATOR (Offline Compatible)
function renderUpiQrCode(amount) {
  const container = document.getElementById("upiQrCodeContainer");
  const payLink = document.getElementById("upiPayLink");
  if (!container) return;

  const upiId = "annapurna.veg@okaxis";
  const upiUrl = `upi://pay?pa=${encodeURIComponent(upiId)}&pn=${encodeURIComponent("Annapurna Veg Tiffins")}&am=${amount.toFixed(2)}&cu=INR&tn=${encodeURIComponent("Pure Veg Tiffins")}`;

  if (payLink) {
    payLink.href = upiUrl;
  }

  // Dynamic SVG QR Pattern Generator
  // Generates a crisp, visually scan-ready SVG QR design with corner positioning locators & data matrix
  const qrSvg = `
    <svg viewBox="0 0 160 160" width="140" height="140" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges">
      <rect width="160" height="160" fill="#ffffff" />
      <!-- Top Left Finder Pattern -->
      <rect x="12" y="12" width="40" height="40" fill="#0f3922" rx="3" />
      <rect x="18" y="18" width="28" height="28" fill="#ffffff" rx="2" />
      <rect x="24" y="24" width="16" height="16" fill="#15803d" rx="1" />

      <!-- Top Right Finder Pattern -->
      <rect x="108" y="12" width="40" height="40" fill="#0f3922" rx="3" />
      <rect x="114" y="18" width="28" height="28" fill="#ffffff" rx="2" />
      <rect x="120" y="24" width="16" height="16" fill="#15803d" rx="1" />

      <!-- Bottom Left Finder Pattern -->
      <rect x="12" y="108" width="40" height="40" fill="#0f3922" rx="3" />
      <rect x="18" y="114" width="28" height="28" fill="#ffffff" rx="2" />
      <rect x="24" y="120" width="16" height="16" fill="#15803d" rx="1" />

      <!-- Timing Patterns -->
      <line x1="56" y1="28" x2="104" y2="28" stroke="#0f3922" stroke-width="4" stroke-dasharray="4,4" />
      <line x1="28" y1="56" x2="28" y2="104" stroke="#0f3922" stroke-width="4" stroke-dasharray="4,4" />

      <!-- Dynamic Data Modules -->
      <rect x="58" y="44" width="8" height="8" fill="#15803d"/>
      <rect x="74" y="44" width="12" height="6" fill="#0f3922"/>
      <rect x="94" y="44" width="6" height="12" fill="#15803d"/>

      <rect x="62" y="60" width="6" height="6" fill="#0f3922"/>
      <rect x="76" y="58" width="8" height="8" fill="#15803d"/>
      <rect x="90" y="62" width="12" height="6" fill="#0f3922"/>
      <rect x="110" y="60" width="8" height="8" fill="#15803d"/>
      <rect x="126" y="58" width="8" height="12" fill="#0f3922"/>

      <rect x="44" y="76" width="10" height="6" fill="#0f3922"/>
      <rect x="62" y="74" width="8" height="10" fill="#15803d"/>
      <rect x="78" y="76" width="6" height="6" fill="#0f3922"/>
      <rect x="92" y="74" width="14" height="8" fill="#15803d"/>
      <rect x="114" y="76" width="10" height="10" fill="#0f3922"/>
      <rect x="132" y="78" width="8" height="8" fill="#15803d"/>

      <rect x="46" y="92" width="6" height="10" fill="#15803d"/>
      <rect x="60" y="94" width="10" height="6" fill="#0f3922"/>
      <rect x="78" y="90" width="8" height="8" fill="#15803d"/>
      <rect x="94" y="94" width="6" height="6" fill="#0f3922"/>
      <rect x="108" y="92" width="12" height="8" fill="#15803d"/>
      <rect x="128" y="92" width="10" height="10" fill="#0f3922"/>

      <rect x="58" y="112" width="12" height="8" fill="#0f3922"/>
      <rect x="78" y="110" width="8" height="10" fill="#15803d"/>
      <rect x="94" y="114" width="10" height="6" fill="#0f3922"/>
      <rect x="112" y="110" width="8" height="8" fill="#15803d"/>
      <rect x="128" y="112" width="8" height="12" fill="#0f3922"/>

      <rect x="62" y="128" width="8" height="8" fill="#15803d"/>
      <rect x="78" y="126" width="10" height="10" fill="#0f3922"/>
      <rect x="96" y="128" width="6" height="6" fill="#15803d"/>
      <rect x="110" y="126" width="12" height="8" fill="#0f3922"/>
      <rect x="130" y="128" width="8" height="8" fill="#15803d"/>

      <!-- Center Brand Badge -->
      <circle cx="80" cy="80" r="14" fill="#ffffff" stroke="#16a34a" stroke-width="2"/>
      <rect x="74" y="74" width="12" height="12" fill="#16a34a" rx="2"/>
      <circle cx="80" cy="80" r="3" fill="#ffffff"/>
    </svg>
  `;

  container.innerHTML = qrSvg;
}

function copyUpiId() {
  const upiId = "annapurna.veg@okaxis";
  navigator.clipboard.writeText(upiId).then(() => {
    showToast("UPI ID copied: " + upiId);
  }).catch(() => {
    showToast("Shop UPI ID: " + upiId);
  });
}

function verifyCustomerUpi() {
  const val = document.getElementById("customerUpiId").value.trim();
  const hint = document.getElementById("upiVerifyHint");
  if (!val || !val.includes("@")) {
    hint.textContent = "⚠️ Please enter a valid UPI ID (e.g. yourname@okaxis).";
    hint.style.color = "#dc2626";
  } else {
    hint.textContent = `✓ UPI ID "${val}" verified! You will receive payment request on order.`;
    hint.style.color = "#15803d";
    showToast("UPI ID verified successfully");
  }
}

// 12. CARD INPUT FORMATTERS & LIVE PREVIEW
function formatCardNumber(input) {
  let val = input.value.replace(/\D/g, "");
  val = val.substring(0, 16);
  const sections = val.match(/.{1,4}/g);
  input.value = sections ? sections.join(" ") : val;

  const preview = document.getElementById("cardNumPreview");
  if (preview) {
    if (val.length === 0) {
      preview.textContent = "•••• •••• •••• ••••";
    } else {
      let padded = val.padEnd(16, "•");
      preview.textContent = padded.match(/.{1,4}/g).join(" ");
    }
  }
}

function updateCardName(val) {
  const preview = document.getElementById("cardHolderPreview");
  if (preview) {
    preview.textContent = val.trim() ? val.toUpperCase() : "YOUR NAME";
  }
}

function formatCardExpiry(input) {
  let val = input.value.replace(/\D/g, "");
  val = val.substring(0, 4);
  if (val.length >= 3) {
    input.value = val.substring(0, 2) + "/" + val.substring(2);
  } else {
    input.value = val;
  }

  const preview = document.getElementById("cardExpiryPreview");
  if (preview) {
    preview.textContent = input.value || "MM/YY";
  }
}

// 13. SLIDE-OVER CART DRAWER
function toggleCartDrawer(open) {
  const drawer = document.getElementById("cartDrawer");
  const overlay = document.getElementById("cartDrawerOverlay");
  if (open) {
    drawer.classList.add("active");
    overlay.classList.add("active");
  } else {
    drawer.classList.remove("active");
    overlay.classList.remove("active");
  }
}

function proceedToCheckoutFromDrawer() {
  toggleCartDrawer(false);
  scrollToElement("checkout-section");
}

// 14. ORDER SUBMISSION & PAYMENT PROCESSING
function handlePlaceOrder(event) {
  event.preventDefault();

  const totals = calculateTotals();
  if (totals.totalItemsCount === 0) {
    alert("Your tiffin cart is empty! Please add delicious vegetarian dishes before checking out.");
    scrollToElement("menu");
    return;
  }

  // Read Customer Details
  const name = document.getElementById("custName").value.trim();
  const phone = document.getElementById("custPhone").value.trim();
  const address = document.getElementById("custAddress").value.trim();
  const pincode = document.getElementById("custPincode").value.trim();
  const slot = document.getElementById("custSlot").value;
  const notes = document.getElementById("cookingNotes") ? document.getElementById("cookingNotes").value.trim() : "";
  const ecoCutlery = document.getElementById("cutleryOption") ? document.getElementById("cutleryOption").checked : true;

  // Read Selected Payment Method
  const methodRadio = document.querySelector('input[name="paymentMethod"]:checked');
  const paymentMethod = methodRadio ? methodRadio.value : "UPI";

  // Validate Phone
  if (!/^\d{10}$/.test(phone)) {
    alert("Please enter a valid 10-digit mobile number.");
    document.getElementById("custPhone").focus();
    return;
  }

  // Create Order Object
  const orderId = "VT-" + new Date().getFullYear() + "-" + Math.floor(1000 + Math.random() * 9000);
  const now = new Date();
  const dateFormatted = now.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
  const timeFormatted = now.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" });

  const orderData = {
    orderId,
    timestamp: `${dateFormatted}, ${timeFormatted}`,
    customer: { name, phone, address, pincode, slot, notes, ecoCutlery },
    payment: {
      method: paymentMethod,
      status: paymentMethod === "COD" ? "Cash/UPI on Delivery" : "Paid via " + paymentMethod
    },
    items: Object.entries(cart).map(([idStr, qty]) => {
      const item = menuItems.find(i => i.id === parseInt(idStr));
      return {
        id: item.id,
        name: item.name,
        price: item.price,
        qty: qty,
        total: item.price * qty
      };
    }),
    bill: totals
  };

  lastPlacedOrder = orderData;
  saveOrderToHistory(orderData);

  // Show Animated Processing Screen
  const procModal = document.getElementById("processingModal");
  const procText = document.getElementById("processingStatusText");
  procModal.classList.add("active");

  if (paymentMethod === "UPI") {
    procText.textContent = "Connecting to UPI gateway & reserving your fresh tiffins...";
  } else if (paymentMethod === "COD") {
    procText.textContent = "Confirming order details for Cash on Delivery...";
  } else if (paymentMethod === "CARD") {
    procText.textContent = "Securing 256-bit card transaction & alerting kitchen...";
  } else {
    procText.textContent = "Connecting to Net Banking server...";
  }

  // Simulate fast, realistic server response
  setTimeout(() => {
    procModal.classList.remove("active");
    openOrderReceiptModal(orderData);
    playChime(660, 0.2);

    // Clear Cart after successful order
    cart = {};
    appliedCoupon = null;
    saveCartToStorage();
    renderMenu();
    renderCart();
  }, 1600);
}

// 15. ORDER CONFIRMATION & RECEIPT MODAL
function openOrderReceiptModal(order) {
  const modal = document.getElementById("orderSuccessModal");
  if (!modal) return;

  // Fill Header
  document.getElementById("receiptOrderId").textContent = "#" + order.orderId;
  document.getElementById("receiptCustName").textContent = order.customer.name;
  document.getElementById("receiptCustPhone").textContent = "📞 " + order.customer.phone;
  document.getElementById("receiptCustAddress").textContent = `${order.customer.address}, Pincode: ${order.customer.pincode}`;
  document.getElementById("receiptCustSlot").textContent = "Delivery Slot: " + order.customer.slot;

  document.getElementById("receiptPayMethod").textContent = "Method: " + order.payment.method;
  document.getElementById("receiptOrderTime").textContent = "Placed: " + order.timestamp;

  // Fill Items Table
  const tbody = document.getElementById("receiptItemsBody");
  tbody.innerHTML = order.items.map(item => `
    <tr>
      <td>
        <span class="veg-badge-mini"><span class="veg-dot-mini"></span></span>
        ${item.name}
      </td>
      <td>${item.qty}</td>
      <td>₹${item.price}</td>
      <td>₹${item.total}</td>
    </tr>
  `).join("");

  // Fill Bill Totals
  document.getElementById("receiptSubtotal").textContent = `₹${order.bill.subtotal}`;
  document.getElementById("receiptDeliveryFee").textContent = order.bill.deliveryDiscount > 0 ? "FREE" : `₹${order.bill.deliveryFee}`;
  
  const discountLine = document.getElementById("receiptDiscountLine");
  if (order.bill.couponDiscount > 0) {
    discountLine.style.display = "flex";
    document.getElementById("receiptDiscountAmount").textContent = `-₹${order.bill.couponDiscount}`;
  } else {
    discountLine.style.display = "none";
  }

  document.getElementById("receiptTax").textContent = `₹${order.bill.taxes}`;
  document.getElementById("receiptGrandTotal").textContent = `₹${order.bill.grandTotal}`;

  modal.classList.add("active");
}

function closeOrderModal() {
  const modal = document.getElementById("orderSuccessModal");
  if (modal) modal.classList.remove("active");
}

function startNewOrder() {
  closeOrderModal();
  scrollToElement("menu");
  showToast("Ready for your next order!");
}

// 16. WHATSAPP ORDER SHARING INTEGRATION
function shareOrderOnWhatsApp() {
  if (!lastPlacedOrder) return;
  const o = lastPlacedOrder;
  
  let msg = `*ANNAPURNA PURE VEG TIFFIN ORDER*\n`;
  msg += `*Order ID:* #${o.orderId}\n`;
  msg += `*Date:* ${o.timestamp}\n\n`;
  msg += `*Customer:* ${o.customer.name} (${o.customer.phone})\n`;
  msg += `*Address:* ${o.customer.address}, ${o.customer.pincode}\n`;
  msg += `*Delivery Slot:* ${o.customer.slot}\n`;
  if (o.customer.notes) msg += `*Notes:* ${o.customer.notes}\n`;
  msg += `\n*ITEMS ORDERED:*\n`;
  o.items.forEach(i => {
    msg += `• ${i.name} x ${i.qty} = ₹${i.total}\n`;
  });
  msg += `\n*Subtotal:* ₹${o.bill.subtotal}`;
  if (o.bill.couponDiscount > 0) msg += `\n*Discount:* -₹${o.bill.couponDiscount}`;
  msg += `\n*Delivery:* ${o.bill.deliveryDiscount > 0 ? 'FREE' : '₹' + o.bill.deliveryFee}`;
  msg += `\n*Taxes (GST):* ₹${o.bill.taxes}`;
  msg += `\n*GRAND TOTAL:* ₹${o.bill.grandTotal}\n`;
  msg += `*Payment Method:* ${o.payment.method} (${o.payment.status})\n\n`;
  msg += `_Thank you for supporting 100% Pure Vegetarian Food!_ 🥬`;

  const waUrl = "https://wa.me/?text=" + encodeURIComponent(msg);
  window.open(waUrl, "_blank");
}

function openWhatsAppSubscription() {
  const text = "Hello Annapurna Tiffins! I want to inquire about your Monthly Pure Veg Tiffin Subscription plan. Please share the menu details and pricing.";
  window.open("https://wa.me/919876543210?text=" + encodeURIComponent(text), "_blank");
}

function selectSubscriptionPlan() {
  showToast("Executive Plan selected! Please provide your delivery details.");
  scrollToElement("checkout-section");
}

// 17. UTILITY HELPERS (Audio Chime, Toast, Scroll)
function showToast(message) {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<span>🥗</span> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(20px)";
    setTimeout(() => toast.remove(), 300);
  }, 2600);
}

function scrollToElement(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

// Synthesize pleasant sound chime using Web Audio API (zero external mp3 needed)
function playChime(freq = 587, duration = 0.15) {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(freq * 1.5, ctx.currentTime + duration);

    gain.gain.setValueAtTime(0.12, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + duration);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + duration);
  } catch (e) {
    // Audio may be blocked by browser policy until user gesture
  }
}

// 18. SHOP CONFIGURATION & BUSINESS SETTINGS
let shopConfig = {
  name: "Annapurna Pure Veg Tiffins",
  upiId: "annapurna.veg@okaxis",
  phone: "919876543210",
  minFreeDelivery: 199
};

function loadShopConfig() {
  try {
    const saved = localStorage.getItem("annapurna_shop_cfg");
    if (saved) {
      shopConfig = { ...shopConfig, ...JSON.parse(saved) };
    }
  } catch (e) {}
  applyShopConfig();
}

function applyShopConfig() {
  const upiCodeEl = document.getElementById("shopUpiIdText");
  if (upiCodeEl) upiCodeEl.textContent = shopConfig.upiId;

  const cfgName = document.getElementById("cfgShopName");
  const cfgUpi = document.getElementById("cfgUpiId");
  const cfgPhone = document.getElementById("cfgPhone");
  const cfgMin = document.getElementById("cfgMinFreeDelivery");

  if (cfgName) cfgName.value = shopConfig.name;
  if (cfgUpi) cfgUpi.value = shopConfig.upiId;
  if (cfgPhone) cfgPhone.value = shopConfig.phone;
  if (cfgMin) cfgMin.value = shopConfig.minFreeDelivery;
}

function openShopSettingsModal() {
  applyShopConfig();
  const m = document.getElementById("shopSettingsModal");
  if (m) m.classList.add("active");
}

function closeShopSettingsModal() {
  const m = document.getElementById("shopSettingsModal");
  if (m) m.classList.remove("active");
}

function saveShopSettings(event) {
  event.preventDefault();
  shopConfig.name = document.getElementById("cfgShopName").value.trim() || shopConfig.name;
  shopConfig.upiId = document.getElementById("cfgUpiId").value.trim() || shopConfig.upiId;
  shopConfig.phone = document.getElementById("cfgPhone").value.trim() || shopConfig.phone;
  shopConfig.minFreeDelivery = parseInt(document.getElementById("cfgMinFreeDelivery").value, 10) || 199;

  try {
    localStorage.setItem("annapurna_shop_cfg", JSON.stringify(shopConfig));
  } catch (e) {}

  applyShopConfig();
  const totals = calculateTotals();
  renderUpiQrCode(totals.grandTotal);
  renderCart();
  closeShopSettingsModal();
  showToast("Shop & UPI settings updated successfully!");
}

// 19. SUBSCRIPTION CUSTOMIZER LOGIC
let curSubDuration = 7;
let curSubMealType = "Lunch Only";

function openSubscriptionModal() {
  calculateSubPrice();
  const m = document.getElementById("subscriptionModal");
  if (m) m.classList.add("active");
}

function closeSubscriptionModal() {
  const m = document.getElementById("subscriptionModal");
  if (m) m.classList.remove("active");
}

function selectSubDuration(days, labelEl) {
  curSubDuration = days;
  document.querySelectorAll('input[name="subDuration"]').forEach(input => {
    input.closest(".sub-pill")?.classList.remove("active");
  });
  if (labelEl) labelEl.classList.add("active");
  calculateSubPrice();
}

function selectSubMealType(type, labelEl) {
  curSubMealType = type;
  document.querySelectorAll('input[name="subMealType"]').forEach(input => {
    input.closest(".sub-pill")?.classList.remove("active");
  });
  if (labelEl) labelEl.classList.add("active");
  calculateSubPrice();
}

function calculateSubPrice() {
  const mealsPerDay = curSubMealType === "Lunch & Dinner" ? 2 : 1;
  const totalMeals = curSubDuration * mealsPerDay;
  const baseRate = 110;
  const rawTotal = totalMeals * baseRate;

  let discountPct = 0.10;
  if (curSubDuration === 14) discountPct = 0.15;
  if (curSubDuration === 30) discountPct = 0.25;

  const discountAmount = Math.round(rawTotal * discountPct);
  const finalPrice = rawTotal - discountAmount;

  const baseRateEl = document.getElementById("subBaseRate");
  const totalMealsEl = document.getElementById("subTotalMeals");
  const discountEl = document.getElementById("subDiscountAmount");
  const finalPriceEl = document.getElementById("subFinalPrice");

  if (baseRateEl) baseRateEl.textContent = `₹${baseRate} / tiffin`;
  if (totalMealsEl) totalMealsEl.textContent = `${totalMeals} Tiffins (${curSubDuration} Days)`;
  if (discountEl) discountEl.textContent = `-₹${discountAmount} (${Math.round(discountPct * 100)}% OFF)`;
  if (finalPriceEl) finalPriceEl.textContent = `₹${finalPrice}`;

  return { totalMeals, finalPrice, discountAmount };
}

function addSubscriptionToCart() {
  const subInfo = calculateSubPrice();
  const dietStyle = document.getElementById("subDietStyle")?.value || "North Indian Homestyle";
  
  // Custom subscription dish object (ID 99)
  const subId = 99;
  let existingSub = menuItems.find(i => i.id === subId);
  const subName = `${curSubDuration}-Day Veg Plan (${curSubMealType})`;
  const subDesc = `${subInfo.totalMeals} Tiffins • Style: ${dietStyle}. Free priority delivery.`;

  if (existingSub) {
    existingSub.name = subName;
    existingSub.desc = subDesc;
    existingSub.price = subInfo.finalPrice;
  } else {
    menuItems.push({
      id: subId,
      name: subName,
      category: "thali",
      desc: subDesc,
      price: subInfo.finalPrice,
      originalPrice: subInfo.finalPrice + subInfo.discountAmount,
      cals: `${subInfo.totalMeals} Meals`,
      badge: "Subscription",
      img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80"
    });
  }

  cart[subId] = (cart[subId] || 0) + 1;
  saveCartToStorage();
  closeSubscriptionModal();
  renderMenu();
  renderCart();
  toggleCartDrawer(true);
  showToast("Meal Subscription added to your cart!");
  playChime(660, 0.2);
}

// 20. ORDER HISTORY ("MY ORDERS") LOGIC
function loadOrderHistory() {
  try {
    const raw = localStorage.getItem("annapurna_order_history");
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function saveOrderToHistory(order) {
  const history = loadOrderHistory();
  history.unshift(order);
  try {
    localStorage.setItem("annapurna_order_history", JSON.stringify(history.slice(0, 20)));
  } catch (e) {}
  updateOrderHistoryBadge();
}

function updateOrderHistoryBadge() {
  const history = loadOrderHistory();
  const badge = document.getElementById("ordersCountBadge");
  if (badge) badge.textContent = history.length;
}

function openOrderHistoryModal() {
  renderOrderHistory();
  const m = document.getElementById("orderHistoryModal");
  if (m) m.classList.add("active");
}

function closeOrderHistoryModal() {
  const m = document.getElementById("orderHistoryModal");
  if (m) m.classList.remove("active");
}

function renderOrderHistory() {
  const listEl = document.getElementById("orderHistoryList");
  if (!listEl) return;

  const history = loadOrderHistory();
  if (history.length === 0) {
    listEl.innerHTML = `
      <div class="empty-cart-state">
        <span class="empty-icon">📜</span>
        <p><strong>No previous orders found!</strong></p>
        <span>Your placed orders and invoices will appear here.</span>
        <button class="btn btn-secondary btn-sm" onclick="closeOrderHistoryModal(); scrollToElement('menu')" style="margin-top: 14px;">Browse Menu ↑</button>
      </div>
    `;
    return;
  }

  listEl.innerHTML = history.map(order => {
    const itemsSummary = order.items.map(i => `${i.name} (x${i.qty})`).join(", ");
    return `
      <div class="history-card">
        <div class="history-card-head">
          <div>
            <strong>#${order.orderId}</strong>
            <small class="history-date">${order.timestamp}</small>
          </div>
          <span class="history-badge-status">${order.payment.status}</span>
        </div>
        <p class="history-items-text">${itemsSummary}</p>
        <div class="history-card-foot">
          <div class="history-total-price">Total: <strong>₹${order.bill.grandTotal}</strong></div>
          <button class="btn btn-secondary btn-sm" onclick="reorderPastOrder('${order.orderId}')">🔁 Re-Order</button>
        </div>
      </div>
    `;
  }).join("");
}

function reorderPastOrder(orderId) {
  const history = loadOrderHistory();
  const order = history.find(o => o.orderId === orderId);
  if (!order) return;

  order.items.forEach(i => {
    cart[i.id] = (cart[i.id] || 0) + i.qty;
  });

  saveCartToStorage();
  closeOrderHistoryModal();
  renderMenu();
  renderCart();
  toggleCartDrawer(true);
  showToast("Past order items added to your cart!");
  playChime(580, 0.15);
}

// 22. KITCHEN LIVE DASHBOARD LOGIC
function openKitchenDashboardModal() {
  renderKitchenDashboard();
  const m = document.getElementById("kitchenModal");
  if (m) m.classList.add("active");
}

function closeKitchenDashboardModal() {
  const m = document.getElementById("kitchenModal");
  if (m) m.classList.remove("active");
}

function renderKitchenDashboard() {
  const history = loadOrderHistory();
  const totalSales = history.reduce((sum, o) => sum + (o.bill?.grandTotal || 0), 0);
  const activeOrders = history.filter(o => o.deliveryStatus !== "Delivered");

  const salesEl = document.getElementById("kStatTotalSales");
  const totalEl = document.getElementById("kStatTotalOrders");
  const activeEl = document.getElementById("kStatActiveOrders");

  if (salesEl) salesEl.textContent = `₹${totalSales}`;
  if (totalEl) totalEl.textContent = history.length;
  if (activeEl) activeEl.textContent = activeOrders.length;

  const listEl = document.getElementById("kitchenOrdersList");
  if (!listEl) return;

  if (history.length === 0) {
    listEl.innerHTML = `
      <div class="empty-cart-state">
        <span class="empty-icon">🍳</span>
        <p><strong>No orders in the kitchen queue!</strong></p>
        <span>Placed orders will appear here in real-time.</span>
      </div>
    `;
    return;
  }

  listEl.innerHTML = history.map(order => {
    const status = order.deliveryStatus || "Cooking in Kitchen";
    const itemsText = order.items.map(i => `<strong>${i.name}</strong> × ${i.qty}`).join("<br>");
    return `
      <div class="k-order-card">
        <div class="k-order-header">
          <div>
            <strong class="k-order-id">#${order.orderId}</strong>
            <span class="k-order-time">${order.timestamp}</span>
          </div>
          <div class="k-status-select-wrap">
            <select onchange="updateOrderStatus('${order.orderId}', this.value)" class="k-status-select">
              <option value="Cooking in Kitchen" ${status === "Cooking in Kitchen" ? "selected" : ""}>👨‍🍳 Cooking in Kitchen</option>
              <option value="Out for Delivery" ${status === "Out for Delivery" ? "selected" : ""}>🛵 Out for Delivery</option>
              <option value="Delivered" ${status === "Delivered" ? "selected" : ""}>🏡 Delivered</option>
            </select>
          </div>
        </div>
        <div class="k-order-body">
          <div class="k-order-cust">
            <strong>${order.customer.name}</strong> (${order.customer.phone})<br>
            <small>📍 ${order.customer.address}, ${order.customer.pincode}</small><br>
            <small>⏰ Slot: ${order.customer.slot}</small>
            ${order.customer.notes ? `<div class="k-order-notes">📝 Notes: ${order.customer.notes}</div>` : ""}
          </div>
          <div class="k-order-items">
            ${itemsText}
          </div>
        </div>
        <div class="k-order-footer">
          <span>Payment: <strong>${order.payment.method} (${order.payment.status})</strong></span>
          <strong class="k-order-total">Total: ₹${order.bill.grandTotal}</strong>
        </div>
      </div>
    `;
  }).join("");
}

function updateOrderStatus(orderId, newStatus) {
  const history = loadOrderHistory();
  const order = history.find(o => o.orderId === orderId);
  if (order) {
    order.deliveryStatus = newStatus;
    try {
      localStorage.setItem("annapurna_order_history", JSON.stringify(history));
    } catch (e) {}
    renderKitchenDashboard();
    showToast(`Order #${orderId} marked as ${newStatus}`);
  }
}

// 21. INITIALIZATION ON PAGE LOAD
document.addEventListener("DOMContentLoaded", () => {
  loadShopConfig();
  loadStoredCart();
  renderMenu();
  renderCart();
  updateOrderHistoryBadge();
  const totals = calculateTotals();
  renderUpiQrCode(totals.grandTotal);
});
