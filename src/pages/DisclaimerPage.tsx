import { SiteLayout } from "@/components/SiteLayout";

export default function DisclaimerPage() {
  return (
    <SiteLayout>
      <article className="container max-w-2xl py-20">
        <h1 className="font-serif text-3xl font-bold text-foreground mb-8">Disclaimer</h1>
        <div className="space-y-6 text-sm text-body leading-relaxed">
          <p>
            The information provided on The Capital Edit (thecapitaledit.com) is for general informational and educational purposes only. It does not constitute financial advice, investment advice, trading advice, or any other form of professional advice.
          </p>
          <h2 className="font-serif text-lg font-semibold text-foreground mt-8">Not Financial Advice</h2>
          <p>
            Nothing on this website should be construed as a recommendation to buy, sell, or hold any investment, security, or financial product. Always consult with a qualified financial adviser before making any investment decisions.
          </p>
          <h2 className="font-serif text-lg font-semibold text-foreground mt-8">Affiliate Disclosure</h2>
          <p>
            Some links on this website are affiliate links. This means we may earn a commission if you sign up for a product or service through our link, at no additional cost to you. We only recommend products and services that we have personally used or thoroughly researched.
          </p>
          <p>
            Affiliate relationships never influence our editorial content, ratings, or reviews. Our recommendations are based on independent analysis and personal experience.
          </p>
          <h2 className="font-serif text-lg font-semibold text-foreground mt-8">Accuracy</h2>
          <p>
            While we strive to keep all information accurate and up to date, we make no guarantees about the completeness, reliability, or accuracy of the content. Financial products, regulations, and market conditions change frequently. Always verify information with official sources.
          </p>
          <h2 className="font-serif text-lg font-semibold text-foreground mt-8">Risk Warning</h2>
          <p>
            Investing involves risk, including the potential loss of principal. Past performance does not guarantee future results. The value of investments can go down as well as up.
          </p>
          <h2 className="font-serif text-lg font-semibold text-foreground mt-8">Islamic Finance Disclaimer</h2>
          <p>
            Content related to halal investing reflects our understanding and research of Islamic finance principles. We are not qualified Islamic scholars. For definitive rulings on the permissibility of specific investments, please consult a qualified Islamic finance scholar or your local religious authority.
          </p>
        </div>
      </article>
    </SiteLayout>
  );
}
