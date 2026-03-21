import { useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { categories, getProductGroups, slugify } from "@/data/products";

export default function CatalogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const groups = getProductGroups(activeCategory, search);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
      <h1 className="text-2xl font-bold text-foreground mb-1">Product Catalog</h1>
      <p className="text-sm text-muted-foreground mb-6">Browse our full inventory. Contact us for exact quotes and availability.</p>

      {/* Search & filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="relative flex-1 max-w-sm">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search products or SKU..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-sm border border-border rounded bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-accent"
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`text-xs px-3 py-1.5 rounded border transition-colors active:scale-[0.97] ${
              activeCategory === cat
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-background text-muted-foreground border-border hover:border-foreground/30"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <p className="text-xs text-muted-foreground mb-4">{groups.length} product group{groups.length !== 1 ? "s" : ""}</p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {groups.map((g) => (
          <Link
            key={g.group}
            to={`/catalog/${slugify(g.group)}`}
            className="border border-border rounded bg-background overflow-hidden group block hover:shadow-md transition-shadow"
          >
            <div className="aspect-square overflow-hidden bg-muted">
              <img src={g.image} alt={g.group} className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500" loading="lazy" />
            </div>
            <div className="p-3.5">
              <span className="text-[10px] text-muted-foreground uppercase tracking-wide">{g.category}</span>
              <h3 className="font-medium text-sm text-foreground mt-1 leading-snug">{g.group}</h3>
              <p className="text-accent font-bold text-sm mt-1.5">{g.priceRange}</p>
              {g.variantCount > 1 && (
                <p className="text-[11px] text-muted-foreground mt-1">{g.variantCount} variants available</p>
              )}
              <span className="text-xs text-accent mt-2 inline-block">View details →</span>
            </div>
          </Link>
        ))}
      </div>

      {groups.length === 0 && (
        <div className="text-center py-16">
          <p className="text-muted-foreground text-sm">No products match your search.</p>
          <button onClick={() => { setSearch(""); setActiveCategory("All"); }} className="text-accent text-sm mt-2 hover:underline">Clear filters</button>
        </div>
      )}
    </div>
  );
}
