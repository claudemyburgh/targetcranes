import Wrapper from "@/components/ui/misc/wrapper.tsx";
import SectionLabel from "@/components/ui/misc/section-label.tsx";
import { Link } from "@inertiajs/react";
import { contactUs } from "@/routes";
import { ArrowRight, Phone } from "lucide-react";
import { buttonVariants } from "@/components/ui/button.tsx";

export function PlanningALiftCta() {
    return (
        <section className="py-20 lg:py-24 bg-card border-t border-border">
            <Wrapper>
                <div className="max-w-4xl mx-auto rounded-3xl border border-primary/20 bg-linear-to-b from-primary/5 via-card to-card p-8 sm:p-12 lg:p-16 text-center space-y-6 shadow-xl">
                    <SectionLabel className="mx-auto">Get Started</SectionLabel>

                    <h2 className="text-3xl sm:text-5xl font-black font-heading tracking-tight uppercase text-foreground">
                        Planning A Lift?
                    </h2>

                    <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        Tell us what needs to be moved and where the work will take place. We&rsquo;ll discuss the requirements with you and help determine the next step.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                        <Link
                            href={contactUs.url()}
                            className={buttonVariants({
                                size: "lg",
                                className: "w-full sm:w-auto font-bold uppercase tracking-wider group gap-2 text-base px-8 py-6 rounded-xl shadow-lg"
                            })}
                        >
                            <span>Discuss Your Requirements</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>

                        <a
                            href="tel:0636737500"
                            className={buttonVariants({
                                variant: "outline",
                                size: "lg",
                                className: "w-full sm:w-auto font-bold tracking-wider gap-2 text-base px-8 py-6 rounded-xl border-border hover:bg-muted/60"
                            })}
                        >
                            <Phone className="w-5 h-5 text-primary" />
                            <span>063 673 7500</span>
                        </a>
                    </div>
                </div>
            </Wrapper>
        </section>
    );
}

export default PlanningALiftCta;
