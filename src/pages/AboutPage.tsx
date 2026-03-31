import { SiteLayout } from "@/components/SiteLayout";
import { NewsletterSignup } from "@/components/NewsletterSignup";

export default function AboutPage() {
  return (
    <SiteLayout>
      <article className="container max-w-2xl py-20">
        <p className="font-sans text-xs uppercase tracking-widest text-caption mb-4">About</p>
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-tight mb-8">
          Building the finance resource I wish I had
        </h1>

        <div className="prose-editorial space-y-6 text-body text-base leading-relaxed">
          <p>
            I started The Capital Edit because I couldn't find what I was looking for: a clear, intelligent, and values-aligned guide to personal finance — one that spoke to people like me.
          </p>
          <p>
            Growing up in Europe, I was surrounded by financial systems that felt opaque. When I moved countries to access better markets and opportunities, I realised how fragmented the world of cross-border finance really is. Opening a brokerage account was confusing. Tax implications were unclear. And finding Shariah-compliant or ethically aligned investment options? Nearly impossible.
          </p>

          <h2 className="font-serif text-xl font-semibold text-foreground mt-10 mb-4">The mistakes that taught me</h2>
          <p>
            I made every mistake in the book: investing without understanding fees, ignoring tax-efficient structures, chasing trends instead of building a strategy. Each mistake cost money — but more importantly, it cost time and confidence.
          </p>
          <p>
            These experiences became the foundation for The Capital Edit. Every article, guide, and review is born from real experience — not theoretical knowledge from a textbook.
          </p>

          <h2 className="font-serif text-xl font-semibold text-foreground mt-10 mb-4">The mission</h2>
          <p>
            The Capital Edit exists to simplify finance for people who care about where their money goes. Whether you follow halal investing principles, prefer ESG-screened funds, or simply want to build wealth without compromising your values — this platform is for you.
          </p>
          <p>
            We believe that ethical finance shouldn't be harder to understand than conventional finance. It should be clearer. And that's what we're building here.
          </p>

          <h2 className="font-serif text-xl font-semibold text-foreground mt-10 mb-4">What we stand for</h2>
          <ul className="list-none space-y-3 pl-0">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
              <span><strong className="text-foreground">Independence.</strong> No bank partnerships, no sponsored rankings. Just honest editorial.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
              <span><strong className="text-foreground">Clarity.</strong> Complex ideas, explained simply. No jargon, no gatekeeping.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
              <span><strong className="text-foreground">Inclusivity.</strong> Finance for everyone — regardless of background, faith, or geography.</span>
            </li>
          </ul>
        </div>

        <div className="mt-14">
          <NewsletterSignup variant="inline" />
        </div>
      </article>
    </SiteLayout>
  );
}
