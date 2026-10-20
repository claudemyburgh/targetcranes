import AppLayout from "@/layouts/app-layout";
import {Seo} from "@/components/seo";
import Wrapper from "@/components/ui/misc/wrapper";
import SectionLabel from "@/components/ui/misc/section-label";
import DotPattern from "@/components/ui/misc/dot-pattern";
import {SwipeLine, SwipeTitle} from "@/components/ui/swipe-title";
import {siteStats} from "@/lib/site-stats";
import {Award, HardHat} from "lucide-react";

// @ts-ignore
import aboutHeroImg from "@/../images/cutom-lines.webp";
// @ts-ignore
import depotImg from "@/../images/IMG-20261008-WA0045.webp";
// @ts-ignore
import teamImg from "@/../images/IMG-20261008-WA0042.webp";

export default function AboutUs() {
    return (
        <AppLayout>
            <Seo
                title="About Us"
                description={`Learn about Target Cranes, our company origins in Cape Town, ${siteStats.combinedExperienceYears} years of combined management experience, and our uncompromising commitment to safety and precision lifting.`}
            />

            {/* Hero / Overview */}
            <section className="pt-28 pb-16 lg:pt-36 lg:pb-24 bg-background relative overflow-hidden">
                <DotPattern corner="top-right"/>
                <DotPattern corner="bottom-left"/>
                <Wrapper className="relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                        <div className="lg:col-span-7 space-y-6">
                            <SectionLabel className="mb-4">Company Overview</SectionLabel>

                            <h2>
                                <SwipeTitle
                                    className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading tracking-tighter uppercase text-balance">
                                    <SwipeLine>Built On Experience,</SwipeLine>
                                    <SwipeLine>
                                        <span
                                            className="bg-linear-to-r from-primary to-primary inline-block px-1 bg-clip-text text-transparent">
                                            Trusted Across South Africa
                                        </span>
                                    </SwipeLine>
                                </SwipeTitle>
                            </h2>

                            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl font-medium">
                                Headquartered in Bellville South, Cape Town, Target Cranes provides precision mobile
                                crane hire, heavy rigging, and managed lifting operations to South Africa&rsquo;s most
                                demanding industries.
                            </p>

                            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
                                From routine equipment installations to complex multi-crane industrial lifts, our
                                operations are defined by rigorous preparation, verified equipment reliability, and
                                close collaboration with on-site contractors.
                            </p>
                        </div>

                        <div className="lg:col-span-5">
                            <div
                                className="relative aspect-[4/5] w-full rounded-3xl overflow-hidden border border-border shadow-xl bg-card">
                                <img
                                    src={aboutHeroImg}
                                    alt="Target Cranes fleet and operations"
                                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                />
                                <div
                                    className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent pointer-events-none"/>
                            </div>
                        </div>
                    </div>
                </Wrapper>
            </section>

            {/* Company Heritage & Leadership */}
            <section className="py-20 lg:py-28 bg-muted/40 border-y border-border relative overflow-hidden">
                <DotPattern corner="bottom-right"/>
                <Wrapper className="relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                        <div className="lg:col-span-5 order-2 lg:order-1">
                            <div
                                className="relative aspect-[4/5] w-full rounded-3xl overflow-hidden border border-border shadow-xl bg-card">
                                <img
                                    src={depotImg}
                                    alt="Target Cranes Bellville South depot"
                                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                />
                            </div>
                        </div>

                        <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
                            <SectionLabel className="mb-2">Leadership &amp; Pedigree</SectionLabel>

                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading tracking-tight uppercase text-foreground">
                                {siteStats.combinedExperienceYears} Years Combined Management Experience
                            </h2>

                            <div className="space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
                                <p>
                                    Target Cranes brings together more than five decades of collective leadership across
                                    heavy rigging, mobile crane operations, civil engineering, and specialised
                                    transport.
                                </p>
                                <p>
                                    Our senior management and project supervisors have guided lifting contracts across
                                    mining infrastructure, maritime dry-docks, power stations, and landmark commercial
                                    developments across the African continent.
                                </p>
                                <p className="text-foreground font-medium pt-2">
                                    This depth of practical knowledge ensures that before wheels roll or outriggers
                                    extend, your lift has been evaluated by professionals who understand site realities.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                                <div className="rounded-2xl border border-border bg-card p-5 space-y-2">
                                    <Award className="w-6 h-6 text-primary"/>
                                    <h3 className="font-bold font-heading uppercase text-sm text-foreground">{siteStats.yearsInBusiness} Years
                                        Track Record</h3>
                                    <p className="text-xs text-muted-foreground leading-relaxed">
                                        Established company reputation delivering lifts for major national contractors.
                                    </p>
                                </div>
                                <div className="rounded-2xl border border-border bg-card p-5 space-y-2">
                                    <HardHat className="w-6 h-6 text-primary"/>
                                    <h3 className="font-bold font-heading uppercase text-sm text-foreground">Certified
                                        Personnel</h3>
                                    <p className="text-xs text-muted-foreground leading-relaxed">
                                        Accredited crane operators, master riggers, and dedicated on-site lift
                                        supervisors.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Wrapper>
            </section>

           
        </AppLayout>
    );
}
