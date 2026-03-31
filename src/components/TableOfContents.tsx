import { useState, useEffect } from "react";
import type { ArticleSection } from "@/data/articles";

interface TableOfContentsProps {
  sections: ArticleSection[];
}

export function TableOfContents({ sections }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0 }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 90;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <nav className="space-y-1">
      <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-caption mb-3 font-semibold">
        Contents
      </p>
      {sections.map((s) => (
        <button
          key={s.id}
          onClick={() => scrollTo(s.id)}
          className={`block w-full text-left text-sm py-1.5 pl-3 border-l-2 transition-colors ${
            activeId === s.id
              ? "border-accent text-accent font-medium"
              : "border-transparent text-caption hover:text-foreground hover:border-divider"
          }`}
        >
          {s.title}
        </button>
      ))}
    </nav>
  );
}
