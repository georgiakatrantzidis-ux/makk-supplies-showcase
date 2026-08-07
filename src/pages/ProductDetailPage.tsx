import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { getGroupBySlug } from "@/data/products";

export default function ProductDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const group = slug ? getGroupBySlug(slug) : undefined;

  if (!group) {
    return (
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 text-center">
        <p className="text-muted-foreground mb-4">Product not found.</p>
        <Link to="/catalog" className="text-accent text-sm hover:underline">← Back to catalog</Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
      <Link to="/catalog" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6">
        <ArrowLeft size={14} />
        Back to catalog
      </Link>

      {/* Header */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="aspect-square overflow-hidden bg-muted rounded">
          <img src={group.image} alt={group.group} className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col justify-center">
          <span className="text-xs text-muted-foreground uppercase tracking-wide">{group.category}</span>
          <h1 className="text-2xl font-bold text-foreground mt-2 mb-3">{group.group}</h1>
          <p className="text-accent font-bold text-xl mb-2">{group.priceRange}</p>
          <p className="text-sm text-muted-foreground mb-6">
            {group.variantCount} variant{group.variantCount !== 1 ? "s" : ""} available. Contact us for exact pricing and availability.
          </p>
          <Link
            to="/contact"
            className="bg-accent text-accent-foreground px-6 py-2.5 text-sm font-medium rounded hover:opacity-90 transition-opacity active:scale-[0.97] self-start"
          >
            Request a Quote
          </Link>
          <div className="mt-6 pt-6 border-t border-border space-y-2">
            <p className="text-sm font-semibold text-foreground">100% Guarantee on all products</p>
            <p className="text-xs text-muted-foreground">• Worldwide delivery available</p>
            <p className="text-xs text-muted-foreground">• Really flexible returns: 90 days for a full refund back</p>
            <p className="text-xs text-muted-foreground">• Soft cancellation policy (cancel anytime before shipping)</p>
            <p className="text-xs text-muted-foreground">• Secure payments via Visa, Mastercard & Bank Transfer</p>
            <Link to="/policies" className="text-xs text-accent hover:underline block mt-2">Read our full policies</Link>
          </div>
        </div>
      </div>

      {/* Variants table */}
      <h2 className="text-lg font-bold text-foreground mb-4">Available Variants</h2>
      <div className="border border-border rounded overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-muted/50 text-left">
                <th className="px-4 py-3 font-medium text-foreground">Product</th>
                <th className="px-4 py-3 font-medium text-foreground">SKU</th>
                <th className="px-4 py-3 font-medium text-foreground">Price</th>
                <th className="px-4 py-3 font-medium text-foreground hidden md:table-cell">Description</th>
                <th className="px-4 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {group.products.map((p, i) => (
                <tr key={p.id} className={i % 2 === 0 ? "bg-background" : "bg-muted/20"}>
                  <td className="px-4 py-3 text-foreground font-medium">{p.name}</td>
                  <td className="px-4 py-3 text-muted-foreground text-xs font-mono">{p.sku}</td>
                  <td className="px-4 py-3 text-accent font-bold whitespace-nowrap">
                    {"$" + p.price.toLocaleString("en-CA")}
                  </td>
                  <td className="px-4 py-3 text-muted-foreground text-xs leading-relaxed hidden md:table-cell max-w-xs">{p.description}</td>
                  <td className="px-4 py-3">
                    <Link to="/contact" className="text-xs text-accent hover:underline whitespace-nowrap">Inquire →</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
