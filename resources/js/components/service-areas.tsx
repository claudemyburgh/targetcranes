import Wrapper from "@/components/ui/misc/wrapper.tsx";
// @ts-ignore
import maritimeImg from "@/../images/IMG-20261008-WA0038.webp";
// @ts-ignore
import constructionImg from "@/../images/IMG-20261008-WA0039.webp";
// @ts-ignore
import renewableImg from "@/../images/IMG-20261008-WA0040.webp";
// @ts-ignore
import miningImg from "@/../images/IMG-20261008-WA0041.webp";

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

function ServiceAreas() {
    return (
        <section className="py-24 bg-background">
            <Wrapper>
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-black font-heading tracking-tight uppercase mb-4 text-foreground">
                        Service Areas
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        We provide specialised lifting services across a variety of sectors. 
                        <strong> Note that we are not limited to these services.</strong> Our versatile fleet and experienced team are equipped to handle unique lifting requirements in almost any industry.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {services.map((service, index) => (
                        <div key={index} className="flex flex-col gap-6 group">
                            <div className="relative h-64 md:h-80 overflow-hidden rounded-xl bg-muted">
                                <img 
                                    src={service.image} 
                                    alt={service.title} 
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold font-heading uppercase mb-3 text-foreground">
                                    {service.title}
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </Wrapper>
        </section>
    );
}

export default ServiceAreas;
