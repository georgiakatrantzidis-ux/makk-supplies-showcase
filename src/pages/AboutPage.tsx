import heroImg from "@/assets/hero_furniture.png";

export default function AboutPage() {
  return (
    <div>
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <h1 className="text-2xl font-bold text-foreground mb-4">About Workpot INC.</h1>
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            <p>
              Workpot INC. is a premium custom furniture and art studio based in Toronto, Canada. We design and build modern, minimalist pieces for residential and commercial spaces across North America.
            </p>
            <p>
              Our collection includes solid wood dining tables, ergonomic accent chairs, custom storage solutions, and curated modern art. Every piece is built with attention to detail, using high-quality materials to ensure longevity and timeless aesthetics.
            </p>
            <p>
              We believe in the power of custom design. Whether you need a specific dimension for a coffee table, a unique finish for a bookshelf, or an entirely bespoke piece of furniture, our team is ready to bring your vision to life. Email us for custom orders, and we'll work with you every step of the way.
            </p>
            <p>
              From furnishing a cozy apartment to outfitting a large commercial space, Workpot INC. delivers furniture and art that transforms environments.
            </p>
          </div>
          <div className="rounded overflow-hidden">
            <img src={heroImg} alt="Beautiful modern furniture" className="w-full h-64 md:h-80 object-cover rounded" />
          </div>
        </div>
      </section>

      <section className="bg-card py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-foreground mb-6">Why Work With Us</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Custom Orders", desc: "We customize everything. Tell us your dimensions, materials, and vision, and we'll build it." },
              { title: "Premium Materials", desc: "We source only the best solid woods, premium upholstery, and durable finishes." },
              { title: "Dedicated Support", desc: "Work directly with our design team from the first sketch to final delivery." },
              { title: "Trade Discounts", desc: "Special pricing available for interior designers, architects, and developers." },
              { title: "White Glove Delivery", desc: "Professional delivery and assembly services for all our furniture pieces." },
              { title: "Built to Last", desc: "Quality craftsmanship that ensures your furniture stands the test of time." },
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
