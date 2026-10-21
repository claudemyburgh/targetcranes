import Wrapper from "@/components/ui/misc/wrapper.tsx";
import SectionLabel from "@/components/ui/misc/section-label.tsx";
import DotPattern from "@/components/ui/misc/dot-pattern.tsx";
import {SwipeLine, SwipeTitle} from "@/components/ui/swipe-title.tsx";
// @ts-ignore
import whoWeAreImage from "@/../images/welcome.webp";

export default function WhoWeAre() {
    return (
        <section className="relative bg-muted/30 border-b border-border overflow-hidden">
            <DotPattern corner="top-left"/>
            <img
                src={whoWeAreImage}
                alt="Target Cranes operations"
                className="pointer-events-none select-none absolute inset-y-0 right-0 h-full w-auto max-w-none object-cover object-left translate-x-1/4 sm:translate-x-12 lg:translate-x-16 xl:translate-x-0 opacity-15 dark:opacity-20 lg:opacity-100 drop-shadow-black z-0"
            />

            <Wrapper className="relative z-10">
                <div className="lg:w-2/3 xl:w-[70%] py-16 sm:py-20 lg:py-28 space-y-6 sm:space-y-8">
                    <div className="space-y-4">
                        <SectionLabel>Our Approach</SectionLabel>
                        <h2>
                            <SwipeTitle
                                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-heading tracking-tighter uppercase text-foreground text-balance">
                                <SwipeLine>Every Lift Starts With</SwipeLine>
                                <SwipeLine>
                                    <span
                                        className="bg-linear-to-r from-primary to-primary inline-block px-1 bg-clip-text text-transparent">
                                        Understanding The Job
                                    </span>
                                </SwipeLine>
                            </SwipeTitle>
                        </h2>
                    </div>

                    <div className="text-muted-foreground text-base sm:text-lg leading-relaxed space-y-5 sm:space-y-6 max-w-2xl">
                        <p>
                            No two lifting projects present the same conditions. The load, available space, site
                            access and work schedule all shape the approach.
                        </p>
                        <p>
                            At Target Cranes, we take time to understand those details before work begins, so the
                            lifting plan fits the job in front of us.
                        </p>
                    </div>
                </div>
            </Wrapper>
        </section>
    );
}
