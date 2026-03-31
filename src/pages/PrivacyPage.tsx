import { SiteLayout } from "@/components/SiteLayout";

export default function PrivacyPage() {
  return (
    <SiteLayout>
      <article className="container max-w-2xl py-20">
        <h1 className="font-serif text-3xl font-bold text-foreground mb-8">Privacy Policy</h1>
        <div className="space-y-6 text-sm text-body leading-relaxed">
          <p>
            Your privacy matters to us. This Privacy Policy explains how The Capital Edit collects, uses, and protects your personal information when you visit thecapitaledit.com.
          </p>

          <h2 className="font-serif text-lg font-semibold text-foreground mt-8">Information We Collect</h2>
          <p>
            We may collect the following information: your email address when you subscribe to our newsletter, usage data such as pages visited and time spent on site through analytics tools, and device and browser information for site optimisation.
          </p>

          <h2 className="font-serif text-lg font-semibold text-foreground mt-8">How We Use Your Information</h2>
          <p>
            We use your information to send you our newsletter (if you've subscribed), improve our website content and user experience, analyse site traffic and engagement, and comply with legal obligations.
          </p>

          <h2 className="font-serif text-lg font-semibold text-foreground mt-8">Cookies</h2>
          <p>
            We use cookies and similar technologies to analyse site traffic, remember your preferences, and improve your experience. You can control cookie settings through your browser.
          </p>

          <h2 className="font-serif text-lg font-semibold text-foreground mt-8">Third-Party Services</h2>
          <p>
            We may use third-party services for analytics, email delivery, and affiliate tracking. These services may collect data according to their own privacy policies.
          </p>

          <h2 className="font-serif text-lg font-semibold text-foreground mt-8">Your Rights</h2>
          <p>
            Under GDPR and applicable data protection laws, you have the right to access, correct, delete, or port your personal data. You may also withdraw consent for data processing at any time.
          </p>

          <h2 className="font-serif text-lg font-semibold text-foreground mt-8">Data Retention</h2>
          <p>
            We retain your personal data only as long as necessary for the purposes described in this policy. Newsletter subscribers can unsubscribe at any time, after which their email address will be removed from our mailing list.
          </p>

          <h2 className="font-serif text-lg font-semibold text-foreground mt-8">Contact</h2>
          <p>
            For any privacy-related questions, please contact us at privacy@thecapitaledit.com.
          </p>

          <p className="text-caption mt-8">Last updated: March 2026</p>
        </div>
      </article>
    </SiteLayout>
  );
}
