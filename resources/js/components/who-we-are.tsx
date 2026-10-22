import Wrapper from "@/components/ui/misc/wrapper.tsx";
import SectionLabel from "@/components/ui/misc/section-label.tsx";
import DotPattern from "@/components/ui/misc/dot-pattern.tsx";
import {SwipeLine, SwipeTitle} from "@/components/ui/swipe-title.tsx";
// @ts-ignore
import whoWeAreImage from "@/../images/welcome.webp";

export default function WhoWeAre() {
    return (
        <section className="py-24 bg-muted overflow-hidden isolate relative">
            <DotPattern corner="top-left"/>
            <Wrapper className="relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 xl:gap-12 items-center">
                    <div className="lg:col-span-5">
                        <SectionLabel className="mb-8">Our Approach</SectionLabel>
                        <h2>
                            <SwipeTitle
                                className="text-4xl md:text-6xl z-0 relative font-black font-heading tracking-tighter uppercase mb-6 text-balance">
                                <SwipeLine>Every Lift Starts With</SwipeLine>
                                <SwipeLine>
                                    <span
                                        className="bg-linear-to-r from-primary to-primary inline-block px-1 bg-clip-text text-transparent">
                                        Understanding The Job
                                    </span>
                                </SwipeLine>
                            </SwipeTitle>
                        </h2>
                        <div className="space-y-4 text-muted-foreground text-lg leading-relaxed max-w-2xl">
                            <p>
                                No two lifting projects present the same conditions. The load, available space, site
                                access and work schedule all shape the approach, whether you require a short-term crane
                                rental or a long-term hire package.
                            </p>
                            <p>
                                At Target Cranes, we support clients across every industry and take time to understand
                                those details before work begins, so the lifting plan fits the job in front of us.
                            </p>
                        </div>
                    </div>
                    <div className="lg:col-span-7 z-10 relative flex items-center justify-center lg:justify-end">
                        <img
                            src={whoWeAreImage}
                            alt="Target Cranes operations"
                            className="w-full max-w-3xl lg:max-w-none h-auto object-contain drop-shadow-2xl lg:scale-115 xl:scale-125 origin-center lg:origin-right"
                        />
                    </div>
                </div>
            </Wrapper>
        </section>
    );
}
