import { useState } from "react";
import Wrapper from "@/components/ui/misc/wrapper.tsx";
// @ts-ignore
import maritimeImg from "@/../images/IMG-20261008-WA0038.webp";
// @ts-ignore
import constructionImg from "@/../images/IMG-20261008-WA0039.webp";
// @ts-ignore
import renewableImg from "@/../images/IMG-20261008-WA0040.webp";
// @ts-ignore
import miningImg from "@/../images/IMG-20261008-WA0041.webp";
import { cn } from "@/lib/utils.ts";
import { ArrowRight } from "lucide-react";

const services = [
    {
        title: "Maritime",
        description: "Our experience in the maritime industry spans many shipyard, port, and offshore projects. Whether it’s vessel launches, dry-dock work, or harbour operations, we take pride in playing a part in projects that support the ongoing growth of the maritime sector.",
        image: maritimeImg
    },
    {
        title: "Construction",
        description: "With years of experience in the construction sector, we’ve contributed to many of the nation’s most notable infrastructure and building projects. From large-scale civil works to landmark high-rise developments, our team provides complete crane hire solutions that keep progress on track. Supported by a versatile fleet and the capability to handle both everyday and specialised lifting requirements, we remain a trusted partner to the construction industry.",
        image: constructionImg
    },
    {
        title: "Renewable Energy",
        description: "We’re proud to be part of renewable energy projects that are transforming Africa’s power landscape. From wind and solar installations to hydro developments, our crane hire services provide the strength and reliability needed for large-scale energy work. Supported by specialised equipment and a dedicated team, we continue to play a role in building a cleaner, more sustainable future.",
        image: renewableImg
    },
    {
        title: "Mining",
        description: "With extensive experience in the mining sector, we’ve supported operations that drive growth and development across the industry. From installing heavy plant infrastructure to relocating oversized machinery, our team provides dependable crane hire solutions designed for the unique demands of mining. Equipped with specialised gear and the capability to perform in the toughest conditions, we continue to deliver lifting services that keep projects moving and remain a reliable partner to mining operations across the region.",
        image: miningImg
    }
];

function ServiceAreasAlt2() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="py-24 bg-background text-foreground">
            <Wrapper>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
                    {/* Left Column: Titles & Descriptions */}
                    <div className="lg:col-span-5 flex flex-col justify-center">
                        <h2 className="text-4xl md:text-5xl font-black font-heading tracking-tight uppercase mb-6 text-foreground">
                            Service Areas
                        </h2>
                        <p className="text-lg text-muted-foreground mb-12">
                            We provide specialised lifting services across a variety of sectors. 
                            <strong className="text-foreground"> Note that we are not limited to these services.</strong> Our versatile fleet and experienced team are equipped to handle unique requirements in almost any industry.
                        </p>
                        
                        <div className="flex flex-col gap-2">
                            {services.map((service, index) => {
                                const isActive = activeIndex === index;
                                return (
                                    <button 
                                        key={index}
                                        onClick={() => setActiveIndex(index)}
                                        className={cn(
                                            "text-left py-4 px-6 rounded-lg transition-all flex justify-between items-center group border",
                                            isActive 
                                                ? "bg-primary border-primary text-primary-foreground" 
                                                : "bg-transparent border-border hover:border-muted-foreground hover:bg-muted/50 text-muted-foreground"
                                        )}
                                    >
                                        <span className="text-xl font-bold font-heading uppercase tracking-wide">
                                            {service.title}
                                        </span>
                                        <ArrowRight className={cn(
                                            "w-6 h-6 transition-transform",
                                            isActive ? "translate-x-0" : "-translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                                        )} />
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                    
                    {/* Right Column: Dynamic Image and Content */}
                    <div className="lg:col-span-7">
                        <div className="relative w-full h-[500px] md:h-[650px] rounded-2xl overflow-hidden bg-card border border-border">
                            {services.map((service, index) => (
                                <div 
                                    key={index}
                                    className={cn(
                                        "absolute inset-0 transition-opacity duration-700 ease-in-out",
                                        activeIndex === index ? "opacity-100 z-10" : "opacity-0 z-0"
                                    )}
                                >
                                    <img 
                                        src={service.image} 
                                        alt={service.title} 
                                        className="w-full h-full object-cover opacity-60"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-background/90 via-background/40 to-transparent"></div>
                                    
                                    <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                                        <div className="bg-primary text-primary-foreground text-sm font-bold tracking-widest uppercase py-1 px-3 inline-block mb-4">
                                            Sector
                                        </div>
                                        <h3 className="text-3xl md:text-5xl font-bold font-heading uppercase mb-4 text-foreground">
                                            {service.title}
                                        </h3>
                                        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Wrapper>
        </section>
    );
}

export default ServiceAreasAlt2;
