import Wrapper from "@/components/ui/misc/wrapper.tsx";
import SectionLabel from "@/components/ui/misc/section-label.tsx";
import {SwipeLine, SwipeTitle} from "@/components/ui/swipe-title.tsx";
import {Anchor, HardHat, Pickaxe, Wind} from "lucide-react";
// @ts-ignore
import craneCutoutImg from "@/../images/abnormal-crane-cutout.webp";

const services = [
    {
        title: "Maritime",
        paragraphs: [
            "Our experience in the maritime industry spans many shipyard, port, and offshore projects.",
            "Whether it’s vessel launches, dry-dock work, or harbour operations, we take pride in playing a part in projects that support the ongoing growth of the maritime sector.",

        ],
        icon: Anchor
    },
    {
        title: "CONSTRUCTION & CIVIL ENGINEERING",
        paragraphs: [
            "With years of experience in the construction sector, we’ve contributed to many of the nation’s most notable infrastructure and building projects.",
            "From large-scale civil works to landmark high-rise developments, our team provides complete crane hire solutions that keep progress on track.",
            "Supported by a versatile fleet and the capability to handle both everyday and specialised lifting requirements, we remain a trusted partner to the construction industry."
        ],
        icon: HardHat
    },
    {
        title: "Renewable Energy",
        paragraphs: [
            "We’re proud to be part of renewable energy projects that are transforming Africa’s power landscape. ",
            "From wind and solar installations to hydro developments, our crane hire services provide the strength and reliability needed for large-scale energy work. ",
            "Supported by specialised equipment and a dedicated team, we continue to play a role in building a cleaner, more sustainable future.",
        ],
        icon: Wind
    },
    {
        title: "Mining",
        paragraphs: [
            "With extensive experience in the mining sector, we’ve supported operations that drive growth and development across the industry. ",
            "From installing heavy plant infrastructure to relocating oversized machinery, our team provides dependable crane hire solutions designed for the unique demands of mining. ",
            "Equipped with specialised gear and the capability to perform in the toughest conditions, we continue to deliver lifting services that keep projects moving and remain a reliable partner to mining operations across the region."
        ],
        icon: Pickaxe
    }
];

function ServiceAreasAlt3() {
    return (
        <section className="py-24 bg-background relative overflow-x-clip">
            {/* Sticky background crane cutout */}
            <div aria-hidden={true} className="pointer-events-none absolute inset-0 z-0">
                <div className="sticky top-0 h-svh w-full overflow-hidden">
                    <div
                        className="absolute bottom-0 left-0 w-full lg:w-1/2 h-[85%] bg-contain bg-bottom-left bg-no-repeat opacity-15 dark:opacity-25"
                        style={{
                            backgroundImage: `url(${craneCutoutImg})`,
                            maskImage: 'linear-gradient(to top, transparent 0%, black 15%, black 90%, transparent 100%)',
                            WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 15%, black 90%, transparent 100%)',
                        }}
                    />
                </div>
            </div>

            <Wrapper className="relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

                    {/* Left Sticky Column */}
                    <div className="lg:w-1/3 lg:sticky lg:top-32 flex flex-col">
                        <SectionLabel className="mb-8">Industry</SectionLabel>
                        <h2>
                            <SwipeTitle
                                className="text-4xl md:text-6xl font-black font-heading tracking-tight uppercase mb-6 text-foreground drop-shadow-sm">
                                <SwipeLine>Service</SwipeLine>
                                <SwipeLine>
                                    <span
                                        className="bg-linear-to-r from-primary to-primary inline-block px-1 bg-clip-text text-transparent">Areas</span>
                                </SwipeLine>
                            </SwipeTitle>
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
                    <div className="lg:w-2/3 flex flex-col gap-12 md:gap-16">
                        {services.map((service, index) => {
                            const Icon = service.icon;
                            return (
                                <div
                                    key={index}
                                    className="flex flex-col gap-6 rounded-3xl border border-border bg-card/85 backdrop-blur-xs p-8 md:p-10 shadow-sm"
                                >
                                    <div className="flex items-center gap-4">
                                        <div
                                            className="bg-primary/10 p-4 rounded-2xl border border-primary/20 shrink-0">
                                            <Icon className="w-8 h-8 text-primary" strokeWidth={1.5}/>
                                        </div>
                                        <h3 className="text-3xl font-black font-heading uppercase text-foreground">
                                            {service.title}
                                        </h3>
                                    </div>
                                    <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                                        {service.paragraphs.map((paragraph, pIndex) => (
                                            <p key={pIndex}>{paragraph}</p>
                                        ))}
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

export default ServiceAreasAlt3;


