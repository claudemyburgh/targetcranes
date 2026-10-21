import Wrapper from "@/components/ui/misc/wrapper.tsx";
import {SwipeLine, SwipeTitle} from "@/components/ui/swipe-title.tsx";
import {PhoneCall} from "lucide-react";
import SectionLabel from "@/components/ui/misc/section-label.tsx";
import {contactUs} from "@/routes";

// @ts-ignore
// import bgImg from "../../images/crane-half-cut.webp";

export function EmergencySupport() {
    return (
        <section className="relative overflow-hidden py-16 lg:py-24 bg-linear-to-br from-zinc-950 via-primary/95 to-primary text-white border-y border-white/10">
            {/* Dotted pattern with radial gradient mask from top right */}
            <div
                aria-hidden={true}
                className="pointer-events-none opacity-20 absolute inset-0 bg-[radial-gradient(circle,#ffffff40_2px,transparent_2px)] bg-size-[16px_16px] mask-[radial-gradient(ellipse_at_top_right,black_35%,transparent_60%)]"
            />
            <Wrapper className="relative z-10">
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-12 justify-between">
                    <div className="max-w-3xl">
                        <SectionLabel className="mb-8 text-white">Emergencies can happen anytime</SectionLabel>
                        <h2 className="mb-6">
                            <SwipeTitle
                                className="text-4xl md:text-6xl font-black font-heading tracking-tighter uppercase text-white text-balance">
                                <SwipeLine>24/7 SERVICE SUPPORT</SwipeLine>
                            </SwipeTitle>
                        </h2>
                        <p className="text-lg md:text-xl text-white/85 leading-relaxed max-w-2xl">
                            That’s why we offer 24/7 emergency response services for urgent lifting needs. Whether it’s
                            an equipment failure or an unforeseen event, we’re here to provide immediate support,
                            minimizing downtime and potential losses.
                        </p>
                    </div>
                    <div className="shrink-0 w-full lg:w-auto">
                        <a href={contactUs.url()}
                           className="inline-flex items-center justify-center gap-3 rounded-full bg-linear-to-b from-secondary to-[color-mix(in_oklch,var(--secondary),black_35%)] hover:opacity-95 text-secondary-foreground px-8 py-5 font-bold uppercase tracking-wider transition-all hover:scale-105 shadow-xl shadow-black/25 hover:shadow-black/40 border border-white/15">
                            <PhoneCall size={24} className="animate-pulse"/>
                            <span>Request Emergency Lift</span>
                        </a>
                    </div>
                </div>
            </Wrapper>
        </section>
    );
}

export default EmergencySupport;
