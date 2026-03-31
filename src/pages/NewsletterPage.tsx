import { SiteLayout } from "@/components/SiteLayout";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { CheckCircle } from "lucide-react";

export default function NewsletterPage() {
  return (
    <SiteLayout>
      <section className="container max-w-2xl py-20 text-center">
        <p className="font-sans text-xs uppercase tracking-widest text-accent mb-4">Newsletter</p>
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4">
          The Capital Edit Weekly
        </h1>
        <p className="text-body text-base leading-relaxed mb-10 max-w-lg mx-auto">
          One email a week with the clearest thinking on ethical investing, halal finance, and cross-border wealth building. Written for busy professionals who care about where their money goes.
        </p>

        <div className="text-left space-y-4 mb-10 max-w-md mx-auto">
          {[
            "Weekly market insights with an ethical lens",
            "New halal & ESG investment opportunities",
            "Expat finance strategies and tax tips",
            "Curated tools and broker updates",
            "Exclusive guides and early access content",
          ].map((item) => (
            <div key={item} className="flex items-center gap-3">
              <CheckCircle className="h-4 w-4 text-accent shrink-0" />
              <span className="text-sm text-body">{item}</span>
            </div>
          ))}
        </div>

        <NewsletterSignup variant="inline" />

        <p className="text-xs text-caption mt-8">
          Join 5,000+ subscribers. Free forever. Unsubscribe in one click.
        </p>
      </section>
    </SiteLayout>
  );
}
