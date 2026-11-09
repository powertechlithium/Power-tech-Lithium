/**
 * ========================================================================
 * MS POWERTECH – CENTRAL CONFIGURATION
 * ========================================================================
 * You can change company details, contact numbers, email, and social links
 * here. All pages and WhatsApp buttons will automatically use these values!
 */

const SITE_CONFIG = {
  brandName: "MS Powertech",
  fullName: "MS Powertech – Lithium Battery Solutions",
  tagline: "Powering a Cleaner, Greener Tomorrow",
  subTagline: "Manufacturer & Wholesale Supplier of High-Performance LiFePO4 Lithium Battery Packs",
  domain: "www.powertechlithium.in",
  websiteUrl: "https://www.powertechlithium.in",
  
  // Contact Information (Update these with your real details)
  contact: {
    phone: "+91 82184 92525",          // Display phone
    phoneTel: "+918218492525",         // tel: link format
    whatsapp: "918218492525",          // WhatsApp format without '+' or '-'
    email: "Powertechlithium18@gmail.com",
    supportEmail: "Powertechlithium18@gmail.com",
    salesEmail: "Powertechlithium18@gmail.com",
    workingHours: "Mon - Sat: 9:00 AM - 7:00 PM (IST)",
    address: {
      facility: "MS Powertech Manufacturing Facility",
      locality: "Bhojpur Dharampur",
      city: "Moradabad",
      state: "Uttar Pradesh",
      country: "India",
      pincode: "244001",
      full: "Bhojpur Dharampur, Moradabad, Uttar Pradesh, India - 244001"
    },
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111977.10091873738!2d78.6800000!3d28.8386000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390afb8178d46fb9%3A0x867d30f36f6be98b!2sMoradabad%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
  },

  // Business Terms & Order Quantities (Flexible - No minimum order required)
  business: {
    moqStandard: "Any quantity (No minimum limit)",
    moqCustom: "Any quantity (No minimum limit)",
    orderPolicy: "No minimum quantity – users can order anything from single units to bulk supply",
    cellType: "Grade-A+ LiFePO4 (Lithium Iron Phosphate)",
    bmsOptions: "Smart BMS (with Bluetooth App & Active Balancing) and Standard Industrial BMS",
    enclosures: "Heavy-duty powder-coated sheet metal with water-resistant sealing and fire-protection construction"
  },

  // WhatsApp Helper function
  getWhatsAppUrl: function(customMessage) {
    const defaultMsg = `Hello MS Powertech, I am visiting your website ${this.domain} and would like to enquire about your lithium battery solutions.`;
    const message = customMessage || defaultMsg;
    return `https://wa.me/${this.contact.whatsapp}?text=${encodeURIComponent(message)}`;
  },

  // Open WhatsApp directly to the owner (handles pop-up blockers & mobile browsers)
  sendToWhatsApp: function(customMessage) {
    const url = this.getWhatsAppUrl(customMessage);
    try {
      const newWin = window.open(url, '_blank');
      if (!newWin || newWin.closed || typeof newWin.closed === 'undefined') {
        window.location.href = url;
      }
    } catch (e) {
      window.location.href = url;
    }
    return url;
  }
};

// Export to window for global access
window.SITE_CONFIG = SITE_CONFIG;
