import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Hero } from "@/components/sections/hero";
import { Skills } from "@/components/sections/skills";
import { Experience } from "@/components/sections/experience";
import { Contact } from "@/components/sections/contact";
import { ScrollProgress } from "@/components/ui/scroll-progress";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <SiteHeader />
      
      <div className="relative min-h-screen w-full overflow-hidden">
        {/* Subtle grid pattern layer */}
        <div className="absolute inset-0 -z-30 bg-[radial-gradient(var(--border)_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_at_center,black_70%,transparent_100%)] opacity-40 dark:opacity-30" />
        
        {/* Ambient background glows */}
        <div className="pointer-events-none absolute inset-0 -z-20">
          {/* Top-left Indigo Glow */}
          <div className="absolute -top-[10%] -left-[10%] h-[40vw] w-[40vw] max-w-[500px] rounded-full bg-[radial-gradient(circle,oklch(0.6_0.25_280_/_0.06)_0%,transparent_70%)] blur-[80px] dark:bg-[radial-gradient(circle,oklch(0.6_0.25_280_/_0.09)_0%,transparent_70%)]" />
          {/* Middle-right Emerald/Teal Glow */}
          <div className="absolute top-[35%] -right-[10%] h-[45vw] w-[45vw] max-w-[600px] rounded-full bg-[radial-gradient(circle,oklch(0.7_0.2_170_/_0.04)_0%,transparent_70%)] blur-[100px] dark:bg-[radial-gradient(circle,oklch(0.7_0.2_170_/_0.07)_0%,transparent_70%)]" />
          {/* Bottom-left Rose/Violet Glow */}
          <div className="absolute bottom-[10%] -left-[10%] h-[40vw] w-[40vw] max-w-[500px] rounded-full bg-[radial-gradient(circle,oklch(0.65_0.22_320_/_0.04)_0%,transparent_70%)] blur-[90px] dark:bg-[radial-gradient(circle,oklch(0.65_0.22_320_/_0.07)_0%,transparent_70%)]" />
        </div>

        <main className="flex-1">
          <Hero />
          <Skills />
          <Experience />
          <Contact />
        </main>
      </div>

      <SiteFooter />
    </>
  );
}
