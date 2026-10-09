import Wrapper from "@/components/ui/misc/wrapper.tsx";
// @ts-ignore
import bgImg from "@/../images/IMG-20261008-WA0045.webp";

function ProjectSuccess3() {
    return (
        <section className="py-24 bg-card relative">
            <Wrapper>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                    {/* Background Pattern/Image */}
                    <div className="absolute inset-0">
                        <img 
                            src={bgImg} 
                            alt="Background" 
                            className="w-full h-full object-cover opacity-20"
                        />
                        <div className="absolute inset-0 bg-primary/95"></div>
                    </div>

                    <div className="relative z-10 p-8 md:p-16 lg:p-24 flex flex-col lg:flex-row gap-12 items-center">
                        <div className="lg:w-1/3">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-heading uppercase text-primary-foreground tracking-tight leading-tight">
                                Every <br className="hidden lg:block"/>
                                Successful <br className="hidden lg:block"/>
                                Project <br className="hidden lg:block"/>
                                Begins <br className="hidden lg:block"/>
                                With Us
                            </h2>
                        </div>
                        
                        <div className="lg:w-2/3 space-y-8">
                            <div className="bg-primary-foreground/10 p-8 rounded-2xl backdrop-blur-sm border border-primary-foreground/20">
                                <p className="text-primary-foreground text-lg md:text-xl leading-relaxed">
                                    With services available for both short and long-term hire, Target Cranes provides fully managed lifting
                                    solutions tailored to each project’s scope and scale. Every operation begins long before the first lift, through detailed planning, site analysis, and equipment selection that ensure complete readiness from the ground up.
                                </p>
                            </div>
                            
                            <div className="bg-primary-foreground/10 p-8 rounded-2xl backdrop-blur-sm border border-primary-foreground/20">
                                <p className="text-primary-foreground text-lg md:text-xl leading-relaxed">
                                    Safety lies at the heart of our operations. Before any project begins, our teams carry out comprehensive
                                    risk assessments and method studies to safeguard our people, our clients, and the environments in which
                                    we work. For complex lifts, we implement engineered lift plans, CAD drawings, and precise crane
                                    configurations to guarantee safe, efficient lifting operations that meet the highest industry standards.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </section>
    );
}

export default ProjectSuccess3;
