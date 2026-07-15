import { Cloud, Code, Database, Layers, Server } from "lucide-react";
import { portfolio } from "@/lib/portfolio";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { Badge } from "@/components/ui/badge";
import { Section, SectionHeading } from "@/components/section";

const groups = [
  { key: "frontend", label: "Frontend", icon: Code },
  { key: "backend", label: "Backend", icon: Server },
  { key: "databases", label: "Databases", icon: Database },
  { key: "cloud_devops", label: "Cloud & DevOps", icon: Cloud },
  {
    key: "architecture_practices",
    label: "Architecture & Practices",
    icon: Layers,
  },
] as const;

export function Skills() {
  const skills = portfolio.technical_skills;

  return (
    <Section id="skills">
      <SectionHeading label="Toolkit" title="Technical Skills" />
      <div className="grid gap-4 sm:grid-cols-2">
        {groups.map(({ key, label, icon: Icon }) => (
          <SpotlightCard key={key} className="p-6">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="flex size-9 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-600 transition-all duration-300 group-hover:scale-105 group-hover:bg-indigo-600 group-hover:text-white dark:bg-indigo-500/20 dark:text-indigo-400">
                  <Icon className="size-4.5" />
                </span>
                <h3 className="font-heading text-base font-semibold leading-none tracking-tight">
                  {label}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills[key].map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="transition-all duration-200 hover:scale-[1.06] hover:bg-indigo-500/15 hover:text-indigo-700 dark:hover:bg-indigo-400/20 dark:hover:text-indigo-300"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </SpotlightCard>
        ))}
      </div>
    </Section>
  );
}
