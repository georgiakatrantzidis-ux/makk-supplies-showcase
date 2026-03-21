import heroImg from "@/assets/hero-construction.jpg";

export default function AboutPage() {
  return (
    <div>
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <h1 className="text-2xl font-bold text-foreground mb-4">About Makk Supplies</h1>
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            <p>
              Makk Supplies is a Toronto-based distributor of premium electrical supplies and building materials. We serve contractors, developers, project managers, and individual customers across Ontario and beyond.
            </p>
            <p>
              Our inventory includes NMD90 copper wire bundles, industrial generators, fire alarm systems, EV chargers, LED lighting, breaker panels, conduit, heating & ventilation equipment — all sourced from trusted manufacturers and available in any quantity.
            </p>
            <p>
              We serve both businesses and individuals. Whether you need a single item or a bulk order, contact us for pricing and we'll work with you to meet your project specifications, timelines, and budgets.
            </p>
            <p>
              Whether you're building a high-rise, renovating a commercial space, or managing a large-scale industrial project — we have the materials and the expertise to support your work.
            </p>
          </div>
          <div className="rounded overflow-hidden">
            <img src={heroImg} alt="Construction materials warehouse" className="w-full h-64 md:h-80 object-cover rounded" />
          </div>
        </div>
      </section>

      <section className="bg-card py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-foreground mb-6">Why Work With Us</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Bulk Pricing", desc: "Competitive rates on large orders. We pass supplier savings directly to you." },
              { title: "Reliable Sourcing", desc: "Established relationships with manufacturers across North America and Europe." },
              { title: "Dedicated Support", desc: "One point of contact for your entire order — from quote to delivery." },
              { title: "Custom Orders", desc: "Can't find what you need? We source specialty items on request." },
              { title: "Fast Delivery", desc: "In-stock items ship within 2-3 business days across Ontario." },
              { title: "CSA & ULC Certified", desc: "All electrical products meet Canadian safety standards." },
            ].map((item) => (
              <div key={item.title} className="p-5 bg-background rounded border border-border">
                <h3 className="font-semibold text-sm text-foreground mb-1.5">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
