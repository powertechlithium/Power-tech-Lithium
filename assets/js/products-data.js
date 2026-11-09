/**
 * MS POWERTECH – COMPLETE PRODUCTS DATABASE
 * Contains 3 Core Standard Production Models + On-Demand Custom Battery Manufacturing Range.
 * Based in Bhojpur Dharampur, Moradabad, Uttar Pradesh, India.
 */

const PRODUCTS_DATA = [
  // =========================================================================
  // CORE STANDARD PRODUCTION MODEL 1: 48V 20Ah
  // =========================================================================
  {
    id: "scooter-48v-20ah",
    category: "scooter",
    categoryName: "Core Standard Model",
    isCoreStandard: true,
    productionType: "standard",
    badgeText: "Core Standard Model",
    name: "MS Powertech 48V 20Ah LiFePO4 Battery Pack",
    shortTitle: "48V 20Ah E-Scooter Battery",
    tagline: "Core Standard Model – Compact, Lightweight & Long-Life LiFePO4 Power",
    voltage: "48V (Nominal 51.2V)",
    voltageNum: 48,
    capacity: "20Ah",
    capacityNum: 20,
    energy: "1,024 Wh (1.02 kWh)",
    chemistry: "LiFePO4 (Lithium Iron Phosphate)",
    cellType: "Grade-A+ BIS-Certified LiFePO4 Cylindrical / Prismatic Cells",
    bmsOptions: "Smart BMS (Bluetooth App) / Heavy-Duty Standard Industrial BMS",
    enclosure: "Powder-coated black cold-rolled steel chassis with signature green sealed top plate and top carry handle",
    connector: "Industrial high-current Anderson quick connector with silicone insulated heavy-strand cables",
    moq: "Any Quantity (No minimum limit)",
    application: "Electric Scooters, E-Bikes, Low-Speed EV 2-Wheelers, Campus Mobility",
    isRealPhoto: true,
    primaryImage: "assets/images/products/scooter-48v-20ah-front.png",
    gallery: [
      "assets/images/products/scooter-48v-20ah-front.png",
      "assets/images/products/scooter-48v-20ah-angle.png",
      "assets/images/products/scooter-48v-20ah-side.png",
      "assets/images/products/scooter-48v-20ah-views.png",
      "assets/images/products/scooter-48v-20ah-member.png",
      "assets/images/cells/cylindrical-lifepo4-cells.png"
    ],
    features: [
      "Core standard production model manufactured in our Moradabad facility with fast availability",
      "Grade-A+ BIS certified LiFePO4 cells matched for capacity and internal resistance (IR)",
      "High thermal stability LiFePO4 chemistry designed for high Indian summer ambient temperatures",
      "Robust sheet metal enclosure with protective green lid and ergonomic top carry handle",
      "Anderson quick connector for plug-and-play installation in standard electric scooters",
      "Smart BMS option with Bluetooth connectivity for smartphone cell voltage and temperature tracking",
      "Over 2,500+ deep discharge cycles with minimal capacity loss"
    ],
    specs: {
      "Production Classification": "Core Standard Model (Active Production)",
      "Nominal Voltage": "51.2 V (48V System)",
      "Rated Capacity": "20 Ah",
      "Energy Storage": "1,024 Wh (1.02 kWh)",
      "Cell Chemistry": "Lithium Iron Phosphate (LiFePO4)",
      "Cell Configuration": "16S LiFePO4",
      "Standard Charging Voltage": "58.4 V",
      "Discharge Cut-off Voltage": "40.0 V",
      "Max Continuous Discharge": "30A - 40A",
      "Peak Discharge Current": "60A (pulse)",
      "Operating Temperature (Charge)": "0°C to 45°C",
      "Operating Temperature (Discharge)": "-20°C to 60°C",
      "BMS Protections": "Overcharge, over-discharge, short-circuit, overcurrent & temperature cut-off",
      "Enclosure Material": "Heavy-duty sheet metal with anti-corrosion powder coat (Green lid / Black body)",
      "Output Terminals": "Anderson 50A Quick Plug + Heavy-Duty Charging Cable",
      "Order Quantity": "Any Quantity (Single units to bulk)"
    }
  },

  // =========================================================================
  // CORE STANDARD PRODUCTION MODEL 2: 51V 30Ah
  // =========================================================================
  {
    id: "scooter-51v-30ah",
    category: "scooter",
    categoryName: "Core Standard Model",
    isCoreStandard: true,
    productionType: "standard",
    badgeText: "Core Standard Model",
    name: "MS Powertech 51V 30Ah LiFePO4 Battery Pack",
    shortTitle: "51V 30Ah E-Scooter Battery",
    tagline: "Core Standard Model – High-Efficiency Two-Wheeler Power with Proven Reliability",
    voltage: "51.2V (Nominal 51V)",
    voltageNum: 51,
    capacity: "30Ah",
    capacityNum: 30,
    energy: "1,536 Wh (1.53 kWh)",
    chemistry: "LiFePO4 (Lithium Iron Phosphate)",
    cellType: "Grade-A+ BIS-Certified LiFePO4 Cells",
    bmsOptions: "Smart BMS (Bluetooth App & Active Balancing) / Standard Industrial BMS",
    enclosure: "Heavy-duty powder-coated sheet metal with green top plate, moisture-resistant gasket seal, and carry handle",
    connector: "Industrial high-current Anderson quick connector with high-temperature silicone lead",
    moq: "Any Quantity (No minimum limit)",
    application: "Electric Scooters, High-Torque E-Bikes, Delivery Fleet 2-Wheelers",
    isRealPhoto: true,
    primaryImage: "assets/images/products/scooter-51v-30ah-front.png",
    gallery: [
      "assets/images/products/scooter-51v-30ah-front.png",
      "assets/images/products/scooter-51v-30ah-angle.png",
      "assets/images/products/scooter-51v-30ah-side.png",
      "assets/images/products/scooter-51v-30ah-views.png",
      "assets/images/products/scooter-51v-30ah-mascot.png",
      "assets/images/cells/cylindrical-lifepo4-cells.png"
    ],
    features: [
      "Core standard production model optimized for popular 48V-51V Indian electric scooters",
      "Delivers consistent acceleration, high hill-climb torque, and reliable range",
      "Grade-A+ BIS-certified LiFePO4 cells for exceptional thermal stability and zero fire risk",
      "Smart BMS option with live smartphone Bluetooth telemetry for cell balancing and health metrics",
      "Vibration-tested internal frame engineered specifically for tough Indian road bumps",
      "Heavy-duty powder-coated green & black steel casing with sealed IP-rated cable glands",
      "Direct fit in standard under-seat trays and floorboard battery enclosures"
    ],
    specs: {
      "Production Classification": "Core Standard Model (Active Production)",
      "Nominal Voltage": "51.2 V",
      "Rated Capacity": "30 Ah",
      "Energy Storage": "1,536 Wh (1.53 kWh)",
      "Cell Configuration": "16S (Series) LiFePO4 configuration",
      "Cell Chemistry": "Lithium Iron Phosphate (LiFePO4)",
      "Standard Charging Voltage": "58.4 V",
      "Discharge Cut-off Voltage": "40.0 V",
      "Max Continuous Discharge": "35A - 50A",
      "Peak Discharge Current": "70A (pulse)",
      "Operating Temperature (Charge)": "0°C to 45°C",
      "Operating Temperature (Discharge)": "-20°C to 60°C",
      "BMS Type": "Smart BMS (Bluetooth) / Standard Industrial BMS",
      "Enclosure Finish": "Corrosion-resistant black & green powder coat",
      "Output Connectors": "Anderson Quick Connector + Dedicated Charging Port",
      "Order Quantity": "Any Quantity (Single units to bulk)"
    }
  },

  // =========================================================================
  // CORE STANDARD PRODUCTION MODEL 3: 60V 30Ah
  // =========================================================================
  {
    id: "scooter-60v-30ah",
    category: "scooter",
    categoryName: "Core Standard Model",
    isCoreStandard: true,
    productionType: "standard",
    badgeText: "Core Standard Model",
    name: "MS Powertech 60V 30Ah LiFePO4 Battery Pack",
    shortTitle: "60V 30Ah E-Scooter Battery",
    tagline: "Core Standard Model – Popular Indian Standard for Long-Range EV Two-Wheelers",
    voltage: "60V (Nominal 60.8V / 64V)",
    voltageNum: 60,
    capacity: "30Ah",
    capacityNum: 30,
    energy: "1,824 Wh - 1,920 Wh (1.82 - 1.92 kWh)",
    chemistry: "LiFePO4 (Lithium Iron Phosphate)",
    cellType: "Grade-A+ BIS-Certified LiFePO4 Cells",
    bmsOptions: "Smart BMS (Active Balancing & Bluetooth App) / Heavy-Duty Standard BMS",
    enclosure: "Signature safety orange top plate, rugged black steel casing, chrome folding carry handle, and dual heavy Anderson cables",
    connector: "Anderson 50A Quick Connector + IP-rated cable glands",
    moq: "Any Quantity (No minimum limit)",
    application: "High-Speed Electric Scooters, High-Torque E-Scooters, Commercial Delivery Fleets",
    isRealPhoto: true,
    primaryImage: "assets/images/products/scooter-60v-30ah-front.png",
    gallery: [
      "assets/images/products/scooter-60v-30ah-front.png",
      "assets/images/products/scooter-60v-30ah-angle.png",
      "assets/images/products/scooter-60v-30ah-side.png",
      "assets/images/products/scooter-60v-30ah-views.png",
      "assets/images/products/scooter-60v-30ah-member.png",
      "assets/images/products/scooter-60v-30ah-mascot.png"
    ],
    features: [
      "Core standard production model – our most widely deployed commercial 60V scooter pack",
      "Engineered for high daily mileage delivery fleets and high-speed two-wheelers",
      "LiFePO4 chemistry guarantees maximum thermal safety under sustained heavy throttle and summer heat",
      "Iconic industrial black and safety orange chassis with chrome folding top handle",
      "Smart BMS option provides live cell-level voltage monitoring, temperature alerts, and active balancing",
      "Reinforced mechanical build with fire-resistant partition materials and dampening cell brackets",
      "Over 2,500+ charge cycles for unbeatable cost-per-kilometer fleet economics"
    ],
    specs: {
      "Production Classification": "Core Standard Model (Active Production)",
      "Nominal Voltage": "60.8 V (60V System)",
      "Rated Capacity": "30 Ah",
      "Energy Storage": "1,824 Wh (1.82 kWh)",
      "Cell Chemistry": "LiFePO4 (Grade-A+)",
      "Cell Configuration": "19S / 20S LiFePO4",
      "Standard Charging Voltage": "69.3 V - 73.0 V",
      "Discharge Cut-off Voltage": "48.0 V",
      "Max Continuous Discharge": "40A - 50A",
      "Peak Discharge Current": "75A",
      "BMS Protections": "Overcharge, over-discharge, short-circuit, overcurrent & high-temp cut-off",
      "Enclosure Finish": "Safety orange lid with matte black steel body & chrome folding handle",
      "Output Connectors": "Heavy-Duty Anderson 50A Quick Connector",
      "Order Quantity": "Any Quantity (Single units to bulk)"
    }
  },

  // =========================================================================
  // MADE BY CUSTOM: BESPOKE LITHIUM BATTERY PACKS & OEM ENGINEERING
  // =========================================================================
  {
    id: "custom-battery-pack",
    category: "custom",
    categoryName: "Customized Battery Solutions",
    isCoreStandard: false,
    isCustomOrder: true,
    productionType: "custom",
    badgeText: "Made by Custom",
    name: "MS Powertech Custom LiFePO4 Battery Engineering & Supply",
    shortTitle: "Customized Lithium Battery Packs",
    tagline: "Made by Custom – Tailor-Made Voltage, Capacity, Dimensions & BMS for Any Application",
    voltage: "Custom (12V, 24V, 36V, 48V, 60V, 72V, 84V, 96V+)",
    voltageNum: 0,
    capacity: "Custom (10Ah to 300Ah+)",
    capacityNum: 0,
    energy: "Engineered to client requirements",
    chemistry: "LiFePO4 (Grade-A+ Cells)",
    cellType: "BIS-Certified Cylindrical (32140) or High-Capacity Prismatic (Highstar / EVE)",
    bmsOptions: "Smart BMS (JK / JBD / Daly with Bluetooth / CAN / RS485) or Standard Industrial BMS",
    enclosure: "Custom fabricated sheet metal with digital LED SOC display, customized mounting tabs, handles, and terminal posts",
    connector: "Anderson, Amphenol, M6/M8 brass studs, or customized vehicle connectors",
    moq: "Any Quantity (No minimum limit)",
    application: "Custom EV projects, E-Rickshaws, Solar Off-Grid, AGVs, Drones, Marine, Industrial Equipment",
    isRealPhoto: true,
    primaryImage: "assets/images/products/custom-12v-digital-meter.png",
    gallery: [
      "assets/images/products/custom-12v-digital-meter.png",
      "assets/images/products/custom-12v-digital-member.png",
      "assets/images/hero-mascot-banner.png",
      "assets/images/cells/highstar-prismatic-cells.png",
      "assets/images/cells/cylindrical-lifepo4-cells.png",
      "assets/images/bms/jk-smart-bms-active-balancer.jpg",
      "assets/images/products/industrial-custom-pack.jpg"
    ],
    features: [
      "All non-standard specifications are engineered and made to order in our Moradabad facility",
      "Custom physical dimensions to match existing vehicle battery trays or machinery voids",
      "Digital LED state-of-charge (SOC) and voltage display integrated directly into front panel",
      "Choice of Smart BMS with Bluetooth smartphone app or robust cost-effective Standard BMS",
      "Prismatic and cylindrical LiFePO4 cell options to match your energy density requirements",
      "100% cell capacity grading and internal resistance (IR) matching prior to assembly",
      "B2B private label, OEM, and custom bulk manufacturing available"
    ],
    specs: {
      "Production Classification": "Made by Custom / Built to Order",
      "Custom Voltage Range": "12V - 96V+",
      "Custom Capacity Range": "10Ah - 300Ah+",
      "Cell Types Available": "LiFePO4 Cylindrical (32140 15Ah) & Highstar Prismatic (100Ah, 200Ah)",
      "BMS Configurations": "Smart BMS (Bluetooth / CAN / RS485) or Standard Industrial BMS",
      "Display Option": "Integrated Front Digital LED Voltage & SOC Meter",
      "Enclosure Customization": "Laser-cut powder-coated sheet metal with custom mounting tabs & seals",
      "Order Quantity": "Any Quantity (Single units to bulk)",
      "Testing & Inspection": "100% cycle testing, IR testing, and BMS safety trigger verification"
    }
  },

  // =========================================================================
  // MADE BY CUSTOM: ELECTRIC RICKSHAW BATTERIES
  // =========================================================================
  {
    id: "rickshaw-48v-100ah",
    category: "rickshaw",
    categoryName: "Electric Rickshaw (Custom)",
    isCoreStandard: false,
    isCustomOrder: true,
    productionType: "custom",
    badgeText: "Made by Custom",
    name: "MS Powertech 48V 100Ah E-Rickshaw Battery Pack",
    shortTitle: "48V 100Ah E-Rickshaw Battery",
    tagline: "Made by Custom – The Commercial Workhorse for Full-Day 3-Wheeler Operations",
    voltage: "48V (Nominal 51.2V)",
    voltageNum: 48,
    capacity: "100Ah",
    capacityNum: 100,
    energy: "5,120 Wh (5.12 kWh)",
    chemistry: "LiFePO4 (Lithium Iron Phosphate)",
    cellType: "Grade-A+ Highstar / EVE 3.2V 100Ah Prismatic LiFePO4 Cells",
    bmsOptions: "Smart JK-BMS (Active Balancing, Bluetooth App, Digital Display) or Standard Industrial BMS",
    enclosure: "Industrial steel casing with digital LED battery SOC status display, dual side carry handles, and brass terminals",
    connector: "M8 Heavy Brass Terminal Posts with Protective Caps",
    moq: "Any Quantity (No minimum limit)",
    application: "Commercial Passenger E-Rickshaws (Mayuri, Saarthi, Atul, City Life, etc.) and Heavy Cargo Loaders",
    isRealPhoto: true,
    primaryImage: "assets/images/products/custom-12v-digital-meter.png",
    gallery: [
      "assets/images/products/custom-12v-digital-meter.png",
      "assets/images/cells/highstar-prismatic-cells.png",
      "assets/images/products/erickshaw-48v-100ah.jpg",
      "assets/images/bms/jk-smart-bms-active-balancer.jpg"
    ],
    features: [
      "Manufactured by custom order for e-rickshaw fleets and commercial operators",
      "High-capacity 5.12 kWh system engineered for full-day commercial taxi operations",
      "Built with certified Grade-A Highstar 3.2V 100Ah prismatic LiFePO4 cells",
      "Smart BMS with 1A-2A active cell balancing and smartphone app for real-time monitoring",
      "Clear front LED digital display screen showing accurate battery percentage and terminal voltage",
      "Eliminates distilled water topping, acid corrosion, and sulfur fumes entirely",
      "Strong starting torque for flyovers and rough road conditions"
    ],
    specs: {
      "Production Classification": "Made by Custom / Built to Order",
      "Nominal Voltage": "51.2 V",
      "Rated Capacity": "100 Ah",
      "Energy Storage": "5,120 Wh (5.12 kWh)",
      "Cell Type": "Highstar / EVE 100Ah Prismatic LiFePO4 (16S1P)",
      "Max Continuous Discharge": "80A - 100A",
      "Peak Discharge Current": "150A (pulse)",
      "Charging Current (Recommended)": "20A - 30A",
      "Display": "Digital LED SOC & Voltage Meter on front panel",
      "Terminals": "M8 Heavy Brass Terminal Posts",
      "Enclosure": "Powder coated heavy gauge industrial steel with carry handles",
      "Order Quantity": "Any Quantity (Single units to bulk)"
    }
  },
  {
    id: "rickshaw-48v-72ah",
    category: "rickshaw",
    categoryName: "Electric Rickshaw (Custom)",
    isCoreStandard: false,
    isCustomOrder: true,
    productionType: "custom",
    badgeText: "Made by Custom",
    name: "MS Powertech 48V 72Ah E-Rickshaw Battery Pack",
    shortTitle: "48V 72Ah E-Rickshaw Battery",
    tagline: "Made by Custom – Economical & Reliable LiFePO4 Power for Commercial 3-Wheelers",
    voltage: "48V (Nominal 51.2V)",
    voltageNum: 48,
    capacity: "72Ah",
    capacityNum: 72,
    energy: "3,686 Wh (3.68 kWh)",
    chemistry: "LiFePO4 (Lithium Iron Phosphate)",
    cellType: "Grade-A+ LiFePO4 Prismatic / Cylindrical Cells",
    bmsOptions: "Heavy-Duty Smart BMS / High-Amperage Standard BMS",
    enclosure: "Heavy gauge steel container with M8 brass terminal studs, lifting handles, and moisture barrier",
    connector: "Heavy-duty M8 screw terminals with insulated safety covers",
    moq: "Any Quantity (No minimum limit)",
    application: "Passenger E-Rickshaws, E-Loaders, Commercial Cargo 3-Wheelers",
    isRealPhoto: false,
    primaryImage: "assets/images/products/erickshaw-48v-100ah.jpg",
    gallery: [
      "assets/images/products/erickshaw-48v-100ah.jpg",
      "assets/images/products/custom-12v-digital-meter.png",
      "assets/images/cells/highstar-prismatic-cells.png"
    ],
    features: [
      "Custom manufactured to order for e-rickshaw retrofitters and fleet replacements",
      "Replaces heavy lead-acid battery banks with 70% lighter weight and zero maintenance",
      "Fast charging capability: charges fully in a fraction of lead-acid charge time",
      "Rugged suspension-shock-absorbing internal framing built for commercial e-rickshaws",
      "High continuous current output ensuring strong pick-up even when fully loaded"
    ],
    specs: {
      "Production Classification": "Made by Custom / Built to Order",
      "Nominal Voltage": "51.2 V",
      "Rated Capacity": "72 Ah",
      "Energy Storage": "3,686 Wh",
      "Cell Configuration": "16S LiFePO4",
      "Max Continuous Discharge": "60A - 80A",
      "Terminals": "M8 Heavy-Duty Brass Studs",
      "Enclosure": "Corrosion-resistant steel box with rubber feet & top handles",
      "Order Quantity": "Any Quantity (Single units to bulk)"
    }
  },
  {
    id: "rickshaw-48v-120ah",
    category: "rickshaw",
    categoryName: "Electric Rickshaw (Custom)",
    isCoreStandard: false,
    isCustomOrder: true,
    productionType: "custom",
    badgeText: "Made by Custom",
    name: "MS Powertech 48V 120Ah E-Rickshaw Battery Pack",
    shortTitle: "48V 120Ah High-Capacity Rickshaw Battery",
    tagline: "Made by Custom – Maximum Mileage & Heavy-Load Capacity for Multi-Shift Mobility",
    voltage: "48V (Nominal 51.2V)",
    voltageNum: 48,
    capacity: "120Ah",
    capacityNum: 120,
    energy: "6,144 Wh (6.14 kWh)",
    chemistry: "LiFePO4 (Lithium Iron Phosphate)",
    cellType: "Grade-A+ LiFePO4 Prismatic Cells",
    bmsOptions: "Smart BMS (Active Balancing & Telemetry) / Standard Heavy-Duty BMS",
    enclosure: "Reinforced steel chassis with dual handles and M8 brass terminals",
    connector: "M8 Heavy Brass Terminals",
    moq: "Any Quantity (No minimum limit)",
    application: "Commercial E-Rickshaws, Heavy-Duty Electric Cargo Delivery 3-Wheelers",
    isRealPhoto: false,
    primaryImage: "assets/images/products/erickshaw-48v-100ah.jpg",
    gallery: [
      "assets/images/products/erickshaw-48v-100ah.jpg",
      "assets/images/cells/highstar-prismatic-cells.png"
    ],
    features: [
      "Highest energy density configuration for multi-shift e-rickshaw fleets",
      "Custom manufactured with high-capacity Grade-A prismatic cells",
      "Drastically reduces operational cost per kilometer compared to traditional batteries",
      "Superior high-amperage continuous output without thermal throttling"
    ],
    specs: {
      "Production Classification": "Made by Custom / Built to Order",
      "Nominal Voltage": "51.2 V",
      "Rated Capacity": "120 Ah",
      "Energy Storage": "6,144 Wh",
      "Cell Configuration": "16S LiFePO4",
      "Max Continuous Discharge": "100A",
      "Peak Discharge": "160A",
      "Order Quantity": "Any Quantity (Single units to bulk)"
    }
  },

  // =========================================================================
  // MADE BY CUSTOM: HOME INVERTER & SOLAR LITHIUM BATTERIES
  // =========================================================================
  {
    id: "inverter-12v-100ah",
    category: "inverter",
    categoryName: "Home Inverter (Custom)",
    isCoreStandard: false,
    isCustomOrder: true,
    productionType: "custom",
    badgeText: "Made by Custom",
    name: "MS Powertech 12V 100Ah LiFePO4 Inverter Battery",
    shortTitle: "12V 100Ah Inverter Battery",
    tagline: "Made by Custom – Direct LiFePO4 Replacement for Bulky 12V Lead-Acid Inverter Batteries",
    voltage: "12V (Nominal 12.8V)",
    voltageNum: 12,
    capacity: "100Ah",
    capacityNum: 100,
    energy: "1,280 Wh (1.28 kWh)",
    chemistry: "LiFePO4 (Lithium Iron Phosphate)",
    cellType: "Grade-A+ 3.2V Highstar Prismatic LiFePO4 Cells (4S Configuration)",
    bmsOptions: "Smart BMS with Bluetooth / Standard Inverter-Grade BMS",
    enclosure: "Modern compact enclosure with digital LED voltage & capacity meter, heavy-duty screw terminals",
    connector: "High-grade M8 brass screw terminals (positive/negative)",
    moq: "Any Quantity (No minimum limit)",
    application: "Home Inverters, Solar Off-Grid Backup, Security Systems, Small Offices",
    isRealPhoto: true,
    primaryImage: "assets/images/products/custom-12v-digital-meter.png",
    gallery: [
      "assets/images/products/custom-12v-digital-meter.png",
      "assets/images/products/custom-12v-digital-member.png",
      "assets/images/cells/highstar-prismatic-cells.png"
    ],
    features: [
      "Custom manufactured in Moradabad to replace bulky lead-acid inverter batteries",
      "1/3rd the weight and 1/2 the size of cumbersome lead-acid tubular batteries",
      "Digital LED screen displaying live battery voltage (12.8V) and state-of-charge",
      "No acid fumes, no noxious gas venting, 100% safe for indoor home bedrooms and living rooms",
      "Direct drop-in compatibility with lithium-compatible 12V home inverters and solar charge controllers"
    ],
    specs: {
      "Production Classification": "Made by Custom / Built to Order",
      "Nominal Voltage": "12.8 V",
      "Rated Capacity": "100 Ah",
      "Energy Storage": "1,280 Wh",
      "Cell Configuration": "4S LiFePO4 Prismatic",
      "Charging Voltage Range": "14.2V - 14.6V",
      "Discharge Cut-off Voltage": "10.0 V",
      "Max Continuous Discharge": "60A - 100A",
      "Display": "Digital LED Voltmeter & SOC Indicator",
      "Order Quantity": "Any Quantity (Single units to bulk)"
    }
  },
  {
    id: "inverter-12v-200ah",
    category: "inverter",
    categoryName: "Home Inverter (Custom)",
    isCoreStandard: false,
    isCustomOrder: true,
    productionType: "custom",
    badgeText: "Made by Custom",
    name: "MS Powertech 12V 200Ah LiFePO4 Inverter Battery",
    shortTitle: "12V 200Ah Inverter Battery",
    tagline: "Made by Custom – High-Capacity 2.56 kWh Backup for Extended Home Power Cuts",
    voltage: "12V (Nominal 12.8V)",
    voltageNum: 12,
    capacity: "200Ah",
    capacityNum: 200,
    energy: "2,560 Wh (2.56 kWh)",
    chemistry: "LiFePO4 (Lithium Iron Phosphate)",
    cellType: "Grade-A+ Prismatic LiFePO4 Cells",
    bmsOptions: "Smart BMS (Active Balancing & Bluetooth) / Standard BMS",
    enclosure: "Industrial floor-standing / rack-compatible sheet metal enclosure with digital display",
    connector: "Heavy-duty M8 brass terminal studs",
    moq: "Any Quantity (No minimum limit)",
    application: "Homes, Clinics, Shops, Inverter & Solar Backup Systems",
    isRealPhoto: false,
    primaryImage: "assets/images/products/custom-12v-digital-meter.png",
    gallery: [
      "assets/images/products/custom-12v-digital-meter.png",
      "assets/images/cells/highstar-prismatic-cells.png"
    ],
    features: [
      "Custom built to order for extended power cut backup and solar PCUs",
      "Powers fans, LED lights, TVs, refrigerators, and laptops seamlessly during extended outages",
      "Fast charging from grid or solar power: ready for the next blackout in hours",
      "Built-in Smart BMS prevents overcharging, deep discharge, and cell thermal stress"
    ],
    specs: {
      "Production Classification": "Made by Custom / Built to Order",
      "Nominal Voltage": "12.8 V",
      "Rated Capacity": "200 Ah",
      "Energy Storage": "2,560 Wh",
      "Cell Configuration": "4S LiFePO4",
      "Max Continuous Discharge": "100A - 150A",
      "Order Quantity": "Any Quantity (Single units to bulk)"
    }
  },
  {
    id: "inverter-24v-100ah",
    category: "inverter",
    categoryName: "Home Inverter (Custom)",
    isCoreStandard: false,
    isCustomOrder: true,
    productionType: "custom",
    badgeText: "Made by Custom",
    name: "MS Powertech 24V 100Ah LiFePO4 Battery Pack",
    shortTitle: "24V 100Ah Inverter Battery",
    tagline: "Made by Custom – Efficient 24V Power Storage for Dual-Battery Inverter Systems",
    voltage: "24V (Nominal 25.6V)",
    voltageNum: 24,
    capacity: "100Ah",
    capacityNum: 100,
    energy: "2,560 Wh (2.56 kWh)",
    chemistry: "LiFePO4",
    cellType: "Grade-A+ LiFePO4 Cells (8S Configuration)",
    bmsOptions: "Smart BMS / Standard Inverter BMS",
    enclosure: "Powder-coated metal cabinet with LED meter and safety terminals",
    connector: "M8 heavy-duty brass terminals",
    moq: "Any Quantity (No minimum limit)",
    application: "24V Home Inverters, Solar Hybrid Inverters, Commercial Backup",
    isRealPhoto: false,
    primaryImage: "assets/images/products/custom-12v-digital-meter.png",
    gallery: [
      "assets/images/products/custom-12v-digital-meter.png",
      "assets/images/cells/highstar-prismatic-cells.png"
    ],
    features: [
      "Custom engineered to replace two bulky 12V lead-acid batteries with one compact lithium unit",
      "Integrated cell balancing ensures even charge distribution across all 8 series cells",
      "Clean, silent, indoor-safe power storage with fire-retardant internal construction"
    ],
    specs: {
      "Production Classification": "Made by Custom / Built to Order",
      "Nominal Voltage": "25.6 V",
      "Rated Capacity": "100 Ah",
      "Energy Storage": "2,560 Wh",
      "Cell Configuration": "8S LiFePO4",
      "Order Quantity": "Any Quantity (Single units to bulk)"
    }
  },
  {
    id: "inverter-48v-100ah",
    category: "inverter",
    categoryName: "Home Inverter (Custom)",
    isCoreStandard: false,
    isCustomOrder: true,
    productionType: "custom",
    badgeText: "Made by Custom",
    name: "MS Powertech 48V 100Ah LiFePO4 Solar & Inverter Battery",
    shortTitle: "48V 100Ah Solar / Inverter Battery",
    tagline: "Made by Custom – Standard 48V 5.12 kWh Architecture for Modern Solar Hybrid Systems",
    voltage: "48V (Nominal 51.2V)",
    voltageNum: 48,
    capacity: "100Ah",
    capacityNum: 100,
    energy: "5,120 Wh (5.12 kWh)",
    chemistry: "LiFePO4",
    cellType: "Grade-A+ 100Ah Prismatic LiFePO4 Cells",
    bmsOptions: "Smart BMS with Bluetooth / RS485 / CAN communication options",
    enclosure: "Wall-mount and floor-standing sheet metal enclosure with digital status display",
    connector: "Industrial terminal posts with safety insulation",
    moq: "Any Quantity (No minimum limit)",
    application: "48V Solar Hybrid Inverters, Telecom Tower Backup, Residential Energy Storage",
    isRealPhoto: false,
    primaryImage: "assets/images/products/custom-12v-digital-meter.png",
    gallery: [
      "assets/images/products/custom-12v-digital-meter.png",
      "assets/images/cells/highstar-prismatic-cells.png"
    ],
    features: [
      "Custom engineered 48V standard compatible with leading solar hybrid inverters",
      "Wall-mountable space-saving design keeps floor clear and clutter-free",
      "Advanced BMS communication protocols (CAN / RS485 where requested) for smart inverter handshake"
    ],
    specs: {
      "Production Classification": "Made by Custom / Built to Order",
      "Nominal Voltage": "51.2 V",
      "Rated Capacity": "100 Ah",
      "Energy Storage": "5,120 Wh",
      "Cell Configuration": "16S LiFePO4",
      "Order Quantity": "Any Quantity (Single units to bulk)"
    }
  },

  // =========================================================================
  // MADE BY CUSTOM: EXTENDED CAPACITY & HIGH-VOLTAGE SCOOTER PACKS
  // =========================================================================
  {
    id: "scooter-60v-45ah",
    category: "scooter",
    categoryName: "Electric Scooter (Custom)",
    isCoreStandard: false,
    isCustomOrder: true,
    productionType: "custom",
    badgeText: "Made by Custom",
    name: "MS Powertech 60V 45Ah LiFePO4 Battery Pack",
    shortTitle: "60V 45Ah High-Capacity Scooter Battery",
    tagline: "Made by Custom – Extended Range Powerhouse for Heavy Commercial Delivery Fleets",
    voltage: "60V",
    voltageNum: 60,
    capacity: "45Ah",
    capacityNum: 45,
    energy: "2,700 Wh (2.7 kWh)",
    chemistry: "LiFePO4 (Lithium Iron Phosphate)",
    cellType: "Grade-A+ High-Density LiFePO4 Cells",
    bmsOptions: "Smart BMS with Mobile Bluetooth Monitoring / Standard BMS",
    enclosure: "Heavy-duty powder coated metallic chassis with sealed orange top plate and top cable routing",
    connector: "High current Anderson connector and separate high-amperage charging lead",
    moq: "Any Quantity (No minimum limit)",
    application: "Heavy-Duty Electric Scooters, Commercial Delivery Fleets, Multi-Passenger 2-Wheelers",
    isRealPhoto: true,
    primaryImage: "assets/images/products/scooter-60v-45ah-front.jpg",
    gallery: [
      "assets/images/products/scooter-60v-45ah-front.jpg",
      "assets/images/products/scooter-60v-45ah-angle.jpg",
      "assets/images/products/scooter-60v-30ah-front.png"
    ],
    features: [
      "Custom manufactured for commercial delivery operators needing extra range",
      "Massive 45Ah capacity delivering 120km+ real-world distance per charge",
      "A+ grade cells matched by internal resistance and capacity grading",
      "Enhanced thermal dissipation design with fire-resistant partition materials"
    ],
    specs: {
      "Production Classification": "Made by Custom / Built to Order",
      "Nominal Voltage": "60.0 V",
      "Rated Capacity": "45 Ah",
      "Energy Storage": "2,700 Wh",
      "Cell Configuration": "19S / 20S LiFePO4",
      "Max Continuous Discharge": "50A",
      "Peak Discharge": "80A",
      "Order Quantity": "Any Quantity (Single units to bulk)"
    }
  },
  {
    id: "scooter-72v-45ah",
    category: "scooter",
    categoryName: "Electric Scooter (Custom)",
    isCoreStandard: false,
    isCustomOrder: true,
    productionType: "custom",
    badgeText: "Made by Custom",
    name: "MS Powertech 72V 45Ah LiFePO4 Battery Pack",
    shortTitle: "72V 45Ah High-Power Scooter Battery",
    tagline: "Made by Custom – High-Voltage, High-Speed Power Solution for Next-Gen Electric 2-Wheelers",
    voltage: "72V",
    voltageNum: 72,
    capacity: "45Ah",
    capacityNum: 45,
    energy: "3,240 Wh (3.24 kWh)",
    chemistry: "LiFePO4 (Lithium Iron Phosphate)",
    cellType: "Grade-A+ High-Discharge LiFePO4 Cells",
    bmsOptions: "Smart BMS (Bluetooth Connectivity & Active Balancing) / Standard BMS",
    enclosure: "Reinforced steel enclosure with anti-vibration mountings and ergonomic carry handle",
    connector: "Anderson heavy-duty power connector",
    moq: "Any Quantity (No minimum limit)",
    application: "High-Speed Electric Scooters, Electric Motorcycles, High-Load Delivery Vehicles",
    isRealPhoto: false,
    primaryImage: "assets/images/products/scooter-60v-30ah-front.png",
    gallery: [
      "assets/images/products/scooter-60v-30ah-front.png",
      "assets/images/cells/cylindrical-lifepo4-cells.png"
    ],
    features: [
      "Custom high-voltage architecture for superior acceleration, hill climb torque, and top speed",
      "LiFePO4 chemistry guarantees maximum thermal safety under sustained heavy loads",
      "Smart BMS prevents cell imbalance and protects against extreme operating conditions",
      "Vibration-tested internal structure designed for rough Indian road conditions"
    ],
    specs: {
      "Production Classification": "Made by Custom / Built to Order",
      "Nominal Voltage": "72.0 V (76.8V nominal depending on cell count)",
      "Rated Capacity": "45 Ah",
      "Energy Storage": "3,240 Wh",
      "Max Continuous Discharge": "60A",
      "Peak Discharge": "100A",
      "Order Quantity": "Any Quantity (Single units to bulk)"
    }
  }
];

// Helper functions for querying
function getProductById(id) {
  return PRODUCTS_DATA.find(p => p.id === id);
}

function getProductsByCategory(category) {
  if (!category || category === 'all') return PRODUCTS_DATA;
  if (category === 'standard') return PRODUCTS_DATA.filter(p => p.isCoreStandard);
  if (category === 'custom-made') return PRODUCTS_DATA.filter(p => !p.isCoreStandard);
  return PRODUCTS_DATA.filter(p => p.category === category);
}

function getCoreStandardProducts() {
  return PRODUCTS_DATA.filter(p => p.isCoreStandard);
}

// Make globally available
window.PRODUCTS_DATA = PRODUCTS_DATA;
window.getProductById = getProductById;
window.getProductsByCategory = getProductsByCategory;
window.getCoreStandardProducts = getCoreStandardProducts;
