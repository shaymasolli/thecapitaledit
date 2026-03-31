import { Link } from "react-router-dom";

const footerLinks = {
  Explore: [
    { label: "Finance Basics", href: "/finance-basics" },
    { label: "Halal Investing", href: "/halal-investing" },
    { label: "Ethical Investing", href: "/ethical-investing" },
    { label: "Expat Finance", href: "/expat-finance" },
    { label: "FIRE & Wealth", href: "/fire-wealth" },
  ],
  Resources: [
    { label: "Tools & Resources", href: "/tools" },
    { label: "Reviews", href: "/reviews" },
    { label: "Newsletter", href: "/newsletter" },
    { label: "About", href: "/about" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Disclaimer", href: "/disclaimer" },
  ],
};

export function SiteFooter() {
  return (
    <footer className="border-t border-divider bg-secondary">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <h3 className="font-serif text-lg font-bold text-foreground mb-3">
              The Capital Edit
            </h3>
            <p className="text-sm text-caption leading-relaxed">
              The global guide to ethical & halal personal finance for the modern professional.
            </p>
          </div>
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-sans text-xs uppercase tracking-widest text-caption mb-4 font-semibold">
                {category}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-sm text-body hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-divider flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-caption">
            © {new Date().getFullYear()} The Capital Edit. All rights reserved.
          </p>
          <p className="text-xs text-caption">
            EU-based · Independent · Values-driven finance
          </p>
        </div>
      </div>
    </footer>
  );
}
