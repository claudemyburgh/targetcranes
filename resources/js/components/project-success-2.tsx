import Wrapper from "@/components/ui/misc/wrapper.tsx";
// @ts-ignore
import bannerImg from "@/../images/IMG-20261008-WA0054.webp";
import { ShieldCheck, HardHat } from "lucide-react";

function ProjectSuccess2() {
    return (
        <section className="bg-background py-24">
            <Wrapper>
                <div className="flex flex-col lg:flex-row min-h-[600px] rounded-3xl overflow-hidden shadow-xl border border-border">
                    {/* Image Side */}
                    <div className="lg:w-1/2 relative min-h-[400px] lg:min-h-full">
                        <img
                            src={bannerImg}
                            alt="Crane lifting operation"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
                    </div>

                    {/* Content Side */}
                    <div className="lg:w-1/2 bg-muted p-8 md:p-12 lg:p-16 flex items-center">
                        <div className="max-w-2xl">
                            <h2 className="text-4xl md:text-5xl font-black font-heading uppercase text-foreground tracking-tight mb-8">
                                Every Successful Project <br className="hidden md:block"/>
                                Begins With Us
                            </h2>

                            <div className="space-y-8">
                                <div className="flex gap-4">
                                    <div className="shrink-0 mt-1">
                                        <div className="p-3 bg-primary/10 rounded-xl">
                                            <HardHat className="w-6 h-6 text-primary" />
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-muted-foreground text-lg leading-relaxed">
                                            With services available for both short and long-term hire, Target Cranes provides fully managed lifting
                                            solutions tailored to each project’s scope and scale. Every operation begins long before the first lift, through detailed planning, site analysis, and equipment selection that ensure complete readiness from the ground up.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="shrink-0 mt-1">
                                        <div className="p-3 bg-primary/10 rounded-xl">
                                            <ShieldCheck className="w-6 h-6 text-primary" />
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-muted-foreground text-lg leading-relaxed">
                                            Safety lies at the heart of our operations. Before any project begins, our teams carry out comprehensive
                                            risk assessments and method studies to safeguard our people, our clients, and the environments in which
                                            we work. For complex lifts, we implement engineered lift plans, CAD drawings, and precise crane
                                            configurations to guarantee safe, efficient lifting operations that meet the highest industry standards.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </section>
    );
}

export default ProjectSuccess2;
