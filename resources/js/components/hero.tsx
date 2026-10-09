import Wrapper from "@/components/ui/misc/wrapper.tsx";
import {useEffect, useState} from "react";
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
                    transform: `scale(${1 + offsetY * 0.0005})`,
                    transformOrigin: "center center"
                }}
            >
                <img
                    src={heroImage}
                    alt="Target Cranes"
                    className="w-full h-full mx-auto object-cover object-center"
                />

            </div>

            <Wrapper className="relative z-10 text-white flex items-end h-full">
                <div aria-hidden={true}
                     className={`text-white border-2 opacity-50  border-white/50 h-full rounded-3xl absolute inset-0 p-6 mask-[radial-gradient(circle_at_bottom_left,transparent_20%,black_30%)]`}></div>
                <div className={` drop-shadow-black drop-shadow-xl`}>
                    <h2 className={`text-xl md:text-2xl font-heading tracking-widest `}>THE
                        TRUSTED NAME BEHIND</h2>
                    <h1 className="text-6xl md:text-8xl font-black font-heading tracking-tighter max-w-3xl text-balance uppercase">
                        THE NATIONS <span
                        className={`bg-linear-to-r from-primary to-orange-500 inline-block px-1  bg-clip-text text-transparent`}>HEAVIEST LIFTS</span>
                    </h1>
                    <p className={`max-w-3xl text-md md:text-xl leading-loose mt-4`}>Recognised Leaders for Unmatched
                        Excellence</p>
                </div>
            </Wrapper>
            <div
                className={`absolute bottom-0 inset-x-0 h-2/5 bg-linear-to-t from-foreground dark:from-background to-transparent`}></div>
        </section>
    )
}

export default Hero;
