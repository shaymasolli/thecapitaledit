import { SiteLayout } from "@/components/SiteLayout";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { ExternalLink, Star } from "lucide-react";

const tools = [
  { name: "Trading 212", category: "Broker", desc: "Commission-free investing with fractional shares. Great for European beginners.", rating: 4.5, href: "#" },
  { name: "DEGIRO", category: "Broker", desc: "Low-cost broker with access to global markets. Popular across Europe.", rating: 4.3, href: "#" },
  { name: "Interactive Brokers", category: "Broker", desc: "Professional-grade platform for serious investors. Excellent for expats.", rating: 4.6, href: "#" },
  { name: "Wahed Invest", category: "Halal Platform", desc: "Dedicated halal investing platform with diversified Shariah-compliant portfolios.", rating: 4.2, href: "#" },
  { name: "YNAB", category: "Budgeting", desc: "The gold standard for budgeting apps. Worth every cent for serious money management.", rating: 4.7, href: "#" },
  { name: "Wise", category: "Banking", desc: "The best way to hold and transfer money in multiple currencies as an expat.", rating: 4.8, href: "#" },
];

export default function ToolsPage() {
  return (
    <SiteLayout>
      <section className="container py-20">
        <div className="max-w-2xl">
          <p className="font-sans text-xs uppercase tracking-widest text-accent mb-3">Resources</p>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4">
            Tools & Resources
          </h1>
          <p className="text-body leading-relaxed">
            A curated collection of the financial tools, apps, and platforms we actually use and recommend. Every recommendation is based on personal experience and independent research.
          </p>
        </div>
      </section>

      <section className="container pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tools.map((tool) => (
            <div key={tool.name} className="border border-divider rounded-sm p-6 hover:border-accent transition-colors">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="font-sans text-xs uppercase tracking-widest text-accent mb-1">{tool.category}</p>
                  <h3 className="font-serif text-lg font-semibold text-foreground">{tool.name}</h3>
                </div>
                <div className="flex items-center gap-1 text-gold">
                  <Star className="h-3.5 w-3.5 fill-current" />
                  <span className="text-xs font-sans font-medium">{tool.rating}</span>
                </div>
              </div>
              <p className="text-sm text-caption leading-relaxed mb-4">{tool.desc}</p>
              <a href={tool.href} className="inline-flex items-center gap-1 text-xs text-accent font-sans uppercase tracking-wider hover:underline">
                Learn more <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          ))}
        </div>
        <p className="text-xs text-caption mt-8 text-center">
          Some links may be affiliate links. We only recommend products we genuinely use and trust. See our <a href="/disclaimer" className="underline">disclaimer</a> for details.
        </p>
      </section>

      <NewsletterSignup />
    </SiteLayout>
  );
}
