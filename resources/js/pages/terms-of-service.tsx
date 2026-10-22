import AppLayout from "@/layouts/app-layout";
import { Seo } from "@/components/seo";
import Wrapper from "@/components/ui/misc/wrapper";
import SectionLabel from "@/components/ui/misc/section-label";
import { FileText, ShieldAlert, Truck, AlertTriangle, Scale, CheckCircle2, Phone } from "lucide-react";

export default function TermsOfService() {
    return (
        <AppLayout>
            <Seo
                title="Terms of Service"
                description="Terms of Service for Target Cranes (Pty) Ltd. General terms and conditions governing mobile crane hire, lifting operations, quotations, safety, and website use."
            />

            <section className="pt-28 pb-16 lg:pt-36 lg:pb-24 bg-background">
                <Wrapper>
                    {/* Header */}
                    <div className="max-w-3xl mb-12">
                        <SectionLabel className="mb-4">Legal Agreements</SectionLabel>
                        <h1 className="text-4xl md:text-5xl font-black font-heading tracking-tight uppercase text-foreground mb-4">
                            Terms of Service
                        </h1>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                            These Terms of Service govern your use of the Target Cranes website (targetcranes.co.za) and set forth standard conditions for mobile crane hire, rigging, transport, and engineered lifting solutions provided by Target Cranes (Pty) Ltd.
                        </p>
                        <p className="text-xs text-muted-foreground mt-2">
                            Last Updated: {new Date().toLocaleDateString('en-ZA', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </p>
                    </div>

                    {/* Content Sections */}
                    <div className="max-w-4xl space-y-12">
                        {/* 1. Acceptance of Terms */}
                        <div className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-xs space-y-3">
                            <div className="flex items-center gap-3 text-primary">
                                <FileText className="w-6 h-6 shrink-0" />
                                <h2 className="text-xl font-bold font-heading uppercase text-foreground">1. Acceptance of Terms</h2>
                            </div>
                            <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                                By accessing this website or engaging Target Cranes (Pty) Ltd (&ldquo;Target Cranes&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) for equipment hire, lift engineering, or operational services, you agree to be bound by these Terms of Service and our standard Crane Hire Agreement. If you do not accept these terms in full, please do not use our site or services.
                            </p>
                        </div>

                        {/* 2. Quotations and Booking Conditions */}
                        <div className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-xs space-y-4">
                            <div className="flex items-center gap-3 text-primary">
                                <CheckCircle2 className="w-6 h-6 shrink-0" />
                                <h2 className="text-xl font-bold font-heading uppercase text-foreground">2. Quotations, Pricing &amp; Bookings</h2>
                            </div>
                            <ul className="space-y-2.5 text-muted-foreground text-sm md:text-base list-disc list-inside leading-relaxed">
                                <li>
                                    <strong className="text-foreground">Quote Validity:</strong> Formal quotations remain valid for 30 calendar days from the date of issue unless specified otherwise in writing.
                                </li>
                                <li>
                                    <strong className="text-foreground">Accuracy of Lift Data:</strong> Pricing is calculated based on client-provided specifications (load weight, boom reach, ground conditions, access constraints, and scheduled duration). Discrepancies between quoted specifications and actual on-site conditions may result in rate adjustments.
                                </li>
                                <li>
                                    <strong className="text-foreground">Hire Options:</strong> Rates are quoted on either a &ldquo;Wet Hire&rdquo; basis (including certified crane operator and optional riggers) or &ldquo;Dry Hire&rdquo; (bare machine hire for qualified, approved commercial contractors).
                                </li>
                            </ul>
                        </div>

                        {/* 3. Site Access and Ground Conditions */}
                        <div className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-xs space-y-4">
                            <div className="flex items-center gap-3 text-primary">
                                <Truck className="w-6 h-6 shrink-0" />
                                <h2 className="text-xl font-bold font-heading uppercase text-foreground">3. Site Access, Ground Integrity &amp; Clearances</h2>
                            </div>
                            <div className="space-y-3 text-muted-foreground text-sm md:text-base leading-relaxed">
                                <p>
                                    The client is responsible for ensuring clear, stable, and unhindered access to the lift position suitable for heavy multi-axle all-terrain mobile cranes.
                                </p>
                                <p>
                                    <strong className="text-foreground">Ground Bearing Capacity:</strong> The client must verify and confirm that ground surfaces (compacted earth, paved yards, suspended slabs) are capable of supporting full crane axle loadings and maximum outrigger point loads. Target Cranes provides outrigger pads and mats, but does not accept liability for failure of subsurface infrastructure (drains, pipes, cables, voids) not disclosed prior to setup.
                                </p>
                                <p>
                                    <strong className="text-foreground">Overhead Hazards:</strong> Safe working distances from overhead powerlines and surrounding structures must be strictly maintained in compliance with South African safety regulations.
                                </p>
                            </div>
                        </div>

                        {/* 4. Safety and Operator Authority */}
                        <div className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-xs space-y-4">
                            <div className="flex items-center gap-3 text-primary">
                                <ShieldAlert className="w-6 h-6 shrink-0" />
                                <h2 className="text-xl font-bold font-heading uppercase text-foreground">4. Safety Regulations &amp; Operator Authority</h2>
                            </div>
                            <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                                Safety is paramount in all lifting operations. Operations are conducted under the Occupational Health and Safety Act 85 of 1993 (OHSA), Construction Regulations, and relevant SANS codes of practice.
                            </p>
                            <div className="rounded-xl bg-muted/60 p-4 border border-border text-sm text-foreground space-y-2">
                                <p className="font-semibold flex items-center gap-2 text-primary">
                                    <AlertTriangle className="w-4 h-4" />
                                    Final Lift Authority
                                </p>
                                <p className="text-muted-foreground">
                                    The appointed Target Cranes operator and lift supervisor hold absolute, overriding authority to halt, postpone, or reject any lifting operation if weather conditions (wind speed exceeding crane manufacturer limits, lightning storms), ground instability, or unsafe rigging compromise the safety of personnel or assets.
                                </p>
                            </div>
                        </div>

                        {/* 5. Delays, Weather & Cancellations */}
                        <div className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-xs space-y-3">
                            <div className="flex items-center gap-3 text-primary">
                                <AlertTriangle className="w-6 h-6 shrink-0" />
                                <h2 className="text-xl font-bold font-heading uppercase text-foreground">5. Weather Delays &amp; Cancellations</h2>
                            </div>
                            <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                                When a crane has dispatched to site and operations are delayed due to client site readiness, permit delays, or inclement weather beyond our control, standard hourly standby rates will apply as per the confirmed quotation.
                            </p>
                            <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                                Notice of cancellation must be communicated in writing within the timeframes stipulated in the project booking agreement to avoid cancellation and mobilisation fees.
                            </p>
                        </div>

                        {/* 6. Limitation of Liability */}
                        <div className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-xs space-y-3">
                            <div className="flex items-center gap-3 text-primary">
                                <Scale className="w-6 h-6 shrink-0" />
                                <h2 className="text-xl font-bold font-heading uppercase text-foreground">6. Limitation of Liability &amp; Insurance</h2>
                            </div>
                            <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                                Target Cranes maintains comprehensive public liability and equipment insurance. Unless explicitly agreed in writing under a full turnkey engineered lift package, the client remains responsible for insuring all goods, machinery, or structures being lifted (&ldquo;hook insurance&rdquo; / goods-in-transit cover). Target Cranes shall not be held liable for indirect, consequential, or economic loss resulting from project downtime or delays.
                            </p>
                        </div>

                        {/* 7. Governing Law */}
                        <div className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-xs space-y-3">
                            <div className="flex items-center gap-3 text-primary">
                                <Scale className="w-6 h-6 shrink-0" />
                                <h2 className="text-xl font-bold font-heading uppercase text-foreground">7. Governing Law &amp; Jurisdiction</h2>
                            </div>
                            <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                                These Terms and any disputes arising from website use or contractual lifting services are governed by and construed in accordance with the laws of the Republic of South Africa. The parties submit to the exclusive jurisdiction of the Western Cape High Court, Cape Town.
                            </p>
                        </div>

                        {/* Contact */}
                        <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 md:p-8 space-y-3">
                            <div className="flex items-center gap-3 text-primary">
                                <Phone className="w-6 h-6 shrink-0" />
                                <h2 className="text-xl font-bold font-heading uppercase text-foreground">Enquiries &amp; Contract Information</h2>
                            </div>
                            <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                                For enquiries regarding our terms, machine hiring agreements, or site safety plans:
                            </p>
                            <div className="text-sm font-medium space-y-1 text-foreground">
                                <p>Company: Target Cranes (Pty) Ltd</p>
                                <p>Email: <a href="mailto:enquiries@targetcranes.co.za" className="text-primary hover:underline">enquiries@targetcranes.co.za</a></p>
                                <p>Phone: <a href="tel:0636737500" className="text-primary hover:underline">063 673 7500</a></p>
                                <p>Depot Address: Fabriek St, Bellville South, Cape Town, 7530</p>
                            </div>
                        </div>
                    </div>
                </Wrapper>
            </section>
        </AppLayout>
    );
}
