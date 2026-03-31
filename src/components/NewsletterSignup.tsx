import { useState } from "react";
import { Button } from "@/components/ui/button";

interface NewsletterSignupProps {
  variant?: "default" | "hero" | "inline";
}

export function NewsletterSignup({ variant = "default" }: NewsletterSignupProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className={`text-center ${variant === "hero" ? "py-8" : "py-4"}`}>
        <p className="font-serif text-lg text-foreground">Welcome to The Capital Edit.</p>
        <p className="text-sm text-caption mt-1">Check your inbox to confirm your subscription.</p>
      </div>
    );
  }

  if (variant === "hero") {
    return (
      <div className="bg-accent text-accent-foreground py-16 px-6">
        <div className="max-w-xl mx-auto text-center">
          <h3 className="font-serif text-2xl md:text-3xl font-semibold mb-3">
            The Capital Edit Weekly
          </h3>
          <p className="text-accent-foreground/80 text-sm mb-6 max-w-md mx-auto">
            One email a week. No noise. Just the clearest thinking on ethical investing, wealth building, and cross-border finance.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="flex-1 px-4 py-3 bg-accent-foreground/10 border border-accent-foreground/20 text-accent-foreground placeholder:text-accent-foreground/50 text-sm font-sans rounded-sm outline-none focus:border-accent-foreground/40"
            />
            <Button type="submit" className="bg-accent-foreground text-accent hover:bg-accent-foreground/90 font-sans uppercase text-xs tracking-widest px-6 py-3 h-auto rounded-sm">
              Subscribe
            </Button>
          </form>
          <p className="text-xs text-accent-foreground/50 mt-4">
            Join 5,000+ professionals. Unsubscribe anytime.
          </p>
        </div>
      </div>
    );
  }

  if (variant === "inline") {
    return (
      <div className="border border-divider bg-card p-6 rounded-sm">
        <h4 className="font-serif text-lg font-semibold text-foreground mb-1">Stay informed</h4>
        <p className="text-sm text-caption mb-4">Weekly insights on ethical & halal finance.</p>
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            className="flex-1 px-3 py-2 border border-input bg-background text-sm font-sans rounded-sm outline-none focus:ring-1 focus:ring-ring"
          />
          <Button type="submit" variant="editorial" size="sm">Join</Button>
        </form>
      </div>
    );
  }

  return (
    <section className="bg-secondary py-16">
      <div className="container max-w-2xl text-center">
        <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">
          Join The Capital Edit
        </h3>
        <p className="text-sm text-caption mb-6">
          Weekly insights on halal investing, FIRE strategies, and cross-border finance — no fluff.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            className="flex-1 px-4 py-3 border border-input bg-background text-sm font-sans rounded-sm outline-none focus:ring-1 focus:ring-ring"
          />
          <Button type="submit" variant="editorial">Subscribe</Button>
        </form>
      </div>
    </section>
  );
}
