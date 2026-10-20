import Wrapper from "@/components/ui/misc/wrapper.tsx";
import SectionLabel from "@/components/ui/misc/section-label.tsx";
import DotPattern from "@/components/ui/misc/dot-pattern.tsx";
import {SwipeLine, SwipeTitle} from "@/components/ui/swipe-title.tsx";
// @ts-ignore
import img1 from "@/../images/tall.webp";
// @ts-ignore
import img2 from "@/../images/const.webp";
// @ts-ignore
import img3 from "@/../images/tall-2.webp";
// @ts-ignore
import img4 from "@/../images/IMG-20261008-WA0040.webp";

function ProjectSuccess4() {
    return (
        <section className="bg-muted py-24 lg:py-32 relative overflow-hidden">
            <DotPattern corner="top-right"/>
            <DotPattern corner="bottom-left"/>
            <Wrapper className="relative z-10">
                <div className="max-w-4xl mb-16 lg:mb-24">
                    <SectionLabel className="mb-8">Planning &amp; Execution</SectionLabel>
                    <h2>
                        <SwipeTitle
                            className="text-5xl md:text-7xl font-black font-heading text-foreground drop-shadow-sm uppercase tracking-tight leading-[1.1]">
                            <SwipeLine>Preparation Makes</SwipeLine>
                            <SwipeLine>
                                <span
                                    className="bg-linear-to-r from-primary to-primary inline-block px-1 bg-clip-text text-transparent">The Difference</span>
                            </SwipeLine>
                        </SwipeTitle>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
                    <div
                        className="lg:col-span-5 space-y-6 text-base sm:text-lg text-muted-foreground leading-relaxed font-normal">
                        <p>
                            A crane is only one part of a successful operation. Behind each lift is a process of
                            assessing the site, selecting suitable equipment and coordinating the people involved. For
                            more complex work, that preparation can include detailed lift plans, method studies and
                            crane configurations.
                        </p>
                        <p>
                            Our aim is to give clients a clear path from the first discussion to the completed lift one
                            built on practical planning and communication throughout the job.
                        </p>
                        <div className="pt-2 border-t border-border/60 space-y-4">
                            <h3 className="text-xl font-bold font-heading uppercase text-foreground">
                                A Partner On Site
                            </h3>
                            <p>
                                Lifting work often happens alongside other teams and deadlines. We work with clients and
                                site teams to understand the wider project, communicate the plan and respond to the
                                conditions on the ground.
                            </p>
                            <p>
                                Whether the requirement is straightforward or technically demanding, we bring the same
                                attention to preparation and execution.
                            </p>
                        </div>
                    </div>

                    <div className="lg:col-span-7 h-full">
                        <div
                            className="grid grid-cols-2 grid-rows-3 gap-3 md:gap-4 h-[400px] md:h-[500px] lg:h-full lg:min-h-[600px]">
                            {/* Large left item */}
                            <div
                                className="col-span-1 row-span-2 relative rounded-2xl md:rounded-3xl overflow-hidden shadow-lg group">
                                <img src={img1}
                                     className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                     alt="Crane operation 1"/>
                            </div>
                            {/* Top right item */}
                            <div
                                className="col-span-1 row-span-1 relative rounded-2xl md:rounded-3xl overflow-hidden shadow-lg group">
                                <img src={img2}
                                     className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                     alt="Crane operation 2"/>
                            </div>
                            {/* Middle right item */}
                            <div
                                className="col-span-1 row-span-2 relative rounded-2xl md:rounded-3xl overflow-hidden shadow-lg group">
                                <img src={img3}
                                     className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                     alt="Crane operation 3"/>
                            </div>
                            {/* Bottom left item */}
                            <div
                                className="col-span-1 row-span-1 relative rounded-2xl md:rounded-3xl overflow-hidden shadow-lg group">
                                <img src={img4}
                                     className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                     alt="Crane operation 4"/>
                            </div>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </section>
    );
}

export default ProjectSuccess4;
