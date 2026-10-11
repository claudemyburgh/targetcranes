import AppLayout from "@/layouts/app-layout";
import { Seo } from "@/components/seo";
import Wrapper from "@/components/ui/misc/wrapper";
import SectionLabel from "@/components/ui/misc/section-label";
import { Shield, Lock, Eye, Database, Globe, UserCheck, Mail } from "lucide-react";

export default function PrivacyPolicy() {
    return (
        <AppLayout>
            <Seo
                title="Privacy Policy"
                description="Target Cranes Privacy Policy. Learn how we handle, process, and protect your personal information in compliance with South African privacy standards (POPIA)."
            />

            <section className="pt-28 pb-16 lg:pt-36 lg:pb-24 bg-background">
                <Wrapper>
                    {/* Header */}
                    <div className="max-w-3xl mb-12">
                        <SectionLabel className="mb-4">Legal & Privacy</SectionLabel>
                        <h1 className="text-4xl md:text-5xl font-black font-heading tracking-tight uppercase text-foreground mb-4">
                            Privacy Policy
                        </h1>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                            Target Cranes (Pty) Ltd (&ldquo;Target Cranes&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) is committed to protecting your privacy and ensuring your personal data is handled in a safe, transparent, and responsible manner in accordance with the Protection of Personal Information Act (POPIA) of South Africa.
                        </p>
                        <p className="text-xs text-muted-foreground mt-2">
                            Last Updated: {new Date().toLocaleDateString('en-ZA', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </p>
                    </div>

                    {/* Content Grid */}
                    <div className="max-w-4xl space-y-12">
                        {/* Who we are */}
                        <div className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-xs space-y-3">
                            <div className="flex items-center gap-3 text-primary">
                                <Globe className="w-6 h-6 shrink-0" />
                                <h2 className="text-xl font-bold font-heading uppercase text-foreground">Who We Are</h2>
                            </div>
                            <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                                Our website address is: <strong className="text-foreground">targetcranes.co.za</strong>.
                            </p>
                            <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                                Target Cranes is a specialized mobile crane hire and managed lifting service provider based at Fabriek St, Bellville South, Cape Town, 7530, South Africa.
                            </p>
                        </div>

                        {/* Comments */}
                        <div className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-xs space-y-3">
                            <div className="flex items-center gap-3 text-primary">
                                <Eye className="w-6 h-6 shrink-0" />
                                <h2 className="text-xl font-bold font-heading uppercase text-foreground">Comments</h2>
                            </div>
                            <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                                When visitors leave comments on the site we collect the data shown in the comments form, and also the visitor&rsquo;s IP address and browser user agent string to help spam detection.
                            </p>
                        </div>

                        {/* Media */}
                        <div className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-xs space-y-3">
                            <div className="flex items-center gap-3 text-primary">
                                <Database className="w-6 h-6 shrink-0" />
                                <h2 className="text-xl font-bold font-heading uppercase text-foreground">Media</h2>
                            </div>
                            <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                                If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS) included. Visitors to the website can download and extract any location data from images on the website.
                            </p>
                        </div>

                        {/* Cookies */}
                        <div className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-xs space-y-4">
                            <div className="flex items-center gap-3 text-primary">
                                <Shield className="w-6 h-6 shrink-0" />
                                <h2 className="text-xl font-bold font-heading uppercase text-foreground">Cookies</h2>
                            </div>
                            <div className="space-y-3 text-muted-foreground leading-relaxed text-sm md:text-base">
                                <p>
                                    If you leave a comment on our site you may opt-in to saving your name, email address and website in cookies. These are for your convenience so that you do not have to fill in your details again when you leave another comment. These cookies will last for one year.
                                </p>
                                <p>
                                    If you visit our login page, we will set a temporary cookie to determine if your browser accepts cookies. This cookie contains no personal data and is discarded when you close your browser.
                                </p>
                                <p>
                                    When you log in, we will also set up several cookies to save your login information and your screen display choices. Login cookies last for two days, and screen options cookies last for a year. If you select &ldquo;Remember Me&rdquo;, your login will persist for two weeks. If you log out of your account, the login cookies will be removed.
                                </p>
                                <p>
                                    If you edit or publish an article, an additional cookie will be saved in your browser. This cookie includes no personal data and simply indicates the post ID of the article you just edited. It expires after 1 day.
                                </p>
                            </div>
                        </div>

                        {/* Embedded content */}
                        <div className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-xs space-y-3">
                            <div className="flex items-center gap-3 text-primary">
                                <Globe className="w-6 h-6 shrink-0" />
                                <h2 className="text-xl font-bold font-heading uppercase text-foreground">Embedded Content From Other Websites</h2>
                            </div>
                            <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                                Articles and media on this site may include embedded content (e.g. videos, images, articles, interactive maps, etc.). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website.
                            </p>
                            <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                                These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracking your interaction with the embedded content if you have an account and are logged in to that website.
                            </p>
                        </div>

                        {/* Who we share your data with */}
                        <div className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-xs space-y-3">
                            <div className="flex items-center gap-3 text-primary">
                                <Lock className="w-6 h-6 shrink-0" />
                                <h2 className="text-xl font-bold font-heading uppercase text-foreground">Who We Share Your Data With</h2>
                            </div>
                            <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                                If you request a password reset, your IP address will be included in the reset email. We do not sell, rent, or lease customer data to third-party marketing companies. Data submitted via quotation and contact forms is solely used to facilitate crane hire services, lift assessments, and direct business communications.
                            </p>
                        </div>

                        {/* How long we retain your data */}
                        <div className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-xs space-y-3">
                            <div className="flex items-center gap-3 text-primary">
                                <Database className="w-6 h-6 shrink-0" />
                                <h2 className="text-xl font-bold font-heading uppercase text-foreground">How Long We Retain Your Data</h2>
                            </div>
                            <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                                If you leave a comment, the comment and its metadata are retained indefinitely. This is so we can recognize and approve any follow-up comments automatically instead of holding them in a moderation queue.
                            </p>
                            <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                                For users that register on our website (if any), we also store the personal information they provide in their user profile. All users can see, edit, or delete their personal information at any time (except they cannot change their username). Website administrators can also see and edit that information.
                            </p>
                        </div>

                        {/* Rights over data */}
                        <div className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-xs space-y-3">
                            <div className="flex items-center gap-3 text-primary">
                                <UserCheck className="w-6 h-6 shrink-0" />
                                <h2 className="text-xl font-bold font-heading uppercase text-foreground">What Rights You Have Over Your Data</h2>
                            </div>
                            <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                                If you have an account on this site, or have left comments, you can request to receive an exported file of the personal data we hold about you, including any data you have provided to us. You can also request that we erase any personal data we hold about you. This does not include any data we are obliged to keep for administrative, legal, regulatory, or security purposes.
                            </p>
                        </div>

                        {/* Where your data is sent */}
                        <div className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-xs space-y-3">
                            <div className="flex items-center gap-3 text-primary">
                                <Shield className="w-6 h-6 shrink-0" />
                                <h2 className="text-xl font-bold font-heading uppercase text-foreground">Where Your Data Is Sent</h2>
                            </div>
                            <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                                Visitor comments and form enquiries may be checked through an automated spam detection service.
                            </p>
                        </div>

                        {/* Contact Information */}
                        <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 md:p-8 space-y-3">
                            <div className="flex items-center gap-3 text-primary">
                                <Mail className="w-6 h-6 shrink-0" />
                                <h2 className="text-xl font-bold font-heading uppercase text-foreground">Contact & POPIA Inquiries</h2>
                            </div>
                            <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                                If you have questions regarding this Privacy Policy, your personal data, or wish to exercise your rights under POPIA, please reach out directly:
                            </p>
                            <div className="text-sm font-medium space-y-1 text-foreground">
                                <p>Email: <a href="mailto:enquiries@targetcranes.co.za" className="text-primary hover:underline">enquiries@targetcranes.co.za</a></p>
                                <p>Phone: <a href="tel:0636737500" className="text-primary hover:underline">063 673 7500</a></p>
                                <p>Address: Fabriek St, Bellville South, Cape Town, 7530, South Africa</p>
                            </div>
                        </div>
                    </div>
                </Wrapper>
            </section>
        </AppLayout>
    );
}
