import Wrapper from "@/components/ui/misc/wrapper.tsx";
// @ts-ignore
import bannerImg from "@/../images/IMG-20261008-WA0044.webp";
import { CheckCircle } from "lucide-react";

function ProjectSuccess1() {
    return (
        <section className="relative py-24 lg:py-32 overflow-hidden bg-foreground">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
                <img
                    src={bannerImg}
                    alt="Crane operations"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/80"></div>
            </div>

            <Wrapper className="relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center justify-center p-3 bg-primary/20 rounded-full mb-8">
                        <CheckCircle className="w-8 h-8 text-primary" />
                    </div>
                    
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-heading text-white uppercase tracking-tight mb-8">
                        Every Successful Project <span className="text-primary">Begins With Us</span>
                    </h2>
                    
                    <div className="space-y-8 text-lg md:text-xl text-gray-300 leading-relaxed text-left md:text-center">
                        <p>
                            With services available for both short and long-term hire, Target Cranes provides fully managed lifting
                            solutions tailored to each project’s scope and scale. Every operation begins long before the first lift, through detailed planning, site analysis, and equipment selection that ensure complete readiness from the ground up.
                        </p>
                        
                        <p>
                            Safety lies at the heart of our operations. Before any project begins, our teams carry out comprehensive
                            risk assessments and method studies to safeguard our people, our clients, and the environments in which
                            we work. For complex lifts, we implement engineered lift plans, CAD drawings, and precise crane
                            configurations to guarantee safe, efficient lifting operations that meet the highest industry standards.
                        </p>
                    </div>
                </div>
            </Wrapper>
        </section>
    );
}

export default ProjectSuccess1;
