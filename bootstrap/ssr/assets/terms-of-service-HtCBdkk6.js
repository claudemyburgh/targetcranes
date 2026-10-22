import { n as SectionLabel, s as Wrapper, t as AppLayout } from "./app-layout-w-LVHpQd.js";
import { t as Seo } from "./seo-BhlX0amy.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { AlertTriangle, CheckCircle2, FileText, Phone, Scale, ShieldAlert, Truck } from "lucide-react";
// resources/js/pages/terms-of-service.tsx
function TermsOfService() {
	return /* @__PURE__ */ jsxs(AppLayout, { children: [/* @__PURE__ */ jsx(Seo, {
		title: "Terms of Service",
		description: "Terms of Service for Target Cranes (Pty) Ltd. General terms and conditions governing mobile crane hire, lifting operations, quotations, safety, and website use."
	}), /* @__PURE__ */ jsx("section", {
		className: "pt-28 pb-16 lg:pt-36 lg:pb-24 bg-background",
		children: /* @__PURE__ */ jsxs(Wrapper, { children: [/* @__PURE__ */ jsxs("div", {
			className: "max-w-3xl mb-12",
			children: [
				/* @__PURE__ */ jsx(SectionLabel, {
					className: "mb-4",
					children: "Legal Agreements"
				}),
				/* @__PURE__ */ jsx("h1", {
					className: "text-4xl md:text-5xl font-black font-heading tracking-tight uppercase text-foreground mb-4",
					children: "Terms of Service"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "text-muted-foreground text-lg leading-relaxed",
					children: "These Terms of Service govern your use of the Target Cranes website (targetcranes.co.za) and set forth standard conditions for mobile crane hire, rigging, transport, and engineered lifting solutions provided by Target Cranes (Pty) Ltd."
				}),
				/* @__PURE__ */ jsxs("p", {
					className: "text-xs text-muted-foreground mt-2",
					children: ["Last Updated: ", (/* @__PURE__ */ new Date()).toLocaleDateString("en-ZA", {
						year: "numeric",
						month: "long",
						day: "numeric"
					})]
				})
			]
		}), /* @__PURE__ */ jsxs("div", {
			className: "max-w-4xl space-y-12",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "rounded-2xl border border-border bg-card p-6 md:p-8 shadow-xs space-y-3",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-3 text-primary",
						children: [/* @__PURE__ */ jsx(FileText, { className: "w-6 h-6 shrink-0" }), /* @__PURE__ */ jsx("h2", {
							className: "text-xl font-bold font-heading uppercase text-foreground",
							children: "1. Acceptance of Terms"
						})]
					}), /* @__PURE__ */ jsx("p", {
						className: "text-muted-foreground leading-relaxed text-sm md:text-base",
						children: "By accessing this website or engaging Target Cranes (Pty) Ltd (“Target Cranes”, “we”, “us”) for equipment hire, lift engineering, or operational services, you agree to be bound by these Terms of Service and our standard Crane Hire Agreement. If you do not accept these terms in full, please do not use our site or services."
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "rounded-2xl border border-border bg-card p-6 md:p-8 shadow-xs space-y-4",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-3 text-primary",
						children: [/* @__PURE__ */ jsx(CheckCircle2, { className: "w-6 h-6 shrink-0" }), /* @__PURE__ */ jsx("h2", {
							className: "text-xl font-bold font-heading uppercase text-foreground",
							children: "2. Quotations, Pricing & Bookings"
						})]
					}), /* @__PURE__ */ jsxs("ul", {
						className: "space-y-2.5 text-muted-foreground text-sm md:text-base list-disc list-inside leading-relaxed",
						children: [
							/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("strong", {
								className: "text-foreground",
								children: "Quote Validity:"
							}), " Formal quotations remain valid for 30 calendar days from the date of issue unless specified otherwise in writing."] }),
							/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("strong", {
								className: "text-foreground",
								children: "Accuracy of Lift Data:"
							}), " Pricing is calculated based on client-provided specifications (load weight, boom reach, ground conditions, access constraints, and scheduled duration). Discrepancies between quoted specifications and actual on-site conditions may result in rate adjustments."] }),
							/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("strong", {
								className: "text-foreground",
								children: "Hire Options:"
							}), " Rates are quoted on either a “Wet Hire” basis (including certified crane operator and optional riggers) or “Dry Hire” (bare machine hire for qualified, approved commercial contractors)."] })
						]
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "rounded-2xl border border-border bg-card p-6 md:p-8 shadow-xs space-y-4",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-3 text-primary",
						children: [/* @__PURE__ */ jsx(Truck, { className: "w-6 h-6 shrink-0" }), /* @__PURE__ */ jsx("h2", {
							className: "text-xl font-bold font-heading uppercase text-foreground",
							children: "3. Site Access, Ground Integrity & Clearances"
						})]
					}), /* @__PURE__ */ jsxs("div", {
						className: "space-y-3 text-muted-foreground text-sm md:text-base leading-relaxed",
						children: [
							/* @__PURE__ */ jsx("p", { children: "The client is responsible for ensuring clear, stable, and unhindered access to the lift position suitable for heavy multi-axle all-terrain mobile cranes." }),
							/* @__PURE__ */ jsxs("p", { children: [/* @__PURE__ */ jsx("strong", {
								className: "text-foreground",
								children: "Ground Bearing Capacity:"
							}), " The client must verify and confirm that ground surfaces (compacted earth, paved yards, suspended slabs) are capable of supporting full crane axle loadings and maximum outrigger point loads. Target Cranes provides outrigger pads and mats, but does not accept liability for failure of subsurface infrastructure (drains, pipes, cables, voids) not disclosed prior to setup."] }),
							/* @__PURE__ */ jsxs("p", { children: [/* @__PURE__ */ jsx("strong", {
								className: "text-foreground",
								children: "Overhead Hazards:"
							}), " Safe working distances from overhead powerlines and surrounding structures must be strictly maintained in compliance with South African safety regulations."] })
						]
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "rounded-2xl border border-border bg-card p-6 md:p-8 shadow-xs space-y-4",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-3 text-primary",
							children: [/* @__PURE__ */ jsx(ShieldAlert, { className: "w-6 h-6 shrink-0" }), /* @__PURE__ */ jsx("h2", {
								className: "text-xl font-bold font-heading uppercase text-foreground",
								children: "4. Safety Regulations & Operator Authority"
							})]
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-muted-foreground leading-relaxed text-sm md:text-base",
							children: "Safety is paramount in all lifting operations. Operations are conducted under the Occupational Health and Safety Act 85 of 1993 (OHSA), Construction Regulations, and relevant SANS codes of practice."
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "rounded-xl bg-muted/60 p-4 border border-border text-sm text-foreground space-y-2",
							children: [/* @__PURE__ */ jsxs("p", {
								className: "font-semibold flex items-center gap-2 text-primary",
								children: [/* @__PURE__ */ jsx(AlertTriangle, { className: "w-4 h-4" }), "Final Lift Authority"]
							}), /* @__PURE__ */ jsx("p", {
								className: "text-muted-foreground",
								children: "The appointed Target Cranes operator and lift supervisor hold absolute, overriding authority to halt, postpone, or reject any lifting operation if weather conditions (wind speed exceeding crane manufacturer limits, lightning storms), ground instability, or unsafe rigging compromise the safety of personnel or assets."
							})]
						})
					]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "rounded-2xl border border-border bg-card p-6 md:p-8 shadow-xs space-y-3",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-3 text-primary",
							children: [/* @__PURE__ */ jsx(AlertTriangle, { className: "w-6 h-6 shrink-0" }), /* @__PURE__ */ jsx("h2", {
								className: "text-xl font-bold font-heading uppercase text-foreground",
								children: "5. Weather Delays & Cancellations"
							})]
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-muted-foreground leading-relaxed text-sm md:text-base",
							children: "When a crane has dispatched to site and operations are delayed due to client site readiness, permit delays, or inclement weather beyond our control, standard hourly standby rates will apply as per the confirmed quotation."
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-muted-foreground leading-relaxed text-sm md:text-base",
							children: "Notice of cancellation must be communicated in writing within the timeframes stipulated in the project booking agreement to avoid cancellation and mobilization fees."
						})
					]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "rounded-2xl border border-border bg-card p-6 md:p-8 shadow-xs space-y-3",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-3 text-primary",
						children: [/* @__PURE__ */ jsx(Scale, { className: "w-6 h-6 shrink-0" }), /* @__PURE__ */ jsx("h2", {
							className: "text-xl font-bold font-heading uppercase text-foreground",
							children: "6. Limitation of Liability & Insurance"
						})]
					}), /* @__PURE__ */ jsx("p", {
						className: "text-muted-foreground leading-relaxed text-sm md:text-base",
						children: "Target Cranes maintains comprehensive public liability and equipment insurance. Unless explicitly agreed in writing under a full turnkey engineered lift package, the client remains responsible for insuring all goods, machinery, or structures being lifted (“hook insurance” / goods-in-transit cover). Target Cranes shall not be held liable for indirect, consequential, or economic loss resulting from project downtime or delays."
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "rounded-2xl border border-border bg-card p-6 md:p-8 shadow-xs space-y-3",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-3 text-primary",
						children: [/* @__PURE__ */ jsx(Scale, { className: "w-6 h-6 shrink-0" }), /* @__PURE__ */ jsx("h2", {
							className: "text-xl font-bold font-heading uppercase text-foreground",
							children: "7. Governing Law & Jurisdiction"
						})]
					}), /* @__PURE__ */ jsx("p", {
						className: "text-muted-foreground leading-relaxed text-sm md:text-base",
						children: "These Terms and any disputes arising from website use or contractual lifting services are governed by and construed in accordance with the laws of the Republic of South Africa. The parties submit to the exclusive jurisdiction of the Western Cape High Court, Cape Town."
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "rounded-2xl border border-primary/20 bg-primary/5 p-6 md:p-8 space-y-3",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-3 text-primary",
							children: [/* @__PURE__ */ jsx(Phone, { className: "w-6 h-6 shrink-0" }), /* @__PURE__ */ jsx("h2", {
								className: "text-xl font-bold font-heading uppercase text-foreground",
								children: "Enquiries & Contract Information"
							})]
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-muted-foreground leading-relaxed text-sm md:text-base",
							children: "For inquiries regarding our terms, machine hiring agreements, or site safety plans:"
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "text-sm font-medium space-y-1 text-foreground",
							children: [
								/* @__PURE__ */ jsx("p", { children: "Company: Target Cranes (Pty) Ltd" }),
								/* @__PURE__ */ jsxs("p", { children: ["Email: ", /* @__PURE__ */ jsx("a", {
									href: "mailto:enquiries@targetcranes.co.za",
									className: "text-primary hover:underline",
									children: "enquiries@targetcranes.co.za"
								})] }),
								/* @__PURE__ */ jsxs("p", { children: ["Phone: ", /* @__PURE__ */ jsx("a", {
									href: "tel:0636737500",
									className: "text-primary hover:underline",
									children: "063 673 7500"
								})] }),
								/* @__PURE__ */ jsx("p", { children: "Depot Address: Fabriek St, Bellville South, Cape Town, 7530" })
							]
						})
					]
				})
			]
		})] })
	})] });
}
export { TermsOfService as default };
