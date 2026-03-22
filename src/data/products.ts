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
import productHeatPump from "@/assets/product-heat-pump.png";
import productEnergyController from "@/assets/product-energy-controller.png";
import productStadiumLight from "@/assets/product-stadium-light.png";
import productPullBox from "@/assets/product-pull-box.png";
import productDisconnectSwitch from "@/assets/product-disconnect-switch.png";
import productPowerFilter from "@/assets/product-power-filter.png";
import productArcFlashSuit from "@/assets/product-arc-flash-suit.png";
import productCablePuller from "@/assets/product-cable-puller.png";
import productEvKiosk from "@/assets/product-ev-kiosk.png";
import productServerRack from "@/assets/product-server-rack.png";

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

  // Distribution Equipment
  { id: "9", name: "200A Main Breaker Panel — 42 Circuit", price: 8500, sku: "DP-MB-200A-42", category: "Distribution Equipment", group: "Main Breaker Panels", description: "200A main breaker loadcentre, 42 spaces. Copper bus. CSA approved. With cover and trim.", image: productBreakerPanel },

  // Fire Alarm
  { id: "14", name: "Addressable Fire Alarm Panel — 4 Loop", price: 6800, sku: "FA-PANEL-4L", category: "Fire Alarm", group: "Fire Alarm Panels", description: "4-loop addressable fire alarm control panel. 500 devices per loop. LCD display. ULC listed.", image: productFireAlarm },

  // Heating & Ventilation
  { id: "19", name: "Commercial Baseboard Heater 2000W — Lot of 12", price: 3800, sku: "HV-BASE-2000", category: "Heating & Ventilation", group: "Baseboard & Unit Heaters", description: "2000W commercial baseboard heaters. 240V. Built-in thermostat. CSA approved. 12 units.", image: productHeatingVentilation },

  // Electrical Boxes
  { id: "23", name: "4\" Square Junction Box — Lot of 100", price: 1800, sku: "EB-4SQ-100", category: "Electrical Boxes", group: "Junction Boxes", description: "4\" square galvanized steel junction boxes. 1-1/2\" deep. Multiple knockouts. CSA listed. 100 pcs.", image: productElectricalBox },

  // Lighting
  { id: "27", name: "LED Slim Panel 2×4 ft 50W — Lot of 20", price: 3800, sku: "LT-LED-2X4-50W", category: "Lighting", group: "LED Panels & Troffers", description: "50W LED flat panel, 5,500 lumens, 4000K. Drop ceiling compatible. DLC listed. Box of 20.", image: productLedPanel },

  // Emergency Lighting
  { id: "32", name: "Emergency Light Combo Unit — Lot of 24", price: 2800, sku: "EL-COMBO-24", category: "Emergency Lighting", group: "Emergency Light Units", description: "LED emergency light with exit sign combo. 90-minute battery backup. ULC listed. 24 units.", image: productEmergencyLighting },

  // Conduits
  { id: "36", name: "EMT Conduit 1\" × 10 ft — Bundle of 50", price: 2800, sku: "CF-EMT-1-50", category: "Conduits", group: "EMT Conduit", description: "1\" EMT conduit, 10ft sticks. Galvanized steel. UL listed. Bundle of 50 sticks.", image: productConduit },

  // Connectors & Fittings
  { id: "41", name: "EMT Connector & Coupling Kit — 1\" (200 pcs)", price: 1600, sku: "CF-KIT-EMT-1", category: "Connectors & Fittings", group: "EMT Connectors & Couplings", description: "100 compression connectors + 100 couplings for 1\" EMT. Steel, zinc-plated. CSA listed.", image: productConnectorsFittings },

  // EV Chargers
  { id: "45", name: "Level 2 EV Charger — 48A Hardwired", price: 3200, sku: "EV-L2-48A", category: "EV Chargers", group: "Level 2 EV Chargers", description: "48A Level 2 EV charger, 240V hardwired. NEMA 4 rated. WiFi enabled. J1772 connector.", image: productEvCharger },

  // Generators
  { id: "49", name: "Diesel Generator 50kW — Enclosed Silent", price: 18500, sku: "GN-DSL-50KW", category: "Generators", group: "Diesel Generators", description: "50kW prime-rated diesel generator. Sound-attenuated enclosure. Auto transfer switch ready.", image: productGenerator },

  // Tools & Testing Equipment
  { id: "53", name: "Digital Multimeter — True-RMS AC/DC", price: 29900, sku: "TL-MM-PRO", category: "Tools & Testing Equipment", group: "Digital Multimeters", description: "Professional True-RMS digital multimeter. Industrial tier with auto-ranging, backlit display, and premium test leads.", image: productMultimeter },

  // New High-Ticket Additions
  { id: "54", name: "Industrial Power Transformer 500kVA", price: 18500, sku: "TX-500KVA", category: "Distribution Equipment", group: "Power Transformers", description: "500kVA industrial power transformer for heavy-duty commercial voltage regulation.", image: productTransformer },
  { id: "55", name: "Commercial Solar String Inverter 100kW", price: 12000, sku: "INV-SOL-100KW", category: "Distribution Equipment", group: "Solar Inverters", description: "100kW commercial-grade solar string inverter with high-efficiency MPPT tracking.", image: productSolarInverter },
  { id: "56", name: "Heavy-Duty Substation Switchgear", price: 19500, sku: "SG-SUB-HD", category: "Distribution Equipment", group: "Substation Switchgears", description: "Heavy-duty substation switchgear for safe high-voltage power distribution.", image: productSwitchgear },
  { id: "57", name: "Automated Facility Control Panel", price: 8500, sku: "CP-AUTO-FAC", category: "Electrical Boxes", group: "Control Panels", description: "Automated facility control panel enclosure with pre-wired DIN rails.", image: productControlPanel },
  { id: "58", name: "High-Voltage Copper Cable Drum (300m)", price: 15000, sku: "CBL-HV-300M", category: "Wire & Cable", group: "High-Voltage Cables", description: "300 meters of premium high-voltage copper cable on an industrial wooden drum.", image: productCableDrum },
  { id: "59", name: "Industrial Diesel Backup Generator 250kW", price: 19800, sku: "GN-DSL-250KW", category: "Generators", group: "Heavy-Duty Diesel Generators", description: "250kW industrial-grade diesel backup generator in a weather-proof enclosure.", image: productDieselGenerator },
  { id: "60", name: "Commercial Heat Pump System 20-Ton", price: 14500, sku: "HV-HP-20T", category: "Heating & Ventilation", group: "Commercial HVAC Systems", description: "20-ton industrial heat pump HVAC system with advanced climate control.", image: productHeatPump },
  { id: "61", name: "Smart Building Energy Management Controller", price: 4200, sku: "BMS-CTRL-400", category: "Electrical Boxes", group: "Energy Management Systems", description: "Smart building energy management controller with touchscreen display.", image: productEnergyController },
  { id: "62", name: "LED Stadium Floodlight Array 1000W", price: 8800, sku: "LT-STAD-1000W", category: "Lighting", group: "Stadium & Arena Lighting", description: "1000W LED stadium floodlight array for optimal outdoor visibility.", image: productStadiumLight },
  { id: "63", name: "Underground Utility Pull Box (Polymer Concrete)", price: 1250, sku: "CF-PULLBOX-PC", category: "Conduits", group: "Utility Pull Boxes", description: "Heavy-duty polymer concrete underground utility pull box setup.", image: productPullBox },
  { id: "64", name: "High-Voltage Disconnect Switch 600A", price: 5400, sku: "DP-DISC-600A", category: "Distribution Equipment", group: "Disconnect Switches", description: "600A industrial high-voltage disconnect switch with heavy contacts.", image: productDisconnectSwitch },
  { id: "65", name: "3-Phase Active Harmonic Power Filter", price: 16000, sku: "DP-AHF-3P", category: "Distribution Equipment", group: "Power Quality Tools", description: "3-phase active harmonic power filter cabinet for clean energy distribution.", image: productPowerFilter },
  { id: "66", name: "Industrial Arc Flash PPE Suit Kit (40 cal/cm²)", price: 2100, sku: "TL-PPE-ARC40", category: "Tools & Testing Equipment", group: "Safety & PPE", description: "40 cal/cm² industrial arc flash PPE suit kit with face shield.", image: productArcFlashSuit },
  { id: "67", name: "Heavy-Duty Electric Cable Pulling Machine", price: 11500, sku: "TL-CBL-PUL-HD", category: "Tools & Testing Equipment", group: "Cable Installation Tools", description: "Heavy-duty electric cable pulling machine with ultra-high torque.", image: productCablePuller },
  { id: "68", name: "EV Fleet Charging Management Kiosk", price: 9500, sku: "EV-KIOSK-FLT", category: "EV Chargers", group: "Commercial Charging Kiosks", description: "Modern EV fleet charging management kiosk for multi-vehicle stations.", image: productEvKiosk },
  { id: "69", name: "Data Center Server Rack Enclosure with Cooling", price: 6800, sku: "EB-RACK-COOL", category: "Electrical Boxes", group: "Data Center Racks", description: "Black data center server rack enclosure cabinet featuring built-in industrial cooling fans.", image: productServerRack },
];
