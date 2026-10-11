import Wrapper from "@/components/ui/misc/wrapper.tsx";
import SectionLabel from "@/components/ui/misc/section-label.tsx";
import {SwipeLine, SwipeTitle} from "@/components/ui/swipe-title.tsx";
// @ts-ignore
import whoWeAreImage from "@/../images/IMG-20261008-WA0045.webp";

export default function WhoWeAre() {
    return (
        <section className="py-24 bg-muted">
            <Wrapper>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <SectionLabel className="mb-8">Who we are</SectionLabel>
                        <h2>
                            <SwipeTitle
                                className="text-4xl md:text-6xl font-black font-heading tracking-tighter uppercase mb-6 text-balance">
                                <SwipeLine>Welcome to <span
                                    className={`bg-linear-to-r from-primary to-primary inline-block px-1 bg-clip-text text-transparent`}>Target Cranes</span></SwipeLine>

                            </SwipeTitle>
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                            At Target Cranes, we pride ourselves on delivering top-notch crane services with a focus on
                            safety, efficiency, and customer satisfaction.
                        </p>
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
