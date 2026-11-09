/**
 * MS POWERTECH – CORE CLIENT SCRIPT (main.js)
 * Modern, dependency-free interactive engine for GitHub Pages hosting.
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  populateSiteConfig();
  initWhatsAppButtons();
  initQuoteModal();
  initBackToTop();
  initContactForms();
  initCustomBatteryCalculator();
});

/**
 * Navbar scroll behavior, active link indicator, and mobile menu toggle
 */
function initNavbar() {
  const navbar = document.getElementById('mainNavbar');
  const mobileToggle = document.getElementById('mobileMenuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileOverlay = document.getElementById('mobileMenuOverlay');

  // Sticky navbar blur & shadow on scroll
  window.addEventListener('scroll', () => {
    if (navbar) {
      if (window.scrollY > 20) {
        navbar.classList.add('shadow-xl', 'bg-slate-950/95');
        navbar.classList.remove('bg-slate-950/80');
      } else {
        navbar.classList.remove('shadow-xl', 'bg-slate-950/95');
        navbar.classList.add('bg-slate-950/80');
      }
    }
  });

  // Mobile menu toggle
  if (mobileToggle && mobileMenu) {
    const toggleMenu = () => {
      const isOpen = !mobileMenu.classList.contains('hidden');
      if (isOpen) {
        mobileMenu.classList.add('hidden');
        if (mobileOverlay) mobileOverlay.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
      } else {
        mobileMenu.classList.remove('hidden');
        if (mobileOverlay) mobileOverlay.classList.remove('hidden');
        document.body.classList.add('overflow-hidden');
      }
    };

    mobileToggle.addEventListener('click', toggleMenu);
    if (mobileOverlay) {
      mobileOverlay.addEventListener('click', toggleMenu);
    }
    const closeBtn = document.getElementById('closeMobileMenu');
    if (closeBtn) closeBtn.addEventListener('click', toggleMenu);
  }

  // Active navigation link highlighting based on current file name
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('text-sky-400', 'font-semibold', 'border-b-2', 'border-sky-400');
      link.classList.remove('text-slate-300');
    }
  });
}

/**
 * Automatically populates data attributes with SITE_CONFIG values
 */
function populateSiteConfig() {
  if (typeof SITE_CONFIG === 'undefined') return;

  // Phone display
  document.querySelectorAll('[data-site-phone]').forEach(el => {
    el.textContent = SITE_CONFIG.contact.phone;
  });
  document.querySelectorAll('a[data-site-phone-link]').forEach(el => {
    el.setAttribute('href', `tel:${SITE_CONFIG.contact.phoneTel}`);
  });

  // Email display & links
  document.querySelectorAll('[data-site-email]').forEach(el => {
    el.textContent = SITE_CONFIG.contact.email;
  });
  document.querySelectorAll('a[data-site-email-link]').forEach(el => {
    el.setAttribute('href', `mailto:${SITE_CONFIG.contact.email}`);
  });

  // Address
  document.querySelectorAll('[data-site-address]').forEach(el => {
    el.textContent = SITE_CONFIG.contact.address.full;
  });

  // MOQ
  document.querySelectorAll('[data-site-moq-standard]').forEach(el => {
    el.textContent = SITE_CONFIG.business.moqStandard;
  });
  document.querySelectorAll('[data-site-moq-custom]').forEach(el => {
    el.textContent = SITE_CONFIG.business.moqCustom;
  });

  // Year in copyright
  const yearEl = document.getElementById('currentYear');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}

/**
 * Sets up WhatsApp click-to-chat links and floating button
 */
function initWhatsAppButtons() {
  if (typeof SITE_CONFIG === 'undefined') return;

  // Floating WhatsApp button - sends direct enquiry with page context
  const floatingBtn = document.getElementById('whatsappFloatingBtn');
  if (floatingBtn) {
    const pageTitle = document.title ? document.title.split('|')[0].trim() : 'MS Powertech Website';
    const msg = `*💬 DIRECT ENQUIRY TO MS POWERTECH OWNER*\n` +
      `----------------------------------------\n` +
      `Hello MS Powertech,\n` +
      `I am visiting your website on page: "${pageTitle}"\n\n` +
      `I would like to enquire about your LiFePO4 Lithium Battery Solutions:\n` +
      `- 3 Core Standard Models (48V 20Ah, 51V 30Ah, 60V 30Ah)\n` +
      `- Made-by-Custom Packs (12V - 96V+ / E-Rickshaw / Inverter / Solar)\n\n` +
      `Please share your product catalogue, wholesale pricing, and availability.\n` +
      `----------------------------------------\n` +
      `🌐 Source: www.powertechlithium.in`;

    floatingBtn.setAttribute('href', SITE_CONFIG.getWhatsAppUrl(msg));
    floatingBtn.setAttribute('target', '_blank');
    floatingBtn.setAttribute('rel', 'noopener noreferrer');
  }

  // Any generic element with data-whatsapp-enquire - automatically builds full enquiry details
  document.querySelectorAll('[data-whatsapp-enquire]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const product = btn.getAttribute('data-product') || 'MS Powertech Lithium Battery Solutions';
      const config = btn.getAttribute('data-config') || '';
      const pageTitle = document.title ? document.title.split('|')[0].trim() : 'MS Powertech';

      const msg = `*⚡ ENQUIRY TO MS POWERTECH OWNER*\n` +
        `----------------------------------------\n` +
        `🔋 *Product:* ${product}\n` +
        (config ? `⚡ *Specification:* ${config}\n` : '') +
        `🏭 *Manufacturer:* MS Powertech (Moradabad, Uttar Pradesh)\n` +
        `----------------------------------------\n` +
        `Hello MS Powertech Owner / Sales Team,\n` +
        `I am browsing www.powertechlithium.in (${pageTitle}) and would like to ask:\n` +
        `1. What is the direct wholesale / factory price for this battery?\n` +
        `2. What is the availability and dispatch timeline?\n` +
        `3. Can you share the technical datasheet & BMS options?\n\n` +
        `Please connect with me on WhatsApp. Thank you!`;

      SITE_CONFIG.sendToWhatsApp(msg);
    });
  });
}

/**
 * "Get a Quote" / "Enquire Now" modal logic - sends ALL filled details to owner's WhatsApp immediately
 */
function initQuoteModal() {
  const modal = document.getElementById('quoteModal');
  if (!modal) return;

  const closeBtns = modal.querySelectorAll('.close-modal-btn');
  const quoteForm = document.getElementById('quoteModalForm');
  const modalProductSelect = document.getElementById('modalProductSelect');

  // Open modal buttons
  document.querySelectorAll('.open-quote-modal-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const prefillProduct = btn.getAttribute('data-product-name');
      if (modalProductSelect && prefillProduct) {
        modalProductSelect.value = prefillProduct;
      }
      modal.classList.remove('hidden');
      modal.classList.add('flex');
      document.body.classList.add('overflow-hidden');
    });
  });

  // Close modal
  const closeModal = () => {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.classList.remove('overflow-hidden');
  };

  closeBtns.forEach(btn => btn.addEventListener('click', closeModal));
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  // Modal form submission: Save locally and immediately launch WhatsApp with ALL details
  if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(quoteForm);
      const data = Object.fromEntries(formData.entries());

      // Save lead locally in browser storage
      try {
        const leads = JSON.parse(localStorage.getItem('ms_powertech_quotes') || '[]');
        leads.push({ ...data, date: new Date().toISOString() });
        localStorage.setItem('ms_powertech_quotes', JSON.stringify(leads));
      } catch (err) {}

      // Build WhatsApp message with ALL details filled by customer
      const msg = `*🔔 NEW BUSINESS QUOTE REQUEST - MS POWERTECH*\n` +
        `----------------------------------------\n` +
        `👤 *Customer Name:* ${data.name}\n` +
        `📱 *WhatsApp Phone:* ${data.phone}\n` +
        `✉️ *Email Address:* ${data.email}\n` +
        `🏢 *Company / Business:* ${data.company || 'Not Specified'}\n` +
        `🔋 *Product of Interest:* ${data.product}\n` +
        `📦 *Estimated Quantity:* ${data.quantity || 'Any quantity'}\n` +
        `📝 *Requirement Details:* ${data.message || 'Standard factory price quote'}\n` +
        `----------------------------------------\n` +
        `📍 *To:* MS Powertech, Bhojpur Dharampur, Moradabad (UP)\n` +
        `🌐 *Source:* www.powertechlithium.in`;

      // 1. Immediately launch WhatsApp to the owner with all details
      SITE_CONFIG.sendToWhatsApp(msg);

      // 2. Show success feedback inside modal with a direct re-open button
      const successBox = document.getElementById('modalSuccessBox');
      const directWhatsAppBtn = document.getElementById('modalSendWhatsAppBtn');
      if (successBox && directWhatsAppBtn) {
        quoteForm.classList.add('hidden');
        successBox.classList.remove('hidden');
        directWhatsAppBtn.setAttribute('href', SITE_CONFIG.getWhatsAppUrl(msg));
      } else {
        alert('Thank you! Your quote request has been sent to our WhatsApp.');
        closeModal();
      }
    });
  }
}

/**
 * Contact Form - sends ALL filled details to owner's WhatsApp immediately
 */
function initContactForms() {
  const contactForm = document.getElementById('mainContactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(contactForm);
      const data = Object.fromEntries(formData.entries());

      // Store in browser storage
      try {
        const enquiries = JSON.parse(localStorage.getItem('ms_powertech_enquiries') || '[]');
        enquiries.push({ ...data, timestamp: new Date().toISOString() });
        localStorage.setItem('ms_powertech_enquiries', JSON.stringify(enquiries));
      } catch (err) {}

      // Build WhatsApp message with ALL details filled by customer
      const msg = `*📩 NEW CONTACT ENQUIRY - MS POWERTECH*\n` +
        `----------------------------------------\n` +
        `👤 *Full Name:* ${data.name}\n` +
        `📱 *WhatsApp Phone:* ${data.phone}\n` +
        `✉️ *Email Address:* ${data.email}\n` +
        `📌 *Subject:* ${data.subject || 'Website Enquiry'}\n` +
        `🔋 *Product of Interest:* ${data.product || 'General / Not Specified'}\n` +
        `💬 *Message:* ${data.message}\n` +
        `----------------------------------------\n` +
        `📍 *To:* MS Powertech, Bhojpur Dharampur, Moradabad (UP)\n` +
        `🌐 *Source:* www.powertechlithium.in`;

      // 1. Immediately launch WhatsApp to the owner with all details
      SITE_CONFIG.sendToWhatsApp(msg);

      // 2. Show feedback on page with direct button
      const feedback = document.getElementById('contactFormFeedback');
      if (feedback) {
        feedback.innerHTML = `
          <div class="p-6 rounded-2xl bg-emerald-950/90 border border-emerald-500/50 text-emerald-200 shadow-2xl">
            <div class="flex items-center gap-3 text-emerald-400 mb-2">
              <i class="fas fa-check-circle text-2xl text-emerald-400"></i>
              <h4 class="font-bold text-lg text-white">Details Sent to Owner's WhatsApp!</h4>
            </div>
            <p class="text-xs text-slate-300 mb-4">Your enquiry details have been forwarded directly to MS Powertech WhatsApp. If WhatsApp didn't open automatically, click below to open chat:</p>
            <a href="${SITE_CONFIG.getWhatsAppUrl(msg)}" target="_blank" class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-xs shadow-lg transition">
              <i class="fab fa-whatsapp text-base"></i> Open WhatsApp Chat
            </a>
          </div>
        `;
        feedback.classList.remove('hidden');
        contactForm.reset();
      }
    });
  }
}

/**
 * Custom Battery Solutions interactive calculator & enquiry form - sends ALL filled details to owner's WhatsApp immediately
 */
function initCustomBatteryCalculator() {
  const customForm = document.getElementById('customBatteryEnquiryForm');
  if (!customForm) return;

  const voltageInput = document.getElementById('customVoltage');
  const capacityInput = document.getElementById('customCapacity');
  const estEnergyDisplay = document.getElementById('customEnergyDisplay');

  // Real-time calculated watt-hours
  const updateEnergy = () => {
    if (voltageInput && capacityInput && estEnergyDisplay) {
      const v = parseFloat(voltageInput.value) || 0;
      const ah = parseFloat(capacityInput.value) || 0;
      if (v > 0 && ah > 0) {
        const wh = v * ah;
        const kwh = (wh / 1000).toFixed(2);
        estEnergyDisplay.textContent = `${wh.toLocaleString()} Wh (${kwh} kWh)`;
      } else {
        estEnergyDisplay.textContent = 'Enter Voltage & Capacity';
      }
    }
  };

  if (voltageInput) voltageInput.addEventListener('input', updateEnergy);
  if (capacityInput) capacityInput.addEventListener('input', updateEnergy);

  customForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(customForm);
    const data = Object.fromEntries(formData.entries());

    const v = parseFloat(data.voltage) || 0;
    const ah = parseFloat(data.capacity) || 0;
    const energyCalc = (v > 0 && ah > 0) ? `${(v * ah).toLocaleString()} Wh (${((v * ah) / 1000).toFixed(2)} kWh)` : 'Calculated per design';

    const msg = `*🛠️ CUSTOM BATTERY SPECIFICATION - MS POWERTECH*\n` +
      `----------------------------------------\n` +
      `👤 *Client Name:* ${data.name}\n` +
      `🏢 *Company / Business:* ${data.company || 'Not Specified'}\n` +
      `📱 *WhatsApp Phone:* ${data.phone}\n` +
      `✉️ *Email Address:* ${data.email}\n` +
      `🎯 *Target Application:* ${data.application}\n` +
      `⚡ *Required Voltage:* ${data.voltage}V\n` +
      `🔋 *Required Capacity:* ${data.capacity}Ah\n` +
      `💡 *Calculated Energy:* ${energyCalc}\n` +
      `📦 *Order Quantity:* ${data.quantity} units (Any quantity)\n` +
      `🧠 *BMS Preference:* ${data.bms || 'Smart / Standard BMS'}\n` +
      `📐 *Dimensions / Tray Notes:* ${data.notes || 'Standard form factor'}\n` +
      `----------------------------------------\n` +
      `📍 *To:* MS Powertech Engineering Cell, Moradabad (UP)\n` +
      `🌐 *Source:* www.powertechlithium.in`;

    // 1. Immediately launch WhatsApp to the owner with all details
    SITE_CONFIG.sendToWhatsApp(msg);

    // 2. Render feedback on page with direct button
    const feedback = document.getElementById('customFormFeedback');
    if (feedback) {
      feedback.innerHTML = `
        <div class="p-6 rounded-2xl bg-sky-950/90 border border-sky-500/50 text-slate-100 shadow-2xl">
          <div class="flex items-center gap-3 text-sky-400 mb-2">
            <i class="fas fa-check-circle text-2xl text-emerald-400"></i>
            <h4 class="font-bold text-lg text-white">Custom Specification Sent to Owner's WhatsApp!</h4>
          </div>
          <p class="text-xs text-slate-300 mb-4">Your custom configuration (${data.voltage}V ${data.capacity}Ah) has been forwarded directly to our lead engineer's WhatsApp. If WhatsApp didn't open automatically, click below:</p>
          <a href="${SITE_CONFIG.getWhatsAppUrl(msg)}" target="_blank" class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-xs shadow-lg transition">
            <i class="fab fa-whatsapp text-base"></i> Open WhatsApp Chat
          </a>
        </div>
      `;
      feedback.classList.remove('hidden');
      feedback.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

/**
 * Scroll to Top logic
 */
function initBackToTop() {
  const btn = document.getElementById('backToTopBtn');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
