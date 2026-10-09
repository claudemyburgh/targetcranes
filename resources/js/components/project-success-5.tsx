import Wrapper from "@/components/ui/misc/wrapper.tsx";
// @ts-ignore
import bannerImg from "@/../images/IMG-20261008-WA0038.webp";
import { Check } from "lucide-react";

function ProjectSuccess5() {
    return (
        <section className="bg-foreground text-background py-24 lg:py-32 relative overflow-hidden">
            {/* Very subtle background image or gradient could go here */}
            
            <Wrapper className="relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    
                    {/* Left Side: Dramatic Typography */}
                    <div>
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-black font-heading uppercase tracking-tight leading-[1.05] mb-12">
                            Every <br className="hidden lg:block"/>
                            Successful <br className="hidden lg:block"/>
                            Project <br className="hidden lg:block"/>
                            <span className="text-primary">Begins With Us</span>
                        </h2>

                        <div className="space-y-6">
                            <div className="flex gap-6 items-start">
                                <div className="mt-1 shrink-0 bg-primary/20 p-2 rounded-full">
                                    <Check className="w-6 h-6 text-primary" strokeWidth={3} />
                                </div>
                                <p className="text-xl text-gray-300 leading-relaxed">
                                    With services available for both short and long-term hire, Target Cranes provides fully managed lifting solutions tailored to each project’s scope and scale. Every operation begins long before the first lift, through detailed planning, site analysis, and equipment selection that ensure complete readiness from the ground up.
                                </p>
                            </div>

                            <div className="flex gap-6 items-start">
                                <div className="mt-1 shrink-0 bg-primary/20 p-2 rounded-full">
                                    <Check className="w-6 h-6 text-primary" strokeWidth={3} />
                                </div>
                                <p className="text-xl text-gray-300 leading-relaxed">
                                    Safety lies at the heart of our operations. Before any project begins, our teams carry out comprehensive risk assessments and method studies to safeguard our people, our clients, and the environments in which we work. For complex lifts, we implement engineered lift plans, CAD drawings, and precise crane configurations to guarantee safe, efficient lifting operations that meet the highest industry standards.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Image with geometric accent */}
                    <div className="relative">
                        {/* Decorative element */}
                        <div className="absolute -top-8 -left-8 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
                        <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
                        
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-800">
                            <img 
                                src={bannerImg} 
                                alt="Crane operation" 
                                className="w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                    </div>
                    
                </div>
            </Wrapper>
        </section>
    );
}

export default ProjectSuccess5;
