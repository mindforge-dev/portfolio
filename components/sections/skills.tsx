import { Cloud, Code, Database, Layers, Server } from "lucide-react";
import { portfolio } from "@/lib/portfolio";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
          <Card key={key} className="transition-colors hover:ring-foreground/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon className="size-4 text-muted-foreground" />
                {label}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {skills[key].map((skill) => (
                <Badge key={skill} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
