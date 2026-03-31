import { authorInfo } from "@/data/articles";

export function AuthorBio() {
  return (
    <div className="border border-divider rounded-sm p-6 bg-card">
      <div className="flex items-start gap-4">
        <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
          <span className="font-serif text-lg font-bold text-accent">
            {authorInfo.name.split(" ").map((n) => n[0]).join("")}
          </span>
        </div>
        <div>
          <p className="font-serif text-base font-semibold text-foreground">{authorInfo.name}</p>
          <p className="text-xs text-accent font-sans uppercase tracking-wider mt-0.5">{authorInfo.role}</p>
        </div>
      </div>
      <p className="text-sm text-body leading-relaxed mt-4">{authorInfo.bio}</p>
      <div className="flex flex-wrap gap-2 mt-4">
        {authorInfo.credentials.map((c) => (
          <span key={c} className="text-[11px] font-sans text-caption bg-secondary px-2.5 py-1 rounded-sm">
            {c}
          </span>
        ))}
      </div>
    </div>
  );
}
