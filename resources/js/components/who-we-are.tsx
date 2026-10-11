import Wrapper from "@/components/ui/misc/wrapper.tsx";
import SectionLabel from "@/components/ui/misc/section-label.tsx";
import {SwipeLine, SwipeTitle} from "@/components/ui/swipe-title.tsx";
// @ts-ignore
import whoWeAreImage from "@/../images/fleet.webp";

export default function WhoWeAre() {
    return (
        <section className="py-24 bg-muted">
            <Wrapper>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <SectionLabel className="mb-8">Our Approach</SectionLabel>
                        <h2>
                            <SwipeTitle
                                className="text-4xl md:text-6xl font-black font-heading tracking-tighter uppercase mb-6 text-balance">
                                <SwipeLine>Every Lift Starts With</SwipeLine>
                                <SwipeLine>
                                    <span
                                        className="bg-linear-to-r from-primary to-primary inline-block px-1 bg-clip-text text-transparent">
                                        Understanding The Job
                                    </span>
                                </SwipeLine>
                            </SwipeTitle>
                        </h2>
                        <div className="space-y-4 text-muted-foreground text-lg leading-relaxed max-w-xl">
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
                    <div
                        className="relative aspect-square md:aspect-video lg:aspect-square bg-muted rounded-3xl overflow-clip shadow-2xl">
                        <img
                            src={whoWeAreImage}
                            alt="Target Cranes operations"
                            className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
                        />
                    </div>
                </div>
            </Wrapper>
        </section>
    );
}
