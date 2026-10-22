import Wrapper from "@/components/ui/misc/wrapper.tsx";
import SectionLabel from "@/components/ui/misc/section-label.tsx";
import {SwipeLine, SwipeTitle} from "@/components/ui/swipe-title.tsx";
import {ClipboardCheck, HardHat, ShieldCheck, Truck} from "lucide-react";

const pillars = [
    {
        icon: Truck,
        title: "Short- & Long-Term Hire",
        description: "Flexible mobile and all-terrain crane rental available for once-off lifts, short-term jobs, or long-term projects."
    },
    {
        icon: ClipboardCheck,
        title: "Engineered Lift Plans",
        description: "Thorough site surveys, load calculations, and rigging studies completed before the lift begins."
    },
    {
        icon: HardHat,
        title: "All-Sector Capability",
        description: "Certified operators, skilled riggers, and dedicated supervision supporting any industry or site environment."
    },
    {
        icon: ShieldCheck,
        title: "Uncompromising Safety",
        description: "Strict compliance and zero-shortcut execution across routine lifts and complex heavy projects."
    }
];

function HomeHeroSplit() {
    return (
        <section
            className="relative overflow-hidden py-10 lg:py-12 bg-linear-to-br from-zinc-950 via-primary/95 to-primary text-white border-y border-white/10">
            {/* Dotted pattern with radial gradient mask from top right */}
            <div
                aria-hidden={true}
                className="pointer-events-none opacity-20 absolute inset-0 bg-[radial-gradient(circle,#ffffff40_2px,transparent_2px)] bg-size-[16px_16px] mask-[radial-gradient(ellipse_at_top_right,black_35%,transparent_60%)]"
            />

            <Wrapper className="relative z-10">
                <div className="flex flex-col gap-6 lg:gap-8">
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 lg:gap-8">
                        <div className="space-y-2">
                            <SectionLabel className="text-white">End-to-End Lifting Partner</SectionLabel>
                            <h2>
                                <SwipeTitle
                                    className="text-2xl sm:text-3xl md:text-4xl font-black font-heading tracking-tighter uppercase text-white text-balance">
                                    <SwipeLine>Short- &amp; Long-Term Crane Hire Across Every Sector</SwipeLine>
                                </SwipeTitle>
                            </h2>
                        </div>
                        <p className="max-w-xl text-sm sm:text-base leading-relaxed text-white/85">
                            From quick short-term crane rentals to long-term project deployments, Target Cranes delivers
                            turnkey lifting solutions tailored to your site, load, and schedule across any industry.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t border-white/15">
                        {pillars.map((pillar) => {
                            const Icon = pillar.icon;
                            return (
                                <div
                                    key={pillar.title}
                                    className="group flex items-start gap-3.5 rounded-xl border border-white/15 bg-white/5 p-4 backdrop-blur-xs transition-colors hover:bg-white/10 hover:border-white/25"
                                >
                                    <div
                                        className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-white/15 text-white ring-1 ring-white/20 transition-transform group-hover:scale-105">
                                        <Icon className="size-4" strokeWidth={2}/>
                                    </div>
                                    <div className="space-y-1">
                                        <h3 className="font-heading text-base font-bold uppercase tracking-wide text-white leading-tight">
                                            {pillar.title}
                                        </h3>
                                        <p className="text-xs leading-relaxed text-white/80">
                                            {pillar.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </Wrapper>
        </section>
    );
}

export default HomeHeroSplit;

HomeHeroSplit.displayName = 'HomeHeroSplit';

