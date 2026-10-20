import Wrapper from "@/components/ui/misc/wrapper";
import SectionHeading from "@/components/ui/misc/section-heading";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger,} from "@/components/ui/accordion";
import React from "react";

// @ts-ignore
import imgSafety from "../../images/safety.webp";

export const safetyItems = [
    {
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
        <section className="py-24 bg-muted/30  relative overflow-hidden">

            <Wrapper>
                <div className="block relative z-10">

                    {/* Floated Image with CSS Shape-Outside */}
                    <img
                        src={imgSafety}
                        alt="Target Cranes Precision Safety Operations"
                        className="float-none lg:float-right mx-auto lg:mx-0 w-3/4 max-w-xs sm:w-1/2 lg:w-[38%] lg:max-w-none rounded-xl drop-shadow-black object-contain lg:ml-10 mb-8 lg:mb-4 mt-2 lg:mt-4"
                        style={{
                            shapeOutside: `url(${imgSafety})`,
                            shapeImageThreshold: 0.1,
                            shapeMargin: '1.5rem'
                        }}
                    />

                    {/* Text & Accordion */}
                    <div className="space-y-10">
                        <SectionHeading
                            title="SAFETY STARTS WELL BEFORE THE LIFT"
                            label="Our Core Priority"
                            align="left"
                        />

                        <div className="text-muted-foreground text-base sm:text-lg leading-relaxed space-y-6">
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

                        <div className="pt-4">
                            <Accordion className="border-t-0">
                                {safetyItems.map((item, index) => (
                                    <AccordionItem
                                        key={index}
                                        value={`item-${index}`}
                                        className="py-2"
                                    >
                                        <AccordionTrigger
                                            className="text-left font-bold text-lg py-5 hover:no-underline hover:text-primary transition-colors">
                                            {item.title}
                                        </AccordionTrigger>
                                        <AccordionContent className="pb-6">
                                            <div className="text-muted-foreground leading-relaxed text-base max-w-none">
                                                {item.content}
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    </div>

                    {/* Clearfix to ensure container wraps floated element if it's taller than text */}
                    <div className="clear-both"></div>
                </div>
            </Wrapper>
        </section>
    );
}

export default HomeSafetyPracticesSection;
