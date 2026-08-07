import { CheckCircle } from "lucide-react";

export default function PoliciesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-3xl font-bold text-foreground mb-8">Our Policies</h1>
      
      <div className="space-y-12">
        <section>
          <div className="flex items-center gap-3 mb-4">
            <CheckCircle className="text-accent" />
            <h2 className="text-2xl font-semibold text-foreground">100% Guarantee & Flexible Returns</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-4">
            We offer a 100% guarantee on all our products. We want you to be completely in love with your new custom furniture and art. That's why we are incredibly flexible with our returns. 
          </p>
          <ul className="list-disc pl-5 text-muted-foreground space-y-2">
            <li><strong>90-Day Return Window:</strong> You have 90 days from the date of delivery to return any item, no questions asked.</li>
            <li><strong>Full Refund Back:</strong> If you are not satisfied, we will issue a full 100% refund to your original payment method.</li>
            <li><strong>No Restocking Fees:</strong> We do not charge any hidden fees for returning your items.</li>
          </ul>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4">
            <CheckCircle className="text-accent" />
            <h2 className="text-2xl font-semibold text-foreground">Soft Cancellation Policy</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-4">
            We understand that plans change and sometimes you need to cancel an order. Our cancellation policy is very soft and accommodating:
          </p>
          <ul className="list-disc pl-5 text-muted-foreground space-y-2">
            <li>Cancel any time before the item ships for a full, immediate refund.</li>
            <li>Even if it's a custom order, we will work with you to find a flexible resolution if you need to cancel mid-production.</li>
          </ul>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4">
            <CheckCircle className="text-accent" />
            <h2 className="text-2xl font-semibold text-foreground">Worldwide Delivery</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            We offer flexible, worldwide delivery. No matter where your residential or commercial space is located, we guarantee safe and timely shipping of your custom pieces straight to your door.
          </p>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4">
            <CheckCircle className="text-accent" />
            <h2 className="text-2xl font-semibold text-foreground">Accepted Payment Methods</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            We accept all major payment methods to ensure a smooth and secure checkout process for our worldwide customers. You can pay securely via <strong>Visa, Mastercard, American Express, Discover, PayPal, and direct Bank Transfers.</strong> We also offer flexible financing and invoice options for our trade accounts.
          </p>
        </section>
      </div>
    </div>
  );
}
