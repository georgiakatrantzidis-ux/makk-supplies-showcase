import { useState } from "react";
import { MapPin, Mail, Phone } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="text-2xl font-bold text-foreground mb-1">Contact Us</h1>
      <p className="text-sm text-muted-foreground mb-8">Get a quote, ask about a product, or set up a wholesale account.</p>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Form */}
        <div>
          {submitted ? (
            <div className="bg-card border border-border rounded p-8 text-center">
              <p className="text-foreground font-semibold mb-2">Thank you for reaching out.</p>
              <p className="text-sm text-muted-foreground">We'll get back to you within 1-2 business days.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-foreground mb-1">Name</label>
                  <input required className="w-full px-3 py-2 text-sm border border-border rounded bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-accent" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-foreground mb-1">Company</label>
                  <input className="w-full px-3 py-2 text-sm border border-border rounded bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-accent" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-foreground mb-1">Email</label>
                <input required type="email" className="w-full px-3 py-2 text-sm border border-border rounded bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-accent" />
              </div>
              <div>
                <label className="block text-xs font-medium text-foreground mb-1">Phone</label>
                <input type="tel" className="w-full px-3 py-2 text-sm border border-border rounded bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-accent" />
              </div>
              <div>
                <label className="block text-xs font-medium text-foreground mb-1">Message</label>
                <textarea required rows={5} className="w-full px-3 py-2 text-sm border border-border rounded bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-accent resize-none" placeholder="Tell us what you're looking for — products, quantities, project details..." />
              </div>
              <button type="submit" className="bg-accent text-accent-foreground px-6 py-2.5 text-sm font-medium rounded hover:opacity-90 transition-opacity active:scale-[0.97]">
                Send Message
              </button>
            </form>
          )}
        </div>

        {/* Info */}
        <div className="space-y-6">
          <div>
            <h2 className="font-semibold text-foreground mb-4">Get in Touch</h2>
            <div className="space-y-4">
              {[
                { icon: MapPin, label: "845 Harrington Court, Unit B01-1, Burlington, Ontario, L7N3P3, Canada" },
                { icon: Mail, label: "info@makksupplies.com" },
                { icon: Phone, label: "(416) 857-8831" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <item.icon size={16} className="text-accent shrink-0" />
                  <span className="text-sm text-muted-foreground">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-card border border-border rounded p-5">
            <h3 className="font-semibold text-sm text-foreground mb-2">Business Hours</h3>
            <div className="text-xs text-muted-foreground space-y-1">
              <p>Monday – Friday: 7:00 AM – 5:00 PM</p>
              <p>Saturday: 8:00 AM – 1:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
          <div className="bg-card border border-border rounded p-5">
            <h3 className="font-semibold text-sm text-foreground mb-2">Wholesale Accounts</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              For ongoing pricing and priority fulfillment, contact us to set up a wholesale account. Volume discounts available for regular orders.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
