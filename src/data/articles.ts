export interface ArticleSection {
  id: string;
  title: string;
  content: string;
}

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  categorySlug: string;
  readTime: string;
  publishedDate: string;
  updatedDate?: string;
  sections: ArticleSection[];
  relatedSlugs?: string[];
}

export const authorInfo = {
  name: "Youssef El-Amrani",
  role: "Founder & Editor",
  bio: "Former fintech analyst turned independent writer. After moving across three countries to access better markets, Youssef now simplifies ethical and halal finance for European professionals. His work has been referenced by leading finance publications across Europe.",
  credentials: ["CFA Level II Candidate", "7+ years in European fintech", "Based in the Netherlands"],
};

export const articles: Article[] = [
  {
    slug: "complete-guide-halal-investing-europe",
    title: "The Complete Guide to Halal Investing in Europe",
    excerpt: "Everything you need to know about building a Shariah-compliant portfolio in the European market.",
    category: "Halal Investing",
    categorySlug: "/halal-investing",
    readTime: "12 min",
    publishedDate: "2026-02-15",
    updatedDate: "2026-03-20",
    sections: [
      {
        id: "what-is-halal-investing",
        title: "What Is Halal Investing?",
        content: "Halal investing refers to investment practices that comply with Islamic law (Shariah). At its core, it avoids interest (riba), excessive uncertainty (gharar), and investments in industries considered harmful — such as alcohol, gambling, tobacco, and conventional financial services.\n\nFor European Muslims, this creates a unique challenge: most mainstream investment products aren't designed with these principles in mind. But the landscape is changing rapidly, with new Shariah-compliant ETFs, robo-advisors, and brokerage platforms emerging across the continent.\n\nThe good news? You don't need to sacrifice returns to invest ethically. Research consistently shows that Shariah-compliant portfolios perform comparably to conventional benchmarks over the long term."
      },
      {
        id: "shariah-screening-criteria",
        title: "Shariah Screening Criteria",
        content: "Not every stock is halal. Companies are screened using two primary filters:\n\n**Business Activity Screening**: Companies must derive less than 5% of revenue from prohibited activities (alcohol, pork, gambling, adult entertainment, conventional finance, weapons). Some scholars allow a threshold up to 5%, while stricter interpretations require 0%.\n\n**Financial Ratio Screening**: Even permissible businesses must pass financial tests. The most commonly used standard (AAOIFI) requires:\n- Total debt / trailing 36-month average market cap < 30%\n- Interest-bearing deposits / trailing 36-month average market cap < 30%\n- Revenue from impermissible activities < 5%\n\nMajor index providers like MSCI, S&P Dow Jones, and FTSE all offer Shariah-compliant indices that apply these screens automatically."
      },
      {
        id: "best-halal-etfs-europe",
        title: "Best Halal ETFs Available in Europe",
        content: "For most European investors, ETFs offer the simplest path to a diversified halal portfolio. Here are the leading options:\n\n**iShares MSCI World Islamic UCITS ETF (ISWD)**: The most popular choice, tracking the MSCI World Islamic Index. It offers broad global exposure with an expense ratio of 0.30%. Available on most European brokers.\n\n**HSBC MSCI Islamic UCITS ETFs**: HSBC offers several variants — including emerging markets and US-focused options. Competitive pricing and solid liquidity.\n\n**SP Funds S&P 500 Sharia ETF (SPUS)**: For US market exposure specifically, this fund tracks the S&P 500 Shariah Index. Note: availability varies by European broker.\n\nWhen choosing, consider the expense ratio, tracking error, fund size, and whether your broker supports the specific exchange where the ETF trades."
      },
      {
        id: "building-your-portfolio",
        title: "Building Your Halal Portfolio",
        content: "A well-structured halal portfolio follows the same principles as any sound investment strategy — diversification, cost efficiency, and a long-term horizon. Here's a practical framework:\n\n**Core allocation (70-80%)**: A global Shariah-compliant equity ETF like ISWD provides instant diversification across developed markets.\n\n**Satellite positions (10-20%)**: Add exposure to specific regions or themes — emerging markets, technology, or sukuk (Islamic bonds) for fixed-income-like stability.\n\n**Cash & gold (5-10%)**: Physical gold or gold ETCs can serve as a hedge. Keep an emergency buffer in a halal savings account.\n\n**Purification**: Even screened funds may earn small amounts of impermissible income. Calculate 2-5% of dividends and donate this to charity as purification (tazkiyah). Most fund providers publish purification ratios annually."
      },
      {
        id: "common-mistakes",
        title: "Common Mistakes to Avoid",
        content: "After working with hundreds of Muslim investors across Europe, these are the patterns I see most often:\n\n**1. Analysis paralysis on permissibility**: Spending months debating whether a specific stock is halal instead of starting with a well-screened ETF. Perfect shouldn't be the enemy of good.\n\n**2. Ignoring asset allocation**: Concentrating everything in one halal ETF. Diversification still matters — across geographies, sectors, and asset classes.\n\n**3. Not accounting for purification**: Many investors forget to calculate and donate the purification amount on their returns.\n\n**4. Paying excessive fees**: Some halal investment platforms charge premium prices. Compare fees carefully — a 1% annual difference compounds dramatically over decades.\n\n**5. Confusing cultural norms with Shariah requirements**: Not everything culturally common is Islamically required. Consult scholarly resources, not social media influencers."
      },
      {
        id: "getting-started",
        title: "Getting Started: Your Action Plan",
        content: "Ready to begin? Here's your step-by-step plan:\n\n**Week 1**: Open a brokerage account that supports Shariah-compliant ETFs. Trading 212, DEGIRO, and Interactive Brokers all work well for European investors.\n\n**Week 2**: Set up a monthly investment plan (€100-500/month is a great starting point). Choose a global halal ETF as your core holding.\n\n**Week 3**: Research one satellite position to add — whether it's a sukuk fund, an emerging market ETF, or individual halal stocks you've screened.\n\n**Ongoing**: Review your portfolio quarterly. Track purification amounts. Stay educated through resources like The Capital Edit.\n\nRemember: the best time to start investing was yesterday. The second best time is today."
      }
    ],
    relatedSlugs: ["halal-etfs-comparison", "understanding-zakat-investments"],
  },
  {
    slug: "100k-portfolio-expat",
    title: "How I Built a €100K Portfolio as an Expat",
    excerpt: "A personal journey through the challenges and opportunities of investing while living abroad.",
    category: "Expat Finance",
    categorySlug: "/expat-finance",
    readTime: "8 min",
    publishedDate: "2026-01-20",
    sections: [
      {
        id: "the-starting-point",
        title: "The Starting Point",
        content: "When I moved from Morocco to the Netherlands in 2019, I had €3,000 in savings, a job offer, and zero knowledge of European financial systems. Opening a bank account took three weeks. Finding a broker that accepted my residency status took even longer.\n\nThis article isn't about getting rich quick. It's about the boring, consistent habits that took me from €3K to €100K in just over six years — while navigating the complexity of being an expat investor in Europe.\n\nThe journey taught me that the biggest barriers for expat investors aren't financial — they're administrative and psychological."
      },
      {
        id: "choosing-the-right-broker",
        title: "Choosing the Right Broker",
        content: "As an expat, your broker choice is critical — and more limited than you'd think. Many platforms have residency restrictions, and tax reporting varies wildly between countries.\n\nI started with DEGIRO because it accepted my Dutch residency and offered low fees. Later, I added Interactive Brokers for access to US-listed ETFs and better currency conversion rates.\n\n**Key criteria for expat broker selection:**\n- Accepts your specific residency/nationality combination\n- Provides annual tax statements compatible with your country's requirements\n- Offers competitive currency conversion (you'll likely earn in one currency and invest in another)\n- Has a solid mobile app for managing investments across time zones\n\nAvoid brokers that seem cheap but charge hidden FX fees — these can eat 1-2% of every transaction."
      },
      {
        id: "the-savings-strategy",
        title: "The Savings Strategy",
        content: "My savings rate averaged 40-50% of net income. That sounds aggressive, but it was achievable because:\n\n**Housing**: I house-shared for the first two years, keeping rent at 25% of income.\n**Transport**: The Netherlands is cycling paradise. No car needed.\n**Lifestyle inflation**: I gave myself a 'lifestyle budget' that increased by only 5% with each pay rise.\n\nThe formula was simple: automate investments on pay day, live on what's left. I set up monthly automatic purchases of my core ETF on the 1st of every month — before I could spend the money on anything else.\n\nOver six years, my total contributions were approximately €72,000. The remaining €28,000+ came from market returns and compound growth."
      },
      {
        id: "tax-optimization",
        title: "Tax Optimization for Expats",
        content: "This is where it gets complicated — and where many expats leave money on the table.\n\nIn the Netherlands, investment returns are taxed under Box 3 (wealth tax on deemed returns), not on actual capital gains. This was actually advantageous during strong market years, as my actual returns exceeded the deemed rate.\n\n**Key lessons on expat tax optimization:**\n- Understand your tax residency status — it determines which country can tax your investments\n- Use tax-advantaged accounts where available (Dutch 'lijfrente', German 'Freistellungsauftrag', etc.)\n- Be aware of exit taxes if you plan to move countries\n- Keep meticulous records of cost basis — you'll thank yourself later\n- Consider consulting a cross-border tax advisor for your first year. The €200-500 fee pays for itself.\n\nDon't let tax complexity stop you from investing. An imperfect investment plan beats no plan at all."
      },
      {
        id: "lessons-learned",
        title: "Lessons Learned",
        content: "After six years and €100K, here's what I wish I'd known from day one:\n\n**Start immediately**: I waited 8 months after arriving to open a brokerage account. That delay cost me approximately €4,000 in missed returns.\n\n**Keep it simple**: My best-performing years were when I owned just two ETFs. My worst year was when I tried picking individual stocks.\n\n**Community matters**: Joining online expat investor communities (Reddit's r/eupersonalfinance, Bogleheads) gave me more practical knowledge than any book.\n\n**Currency risk is real but manageable**: Don't hedge short-term FX movements. Over decades, currency fluctuations tend to smooth out.\n\n**The next €100K will be easier**: Thanks to compound growth, reaching €200K from here will take far less time than the first €100K. That's the magic of consistent, long-term investing."
      }
    ],
    relatedSlugs: ["complete-guide-halal-investing-europe", "fire-retire-early-ethically"],
  },
  {
    slug: "fire-retire-early-ethically",
    title: "FIRE Movement: Can You Retire Early Ethically?",
    excerpt: "Exploring whether financial independence is achievable while investing according to your values.",
    category: "FIRE & Wealth",
    categorySlug: "/fire-wealth",
    readTime: "10 min",
    publishedDate: "2026-03-01",
    sections: [
      {
        id: "what-is-fire",
        title: "What Is the FIRE Movement?",
        content: "FIRE — Financial Independence, Retire Early — is the idea that by saving aggressively (typically 50-70% of income) and investing wisely, you can accumulate enough wealth to stop working for money decades before the traditional retirement age.\n\nThe math is straightforward: if you can live on 4% of your invested portfolio annually (the '4% rule'), you need roughly 25 times your annual expenses to be financially independent.\n\nSpend €30,000 per year? You need €750,000. Spend €50,000? You need €1.25 million.\n\nBut here's the question few FIRE enthusiasts ask: can you reach these numbers while investing ethically — avoiding industries you find morally objectionable and ensuring your wealth creation doesn't come at others' expense?"
      },
      {
        id: "ethical-fire-challenges",
        title: "The Challenges of Ethical FIRE",
        content: "Let's be honest: ethical constraints can make FIRE harder. Here's why:\n\n**Reduced investment universe**: Screening out tobacco, weapons, gambling, and fossil fuels removes some historically high-return sectors. The S&P 500 without energy and defense looks different.\n\n**Higher fund fees**: ESG and Shariah-compliant funds often carry slightly higher expense ratios than their conventional counterparts (0.25-0.50% vs 0.03-0.10%).\n\n**Fewer tax-advantaged options**: In many European countries, the most tax-efficient funds don't offer ESG or halal variants.\n\n**Social pressure**: The FIRE community can be dogmatic about total market index funds. Deviating from this orthodoxy invites criticism.\n\nBut these challenges are manageable — and the gap is closing rapidly as ethical investing goes mainstream."
      },
      {
        id: "strategies-for-ethical-fire",
        title: "Strategies for Ethical FIRE",
        content: "Here's how to pursue FIRE without compromising your values:\n\n**1. Maximize your savings rate**: The single most powerful FIRE lever. Whether your investments return 7% or 6.5% matters far less than whether you save 30% or 50% of your income.\n\n**2. Use low-cost ethical index funds**: The iShares MSCI World SRI ETF (0.20% TER) and similar products offer broad diversification with ethical screens at reasonable costs.\n\n**3. Consider geographic arbitrage**: FIRE in a lower-cost European country (Portugal, Spain, Eastern Europe) requires a smaller portfolio than FIRE in London or Zurich.\n\n**4. Build income streams aligned with your values**: Freelancing, consulting, or creating content in your area of expertise can supplement investment returns.\n\n**5. Embrace Coast FIRE or Barista FIRE**: You don't need to stop working entirely. Reaching a point where your portfolio grows to your FIRE number without additional contributions gives you freedom to pursue meaningful but lower-paying work."
      },
      {
        id: "the-numbers",
        title: "Running the Numbers: Ethical vs. Conventional",
        content: "Let's compare two scenarios for a European professional saving €2,000/month:\n\n**Conventional portfolio** (Total world index, 0.07% TER, ~7.5% average annual return):\n- 10 years: €345,000\n- 15 years: €635,000\n- 20 years: €1,050,000\n\n**Ethical portfolio** (ESG/Shariah-screened, 0.25% TER, ~7.0% average annual return):\n- 10 years: €335,000\n- 15 years: €610,000\n- 20 years: €990,000\n\nThe difference after 20 years? Approximately €60,000 — or about 6%. That might mean working 6-12 months longer, but it also means two decades of sleeping well at night knowing your money reflects your values.\n\nAnd these projections are conservative. Many ethical funds have matched or exceeded conventional returns in recent years."
      },
      {
        id: "my-personal-approach",
        title: "My Personal Approach",
        content: "I'm pursuing what I call 'Values-Aligned FIRE.' Here's my framework:\n\n**Target**: €600,000 portfolio (Coast FIRE in the Netherlands, full FIRE if I relocate to Southern Europe)\n**Timeline**: 8-10 years from now\n**Savings rate**: 45% of net income\n**Portfolio**: 80% halal global equity ETFs, 15% sukuk/gold, 5% individual halal stocks\n**Side income**: This website, freelance writing, and consulting\n\nI don't see ethical investing as a constraint — I see it as a feature. It forces me to be more intentional about where my money goes, and that intentionality extends to every financial decision.\n\nFIRE isn't just about the number. It's about building a life you don't need to escape from — and doing it in a way you can be proud of."
      }
    ],
    relatedSlugs: ["100k-portfolio-expat", "complete-guide-halal-investing-europe"],
  },
  {
    slug: "trading-212-vs-degiro",
    title: "Trading 212 vs DEGIRO: Which Is Better for European Investors?",
    excerpt: "A detailed comparison of two of Europe's most popular brokers for cost, features, and suitability.",
    category: "Reviews",
    categorySlug: "/reviews",
    readTime: "9 min",
    publishedDate: "2026-02-28",
    sections: [
      {
        id: "overview",
        title: "Overview",
        content: "Trading 212 and DEGIRO are two of the most popular discount brokers for European retail investors. Both offer commission-free or ultra-low-cost trading, but they differ significantly in features, fund selection, and how they make money.\n\nThis comparison is based on my personal experience using both platforms for over three years, combined with feedback from the wider European investing community.\n\nThe short answer? It depends on your investing style. But by the end of this guide, you'll know exactly which platform suits your needs."
      },
      {
        id: "fees-comparison",
        title: "Fees & Pricing",
        content: "**Trading 212**: True commission-free trading on stocks and ETFs. They make money through the spread (slightly wider than institutional rates), currency conversion fees (0.15%), and interest on uninvested cash. Their CFD platform cross-subsidizes the invest platform.\n\n**DEGIRO**: Technically not commission-free, but fees are negligible — €0 on their 'core selection' of ETFs (one free transaction per month per ETF), and €1-3 for other trades. Currency conversion is 0.25%.\n\n**Verdict**: Trading 212 wins on headline costs, but the difference is minimal for buy-and-hold investors. DEGIRO's wider ETF selection may matter more than saving €1-2 per trade."
      },
      {
        id: "investment-options",
        title: "Investment Options",
        content: "**Trading 212**: Offers stocks, ETFs, and fractional shares across major exchanges. Fractional shares are a genuine advantage — you can invest exactly €100 in any stock regardless of price. However, their ETF selection is somewhat limited compared to DEGIRO.\n\n**DEGIRO**: Access to 50+ exchanges worldwide, with a much broader range of ETFs, bonds, options, and even futures. If you want niche Shariah-compliant ETFs or specific country funds, DEGIRO almost certainly has them.\n\n**Verdict**: DEGIRO wins for selection breadth. Trading 212 wins for fractional shares and simplicity."
      },
      {
        id: "platform-experience",
        title: "Platform & User Experience",
        content: "**Trading 212**: Beautiful, intuitive mobile app — arguably the best in European retail brokerage. Clean design, excellent charting, and social features like community discussions. The web platform is equally polished.\n\n**DEGIRO**: Functional but dated. The mobile app gets the job done but lacks the polish of Trading 212. Recently redesigned, but still feels utilitarian rather than delightful.\n\n**Verdict**: Trading 212 wins decisively on user experience. If you're new to investing, their platform makes the process far less intimidating."
      },
      {
        id: "safety-regulation",
        title: "Safety & Regulation",
        content: "**Trading 212**: Regulated by the FCA (UK) and CySEC (Cyprus). Client funds are protected up to €20,000 (ICF) or £85,000 (FSCS depending on entity). Uses an omnibus account structure for shares.\n\n**DEGIRO**: Regulated by BaFin (Germany) and AFM (Netherlands). Client assets are held in a separate custodian entity (SPV), providing an additional layer of protection. Covered by the German investor compensation scheme up to €20,000.\n\n**Verdict**: Both are well-regulated. DEGIRO's segregated custody model offers marginally better asset protection. Neither is likely to fail, but it's worth understanding the structures."
      },
      {
        id: "final-recommendation",
        title: "Final Recommendation",
        content: "**Choose Trading 212 if**: You're a beginner, prefer a beautiful app, want fractional shares, and invest primarily in mainstream stocks and ETFs. Also ideal if you want to automate with their 'Pies' feature.\n\n**Choose DEGIRO if**: You want the widest possible ETF selection, need access to multiple exchanges, prefer a more established platform, or want to invest in specific Shariah-compliant or ESG funds that may not be available on Trading 212.\n\n**My personal setup**: I use both. Trading 212 for automated monthly ETF purchases (using Pies), and DEGIRO for specific investments and niche ETFs. There's no rule saying you can't benefit from both platforms.\n\n*Disclosure: This article contains no affiliate links. Neither Trading 212 nor DEGIRO has sponsored or reviewed this content. These opinions are entirely independent.*"
      }
    ],
    relatedSlugs: ["100k-portfolio-expat", "complete-guide-halal-investing-europe"],
  },
  {
    slug: "beginners-guide-esg-investing",
    title: "The Beginner's Guide to ESG Investing",
    excerpt: "What ESG really means, and how to build a portfolio that reflects your values.",
    category: "Ethical Investing",
    categorySlug: "/ethical-investing",
    readTime: "7 min",
    publishedDate: "2026-01-10",
    sections: [
      {
        id: "what-is-esg",
        title: "What Does ESG Actually Mean?",
        content: "ESG stands for Environmental, Social, and Governance — three pillars used to evaluate a company's ethical impact and sustainability.\n\n**Environmental**: How does the company affect the planet? Carbon emissions, waste management, renewable energy use, deforestation policies.\n\n**Social**: How does it treat people? Employee welfare, diversity, supply chain labour practices, community impact.\n\n**Governance**: How is it run? Board diversity, executive compensation, shareholder rights, anti-corruption policies.\n\nESG isn't about avoiding all 'bad' companies — it's about understanding and incorporating these non-financial factors into investment decisions. A high ESG score suggests a company manages these risks well, which often correlates with long-term financial resilience."
      },
      {
        id: "esg-vs-sri-vs-impact",
        title: "ESG vs SRI vs Impact Investing",
        content: "These terms are often confused, but they represent different approaches on a spectrum:\n\n**ESG Integration**: Using ESG data as one factor among many in investment analysis. You might still own oil companies if their ESG management is strong relative to peers. This is the broadest approach.\n\n**SRI (Socially Responsible Investing)**: Actively excluding entire sectors or companies based on values — no tobacco, no weapons, no fossil fuels. More restrictive than ESG integration.\n\n**Impact Investing**: Targeting investments that generate measurable positive social or environmental outcomes alongside financial returns. Think renewable energy projects, affordable housing funds, or microfinance.\n\nMost retail investors end up somewhere between ESG integration and SRI. The key is deciding what matters most to you and finding products that align."
      },
      {
        id: "getting-started-esg",
        title: "How to Start ESG Investing",
        content: "Starting is simpler than you think:\n\n**Step 1**: Define your values. What industries or practices are non-negotiable exclusions for you? Write them down.\n\n**Step 2**: Choose your approach. Do you want broad ESG integration, strict SRI screening, or targeted impact? For most beginners, a well-screened ESG index fund is the best starting point.\n\n**Step 3**: Select your fund. Look for established ESG ETFs:\n- iShares MSCI World SRI UCITS ETF (0.20% TER)\n- Vanguard ESG Global All Cap UCITS ETF (0.24% TER)\n- UBS MSCI ACWI Socially Responsible ETF (0.28% TER)\n\n**Step 4**: Set up automatic monthly investments through your broker. Consistency beats timing.\n\n**Step 5**: Review annually. Check if the fund's methodology still aligns with your values, and rebalance if needed."
      },
      {
        id: "greenwashing-risks",
        title: "Beware of Greenwashing",
        content: "Not all ESG funds are created equal. Greenwashing — making investments appear more sustainable than they are — is a real problem.\n\n**Red flags to watch for:**\n- Funds labelled 'ESG' that still hold major fossil fuel companies\n- Vague sustainability claims without transparent methodology\n- High ESG ratings for companies with known environmental violations\n- 'Best in class' approaches that include the least-bad companies in harmful industries\n\n**How to verify:**\n- Read the fund's methodology document (not just the marketing)\n- Check holdings on the fund provider's website\n- Use independent tools like Morningstar's Sustainability Rating\n- Look for EU SFDR classification (Article 8 or Article 9 funds)\n\nThe EU's Sustainable Finance Disclosure Regulation (SFDR) is helping, but it's still early. Do your own due diligence."
      }
    ],
    relatedSlugs: ["complete-guide-halal-investing-europe", "fire-retire-early-ethically"],
  },
  {
    slug: "budgeting-methods-that-work",
    title: "5 Budgeting Methods That Actually Work",
    excerpt: "Find the budgeting approach that fits your lifestyle — not the other way around.",
    category: "Finance Basics",
    categorySlug: "/finance-basics",
    readTime: "6 min",
    publishedDate: "2026-02-05",
    sections: [
      {
        id: "why-budgeting-matters",
        title: "Why Most People Fail at Budgeting",
        content: "Let's start with an uncomfortable truth: most budgeting attempts fail. Not because people lack discipline, but because they choose the wrong method for their personality.\n\nA spreadsheet-obsessed engineer thrives with zero-based budgeting. A creative freelancer with variable income needs something completely different. The goal isn't to find the 'best' budget — it's to find YOUR best budget.\n\nI've tried all five methods below. Each works brilliantly for the right person. Read the descriptions, try the one that resonates, and don't feel guilty about switching if it doesn't stick after a month."
      },
      {
        id: "50-30-20",
        title: "The 50/30/20 Rule",
        content: "**How it works**: Divide after-tax income into three buckets. 50% for needs (rent, utilities, groceries, insurance), 30% for wants (dining out, entertainment, shopping), 20% for savings and debt repayment.\n\n**Best for**: Beginners, people who want simplicity, those with stable incomes.\n\n**Pros**: Dead simple. No tracking individual transactions. Gives clear guardrails without micromanagement.\n\n**Cons**: The categories can be ambiguous (is a gym membership a need or want?). May not be aggressive enough for FIRE pursuers. Doesn't account for high-cost-of-living cities where 50% for needs is unrealistic.\n\n**Pro tip**: Adjust the ratios to your reality. In Amsterdam, I used 55/25/20. In a cheaper city, 40/30/30 might work. The framework matters more than the exact numbers."
      },
      {
        id: "zero-based",
        title: "Zero-Based Budgeting",
        content: "**How it works**: Every euro of income is assigned a job before the month begins. Income minus all planned spending (including savings) must equal exactly zero.\n\n**Best for**: Detail-oriented people, those with consistent income, anyone who wants maximum control.\n\n**Pros**: Maximum awareness of where money goes. Forces you to be intentional about every expense. Highly effective for identifying waste.\n\n**Cons**: Time-consuming to set up and maintain. Can feel restrictive. Requires adjusting mid-month when unexpected expenses arise.\n\n**Tools**: YNAB (You Need A Budget) is built around this philosophy. It's €8/month but many users call it the best €96 they spend annually."
      },
      {
        id: "pay-yourself-first",
        title: "Pay Yourself First",
        content: "**How it works**: The moment your salary arrives, automatically transfer a fixed amount to savings/investments. Live on whatever remains. No detailed tracking required.\n\n**Best for**: People who hate budgeting, high earners, FIRE enthusiasts, anyone who wants automation.\n\n**Pros**: Completely automated once set up. Prioritises future wealth over present spending. Works regardless of income volatility.\n\n**Cons**: Doesn't address spending patterns. Possible to overspend the remainder on wasteful things. Requires honest assessment of how much you can save.\n\n**My recommendation**: This is my personal favourite. I auto-transfer 45% of net income on pay day — split between ETF purchases, emergency fund, and a 'freedom fund.' Everything else is guilt-free spending money."
      },
      {
        id: "envelope-system",
        title: "The Envelope System (Digital Version)",
        content: "**How it works**: Allocate cash into category-specific 'envelopes' — groceries, transport, entertainment, etc. When an envelope is empty, you stop spending in that category.\n\n**Best for**: Overspenders, people who need visual/tangible constraints, variable income earners.\n\n**Pros**: Creates hard spending limits. Very visual and satisfying. Prevents category overspending.\n\n**Cons**: Impractical with physical cash in 2026. Digital versions (like Monzo pots or N26 spaces) help but require discipline.\n\n**Digital adaptation**: Use separate sub-accounts or 'spaces' in your banking app. Automate transfers into each space on pay day. This gives the same psychological benefit without the hassle of physical cash."
      },
      {
        id: "which-to-choose",
        title: "Which Method Should You Choose?",
        content: "Here's my decision framework:\n\n**If you've never budgeted before** → Start with 50/30/20. It's forgiving and educational.\n\n**If you want to save aggressively** → Pay Yourself First. Automate and forget.\n\n**If you're a data nerd** → Zero-based budgeting with YNAB. You'll love the granularity.\n\n**If you consistently overspend** → Envelope system. The hard limits will retrain your habits.\n\n**If your income is variable** → Combine Pay Yourself First with the Envelope System. Save a base percentage automatically, then allocate the rest into spending categories.\n\nThe best budget is the one you actually follow. Try one for 30 days. If it feels like torture, switch. There's no shame in experimenting — only in not starting at all."
      }
    ],
    relatedSlugs: ["100k-portfolio-expat", "fire-retire-early-ethically"],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getRelatedArticles(article: Article): Article[] {
  return (article.relatedSlugs || [])
    .map((slug) => articles.find((a) => a.slug === slug))
    .filter(Boolean) as Article[];
}
