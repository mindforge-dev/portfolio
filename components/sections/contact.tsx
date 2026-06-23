import { Mail, MapPin, Phone } from "lucide-react";
import { portfolio } from "@/lib/portfolio";
import { Card, CardContent } from "@/components/ui/card";
import { GithubIcon } from "@/components/icons";
import { Section, SectionHeading } from "@/components/section";

export function Contact() {
  const { contact } = portfolio.personal_information;

  const items = [
    { icon: Mail, label: "Email", value: contact.email, href: `mailto:${contact.email}` },
    { icon: Phone, label: "Phone", value: contact.phone, href: `tel:${contact.phone}` },
    { icon: MapPin, label: "Location", value: contact.location, href: null as string | null },
    { icon: GithubIcon, label: "GitHub", value: "mindforge-dev", href: contact.github },
  ];

  return (
    <Section id="contact">
      <SectionHeading label="Say hello" title="Get in touch" />
      <Card>
        <CardContent className="grid gap-2 sm:grid-cols-2">
          {items.map(({ icon: Icon, label, value, href }) => {
            const inner = (
              <div className="flex items-center gap-3">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-border bg-muted">
                  <Icon className="size-4 text-muted-foreground" />
                </span>
                <div className="flex min-w-0 flex-col">
                  <span className="text-xs uppercase tracking-wide text-muted-foreground">
                    {label}
                  </span>
                  <span className="truncate font-medium">{value}</span>
                </div>
              </div>
            );

            return href ? (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="rounded-xl p-3 transition-colors hover:bg-muted"
              >
                {inner}
              </a>
            ) : (
              <div key={label} className="rounded-xl p-3">
                {inner}
              </div>
            );
          })}
        </CardContent>
      </Card>
    </Section>
  );
}
