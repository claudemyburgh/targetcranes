import AppLayout from "@/layouts/app-layout.tsx";
import Wrapper from "@/components/ui/misc/wrapper.tsx";
import Hero from "@/components/hero.tsx";


function Home() {
    return (
        <>
            <Hero/>
            <Wrapper>Home page</Wrapper>
        </>

    )
}


export default Home;

Home.displayName = "Home";


Home.layout = AppLayout;
