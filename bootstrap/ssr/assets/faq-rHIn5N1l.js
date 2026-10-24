import { a as contactUs, i as SwipeTitle, l as buttonVariants, n as SectionLabel, r as SwipeLine, s as Wrapper, t as AppLayout } from "./app-layout-W-CJAxuG.js";
import { t as Seo } from "./seo-BhlX0amy.js";
import { t as DotPattern } from "./dot-pattern-CZIOQu90.js";
import { i as AccordionTrigger, n as AccordionContent, r as AccordionItem, t as Accordion } from "./accordion-CvQS9bRy.js";
import { Link } from "@inertiajs/react";
import { useMemo, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight, HelpCircle, Phone, Search } from "lucide-react";
// resources/js/pages/faq.tsx
function FaqPage({ faqs = [] }) {
	const [searchQuery, setSearchQuery] = useState("");
	const filteredFaqs = useMemo(() => {
		const query = searchQuery.trim().toLowerCase();
		if (!query) return faqs;
		return faqs.filter((item) => item.question.toLowerCase().includes(query) || item.answer.toLowerCase().includes(query));
	}, [faqs, searchQuery]);
	return /* @__PURE__ */ jsxs(AppLayout, { children: [
		/* @__PURE__ */ jsx(Seo, {
			title: "Frequently Asked Questions",
			description: "Find answers to common questions about mobile crane hire, CPA vs contract lifting, rigging teams, site preparations, and certified crane operations at Target Cranes."
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "pt-28 pb-16 lg:pt-36 lg:pb-24 bg-background border-b border-border relative overflow-hidden",
			children: [/* @__PURE__ */ jsx(DotPattern, { corner: "top-right" }), /* @__PURE__ */ jsx(Wrapper, {
				className: "relative z-10",
				children: /* @__PURE__ */ jsxs("div", {
					className: "max-w-4xl space-y-6",
					children: [
						/* @__PURE__ */ jsx(SectionLabel, {
							className: "mb-4",
							children: "Frequently Asked Questions"
						}),
						/* @__PURE__ */ jsx("h2", { children: /* @__PURE__ */ jsxs(SwipeTitle, {
							className: "text-4xl sm:text-5xl lg:text-6xl font-black font-heading tracking-tighter uppercase text-balance",
							children: [/* @__PURE__ */ jsx(SwipeLine, { children: "Clear Answers." }), /* @__PURE__ */ jsx(SwipeLine, { children: /* @__PURE__ */ jsx("span", {
								className: "bg-linear-to-r from-primary to-primary inline-block px-1 bg-clip-text text-transparent",
								children: "Engineered Lifting Guidance."
							}) })]
						}) }),
						/* @__PURE__ */ jsx("p", {
							className: "text-lg sm:text-xl text-muted-foreground leading-relaxed font-medium",
							children: "Whether you need guidance on crane hire versus contract lifting, site access preparations, or statutory DMR 18 certification, our team has compiled answers to frequently asked questions."
						}),
						faqs.length > 0 && /* @__PURE__ */ jsx("div", {
							className: "pt-4 max-w-xl",
							children: /* @__PURE__ */ jsxs("div", {
								className: "relative",
								children: [
									/* @__PURE__ */ jsx(Search, { className: "absolute left-4 top-1/2 -translate-y-1/2 size-5 text-muted-foreground pointer-events-none" }),
									/* @__PURE__ */ jsx("input", {
										type: "text",
										value: searchQuery,
										onChange: (e) => setSearchQuery(e.target.value),
										placeholder: "Search answers by keyword...",
										className: "w-full pl-12 pr-4 py-3.5 rounded-2xl border border-border bg-card text-foreground placeholder:text-muted-foreground shadow-xs text-sm sm:text-base focus:outline-hidden focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all"
									}),
									searchQuery && /* @__PURE__ */ jsx("button", {
										type: "button",
										onClick: () => setSearchQuery(""),
										className: "absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-muted-foreground hover:text-foreground cursor-pointer",
										children: "Clear"
									})
								]
							})
						})
					]
				})
			})]
		}),
		/* @__PURE__ */ jsx("section", {
			className: "py-16 lg:py-24 bg-card/25 border-b border-border relative",
			children: /* @__PURE__ */ jsx(Wrapper, { children: /* @__PURE__ */ jsx("div", {
				className: "max-w-4xl mx-auto",
				children: filteredFaqs.length > 0 ? /* @__PURE__ */ jsx(Accordion, {
					defaultValue: "item-0",
					className: "divide-y-0 border-b-0 space-y-3 sm:space-y-4",
					children: filteredFaqs.map((faq, index) => {
						return /* @__PURE__ */ jsxs(AccordionItem, {
							value: `item-${index}`,
							className: "rounded-2xl border border-border bg-card px-4 sm:px-6 py-1.5 sm:py-2 shadow-xs transition-all duration-300 hover:border-primary/30 data-[state=open]:border-primary/50 data-[state=open]:shadow-md data-[state=open]:ring-1 data-[state=open]:ring-primary/15 last:border-b",
							children: [/* @__PURE__ */ jsx(AccordionTrigger, {
								className: "py-3.5 sm:py-4 hover:no-underline",
								children: /* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-3 sm:gap-4 text-left",
									children: [/* @__PURE__ */ jsx("div", {
										className: "flex size-9 sm:size-11 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary transition-colors group-data-[state=open]:bg-primary group-data-[state=open]:text-primary-foreground font-mono text-xs sm:text-sm font-bold",
										children: String(index + 1).padStart(2, "0")
									}), /* @__PURE__ */ jsx("div", {
										className: "flex flex-col gap-0.5",
										children: /* @__PURE__ */ jsx("span", {
											className: "font-heading text-base sm:text-lg md:text-xl font-black uppercase tracking-tight text-foreground group-hover:text-primary transition-colors leading-snug",
											children: faq.question
										})
									})]
								})
							}), /* @__PURE__ */ jsx(AccordionContent, {
								className: "pb-4 sm:pb-5 pt-1 sm:pt-2",
								children: /* @__PURE__ */ jsx("div", {
									className: "border-t border-border/60 pt-3.5 sm:pt-4 pl-0 sm:pl-15 text-muted-foreground leading-relaxed text-sm sm:text-base",
									children: faq.answer
								})
							})]
						}, faq.id);
					})
				}) : /* @__PURE__ */ jsxs("div", {
					className: "rounded-2xl border border-border bg-card p-10 text-center space-y-4",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "mx-auto size-12 rounded-2xl bg-muted flex items-center justify-center text-muted-foreground",
							children: /* @__PURE__ */ jsx(HelpCircle, { className: "size-6" })
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "space-y-1",
							children: [/* @__PURE__ */ jsx("h3", {
								className: "font-heading text-lg font-bold text-foreground",
								children: "No matching questions found"
							}), /* @__PURE__ */ jsxs("p", {
								className: "text-sm text-muted-foreground max-w-md mx-auto",
								children: [
									"We could not find any questions matching “",
									searchQuery,
									"”. Try another search term or contact our technical team directly."
								]
							})]
						}),
						/* @__PURE__ */ jsx("div", {
							className: "pt-2",
							children: /* @__PURE__ */ jsx("button", {
								type: "button",
								onClick: () => setSearchQuery(""),
								className: buttonVariants({
									variant: "outline",
									size: "sm"
								}),
								children: "Clear Search Filter"
							})
						})
					]
				})
			}) })
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "py-16 lg:py-20 bg-background relative overflow-hidden",
			children: [/* @__PURE__ */ jsx(DotPattern, { corner: "bottom-left" }), /* @__PURE__ */ jsx(Wrapper, {
				className: "relative z-10",
				children: /* @__PURE__ */ jsx("div", {
					className: "rounded-3xl border border-border bg-card p-8 sm:p-12 lg:p-16 shadow-xs relative overflow-hidden",
					children: /* @__PURE__ */ jsxs("div", {
						className: "max-w-2xl space-y-5",
						children: [
							/* @__PURE__ */ jsx("span", {
								className: "font-mono text-xs font-bold uppercase tracking-widest text-primary",
								children: "Have a project requirement?"
							}),
							/* @__PURE__ */ jsx("h3", {
								className: "text-2xl sm:text-3xl lg:text-4xl font-black font-heading tracking-tight uppercase text-foreground",
								children: "Need technical lift planning or a rapid quote?"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-muted-foreground text-base sm:text-lg leading-relaxed",
								children: "Our engineers and appointed lifting specialists conduct on-site evaluations, CAD lift studies, and complete rigging plans across South Africa."
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "flex flex-wrap items-center gap-4 pt-2",
								children: [/* @__PURE__ */ jsxs(Link, {
									href: contactUs.url(),
									className: buttonVariants({
										size: "lg",
										className: "gap-2"
									}),
									children: ["Contact Our Specialists", /* @__PURE__ */ jsx(ArrowRight, { className: "size-4" })]
								}), /* @__PURE__ */ jsxs("a", {
									href: "tel:+27210000000",
									className: buttonVariants({
										variant: "outline",
										size: "lg",
										className: "gap-2"
									}),
									children: [/* @__PURE__ */ jsx(Phone, { className: "size-4 text-primary" }), "Call 24/7 Operations"]
								})]
							})
						]
					})
				})
			})]
		})
	] });
}
export { FaqPage as default };
