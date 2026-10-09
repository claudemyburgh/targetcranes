import Wrapper from "@/components/ui/misc/wrapper.tsx";
import SectionLabel from "@/components/ui/misc/section-label.tsx";
// @ts-ignore
import img1 from "@/../images/IMG-20261008-WA0054.webp";
// @ts-ignore
import img2 from "@/../images/IMG-20261008-WA0038.webp";
// @ts-ignore
import img3 from "@/../images/IMG-20261008-WA0039.webp";
// @ts-ignore
import img4 from "@/../images/IMG-20261008-WA0040.webp";

function ProjectSuccess4() {
    return (
        <section className="bg-muted py-24 lg:py-32">
            <Wrapper>
                <div className="max-w-4xl mb-16 lg:mb-24">
                    <SectionLabel className="mb-8">Our Approach</SectionLabel>
                    <h2 className="text-5xl md:text-7xl font-black font-heading text-foreground drop-shadow-sm uppercase tracking-tight leading-[1.1]">
                        Every Successful Project <br/>
                        <span
                            className={`bg-linear-to-r from-primary to-orange-500 inline-block px-1  bg-clip-text text-transparent`}>Begins With Us</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
                    <div className="lg:col-span-5 space-y-8 text-xl text-muted-foreground leading-relaxed font-medium">
                        <p>
                            With services available for both short and long-term hire, Target Cranes provides fully
                            managed lifting solutions tailored to each project’s scope and scale. Every operation begins
                            long before the first lift, through detailed planning, site analysis, and equipment
                            selection that ensure complete readiness from the ground up.
                        </p>
                        <p>
                            Safety lies at the heart of our operations. Before any project begins, our teams carry out
                            comprehensive risk assessments and method studies to safeguard our people, our clients, and
                            the environments in which we work.
                        </p>
                        <p>
                            For complex lifts, we implement engineered lift plans, CAD drawings, and precise crane
                            configurations to guarantee safe, efficient lifting operations that meet the highest
                            industry standards.
                        </p>
                    </div>

                    <div className="lg:col-span-7 h-full">
                        <div className="grid grid-cols-2 grid-rows-3 gap-3 md:gap-4 h-[400px] md:h-[500px] lg:h-full lg:min-h-[600px]">
                            {/* Large left item */}
                            <div className="col-span-1 row-span-2 relative rounded-2xl md:rounded-[2rem] overflow-hidden shadow-lg group">
                                <img src={img1} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="Crane operation 1" />
                            </div>
                            {/* Top right item */}
                            <div className="col-span-1 row-span-1 relative rounded-2xl md:rounded-[2rem] overflow-hidden shadow-lg group">
                                <img src={img2} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="Crane operation 2" />
                            </div>
                            {/* Middle right item */}
                            <div className="col-span-1 row-span-2 relative rounded-2xl md:rounded-[2rem] overflow-hidden shadow-lg group">
                                <img src={img3} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="Crane operation 3" />
                            </div>
                            {/* Bottom left item */}
                            <div className="col-span-1 row-span-1 relative rounded-2xl md:rounded-[2rem] overflow-hidden shadow-lg group">
                                <img src={img4} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="Crane operation 4" />
                            </div>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </section>
    );
}

export default ProjectSuccess4;
