import { a as contactUs, i as SwipeTitle, l as buttonVariants, n as SectionLabel, r as SwipeLine, s as Wrapper, t as AppLayout, u as cn } from "./app-layout-BQ2CY4dG.js";
import { t as Seo } from "./seo-BEU1r1nv.js";
import { t as IMG_20261008_WA0042_default } from "./IMG-20261008-WA0042-GyVLJorL.js";
import { Link } from "@inertiajs/react";
import * as React$1 from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { AlertOctagon, ArrowRight, Award, CheckCircle2, ChevronDown, FileCheck2, Gauge, HardHat, Phone, ShieldCheck, Wrench } from "lucide-react";
//#region resources/js/components/ui/misc/section-heading.tsx
function SectionHeading({ title, label, align = "left", className }) {
	return /* @__PURE__ */ jsxs("div", {
		className: cn("space-y-4 flex flex-col", {
			left: "text-left items-start",
			center: "text-center items-center mx-auto",
			right: "text-right items-end ml-auto"
		}[align], className),
		children: [label && /* @__PURE__ */ jsx(SectionLabel, {
			className: align === "center" ? "mx-auto" : "",
			children: label
		}), /* @__PURE__ */ jsx("h2", {
			className: "text-3xl sm:text-4xl lg:text-5xl font-black font-heading tracking-tight uppercase text-foreground",
			children: /* @__PURE__ */ jsx(SwipeTitle, {
				className: "text-balance",
				children: /* @__PURE__ */ jsx(SwipeLine, { children: title })
			})
		})]
	});
}
//#endregion
//#region resources/js/components/ui/accordion.tsx
var AccordionContext = React$1.createContext({
	openValue: null,
	toggleValue: () => {}
});
var AccordionItemContext = React$1.createContext({
	value: "",
	isOpen: false
});
function Accordion({ children, className, defaultValue, collapsible = true }) {
	const [openValue, setOpenValue] = React$1.useState(() => {
		if (defaultValue !== void 0) return defaultValue;
		return "item-0";
	});
	const toggleValue = React$1.useCallback((val) => {
		setOpenValue((prev) => {
			if (prev === val) return collapsible ? null : prev;
			return val;
		});
	}, [collapsible]);
	return /* @__PURE__ */ jsx(AccordionContext.Provider, {
		value: {
			openValue,
			toggleValue
		},
		children: /* @__PURE__ */ jsx("div", {
			className: cn("divide-y divide-border border-y border-border", className),
			children
		})
	});
}
function AccordionItem({ value, className, children }) {
	const { openValue } = React$1.useContext(AccordionContext);
	const isOpen = openValue === value;
	return /* @__PURE__ */ jsx(AccordionItemContext.Provider, {
		value: {
			value,
			isOpen
		},
		children: /* @__PURE__ */ jsx("div", {
			className: cn("group border-b border-border last:border-b-0", className),
			children
		})
	});
}
function AccordionTrigger({ className, children }) {
	const { toggleValue } = React$1.useContext(AccordionContext);
	const { value, isOpen } = React$1.useContext(AccordionItemContext);
	return /* @__PURE__ */ jsxs("button", {
		type: "button",
		onClick: () => toggleValue(value),
		"aria-expanded": isOpen,
		className: cn("flex w-full items-center justify-between text-left font-bold transition-all hover:text-primary cursor-pointer", className),
		children: [/* @__PURE__ */ jsx("span", { children }), /* @__PURE__ */ jsx(ChevronDown, { className: cn("h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300 group-hover:text-primary", isOpen && "rotate-180 text-primary") })]
	});
}
function AccordionContent({ className, children }) {
	const { isOpen } = React$1.useContext(AccordionItemContext);
	return /* @__PURE__ */ jsx("div", {
		className: cn("grid transition-all duration-300 ease-in-out", isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"),
		children: /* @__PURE__ */ jsx("div", {
			className: "overflow-hidden",
			children: /* @__PURE__ */ jsx("div", {
				className,
				children
			})
		})
	});
}
//#endregion
//#region resources/images/safety.webp
var safety_default = "/build/assets/safety-C8xlhPCl.webp";
//#endregion
//#region resources/js/components/home-safety-practices-section.tsx
var safetyItems = [
	{
		title: "Engineered Lift Planning & Ground Verification",
		content: /* @__PURE__ */ jsxs("div", {
			className: "space-y-3",
			children: [/* @__PURE__ */ jsx("p", { children: "Every lift begins with comprehensive technical evaluation before wheels roll or outriggers extend. Our lift planners assess site access corridors, ground bearing capacity, outrigger pad displacement, and safe working radiuses." }), /* @__PURE__ */ jsx("p", { children: "For complex, oversized, or tandem crane lifts, we produce CAD-engineered 2D/3D lift studies, rigging diagrams, and risk mitigation steps to eliminate variables and surprises on site." })]
		})
	},
	{
		title: "Statutory Load Testing & Certified Rigging Tackle (DMR 18)",
		content: /* @__PURE__ */ jsxs("div", {
			className: "space-y-3",
			children: [/* @__PURE__ */ jsx("p", { children: "Every mobile crane in our fleet is backed by current LME and LMI statutory inspection records in full compliance with Driven Machinery Regulations (DMR 18)." }), /* @__PURE__ */ jsx("p", { children: "Slings, shackles, spreader beams, and auxiliary rigging tackle undergo rigorous quarterly colour-coded tracking, certified proof-load testing, and mandatory daily pre-use checklists." })]
		})
	},
	{
		title: "TETA-Accredited Operators & Qualified Master Riggers",
		content: /* @__PURE__ */ jsxs("div", {
			className: "space-y-3",
			children: [/* @__PURE__ */ jsx("p", { children: "Precision machinery requires verified expertise in the cab and on the ground. Our crane operators, master riggers, and lift directors hold full TETA accreditations and valid Annexure 3 medical fitness certificates." }), /* @__PURE__ */ jsx("p", { children: "Ongoing competency assessments and defensive operational training ensure dependable execution across maritime ports, mining yards, power generation plants, and congested civil construction sites." })]
		})
	},
	{
		title: "Project-Specific RAMS & Daily Toolbox Briefings",
		content: /* @__PURE__ */ jsxs("div", {
			className: "space-y-3",
			children: [/* @__PURE__ */ jsx("p", { children: "Prior to mobilization, we issue tailored Risk Assessments and Method Statements (RAMS) structured around your project’s exact site constraints and operational envelope." }), /* @__PURE__ */ jsx("p", { children: "Daily on-site toolbox sessions establish radio frequencies, banksman hand signals, blind-spot awareness, and barricaded exclusion zones before outriggers are deployed." })]
		})
	},
	{
		title: "Uncompromising Stop Work Authority",
		content: /* @__PURE__ */ jsxs("div", {
			className: "space-y-3",
			children: [/* @__PURE__ */ jsx("p", { children: "Safety takes precedence over deadlines without exception. Every Target Cranes crew member, driver, and site supervisor holds unconditional Stop Work Authority." }), /* @__PURE__ */ jsx("p", { children: "If sudden wind gusts exceed manufacturer charts, ground shifts occur, or unexpected site hazards arise, operations immediately pause until safe conditions are verified." })]
		})
	},
	{
		title: "OHSA 85 of 1993 & National SANS Standard Compliance",
		content: /* @__PURE__ */ jsxs("div", {
			className: "space-y-3",
			children: [/* @__PURE__ */ jsx("p", { children: "Our Health, Safety, and Environmental (HSE) management protocols align strictly with the South African Occupational Health and Safety Act, Construction Regulations 2014, and applicable SANS lifting codes." }), /* @__PURE__ */ jsx("p", { children: "We arrive on site with complete, audit-ready safety documentation to streamline principal contractor inductions and client audits." })]
		})
	}
];
function HomeSafetyPracticesSection() {
	return /* @__PURE__ */ jsx("section", {
		className: "py-24 bg-muted/30  relative overflow-hidden",
		children: /* @__PURE__ */ jsx(Wrapper, { children: /* @__PURE__ */ jsxs("div", {
			className: "block relative z-10",
			children: [
				/* @__PURE__ */ jsx("img", {
					src: safety_default,
					alt: "Target Cranes Precision Safety Operations",
					className: "float-none lg:float-right mx-auto lg:mx-0 w-3/4 max-w-xs sm:w-1/2 lg:w-[38%] lg:max-w-none rounded-xl drop-shadow-black object-contain lg:ml-10 mb-8 lg:mb-4 mt-2 lg:mt-4",
					style: {
						shapeOutside: `url(${safety_default})`,
						shapeImageThreshold: .1,
						shapeMargin: "1.5rem"
					}
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "space-y-10",
					children: [
						/* @__PURE__ */ jsx(SectionHeading, {
							title: "SAFETY STARTS WELL BEFORE THE LIFT",
							label: "Our Core Priority",
							align: "left"
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "text-muted-foreground text-base sm:text-lg leading-relaxed space-y-6",
							children: [
								/* @__PURE__ */ jsxs("p", { children: [/* @__PURE__ */ jsx("strong", { children: "At Target Cranes, safety is an operational discipline" }), " that shapes every lift from initial engineering to final set-down. In heavy lifting and high-risk environments, safety cannot be separated from execution. It dictates equipment configuration, ground preparation, rigging calculations, and how our crews coordinate on site."] }),
								/* @__PURE__ */ jsxs("p", { children: [
									"Our philosophy begins with ",
									/* @__PURE__ */ jsx("strong", { children: "proactive hazard identification and engineered risk mitigation" }),
									" well before outriggers extend. We place equal value on the specialists guiding the equipment: ",
									/* @__PURE__ */ jsx("strong", { children: "continuous operator training, certified medical fitness, strict PPE compliance" }),
									", and day-to-day mental readiness ensure our team performs with precision and accountability."
								] }),
								/* @__PURE__ */ jsxs("p", { children: [
									"Health and safety is never treated as a periodic compliance box to tick. It is an ",
									/* @__PURE__ */ jsx("strong", { children: "active, daily standard" }),
									" continually evaluated and strengthened across our operations ensuring the protection of our personnel, client teams, site property, and surrounding communities remains ",
									/* @__PURE__ */ jsx("strong", { children: "uncompromised on every job" }),
									"."
								] })
							]
						}),
						/* @__PURE__ */ jsx("div", {
							className: "pt-2",
							children: /* @__PURE__ */ jsx(Accordion, { children: safetyItems.map((item, index) => /* @__PURE__ */ jsxs(AccordionItem, {
								value: `item-${index}`,
								className: "py-2",
								children: [/* @__PURE__ */ jsx(AccordionTrigger, {
									className: "text-left font-bold text-lg py-5 hover:no-underline hover:text-primary transition-colors",
									children: item.title
								}), /* @__PURE__ */ jsx(AccordionContent, {
									className: "pb-6",
									children: /* @__PURE__ */ jsx("div", {
										className: "text-muted-foreground leading-relaxed text-base max-w-none",
										children: item.content
									})
								})]
							}, index)) })
						})
					]
				}),
				/* @__PURE__ */ jsx("div", { className: "clear-both" })
			]
		}) })
	});
}
//#endregion
//#region resources/js/pages/safety.tsx
function Safety() {
	return /* @__PURE__ */ jsxs(AppLayout, { children: [
		/* @__PURE__ */ jsx(Seo, {
			title: "Safety & Compliance",
			description: "Explore Target Cranes' disciplined approach to safety, engineered lift planning, TETA-accredited riggers, DMR 18 equipment testing, and comprehensive risk assessments across South Africa."
		}),
		/* @__PURE__ */ jsx("section", {
			className: "pt-28 pb-16 lg:pt-36 lg:pb-24 bg-background border-b border-border",
			children: /* @__PURE__ */ jsxs(Wrapper, { children: [/* @__PURE__ */ jsxs("div", {
				className: "max-w-4xl space-y-6",
				children: [
					/* @__PURE__ */ jsx(SectionLabel, {
						className: "mb-4",
						children: "Safety & Compliance"
					}),
					/* @__PURE__ */ jsx("h2", { children: /* @__PURE__ */ jsxs(SwipeTitle, {
						className: "text-4xl sm:text-5xl lg:text-6xl font-black font-heading tracking-tighter uppercase text-balance",
						children: [/* @__PURE__ */ jsx(SwipeLine, { children: "Zero Compromise." }), /* @__PURE__ */ jsx(SwipeLine, { children: /* @__PURE__ */ jsx("span", {
							className: "bg-linear-to-r from-primary to-primary inline-block px-1 bg-clip-text text-transparent",
							children: "Total Lifting Precision."
						}) })]
					}) }),
					/* @__PURE__ */ jsx("p", {
						className: "text-lg sm:text-xl text-muted-foreground leading-relaxed font-medium",
						children: "In heavy rigging and mobile crane operations, safety isn’t a secondary checklist it is the very foundation upon which every lift is engineered, mobilized, and executed across South Africa."
					})
				]
			}), /* @__PURE__ */ jsxs("div", {
				className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-12",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "rounded-2xl border border-border bg-card p-6 space-y-3 hover:border-primary/40 transition-colors shadow-sm",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary",
								children: /* @__PURE__ */ jsx(ShieldCheck, { className: "w-6 h-6" })
							}),
							/* @__PURE__ */ jsx("h3", {
								className: "font-heading font-black uppercase text-base text-foreground",
								children: "100% Certified Fleet"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-sm text-muted-foreground leading-relaxed",
								children: "Valid LME / LMI statutory load test certificates and daily pre-operational inspection logs for every crane."
							})
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "rounded-2xl border border-border bg-card p-6 space-y-3 hover:border-primary/40 transition-colors shadow-sm",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary",
								children: /* @__PURE__ */ jsx(HardHat, { className: "w-6 h-6" })
							}),
							/* @__PURE__ */ jsx("h3", {
								className: "font-heading font-black uppercase text-base text-foreground",
								children: "Accredited Crew"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-sm text-muted-foreground leading-relaxed",
								children: "TETA-accredited mobile crane operators and master riggers with up-to-date Annexure 3 medical fitness certifications."
							})
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "rounded-2xl border border-border bg-card p-6 space-y-3 hover:border-primary/40 transition-colors shadow-sm",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary",
								children: /* @__PURE__ */ jsx(FileCheck2, { className: "w-6 h-6" })
							}),
							/* @__PURE__ */ jsx("h3", {
								className: "font-heading font-black uppercase text-base text-foreground",
								children: "Pre-Lift RAMS"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-sm text-muted-foreground leading-relaxed",
								children: "Site-specific Risk Assessments and Method Statements tailored to ground bearing capacity, radiuses, and obstacles."
							})
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "rounded-2xl border border-border bg-card p-6 space-y-3 hover:border-primary/40 transition-colors shadow-sm",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary",
								children: /* @__PURE__ */ jsx(AlertOctagon, { className: "w-6 h-6" })
							}),
							/* @__PURE__ */ jsx("h3", {
								className: "font-heading font-black uppercase text-base text-foreground",
								children: "Stop Work Authority"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-sm text-muted-foreground leading-relaxed",
								children: "Unconditional authority granted to every crew member to stop any lift if wind, ground, or site conditions change."
							})
						]
					})
				]
			})] })
		}),
		/* @__PURE__ */ jsx(HomeSafetyPracticesSection, {}),
		/* @__PURE__ */ jsx("section", {
			className: "py-20 lg:py-28 bg-background",
			children: /* @__PURE__ */ jsx(Wrapper, { children: /* @__PURE__ */ jsxs("div", {
				className: "grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center",
				children: [/* @__PURE__ */ jsx("div", {
					className: "lg:col-span-5",
					children: /* @__PURE__ */ jsxs("div", {
						className: "relative aspect-[4/5] w-full rounded-3xl overflow-hidden border border-border shadow-xl bg-card",
						children: [
							/* @__PURE__ */ jsx("img", {
								src: IMG_20261008_WA0042_default,
								alt: "Target Cranes team conducting pre-lift safety and tackle checks",
								className: "w-full h-full object-cover transition-transform duration-700 hover:scale-105"
							}),
							/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent pointer-events-none" }),
							/* @__PURE__ */ jsxs("div", {
								className: "absolute bottom-6 left-6 right-6 text-white pointer-events-none",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "inline-flex items-center gap-2 bg-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-primary-foreground mb-2",
									children: [/* @__PURE__ */ jsx(Award, { className: "w-3.5 h-3.5" }), "Certified On-Site Team"]
								}), /* @__PURE__ */ jsx("p", {
									className: "text-sm font-medium text-white/90",
									children: "Pre-lift coordination, rigging inspection, and exclusion zone enforcement."
								})]
							})
						]
					})
				}), /* @__PURE__ */ jsxs("div", {
					className: "lg:col-span-7 space-y-6",
					children: [
						/* @__PURE__ */ jsx(SectionLabel, {
							className: "mb-2",
							children: "Compliance & Regulations"
						}),
						/* @__PURE__ */ jsx("h2", {
							className: "text-3xl sm:text-4xl lg:text-5xl font-black font-heading tracking-tight uppercase text-foreground",
							children: "Strict Adherence To National Standards"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-base sm:text-lg text-muted-foreground leading-relaxed",
							children: "Our health and safety management system is designed to integrate seamlessly with the stringent contractor safety policies of major civil, maritime, mining, and industrial project leaders in South Africa."
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "space-y-4 pt-2",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "flex items-start gap-4 p-4 rounded-2xl bg-card border border-border",
									children: [/* @__PURE__ */ jsx(CheckCircle2, { className: "w-6 h-6 text-primary shrink-0 mt-0.5" }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
										className: "font-bold text-foreground font-heading uppercase text-sm",
										children: "Occupational Health and Safety Act 85 of 1993"
									}), /* @__PURE__ */ jsx("p", {
										className: "text-sm text-muted-foreground mt-1",
										children: "Full compliance with South African OHSA statutory mandates, Section 8 general duties, and Construction Regulations 2014."
									})] })]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "flex items-start gap-4 p-4 rounded-2xl bg-card border border-border",
									children: [/* @__PURE__ */ jsx(Gauge, { className: "w-6 h-6 text-primary shrink-0 mt-0.5" }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
										className: "font-bold text-foreground font-heading uppercase text-sm",
										children: "Driven Machinery Regulations (DMR 18)"
									}), /* @__PURE__ */ jsx("p", {
										className: "text-sm text-muted-foreground mt-1",
										children: "Regular calibration of safe load indicators (SLI / LMI), boom angle sensors, and anti-two-block safety limit switches."
									})] })]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "flex items-start gap-4 p-4 rounded-2xl bg-card border border-border",
									children: [/* @__PURE__ */ jsx(Wrench, { className: "w-6 h-6 text-primary shrink-0 mt-0.5" }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
										className: "font-bold text-foreground font-heading uppercase text-sm",
										children: "Rigging Tackle & Lifting Hardware Inspection"
									}), /* @__PURE__ */ jsx("p", {
										className: "text-sm text-muted-foreground mt-1",
										children: "Colour-coded quarterly inspection tags on all steel wire ropes, web slings, shackles, chain blocks, and spreader beams."
									})] })]
								})
							]
						})
					]
				})]
			}) })
		}),
		/* @__PURE__ */ jsx("section", {
			className: "py-20 lg:py-24 bg-card border-t border-border",
			children: /* @__PURE__ */ jsx(Wrapper, { children: /* @__PURE__ */ jsxs("div", {
				className: "max-w-4xl mx-auto rounded-3xl border border-primary/20 bg-linear-to-b from-primary/5 via-card to-card p-8 sm:p-12 lg:p-16 text-center space-y-6 shadow-xl",
				children: [
					/* @__PURE__ */ jsx(SectionLabel, {
						className: "mx-auto",
						children: "Audit & Onboarding"
					}),
					/* @__PURE__ */ jsx("h2", {
						className: "text-3xl sm:text-5xl font-black font-heading tracking-tight uppercase text-foreground",
						children: "Require Our Safety File For Site Access?"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed",
						children: "We provide comprehensive, audit-ready safety documentation including operator licenses, medicals, load test certificates, and lift plans tailored to your site requirements."
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "flex flex-col sm:flex-row items-center justify-center gap-4 pt-4",
						children: [/* @__PURE__ */ jsxs(Link, {
							href: contactUs.url(),
							className: buttonVariants({
								size: "lg",
								className: "w-full sm:w-auto font-bold uppercase tracking-wider group gap-2 text-base px-8 py-6 rounded-xl shadow-lg"
							}),
							children: [/* @__PURE__ */ jsx("span", { children: "Request Safety File" }), /* @__PURE__ */ jsx(ArrowRight, { className: "w-5 h-5 group-hover:translate-x-1 transition-transform" })]
						}), /* @__PURE__ */ jsxs("a", {
							href: "tel:0636737500",
							className: buttonVariants({
								variant: "outline",
								size: "lg",
								className: "w-full sm:w-auto font-bold tracking-wider gap-2 text-base px-8 py-6 rounded-xl border-border hover:bg-muted/60"
							}),
							children: [/* @__PURE__ */ jsx(Phone, { className: "w-5 h-5 text-primary" }), /* @__PURE__ */ jsx("span", { children: "063 673 7500" })]
						})]
					})
				]
			}) })
		})
	] });
}
//#endregion
export { Safety as default };
