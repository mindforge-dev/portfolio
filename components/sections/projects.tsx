"use client";

import * as React from "react";
import Image from "next/image";
import { ExternalLink, X, Check, Code, Server, Cloud, Info } from "lucide-react";
import { portfolio, Project } from "@/lib/portfolio";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { Badge } from "@/components/ui/badge";
import { Section, SectionHeading } from "@/components/section";
import { GithubIcon } from "@/components/icons";
import { buttonVariants } from "@/components/ui/button";

export function Projects() {
  const projects = portfolio.projects;
  const [selectedProject, setSelectedProject] = React.useState<Project | null>(null);
  const [activeTab, setActiveTab] = React.useState<"features" | "stack">("features");

  // Prevent scroll when modal is open
  React.useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  return (
    <Section id="projects">
      <SectionHeading label="Portfolio" title="Featured Projects" />
      
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <SpotlightCard key={project.id} className="flex flex-col h-full overflow-hidden p-0 group">
            {/* Project Image Container */}
            <div className="relative aspect-video w-full overflow-hidden border-b border-border/40">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <button
                  onClick={() => {
                    setSelectedProject(project);
                    setActiveTab("features");
                  }}
                  className="rounded-lg bg-primary/95 text-primary-foreground px-4 py-2 text-xs font-semibold shadow-lg hover:bg-primary transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <Info className="size-3.5" />
                  Explore Project Details
                </button>
              </div>
            </div>

            {/* Project Content */}
            <div className="flex flex-1 flex-col p-6">
              <h3 className="font-heading text-lg font-bold leading-tight mb-2 tracking-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                {project.summary}
              </p>

              {/* Tag Badges */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.tags.slice(0, 5).map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="text-[10px] font-medium bg-muted/60 hover:bg-muted"
                  >
                    {tag}
                  </Badge>
                ))}
                {project.tags.length > 5 && (
                  <Badge variant="outline" className="text-[10px] font-medium">
                    +{project.tags.length - 5} more
                  </Badge>
                )}
              </div>

              {/* Actions */}
              <div className="flex items-center gap-3 mt-auto pt-4 border-t border-border/40">
                <button
                  onClick={() => {
                    setSelectedProject(project);
                    setActiveTab("features");
                  }}
                  className="flex-1 text-center py-2 px-3 text-xs font-semibold rounded-md border border-border bg-background hover:bg-muted transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Info className="size-3.5" />
                  Details
                </button>
                <a
                  href={project.github_url}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-md border border-border bg-background hover:bg-muted text-muted-foreground hover:text-foreground transition-colors flex items-center justify-center"
                  title="View GitHub Repository"
                >
                  <GithubIcon className="size-4" />
                </a>
                <a
                  href={project.live_url}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-md border border-border bg-background hover:bg-muted text-muted-foreground hover:text-foreground transition-colors flex items-center justify-center"
                  title="Visit Live Site"
                >
                  <ExternalLink className="size-4" />
                </a>
              </div>
            </div>
          </SpotlightCard>
        ))}
      </div>

      {/* Interactive Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-md animate-fade-in">
          {/* Close Backdrop click */}
          <div className="absolute inset-0" onClick={() => setSelectedProject(null)} />
          
          <div className="relative w-full max-w-4xl bg-card border border-border rounded-xl shadow-2xl overflow-y-auto md:overflow-hidden flex flex-col md:flex-row max-h-[90vh] md:max-h-[85vh] animate-scale-up">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-50 p-2 rounded-full border border-border/50 bg-background/80 hover:bg-muted backdrop-blur-sm transition-colors text-muted-foreground hover:text-foreground cursor-pointer"
            >
              <X className="size-4" />
            </button>

            {/* Left Column: Visuals & Links */}
            <div className="w-full md:w-5/12 bg-muted/20 border-b md:border-b-0 md:border-r border-border/50 flex flex-col">
              <div className="relative aspect-video md:aspect-auto md:flex-1 w-full bg-black/5 overflow-hidden">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6 flex flex-col gap-3">
                <a
                  href={selectedProject.live_url}
                  target="_blank"
                  rel="noreferrer"
                  className={buttonVariants({
                    className: "w-full flex items-center justify-center gap-2",
                  })}
                >
                  <ExternalLink className="size-4" />
                  Visit Live Application
                </a>
                <a
                  href={selectedProject.github_url}
                  target="_blank"
                  rel="noreferrer"
                  className={buttonVariants({
                    variant: "outline",
                    className: "w-full flex items-center justify-center gap-2",
                  })}
                >
                  <GithubIcon className="size-4" />
                  View GitHub Source
                </a>
              </div>
            </div>

            {/* Right Column: Interactive Details */}
            <div className="w-full md:w-7/12 flex flex-col md:overflow-hidden">
              {/* Modal Header */}
              <div className="p-6 pb-4 border-b border-border/40">
                <h3 className="font-heading text-xl font-bold tracking-tight mb-2">
                  {selectedProject.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              {/* Tab Navigation */}
              <div className="flex border-b border-border/40 px-6">
                <button
                  onClick={() => setActiveTab("features")}
                  className={`py-3 text-sm font-semibold border-b-2 px-2 transition-all mr-6 cursor-pointer ${
                    activeTab === "features"
                      ? "border-primary text-foreground"
                      : "border-transparent text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Key Features
                </button>
                <button
                  onClick={() => setActiveTab("stack")}
                  className={`py-3 text-sm font-semibold border-b-2 px-2 transition-all cursor-pointer ${
                    activeTab === "stack"
                      ? "border-primary text-foreground"
                      : "border-transparent text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Technical Stack
                </button>
              </div>

              {/* Scrollable Tab Contents */}
              <div className="flex-1 p-6 md:overflow-y-auto md:min-h-[250px] md:max-h-[50vh]">
                {activeTab === "features" && (
                  <ul className="flex flex-col gap-3">
                    {selectedProject.features.map((feature, idx) => (
                      <li key={idx} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                        <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400">
                          <Check className="size-3" />
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {activeTab === "stack" && (
                  <div className="flex flex-col gap-6">
                    {selectedProject.tech_stack.frontend && (
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3 flex items-center gap-1.5">
                          <Code className="size-3.5 text-indigo-500" />
                          Frontend / UI
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {selectedProject.tech_stack.frontend.map((item) => (
                            <Badge key={item} variant="outline" className="text-xs py-1">
                              {item}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}

                    {selectedProject.tech_stack.backend && (
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3 flex items-center gap-1.5">
                          <Server className="size-3.5 text-emerald-500" />
                          Backend / DB / Services
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {selectedProject.tech_stack.backend.map((item) => (
                            <Badge key={item} variant="outline" className="text-xs py-1">
                              {item}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}

                    {selectedProject.tech_stack.infrastructure && (
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3 flex items-center gap-1.5">
                          <Cloud className="size-3.5 text-cyan-500" />
                          Infrastructure / DevOps / CI-CD
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {selectedProject.tech_stack.infrastructure.map((item) => (
                            <Badge key={item} variant="outline" className="text-xs py-1">
                              {item}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </Section>
  );
}
