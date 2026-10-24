import {useMemo, useState} from "react";
import AppLayout from "@/layouts/app-layout";
import {Seo} from "@/components/seo";
import Wrapper from "@/components/ui/misc/wrapper";
import SectionLabel from "@/components/ui/misc/section-label";
import DotPattern from "@/components/ui/misc/dot-pattern";
import {SwipeLine, SwipeTitle} from "@/components/ui/swipe-title";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import {Link} from "@inertiajs/react";
import {contactUs} from "@/routes";
import {ArrowRight, HelpCircle, Phone, Search} from "lucide-react";
import {buttonVariants} from "@/components/ui/button";

interface FaqItem {
    id: number;
    question: string;
    answer: string;
    sort_order?: number;
}

interface FaqPageProps {
    faqs: FaqItem[];
}

export default function FaqPage({faqs = []}: FaqPageProps) {
    const [searchQuery, setSearchQuery] = useState("");

    const filteredFaqs = useMemo(() => {
        const query = searchQuery.trim().toLowerCase();
        if (!query) {
            return faqs;
        }

        return faqs.filter(
            (item) =>
                item.question.toLowerCase().includes(query) ||
                item.answer.toLowerCase().includes(query)
        );
    }, [faqs, searchQuery]);

    return (
        <AppLayout>
            <Seo
                title="Frequently Asked Questions"
                description="Find answers to common questions about mobile crane hire, CPA vs contract lifting, rigging teams, site preparations, and certified crane operations at Target Cranes."
            />

            {/* Page Header / Hero */}
            <section className="pt-28 pb-16 lg:pt-36 lg:pb-24 bg-background border-b border-border relative overflow-hidden">
                <DotPattern corner="top-right"/>
                <Wrapper className="relative z-10">
                    <div className="max-w-4xl space-y-6">
                        <SectionLabel className="mb-4">Frequently Asked Questions</SectionLabel>

                        <h2>
                            <SwipeTitle className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading tracking-tighter uppercase text-balance">
                                <SwipeLine>Clear Answers.</SwipeLine>
                                <SwipeLine>
                                    <span className="bg-linear-to-r from-primary to-primary inline-block px-1 bg-clip-text text-transparent">
                                        Engineered Lifting Guidance.
                                    </span>
                                </SwipeLine>
                            </SwipeTitle>
                        </h2>

                        <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed font-medium">
                            Whether you need guidance on crane hire versus contract lifting, site access preparations, or statutory DMR 18 certification, our team has compiled answers to frequently asked questions.
                        </p>

                        {/* Search Bar */}
                        {faqs.length > 0 && (
                            <div className="pt-4 max-w-xl">
                                <div className="relative">
                                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-muted-foreground pointer-events-none"/>
                                    <input
                                        type="text"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        placeholder="Search answers by keyword..."
                                        className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-border bg-card text-foreground placeholder:text-muted-foreground shadow-xs text-sm sm:text-base focus:outline-hidden focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all"
                                    />
                                    {searchQuery && (
                                        <button
                                            type="button"
                                            onClick={() => setSearchQuery("")}
                                            className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-muted-foreground hover:text-foreground cursor-pointer"
                                        >
                                            Clear
                                        </button>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </Wrapper>
            </section>

            {/* Accordion List Section */}
            <section className="py-16 lg:py-24 bg-card/25 border-b border-border relative">
                <Wrapper>
                    <div className="max-w-4xl mx-auto">
                        {filteredFaqs.length > 0 ? (
                            <Accordion defaultValue="item-0" className="divide-y-0 border-b-0 space-y-3 sm:space-y-4">
                                {filteredFaqs.map((faq, index) => {
                                    return (
                                        <AccordionItem
                                            key={faq.id}
                                            value={`item-${index}`}
                                            className="rounded-2xl border border-border bg-card px-4 sm:px-6 py-1.5 sm:py-2 shadow-xs transition-all duration-300 hover:border-primary/30 data-[state=open]:border-primary/50 data-[state=open]:shadow-md data-[state=open]:ring-1 data-[state=open]:ring-primary/15 last:border-b"
                                        >
                                            <AccordionTrigger className="py-3.5 sm:py-4 hover:no-underline">
                                                <div className="flex items-center gap-3 sm:gap-4 text-left">
                                                    <div className="flex size-9 sm:size-11 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary transition-colors group-data-[state=open]:bg-primary group-data-[state=open]:text-primary-foreground font-mono text-xs sm:text-sm font-bold">
                                                        {String(index + 1).padStart(2, "0")}
                                                    </div>
                                                    <div className="flex flex-col gap-0.5">
                                                        <span className="font-heading text-base sm:text-lg md:text-xl font-black uppercase tracking-tight text-foreground group-hover:text-primary transition-colors leading-snug">
                                                            {faq.question}
                                                        </span>
                                                    </div>
                                                </div>
                                            </AccordionTrigger>
                                            <AccordionContent className="pb-4 sm:pb-5 pt-1 sm:pt-2">
                                                <div className="border-t border-border/60 pt-3.5 sm:pt-4 pl-0 sm:pl-15 text-muted-foreground leading-relaxed text-sm sm:text-base">
                                                    {faq.answer}
                                                </div>
                                            </AccordionContent>
                                        </AccordionItem>
                                    );
                                })}
                            </Accordion>
                        ) : (
                            <div className="rounded-2xl border border-border bg-card p-10 text-center space-y-4">
                                <div className="mx-auto size-12 rounded-2xl bg-muted flex items-center justify-center text-muted-foreground">
                                    <HelpCircle className="size-6"/>
                                </div>
                                <div className="space-y-1">
                                    <h3 className="font-heading text-lg font-bold text-foreground">
                                        No matching questions found
                                    </h3>
                                    <p className="text-sm text-muted-foreground max-w-md mx-auto">
                                        We could not find any questions matching &ldquo;{searchQuery}&rdquo;. Try another search term or contact our technical team directly.
                                    </p>
                                </div>
                                <div className="pt-2">
                                    <button
                                        type="button"
                                        onClick={() => setSearchQuery("")}
                                        className={buttonVariants({variant: "outline", size: "sm"})}
                                    >
                                        Clear Search Filter
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </Wrapper>
            </section>

            {/* Need More Assistance / Custom Lift CTA */}
            <section className="py-16 lg:py-20 bg-background relative overflow-hidden">
                <DotPattern corner="bottom-left"/>
                <Wrapper className="relative z-10">
                    <div className="rounded-3xl border border-border bg-card p-8 sm:p-12 lg:p-16 shadow-xs relative overflow-hidden">
                        <div className="max-w-2xl space-y-5">
                            <span className="font-mono text-xs font-bold uppercase tracking-widest text-primary">
                                Have a project requirement?
                            </span>
                            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black font-heading tracking-tight uppercase text-foreground">
                                Need technical lift planning or a rapid quote?
                            </h3>
                            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                                Our engineers and appointed lifting specialists conduct on-site evaluations, CAD lift studies, and complete rigging plans across South Africa.
                            </p>
                            <div className="flex flex-wrap items-center gap-4 pt-2">
                                <Link
                                    href={contactUs.url()}
                                    className={buttonVariants({size: "lg", className: "gap-2"})}
                                >
                                    Contact Our Specialists
                                    <ArrowRight className="size-4"/>
                                </Link>
                                <a
                                    href="tel:+27210000000"
                                    className={buttonVariants({variant: "outline", size: "lg", className: "gap-2"})}
                                >
                                    <Phone className="size-4 text-primary"/>
                                    Call 24/7 Operations
                                </a>
                            </div>
                        </div>
                    </div>
                </Wrapper>
            </section>
        </AppLayout>
    );
}
