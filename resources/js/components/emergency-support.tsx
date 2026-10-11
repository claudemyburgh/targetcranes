import Wrapper from "@/components/ui/misc/wrapper.tsx";
import {SwipeLine, SwipeTitle} from "@/components/ui/swipe-title.tsx";
import {PhoneCall} from "lucide-react";
import Grainient from "@/components/Grainient.tsx";
import SectionLabel from "@/components/ui/misc/section-label.tsx";
// @ts-ignore
import bgImg from "../../images/crane-half-cut.webp";

export function EmergencySupport() {
    return (
        <section className="bg-primary/5 border-t border-primary/10 py-16 lg:py-24 relative overflow-hidden ">
            <div
                className="absolute top-0 left-0 w-full h-full lg:w-1/2 pointer-events-none z-0 opacity-10 dark:opacity-20"
                style={{
                    backgroundImage: `url(${bgImg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
                    WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)'
                }}
            />
            <div
                className="absolute top-1/2 -translate-y-1/2 -right-24 size-270 opacity-40 pointer-events-none mix-blend-plus-lighter mask-[radial-gradient(circle_at_center,black_10%,transparent_70%)]">
                <Grainient
                    color1="#b91c1c"
                    color2="#ea580c"
                    color3="#f97316"
                    timeSpeed={4}
                    colorBalance={-0.11}
                    warpStrength={1.55}
                    warpFrequency={3.7}
                    warpSpeed={7}
                    warpAmplitude={76}
                    blendAngle={0}
                    blendSoftness={0.09}
                    rotationAmount={510}
                    noiseScale={1.25}
                    grainAmount={0.07}
                    grainScale={2.2}
                    grainAnimated={false}
                    contrast={1.5}
                    gamma={1}
                    saturation={1}
                    centerX={0.44}
                    centerY={0.46}
                    zoom={0.75}
                />
            </div>
            <Wrapper className="relative z-10">
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-12 justify-between">
                    <div className="max-w-3xl">
                        <SectionLabel className="mb-8">Emergencies can happen anytime</SectionLabel>
                        <h2 className="mb-6">
                            <SwipeTitle
                                className="text-4xl md:text-6xl font-black font-heading tracking-tighter uppercase text-balance">
                                <SwipeLine>24/7 <span
                                    className="bg-linear-to-r from-primary to-primary inline-block px-1 bg-clip-text text-transparent">SERVICE SUPPORT</span></SwipeLine>
                            </SwipeTitle>
                        </h2>
                        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                            That’s why we offer 24/7 emergency response services for urgent lifting needs. Whether it’s
                            an equipment failure or an unforeseen event, we’re here to provide immediate support,
                            minimizing downtime and potential losses.
                        </p>
                    </div>
                    <div className="shrink-0 w-full lg:w-auto">
                        <a href="#contact"
                           className="inline-flex items-center justify-center gap-3 rounded-full bg-primary hover:bg-primary/90 dark:bg-white dark:hover:bg-white/90 text-primary-foreground dark:text-black px-8 py-5 font-bold uppercase tracking-wider transition-all hover:scale-105 shadow-xl shadow-primary/20 hover:shadow-primary/40 dark:shadow-white/10 dark:hover:shadow-white/20">
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
