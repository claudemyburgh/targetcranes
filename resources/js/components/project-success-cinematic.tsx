import Wrapper from "@/components/ui/misc/wrapper.tsx";
// @ts-ignore
import bannerImg from "@/../images/IMG-20261008-WA0054.webp"; 

function ProjectSuccessCinematic() {
    return (
        <section className="relative min-h-[80vh] flex items-center py-24 lg:py-32">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img 
                    src={bannerImg} 
                    alt="Crane lifting operation" 
                    className="w-full h-full object-cover grayscale-[30%]" 
                />
                {/* Heavy dark gradient overlay for industrial cinematic feel */}
                <div className="absolute inset-0 bg-linear-to-r from-black/95 via-black/80 to-black/40"></div>
            </div>

            <Wrapper className="relative z-10">
                <div className="max-w-5xl">
                    <div className="w-20 h-2 bg-primary mb-12"></div>
                    
                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-black font-heading text-white uppercase tracking-tighter leading-[0.95] mb-16 drop-shadow-2xl">
                        Every Successful Project <br />
                        Begins With Us
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 text-gray-300 text-lg md:text-xl leading-relaxed font-medium">
                        <div>
                            <p>
                                With services available for both short and long-term hire, Target Cranes provides fully managed lifting solutions tailored to each project’s scope and scale. Every operation begins long before the first lift, through detailed planning, site analysis, and equipment selection that ensure complete readiness from the ground up.
                            </p>
                        </div>
                        <div className="space-y-8">
                            <p>
                                <strong className="text-white">Safety lies at the heart of our operations.</strong> Before any project begins, our teams carry out comprehensive risk assessments and method studies to safeguard our people, our clients, and the environments in which we work. 
                            </p>
                            <p>
                                For complex lifts, we implement engineered lift plans, CAD drawings, and precise crane configurations to guarantee safe, efficient lifting operations that meet the highest industry standards.
                            </p>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </section>
    );
}

export default ProjectSuccessCinematic;
