import { Briefcase } from "lucide-react";
import { portfolio } from "@/lib/portfolio";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { Badge } from "@/components/ui/badge";
import { Section, SectionHeading } from "@/components/section";

export function Experience() {
  const jobs = portfolio.work_experience;

  return (
    <Section id="experience">
      <SectionHeading label="Career" title="Work Experience" />
      <div className="flex flex-col gap-4">
        {jobs.map((job) => (
          <SpotlightCard key={job.company} className="p-6">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-xl border border-border bg-muted transition-all duration-300 group-hover:bg-indigo-500/10 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                    <Briefcase className="size-4.5" />
                  </span>
                  <div>
                    <h3 className="font-heading text-base font-semibold leading-tight sm:text-lg">
                      {job.company}
                    </h3>
                    <p className="text-sm text-muted-foreground">{job.role}</p>
                  </div>
                </div>
                <Badge
                  variant="outline"
                  className="w-fit shrink-0 border-indigo-500/20 bg-indigo-500/5 text-indigo-600 dark:border-indigo-400/20 dark:bg-indigo-400/5 dark:text-indigo-400"
                >
                  {job.period}
                </Badge>
              </div>
              <ul className="flex flex-col gap-2.5">
                {job.responsibilities.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-relaxed text-muted-foreground transition-colors duration-200 hover:text-foreground"
                  >
                    <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-indigo-500/60 ring-[3px] ring-indigo-500/10 transition-transform duration-300 group-hover:scale-110" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </SpotlightCard>
        ))}
      </div>
    </Section>
  );
}
