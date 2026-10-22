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
import {Building2, CalendarClock, ClipboardCheck, Clock, Compass, HardHat, ShieldCheck, Truck} from "lucide-react";

function Home() {
    return (
        <>
            <Seo/>
            <Hero/>
            <HomeHeroSplit/>

            <WhoWeAre/>
            {/*<Stats/>*/}
            {/*<ServiceAreasAlt1/>*/}
            <ServiceAreasAlt3/>
            <ScrollDivider
                texts={[
                    <>
                        <span className="inline-flex items-center gap-4 uppercase font-heading">
                            <Truck className="size-12 shrink-0" strokeWidth={2.5}/>
                            <span>Wet &amp; Dry Crane Hire Options</span>
                        </span>
                        &nbsp;<span className="mx-3.75 inline-flex items-center">•</span>&nbsp;
                        <span className="inline-flex items-center gap-4 uppercase font-heading">
                            <ClipboardCheck className="size-12 shrink-0" strokeWidth={2.5}/>
                            <span>2D &amp; 3D CAD Lift Studies</span>
                        </span>
                        &nbsp;<span className="mx-3.75 inline-flex items-center">•</span>&nbsp;
                        <span className="inline-flex items-center gap-4 uppercase font-heading">
                            <Compass className="size-12 shrink-0" strokeWidth={2.5}/>
                            <span>Machinery &amp; Plant Relocation</span>
                        </span>
                        &nbsp;<span className="mx-3.75 inline-flex items-center">•</span>&nbsp;
                        <span className="inline-flex items-center gap-4 uppercase font-heading">
                            <ShieldCheck className="size-12 shrink-0" strokeWidth={2.5}/>
                            <span>Certified Rigging &amp; Spreader Beams</span>
                        </span>
                    </>,
                    <>
                        <span className="inline-flex items-center gap-4 uppercase font-heading">
                            <Building2 className="size-12 shrink-0" strokeWidth={2.5}/>
                            <span>Structural Steel &amp; Precast Lifts</span>
                        </span>
                        &nbsp;<span className="mx-3.75 inline-flex items-center">•</span>&nbsp;
                        <span className="inline-flex items-center gap-4 uppercase font-heading">
                            <HardHat className="size-12 shrink-0" strokeWidth={2.5}/>
                            <span>HVAC, Generator &amp; Vessel Placement</span>
                        </span>
                        &nbsp;<span className="mx-3.75 inline-flex items-center">•</span>&nbsp;
                        <span className="inline-flex items-center gap-4 uppercase font-heading">
                            <CalendarClock className="size-12 shrink-0" strokeWidth={2.5}/>
                            <span>Single-Day &amp; Contract Deployments</span>
                        </span>
                        &nbsp;<span className="mx-3.75 inline-flex items-center">•</span>&nbsp;
                        <span className="inline-flex items-center gap-4 uppercase font-heading">
                            <Clock className="size-12 shrink-0" strokeWidth={2.5}/>
                            <span>24/7 Emergency Callout Support</span>
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
