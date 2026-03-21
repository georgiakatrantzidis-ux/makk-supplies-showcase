import productCopperWire from "@/assets/product-copper-wire.jpg";
import productGenerator from "@/assets/product-generator.jpg";
import productLedPanel from "@/assets/product-led-panel.jpg";
import productBreakerPanel from "@/assets/product-breaker-panel.jpg";
import productConduit from "@/assets/product-conduit.jpg";
import productFireAlarm from "@/assets/product-fire-alarm.jpg";
import productHeatingVentilation from "@/assets/product-heating-ventilation.jpg";
import productElectricalBox from "@/assets/product-electrical-box.jpg";
import productEmergencyLighting from "@/assets/product-emergency-lighting.jpg";
import productConnectorsFittings from "@/assets/product-connectors-fittings.jpg";
import productEvCharger from "@/assets/product-ev-charger.jpg";
import productMultimeter from "@/assets/product-multimeter.png";
import productTransformer from "@/assets/product-transformer.png";
import productSolarInverter from "@/assets/product-solar-inverter.png";
import productSwitchgear from "@/assets/product-switchgear.png";
import productControlPanel from "@/assets/product-control-panel.png";
import productCableDrum from "@/assets/product-cable-drum.png";
import productDieselGenerator from "@/assets/product-diesel-generator.png";

export type Product = {
  id: string;
  name: string;
  price: number;
  sku: string;
  category: string;
  group: string;
  description: string;
  image: string;
};

export type ProductGroup = {
  group: string;
  category: string;
  image: string;
  priceRange: string;
  variantCount: number;
  products: Product[];
};

export const categories = [
  "All",
  "Wire & Cable",
  "Distribution Equipment",
  "Fire Alarm",
  "Heating & Ventilation",
  "Electrical Boxes",
  "Lighting",
  "Emergency Lighting",
  "Conduits",
  "Connectors & Fittings",
  "EV Chargers",
  "Generators",
  "Tools & Testing Equipment",
];

function formatPrice(n: number): string {
  return "$" + n.toLocaleString("en-CA");
}

export function getProductGroups(filterCategory?: string, search?: string): ProductGroup[] {
  let filtered = products;

  if (filterCategory && filterCategory !== "All") {
    filtered = filtered.filter((p) => p.category === filterCategory);
  }
  if (search) {
    const q = search.toLowerCase();
    filtered = filtered.filter(
      (p) => p.name.toLowerCase().includes(q) || p.sku.toLowerCase().includes(q) || p.group.toLowerCase().includes(q)
    );
  }

  const map = new Map<string, Product[]>();
  for (const p of filtered) {
    const key = p.group;
    if (!map.has(key)) map.set(key, []);
    map.get(key)!.push(p);
  }

  const groups: ProductGroup[] = [];
  for (const [group, items] of map) {
    const prices = items.map((p) => p.price).sort((a, b) => a - b);
    const priceRange =
      prices.length === 1
        ? formatPrice(prices[0])
        : `${formatPrice(prices[0])} – ${formatPrice(prices[prices.length - 1])}`;

    groups.push({
      group,
      category: items[0].category,
      image: items[0].image,
      priceRange,
      variantCount: items.length,
      products: items,
    });
  }

  return groups;
}

export function getGroupBySlug(slug: string): ProductGroup | undefined {
  const groupName = products.find((p) => slugify(p.group) === slug)?.group;
  if (!groupName) return undefined;
  const items = products.filter((p) => p.group === groupName);
  const prices = items.map((p) => p.price).sort((a, b) => a - b);
  const priceRange =
    prices.length === 1
      ? formatPrice(prices[0])
      : `${formatPrice(prices[0])} – ${formatPrice(prices[prices.length - 1])}`;
  return { group: groupName, category: items[0].category, image: items[0].image, priceRange, variantCount: items.length, products: items };
}

export function slugify(str: string): string {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export const products: Product[] = [
  // Wire & Cable
  { id: "1", name: "NMD90 14/2 — Bulk Box (10 rolls, 75m ea)", price: 4200, sku: "CW-NMD90-14-2", category: "Wire & Cable", group: "NMD90 Copper Wire", description: "14/2 NMD90 non-metallic sheathed cable with ground. 75m rolls × 10. CSA certified.", image: productCopperWire },
  { id: "2", name: "NMD90 12/2 — Bulk Box (10 rolls, 75m ea)", price: 5400, sku: "CW-NMD90-12-2", category: "Wire & Cable", group: "NMD90 Copper Wire", description: "12/2 NMD90 non-metallic sheathed cable. 75m rolls × 10. CSA certified for residential and commercial.", image: productCopperWire },
  { id: "3", name: "NMD90 14/3 — Bulk Box (10 rolls, 75m ea)", price: 5800, sku: "CW-NMD90-14-3", category: "Wire & Cable", group: "NMD90 Copper Wire", description: "14/3 NMD90 with ground, 75m rolls × 10. For 3-way switches and multi-circuit runs.", image: productCopperWire },

  { id: "4", name: "Bare Copper 4/0 AWG (5,000 ft reel)", price: 24500, sku: "CW-4-0-BARE", category: "Wire & Cable", group: "Bare Copper Grounding Wire", description: "4/0 AWG bare copper on wooden reel. For grounding arrays and heavy industrial use.", image: productCopperWire },
  { id: "5", name: "Bare Copper #6 AWG Solid (1,500 ft reel)", price: 6750, sku: "CW-BARE-6", category: "Wire & Cable", group: "Bare Copper Grounding Wire", description: "#6 AWG solid bare copper. Bonding, grounding, lightning protection systems.", image: productCopperWire },

  { id: "6", name: "TECK90 Armoured Cable 3C #6 AWG (300m)", price: 11800, sku: "CW-TECK90-3C6", category: "Wire & Cable", group: "Armoured Cable", description: "3-conductor #6 AWG TECK90 armoured cable. Oil and sunlight resistant. CSA approved.", image: productCopperWire },
  { id: "7", name: "AC90 12/2 Armoured Cable (150m coil)", price: 3600, sku: "CW-AC90-12-2", category: "Wire & Cable", group: "Armoured Cable", description: "12/2 AC90 steel armoured cable, 150m. For commercial and industrial branch circuits.", image: productCopperWire },

  { id: "8", name: "RW90 #10 AWG Stranded XLPE (1,000m drum)", price: 8900, sku: "CW-RW90-10", category: "Wire & Cable", group: "RW90 Building Wire", description: "#10 AWG RW90 single conductor, XLPE insulation. For wet and dry locations.", image: productCopperWire },

  // Distribution Equipment
  { id: "9", name: "200A Main Breaker Panel — 42 Circuit", price: 8500, sku: "DP-MB-200A-42", category: "Distribution Equipment", group: "Main Breaker Panels", description: "200A main breaker loadcentre, 42 spaces. Copper bus. CSA approved. With cover and trim.", image: productBreakerPanel },
  { id: "10", name: "400A Main Lug Panel — 84 Circuit", price: 16200, sku: "DP-ML-400A-84", category: "Distribution Equipment", group: "Main Breaker Panels", description: "400A main lug distribution panel. 84 spaces. 3-phase 120/208V. For commercial buildings.", image: productBreakerPanel },
  { id: "11", name: "100A Sub Panel — 24 Circuit", price: 3200, sku: "DP-SP-100A-24", category: "Distribution Equipment", group: "Main Breaker Panels", description: "100A sub panel, 24 spaces. Main lug. Flush or surface mount. CSA listed.", image: productBreakerPanel },

  { id: "12", name: "Automatic Transfer Switch — 200A", price: 12500, sku: "DP-ATS-200A", category: "Distribution Equipment", group: "Transfer Switches", description: "200A automatic transfer switch. Open or closed transition. For generator integration.", image: productBreakerPanel },

  { id: "13", name: "3-Phase Motor Control Centre — 6 Bucket", price: 38000, sku: "DP-MCC-6B", category: "Distribution Equipment", group: "Motor Control Centres", description: "6-bucket motor control centre. 600V rated. FVNR starters. For industrial motor loads.", image: productBreakerPanel },

  // Fire Alarm
  { id: "14", name: "Addressable Fire Alarm Panel — 4 Loop", price: 6800, sku: "FA-PANEL-4L", category: "Fire Alarm", group: "Fire Alarm Panels", description: "4-loop addressable fire alarm control panel. 500 devices per loop. LCD display. ULC listed.", image: productFireAlarm },

  { id: "15", name: "Photoelectric Smoke Detector — Lot of 50", price: 4200, sku: "FA-SMOKE-50", category: "Fire Alarm", group: "Smoke & Heat Detectors", description: "Addressable photoelectric smoke detectors. Low-profile design. ULC/UL listed. Box of 50.", image: productFireAlarm },
  { id: "16", name: "Heat Detector — Rate-of-Rise (Lot of 40)", price: 3600, sku: "FA-HEAT-40", category: "Fire Alarm", group: "Smoke & Heat Detectors", description: "Rate-of-rise and fixed temperature heat detectors. 135°F setting. ULC listed. 40 units.", image: productFireAlarm },

  { id: "17", name: "Fire Alarm Pull Station — Lot of 24", price: 2400, sku: "FA-PULL-24", category: "Fire Alarm", group: "Pull Stations & Notification", description: "Single-action addressable pull stations. Die-cast red housing. ADA compliant. 24 units.", image: productFireAlarm },
  { id: "18", name: "Horn/Strobe Notification — Lot of 30", price: 5100, sku: "FA-HSTROBE-30", category: "Fire Alarm", group: "Pull Stations & Notification", description: "Wall-mount horn/strobe notification appliances. Candela selectable. Red housing. 30 units.", image: productFireAlarm },

  // Heating & Ventilation
  { id: "19", name: "Commercial Baseboard Heater 2000W — Lot of 12", price: 3800, sku: "HV-BASE-2000", category: "Heating & Ventilation", group: "Baseboard & Unit Heaters", description: "2000W commercial baseboard heaters. 240V. Built-in thermostat. CSA approved. 12 units.", image: productHeatingVentilation },
  { id: "20", name: "Unit Heater 30kW — Industrial Ceiling Mount", price: 4500, sku: "HV-UNIT-30KW", category: "Heating & Ventilation", group: "Baseboard & Unit Heaters", description: "30kW industrial unit heater. 600V 3-phase. Ceiling mount with louvers. For warehouses.", image: productHeatingVentilation },

  { id: "21", name: "Inline Duct Fan 8\" — 750 CFM (6 units)", price: 2400, sku: "HV-DUCT-8", category: "Heating & Ventilation", group: "Ventilation Fans", description: "8\" inline duct fan, 750 CFM. Variable speed. For commercial HVAC systems. 6 units.", image: productHeatingVentilation },
  { id: "22", name: "Exhaust Fan — Roof Mount 1500 CFM", price: 3200, sku: "HV-EXHAUST-RF", category: "Heating & Ventilation", group: "Ventilation Fans", description: "Roof-mounted exhaust fan, 1500 CFM. Aluminum construction. Belt drive. For commercial buildings.", image: productHeatingVentilation },

  // Electrical Boxes
  { id: "23", name: "4\" Square Junction Box — Lot of 100", price: 1800, sku: "EB-4SQ-100", category: "Electrical Boxes", group: "Junction Boxes", description: "4\" square galvanized steel junction boxes. 1-1/2\" deep. Multiple knockouts. CSA listed. 100 pcs.", image: productElectricalBox },
  { id: "24", name: "Weatherproof Outlet Box — Lot of 50", price: 1400, sku: "EB-WP-50", category: "Electrical Boxes", group: "Junction Boxes", description: "Die-cast aluminum weatherproof outlet boxes. 1/2\" hubs. With gasket covers. 50 units.", image: productElectricalBox },

  { id: "25", name: "NEMA 4X Stainless Enclosure — 24×24×8", price: 2800, sku: "EB-N4X-2424", category: "Electrical Boxes", group: "Enclosures", description: "NEMA 4X stainless steel enclosure, 24\"×24\"×8\". Hinged cover. For corrosive environments.", image: productElectricalBox },
  { id: "26", name: "Floor Box Kit — Flush Mount (20 units)", price: 3600, sku: "EB-FLOOR-20", category: "Electrical Boxes", group: "Enclosures", description: "Flush-mount floor boxes with brass covers. For office and commercial. Duplex and data. 20 units.", image: productElectricalBox },

  // Lighting
  { id: "27", name: "LED Slim Panel 2×4 ft 50W — Lot of 20", price: 3800, sku: "LT-LED-2X4-50W", category: "Lighting", group: "LED Panels & Troffers", description: "50W LED flat panel, 5,500 lumens, 4000K. Drop ceiling compatible. DLC listed. Box of 20.", image: productLedPanel },
  { id: "28", name: "LED Slim Panel 2×2 ft 40W — Lot of 30", price: 4500, sku: "LT-LED-2X2-40W", category: "Lighting", group: "LED Panels & Troffers", description: "40W LED flat panel, 4,400 lumens, 4000K. Edge-lit design. DLC listed. Box of 30.", image: productLedPanel },
  { id: "29", name: "LED Troffer Retrofit Kit 2×4 ft — Lot of 20", price: 3200, sku: "LT-TRF-2X4", category: "Lighting", group: "LED Panels & Troffers", description: "50W LED troffer retrofit, magnetic mount. 5,800 lumens. Converts existing fluorescent fixtures.", image: productLedPanel },

  { id: "30", name: "LED High Bay 200W — Lot of 10", price: 4200, sku: "LT-HB-200W", category: "Lighting", group: "High Bay & Outdoor", description: "200W LED high bay, 28,000 lumens. 5000K daylight. For warehouses and shops. 10 units.", image: productLedPanel },
  { id: "31", name: "LED Parking Lot Light 300W — Box of 6", price: 5400, sku: "LT-PL-300W", category: "Lighting", group: "High Bay & Outdoor", description: "300W LED shoebox fixture, 42,000 lumens. Dusk-to-dawn photocell. IP65 rated.", image: productLedPanel },

  // Emergency Lighting
  { id: "32", name: "Emergency Light Combo Unit — Lot of 24", price: 2800, sku: "EL-COMBO-24", category: "Emergency Lighting", group: "Emergency Light Units", description: "LED emergency light with exit sign combo. 90-minute battery backup. ULC listed. 24 units.", image: productEmergencyLighting },
  { id: "33", name: "Steel Emergency Light — Dual Head (Lot of 20)", price: 3400, sku: "EL-DUAL-20", category: "Emergency Lighting", group: "Emergency Light Units", description: "Industrial steel body, dual adjustable LED heads. 6V battery. 90-min runtime. 20 units.", image: productEmergencyLighting },

  { id: "34", name: "Running Man Exit Sign — LED (Lot of 30)", price: 2100, sku: "EL-EXIT-30", category: "Emergency Lighting", group: "Exit Signs & Remote Heads", description: "Green running man LED exit signs. Universal mount. Battery backup. CSA approved. 30 units.", image: productEmergencyLighting },
  { id: "35", name: "Remote Head Kit — Single (Lot of 40)", price: 1900, sku: "EL-REMOTE-40", category: "Emergency Lighting", group: "Exit Signs & Remote Heads", description: "Single remote emergency lamp heads. 5.4W LED. For use with central battery systems. 40 units.", image: productEmergencyLighting },

  // Conduits
  { id: "36", name: "EMT Conduit 1\" × 10 ft — Bundle of 50", price: 2800, sku: "CF-EMT-1-50", category: "Conduits", group: "EMT Conduit", description: "1\" EMT conduit, 10ft sticks. Galvanized steel. UL listed. Bundle of 50 sticks.", image: productConduit },

  { id: "37", name: "Rigid Steel Conduit 2\" × 10 ft — Bundle of 25", price: 4500, sku: "CF-RGD-2-25", category: "Conduits", group: "Rigid & PVC Conduit", description: "2\" rigid galvanized steel conduit. For exposed and hazardous locations. 25 sticks.", image: productConduit },
  { id: "38", name: "PVC Conduit DB2 2\" — Bundle of 40", price: 1800, sku: "CF-PVC-2-40", category: "Conduits", group: "Rigid & PVC Conduit", description: "2\" Schedule 40 PVC conduit, 10ft sticks. For underground and direct burial. 40 sticks.", image: productConduit },

  { id: "39", name: "Cable Tray — 12in Wide × 10 ft (10 sections)", price: 3600, sku: "CF-TRAY-12-10", category: "Conduits", group: "Cable Trays", description: "12\" wide ventilated cable tray, galvanized. 10ft sections × 10. With splice plates.", image: productConduit },
  { id: "40", name: "Liquid-Tight Flex Conduit 3/4\" (500 ft)", price: 2400, sku: "CF-LTFX-34", category: "Conduits", group: "Cable Trays", description: "3/4\" liquid-tight flexible metallic conduit. 500ft reel. For motors and HVAC connections.", image: productConduit },

  // Connectors & Fittings
  { id: "41", name: "EMT Connector & Coupling Kit — 1\" (200 pcs)", price: 1600, sku: "CF-KIT-EMT-1", category: "Connectors & Fittings", group: "EMT Connectors & Couplings", description: "100 compression connectors + 100 couplings for 1\" EMT. Steel, zinc-plated. CSA listed.", image: productConnectorsFittings },
  { id: "42", name: "Set Screw Connector — 3/4\" EMT (Lot of 200)", price: 980, sku: "CF-SS-34-200", category: "Connectors & Fittings", group: "EMT Connectors & Couplings", description: "3/4\" EMT set screw connectors. Die-cast zinc. CSA and UL listed. 200 pieces.", image: productConnectorsFittings },

  { id: "43", name: "Rigid Conduit Coupling — 2\" (Lot of 50)", price: 1200, sku: "CF-RGD-CPL-50", category: "Connectors & Fittings", group: "Rigid Couplings & Glands", description: "2\" rigid steel conduit couplings. Threaded. Hot-dip galvanized. 50 pieces.", image: productConnectorsFittings },
  { id: "44", name: "Cable Gland Kit — Assorted (100 pcs)", price: 2200, sku: "CF-GLAND-100", category: "Connectors & Fittings", group: "Rigid Couplings & Glands", description: "Assorted nickel-plated brass cable glands. PG7 to PG21. IP68 rated. 100 pieces.", image: productConnectorsFittings },

  // EV Chargers
  { id: "45", name: "Level 2 EV Charger — 48A Hardwired", price: 3200, sku: "EV-L2-48A", category: "EV Chargers", group: "Level 2 EV Chargers", description: "48A Level 2 EV charger, 240V hardwired. NEMA 4 rated. WiFi enabled. J1772 connector.", image: productEvCharger },
  { id: "46", name: "EV Charger Pedestal Mount — Lot of 6", price: 2400, sku: "EV-PED-6", category: "EV Chargers", group: "Level 2 EV Chargers", description: "Heavy-duty aluminum pedestal mounts for Level 2 chargers. Concrete anchor kit included. 6 units.", image: productEvCharger },

  { id: "47", name: "Commercial EV Charging Station — Dual Port", price: 12500, sku: "EV-COM-DUAL", category: "EV Chargers", group: "Commercial & DC Fast Chargers", description: "Dual-port commercial EV charger. 80A total. RFID and payment ready. OCPP compliant.", image: productEvCharger },
  { id: "48", name: "DC Fast Charger — 60kW CCS/CHAdeMO", price: 42000, sku: "EV-DC-60KW", category: "EV Chargers", group: "Commercial & DC Fast Chargers", description: "60kW DC fast charger. CCS and CHAdeMO connectors. For commercial and fleet charging.", image: productEvCharger },

  // Generators
  { id: "49", name: "Diesel Generator 50kW — Enclosed Silent", price: 18500, sku: "GN-DSL-50KW", category: "Generators", group: "Diesel Generators", description: "50kW prime-rated diesel generator. Sound-attenuated enclosure. Auto transfer switch ready.", image: productGenerator },
  { id: "50", name: "Diesel Generator 100kW — Industrial Standby", price: 32000, sku: "GN-DSL-100KW", category: "Generators", group: "Diesel Generators", description: "100kW standby diesel generator. EPA Tier 4 compliant. 500L fuel tank. Digital controller.", image: productGenerator },
  { id: "51", name: "Diesel Generator 200kW — Prime Power", price: 52000, sku: "GN-DSL-200KW", category: "Generators", group: "Diesel Generators", description: "200kW prime-rated diesel generator. Radiator cooled. For continuous duty applications.", image: productGenerator },

  { id: "52", name: "Natural Gas Generator 30kW — Standby", price: 14200, sku: "GN-NG-30KW", category: "Generators", group: "Natural Gas Generators", description: "30kW natural gas standby generator. Automatic transfer. Weatherproof enclosure.", image: productGenerator },

  // Tools & Testing Equipment
  { id: "53", name: "Digital Multimeter — True-RMS AC/DC", price: 29900, sku: "TL-MM-PRO", category: "Tools & Testing Equipment", group: "Digital Multimeters", description: "Professional True-RMS digital multimeter. Industrial tier with auto-ranging, backlit display, and premium test leads.", image: productMultimeter },

  // New High-Ticket Additions
  { id: "54", name: "Industrial Power Transformer 500kVA", price: 18500, sku: "TX-500KVA", category: "Distribution Equipment", group: "Main Breaker Panels", description: "500kVA industrial power transformer for heavy-duty commercial voltage regulation.", image: productTransformer },
  { id: "55", name: "Commercial Solar String Inverter 100kW", price: 12000, sku: "INV-SOL-100KW", category: "Distribution Equipment", group: "Main Breaker Panels", description: "100kW commercial-grade solar string inverter with high-efficiency MPPT tracking.", image: productSolarInverter },
  { id: "56", name: "Heavy-Duty Substation Switchgear", price: 19500, sku: "SG-SUB-HD", category: "Distribution Equipment", group: "Main Breaker Panels", description: "Heavy-duty substation switchgear for safe high-voltage power distribution.", image: productSwitchgear },
  { id: "57", name: "Automated Facility Control Panel", price: 8500, sku: "CP-AUTO-FAC", category: "Electrical Boxes", group: "Enclosures", description: "Automated facility control panel enclosure with pre-wired DIN rails.", image: productControlPanel },
  { id: "58", name: "High-Voltage Copper Cable Drum (300m)", price: 15000, sku: "CBL-HV-300M", category: "Wire & Cable", group: "Bare Copper Grounding Wire", description: "300 meters of premium high-voltage copper cable on an industrial wooden drum.", image: productCableDrum },
  { id: "59", name: "Industrial Diesel Backup Generator 250kW", price: 19800, sku: "GN-DSL-250KW", category: "Generators", group: "Diesel Generators", description: "250kW industrial-grade diesel backup generator in a weather-proof enclosure.", image: productDieselGenerator },
];
