/* ==========================================================================
   Gujarat Mobile — Killa-Pardi
   app.js — ALL editable business data lives at the top of this file.
   ========================================================================== */

/* --------------------------------------------------------------------------
   1. DEMO MODE
   --------------------------------------------------------------------------
   When true: shows the demo banner, blocks unverified contact buttons from
   pretending to be real, and clearly labels sample data.
   Set to false ONLY after every "VERIFY_" value below has been replaced
   with real, owner-confirmed information.
-------------------------------------------------------------------------- */
const DEMO_MODE = true;

/* --------------------------------------------------------------------------
   2. BUSINESS CONFIGURATION — the ONE place to edit contact details
   --------------------------------------------------------------------------
   Replace every "VERIFY_..." value once confirmed by the store owner.
   Every button on the site (Call, WhatsApp, Directions) reads from here.
-------------------------------------------------------------------------- */
const business = {
  name: "Gujarat Mobile",
  branch: "Killa-Pardi",
  phone: "VERIFY_PHONE",                 // e.g. "+91XXXXXXXXXX"
  whatsapp: "VERIFY_WHATSAPP",           // e.g. "91XXXXXXXXXX" (no + or spaces)
  address: "VERIFY_ADDRESS",             // full postal address, Killa-Pardi
  mapsUrl: "VERIFY_GOOGLE_MAPS_URL",     // real Google Maps share link
  hours: "VERIFY_STORE_HOURS"            // e.g. "10:00 AM – 9:00 PM, all days"
};

/* --------------------------------------------------------------------------
   3. PRODUCTS — replace this array with real Killa-Pardi inventory.
   --------------------------------------------------------------------------
   Keep the same field names so the rendering code keeps working.
   "price" should stay "Price on enquiry" until real prices are confirmed.
   "image" can point to a real photo path once available, e.g.
   "assets/images/products/iphone-15.jpg"
-------------------------------------------------------------------------- */
const products = [
  {
    id: "p1",
    brand: "SAMPLE",
    name: "Sample Smartphone 01",
    category: "Budget",
    image: "",
    ram: "4GB",
    storage: "64GB",
    spec: "6.5\" HD+ display",
    price: "Price on enquiry"
  },
  {
    id: "p2",
    brand: "SAMPLE",
    name: "Sample Smartphone 02",
    category: "Mid-range",
    image: "",
    ram: "6GB",
    storage: "128GB",
    spec: "AMOLED display · Dual camera",
    price: "Price on enquiry"
  },
  {
    id: "p3",
    brand: "SAMPLE",
    name: "Sample Smartphone 03",
    category: "Mid-range",
    image: "",
    ram: "8GB",
    storage: "128GB",
    spec: "5G ready · Fast charging",
    price: "Price on enquiry"
  },
  {
    id: "p4",
    brand: "SAMPLE",
    name: "Sample Smartphone 04",
    category: "Premium",
    image: "",
    ram: "8GB",
    storage: "256GB",
    spec: "Triple camera system",
    price: "Price on enquiry"
  },
  {
    id: "p5",
    brand: "SAMPLE",
    name: "Sample Smartphone 05",
    category: "Premium",
    image: "",
    ram: "12GB",
    storage: "256GB",
    spec: "Flagship processor",
    price: "Price on enquiry"
  },
  {
    id: "p6",
    brand: "SAMPLE",
    name: "Sample Smartphone 06",
    category: "Budget",
    image: "",
    ram: "4GB",
    storage: "64GB",
    spec: "Large battery",
    price: "Price on enquiry"
  }
];

/* --------------------------------------------------------------------------
   4. OFFERS — replace only after real offers are confirmed by the owner.
   --------------------------------------------------------------------------
   Keep isSample: true for placeholder cards. Set isSample: false and fill
   in real details once an offer is verified.
-------------------------------------------------------------------------- */
const offers = [
  {
    id: "o1",
    title: "Sample Offer Card",
    description: "Latest offers will be updated after verification.",
    tag: "Offer type: to be confirmed",
    isSample: true
  },
  {
    id: "o2",
    title: "Sample Offer Card",
    description: "Exchange, bank and festival offers will appear here once confirmed.",
    tag: "Offer type: to be confirmed",
    isSample: true
  },
  {
    id: "o3",
    title: "Sample Offer Card",
    description: "Accessory bundle offers will appear here once confirmed.",
    tag: "Offer type: to be confirmed",
    isSample: true
  }
];

/* --------------------------------------------------------------------------
   5. ACCESSORY CATEGORIES — suggested only, confirm actual availability.
-------------------------------------------------------------------------- */
const accessoryCategories = [
  { name: "Phone Cases", icon: "shield" },
  { name: "Chargers", icon: "plug-zap" },
  { name: "Cables", icon: "cable" },
  { name: "Power Banks", icon: "battery-charging" },
  { name: "Earbuds", icon: "headphones" },
  { name: "Screen Protectors", icon: "shield-check" }
];

/* ==========================================================================
   RENDERING
   ========================================================================== */

function productImageSVG(){
  return `<svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
    <rect x="7" y="2" width="10" height="20" rx="2"></rect>
    <line x1="11" y1="18" x2="13" y2="18"></line>
  </svg>`;
}

function productCard(p){
  return `
  <article class="gm-card overflow-hidden flex flex-col gm-reveal" data-category="${p.category}" data-name="${p.name.toLowerCase()} ${p.brand.toLowerCase()}">
    <div class="gm-card-top-accent"></div>
    <div class="gm-img-tile h-40 sm:h-44">
      ${p.image ? `<img src="${p.image}" alt="${p.name} — ${p.brand}" class="w-full h-full object-cover" loading="lazy" width="400" height="300">` : productImageSVG()}
      <span class="absolute top-3 left-3 gm-badge-sample">Sample product</span>
    </div>
    <div class="p-4 sm:p-5 flex flex-col flex-1">
      <div class="flex items-center justify-between gap-2 mb-1.5">
        <span class="gm-eyebrow">${p.brand}</span>
        <span class="gm-badge-outline">${p.category}</span>
      </div>
      <h3 class="font-display font-semibold text-base sm:text-[1.05rem] leading-snug mb-2">${p.name}</h3>
      <ul class="text-sm text-[var(--gm-ink-soft)] space-y-1 mb-4">
        <li class="flex items-center gap-1.5"><i data-lucide="cpu" class="w-3.5 h-3.5"></i>${p.ram} RAM · ${p.storage} storage</li>
        <li class="flex items-center gap-1.5"><i data-lucide="sparkles" class="w-3.5 h-3.5"></i>${p.spec}</li>
      </ul>
      <div class="mt-auto pt-3 border-t border-[var(--gm-line)] flex items-center justify-between gap-3">
        <span class="font-display font-semibold text-sm text-[var(--gm-maroon)]">${p.price}</span>
        <button type="button" class="btn btn-primary btn-sm gm-enquire-btn" data-product="${p.name}" aria-label="Enquire about ${p.name} on WhatsApp">
          <i data-lucide="message-circle" class="w-4 h-4"></i> Enquire
        </button>
      </div>
    </div>
  </article>`;
}

function offerCard(o){
  return `
  <article class="gm-card p-5 sm:p-6 gm-reveal">
    <div class="flex items-center justify-between mb-4">
      <span class="w-11 h-11 rounded-full flex items-center justify-center" style="background:var(--gm-paper-2)">
        <i data-lucide="tag" class="w-5 h-5" style="color:var(--gm-maroon)"></i>
      </span>
      ${o.isSample ? '<span class="gm-badge-sample">Sample offer</span>' : ''}
    </div>
    <h3 class="font-display font-semibold text-lg mb-1.5">${o.title}</h3>
    <p class="text-sm text-[var(--gm-ink-soft)] mb-3">${o.description}</p>
    <span class="gm-badge-outline">${o.tag}</span>
  </article>`;
}

function accessoryCard(a){
  return `
  <div class="gm-card p-5 flex flex-col items-center text-center gap-3 gm-reveal">
    <span class="w-12 h-12 rounded-full flex items-center justify-center" style="background:var(--gm-paper-2)">
      <i data-lucide="${a.icon}" class="w-5 h-5" style="color:var(--gm-saffron-dk)"></i>
    </span>
    <p class="font-display font-medium text-sm">${a.name}</p>
  </div>`;
}

function renderAll(){
  document.getElementById("productGrid").innerHTML = products.map(productCard).join("");
  document.getElementById("offerGrid").innerHTML = offers.map(offerCard).join("");
  document.getElementById("accessoryGrid").innerHTML = accessoryCategories.map(accessoryCard).join("");

  // Build filter chips from categories present in the data
  const cats = ["All", ...new Set(products.map(p => p.category))];
  document.getElementById("filterChips").innerHTML = cats.map((c, i) => `
    <button type="button" class="gm-chip ${i === 0 ? "is-active" : ""}" data-filter="${c}">${c}</button>
  `).join("");

  if (window.lucide) lucide.createIcons();
}

/* ==========================================================================
   FILTER + SEARCH
   ========================================================================== */

function applyProductFilters(){
  const activeChip = document.querySelector("#filterChips .gm-chip.is-active");
  const activeCategory = activeChip ? activeChip.dataset.filter : "All";
  const query = document.getElementById("productSearch").value.trim().toLowerCase();
  const cards = document.querySelectorAll("#productGrid > article");
  let visibleCount = 0;

  cards.forEach(card => {
    const matchesCategory = activeCategory === "All" || card.dataset.category === activeCategory;
    const matchesQuery = !query || card.dataset.name.includes(query);
    const show = matchesCategory && matchesQuery;
    card.style.display = show ? "" : "none";
    if (show) visibleCount++;
  });

  const emptyState = document.getElementById("productEmptyState");
  emptyState.classList.toggle("hidden", visibleCount !== 0);
}

/* ==========================================================================
   WHATSAPP ENQUIRY
   ========================================================================== */

function buildWhatsAppLink(productName){
  const base = `Hello ${business.name} ${business.branch}, I am interested in ${productName || "your products"}. Could you please share the current price and availability?`;
  const encoded = encodeURIComponent(base);
  const number = business.whatsapp && business.whatsapp !== "VERIFY_WHATSAPP" ? business.whatsapp : "";
  return `https://wa.me/${number}?text=${encoded}`;
}

function handleWhatsAppClick(e, productName){
  if (DEMO_MODE && business.whatsapp === "VERIFY_WHATSAPP"){
    e.preventDefault();
    showDemoNotice("WhatsApp number not yet verified. Add the real number in js/app.js → business.whatsapp.");
    return;
  }
}

function handleCallClick(e){
  if (DEMO_MODE && business.phone === "VERIFY_PHONE"){
    e.preventDefault();
    showDemoNotice("Phone number not yet verified. Add the real number in js/app.js → business.phone.");
  }
}

function handleDirectionsClick(e){
  if (DEMO_MODE && business.mapsUrl === "VERIFY_GOOGLE_MAPS_URL"){
    e.preventDefault();
    showDemoNotice("Google Maps link not yet verified. Add the real link in js/app.js → business.mapsUrl.");
  }
}

function showDemoNotice(message){
  const toast = document.getElementById("demoToast");
  toast.textContent = message;
  toast.classList.remove("hidden");
  requestAnimationFrame(() => toast.classList.add("is-visible"));
  clearTimeout(showDemoNotice._t);
  showDemoNotice._t = setTimeout(() => {
    toast.classList.remove("is-visible");
    setTimeout(() => toast.classList.add("hidden"), 200);
  }, 3200);
}

/* ==========================================================================
   WIRE UP CONTACT BUTTONS FROM CONFIG
   ========================================================================== */

function wireContactButtons(){
  // Call buttons
  document.querySelectorAll("[data-role='call-btn']").forEach(btn => {
    btn.href = business.phone !== "VERIFY_PHONE" ? `tel:${business.phone}` : "#location";
    btn.addEventListener("click", handleCallClick);
  });

  // Directions buttons
  document.querySelectorAll("[data-role='directions-btn']").forEach(btn => {
    btn.href = business.mapsUrl !== "VERIFY_GOOGLE_MAPS_URL" ? business.mapsUrl : "#location";
    if (business.mapsUrl !== "VERIFY_GOOGLE_MAPS_URL"){
      btn.target = "_blank";
      btn.rel = "noopener noreferrer";
    }
    btn.addEventListener("click", handleDirectionsClick);
  });

  // General WhatsApp buttons (no specific product)
  document.querySelectorAll("[data-role='whatsapp-btn']").forEach(btn => {
    btn.href = buildWhatsAppLink("your products");
    btn.target = "_blank";
    btn.rel = "noopener noreferrer";
    btn.addEventListener("click", (e) => handleWhatsAppClick(e, "your products"));
  });

  // Fill in address / phone / whatsapp / hours text placeholders
  document.querySelectorAll("[data-field='address']").forEach(el => el.textContent = business.address);
  document.querySelectorAll("[data-field='phone']").forEach(el => el.textContent = business.phone);
  document.querySelectorAll("[data-field='whatsapp']").forEach(el => el.textContent = business.whatsapp);
  document.querySelectorAll("[data-field='hours']").forEach(el => el.textContent = business.hours);
}

/* Product-specific enquiry buttons (built after render, so delegate) */
function wireProductEnquiryButtons(){
  document.getElementById("productGrid").addEventListener("click", (e) => {
    const btn = e.target.closest(".gm-enquire-btn");
    if (!btn) return;
    const productName = btn.dataset.product;
    const link = buildWhatsAppLink(productName);
    if (DEMO_MODE && business.whatsapp === "VERIFY_WHATSAPP"){
      showDemoNotice(`WhatsApp number not yet verified. This button will message about "${productName}" once added.`);
      return;
    }
    window.open(link, "_blank", "noopener,noreferrer");
  });
}

/* ==========================================================================
   MOBILE NAV
   ========================================================================== */

function setupMobileNav(){
  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("mobileNav");
  const closeBtn = document.getElementById("navClose");
  const backdrop = document.getElementById("navBackdrop");
  const links = nav.querySelectorAll("a");

  function openNav(){
    nav.classList.remove("is-closed");
    nav.classList.add("is-open");
    backdrop.classList.remove("hidden");
    toggle.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
    closeBtn.focus();
  }
  function closeNav(){
    nav.classList.remove("is-open");
    nav.classList.add("is-closed");
    backdrop.classList.add("hidden");
    toggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
    toggle.focus();
  }

  toggle.addEventListener("click", openNav);
  closeBtn.addEventListener("click", closeNav);
  backdrop.addEventListener("click", closeNav);
  links.forEach(link => link.addEventListener("click", closeNav));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && nav.classList.contains("is-open")) closeNav();
  });
}

/* ==========================================================================
   ACTIVE NAV STATE ON SCROLL + BACK TO TOP
   ========================================================================== */

function setupScrollSpy(){
  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll(".gm-nav-link");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        const id = entry.target.getAttribute("id");
        navLinks.forEach(link => {
          link.classList.toggle("is-active", link.getAttribute("href") === `#${id}`);
        });
      }
    });
  }, { rootMargin: "-45% 0px -50% 0px" });

  sections.forEach(s => observer.observe(s));
}

function setupBackToTop(){
  const btn = document.getElementById("backToTop");
  window.addEventListener("scroll", () => {
    btn.classList.toggle("is-hidden", window.scrollY < 500);
  });
  btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

/* ==========================================================================
   SCROLL REVEAL ANIMATIONS (restrained)
   ========================================================================== */

function setupScrollReveal(){
  const targets = document.querySelectorAll(".gm-reveal");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  targets.forEach(t => observer.observe(t));
}

/* Re-run reveal setup after dynamic content renders */
function refreshRevealTargets(){
  setupScrollReveal();
}

/* ==========================================================================
   HEADER SHADOW ON SCROLL
   ========================================================================== */

function setupHeaderShadow(){
  const header = document.getElementById("siteHeader");
  window.addEventListener("scroll", () => {
    header.classList.toggle("shadow-lg", window.scrollY > 8);
  });
}

/* ==========================================================================
   INIT
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("yearNow").textContent = new Date().getFullYear();

  renderAll();
  wireContactButtons();
  wireProductEnquiryButtons();
  setupMobileNav();
  setupScrollSpy();
  setupBackToTop();
  setupHeaderShadow();
  refreshRevealTargets();

  document.getElementById("productSearch").addEventListener("input", applyProductFilters);
  document.getElementById("filterChips").addEventListener("click", (e) => {
    const chip = e.target.closest(".gm-chip");
    if (!chip) return;
    document.querySelectorAll("#filterChips .gm-chip").forEach(c => c.classList.remove("is-active"));
    chip.classList.add("is-active");
    applyProductFilters();
  });

  if (!DEMO_MODE){
    document.querySelectorAll("[data-demo-only]").forEach(el => el.remove());
  }
});
