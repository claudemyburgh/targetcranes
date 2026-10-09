import Wrapper from "@/components/ui/misc/wrapper.tsx";

export function Footer() {
    return (
        <footer className="border-t border-border py-12 mt-20 bg-background">
            <Wrapper className=" text-center text-muted-foreground text-sm">
                &copy; {new Date().getFullYear()} Laravel + React + Filament Starter Kit. All rights reserved.
            </Wrapper>
        </footer>
    );
}
