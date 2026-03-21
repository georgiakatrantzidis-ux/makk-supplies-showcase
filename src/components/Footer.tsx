import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-7 h-7 rounded bg-accent flex items-center justify-center text-accent-foreground font-bold text-xs">M</span>
              <span className="font-bold text-base">MAKK SUPPLIES</span>
            </div>
            <p className="text-sm opacity-70 max-w-xs leading-relaxed">
              Premium building materials and electrical supplies for commercial and industrial projects across Canada.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-3">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/catalog" className="block text-sm opacity-70 hover:opacity-100 transition-opacity">Catalog</Link>
              <Link to="/about" className="block text-sm opacity-70 hover:opacity-100 transition-opacity">About</Link>
              <Link to="/contact" className="block text-sm opacity-70 hover:opacity-100 transition-opacity">Contact</Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-3">Contact</h4>
            <div className="space-y-2 text-sm opacity-70">
              <p>845 Harrington Court, Unit B01-1, Burlington, Ontario, L7N3P3, Canada</p>
              <p>info@makksupplies.com</p>
              <p>(416) 857-8831</p>
            </div>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 mt-10 pt-6 text-xs opacity-50">
          © {new Date().getFullYear()} MAKK SUPPLIES. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
