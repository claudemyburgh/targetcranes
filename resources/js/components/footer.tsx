import Wrapper from "@/components/ui/misc/wrapper.tsx";
import {Link} from "@inertiajs/react";
import {Logo} from "./logo";
import {aboutUs, contactUs, home, privacyPolicy, safety, termsOfService} from "@/routes";
import {Mail, MapPin, Phone} from "lucide-react";

export function Footer() {
    return (
        <footer
            className="border-t border-border bg-card/60 backdrop-blur-md pt-12 pb-8 text-foreground transition-colors">
            <Wrapper>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-10 items-start">
                    {/* Brand */}
                    <div className="md:col-span-5 space-y-4">
                        <Link href={home.url()} className="inline-block">
                            <Logo className="h-8 w-auto"/>
                        </Link>
                        <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
                            Specialized mobile crane hire, heavy rigging, and precision lifting services across Cape
                            Town and South Africa.
                        </p>
                        {/* Social Links */}
                        <div className="flex items-center gap-3 pt-1">
                            <a
                                href="https://www.facebook.com/Targetcranes/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Target Cranes on Facebook"
                                className="w-9 h-9 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground text-muted-foreground flex items-center justify-center transition-all hover:scale-105 shadow-xs"
                            >
                                <FacebookIcon className="w-4 h-4 fill-current"/>
                            </a>
                            <a
                                href="https://wa.me/27636737500"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Target Cranes on WhatsApp"
                                className="w-9 h-9 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground text-muted-foreground flex items-center justify-center transition-all hover:scale-105 shadow-xs"
                            >
                                <WhatsAppIcon className="w-4 h-4 fill-current"/>
                            </a>
                  
                        </div>
                    </div>

                    {/* Quick Navigation Links */}
                    <div className="md:col-span-3 space-y-3">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-primary font-heading">
                            Navigation
                        </h4>
                        <ul className="space-y-2 text-sm font-medium">
                            <li>
                                <Link href={home.url()}
                                      className="text-muted-foreground hover:text-primary transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href={aboutUs.url()}
                                      className="text-muted-foreground hover:text-primary transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href={safety.url()}
                                      className="text-muted-foreground hover:text-primary transition-colors">
                                    Safety
                                </Link>
                            </li>
                            <li>
                                <Link href={contactUs.url()}
                                      className="text-muted-foreground hover:text-primary transition-colors">
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
                                    <Phone className="w-4 h-4 text-primary shrink-0"/>
                                    <span
                                        className="font-semibold text-foreground group-hover:text-primary transition-colors">
                                        063 673 7500
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="mailto:enquiries@targetcranes.co.za"
                                    className="group inline-flex items-center gap-2.5 text-muted-foreground hover:text-primary transition-colors"
                                >
                                    <Mail className="w-4 h-4 text-primary shrink-0"/>
                                    <span
                                        className="font-semibold text-foreground group-hover:text-primary transition-colors break-all">
                                        enquiries@targetcranes.co.za
                                    </span>
                                </a>
                            </li>
                            <li className="flex items-center gap-2.5 text-muted-foreground">
                                <MapPin className="w-4 h-4 text-primary shrink-0"/>
                                <span>Fabriek St, Bellville South, Cape Town, 7530</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Sub-Footer */}
                <div
                    className="border-t border-border pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
                    <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
                        <p>
                            &copy; {new Date().getFullYear()} Target Cranes (Pty) Ltd. All rights reserved.
                        </p>
                        <div className="flex items-center gap-3">
                            <Link href={privacyPolicy.url()}
                                  className="hover:text-primary transition-colors hover:underline">
                                Privacy Policy
                            </Link>
                            <span>&bull;</span>
                            <Link href={termsOfService.url()}
                                  className="hover:text-primary transition-colors hover:underline">
                                Terms of Service
                            </Link>
                        </div>
                    </div>
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

function FacebookIcon({className}: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
            <path
                d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
    );
}

function WhatsAppIcon({className}: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
            <path
                d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.64c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.03-1.25-.75-.67-1.26-1.5-1.41-1.75-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.87.85-.87 2.08s.89 2.42 1.01 2.59c.13.17 1.76 2.69 4.26 3.77.6.26 1.06.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.23-.17-.48-.29Z"/>
        </svg>
    );
}

function LinkedinIcon({className}: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
            <path
                d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.66 1.66 0 0 0-1.66 1.66 1.66 1.66 0 0 0 1.66 1.66 1.66 1.66 0 0 0 1.66-1.66 1.66 1.66 0 0 0-1.66-1.66Z"/>
        </svg>
    );
}
