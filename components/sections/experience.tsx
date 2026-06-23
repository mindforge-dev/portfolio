import { Briefcase } from "lucide-react";
import { portfolio } from "@/lib/portfolio";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Section, SectionHeading } from "@/components/section";

export function Experience() {
  const jobs = portfolio.work_experience;

  return (
    <Section id="experience">
      <SectionHeading label="Career" title="Work Experience" />
      <div className="flex flex-col gap-4">
        {jobs.map((job) => (
          <Card key={job.company} className="transition-colors hover:ring-foreground/20">
            <CardHeader>
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg border border-border bg-muted">
                    <Briefcase className="size-4 text-muted-foreground" />
                  </span>
                  <div>
                    <CardTitle className="text-base sm:text-lg">
                      {job.company}
                    </CardTitle>
                    <CardDescription>{job.role}</CardDescription>
                  </div>
                </div>
                <Badge variant="outline" className="w-fit shrink-0">
                  {job.period}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="flex flex-col gap-2">
                {job.responsibilities.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground"
                  >
                    <span className="mt-2 size-1 shrink-0 rounded-full bg-foreground/30" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
