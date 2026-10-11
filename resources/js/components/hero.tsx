import Wrapper from "@/components/ui/misc/wrapper.tsx";
import {useEffect, useState} from "react";
import ExperienceBadge from "@/components/ui/misc/experience-badge.tsx";
import {SwipeLine, SwipeTitle} from "@/components/ui/swipe-title.tsx";
// @ts-ignore
import heroImage from "@/../images/hero-bigger.webp";

function Hero() {
    const [offsetY, setOffsetY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setOffsetY(window.scrollY);
        window.addEventListener("scroll", handleScroll, {passive: true});
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section className={`h-svh  pb-12 pt-24 w-full max-w-full relative overflow-clip`}>
            <div
                className="absolute inset-0 w-full h-full transform-gpu"
                style={{
                    transform: `scale(${1 + offsetY * 0.00025})`,
                    transformOrigin: "center center"
                }}
            >
                <img
                    src={heroImage}
                    alt="Target Cranes - Mobile Crane Hire & Managed Lifting"
                    className="w-full h-full mx-auto object-cover object-center"
                />

            </div>

            <div className="absolute top-28 md:top-32 inset-x-0 flex justify-center z-20 pointer-events-none">
                <ExperienceBadge/>
            </div>

            <Wrapper className="relative z-10 text-white flex items-end h-full pb-6 sm:pb-8">

                <div className="drop-shadow-black drop-shadow-xl max-w-4xl">
                    <h2 className="text-xl font-heading tracking-widest opacity-0 animate-[slide-up-fade_1s_ease-out_forwards]">
                        THE TRUSTED NAME BEHIND
                    </h2>
                    <h1 className="mt-2">
                        <SwipeTitle
                            className="text-4xl sm:text-5xl md:text-6xl  font-black font-heading tracking-tighter max-w-3xl text-balance uppercase">
                            <SwipeLine delay={2}>THE NATIONS</SwipeLine> <SwipeLine delay={3}> <span
                            className="bg-linear-to-r from-primary to-primary inline-block px-1 bg-clip-text text-transparent">
                                    HEAVIEST LIFTS
                                </span>

                        </SwipeLine>

                        </SwipeTitle>
                    </h1>
                    <p className="max-w-4xl text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mt-4 text-white/90 opacity-0 animate-[slide-up-fade_1s_ease-out_0.6s_forwards]">
                        From routine lifts to complex projects, Target Cranes provides equipment selection, lift
                        planning and managed crane operations tailored to your site and schedule.
                    </p>
                </div>
            </Wrapper>
            <div
                aria-hidden={true}
                className={`absolute bottom-0 inset-x-0 h-2/5 bg-linear-to-t from-foreground dark:from-background to-transparent flex items-end justify-center pb-8 pointer-events-none`}>

            </div>
        </section>
    )
}

export default Hero;
