import Wrapper from "@/components/ui/misc/wrapper.tsx";
import SectionLabel from "@/components/ui/misc/section-label.tsx";
// @ts-ignore
import maritimeImg from "@/../images/IMG-20261008-WA0038.webp";
// @ts-ignore
import constructionImg from "@/../images/IMG-20261008-WA0039.webp";
// @ts-ignore
import renewableImg from "@/../images/IMG-20261008-WA0040.webp";
// @ts-ignore
import miningImg from "@/../images/IMG-20261008-WA0041.webp";

import {Anchor, HardHat, Pickaxe, Wind} from "lucide-react";

const services = [
    {
        title: "Maritime",
        description: "Our experience in the maritime industry spans many shipyard, port, and offshore projects. Whether it’s vessel launches, dry-dock work, or harbour operations, we take pride in playing a part in projects that support the ongoing growth of the maritime sector.",
        image: maritimeImg,
        icon: Anchor
    },
    {
        title: "Construction",
        description: "With years of experience in the construction sector, we’ve contributed to many of the nation’s most notable infrastructure and building projects. From large-scale civil works to landmark high-rise developments, our team provides complete crane hire solutions that keep progress on track. Supported by a versatile fleet and the capability to handle both everyday and specialised lifting requirements, we remain a trusted partner to the construction industry.",
        image: constructionImg,
        icon: HardHat
    },
    {
        title: "Renewable Energy",
        description: "We’re proud to be part of renewable energy projects that are transforming Africa’s power landscape. From wind and solar installations to hydro developments, our crane hire services provide the strength and reliability needed for large-scale energy work. Supported by specialised equipment and a dedicated team, we continue to play a role in building a cleaner, more sustainable future.",
        image: renewableImg,
        icon: Wind
    },
    {
        title: "Mining",
        description: "With extensive experience in the mining sector, we’ve supported operations that drive growth and development across the industry. From installing heavy plant infrastructure to relocating oversized machinery, our team provides dependable crane hire solutions designed for the unique demands of mining. Equipped with specialised gear and the capability to perform in the toughest conditions, we continue to deliver lifting services that keep projects moving and remain a reliable partner to mining operations across the region.",
        image: miningImg,
        icon: Pickaxe
    }
];

function ServiceAreasAlt1() {
    return (
        <section className="py-24 bg-background">
            <Wrapper>
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

                    {/* Left Sticky Column */}
                    <div className="lg:w-1/3 lg:sticky lg:top-32 flex flex-col">
                        <SectionLabel className="mb-8">Industry</SectionLabel>
                        <h2 className="text-4xl md:text-6xl font-black font-heading tracking-tight uppercase mb-6 text-foreground drop-shadow-sm ">
                            Service <span
                            className={`bg-linear-to-r from-primary to-orange-500 inline-block px-1  bg-clip-text text-transparent`}>Areas</span
                        >
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            We provide specialised lifting services across a variety of sectors.
                            <br/><br/>
                            <strong className="text-foreground"> Note that we are not limited to these
                                services</strong> our
                            versatile fleet and experienced team are equipped to handle unique lifting requirements in
                            almost any industry.
                        </p>
                    </div>

                    {/* Right Scrolling Column */}
                    <div className="lg:w-2/3 flex flex-col gap-16 md:gap-24">
                        {services.map((service, index) => {
                            const Icon = service.icon;
                            return (
                                <div key={index} className="flex flex-col gap-8 group">
                                    <div
                                        className="relative h-[300px] md:h-[450px] w-full rounded-3xl overflow-hidden bg-card border border-border shadow-sm">
                                        <div
                                            className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10 transition-opacity duration-500 group-hover:opacity-0"></div>
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div
                                            className="absolute top-6 left-6 z-20 bg-background/95 backdrop-blur-md p-4 rounded-2xl border border-border shadow-lg">
                                            <Icon className="w-8 h-8 text-primary" strokeWidth={1.5}/>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-3xl font-black font-heading uppercase mb-4 text-foreground">
                                            {service.title}
                                        </h3>
                                        <p className="text-muted-foreground text-lg leading-relaxed">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </Wrapper>
        </section>
    );
}

export default ServiceAreasAlt1;
