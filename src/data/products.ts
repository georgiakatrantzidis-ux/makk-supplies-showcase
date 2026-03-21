import productCopperWire from "@/assets/product-copper-wire.jpg";
import productGenerator from "@/assets/product-generator.jpg";
import productLedPanel from "@/assets/product-led-panel.jpg";
import productMarble from "@/assets/product-marble.jpg";
import productBreakerPanel from "@/assets/product-breaker-panel.jpg";
import productSteelBeam from "@/assets/product-steel-beam.jpg";
import productConduit from "@/assets/product-conduit.jpg";
import productTransformer from "@/assets/product-transformer.jpg";
import productHardwood from "@/assets/product-hardwood.jpg";

export type Product = {
  id: string;
  name: string;
  price: string;
  sku: string;
  category: string;
  description: string;
  image: string;
};

const imageMap: Record<string, string> = {
  "copper-wire": productCopperWire,
  "generator": productGenerator,
  "led-panel": productLedPanel,
  "marble": productMarble,
  "breaker-panel": productBreakerPanel,
  "steel-beam": productSteelBeam,
  "conduit": productConduit,
  "transformer": productTransformer,
  "hardwood": productHardwood,
};

export const categories = [
  "All",
  "Wire & Cable",
  "Generators",
  "Lighting",
  "Building Materials",
  "Distribution & Panels",
  "Conduit & Fittings",
  "Transformers",
];

export const products: Product[] = [
  // Wire & Cable (8)
  { id: "1", name: "NMD90 Copper Wire 14/2 — Bulk Box (10 rolls)", price: "$4,200", sku: "CW-NMD90-14-2", category: "Wire & Cable", description: "14/2 NMD90 non-metallic sheathed cable with ground. 75m rolls × 10. CSA certified.", image: imageMap["copper-wire"] },
  { id: "2", name: "Bare Copper Grounding Wire — 4/0 AWG (5,000 ft reel)", price: "$24,500", sku: "CW-4-0-BARE", category: "Wire & Cable", description: "4/0 AWG bare copper on wooden reel. For grounding arrays and heavy industrial use.", image: imageMap["copper-wire"] },
  { id: "3", name: "TECK90 Armoured Cable — 3C #6 AWG (300m)", price: "$11,800", sku: "CW-TECK90-3C6", category: "Wire & Cable", description: "3-conductor #6 AWG TECK90 armoured cable. Oil and sunlight resistant. CSA approved.", image: imageMap["copper-wire"] },
  { id: "4", name: "NMD90 Copper Wire 12/2 — Bulk Box (10 rolls)", price: "$5,400", sku: "CW-NMD90-12-2", category: "Wire & Cable", description: "12/2 NMD90 non-metallic sheathed cable. 75m rolls × 10. CSA certified for residential and commercial.", image: imageMap["copper-wire"] },
  { id: "5", name: "AC90 12/2 Armoured Cable (150m coil)", price: "$3,600", sku: "CW-AC90-12-2", category: "Wire & Cable", description: "12/2 AC90 steel armoured cable, 150m. For commercial and industrial branch circuits.", image: imageMap["copper-wire"] },
  { id: "6", name: "RW90 #10 AWG Stranded XLPE (1,000m drum)", price: "$8,900", sku: "CW-RW90-10", category: "Wire & Cable", description: "#10 AWG RW90 single conductor, XLPE insulation. For wet and dry locations.", image: imageMap["copper-wire"] },
  { id: "7", name: "Bare Copper #6 AWG Solid (1,500 ft reel)", price: "$6,750", sku: "CW-BARE-6", category: "Wire & Cable", description: "#6 AWG solid bare copper. Bonding, grounding, lightning protection systems.", image: imageMap["copper-wire"] },
  { id: "8", name: "NMD90 14/3 Copper Wire — Bulk Box (10 rolls)", price: "$5,800", sku: "CW-NMD90-14-3", category: "Wire & Cable", description: "14/3 NMD90 with ground, 75m rolls × 10. For 3-way switches and multi-circuit runs.", image: imageMap["copper-wire"] },

  // Generators (6)
  { id: "9", name: "Diesel Generator 50kW — Enclosed Silent", price: "$18,500", sku: "GN-DSL-50KW", category: "Generators", description: "50kW prime-rated diesel generator. Sound-attenuated enclosure. Auto transfer switch ready.", image: imageMap["generator"] },
  { id: "10", name: "Diesel Generator 100kW — Industrial Standby", price: "$32,000", sku: "GN-DSL-100KW", category: "Generators", description: "100kW standby diesel generator. EPA Tier 4 compliant. 500L fuel tank. Digital controller.", image: imageMap["generator"] },
  { id: "11", name: "Diesel Generator 20kW — Portable", price: "$9,800", sku: "GN-DSL-20KW", category: "Generators", description: "20kW portable diesel generator with wheel kit. 120/240V output. Electric start.", image: imageMap["generator"] },
  { id: "12", name: "Natural Gas Generator 30kW — Standby", price: "$14,200", sku: "GN-NG-30KW", category: "Generators", description: "30kW natural gas standby generator. Automatic transfer. Weatherproof enclosure.", image: imageMap["generator"] },
  { id: "13", name: "Diesel Generator 200kW — Prime Power", price: "$52,000", sku: "GN-DSL-200KW", category: "Generators", description: "200kW prime-rated diesel generator. Radiator cooled. For continuous duty applications.", image: imageMap["generator"] },
  { id: "14", name: "Towable Diesel Generator 70kW", price: "$24,500", sku: "GN-DSL-70KW-T", category: "Generators", description: "70kW towable diesel generator with DOT trailer. Jobsite ready. Sound level <72dB.", image: imageMap["generator"] },

  // Lighting (6)
  { id: "15", name: "LED Slim Panel 2×4 ft 50W — Lot of 20", price: "$3,800", sku: "LT-LED-2X4-50W", category: "Lighting", description: "50W LED flat panel, 5,500 lumens, 4000K. Drop ceiling compatible. DLC listed. Box of 20.", image: imageMap["led-panel"] },
  { id: "16", name: "LED High Bay 200W — Lot of 10", price: "$4,200", sku: "LT-HB-200W", category: "Lighting", description: "200W LED high bay, 28,000 lumens. 5000K daylight. For warehouses and shops. 10 units.", image: imageMap["led-panel"] },
  { id: "17", name: "LED Slim Panel 2×2 ft 40W — Lot of 30", price: "$4,500", sku: "LT-LED-2X2-40W", category: "Lighting", description: "40W LED flat panel, 4,400 lumens, 4000K. Edge-lit design. DLC listed. Box of 30.", image: imageMap["led-panel"] },
  { id: "18", name: "LED Parking Lot Light 300W — Box of 6", price: "$5,400", sku: "LT-PL-300W", category: "Lighting", description: "300W LED shoebox fixture, 42,000 lumens. Dusk-to-dawn photocell. IP65 rated.", image: imageMap["led-panel"] },
  { id: "19", name: "Emergency Light Combo Unit — Lot of 24", price: "$2,800", sku: "LT-EMG-COMBO", category: "Lighting", description: "LED emergency light with exit sign combo. 90-minute battery backup. ULC listed. 24 units.", image: imageMap["led-panel"] },
  { id: "20", name: "LED Troffer Retrofit Kit 2×4 ft — Lot of 20", price: "$3,200", sku: "LT-TRF-2X4", category: "Lighting", description: "50W LED troffer retrofit, magnetic mount. 5,800 lumens. Converts existing fluorescent fixtures.", image: imageMap["led-panel"] },

  // Building Materials (8)
  { id: "21", name: 'Calacatta Gold Marble Slab — 120" × 65"', price: "$18,500", sku: "MS-CALG-001", category: "Building Materials", description: "Premium Italian marble with gold and grey veining. For countertops and feature walls.", image: imageMap["marble"] },
  { id: "22", name: "Nero Marquina Granite Countertop", price: "$12,000", sku: "GR-NERO-045", category: "Building Materials", description: "Deep black Spanish granite with white veining. Pre-polished and sealed. For lobbies and reception.", image: imageMap["marble"] },
  { id: "23", name: "Wide-Plank European Oak Flooring (1,500 sq ft)", price: "$22,500", sku: "WD-EOAK-100", category: "Building Materials", description: "Engineered hardwood, wire-brushed matte finish. Commercial grade wear layer. 1,500 sq ft bundle.", image: imageMap["hardwood"] },
  { id: "24", name: 'Structural Steel W-Beam W10×49 — 40 ft', price: "$4,800", sku: "ST-W10-49", category: "Building Materials", description: "W10×49 wide-flange steel beam, 40 ft length. ASTM A992 Grade 50. Mill certified.", image: imageMap["steel-beam"] },
  { id: "25", name: "Structural Steel W-Beam W12×65 — 30 ft", price: "$5,200", sku: "ST-W12-65", category: "Building Materials", description: "W12×65 wide-flange beam, 30 ft. ASTM A992. For commercial structural framing.", image: imageMap["steel-beam"] },
  { id: "26", name: "Architectural Glass Panel — Tempered Low-E (10 pcs)", price: "$15,800", sku: "GL-ARCH-LE", category: "Building Materials", description: "6mm tempered low-E glass panels. 4ft × 8ft each. For curtain walls and storefronts.", image: imageMap["marble"] },
  { id: "27", name: "Pre-Cast Concrete Panels — Set of 8", price: "$28,000", sku: "CC-PRCAST-8", category: "Building Materials", description: "Pre-cast reinforced concrete wall panels. 4ft × 10ft × 6in. Smooth grey finish. Set of 8.", image: imageMap["steel-beam"] },
  { id: "28", name: "Brazilian Cherry Hardwood Flooring (800 sq ft)", price: "$14,400", sku: "WD-BRCH-800", category: "Building Materials", description: "Solid Brazilian cherry (Jatoba), 3/4in × 5in planks. Pre-finished. Extreme hardness rating.", image: imageMap["hardwood"] },

  // Distribution & Panels (6)
  { id: "29", name: "200A Main Breaker Panel — 42 Circuit", price: "$8,500", sku: "DP-MB-200A-42", category: "Distribution & Panels", description: "200A main breaker loadcentre, 42 spaces. Copper bus. CSA approved. With cover and trim.", image: imageMap["breaker-panel"] },
  { id: "30", name: "400A Main Lug Panel — 84 Circuit", price: "$16,200", sku: "DP-ML-400A-84", category: "Distribution & Panels", description: "400A main lug distribution panel. 84 spaces. 3-phase 120/208V. For commercial buildings.", image: imageMap["breaker-panel"] },
  { id: "31", name: "100A Sub Panel — 24 Circuit", price: "$3,200", sku: "DP-SP-100A-24", category: "Distribution & Panels", description: "100A sub panel, 24 spaces. Main lug. Flush or surface mount. CSA listed.", image: imageMap["breaker-panel"] },
  { id: "32", name: "Automatic Transfer Switch — 200A", price: "$12,500", sku: "DP-ATS-200A", category: "Distribution & Panels", description: "200A automatic transfer switch. Open or closed transition. For generator integration.", image: imageMap["breaker-panel"] },
  { id: "33", name: "600A CT Cabinet — Metering", price: "$9,800", sku: "DP-CT-600A", category: "Distribution & Panels", description: "600A current transformer cabinet for utility metering. NEMA 3R rated. Padlock provision.", image: imageMap["breaker-panel"] },
  { id: "34", name: "3-Phase Motor Control Centre — 6 Bucket", price: "$38,000", sku: "DP-MCC-6B", category: "Distribution & Panels", description: "6-bucket motor control centre. 600V rated. FVNR starters. For industrial motor loads.", image: imageMap["breaker-panel"] },

  // Conduit & Fittings (6)
  { id: "35", name: 'EMT Conduit 1" × 10 ft — Bundle of 50', price: "$2,800", sku: "CF-EMT-1-50", category: "Conduit & Fittings", description: '1" EMT conduit, 10ft sticks. Galvanized steel. UL listed. Bundle of 50 sticks.', image: imageMap["conduit"] },
  { id: "36", name: 'Rigid Steel Conduit 2" × 10 ft — Bundle of 25', price: "$4,500", sku: "CF-RGD-2-25", category: "Conduit & Fittings", description: '2" rigid galvanized steel conduit. For exposed and hazardous locations. 25 sticks.', image: imageMap["conduit"] },
  { id: "37", name: 'PVC Conduit DB2 2" — Bundle of 40', price: "$1,800", sku: "CF-PVC-2-40", category: "Conduit & Fittings", description: '2" Schedule 40 PVC conduit, 10ft sticks. For underground and direct burial. 40 sticks.', image: imageMap["conduit"] },
  { id: "38", name: "Cable Tray — 12in Wide × 10 ft (10 sections)", price: "$3,600", sku: "CF-TRAY-12-10", category: "Conduit & Fittings", description: '12" wide ventilated cable tray, galvanized. 10ft sections × 10. With splice plates.', image: imageMap["conduit"] },
  { id: "39", name: 'Liquid-Tight Flex Conduit 3/4" (500 ft)', price: "$2,400", sku: "CF-LTFX-34", category: "Conduit & Fittings", description: '3/4" liquid-tight flexible metallic conduit. 500ft reel. For motors and HVAC connections.', image: imageMap["conduit"] },
  { id: "40", name: 'EMT Connector & Coupling Kit — 1" (200 pcs)', price: "$1,600", sku: "CF-KIT-EMT-1", category: "Conduit & Fittings", description: '100 compression connectors + 100 couplings for 1" EMT. Steel, zinc-plated. CSA listed.', image: imageMap["conduit"] },

  // Transformers (6)
  { id: "41", name: "Dry-Type Transformer 75kVA — 600V to 120/208V", price: "$14,500", sku: "TX-DRY-75KVA", category: "Transformers", description: "75kVA dry-type transformer. 600V primary to 120/208V secondary. 3-phase. Indoor rated.", image: imageMap["transformer"] },
  { id: "42", name: "Dry-Type Transformer 150kVA — 600V to 120/208V", price: "$22,000", sku: "TX-DRY-150KVA", category: "Transformers", description: "150kVA dry-type, 3-phase. Copper windings. 150°C insulation class. Wall or floor mount.", image: imageMap["transformer"] },
  { id: "43", name: "Pad-Mount Transformer 500kVA — Oil Filled", price: "$45,000", sku: "TX-PAD-500KVA", category: "Transformers", description: "500kVA pad-mounted oil-filled transformer. For utility step-down. Tamper-resistant enclosure.", image: imageMap["transformer"] },
  { id: "44", name: "Buck-Boost Transformer 10kVA — Single Phase", price: "$3,200", sku: "TX-BB-10KVA", category: "Transformers", description: "10kVA single-phase buck-boost transformer. For voltage correction ±5-10%. CSA approved.", image: imageMap["transformer"] },
  { id: "45", name: "Dry-Type Transformer 45kVA — 480V to 120/208V", price: "$9,800", sku: "TX-DRY-45KVA", category: "Transformers", description: "45kVA dry-type transformer, 3-phase. 480V delta primary. For US equipment compatibility.", image: imageMap["transformer"] },
  { id: "46", name: "Isolation Transformer 25kVA — Hospital Grade", price: "$11,500", sku: "TX-ISO-25KVA", category: "Transformers", description: "25kVA medical isolation transformer. Electrostatic shield. For sensitive medical equipment.", image: imageMap["transformer"] },
];
