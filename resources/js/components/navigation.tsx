import {Link, usePage} from '@inertiajs/react';
import {ThemeToggle} from './theme-toggle';
import Wrapper from "@/components/ui/misc/wrapper.tsx";
import {Logo} from "./logo";
import {Menu} from 'lucide-react';
import {Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger} from '@/components/ui/sheet';
import {aboutUs, contactUs, home} from '@/routes';
import {cn} from "@/lib/utils";

const navLinks = [
    {name: 'Home', href: home.url()},
    {name: 'About Us', href: aboutUs.url()},
    {name: 'Contact Us', href: contactUs.url()},
];

export function Navigation() {
    const {url} = usePage();
    const currentPath = (url.split('?')[0] || '/').replace(/\/+$/, '') || '/';

    return (
        <nav className="border-b border-border bg-background/75 backdrop-blur-md fixed w-full top-0 z-40">
            <Wrapper>
                <div className="flex justify-between h-16 items-center">
                    <div className="flex items-center">
                        <Link href={home.url()} className="flex items-center">
                            <Logo className="h-8 w-auto"/>
                        </Link>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="hidden md:flex gap-2 text-sm font-medium items-center">
                            {navLinks.map((link) => {
                                const targetPath = (link.href.replace(/\/+$/, '') || '/');
                                const isActive = targetPath === '/'
                                    ? currentPath === '/'
                                    : currentPath === targetPath || currentPath.startsWith(targetPath + '/');

                                return (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className={cn(
                                            "px-4 py-1.5 rounded-lg text-sm transition-colors",
                                            isActive
                                                ? "bg-primary text-primary-foreground font-semibold shadow-xs"
                                                : "text-muted-foreground hover:text-foreground hover:bg-muted/50 font-medium"
                                        )}
                                    >
                                        {link.name}
                                    </Link>
                                );
                            })}
                        </div>
                        <ThemeToggle/>
                        <div className="md:hidden">
                            <Sheet>
                                <SheetTrigger className="flex items-center justify-center p-2">
                                    <Menu className="h-6 w-6"/>
                                </SheetTrigger>
                                <SheetContent side="right" className="p-8">
                                    <SheetTitle className="sr-only">Menu</SheetTitle>
                                    <SheetDescription className="sr-only">Navigation Menu</SheetDescription>
                                    <div className="flex items-center mb-8 mt-4">
                                        <Logo className="h-8 w-auto"/>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        {navLinks.map((link) => {
                                            const targetPath = (link.href.replace(/\/+$/, '') || '/');
                                            const isActive = targetPath === '/'
                                                ? currentPath === '/'
                                                : currentPath === targetPath || currentPath.startsWith(targetPath + '/');

                                            return (
                                                <Link
                                                    key={link.name}
                                                    href={link.href}
                                                    className={cn(
                                                        "text-base transition-colors py-2.5 px-4 rounded-xl font-medium",
                                                        isActive
                                                            ? "bg-primary text-primary-foreground font-semibold shadow-xs"
                                                            : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                                                    )}
                                                >
                                                    {link.name}
                                                </Link>
                                            );
                                        })}
                                    </div>
                                </SheetContent>
                            </Sheet>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </nav>
    );
}
