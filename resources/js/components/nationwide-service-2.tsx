import Wrapper from "@/components/ui/misc/wrapper.tsx";
import {SwipeLine, SwipeTitle} from "@/components/ui/swipe-title.tsx";
import SectionLabel from "@/components/ui/misc/section-label.tsx";
import DotPattern from "@/components/ui/misc/dot-pattern.tsx";
import {siteStats} from "@/lib/site-stats.ts";
import {Award, Clock, HardHat, ShieldCheck} from "lucide-react";
// @ts-ignore
import bgImg from "../../images/black-white.webp";

const nationwideStats = [
    {
        number: "01",
        icon: Award,
        value: siteStats.yearsInBusiness,
        label: "Years in Business",
        description: "Providing flexible short- and long-term mobile crane rental and heavy rigging services across all industries.",
    },
    {
        number: "02",
        icon: ShieldCheck,
        value: `${siteStats.combinedExperienceYears}+`,
        label: "Years Management Experience",
        description: "Collective senior leadership guiding complex lifting contracts and site operations nationwide.",
    },
    {
        number: "03",
        icon: HardHat,
        value: siteStats.successfulProjects,
        label: "Successful Projects",
        description: "Completed with precision and safety, ranging from routine commercial lifts to major infrastructure projects.",
    },
    {
        number: "04",
        icon: Clock,
        value: siteStats.availability,
        label: "Operational Availability",
        description: "Ready to mobilise and respond to your scheduled or emergency lifting requirements anytime, day or night.",
    },
];

export function NationwideService2() {
    return (
        <section className="bg-background border-t border-border py-20 lg:py-28 relative overflow-x-clip">
            {/* Subtle background texture */}
            <div aria-hidden={true} className="pointer-events-none absolute inset-0 overflow-hidden z-0">
                <div
                    className="absolute inset-0 opacity-8 dark:opacity-20"
                    style={{
                        backgroundImage: `url(${bgImg})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        maskImage:
                            "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
                        WebkitMaskImage:
                            "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
                    }}
                />
                <DotPattern corner="top-right"/>
                <DotPattern corner="bottom-left"/>
            </div>

            <Wrapper className="relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                    {/* Left side: Sticky Text */}
                    <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-6">
                        <SectionLabel>Target Cranes in South Africa</SectionLabel>

                        <h2>
                            <SwipeTitle
                                className="text-4xl sm:text-5xl md:text-6xl font-black font-heading tracking-tighter uppercase text-balance">
                                <SwipeLine>Target Cranes</SwipeLine>
                                <SwipeLine>
                                    <span
                                        className="bg-linear-to-r from-primary to-primary inline-block px-1 bg-clip-text text-transparent">
                                        In South Africa
                                    </span>
                                </SwipeLine>
                            </SwipeTitle>
                        </h2>

                        <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
                            From our main depot in Bellville South, Cape Town, we mobilise mobile cranes and rigging
                            crews to project sites across the Western Cape and throughout South Africa.
                        </p>
                    </div>

                    {/* Right side: 2x2 Stat Grid */}
                    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {nationwideStats.map((stat) => {
                            const Icon = stat.icon;
                            return (
                                <div
                                    key={stat.label}
                                    className="group relative flex flex-col justify-between rounded-3xl border border-border bg-card/85 backdrop-blur-xs p-7 sm:p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg overflow-hidden"
                                >
                                    {/* Top subtle accent line */}
                                    <div
                                        aria-hidden={true}
                                        className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-linear-to-r from-transparent via-primary/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                    />

                                    <div>
                                        <div className="flex items-center justify-between gap-4 mb-6">
                                            <div
                                                className="flex size-12 shrink-0 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                                                <Icon className="size-6" strokeWidth={1.75}/>
                                            </div>
                                          
                                        </div>

                                        <div className="space-y-2 mb-4">
                                            <div
                                                className="text-4xl sm:text-5xl font-black font-heading tracking-tighter text-primary">
                                                {stat.value}
                                            </div>
                                            <h3 className="text-lg font-black font-heading uppercase tracking-tight text-foreground">
                                                {stat.label}
                                            </h3>
                                        </div>
                                    </div>

                                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed border-t border-border/60 pt-4">
                                        {stat.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </Wrapper>
        </section>
    );
}

export default NationwideService2;
