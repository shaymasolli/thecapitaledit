import { Link } from "react-router-dom";
import { SiteLayout } from "@/components/SiteLayout";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { ArrowRight } from "lucide-react";

interface CategoryPageProps {
  title: string;
  subtitle: string;
  description: string;
  articles: { title: string; excerpt: string; readTime: string; slug?: string }[];
}

export function CategoryPage({ title, subtitle, description, articles }: CategoryPageProps) {
  return (
    <SiteLayout>
      <section className="container py-20">
        <div className="max-w-2xl">
          <p className="font-sans text-xs uppercase tracking-widest text-accent mb-3">{subtitle}</p>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4">
            {title}
          </h1>
          <p className="text-body leading-relaxed">{description}</p>
        </div>
      </section>

      <section className="container pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((article, i) => {
            const Wrapper = article.slug ? Link : "div";
            const wrapperProps = article.slug ? { to: `/article/${article.slug}` } : {};
            return (
              <Wrapper key={i} {...(wrapperProps as any)} className="group border border-divider rounded-sm p-6 hover:border-accent transition-colors">
                <div className="aspect-[3/1] bg-muted rounded-sm mb-4" />
                <h3 className="font-serif text-lg font-semibold text-foreground group-hover:text-accent transition-colors mb-2">
                  {article.title}
                </h3>
                <p className="text-sm text-caption leading-relaxed mb-3">{article.excerpt}</p>
                <span className="inline-flex items-center gap-1 text-xs text-accent font-sans uppercase tracking-wider">
                  Read article <ArrowRight className="h-3 w-3" />
                </span>
                <p className="text-xs text-caption mt-2">{article.readTime} read</p>
              </Wrapper>
            );
          })}
        </div>
      </section>

      <NewsletterSignup />
    </SiteLayout>
  );
}

// ---- Individual category pages ----

export function FinanceBasicsPage() {
  return (
    <CategoryPage
      title="Finance Basics"
      subtitle="Foundation"
      description="Master the fundamentals of personal finance. From budgeting and saving to understanding compound interest — everything you need to build a solid financial foundation."
      articles={[
        { title: "The Complete Beginner's Guide to Personal Finance", excerpt: "Everything you need to know about managing your money, from budgeting to your first investment.", readTime: "15 min" },
        { title: "5 Budgeting Methods That Actually Work", excerpt: "Find the budgeting approach that fits your lifestyle — not the other way around.", readTime: "6 min", slug: "budgeting-methods-that-work" },
        { title: "Emergency Funds: How Much Is Enough?", excerpt: "The definitive guide to building your financial safety net as a European professional.", readTime: "5 min" },
        { title: "Understanding Compound Interest", excerpt: "Why Einstein called it the eighth wonder of the world — and how to make it work for you.", readTime: "4 min" },
      ]}
    />
  );
}

export function HalalInvestingPage() {
  return (
    <CategoryPage
      title="Halal Investing"
      subtitle="Shariah-Compliant Finance"
      description="Navigate the world of halal investing with confidence. Comprehensive guides on Shariah-compliant ETFs, stocks, and wealth-building strategies for Muslim investors."
      articles={[
        { title: "The Complete Guide to Halal Investing in Europe", excerpt: "Everything you need to know about building a Shariah-compliant portfolio in the European market.", readTime: "12 min", slug: "complete-guide-halal-investing-europe" },
        { title: "Halal ETFs: A Comprehensive Comparison", excerpt: "Comparing the top Shariah-compliant ETFs available to European investors.", readTime: "10 min" },
        { title: "Understanding Zakat on Investments", excerpt: "How to calculate and pay Zakat on stocks, ETFs, and other investment assets.", readTime: "5 min" },
        { title: "Is Cryptocurrency Halal? A Balanced Analysis", excerpt: "Examining crypto through the lens of Islamic finance principles.", readTime: "8 min" },
      ]}
    />
  );
}

export function EthicalInvestingPage() {
  return (
    <CategoryPage
      title="Ethical Investing"
      subtitle="Values-Aligned Finance"
      description="Invest according to your values. Explore ESG investing, impact funds, and strategies for building wealth while making a positive difference."
      articles={[
        { title: "The Beginner's Guide to ESG Investing", excerpt: "What ESG really means, and how to build a portfolio that reflects your values.", readTime: "7 min", slug: "beginners-guide-esg-investing" },
        { title: "Impact Investing vs ESG: What's the Difference?", excerpt: "Understanding the spectrum of values-aligned investing approaches.", readTime: "6 min" },
        { title: "Top ESG ETFs for European Investors", excerpt: "A curated selection of the best environmentally and socially responsible funds.", readTime: "9 min" },
        { title: "Greenwashing: How to Spot It", excerpt: "Not all 'green' funds are truly ethical. Here's how to see through the marketing.", readTime: "5 min" },
      ]}
    />
  );
}

export function ExpatFinancePage() {
  return (
    <CategoryPage
      title="Expat Finance"
      subtitle="Cross-Border Wealth"
      description="Financial strategies for professionals living abroad. Covering cross-border banking, international tax planning, and building wealth as an expat in Europe."
      articles={[
        { title: "How I Built a €100K Portfolio as an Expat", excerpt: "A personal journey through the challenges and opportunities of investing while living abroad.", readTime: "8 min", slug: "100k-portfolio-expat" },
        { title: "The Expat's Guide to European Brokerage Accounts", excerpt: "Which brokers accept expats, and what to consider when choosing one.", readTime: "7 min" },
        { title: "Cross-Border Tax Planning for Beginners", excerpt: "Navigating tax obligations when you live in one country and invest in another.", readTime: "10 min" },
        { title: "Currency Risk: What Expats Need to Know", excerpt: "How exchange rate fluctuations affect your investments and how to manage them.", readTime: "6 min" },
      ]}
    />
  );
}

export function FireWealthPage() {
  return (
    <CategoryPage
      title="FIRE & Wealth Building"
      subtitle="Financial Independence"
      description="Strategies for achieving financial independence and retiring early — the ethical way. Long-term wealth building, savings rates, and FIRE principles for European professionals."
      articles={[
        { title: "FIRE Movement: Can You Retire Early Ethically?", excerpt: "Exploring whether financial independence is achievable while investing according to your values.", readTime: "10 min", slug: "fire-retire-early-ethically" },
        { title: "Your FIRE Number: How to Calculate It", excerpt: "A practical guide to determining how much you actually need to retire early.", readTime: "7 min" },
        { title: "Coast FIRE vs Lean FIRE vs Fat FIRE", excerpt: "Understanding the different flavours of financial independence and which suits you.", readTime: "6 min" },
        { title: "Building Passive Income Streams in Europe", excerpt: "Practical strategies for generating income beyond your primary salary.", readTime: "9 min" },
      ]}
    />
  );
}
