"use client";

import * as React from "react";
import { Mail, MapPin, Phone, Copy, Check } from "lucide-react";
import { portfolio } from "@/lib/portfolio";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { GithubIcon } from "@/components/icons";
import { Section, SectionHeading } from "@/components/section";

export function Contact() {
  const { contact } = portfolio.personal_information;
  const [copiedIndex, setCopiedIndex] = React.useState<number | null>(null);

  const items = [
    { icon: Mail, label: "Email", value: contact.email, href: `mailto:${contact.email}`, copyable: true },
    { icon: Phone, label: "Phone", value: contact.phone, href: `tel:${contact.phone}`, copyable: true },
    { icon: MapPin, label: "Location", value: contact.location, href: null as string | null, copyable: false },
    { icon: GithubIcon, label: "GitHub", value: "mindforge-dev", href: contact.github, copyable: false },
  ];

  const handleCopy = (text: string, index: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <Section id="contact">
      <SectionHeading label="Say hello" title="Get in touch" />
      <div className="grid gap-4 sm:grid-cols-2">
        {items.map(({ icon: Icon, label, value, href, copyable }, index) => {
          const inner = (
            <div className="flex items-center gap-3">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-border bg-muted transition-all duration-300 group-hover:bg-indigo-600 group-hover:text-white dark:bg-indigo-500/20 dark:text-indigo-400">
                <Icon className="size-4.5" />
              </span>
              <div className="flex min-w-0 flex-col">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                  {label}
                </span>
                <span className="truncate font-medium transition-colors group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                  {value}
                </span>
              </div>
            </div>
          );

          const copyButton = copyable && (
            <button
              onClick={(e) => handleCopy(value, index, e)}
              className="absolute top-3 right-3 rounded-md p-1.5 text-muted-foreground opacity-0 transition-all duration-200 hover:bg-muted hover:text-foreground group-hover:opacity-100 focus:opacity-100"
              title={`Copy ${label}`}
              aria-label={`Copy ${label}`}
            >
              {copiedIndex === index ? (
                <Check className="size-3.5 text-emerald-500" />
              ) : (
                <Copy className="size-3.5" />
              )}
            </button>
          );

          return href ? (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="relative block"
            >
              <SpotlightCard className="p-4 transition-all duration-300 hover:border-indigo-500/20 hover:shadow-sm">
                {inner}
                {copyButton}
              </SpotlightCard>
            </a>
          ) : (
            <div key={label} className="relative block">
              <SpotlightCard className="p-4 transition-all duration-300">
                {inner}
                {copyButton}
              </SpotlightCard>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
