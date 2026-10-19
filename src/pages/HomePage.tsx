import { Link } from "react-router-dom";
import { Sofa, PenTool, Users } from "lucide-react";
import heroImg from "@/assets/hero_furniture.png";
import { getProductGroups, slugify } from "@/data/products";

const featuredGroupNames = [
  "Accent Chairs",
  "Coffee Tables",
  "Dining Tables",
  "Bookshelves",
  "Wall Art",
  "Vases",
];

const featuredGroups = getProductGroups().filter((g) => featuredGroupNames.includes(g.group));

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-hero grid md:grid-cols-2 min-h-[480px]">
        <div className="flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-16 md:py-20">
          <p className="text-accent text-xs font-semibold tracking-widest uppercase mb-4">Crafted in Toronto, Canada</p>
          <h1 className="text-hero-foreground text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-[1.15] mb-5">
            Premium Custom Furniture & Art
          </h1>
          <p className="text-hero-muted text-sm sm:text-base leading-relaxed max-w-lg mb-8">
            Royal Ontario Handicrafts provides high-quality, modern custom furniture and art for residential and commercial spaces. We specialize in custom orders—email us to get your customized piece built exactly how you want it.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to="/products" className="border border-hero-foreground/30 text-hero-foreground px-5 py-2.5 text-sm font-medium rounded hover:bg-hero-foreground/5 transition-colors active:scale-[0.97]">
              View Products
            </Link>
            <Link to="/contact" className="bg-accent text-accent-foreground px-5 py-2.5 text-sm font-medium rounded hover:opacity-90 transition-opacity active:scale-[0.97]">
              Email for Custom Order
            </Link>
          </div>
        </div>
        <div className="hidden md:block">
          <img src={heroImg} alt="Modern beautiful living room with furniture" className="w-full h-full object-cover" />
        </div>
      </section>

      {/* 3 columns */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid md:grid-cols-3 gap-10">
          {[
            { icon: Sofa, title: "Modern Furniture", text: "Minimalist and highly aesthetic furniture crafted with care. From accent chairs to large dining tables." },
            { icon: PenTool, title: "Custom Orders", text: "We customize everything. Let us know your requirements and we'll build it to your exact specifications." },
            { icon: Users, title: "B2B & B2C", text: "We serve individuals, interior designers, and commercial spaces. Contact us for bulk pricing." },
          ].map((item) => (
            <div key={item.title} className="flex gap-3.5">
              <item.icon size={20} className="text-accent mt-0.5 shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground mb-1.5">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured */}
      <section className="bg-card py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-foreground">Featured Products</h2>
              <p className="text-sm text-muted-foreground mt-1">A sample of our handcrafted collection — view all products for everything.</p>
            </div>
            <Link to="/products" className="text-sm text-accent font-medium hover:underline hidden sm:block">View all →</Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredGroups.map((g) => (
              <Link key={g.group} to={`/products/${slugify(g.group)}`} className="bg-background rounded border border-border overflow-hidden group block hover:shadow-md transition-shadow">
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img src={g.image} alt={g.group} className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500" loading="lazy" />
                </div>
                <div className="p-4">
                  <span className="text-[11px] text-muted-foreground uppercase tracking-wide">{g.category}</span>
                  <h3 className="font-semibold text-sm text-foreground mt-1 leading-snug">{g.group}</h3>
                  <p className="text-accent font-bold text-sm mt-2">{g.priceRange}</p>
                  {g.variantCount > 1 && (
                    <p className="text-[11px] text-muted-foreground mt-1">{g.variantCount} variants</p>
                  )}
                </div>
              </Link>
            ))}
          </div>
          <Link to="/products" className="text-sm text-accent font-medium hover:underline mt-6 block sm:hidden">View all →</Link>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 text-center">
        <h2 className="text-xl font-bold text-foreground mb-2">Looking for a custom piece?</h2>
        <p className="text-sm text-muted-foreground mb-6">We customize our designs to your exact space. Email us and let's bring your vision to life.</p>
        <Link to="/contact" className="bg-accent text-accent-foreground px-6 py-2.5 text-sm font-medium rounded hover:opacity-90 transition-opacity active:scale-[0.97]">
          Email Us Now
        </Link>
      </section>
    </div>
  );
}
