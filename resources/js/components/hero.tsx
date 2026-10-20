import Wrapper from "@/components/ui/misc/wrapper.tsx";
import {useEffect, useState} from "react";
import ExperienceBadge from "@/components/ui/misc/experience-badge.tsx";
import {SwipeLine, SwipeTitle} from "@/components/ui/swipe-title.tsx";
// @ts-ignore
import heroImage from "@/../images/hero-4k-16x9.webp";

function Hero() {
    const [offsetY, setOffsetY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setOffsetY(window.scrollY);
        window.addEventListener("scroll", handleScroll, {passive: true});
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section className="h-svh pb-12 pt-24 w-full max-w-full relative overflow-clip bg-foreground dark:bg-background">
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
                    className="w-full h-full mx-auto object-cover object-center -translate-y-8 md:translate-y-0"
                />

            </div>

            <div className="absolute top-28 md:top-32 inset-x-0 flex justify-center z-20 pointer-events-none">
                <ExperienceBadge/>
            </div>

            <Wrapper className="relative z-10 text-white flex items-end justify-center md:justify-start h-full pb-6 sm:pb-8">

                <div className="drop-shadow-black drop-shadow-xl max-w-4xl max-md:text-center">
                    <h2 className="text-xl hidden md:block font-heading tracking-widest opacity-0 animate-[slide-up-fade_1s_ease-out_forwards]">
                        THE TRUSTED NAME BEHIND
                    </h2>
                    <h1 className="mt-2">
                        <SwipeTitle
                            className="max-md:flex-row max-md:justify-center max-md:items-baseline max-md:gap-1.5 text-3xl sm:text-5xl md:text-6xl font-black font-heading tracking-tighter max-w-3xl text-balance uppercase whitespace-nowrap">
                            <SwipeLine delay={2}>THE NATIONS</SwipeLine>
                            <SwipeLine delay={3}>
                                <span
                                    className="bg-linear-to-r from-primary to-primary inline-block px-1 bg-clip-text text-transparent">
                                    HEAVIEST LIFTS
                                </span>
                            </SwipeLine>
                        </SwipeTitle>
                    </h1>

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
