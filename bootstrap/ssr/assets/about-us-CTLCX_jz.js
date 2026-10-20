import { i as SwipeTitle, n as SectionLabel, r as SwipeLine, s as Wrapper, t as AppLayout } from "./app-layout-BQKdFE9p.js";
import { t as Seo } from "./seo-BEU1r1nv.js";
import { t as DotPattern } from "./dot-pattern-DPLcDuTR.js";
import { t as siteStats } from "./site-stats-DFlp--Vg.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { Award, HardHat } from "lucide-react";
//#region resources/images/cutom-lines.webp
var cutom_lines_default = "/build/assets/cutom-lines-CdMc1SBz.webp";
//#endregion
//#region resources/images/IMG-20261008-WA0045.webp
var IMG_20261008_WA0045_default = "/build/assets/IMG-20261008-WA0045-BbohHFdG.webp";
//#endregion
//#region resources/js/pages/about-us.tsx
function AboutUs() {
	return /* @__PURE__ */ jsxs(AppLayout, { children: [
		/* @__PURE__ */ jsx(Seo, {
			title: "About Us",
			description: `Learn about Target Cranes, our company origins in Cape Town, ${siteStats.combinedExperienceYears} years of combined management experience, and our uncompromising commitment to safety and precision lifting.`
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "pt-28 pb-16 lg:pt-36 lg:pb-24 bg-background relative overflow-hidden",
			children: [
				/* @__PURE__ */ jsx(DotPattern, { corner: "top-right" }),
				/* @__PURE__ */ jsx(DotPattern, { corner: "bottom-left" }),
				/* @__PURE__ */ jsx(Wrapper, {
					className: "relative z-10",
					children: /* @__PURE__ */ jsxs("div", {
						className: "grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "lg:col-span-7 space-y-6",
							children: [
								/* @__PURE__ */ jsx(SectionLabel, {
									className: "mb-4",
									children: "Company Overview"
								}),
								/* @__PURE__ */ jsx("h2", { children: /* @__PURE__ */ jsxs(SwipeTitle, {
									className: "text-4xl sm:text-5xl lg:text-6xl font-black font-heading tracking-tighter uppercase text-balance",
									children: [/* @__PURE__ */ jsx(SwipeLine, { children: "Built On Experience," }), /* @__PURE__ */ jsx(SwipeLine, { children: /* @__PURE__ */ jsx("span", {
										className: "bg-linear-to-r from-primary to-primary inline-block px-1 bg-clip-text text-transparent",
										children: "Trusted Across South Africa"
									}) })]
								}) }),
								/* @__PURE__ */ jsx("p", {
									className: "text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl font-medium",
									children: "Headquartered in Bellville South, Cape Town, Target Cranes provides precision mobile crane hire, heavy rigging, and managed lifting operations to South Africa’s most demanding industries."
								}),
								/* @__PURE__ */ jsx("p", {
									className: "text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl",
									children: "From routine equipment installations to complex multi-crane industrial lifts, our operations are defined by rigorous preparation, verified equipment reliability, and close collaboration with on-site contractors."
								})
							]
						}), /* @__PURE__ */ jsx("div", {
							className: "lg:col-span-5",
							children: /* @__PURE__ */ jsxs("div", {
								className: "relative aspect-[4/5] w-full rounded-3xl overflow-hidden border border-border shadow-xl bg-card",
								children: [/* @__PURE__ */ jsx("img", {
									src: cutom_lines_default,
									alt: "Target Cranes fleet and operations",
									className: "w-full h-full object-cover transition-transform duration-700 hover:scale-105"
								}), /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent pointer-events-none" })]
							})
						})]
					})
				})
			]
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "py-20 lg:py-28 bg-muted/40 border-y border-border relative overflow-hidden",
			children: [/* @__PURE__ */ jsx(DotPattern, { corner: "bottom-right" }), /* @__PURE__ */ jsx(Wrapper, {
				className: "relative z-10",
				children: /* @__PURE__ */ jsxs("div", {
					className: "grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center",
					children: [/* @__PURE__ */ jsx("div", {
						className: "lg:col-span-5 order-2 lg:order-1",
						children: /* @__PURE__ */ jsx("div", {
							className: "relative aspect-[4/5] w-full rounded-3xl overflow-hidden border border-border shadow-xl bg-card",
							children: /* @__PURE__ */ jsx("img", {
								src: IMG_20261008_WA0045_default,
								alt: "Target Cranes Bellville South depot",
								className: "w-full h-full object-cover transition-transform duration-700 hover:scale-105"
							})
						})
					}), /* @__PURE__ */ jsxs("div", {
						className: "lg:col-span-7 order-1 lg:order-2 space-y-6",
						children: [
							/* @__PURE__ */ jsx(SectionLabel, {
								className: "mb-2",
								children: "Leadership & Pedigree"
							}),
							/* @__PURE__ */ jsxs("h2", {
								className: "text-3xl sm:text-4xl lg:text-5xl font-black font-heading tracking-tight uppercase text-foreground",
								children: [siteStats.combinedExperienceYears, " Years Combined Management Experience"]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed",
								children: [
									/* @__PURE__ */ jsx("p", { children: "Target Cranes brings together more than five decades of collective leadership across heavy rigging, mobile crane operations, civil engineering, and specialised transport." }),
									/* @__PURE__ */ jsx("p", { children: "Our senior management and project supervisors have guided lifting contracts across mining infrastructure, maritime dry-docks, power stations, and landmark commercial developments across the African continent." }),
									/* @__PURE__ */ jsx("p", {
										className: "text-foreground font-medium pt-2",
										children: "This depth of practical knowledge ensures that before wheels roll or outriggers extend, your lift has been evaluated by professionals who understand site realities."
									})
								]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "rounded-2xl border border-border bg-card p-5 space-y-2",
									children: [
										/* @__PURE__ */ jsx(Award, { className: "w-6 h-6 text-primary" }),
										/* @__PURE__ */ jsxs("h3", {
											className: "font-bold font-heading uppercase text-sm text-foreground",
											children: [siteStats.yearsInBusiness, " Years Track Record"]
										}),
										/* @__PURE__ */ jsx("p", {
											className: "text-xs text-muted-foreground leading-relaxed",
											children: "Established company reputation delivering lifts for major national contractors."
										})
									]
								}), /* @__PURE__ */ jsxs("div", {
									className: "rounded-2xl border border-border bg-card p-5 space-y-2",
									children: [
										/* @__PURE__ */ jsx(HardHat, { className: "w-6 h-6 text-primary" }),
										/* @__PURE__ */ jsx("h3", {
											className: "font-bold font-heading uppercase text-sm text-foreground",
											children: "Certified Personnel"
										}),
										/* @__PURE__ */ jsx("p", {
											className: "text-xs text-muted-foreground leading-relaxed",
											children: "Accredited crane operators, master riggers, and dedicated on-site lift supervisors."
										})
									]
								})]
							})
						]
					})]
				})
			})]
		})
	] });
}
//#endregion
export { AboutUs as default };
