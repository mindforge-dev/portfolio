import { Languages as LanguagesIcon } from "lucide-react";
import { portfolio } from "@/lib/portfolio";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Section, SectionHeading } from "@/components/section";

export function About() {
  const { languages } = portfolio;

  return (
    <Section id="about">
      <SectionHeading label="Background" title="Education & Languages" />
      <div className="grid gap-4 sm:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <LanguagesIcon className="size-4 text-muted-foreground" />
              Languages
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            {languages?.map((item) => (
              <div
                key={item.language}
                className="flex items-center justify-between"
              >
                <span className="font-medium">{item.language}</span>
                <Badge variant="secondary">{item.proficiency}</Badge>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}
