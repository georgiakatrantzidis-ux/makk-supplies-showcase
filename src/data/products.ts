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

export type Product = {
  id: string;
  name: string;
  price: string;
  sku: string;
  category: string;
  description: string;
  image: string;
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
];

export const products: Product[] = [
  // Wire & Cable (6)
  { id: "1", name: "NMD90 Copper Wire 14/2 — Bulk Box (10 rolls)", price: "$4,200", sku: "CW-NMD90-14-2", category: "Wire & Cable", description: "14/2 NMD90 non-metallic sheathed cable with ground. 75m rolls × 10. CSA certified.", image: productCopperWire },
  { id: "2", name: "Bare Copper Grounding Wire — 4/0 AWG (5,000 ft reel)", price: "$24,500", sku: "CW-4-0-BARE", category: "Wire & Cable", description: "4/0 AWG bare copper on wooden reel. For grounding arrays and heavy industrial use.", image: productCopperWire },
  { id: "3", name: "TECK90 Armoured Cable — 3C #6 AWG (300m)", price: "$11,800", sku: "CW-TECK90-3C6", category: "Wire & Cable", description: "3-conductor #6 AWG TECK90 armoured cable. Oil and sunlight resistant. CSA approved.", image: productCopperWire },
  { id: "4", name: "NMD90 Copper Wire 12/2 — Bulk Box (10 rolls)", price: "$5,400", sku: "CW-NMD90-12-2", category: "Wire & Cable", description: "12/2 NMD90 non-metallic sheathed cable. 75m rolls × 10. CSA certified for residential and commercial.", image: productCopperWire },
  { id: "5", name: "AC90 12/2 Armoured Cable (150m coil)", price: "$3,600", sku: "CW-AC90-12-2", category: "Wire & Cable", description: "12/2 AC90 steel armoured cable, 150m. For commercial and industrial branch circuits.", image: productCopperWire },
  { id: "6", name: "RW90 #10 AWG Stranded XLPE (1,000m drum)", price: "$8,900", sku: "CW-RW90-10", category: "Wire & Cable", description: "#10 AWG RW90 single conductor, XLPE insulation. For wet and dry locations.", image: productCopperWire },

  // Distribution Equipment (5)
  { id: "7", name: "200A Main Breaker Panel — 42 Circuit", price: "$8,500", sku: "DP-MB-200A-42", category: "Distribution Equipment", description: "200A main breaker loadcentre, 42 spaces. Copper bus. CSA approved. With cover and trim.", image: productBreakerPanel },
  { id: "8", name: "400A Main Lug Panel — 84 Circuit", price: "$16,200", sku: "DP-ML-400A-84", category: "Distribution Equipment", description: "400A main lug distribution panel. 84 spaces. 3-phase 120/208V. For commercial buildings.", image: productBreakerPanel },
  { id: "9", name: "100A Sub Panel — 24 Circuit", price: "$3,200", sku: "DP-SP-100A-24", category: "Distribution Equipment", description: "100A sub panel, 24 spaces. Main lug. Flush or surface mount. CSA listed.", image: productBreakerPanel },
  { id: "10", name: "Automatic Transfer Switch — 200A", price: "$12,500", sku: "DP-ATS-200A", category: "Distribution Equipment", description: "200A automatic transfer switch. Open or closed transition. For generator integration.", image: productBreakerPanel },
  { id: "11", name: "3-Phase Motor Control Centre — 6 Bucket", price: "$38,000", sku: "DP-MCC-6B", category: "Distribution Equipment", description: "6-bucket motor control centre. 600V rated. FVNR starters. For industrial motor loads.", image: productBreakerPanel },

  // Fire Alarm (5)
  { id: "12", name: "Addressable Fire Alarm Panel — 4 Loop", price: "$6,800", sku: "FA-PANEL-4L", category: "Fire Alarm", description: "4-loop addressable fire alarm control panel. 500 devices per loop. LCD display. ULC listed.", image: productFireAlarm },
  { id: "13", name: "Photoelectric Smoke Detector — Lot of 50", price: "$4,200", sku: "FA-SMOKE-50", category: "Fire Alarm", description: "Addressable photoelectric smoke detectors. Low-profile design. ULC/UL listed. Box of 50.", image: productFireAlarm },
  { id: "14", name: "Heat Detector — Rate-of-Rise (Lot of 40)", price: "$3,600", sku: "FA-HEAT-40", category: "Fire Alarm", description: "Rate-of-rise and fixed temperature heat detectors. 135°F setting. ULC listed. 40 units.", image: productFireAlarm },
  { id: "15", name: "Fire Alarm Pull Station — Lot of 24", price: "$2,400", sku: "FA-PULL-24", category: "Fire Alarm", description: "Single-action addressable pull stations. Die-cast red housing. ADA compliant. 24 units.", image: productFireAlarm },
  { id: "16", name: "Horn/Strobe Notification — Lot of 30", price: "$5,100", sku: "FA-HSTROBE-30", category: "Fire Alarm", description: "Wall-mount horn/strobe notification appliances. Candela selectable. Red housing. 30 units.", image: productFireAlarm },

  // Heating & Ventilation (4)
  { id: "17", name: "Commercial Baseboard Heater 2000W — Lot of 12", price: "$3,800", sku: "HV-BASE-2000", category: "Heating & Ventilation", description: "2000W commercial baseboard heaters. 240V. Built-in thermostat. CSA approved. 12 units.", image: productHeatingVentilation },
  { id: "18", name: "Inline Duct Fan 8\" — 750 CFM (6 units)", price: "$2,400", sku: "HV-DUCT-8", category: "Heating & Ventilation", description: "8\" inline duct fan, 750 CFM. Variable speed. For commercial HVAC systems. 6 units.", image: productHeatingVentilation },
  { id: "19", name: "Unit Heater 30kW — Industrial Ceiling Mount", price: "$4,500", sku: "HV-UNIT-30KW", category: "Heating & Ventilation", description: "30kW industrial unit heater. 600V 3-phase. Ceiling mount with louvers. For warehouses.", image: productHeatingVentilation },
  { id: "20", name: "Exhaust Fan — Roof Mount 1500 CFM", price: "$3,200", sku: "HV-EXHAUST-RF", category: "Heating & Ventilation", description: "Roof-mounted exhaust fan, 1500 CFM. Aluminum construction. Belt drive. For commercial buildings.", image: productHeatingVentilation },

  // Electrical Boxes (4)
  { id: "21", name: "4\" Square Junction Box — Lot of 100", price: "$1,800", sku: "EB-4SQ-100", category: "Electrical Boxes", description: "4\" square galvanized steel junction boxes. 1-1/2\" deep. Multiple knockouts. CSA listed. 100 pcs.", image: productElectricalBox },
  { id: "22", name: "NEMA 4X Stainless Enclosure — 24×24×8", price: "$2,800", sku: "EB-N4X-2424", category: "Electrical Boxes", description: "NEMA 4X stainless steel enclosure, 24\"×24\"×8\". Hinged cover. For corrosive environments.", image: productElectricalBox },
  { id: "23", name: "Weatherproof Outlet Box — Lot of 50", price: "$1,400", sku: "EB-WP-50", category: "Electrical Boxes", description: "Die-cast aluminum weatherproof outlet boxes. 1/2\" hubs. With gasket covers. 50 units.", image: productElectricalBox },
  { id: "24", name: "Floor Box Kit — Flush Mount (20 units)", price: "$3,600", sku: "EB-FLOOR-20", category: "Electrical Boxes", description: "Flush-mount floor boxes with brass covers. For office and commercial. Duplex and data. 20 units.", image: productElectricalBox },

  // Lighting (5)
  { id: "25", name: "LED Slim Panel 2×4 ft 50W — Lot of 20", price: "$3,800", sku: "LT-LED-2X4-50W", category: "Lighting", description: "50W LED flat panel, 5,500 lumens, 4000K. Drop ceiling compatible. DLC listed. Box of 20.", image: productLedPanel },
  { id: "26", name: "LED High Bay 200W — Lot of 10", price: "$4,200", sku: "LT-HB-200W", category: "Lighting", description: "200W LED high bay, 28,000 lumens. 5000K daylight. For warehouses and shops. 10 units.", image: productLedPanel },
  { id: "27", name: "LED Slim Panel 2×2 ft 40W — Lot of 30", price: "$4,500", sku: "LT-LED-2X2-40W", category: "Lighting", description: "40W LED flat panel, 4,400 lumens, 4000K. Edge-lit design. DLC listed. Box of 30.", image: productLedPanel },
  { id: "28", name: "LED Parking Lot Light 300W — Box of 6", price: "$5,400", sku: "LT-PL-300W", category: "Lighting", description: "300W LED shoebox fixture, 42,000 lumens. Dusk-to-dawn photocell. IP65 rated.", image: productLedPanel },
  { id: "29", name: "LED Troffer Retrofit Kit 2×4 ft — Lot of 20", price: "$3,200", sku: "LT-TRF-2X4", category: "Lighting", description: "50W LED troffer retrofit, magnetic mount. 5,800 lumens. Converts existing fluorescent fixtures.", image: productLedPanel },

  // Emergency Lighting (4)
  { id: "30", name: "Emergency Light Combo Unit — Lot of 24", price: "$2,800", sku: "EL-COMBO-24", category: "Emergency Lighting", description: "LED emergency light with exit sign combo. 90-minute battery backup. ULC listed. 24 units.", image: productEmergencyLighting },
  { id: "31", name: "Steel Emergency Light — Dual Head (Lot of 20)", price: "$3,400", sku: "EL-DUAL-20", category: "Emergency Lighting", description: "Industrial steel body, dual adjustable LED heads. 6V battery. 90-min runtime. 20 units.", image: productEmergencyLighting },
  { id: "32", name: "Running Man Exit Sign — LED (Lot of 30)", price: "$2,100", sku: "EL-EXIT-30", category: "Emergency Lighting", description: "Green running man LED exit signs. Universal mount. Battery backup. CSA approved. 30 units.", image: productEmergencyLighting },
  { id: "33", name: "Remote Head Kit — Single (Lot of 40)", price: "$1,900", sku: "EL-REMOTE-40", category: "Emergency Lighting", description: "Single remote emergency lamp heads. 5.4W LED. For use with central battery systems. 40 units.", image: productEmergencyLighting },

  // Conduits (5)
  { id: "34", name: "EMT Conduit 1\" × 10 ft — Bundle of 50", price: "$2,800", sku: "CF-EMT-1-50", category: "Conduits", description: "1\" EMT conduit, 10ft sticks. Galvanized steel. UL listed. Bundle of 50 sticks.", image: productConduit },
  { id: "35", name: "Rigid Steel Conduit 2\" × 10 ft — Bundle of 25", price: "$4,500", sku: "CF-RGD-2-25", category: "Conduits", description: "2\" rigid galvanized steel conduit. For exposed and hazardous locations. 25 sticks.", image: productConduit },
  { id: "36", name: "PVC Conduit DB2 2\" — Bundle of 40", price: "$1,800", sku: "CF-PVC-2-40", category: "Conduits", description: "2\" Schedule 40 PVC conduit, 10ft sticks. For underground and direct burial. 40 sticks.", image: productConduit },
  { id: "37", name: "Cable Tray — 12in Wide × 10 ft (10 sections)", price: "$3,600", sku: "CF-TRAY-12-10", category: "Conduits", description: "12\" wide ventilated cable tray, galvanized. 10ft sections × 10. With splice plates.", image: productConduit },
  { id: "38", name: "Liquid-Tight Flex Conduit 3/4\" (500 ft)", price: "$2,400", sku: "CF-LTFX-34", category: "Conduits", description: "3/4\" liquid-tight flexible metallic conduit. 500ft reel. For motors and HVAC connections.", image: productConduit },

  // Connectors & Fittings (4)
  { id: "39", name: "EMT Connector & Coupling Kit — 1\" (200 pcs)", price: "$1,600", sku: "CF-KIT-EMT-1", category: "Connectors & Fittings", description: "100 compression connectors + 100 couplings for 1\" EMT. Steel, zinc-plated. CSA listed.", image: productConnectorsFittings },
  { id: "40", name: "Rigid Conduit Coupling — 2\" (Lot of 50)", price: "$1,200", sku: "CF-RGD-CPL-50", category: "Connectors & Fittings", description: "2\" rigid steel conduit couplings. Threaded. Hot-dip galvanized. 50 pieces.", image: productConnectorsFittings },
  { id: "41", name: "Cable Gland Kit — Assorted (100 pcs)", price: "$2,200", sku: "CF-GLAND-100", category: "Connectors & Fittings", description: "Assorted nickel-plated brass cable glands. PG7 to PG21. IP68 rated. 100 pieces.", image: productConnectorsFittings },
  { id: "42", name: "Set Screw Connector — 3/4\" EMT (Lot of 200)", price: "$980", sku: "CF-SS-34-200", category: "Connectors & Fittings", description: "3/4\" EMT set screw connectors. Die-cast zinc. CSA and UL listed. 200 pieces.", image: productConnectorsFittings },

  // EV Chargers (4)
  { id: "43", name: "Level 2 EV Charger — 48A Hardwired", price: "$3,200", sku: "EV-L2-48A", category: "EV Chargers", description: "48A Level 2 EV charger, 240V hardwired. NEMA 4 rated. WiFi enabled. J1772 connector.", image: productEvCharger },
  { id: "44", name: "Commercial EV Charging Station — Dual Port", price: "$12,500", sku: "EV-COM-DUAL", category: "EV Chargers", description: "Dual-port commercial EV charger. 80A total. RFID and payment ready. OCPP compliant.", image: productEvCharger },
  { id: "45", name: "DC Fast Charger — 60kW CCS/CHAdeMO", price: "$42,000", sku: "EV-DC-60KW", category: "EV Chargers", description: "60kW DC fast charger. CCS and CHAdeMO connectors. For commercial and fleet charging.", image: productEvCharger },
  { id: "46", name: "EV Charger Pedestal Mount — Lot of 6", price: "$2,400", sku: "EV-PED-6", category: "EV Chargers", description: "Heavy-duty aluminum pedestal mounts for Level 2 chargers. Concrete anchor kit included. 6 units.", image: productEvCharger },

  // Generators (4)
  { id: "47", name: "Diesel Generator 50kW — Enclosed Silent", price: "$18,500", sku: "GN-DSL-50KW", category: "Generators", description: "50kW prime-rated diesel generator. Sound-attenuated enclosure. Auto transfer switch ready.", image: productGenerator },
  { id: "48", name: "Diesel Generator 100kW — Industrial Standby", price: "$32,000", sku: "GN-DSL-100KW", category: "Generators", description: "100kW standby diesel generator. EPA Tier 4 compliant. 500L fuel tank. Digital controller.", image: productGenerator },
  { id: "49", name: "Diesel Generator 200kW — Prime Power", price: "$52,000", sku: "GN-DSL-200KW", category: "Generators", description: "200kW prime-rated diesel generator. Radiator cooled. For continuous duty applications.", image: productGenerator },
  { id: "50", name: "Natural Gas Generator 30kW — Standby", price: "$14,200", sku: "GN-NG-30KW", category: "Generators", description: "30kW natural gas standby generator. Automatic transfer. Weatherproof enclosure.", image: productGenerator },
];
