import Wrapper from "@/components/ui/misc/wrapper.tsx";
import {useEffect, useState} from "react";
import {SwipeLine, SwipeTitle} from "@/components/ui/swipe-title.tsx";
// @ts-ignore
import heroImage from "@/../images/hero-4k-16x9.webp";
import LightRays from "@/components/LightRays.tsx";

function Hero() {
    const [offsetY, setOffsetY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setOffsetY(window.scrollY);
        window.addEventListener("scroll", handleScroll, {passive: true});
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section
            className="h-svh pb-12 pt-24 w-full max-w-full isolate relative overflow-clip bg-foreground dark:bg-background">
            <div
                className="absolute inset-0 z-0 w-full h-full transform-gpu"
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

            <div className="pointer-events-none absolute inset-0 z-10 mix-blend-plus-lighter">
                <LightRays
                    raysOrigin="top-center"
                    raysColor="#ece4d7"
                    raysSpeed={2}
                    lightSpread={0.75}
                    rayLength={5}
                    glow={0.2}
                    haze={10.5}
                    followMouse
                    mouseInfluence={0.15}
                    rayDensity={1}
                    tilt={0}
                    raySharpness={0.75}
                    atmosphere={1}
                    intensity={0.85}
                    fadeDistance={1}
                    saturation={2}
                    noiseAmount={0}
                    distortion={0}
                    pulsating={false}
                    cursorShadow={false}
                    clickPulse={false}
                    intro
                    lightMode={false}
                />
            </div>

            {/*<div className="absolute top-28 md:top-32 inset-x-0 flex justify-center z-20 pointer-events-none">*/}
            {/*    <ExperienceBadge/>*/}
            {/*</div>*/}

            <Wrapper
                className="relative z-20 text-white flex items-end justify-center md:justify-start h-full pb-6 sm:pb-8">

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
                className="absolute bottom-0 inset-x-0 z-10 h-2/5 bg-linear-to-t from-foreground dark:from-background to-transparent flex items-end justify-center pb-8 pointer-events-none">
            </div>
        </section>
    )
}

export default Hero;
