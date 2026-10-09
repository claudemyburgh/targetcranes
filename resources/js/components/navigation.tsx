import {Link} from '@inertiajs/react';
import {ThemeToggle} from './theme-toggle';
import {buttonVariants} from '@/components/ui/button';
import Wrapper from "@/components/ui/misc/wrapper.tsx";

export function Navigation() {
    return (
        <nav className="border-b border-border bg-background/75 backdrop-blur-md fixed w-full top-0 z-40">
            <Wrapper>
                <div className="flex justify-between h-16 items-center">
                    <div className="flex items-center gap-8">
                        <Link href="/"
                              className="font-bold text-2xl font-heading tracking-tight text-primary uppercase">
                            Target Cranes
                        </Link>
                        <div className="hidden md:flex gap-6 text-sm font-medium">
                            <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                                Home
                            </Link>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <ThemeToggle/>
                        <a href="/admin" className={buttonVariants()}>
                            Dashboard
                        </a>
                    </div>
                </div>
            </Wrapper>
        </nav>
    );
}
