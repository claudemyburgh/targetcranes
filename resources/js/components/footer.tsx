import Wrapper from "@/components/ui/misc/wrapper.tsx";
import { Link } from "@inertiajs/react";
import { Logo } from "./logo";
import { home, aboutUs, contactUs } from "@/routes";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
    return (
        <footer className="border-t border-border bg-card/60 backdrop-blur-md pt-12 pb-8 text-foreground transition-colors">
            <Wrapper>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-10 items-start">
                    {/* Brand */}
                    <div className="md:col-span-5 space-y-4">
                        <Link href={home.url()} className="inline-block">
                            <Logo className="h-8 w-auto" />
                        </Link>
                        <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
                            Specialized mobile crane hire, heavy rigging, and precision lifting services across Cape Town and South Africa.
                        </p>
                    </div>

                    {/* Quick Navigation Links */}
                    <div className="md:col-span-3 space-y-3">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-primary font-heading">
                            Navigation
                        </h4>
                        <ul className="space-y-2 text-sm font-medium">
                            <li>
                                <Link href={home.url()} className="text-muted-foreground hover:text-primary transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href={aboutUs.url()} className="text-muted-foreground hover:text-primary transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href={contactUs.url()} className="text-muted-foreground hover:text-primary transition-colors">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Details */}
                    <div className="md:col-span-4 space-y-3">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-primary font-heading">
                            Contact
                        </h4>
                        <ul className="space-y-2.5 text-sm">
                            <li>
                                <a
                                    href="tel:0636737500"
                                    className="group inline-flex items-center gap-2.5 text-muted-foreground hover:text-primary transition-colors"
                                >
                                    <Phone className="w-4 h-4 text-primary shrink-0" />
                                    <span className="font-semibold text-foreground group-hover:text-primary transition-colors">
                                        063 673 7500
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="mailto:enquiries@targetcranes.co.za"
                                    className="group inline-flex items-center gap-2.5 text-muted-foreground hover:text-primary transition-colors"
                                >
                                    <Mail className="w-4 h-4 text-primary shrink-0" />
                                    <span className="font-semibold text-foreground group-hover:text-primary transition-colors break-all">
                                        enquiries@targetcranes.co.za
                                    </span>
                                </a>
                            </li>
                            <li className="flex items-center gap-2.5 text-muted-foreground">
                                <MapPin className="w-4 h-4 text-primary shrink-0" />
                                <span>Fabriek St, Bellville South, Cape Town, 7530</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Sub-Footer */}
                <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
                    <p>
                        &copy; {new Date().getFullYear()} Target Cranes (Pty) Ltd. All rights reserved.
                    </p>
                    <p className="flex items-center gap-1">
                        Designed and developed by{" "}
                        <a
                            href="https://designbycode.co.za"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold text-foreground hover:text-primary transition-colors underline-offset-4 hover:underline"
                        >
                            designbycode
                        </a>
                    </p>
                </div>
            </Wrapper>
        </footer>
    );
}

export default Footer;
