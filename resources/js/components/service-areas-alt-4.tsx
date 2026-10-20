import Wrapper from "@/components/ui/misc/wrapper.tsx";
import SectionLabel from "@/components/ui/misc/section-label.tsx";
import {SwipeLine, SwipeTitle} from "@/components/ui/swipe-title.tsx";
import {Tabs} from "@/components/ui/tabs.tsx";
import {Anchor, HardHat, Pickaxe, Wind} from "lucide-react";
// @ts-ignore
import craneCutoutImg from "@/../images/abnormal-crane-cutout.webp";

const services = [
    {
        title: "Maritime",
        value: "maritime",
        paragraphs: [
            "The maritime industry has become an integral part of our service offering, with our specialised services supporting some of the most established names across the recreational and commercial marine sectors.",
            "We have developed extensive experience in the transportation of magnificent luxury yachts, catamarans and vessels of extraordinary proportions. From shipyards to launch destinations and beyond, we take on the responsibility of moving these substantial and highly valuable loads, reflecting the scale of our involvement in this specialised field.",
            "Our work extends into the wider requirements of the marine sector, supporting shipyards and engineering companies during new vessel developments, major refits, repairs and maintenance programmes. We recognise the importance of keeping work progressing, particularly when substantial equipment needs to be moved between facilities or critical work is being undertaken to prepare a vessel for its return to service.",
            "With an established presence in this sector, extensive fleet capacity and specialised resources, we provide comprehensive, end-to-end transport solutions for requirements ranging from individual heavy loads to entire vessels."
        ],
        icon: Anchor
    },
    {
        title: "Construction",
        value: "construction",
        paragraphs: [
            "Major construction and civil engineering projects require substantial transport support, and this is an area in which we have developed a strong and established presence.",
            "Our heavy haulage services play an important role across a broad spectrum of construction and infrastructure developments, catering to the diverse requirements of an industry where the size and nature of loads can vary considerably. Bridge construction is a particularly established area of our work, with extensive experience transporting exceptionally long and heavy precast concrete beams for major installations.",
            "Our involvement extends throughout the construction sector, providing the transport capacity required across various phases of development. We understand how closely transportation is connected to the work taking place on site, particularly when the arrival of a substantial load forms an important part of the next phase of construction.",
            "With the resources to support individual heavy loads and long-term contracts involving multiple loads over extended periods, we offer the versatility needed to serve a broad range of requirements. Our services extend well beyond any single type of construction project, allowing us to remain involved in developments of varying scale and complexity."
        ],
        icon: HardHat
    },
    {
        title: "Renewable Energy",
        value: "renewable-energy",
        paragraphs: [
            "Renewable energy is an industry we firmly believe in and proudly support, recognising the vital role it plays in strengthening our energy infrastructure, driving economic growth and creating opportunities for the future.",
            "Over the years, we have established ourselves as a trusted partner within this rapidly expanding sector, playing an important role in some of the largest renewable energy projects. Our involvement extends across both new installations and the expansion of existing facilities, supporting transport requirements of varying scale and duration.",
            "We have been heavily involved in the transportation of essential equipment for major wind farm installations, supporting both newly established facilities and the expansion of existing ones. With turbine components reaching extraordinary lengths and weights, these projects represent some of the most substantial work within our industry. Our involvement also extends across solar energy and large-scale battery storage installations, supporting the continued growth of renewable energy infrastructure.",
            "Our work within this sector goes beyond individual transport requirements. We have supported major contracts involving multiple loads, where our continued involvement contributes to bringing new energy facilities into operation and expanding existing generating capacity.",
            "As investment in renewable energy continues to grow, we remain firmly committed to supporting this sector and the opportunities it brings. We take pride in playing our part in strengthening the energy infrastructure that supports our economy, our industries and future generations."
        ],
        icon: Wind
    },
    {
        title: "Mining",
        value: "mining",
        paragraphs: [
            "Our work within the mining sector has seen us take on heavy haulage and abnormal transport assignments of considerable scale, supporting the movement of industrial machinery and specialised equipment across a broad range of mining activities.",
            "We work with mining companies and the businesses that service them, providing the transport capacity required for major plant installations, the expansion of mining facilities and the relocation of valuable machinery. Our involvement extends to ongoing requirements as well as larger assignments where multiple loads form part of a wider scope of work.",
            "Our transport services help bridge the distance between equipment suppliers, engineering facilities and the mines that depend on them. We recognise that the timely arrival of essential machinery can have a direct bearing on production schedules, planned shutdowns and the completion of important work on site.",
            "We have built our service around more than the ability to carry heavy loads. Our continued involvement in this sector reflects the breadth of work we are equipped to undertake and our ability to meet the changing requirements of an industry where specialised heavy haulage remains essential."
        ],
        icon: Pickaxe
    }
];

function ServiceAreasAlt4() {
    const tabs = services.map((service) => {
        const Icon = service.icon;
        return {
            title: service.title,
            value: service.value,
            icon: Icon,
            content: (
                <div
                    className="flex flex-col gap-6 rounded-3xl border border-border bg-card/95 backdrop-blur-md p-8 md:p-12 shadow-xl">
                    <div className="flex items-center gap-4">
                        <div className="bg-primary/10 p-4 rounded-2xl border border-primary/20 shrink-0">
                            <Icon className="w-8 h-8 text-primary" strokeWidth={1.5}/>
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-black font-heading uppercase text-foreground">
                            {service.title}
                        </h3>
                    </div>
                    <div className="space-y-4 text-muted-foreground text-base sm:text-lg leading-relaxed">
                        {service.paragraphs.map((paragraph, pIndex) => (
                            <p key={pIndex}>{paragraph}</p>
                        ))}
                    </div>
                </div>
            ),
        };
    });

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
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

                    {/* Left Column */}
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

                    {/* Right Tabs Column */}
                    <div className="w-full lg:w-2/3 flex flex-col items-start justify-start perspective-[1000px]">
                        <Tabs
                            tabs={tabs}
                            containerClassName="bg-muted/60 dark:bg-card/60 p-1.5 rounded-3xl border border-border backdrop-blur-xs"
                        />
                    </div>
                </div>
            </Wrapper>
        </section>
    );
}

export default ServiceAreasAlt4;
