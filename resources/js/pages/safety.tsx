import AppLayout from "@/layouts/app-layout";
import {Seo} from "@/components/seo";
import Wrapper from "@/components/ui/misc/wrapper";
import SectionLabel from "@/components/ui/misc/section-label";
import {SwipeLine, SwipeTitle} from "@/components/ui/swipe-title";
import HomeSafetyPracticesSection from "@/components/home-safety-practices-section";
import {Link} from "@inertiajs/react";
import {contactUs} from "@/routes";
import {
    AlertOctagon,
    ArrowRight,
    Award,
    CheckCircle2,
    FileCheck2,
    Gauge,
    HardHat,
    Phone,
    ShieldCheck,
    Wrench,
} from "lucide-react";
import {buttonVariants} from "@/components/ui/button";

// @ts-ignore
import teamSafetyImg from "@/../images/IMG-20261008-WA0042.webp";

export default function Safety() {
    return (
        <AppLayout>
            <Seo
                title="Safety & Compliance"
                description="Explore Target Cranes' disciplined approach to safety, engineered lift planning, TETA-accredited riggers, DMR 18 equipment testing, and comprehensive risk assessments across South Africa."
            />

            {/* Page Header / Hero */}
            <section className="pt-28 pb-16 lg:pt-36 lg:pb-24 bg-background border-b border-border">
                <Wrapper>
                    <div className="max-w-4xl space-y-6">
                        <SectionLabel className="mb-4">Safety &amp; Compliance</SectionLabel>

                        <h2>
                            <SwipeTitle
                                className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading tracking-tighter uppercase text-balance">
                                <SwipeLine>Zero Compromise.</SwipeLine>
                                <SwipeLine>
                                    <span
                                        className="bg-linear-to-r from-primary to-primary inline-block px-1 bg-clip-text text-transparent">
                                        Total Lifting Precision.
                                    </span>
                                </SwipeLine>
                            </SwipeTitle>
                        </h2>

                        <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed font-medium">
                            In heavy rigging and mobile crane operations, safety isn&rsquo;t a secondary checklist it is
                            the very foundation upon which every lift is engineered, mobilised, and executed across
                            South Africa.
                        </p>
                    </div>

                    {/* Safety Pillars Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-12">
                        <div
                            className="rounded-2xl border border-border bg-card p-6 space-y-3 hover:border-primary/40 transition-colors shadow-sm">
                            <div
                                className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                <ShieldCheck className="w-6 h-6"/>
                            </div>
                            <h3 className="font-heading font-black uppercase text-base text-foreground">
                                100% Certified Fleet
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Valid LME / LMI statutory load test certificates and daily pre-operational inspection
                                logs for every crane.
                            </p>
                        </div>

                        <div
                            className="rounded-2xl border border-border bg-card p-6 space-y-3 hover:border-primary/40 transition-colors shadow-sm">
                            <div
                                className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                <HardHat className="w-6 h-6"/>
                            </div>
                            <h3 className="font-heading font-black uppercase text-base text-foreground">
                                Accredited Crew
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                TETA-accredited mobile crane operators and master riggers with up-to-date Annexure 3
                                medical fitness certifications.
                            </p>
                        </div>

                        <div
                            className="rounded-2xl border border-border bg-card p-6 space-y-3 hover:border-primary/40 transition-colors shadow-sm">
                            <div
                                className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                <FileCheck2 className="w-6 h-6"/>
                            </div>
                            <h3 className="font-heading font-black uppercase text-base text-foreground">
                                Pre-Lift RAMS
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Site-specific Risk Assessments and Method Statements tailored to ground bearing
                                capacity, radiuses, and obstacles.
                            </p>
                        </div>

                        <div
                            className="rounded-2xl border border-border bg-card p-6 space-y-3 hover:border-primary/40 transition-colors shadow-sm">
                            <div
                                className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                <AlertOctagon className="w-6 h-6"/>
                            </div>
                            <h3 className="font-heading font-black uppercase text-base text-foreground">
                                Stop Work Authority
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Unconditional authority granted to every crew member to stop any lift if wind, ground,
                                or site conditions change.
                            </p>
                        </div>
                    </div>
                </Wrapper>
            </section>

            {/* Core Practice Section (Floated Image with Shape-Outside + Exact Content + Accordion) */}
            <HomeSafetyPracticesSection/>

            {/* Statutory Compliance & Standards Section */}
            <section className="py-20 lg:py-28 bg-background">
                <Wrapper>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                        <div className="lg:col-span-5">
                            <div
                                className="relative aspect-[4/5] w-full rounded-3xl overflow-hidden border border-border shadow-xl bg-card">
                                <img
                                    src={teamSafetyImg}
                                    alt="Target Cranes team conducting pre-lift safety and tackle checks"
                                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                />
                                <div
                                    className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent pointer-events-none"/>
                                <div className="absolute bottom-6 left-6 right-6 text-white pointer-events-none">
                                    <div
                                        className="inline-flex items-center gap-2 bg-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-primary-foreground mb-2">
                                        <Award className="w-3.5 h-3.5"/>
                                        Certified On-Site Team
                                    </div>
                                    <p className="text-sm font-medium text-white/90">
                                        Pre-lift coordination, rigging inspection, and exclusion zone enforcement.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-7 space-y-6">
                            <SectionLabel className="mb-2">Compliance &amp; Regulations</SectionLabel>

                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading tracking-tight uppercase text-foreground">
                                Strict Adherence To National Standards
                            </h2>

                            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                                Our health and safety management system is designed to integrate seamlessly with the
                                stringent contractor safety policies of major civil, maritime, mining, and industrial
                                project leaders in South Africa.
                            </p>

                            <div className="space-y-4 pt-2">
                                <div className="flex items-start gap-4 p-4 rounded-2xl bg-card border border-border">
                                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5"/>
                                    <div>
                                        <h4 className="font-bold text-foreground font-heading uppercase text-sm">
                                            Occupational Health and Safety Act 85 of 1993
                                        </h4>
                                        <p className="text-sm text-muted-foreground mt-1">
                                            Full compliance with South African OHSA statutory mandates, Section 8
                                            general duties, and Construction Regulations 2014.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 p-4 rounded-2xl bg-card border border-border">
                                    <Gauge className="w-6 h-6 text-primary shrink-0 mt-0.5"/>
                                    <div>
                                        <h4 className="font-bold text-foreground font-heading uppercase text-sm">
                                            Driven Machinery Regulations (DMR 18)
                                        </h4>
                                        <p className="text-sm text-muted-foreground mt-1">
                                            Regular calibration of safe load indicators (SLI / LMI), boom angle sensors,
                                            and anti-two-block safety limit switches.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 p-4 rounded-2xl bg-card border border-border">
                                    <Wrench className="w-6 h-6 text-primary shrink-0 mt-0.5"/>
                                    <div>
                                        <h4 className="font-bold text-foreground font-heading uppercase text-sm">
                                            Rigging Tackle &amp; Lifting Hardware Inspection
                                        </h4>
                                        <p className="text-sm text-muted-foreground mt-1">
                                            Colour-coded quarterly inspection tags on all steel wire ropes, web slings,
                                            shackles, chain blocks, and spreader beams.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Wrapper>
            </section>

            {/* Request Safety File Call To Action */}
            <section className="py-20 lg:py-24 bg-card border-t border-border">
                <Wrapper>
                    <div
                        className="max-w-4xl mx-auto rounded-3xl border border-primary/20 bg-linear-to-b from-primary/5 via-card to-card p-8 sm:p-12 lg:p-16 text-center space-y-6 shadow-xl">
                        <SectionLabel className="mx-auto">Audit &amp; Onboarding</SectionLabel>

                        <h2 className="text-3xl sm:text-5xl font-black font-heading tracking-tight uppercase text-foreground">
                            Require Our Safety File For Site Access?
                        </h2>

                        <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            We provide comprehensive, audit-ready safety documentation including operator licenses,
                            medicals, load test certificates, and lift plans tailored to your site requirements.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                            <Link
                                href={contactUs.url()}
                                className={buttonVariants({
                                    size: "lg",
                                    className: "w-full sm:w-auto font-bold uppercase tracking-wider group gap-2 text-base px-8 py-6 rounded-xl shadow-lg"
                                })}
                            >
                                <span>Request Safety File</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform"/>
                            </Link>

                            <a
                                href="tel:0636737500"
                                className={buttonVariants({
                                    variant: "outline",
                                    size: "lg",
                                    className: "w-full sm:w-auto font-bold tracking-wider gap-2 text-base px-8 py-6 rounded-xl border-border hover:bg-muted/60"
                                })}
                            >
                                <Phone className="w-5 h-5 text-primary"/>
                                <span>063 673 7500</span>
                            </a>
                        </div>
                    </div>
                </Wrapper>
            </section>
        </AppLayout>
    );
}
