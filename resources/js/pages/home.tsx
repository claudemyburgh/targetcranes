import AppLayout from "@/layouts/app-layout.tsx";
import Hero from "@/components/hero.tsx";
import Stats from "@/components/stats.tsx";
import WhoWeAre from "@/components/who-we-are.tsx";
import ServiceAreasAlt3 from "@/components/service-areas-alt-3.tsx";
import ProjectSuccess4 from "@/components/project-success-4.tsx";
import NationwideService2 from "@/components/nationwide-service-2.tsx";
import {Seo} from "@/components/seo.tsx";
import HomeHeroSplit from "@/components/home-hero-split.tsx";
import ScrollDivider from "@/components/scroll-divider.tsx";
import {Anchor, ClipboardCheck, Compass, HardHat, Pickaxe, ShieldCheck, Truck, Wind} from "lucide-react";

function Home() {
    return (
        <>
            <Seo/>
            <Hero/>
            <HomeHeroSplit/>

            <WhoWeAre/>
            <Stats/>
            {/*<ServiceAreasAlt1/>*/}
            <ServiceAreasAlt3/>
            <ScrollDivider
                texts={[
                    <>
                        <span className="inline-flex items-center gap-4 uppercase font-heading">
                            <Truck className="size-12 shrink-0" strokeWidth={2.5}/>
                            <span>Mobile &amp; All-Terrain Crane Hire</span>
                        </span>
                        &nbsp;<span className="mx-3.75 inline-flex items-center">•</span>&nbsp;
                        <span className="inline-flex items-center gap-4 uppercase font-heading">
                            <ClipboardCheck className="size-12 shrink-0" strokeWidth={2.5}/>
                            <span>Engineered Lift Planning</span>
                        </span>
                        &nbsp;<span className="mx-3.75 inline-flex items-center">•</span>&nbsp;
                        <span className="inline-flex items-center gap-4 uppercase font-heading">
                            <Compass className="size-12 shrink-0" strokeWidth={2.5}/>
                            <span>Heavy Rigging &amp; Site Surveys</span>
                        </span>
                        &nbsp;<span className="mx-3.75 inline-flex items-center">•</span>&nbsp;
                        <span className="inline-flex items-center gap-4 uppercase font-heading">
                            <ShieldCheck className="size-12 shrink-0" strokeWidth={2.5}/>
                            <span>Certified Safety Compliance</span>
                        </span>
                    </>,
                    <>
                        <span className="inline-flex items-center gap-4 uppercase font-heading">
                            <Anchor className="size-12 shrink-0" strokeWidth={2.5}/>
                            <span>Maritime &amp; Port Operations</span>
                        </span>
                        &nbsp;<span className="mx-3.75 inline-flex items-center">•</span>&nbsp;
                        <span className="inline-flex items-center gap-4 uppercase font-heading">
                            <HardHat className="size-12 shrink-0" strokeWidth={2.5}/>
                            <span>Construction &amp; Civil Engineering</span>
                        </span>
                        &nbsp;<span className="mx-3.75 inline-flex items-center">•</span>&nbsp;
                        <span className="inline-flex items-center gap-4 uppercase font-heading">
                            <Wind className="size-12 shrink-0" strokeWidth={2.5}/>
                            <span>Renewable Energy Installations</span>
                        </span>
                        &nbsp;<span className="mx-3.75 inline-flex items-center">•</span>&nbsp;
                        <span className="inline-flex items-center gap-4 uppercase font-heading">
                            <Pickaxe className="size-12 shrink-0" strokeWidth={2.5}/>
                            <span>Mining &amp; Heavy Plant Infrastructure</span>
                        </span>
                    </>
                ]}
            />
            <ProjectSuccess4/>
            {/*<NationwideService/>*/}
            <NationwideService2/>
            {/*<PlanningALiftCta/>*/}
        </>

    )
}


export default Home;

Home.displayName = "Home";


Home.layout = AppLayout;
