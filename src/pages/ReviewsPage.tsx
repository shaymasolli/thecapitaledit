import { SiteLayout } from "@/components/SiteLayout";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { Star, ArrowRight } from "lucide-react";

const reviews = [
  { name: "Trading 212", verdict: "Best for beginners", rating: 4.5, pros: ["Commission-free", "Fractional shares", "Clean interface"], cons: ["Limited research tools", "No bonds"], readTime: "9 min" },
  { name: "DEGIRO", verdict: "Best low-cost broker", rating: 4.3, pros: ["Very low fees", "Wide market access", "Reliable"], cons: ["Basic interface", "No fractional shares"], readTime: "8 min" },
  { name: "Interactive Brokers", verdict: "Best for advanced investors", rating: 4.6, pros: ["Global market access", "Professional tools", "Competitive rates"], cons: ["Complex interface", "Steep learning curve"], readTime: "11 min" },
  { name: "Wahed Invest", verdict: "Best halal platform", rating: 4.2, pros: ["Fully Shariah-compliant", "Managed portfolios", "Easy to use"], cons: ["Higher fees", "Limited customisation"], readTime: "7 min" },
];

export default function ReviewsPage() {
  return (
    <SiteLayout>
      <section className="container py-20">
        <div className="max-w-2xl">
          <p className="font-sans text-xs uppercase tracking-widest text-accent mb-3">Reviews</p>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4">
            Honest Reviews
          </h1>
          <p className="text-body leading-relaxed">
            In-depth, independent reviews of brokers, investing platforms, and financial tools. No sponsored rankings — just real experience.
          </p>
        </div>
      </section>

      <section className="container pb-20">
        <div className="space-y-6">
          {reviews.map((review) => (
            <div key={review.name} className="border border-divider rounded-sm p-6 md:p-8 hover:border-accent transition-colors">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="font-serif text-xl font-semibold text-foreground">{review.name}</h3>
                  <p className="text-sm text-accent font-sans font-medium mt-1">{review.verdict}</p>
                </div>
                <div className="flex items-center gap-1.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`h-4 w-4 ${i < Math.floor(review.rating) ? "text-gold fill-gold" : "text-muted"}`} />
                  ))}
                  <span className="text-sm font-sans font-medium text-foreground ml-1">{review.rating}</span>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-xs font-sans uppercase tracking-wider text-caption mb-2">Pros</p>
                  <ul className="space-y-1">
                    {review.pros.map((pro) => (
                      <li key={pro} className="text-sm text-body flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-accent" /> {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-sans uppercase tracking-wider text-caption mb-2">Cons</p>
                  <ul className="space-y-1">
                    {review.cons.map((con) => (
                      <li key={con} className="text-sm text-body flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-muted-foreground" /> {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-divider">
                <span className="text-xs text-caption">{review.readTime} read</span>
                <span className="inline-flex items-center gap-1 text-xs text-accent font-sans uppercase tracking-wider cursor-pointer hover:underline">
                  Full review <ArrowRight className="h-3 w-3" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <NewsletterSignup />
    </SiteLayout>
  );
}
