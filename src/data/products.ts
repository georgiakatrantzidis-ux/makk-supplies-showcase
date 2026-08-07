import productAccentChair from "@/assets/product_accent_chair.png";
import productCoffeeTable from "@/assets/product_coffee_table.png";
import productDiningTable from "@/assets/product_dining_table.png";
import productWallArt from "@/assets/product_wall_art.png";
import productBookshelf from "@/assets/product_bookshelf.png";
import productCeramicVase from "@/assets/product_ceramic_vase.png";

// New Products
import productLoungeChair from "@/assets/product_lounge_chair.png";
import productSectionalSofa from "@/assets/product_sectional_sofa.png";
import productOakSideTable from "@/assets/product_oak_sidetable.png";
import productGlassDiningTable from "@/assets/product_glass_dining_table.png";
import productCredenza from "@/assets/product_credenza.png";
import productWallShelves from "@/assets/product_wall_shelves.png";

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
  "Seating",
  "Tables",
  "Storage",
  "Art & Decor"
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
  // Seating
  { id: "1", name: "Modern Accent Chair", price: 350, sku: "FURN-CHR-01", category: "Seating", group: "Accent Chairs", description: "A beautifully crafted modern accent chair with premium upholstery and ergonomic design.", image: productAccentChair },
  { id: "2", name: "Premium Modern Accent Chair", price: 450, sku: "FURN-CHR-02", category: "Seating", group: "Accent Chairs", description: "A beautifully crafted modern accent chair with premium leather and ergonomic design.", image: productAccentChair },
  { id: "9", name: "Velvet Lounge Chair", price: 250, sku: "FURN-CHR-03", category: "Seating", group: "Accent Chairs", description: "A plush velvet lounge chair in a rich jewel tone, perfect for reading corners.", image: productLoungeChair },
  { id: "10", name: "L-Shaped Sectional Sofa", price: 1200, sku: "FURN-SOF-01", category: "Seating", group: "Sofas", description: "A modern L-shaped sectional sofa in neutral fabric for large living spaces.", image: productSectionalSofa },

  // Tables
  { id: "3", name: "Minimalist Coffee Table", price: 200, sku: "FURN-TBL-01", category: "Tables", group: "Coffee Tables", description: "A sleek minimalist coffee table crafted from solid wood, perfect for any living room.", image: productCoffeeTable },
  { id: "4", name: "Solid Wood Dining Table", price: 950, sku: "FURN-TBL-02", category: "Tables", group: "Dining Tables", description: "A large solid oak wood dining table built to last generations.", image: productDiningTable },
  { id: "11", name: "Solid Oak Side Table", price: 120, sku: "FURN-TBL-03", category: "Tables", group: "Side Tables", description: "A small minimalist solid oak side table for bedsides or living rooms.", image: productOakSideTable },
  { id: "12", name: "Glass & Metal Dining Table", price: 600, sku: "FURN-TBL-04", category: "Tables", group: "Dining Tables", description: "A modern dining table with a clear glass top and architectural metal legs.", image: productGlassDiningTable },

  // Storage
  { id: "5", name: "Custom Open Bookshelf", price: 500, sku: "FURN-STR-01", category: "Storage", group: "Bookshelves", description: "A custom wooden open bookshelf combining modern design with ample storage.", image: productBookshelf },
  { id: "6", name: "Custom Open Bookshelf - Large", price: 750, sku: "FURN-STR-02", category: "Storage", group: "Bookshelves", description: "A large custom wooden open bookshelf combining modern design with ample storage.", image: productBookshelf },
  { id: "13", name: "Mid-Century Credenza", price: 850, sku: "FURN-STR-03", category: "Storage", group: "Sideboards", description: "A mid-century modern wooden credenza sideboard with beautiful grain details.", image: productCredenza },
  { id: "14", name: "Floating Wall Shelves (Set of 4)", price: 80, sku: "FURN-STR-04", category: "Storage", group: "Wall Shelving", description: "A set of minimalist floating wall shelves made of light wood.", image: productWallShelves },

  // Art & Decor
  { id: "7", name: "Abstract Warm Wall Art", price: 150, sku: "ART-WAL-01", category: "Art & Decor", group: "Wall Art", description: "A stunning piece of modern abstract wall art featuring warm tones.", image: productWallArt },
  { id: "8", name: "Minimalist Ceramic Vase", price: 50, sku: "ART-VAS-01", category: "Art & Decor", group: "Vases", description: "A beautifully textured minimalist ceramic vase, perfect for any surface.", image: productCeramicVase },
];
