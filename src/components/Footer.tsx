import { Link } from "react-router-dom";
import logoImg from "@/assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <img src={logoImg} alt="Workpot INC. Logo" className="h-7 w-auto object-contain rounded bg-white" />
              <span className="font-bold text-base">Workpot INC.</span>
            </div>
            <p className="text-sm opacity-70 max-w-xs leading-relaxed">
              Premium custom furniture and modern art pieces crafted with precision for residential and commercial spaces.
            </p>
            <p className="text-xs text-accent mt-3 font-semibold">
              Flexible Worldwide Delivery • 100% Guarantee on all Refunds • Soft Cancellation Policy
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              Secure payments via Visa, Mastercard, Amex, PayPal & Bank Transfer.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-3">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/products" className="block text-sm opacity-70 hover:opacity-100 transition-opacity">Products</Link>
              <Link to="/about" className="block text-sm opacity-70 hover:opacity-100 transition-opacity">About</Link>
              <Link to="/contact" className="block text-sm opacity-70 hover:opacity-100 transition-opacity">Contact</Link>
              <Link to="/policies" className="block text-sm opacity-70 hover:opacity-100 transition-opacity">Policies & Guarantees</Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-3">Contact</h4>
            <div className="space-y-2 text-sm opacity-70">
              <p>845 Harrington Court, Unit B01-1, Burlington, Ontario, L7N3P3, Canada</p>
              <p>georgiakatrantzidis@gmail.com</p>
              <p>(416) 857-8831</p>
            </div>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 mt-10 pt-6 text-xs opacity-50">
          © {new Date().getFullYear()} Workpot INC. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
