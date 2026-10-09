import AppLayout from "@/layouts/app-layout.tsx";
import Hero from "@/components/hero.tsx";
import ServiceAreasAlt1 from "@/components/service-areas-alt-1.tsx";
import ProjectSuccess4 from "@/components/project-success-4.tsx";

function Home() {
    return (
        <>
            <Hero/>
            <ServiceAreasAlt1/>
            <ProjectSuccess4/>
        </>

    )
}


export default Home;

Home.displayName = "Home";


Home.layout = AppLayout;
