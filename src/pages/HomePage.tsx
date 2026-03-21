import { Link } from "react-router-dom";
import { Zap, HardHat, Users } from "lucide-react";
import heroImg from "@/assets/hero-construction.jpg";
import productCopperWire from "@/assets/product-copper-wire.jpg";
import productGenerator from "@/assets/product-generator.jpg";
import productBreakerPanel from "@/assets/product-breaker-panel.jpg";
import productEvCharger from "@/assets/product-ev-charger.jpg";
import productFireAlarm from "@/assets/product-fire-alarm.jpg";
import productConnectorsFittings from "@/assets/product-connectors-fittings.jpg";

const featured = [
  { name: "Bare Copper Grounding Wire — 4/0 AWG (5,000 ft)", price: "$24,500", category: "Wire & Cable", image: productCopperWire },
  { name: "Diesel Generator 100kW — Industrial Standby", price: "$32,000", category: "Generators", image: productGenerator },
  { name: "400A Main Lug Panel — 84 Circuit", price: "$16,200", category: "Distribution Equipment", image: productBreakerPanel },
  { name: "DC Fast Charger — 60kW CCS/CHAdeMO", price: "$42,000", category: "EV Chargers", image: productEvCharger },
  { name: "Addressable Fire Alarm Panel — 4 Loop", price: "$6,800", category: "Fire Alarm", image: productFireAlarm },
  { name: "Cable Gland Kit — Assorted (100 pcs)", price: "$2,200", category: "Connectors & Fittings", image: productConnectorsFittings },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-hero grid md:grid-cols-2 min-h-[480px]">
        <div className="flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-16 md:py-20">
          <p className="text-accent text-xs font-semibold tracking-widest uppercase mb-4">Based in Toronto, Canada</p>
          <h1 className="text-hero-foreground text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-[1.15] mb-5">
            Premium Electrical Supplies & Building Materials
          </h1>
          <p className="text-hero-muted text-sm sm:text-base leading-relaxed max-w-lg mb-8">
            Makk Supplies provides high-grade materials for commercial construction and industrial electrical projects. Wire & cable, generators, fire alarm systems, EV chargers, and more.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to="/catalog" className="border border-hero-foreground/30 text-hero-foreground px-5 py-2.5 text-sm font-medium rounded hover:bg-hero-foreground/5 transition-colors active:scale-[0.97]">
              View Catalog
            </Link>
            <Link to="/contact" className="bg-accent text-accent-foreground px-5 py-2.5 text-sm font-medium rounded hover:opacity-90 transition-opacity active:scale-[0.97]">
              Request a Quote
            </Link>
          </div>
        </div>
        <div className="hidden md:block">
          <img src={heroImg} alt="Steel rebar bundles at warehouse" className="w-full h-full object-cover" />
        </div>
      </section>

      {/* 3 columns */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid md:grid-cols-3 gap-10">
          {[
            { icon: Zap, title: "Electrical Supplies", text: "Copper wire, distribution panels, fire alarm systems, connectors & fittings, conduits, emergency lighting, and more." },
            { icon: HardHat, title: "Specialty Equipment", text: "Diesel & gas generators, EV chargers, heating & ventilation units, transformers, and motor control centres." },
            { icon: Users, title: "B2B Only", text: "We work directly with contractors, developers, and project managers. Contact us to establish an account and receive pricing." },
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
              <h2 className="text-2xl font-bold text-foreground">Featured Items</h2>
              <p className="text-sm text-muted-foreground mt-1">A sample of what we carry — view the full catalog for all 50 products.</p>
            </div>
            <Link to="/catalog" className="text-sm text-accent font-medium hover:underline hidden sm:block">View all →</Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featured.map((item) => (
              <div key={item.name} className="bg-background rounded border border-border overflow-hidden group">
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500" loading="lazy" />
                </div>
                <div className="p-4">
                  <span className="text-[11px] text-muted-foreground uppercase tracking-wide">{item.category}</span>
                  <h3 className="font-semibold text-sm text-foreground mt-1 leading-snug">{item.name}</h3>
                  <p className="text-accent font-bold text-sm mt-2">{item.price}</p>
                  <Link to="/contact" className="text-xs text-muted-foreground hover:text-accent mt-3 inline-block transition-colors">
                    Inquire about this item →
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <Link to="/catalog" className="text-sm text-accent font-medium hover:underline mt-6 block sm:hidden">View all →</Link>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 text-center">
        <h2 className="text-xl font-bold text-foreground mb-2">Looking for something specific?</h2>
        <p className="text-sm text-muted-foreground mb-6">We handle custom sourcing. Reach out and we'll get you what you need.</p>
        <Link to="/contact" className="bg-accent text-accent-foreground px-6 py-2.5 text-sm font-medium rounded hover:opacity-90 transition-opacity active:scale-[0.97]">
          Get in Touch
        </Link>
      </section>
    </div>
  );
}
