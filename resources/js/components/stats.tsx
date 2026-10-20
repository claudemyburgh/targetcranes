import Wrapper from "@/components/ui/misc/wrapper.tsx";
import {Award, Clock, HardHat} from "lucide-react";
// @ts-ignore
import panoramaImg from "../../images/panorama.webp";
import SectionLabel from "@/components/ui/misc/section-label.tsx";

const statsData = [
    {
        icon: Award,
        value: "35+",
        label: "Years of Experience",

    },
    {
        icon: HardHat,
        value: "1000+",
        label: "Successful Projects",
    },
    {
        icon: Clock,
        value: "24/7",
        label: "Availability",
    }
];

export function Stats() {
    return (
        <section
            className="relative bg-foreground dark:bg-background text-white pb-6 md:pb-12 pt-16 md:pt-24 border-y border-primary overflow-hidden">
            {/* Background image with bottom gradient mask */}
            <div
                className="absolute inset-0 z-0 pointer-events-none "
                style={{
                    backgroundImage: `url(${panoramaImg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    maskImage: 'linear-gradient(to top, transparent 0%, black 75%)',
                    WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 75%)'
                }}
            />

            <Wrapper className="relative z-10">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 items-center">
                    {/* Left side: Headlines */}
                    <div className="w-full lg:w-2/5 flex">
                        <div
                            className="flex flex-col space-y-2 text-left font-heading uppercase font-black text-3xl lg:text-4xl tracking-tighter leading-tight">
                            <SectionLabel className={`text-white`}>Why Target Cranes</SectionLabel>
                            <span className="text-white">Measured movements.</span>
                            <span className="text-white">Clear communications.</span>
                            <span className={`text-primary`}>This is Target.</span>
                        </div>
                    </div>

                    {/* Right side: Stats */}
                    <div className="w-full lg:w-3/5">
                        <div
                            className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/20 text-left w-full">
                            {statsData.map((stat, index) => {
                                const Icon = stat.icon;
                                return (
                                    <div key={index}
                                         className="flex flex-col items-center justify-center space-y-2 py-8 sm:py-4 px-4 text-center">
                                        <Icon className="w-10 h-10 text-white mb-1"/>
                                        <span
                                            className="text-4xl lg:text-5xl font-black font-heading tracking-tighter drop-shadow-sm whitespace-nowrap">
                                        {stat.value}
                                    </span>
                                        <span
                                            className="text-sm font-bold uppercase tracking-wider text-balance opacity-90">
                                        {stat.label}
                                    </span>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </Wrapper>
        </section>
    );
}

export default Stats;
