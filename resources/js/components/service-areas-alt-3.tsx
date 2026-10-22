import Wrapper from "@/components/ui/misc/wrapper.tsx";
import SectionLabel from "@/components/ui/misc/section-label.tsx";
import {SwipeLine, SwipeTitle} from "@/components/ui/swipe-title.tsx";
import {Building2, CalendarClock, Compass, HardHat} from "lucide-react";
// @ts-ignore
import craneCutoutImg from "@/../images/abnormal-crane-cutout.webp";

const services = [
    {
        title: "Short- & Long-Term Crane Hire",
        paragraphs: [
            "We offer flexible mobile crane rental options structured around your project timeline and operational demands.",
            "Whether you need a crane for a single-day lift, a short-term maintenance shutdown, or a long-term contract deployment, our fleet is available for reliable hire when and where you need it."
        ],
        icon: CalendarClock
    },
    {
        title: "Managed Lifting & Rigging",
        paragraphs: [
            "Beyond equipment rental, our team provides complete, end-to-end managed lifting solutions that keep your operations running safely and on schedule.",
            "From site assessments and engineered lift plans to certified operators, master riggers, and on-site supervision, we handle both everyday lifts and complex multi-crane operations."
        ],
        icon: HardHat
    },
    {
        title: "Heavy Plant & Equipment Positioning",
        paragraphs: [
            "We handle the safe lifting, placement, and relocation of heavy machinery, structural components, containers, HVAC units, generators, and oversized loads.",
            "Supported by certified rigging tackle and a versatile fleet, we configure the right crane and rigging setup for confined urban sites and large open workzones alike."
        ],
        icon: Compass
    },
    {
        title: "Solutions For Every Industry",
        paragraphs: [
            "Our operations are never limited to a single sector. We support clients across commercial, industrial, civil, infrastructure, marine, energy, manufacturing, and general contracting environments.",
            "Whatever your industry or lifting requirement, our adaptable fleet and experienced crew are equipped to deliver safe, dependable crane hire tailored to the job at hand."
        ],
        icon: Building2
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
                        <SectionLabel className="mb-8">Crane Hire &amp; Services</SectionLabel>
                        <h2>
                            <SwipeTitle
                                className="text-4xl md:text-6xl font-black font-heading tracking-tight uppercase mb-6 text-foreground drop-shadow-sm">
                                <SwipeLine>Flexible</SwipeLine>
                                <SwipeLine>
                                    <span
                                        className="bg-linear-to-r from-primary to-primary inline-block px-1 bg-clip-text text-transparent">Crane Rental</span>
                                </SwipeLine>
                            </SwipeTitle>
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            We provide dependable <strong className="text-foreground">short-term and long-term crane hire</strong> tailored to your schedule and project scope.
                            <br/><br/>
                            <strong className="text-foreground">We are not limited to any specific industry.</strong> Our versatile fleet and experienced team are equipped to handle everyday and specialised lifting requirements across any sector.
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


