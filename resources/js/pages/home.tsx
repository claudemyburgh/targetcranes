import AppLayout from "@/layouts/app-layout.tsx";
import Hero from "@/components/hero.tsx";
import Stats from "@/components/stats.tsx";
import WhoWeAre from "@/components/who-we-are.tsx";
import ServiceAreasAlt1 from "@/components/service-areas-alt-1.tsx";
import ProjectSuccess4 from "@/components/project-success-4.tsx";
import NationwideService from "@/components/nationwide-service.tsx";
import { Seo } from "@/components/seo.tsx";

function Home() {
    return (
        <>
            <Seo />
            <Hero/>
            <WhoWeAre/>
            <Stats/>
            <ServiceAreasAlt1/>
            <ProjectSuccess4/>
            <NationwideService/>

        </>

    )
}


export default Home;

Home.displayName = "Home";


Home.layout = AppLayout;
