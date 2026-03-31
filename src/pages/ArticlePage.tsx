import { useParams, Link, Navigate } from "react-router-dom";
import { SiteLayout } from "@/components/SiteLayout";
import { ReadingProgress } from "@/components/ReadingProgress";
import { TableOfContents } from "@/components/TableOfContents";
import { AuthorBio } from "@/components/AuthorBio";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { getArticleBySlug, getRelatedArticles } from "@/data/articles";
import { ArrowLeft, ArrowRight, Clock, Calendar } from "lucide-react";

export default function ArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticleBySlug(slug) : undefined;

  if (!article) return <Navigate to="/404" replace />;

  const related = getRelatedArticles(article);
  const publishDate = new Date(article.publishedDate).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <SiteLayout>
      <ReadingProgress />

      {/* Article Header */}
      <header className="container max-w-3xl pt-12 pb-8">
        <Link
          to={article.categorySlug}
          className="inline-flex items-center gap-1.5 text-xs font-sans uppercase tracking-widest text-accent hover:text-accent/80 transition-colors mb-6"
        >
          <ArrowLeft className="h-3 w-3" />
          {article.category}
        </Link>

        <h1 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-foreground leading-tight mb-5">
          {article.title}
        </h1>

        <p className="text-body text-base md:text-lg leading-relaxed mb-6">
          {article.excerpt}
        </p>

        <div className="flex items-center gap-5 text-xs text-caption font-sans">
          <span className="flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" />
            {publishDate}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" />
            {article.readTime} read
          </span>
        </div>

        <div className="border-b border-divider mt-8" />
      </header>

      {/* Article Body + Sidebar */}
      <div className="container">
        <div className="flex gap-12 max-w-5xl mx-auto">
          {/* Main content */}
          <article className="flex-1 max-w-3xl pb-16">
            {article.sections.map((section) => (
              <section key={section.id} id={section.id} className="mb-12 scroll-mt-24">
                <h2 className="font-serif text-xl md:text-2xl font-semibold text-foreground mb-4">
                  {section.title}
                </h2>
                <div className="text-body text-[15px] leading-[1.8] space-y-4">
                  {section.content.split("\n\n").map((paragraph, i) => (
                    <p key={i} dangerouslySetInnerHTML={{
                      __html: paragraph
                        .replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground font-semibold">$1</strong>')
                        .replace(/\n- /g, '<br/>• ')
                        .replace(/\n/g, '<br/>')
                    }} />
                  ))}
                </div>
              </section>
            ))}

            {/* Author Bio */}
            <div className="border-t border-divider pt-10 mt-4">
              <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-caption mb-4 font-semibold">
                About the Author
              </p>
              <AuthorBio />
            </div>

            {/* Related Articles */}
            {related.length > 0 && (
              <div className="mt-12">
                <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-caption mb-4 font-semibold">
                  Continue Reading
                </p>
                <div className="grid gap-4">
                  {related.map((r) => (
                    <Link
                      key={r.slug}
                      to={`/article/${r.slug}`}
                      className="group flex items-center justify-between p-5 border border-divider rounded-sm hover:border-accent transition-colors"
                    >
                      <div>
                        <p className="text-xs text-accent font-sans uppercase tracking-wider mb-1">{r.category}</p>
                        <h4 className="font-serif text-base font-semibold text-foreground group-hover:text-accent transition-colors">
                          {r.title}
                        </h4>
                        <p className="text-xs text-caption mt-1">{r.readTime} read</p>
                      </div>
                      <ArrowRight className="h-4 w-4 text-caption group-hover:text-accent transition-colors shrink-0 ml-4" />
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Newsletter CTA */}
            <div className="mt-12">
              <NewsletterSignup variant="inline" />
            </div>
          </article>

          {/* Sidebar TOC — desktop only */}
          <aside className="hidden xl:block w-56 shrink-0">
            <div className="sticky top-24">
              <TableOfContents sections={article.sections} />
            </div>
          </aside>
        </div>
      </div>
    </SiteLayout>
  );
}
