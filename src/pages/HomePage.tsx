import { Link } from "react-router-dom";
import { SiteLayout } from "@/components/SiteLayout";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { ArrowRight, Globe, Shield, TrendingUp, BookOpen, Landmark, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-desk.jpg";

const categories = [
  { title: "Finance Basics", desc: "Build your foundation. Budgeting, saving, and investing 101.", icon: BookOpen, href: "/finance-basics" },
  { title: "Halal Investing", desc: "Shariah-compliant strategies for the modern investor.", icon: Shield, href: "/halal-investing" },
  { title: "Ethical Investing", desc: "ESG, impact investing, and values-aligned portfolios.", icon: Globe, href: "/ethical-investing" },
  { title: "Expat Finance", desc: "Cross-border banking, taxes, and wealth management.", icon: Landmark, href: "/expat-finance" },
  { title: "FIRE & Wealth", desc: "Financial independence and long-term wealth strategies.", icon: Flame, href: "/fire-wealth" },
  { title: "Tools & Reviews", desc: "Curated reviews of brokers, apps, and financial tools.", icon: TrendingUp, href: "/tools" },
];

const featuredArticles = [
  { title: "The Complete Guide to Halal Investing in Europe", category: "Halal Investing", readTime: "12 min", href: "/article/complete-guide-halal-investing-europe" },
  { title: "How I Built a €100K Portfolio as an Expat", category: "Expat Finance", readTime: "8 min", href: "/article/100k-portfolio-expat" },
  { title: "FIRE Movement: Can You Retire Early Ethically?", category: "FIRE & Wealth", readTime: "10 min", href: "/article/fire-retire-early-ethically" },
];

const editorsPickArticles = [
  { title: "Trading 212 vs DEGIRO: Which Is Better for European Investors?", category: "Reviews", readTime: "9 min", href: "/article/trading-212-vs-degiro" },
  { title: "The Beginner's Guide to ESG Investing", category: "Ethical Investing", readTime: "7 min", href: "/article/beginners-guide-esg-investing" },
  { title: "5 Budgeting Methods That Actually Work", category: "Finance Basics", readTime: "6 min", href: "/article/budgeting-methods-that-work" },
  { title: "Understanding Zakat on Investments", category: "Halal Investing", readTime: "5 min", href: "/halal-investing" },
];

export default function HomePage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/90 to-background" />
        </div>
        <div className="relative container py-24 md:py-32 text-center">
          <p className="font-sans text-xs uppercase tracking-[0.3em] text-caption mb-4 animate-fade-in">
            Ethical · Halal · Independent
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.1s" }}>
            The global guide to ethical & halal personal finance
          </h1>
          <p className="mt-6 text-body text-base md:text-lg max-w-xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Clear, independent thinking on investing, wealth building, and cross-border finance — for the modern professional.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Link to="/finance-basics">
              <Button variant="editorial" size="lg">Start Learning</Button>
            </Link>
            <Link to="/newsletter">
              <Button variant="outline-editorial" size="lg">Subscribe Free</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Pathways */}
      <section className="bg-secondary py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { q: "New to investing?", desc: "Start with the basics", href: "/finance-basics" },
              { q: "Want halal investing?", desc: "Shariah-compliant guides", href: "/halal-investing" },
              { q: "Living abroad?", desc: "Expat finance strategies", href: "/expat-finance" },
            ].map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="group flex items-center justify-between p-5 border border-divider bg-card hover:border-accent transition-colors rounded-sm"
              >
                <div>
                  <p className="font-serif text-sm font-semibold text-foreground">{item.q}</p>
                  <p className="text-xs text-caption mt-1">{item.desc}</p>
                </div>
                <ArrowRight className="h-4 w-4 text-caption group-hover:text-accent transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="container py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="font-sans text-xs uppercase tracking-widest text-caption mb-2">Featured</p>
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground">Latest Guides</h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredArticles.map((article, i) => (
            <Link key={i} to={article.href} className="group">
              <div className="aspect-[4/3] bg-muted rounded-sm mb-4 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-muted to-secondary group-hover:scale-105 transition-transform duration-500" />
              </div>
              <p className="font-sans text-xs uppercase tracking-widest text-accent mb-2">{article.category}</p>
              <h3 className="font-serif text-lg font-semibold text-foreground group-hover:text-accent transition-colors leading-snug">
                {article.title}
              </h3>
              <p className="text-xs text-caption mt-2">{article.readTime} read</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="bg-secondary py-20">
        <div className="container">
          <div className="text-center mb-12">
            <p className="font-sans text-xs uppercase tracking-widest text-caption mb-2">Explore</p>
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground">Six Pillars of Financial Clarity</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <Link
                key={cat.href}
                to={cat.href}
                className="group p-6 bg-card border border-divider hover:border-accent rounded-sm transition-all hover:shadow-sm"
              >
                <cat.icon className="h-5 w-5 text-accent mb-4" />
                <h3 className="font-serif text-base font-semibold text-foreground mb-1">{cat.title}</h3>
                <p className="text-sm text-caption leading-relaxed">{cat.desc}</p>
                <span className="inline-flex items-center gap-1 mt-3 text-xs text-accent font-sans uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                  Explore <ArrowRight className="h-3 w-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Editor's Picks */}
      <section className="container py-20">
        <div className="mb-10">
          <p className="font-sans text-xs uppercase tracking-widest text-caption mb-2">Editor's Picks</p>
          <h2 className="font-serif text-2xl font-semibold text-foreground">Worth Your Time</h2>
        </div>
        <div className="divide-y divide-divider">
          {editorsPickArticles.map((article, i) => (
            <Link key={i} to={article.href} className="group flex items-center justify-between py-5">
              <div className="flex items-baseline gap-4">
                <span className="font-serif text-2xl text-muted-foreground/30 font-bold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-serif text-base font-semibold text-foreground group-hover:text-accent transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-xs text-caption mt-1">
                    {article.category} · {article.readTime} read
                  </p>
                </div>
              </div>
              <ArrowRight className="h-4 w-4 text-caption group-hover:text-accent transition-colors hidden sm:block" />
            </Link>
          ))}
        </div>
      </section>

      {/* Trust Signals */}
      <section className="border-t border-divider bg-background">
        <div className="container py-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="font-serif text-lg font-semibold text-foreground">Independent</p>
              <p className="text-sm text-caption mt-1">No bank sponsors. No bias. Pure editorial integrity.</p>
            </div>
            <div>
              <p className="font-serif text-lg font-semibold text-foreground">EU-Based</p>
              <p className="text-sm text-caption mt-1">Written from Europe, for global professionals.</p>
            </div>
            <div>
              <p className="font-serif text-lg font-semibold text-foreground">Values-Driven</p>
              <p className="text-sm text-caption mt-1">Ethical and halal finance, without compromise.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <NewsletterSignup variant="hero" />
    </SiteLayout>
  );
}
