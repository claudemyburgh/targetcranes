import Wrapper from "@/components/ui/misc/wrapper";
import SectionHeading from "@/components/ui/misc/section-heading";
import SectionLabel from "@/components/ui/misc/section-label";
import DotPattern from "@/components/ui/misc/dot-pattern";
import {SwipeLine, SwipeTitle} from "@/components/ui/swipe-title";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import ScrollDivider from "@/components/scroll-divider";
import {AlertOctagon, ClipboardCheck, Compass, FileCheck2, HardHat, Radio, Scale, ShieldCheck} from "lucide-react";
import React from "react";

// @ts-ignore
import imgSafety from "../../images/safety.webp";

export const safetyItems = [
    {
        step: "01",
        icon: Compass,
        title: "Engineered Lift Planning & Ground Verification",
        content: (
            <div className="space-y-3">
                <p>
                    Every lift begins with comprehensive technical evaluation before wheels roll or outriggers extend.
                    Our lift planners assess site access corridors, ground bearing capacity, outrigger pad displacement,
                    and safe working radiuses.
                </p>
                <p>
                    For complex, oversized, or tandem crane lifts, we produce CAD-engineered 2D/3D lift studies, rigging
                    diagrams, and risk mitigation steps to eliminate variables and surprises on site.
                </p>
            </div>
        ),
    },
    {
        step: "02",
        icon: ShieldCheck,
        title: "Statutory Load Testing & Certified Rigging Tackle (DMR 18)",
        content: (
            <div className="space-y-3">
                <p>
                    Every mobile crane in our fleet is backed by current LME and LMI statutory inspection records in
                    full compliance with Driven Machinery Regulations (DMR 18).
                </p>
                <p>
                    Slings, shackles, spreader beams, and auxiliary rigging tackle undergo rigorous quarterly
                    colour-coded tracking, certified proof-load testing, and mandatory daily pre-use checklists.
                </p>
            </div>
        ),
    },
    {
        step: "03",
        icon: HardHat,
        title: "TETA-Accredited Operators & Qualified Master Riggers",
        content: (
            <div className="space-y-3">
                <p>
                    Precision machinery requires verified expertise in the cab and on the ground. Our crane operators,
                    master riggers, and lift directors hold full TETA accreditations and valid Annexure 3 medical
                    fitness certificates.
                </p>
                <p>
                    Ongoing competency assessments and defensive operational training ensure dependable execution across
                    maritime ports, mining yards, power generation plants, and congested civil construction sites.
                </p>
            </div>
        ),
    },
    {
        step: "04",
        icon: FileCheck2,
        title: "Project-Specific RAMS & Daily Toolbox Briefings",
        content: (
            <div className="space-y-3">
                <p>
                    Prior to mobilization, we issue tailored Risk Assessments and Method Statements (RAMS) structured
                    around your project&rsquo;s exact site constraints and operational envelope.
                </p>
                <p>
                    Daily on-site toolbox sessions establish radio frequencies, banksman hand signals, blind-spot
                    awareness, and barricaded exclusion zones before outriggers are deployed.
                </p>
            </div>
        ),
    },
    {
        step: "05",
        icon: AlertOctagon,
        title: "Uncompromising Stop Work Authority",
        content: (
            <div className="space-y-3">
                <p>
                    Safety takes precedence over deadlines without exception. Every Target Cranes crew member, driver,
                    and site supervisor holds unconditional Stop Work Authority.
                </p>
                <p>
                    If sudden wind gusts exceed manufacturer charts, ground shifts occur, or unexpected site hazards
                    arise, operations immediately pause until safe conditions are verified.
                </p>
            </div>
        ),
    },
    {
        step: "06",
        icon: Scale,
        title: "OHSA 85 of 1993 & National SANS Standard Compliance",
        content: (
            <div className="space-y-3">
                <p>
                    Our Health, Safety, and Environmental (HSE) management protocols align strictly with the South
                    African Occupational Health and Safety Act, Construction Regulations 2014, and applicable SANS
                    lifting codes.
                </p>
                <p>
                    We arrive on site with complete, audit-ready safety documentation to streamline principal contractor
                    inductions and client audits.
                </p>
            </div>
        ),
    },
];

export function HomeSafetyPracticesSection() {
    return (
        <>
            {/* Section 1: Core Safety Philosophy + Right-Edge Full-Height Cutout Image */}
            <section className="relative bg-muted/30 border-b border-border overflow-hidden">
                <DotPattern corner="top-left"/>
                <img
                    src={imgSafety}
                    alt="Target Cranes Precision Safety Operations"
                    className="pointer-events-none select-none absolute inset-y-0 right-0 h-full w-auto max-w-none object-cover object-left translate-x-1/4 sm:translate-x-12 lg:translate-x-16 xl:translate-x-0 opacity-15 dark:opacity-20 lg:opacity-100 drop-shadow-black z-0"
                />

                <Wrapper className="relative z-10">
                    <div className="lg:w-2/3 xl:w-[70%] py-16 sm:py-20 lg:py-28 space-y-6 sm:space-y-8">
                        <SectionHeading
                            title="SAFETY STARTS WELL BEFORE THE LIFT"
                            label="Our Core Priority"
                            align="left"
                        />

                        <div
                            className="text-muted-foreground text-base sm:text-lg leading-relaxed space-y-5 sm:space-y-6">
                            <p>
                                <strong>At Target Cranes, safety is an operational discipline</strong> that shapes every
                                lift from initial engineering to final set-down. In heavy lifting and high-risk
                                environments, safety cannot be separated from execution. It dictates equipment
                                configuration, ground preparation, rigging calculations, and how our crews coordinate on
                                site.
                            </p>
                            <p>
                                Our philosophy begins with <strong>proactive hazard identification and engineered risk
                                mitigation</strong> well before outriggers extend. We place equal value on the
                                specialists guiding the equipment: <strong>continuous operator training, certified
                                medical fitness, strict PPE compliance</strong>, and day-to-day mental readiness ensure
                                our team performs with precision and accountability.
                            </p>
                            <p>
                                Health and safety is never treated as a periodic compliance box to tick. It is
                                an <strong>active, daily standard</strong> continually evaluated and strengthened across
                                our operations ensuring the protection of our personnel, client teams, site property,
                                and surrounding communities remains <strong>uncompromised on every job</strong>.
                            </p>
                        </div>
                    </div>
                </Wrapper>
            </section>

            {/* Core Practice Section (Floated Image with Shape-Outside + Exact Content + Accordion) */}
            <ScrollDivider
                texts={[
                    <>
                        <span className="inline-flex items-center gap-4 uppercase font-heading">
                            <ShieldCheck className="size-12 shrink-0" strokeWidth={2.5}/>
                            <span>DMR 18 Statutory Load Testing</span>
                        </span>
                        &nbsp;<span className="mx-3.75 inline-flex items-center">•</span>&nbsp;
                        <span className="inline-flex items-center gap-4 uppercase font-heading">
                            <Scale className="size-12 shrink-0" strokeWidth={2.5}/>
                            <span>OHSA 85 of 1993 &amp; SANS Compliant</span>
                        </span>
                        &nbsp;<span className="mx-3.75 inline-flex items-center">•</span>&nbsp;
                        <span className="inline-flex items-center gap-4 uppercase font-heading">
                            <ClipboardCheck className="size-12 shrink-0" strokeWidth={2.5}/>
                            <span>Certified Proof-Load Rigging Tackle</span>
                        </span>
                        &nbsp;<span className="mx-3.75 inline-flex items-center">•</span>&nbsp;
                        <span className="inline-flex items-center gap-4 uppercase font-heading">
                            <Compass className="size-12 shrink-0" strokeWidth={2.5}/>
                            <span>CAD-Engineered 2D/3D Lift Studies</span>
                        </span>
                    </>,
                    <>
                        <span className="inline-flex items-center gap-4 uppercase font-heading">
                            <HardHat className="size-12 shrink-0" strokeWidth={2.5}/>
                            <span>TETA-Accredited Operators &amp; Riggers</span>
                        </span>
                        &nbsp;<span className="mx-3.75 inline-flex items-center">•</span>&nbsp;
                        <span className="inline-flex items-center gap-4 uppercase font-heading">
                            <FileCheck2 className="size-12 shrink-0" strokeWidth={2.5}/>
                            <span>Site-Specific RAMS &amp; Toolbox Briefings</span>
                        </span>
                        &nbsp;<span className="mx-3.75 inline-flex items-center">•</span>&nbsp;
                        <span className="inline-flex items-center gap-4 uppercase font-heading">
                            <AlertOctagon className="size-12 shrink-0" strokeWidth={2.5}/>
                            <span>Unconditional Stop Work Authority</span>
                        </span>
                        &nbsp;<span className="mx-3.75 inline-flex items-center">•</span>&nbsp;
                        <span className="inline-flex items-center gap-4 uppercase font-heading">
                            <Radio className="size-12 shrink-0" strokeWidth={2.5}/>
                            <span>Verified Ground Bearing &amp; Exclusion Zones</span>
                        </span>
                    </>
                ]}
            />

            {/* Section 2: Dedicated Restyled Safety Protocols Accordion Section */}
            <section className="py-16 sm:py-20 lg:py-28 bg-background border-b border-border relative overflow-x-clip">
                <div aria-hidden={true} className="pointer-events-none absolute inset-0 overflow-hidden z-0">
                    <DotPattern corner="bottom-left"/>
                </div>
                <Wrapper className="relative z-10">
                    <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
                        {/* Left Sticky Column */}
                        <div className="lg:w-5/12 lg:sticky lg:top-32 space-y-4 sm:space-y-6">
                            <SectionLabel>Safety Protocols</SectionLabel>
                            <h2>
                                <SwipeTitle
                                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-heading tracking-tighter uppercase text-foreground text-balance">
                                    <SwipeLine>Disciplined</SwipeLine>
                                    <SwipeLine>
                                        <span
                                            className="bg-linear-to-r from-primary to-primary inline-block px-1 bg-clip-text text-transparent">
                                            Field Standards
                                        </span>
                                    </SwipeLine>
                                </SwipeTitle>
                            </h2>
                            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                                Every mobile crane deployment follows six non-negotiable operational safeguards—from
                                initial ground bearing verification and statutory load testing to on-site exclusion
                                zones and unconditional Stop Work Authority.
                            </p>
                        </div>

                        {/* Right Column: Elevated Card Accordion */}
                        <div className="w-full lg:w-7/12">
                            <Accordion className="divide-y-0 border-b-0 space-y-3 sm:space-y-4">
                                {safetyItems.map((item, index) => {
                                    const Icon = item.icon;
                                    return (
                                        <AccordionItem
                                            key={index}
                                            value={`item-${index}`}
                                            className="rounded-2xl border border-border bg-card px-4 sm:px-6 py-1.5 sm:py-2 shadow-xs transition-all duration-300 hover:border-primary/30 data-[state=open]:border-primary/50 data-[state=open]:shadow-md data-[state=open]:ring-1 data-[state=open]:ring-primary/15 last:border-b"
                                        >
                                            <AccordionTrigger className="py-3.5 sm:py-4 hover:no-underline">
                                                <div className="flex items-center gap-3 sm:gap-4">
                                                    <div
                                                        className="flex size-9 sm:size-11 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary transition-colors group-data-[state=open]:bg-primary group-data-[state=open]:text-primary-foreground">
                                                        <Icon className="size-4 sm:size-5" strokeWidth={1.75}/>
                                                    </div>
                                                    <div className="flex flex-col gap-0.5">
                                                        <span
                                                            className="font-mono text-[11px] sm:text-xs font-bold uppercase tracking-widest text-primary">
                                                            Protocol {item.step}
                                                        </span>
                                                        <span
                                                            className="font-heading text-base sm:text-lg md:text-xl font-black uppercase tracking-tight text-foreground group-hover:text-primary transition-colors leading-snug">
                                                            {item.title}
                                                        </span>
                                                    </div>
                                                </div>
                                            </AccordionTrigger>
                                            <AccordionContent className="pb-4 sm:pb-5 pt-1 sm:pt-2">
                                                <div
                                                    className="border-t border-border/60 pt-3.5 sm:pt-4 pl-0 sm:pl-15 text-muted-foreground leading-relaxed text-sm sm:text-base">
                                                    {item.content}
                                                </div>
                                            </AccordionContent>
                                        </AccordionItem>
                                    );
                                })}
                            </Accordion>
                        </div>
                    </div>
                </Wrapper>
            </section>
        </>
    );
}

export default HomeSafetyPracticesSection;
