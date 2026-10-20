import AppLayout from "@/layouts/app-layout.tsx";
import Hero from "@/components/hero.tsx";
import Stats from "@/components/stats.tsx";
import WhoWeAre from "@/components/who-we-are.tsx";
import ServiceAreasAlt3 from "@/components/service-areas-alt-3.tsx";
import ProjectSuccess4 from "@/components/project-success-4.tsx";
import NationwideService from "@/components/nationwide-service.tsx";
import {Seo} from "@/components/seo.tsx";
import HomeHeroSplit from "@/components/home-hero-split.tsx";

function Home() {
    return (
        <>
            <Seo/>
            <Hero/>
            <HomeHeroSplit/>

            <WhoWeAre/>
            <Stats/>
            <ServiceAreasAlt3/>
            <ProjectSuccess4/>
            <NationwideService/>
            {/*<PlanningALiftCta/>*/}
        </>

    )
}


export default Home;

Home.displayName = "Home";


Home.layout = AppLayout;
