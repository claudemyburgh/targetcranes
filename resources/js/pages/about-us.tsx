import AppLayout from "@/layouts/app-layout";
import {Seo} from "@/components/seo";
import Wrapper from "@/components/ui/misc/wrapper";
import SectionLabel from "@/components/ui/misc/section-label";
import DotPattern from "@/components/ui/misc/dot-pattern";
import StackedCard from "@/components/ui/misc/stacked-card";
import {SwipeLine, SwipeTitle} from "@/components/ui/swipe-title";
import {siteStats} from "@/lib/site-stats";
import {Award, Building2, CalendarClock, ClipboardCheck, Clock, Compass, HardHat, ShieldCheck, Truck} from "lucide-react";

// @ts-ignore
import aboutHeroImg from "@/../images/dirt.webp";
// @ts-ignore
import depotImg from "@/../images/IMG-20261008-WA0045.webp";
// @ts-ignore
import teamImg from "@/../images/IMG-20261008-WA0042.webp";
import ScrollDivider from "@/components/scroll-divider.tsx";

export default function AboutUs() {
    return (
        <AppLayout>
            <Seo
                title="About Us"
                description={`Learn about Target Cranes, our company origins in Cape Town, ${siteStats.combinedExperienceYears} years of combined management experience, and our flexible short- and long-term mobile crane rental services across South Africa.`}
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
                                Headquartered in Bellville South, Cape Town, Target Cranes provides flexible short- and
                                long-term mobile crane hire, heavy rigging, and managed lifting operations across all
                                industries in South Africa.
                            </p>

                            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
                                We are never limited to a single sector. From quick once-off equipment lifts and
                                short-term crane rentals to long-term contract deployments and complex multi-crane
                                operations, our work is defined by rigorous preparation, verified equipment reliability,
                                and close collaboration with on-site teams.
                            </p>
                        </div>

                        <div className="lg:col-span-5">
                            <StackedCard>
                                <div
                                    className="relative aspect-4/5 w-full rounded-3xl overflow-hidden border border-border shadow-xl bg-card">
                                    <img
                                        src={aboutHeroImg}
                                        alt="Target Cranes fleet and operations"
                                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                    />
                                    <div
                                        className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent pointer-events-none"/>
                                </div>
                            </StackedCard>
                        </div>
                    </div>
                </Wrapper>
            </section>


            <ScrollDivider
                texts={[
                    <>
                        <span className="inline-flex items-center gap-4 uppercase font-heading">
                            <Building2 className="size-12 shrink-0" strokeWidth={2.5}/>
                            <span>Bellville South Headquarters</span>
                        </span>
                        &nbsp;<span className="mx-3.75 inline-flex items-center">•</span>&nbsp;
                        <span className="inline-flex items-center gap-4 uppercase font-heading">
                            <Truck className="size-12 shrink-0" strokeWidth={2.5}/>
                            <span>Modern Multi-Axle Crane Fleet</span>
                        </span>
                        &nbsp;<span className="mx-3.75 inline-flex items-center">•</span>&nbsp;
                        <span className="inline-flex items-center gap-4 uppercase font-heading">
                            <Compass className="size-12 shrink-0" strokeWidth={2.5}/>
                            <span>Detailed Pre-Lift Site Evaluations</span>
                        </span>
                        &nbsp;<span className="mx-3.75 inline-flex items-center">•</span>&nbsp;
                        <span className="inline-flex items-center gap-4 uppercase font-heading">
                            <ShieldCheck className="size-12 shrink-0" strokeWidth={2.5}/>
                            <span>Comprehensive Liability &amp; Equipment Cover</span>
                        </span>
                    </>,
                    <>
                        <span className="inline-flex items-center gap-4 uppercase font-heading">
                            <HardHat className="size-12 shrink-0" strokeWidth={2.5}/>
                            <span>Dedicated On-Site Lift Supervisors</span>
                        </span>
                        &nbsp;<span className="mx-3.75 inline-flex items-center">•</span>&nbsp;
                        <span className="inline-flex items-center gap-4 uppercase font-heading">
                            <ClipboardCheck className="size-12 shrink-0" strokeWidth={2.5}/>
                            <span>Audit-Ready Contractor Documentation</span>
                        </span>
                        &nbsp;<span className="mx-3.75 inline-flex items-center">•</span>&nbsp;
                        <span className="inline-flex items-center gap-4 uppercase font-heading">
                            <CalendarClock className="size-12 shrink-0" strokeWidth={2.5}/>
                            <span>Flexible Short- &amp; Long-Term Packages</span>
                        </span>
                        &nbsp;<span className="mx-3.75 inline-flex items-center">•</span>&nbsp;
                        <span className="inline-flex items-center gap-4 uppercase font-heading">
                            <Clock className="size-12 shrink-0" strokeWidth={2.5}/>
                            <span>Western Cape &amp; Nationwide Dispatch</span>
                        </span>
                    </>
                ]}
            />

            {/* Company Heritage & Leadership */}
            <section className="py-20 lg:py-28 bg-muted/40 border-y border-border relative overflow-hidden">
                <DotPattern corner="bottom-right"/>
                <Wrapper className="relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                        <div className="lg:col-span-5 order-2 lg:order-1">
                            <StackedCard>
                                <div
                                    className="relative aspect-4/5 w-full rounded-3xl overflow-hidden border border-border shadow-xl bg-card">
                                    <img
                                        src={depotImg}
                                        alt="Target Cranes Bellville South depot"
                                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                    />
                                </div>
                            </StackedCard>
                        </div>

                        <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
                            <SectionLabel className="mb-2">Leadership &amp; Pedigree</SectionLabel>

                            <h2>
                                <SwipeTitle
                                    className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading tracking-tight uppercase text-foreground">
                                    <SwipeLine>{siteStats.combinedExperienceYears}+ Years Combined</SwipeLine>
                                    <SwipeLine>
                                        <span
                                            className="bg-linear-to-r from-primary to-primary inline-block px-1 bg-clip-text text-transparent">
                                            Management Experience
                                        </span>
                                    </SwipeLine>
                                </SwipeTitle>
                            </h2>

                            <div className="space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
                                <p>
                                    Target Cranes brings together more than a century of collective leadership across
                                    short- and long-term mobile crane rental, heavy rigging, engineered lifting, and
                                    specialised transport.
                                </p>
                                <p>
                                    Our senior management and project supervisors have guided lifting contracts of every
                                    scale. We support commercial, industrial, civil, infrastructure, marine, energy,
                                    manufacturing, and bespoke projects across the African continent.
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
                                        in Business</h3>
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
