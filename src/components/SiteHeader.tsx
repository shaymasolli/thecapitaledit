import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Finance Basics", href: "/finance-basics" },
  { label: "Halal Investing", href: "/halal-investing" },
  { label: "Ethical Investing", href: "/ethical-investing" },
  { label: "Expat Finance", href: "/expat-finance" },
  { label: "FIRE & Wealth", href: "/fire-wealth" },
  { label: "Tools", href: "/tools" },
  { label: "Reviews", href: "/reviews" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setSearchOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-divider shadow-sm"
          : "bg-background border-b border-divider"
      }`}
    >
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="font-serif text-xl font-bold tracking-tight text-foreground">
          The Capital Edit
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`text-xs font-sans uppercase tracking-widest transition-colors hover:text-accent ${
                location.pathname === link.href ? "text-accent font-semibold" : "text-caption"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="p-2 text-caption hover:text-foreground transition-colors"
            aria-label="Search"
          >
            <Search className="h-4 w-4" />
          </button>
          <Link to="/newsletter" className="hidden sm:block">
            <Button variant="editorial" size="sm">Subscribe</Button>
          </Link>
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Search bar */}
      {searchOpen && (
        <div className="border-t border-divider bg-background">
          <div className="container py-3">
            <input
              type="text"
              placeholder="Search articles, guides, and resources..."
              className="w-full bg-transparent text-sm font-sans text-foreground placeholder:text-caption outline-none"
              autoFocus
            />
          </div>
        </div>
      )}

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-divider bg-background">
          <nav className="container py-6 flex flex-col gap-4">
            <Link to="/about" className="text-sm font-sans text-caption hover:text-foreground">About</Link>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-sans hover:text-foreground ${
                  location.pathname === link.href ? "text-accent font-semibold" : "text-caption"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/newsletter">
              <Button variant="editorial" size="sm" className="w-full mt-2">Subscribe</Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
