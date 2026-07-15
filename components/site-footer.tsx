import { portfolio } from "@/lib/portfolio";

export function SiteFooter() {
  const { name } = portfolio.personal_information;
  return (
    <footer className="border-t border-border/60 py-8">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-2 px-4 text-sm text-muted-foreground sm:flex-row sm:px-6 lg:px-8">
        <span>
          © {new Date().getFullYear()} {name}
        </span>
      </div>
    </footer>
  );
}
