import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { portfolio } from "@/lib/portfolio";
import { buttonVariants } from "@/components/ui/button";
import { GithubIcon } from "@/components/icons";
import { Section } from "@/components/section";

export function Hero() {
  const { name, title, summary, contact } = portfolio.personal_information;

  return (
    <Section id="home">
      <div className="flex flex-col gap-6">
        <span className="inline-flex w-fit items-center rounded-full border border-border bg-muted/50 px-3 py-1 text-xs font-medium text-muted-foreground">
          <span className="mr-2 size-1.5 rounded-full bg-emerald-500" />
          {contact.location}
        </span>

        <h1 className="font-heading text-4xl font-semibold tracking-tight sm:text-6xl">
          {name}
        </h1>
        <p className="text-lg font-medium text-foreground/80 sm:text-xl">
          {title}
        </p>
        <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {summary}
        </p>

        <div className="mt-2 flex flex-wrap items-center gap-3">
          <a
            href="#contact"
            className={buttonVariants({ size: "lg", className: "h-11 px-6" })}
          >
            Get in touch
          </a>
          <a
            href={contact.github}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants({
              variant: "outline",
              size: "lg",
              className: "h-11 px-6",
            })}
          >
            <GithubIcon />
            GitHub
            <ArrowUpRight />
          </a>
        </div>

        <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <a
            href={`mailto:${contact.email}`}
            className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
          >
            <Mail />
            {contact.email}
          </a>
          <a
            href={`tel:${contact.phone}`}
            className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
          >
            <Phone />
            {contact.phone}
          </a>
          <span className="inline-flex items-center gap-2">
            <MapPin />
            {contact.location}
          </span>
        </div>
      </div>
    </Section>
  );
}
