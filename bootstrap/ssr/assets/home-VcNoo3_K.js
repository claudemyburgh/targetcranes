import { i as SwipeTitle, n as SectionLabel, r as SwipeLine, s as Wrapper, t as AppLayout } from "./app-layout-BQ2CY4dG.js";
import { t as Seo } from "./seo-BEU1r1nv.js";
import { useEffect, useState } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Anchor, Award, ClipboardCheck, Clock, HardHat, Pickaxe, ShieldCheck, Truck, Wind } from "lucide-react";
//#region resources/js/components/ui/misc/experience-badge.tsx
function ExperienceBadge({ className = "" }) {
	return /* @__PURE__ */ jsxs("div", {
		className: `opacity-0 animate-[slide-up-fade_1s_ease-out_forwards] inline-flex items-center gap-2 rounded-full border border-primary/30 bg-linear-to-r from-primary/50 to-primary/50 px-4 py-1.5 text-white shadow-[0_0_15px_rgba(255,255,255,0.1)] backdrop-blur-md ${className}`,
		children: [/* @__PURE__ */ jsxs("span", {
			className: "relative flex h-2 w-2",
			children: [/* @__PURE__ */ jsx("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" }), /* @__PURE__ */ jsx("span", { className: "relative inline-flex rounded-full h-2 w-2 bg-white" })]
		}), /* @__PURE__ */ jsx("span", {
			className: "font-semibold tracking-wider uppercase text-xs",
			children: "53 YEARS MANAGEMENT EXPERIENCE"
		})]
	});
}
//#endregion
//#region resources/images/hero-4k-16x9.webp
var hero_4k_16x9_default = "/build/assets/hero-4k-16x9-D5sU2X7e.webp";
//#endregion
//#region resources/js/components/hero.tsx
function Hero() {
	const [offsetY, setOffsetY] = useState(0);
	useEffect(() => {
		const handleScroll = () => setOffsetY(window.scrollY);
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	return /* @__PURE__ */ jsxs("section", {
		className: "h-svh pb-12 pt-24 w-full max-w-full relative overflow-clip bg-foreground dark:bg-background",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "absolute inset-0 w-full h-full transform-gpu",
				style: {
					transform: `scale(${1 + offsetY * 25e-5})`,
					transformOrigin: "center center"
				},
				children: /* @__PURE__ */ jsx("img", {
					src: hero_4k_16x9_default,
					alt: "Target Cranes - Mobile Crane Hire & Managed Lifting",
					className: "w-full h-full mx-auto object-cover object-center -translate-y-8 md:translate-y-0"
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: "absolute top-28 md:top-32 inset-x-0 flex justify-center z-20 pointer-events-none",
				children: /* @__PURE__ */ jsx(ExperienceBadge, {})
			}),
			/* @__PURE__ */ jsx(Wrapper, {
				className: "relative z-10 text-white flex items-end justify-center md:justify-start h-full pb-6 sm:pb-8",
				children: /* @__PURE__ */ jsxs("div", {
					className: "drop-shadow-black drop-shadow-xl max-w-4xl max-md:text-center",
					children: [/* @__PURE__ */ jsx("h2", {
						className: "text-xl hidden md:block font-heading tracking-widest opacity-0 animate-[slide-up-fade_1s_ease-out_forwards]",
						children: "THE TRUSTED NAME BEHIND"
					}), /* @__PURE__ */ jsx("h1", {
						className: "mt-2",
						children: /* @__PURE__ */ jsxs(SwipeTitle, {
							className: "max-md:flex-row max-md:justify-center max-md:items-baseline max-md:gap-1.5 text-3xl sm:text-5xl md:text-6xl font-black font-heading tracking-tighter max-w-3xl text-balance uppercase whitespace-nowrap",
							children: [/* @__PURE__ */ jsx(SwipeLine, {
								delay: 2,
								children: "THE NATIONS"
							}), /* @__PURE__ */ jsx(SwipeLine, {
								delay: 3,
								children: /* @__PURE__ */ jsx("span", {
									className: "bg-linear-to-r from-primary to-primary inline-block px-1 bg-clip-text text-transparent",
									children: "HEAVIEST LIFTS"
								})
							})]
						})
					})]
				})
			}),
			/* @__PURE__ */ jsx("div", {
				"aria-hidden": true,
				className: `absolute bottom-0 inset-x-0 h-2/5 bg-linear-to-t from-foreground dark:from-background to-transparent flex items-end justify-center pb-8 pointer-events-none`
			})
		]
	});
}
//#endregion
//#region resources/images/panorama.webp
var panorama_default = "/build/assets/panorama-BH1CJntt.webp";
//#endregion
//#region resources/js/components/stats.tsx
var statsData = [
	{
		icon: Award,
		value: "25+",
		label: "Years of Experience"
	},
	{
		icon: HardHat,
		value: "500+",
		label: "Successful Projects"
	},
	{
		icon: Clock,
		value: "24/7",
		label: "Availability"
	}
];
function Stats() {
	return /* @__PURE__ */ jsxs("section", {
		className: "relative bg-foreground dark:bg-background text-white pb-6 md:pb-12 pt-16 md:pt-24 border-y border-primary overflow-hidden",
		children: [/* @__PURE__ */ jsx("div", {
			className: "absolute inset-0 z-0 pointer-events-none ",
			style: {
				backgroundImage: `url(${panorama_default})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
				maskImage: "linear-gradient(to top, transparent 0%, black 75%)",
				WebkitMaskImage: "linear-gradient(to top, transparent 0%, black 75%)"
			}
		}), /* @__PURE__ */ jsx(Wrapper, {
			className: "relative z-10",
			children: /* @__PURE__ */ jsxs("div", {
				className: "flex flex-col lg:flex-row gap-12 lg:gap-8 items-center",
				children: [/* @__PURE__ */ jsx("div", {
					className: "w-full lg:w-2/5 flex",
					children: /* @__PURE__ */ jsxs("div", {
						className: "flex flex-col space-y-2 text-left font-heading uppercase font-black text-3xl lg:text-4xl tracking-tighter leading-tight",
						children: [
							/* @__PURE__ */ jsx(SectionLabel, {
								className: `text-white`,
								children: "Why Target Cranes"
							}),
							/* @__PURE__ */ jsx("span", {
								className: "text-white",
								children: "Measured movements."
							}),
							/* @__PURE__ */ jsx("span", {
								className: "text-white",
								children: "Clear communications."
							}),
							/* @__PURE__ */ jsx("span", {
								className: `text-primary`,
								children: "This is Target."
							})
						]
					})
				}), /* @__PURE__ */ jsx("div", {
					className: "w-full lg:w-3/5",
					children: /* @__PURE__ */ jsx("div", {
						className: "grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/20 text-left w-full",
						children: statsData.map((stat, index) => {
							const Icon = stat.icon;
							return /* @__PURE__ */ jsxs("div", {
								className: "flex flex-col items-center justify-center space-y-2 py-8 sm:py-4 px-4 text-center",
								children: [
									/* @__PURE__ */ jsx(Icon, { className: "w-10 h-10 text-white mb-1" }),
									/* @__PURE__ */ jsx("span", {
										className: "text-4xl lg:text-5xl font-black font-heading tracking-tighter drop-shadow-sm whitespace-nowrap",
										children: stat.value
									}),
									/* @__PURE__ */ jsx("span", {
										className: "text-sm font-bold uppercase tracking-wider text-balance opacity-90",
										children: stat.label
									})
								]
							}, index);
						})
					})
				})]
			})
		})]
	});
}
//#endregion
//#region resources/images/welcome.webp
var welcome_default = "/build/assets/welcome-CKlmCNJ6.webp";
//#endregion
//#region resources/js/components/who-we-are.tsx
function WhoWeAre() {
	return /* @__PURE__ */ jsx("section", {
		className: "py-24 bg-muted overflow-hidden isolate relative",
		children: /* @__PURE__ */ jsx(Wrapper, { children: /* @__PURE__ */ jsxs("div", {
			className: "grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 xl:gap-12 items-center",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "lg:col-span-5",
				children: [
					/* @__PURE__ */ jsx(SectionLabel, {
						className: "mb-8",
						children: "Our Approach"
					}),
					/* @__PURE__ */ jsx("h2", { children: /* @__PURE__ */ jsxs(SwipeTitle, {
						className: "text-4xl md:text-6xl z-0 relative font-black font-heading tracking-tighter uppercase mb-6 text-balance",
						children: [/* @__PURE__ */ jsx(SwipeLine, { children: "Every Lift Starts With" }), /* @__PURE__ */ jsx(SwipeLine, { children: /* @__PURE__ */ jsx("span", {
							className: "bg-linear-to-r from-primary to-primary inline-block px-1 bg-clip-text text-transparent",
							children: "Understanding The Job"
						}) })]
					}) }),
					/* @__PURE__ */ jsxs("div", {
						className: "space-y-4 text-muted-foreground text-lg leading-relaxed max-w-2xl",
						children: [/* @__PURE__ */ jsx("p", { children: "No two lifting projects present the same conditions. The load, available space, site access and work schedule all shape the approach." }), /* @__PURE__ */ jsx("p", { children: "At Target Cranes, we take time to understand those details before work begins, so the lifting plan fits the job in front of us." })]
					})
				]
			}), /* @__PURE__ */ jsx("div", {
				className: "lg:col-span-7 z-10 relative flex items-center justify-center lg:justify-end",
				children: /* @__PURE__ */ jsx("img", {
					src: welcome_default,
					alt: "Target Cranes operations",
					className: "w-full max-w-3xl lg:max-w-none h-auto object-contain drop-shadow-2xl lg:scale-115 xl:scale-125 origin-center lg:origin-right  "
				})
			})]
		}) })
	});
}
//#endregion
//#region resources/images/abnormal-crane-cutout.webp
var abnormal_crane_cutout_default = "/build/assets/abnormal-crane-cutout-ajq8LULo.webp";
//#endregion
//#region resources/js/components/service-areas-alt-3.tsx
var services = [
	{
		title: "Maritime",
		paragraphs: [
			"The maritime industry has become an integral part of our service offering, with our specialised services supporting some of the most established names across the recreational and commercial marine sectors.",
			"We have developed extensive experience in the transportation of magnificent luxury yachts, catamarans and vessels of extraordinary proportions. From shipyards to launch destinations and beyond, we take on the responsibility of moving these substantial and highly valuable loads, reflecting the scale of our involvement in this specialised field.",
			"Our work extends into the wider requirements of the marine sector, supporting shipyards and engineering companies during new vessel developments, major refits, repairs and maintenance programmes. We recognise the importance of keeping work progressing, particularly when substantial equipment needs to be moved between facilities or critical work is being undertaken to prepare a vessel for its return to service.",
			"With an established presence in this sector, extensive fleet capacity and specialised resources, we provide comprehensive, end-to-end transport solutions for requirements ranging from individual heavy loads to entire vessels."
		],
		icon: Anchor
	},
	{
		title: "CONSTRUCTION & CIVIL ENGINEERING",
		paragraphs: [
			"Major construction and civil engineering projects require substantial transport support, and this is an area in which we have developed a strong and established presence.",
			"Our heavy haulage services play an important role across a broad spectrum of construction and infrastructure developments, catering to the diverse requirements of an industry where the size and nature of loads can vary considerably. Bridge construction is a particularly established area of our work, with extensive experience transporting exceptionally long and heavy precast concrete beams for major installations.",
			"Our involvement extends throughout the construction sector, providing the transport capacity required across various phases of development. We understand how closely transportation is connected to the work taking place on site, particularly when the arrival of a substantial load forms an important part of the next phase of construction.",
			"With the resources to support individual heavy loads and long-term contracts involving multiple loads over extended periods, we offer the versatility needed to serve a broad range of requirements. Our services extend well beyond any single type of construction project, allowing us to remain involved in developments of varying scale and complexity."
		],
		icon: HardHat
	},
	{
		title: "Renewable Energy",
		paragraphs: [
			"Renewable energy is an industry we firmly believe in and proudly support, recognising the vital role it plays in strengthening our energy infrastructure, driving economic growth and creating opportunities for the future.",
			"Over the years, we have established ourselves as a trusted partner within this rapidly expanding sector, playing an important role in some of the largest renewable energy projects. Our involvement extends across both new installations and the expansion of existing facilities, supporting transport requirements of varying scale and duration.",
			"We have been heavily involved in the transportation of essential equipment for major wind farm installations, supporting both newly established facilities and the expansion of existing ones. With turbine components reaching extraordinary lengths and weights, these projects represent some of the most substantial work within our industry. Our involvement also extends across solar energy and large-scale battery storage installations, supporting the continued growth of renewable energy infrastructure.",
			"Our work within this sector goes beyond individual transport requirements. We have supported major contracts involving multiple loads, where our continued involvement contributes to bringing new energy facilities into operation and expanding existing generating capacity.",
			"As investment in renewable energy continues to grow, we remain firmly committed to supporting this sector and the opportunities it brings. We take pride in playing our part in strengthening the energy infrastructure that supports our economy, our industries and future generations."
		],
		icon: Wind
	},
	{
		title: "Mining",
		paragraphs: [
			"Our work within the mining sector has seen us take on heavy haulage and abnormal transport assignments of considerable scale, supporting the movement of industrial machinery and specialised equipment across a broad range of mining activities.",
			"We work with mining companies and the businesses that service them, providing the transport capacity required for major plant installations, the expansion of mining facilities and the relocation of valuable machinery. Our involvement extends to ongoing requirements as well as larger assignments where multiple loads form part of a wider scope of work.",
			"Our transport services help bridge the distance between equipment suppliers, engineering facilities and the mines that depend on them. We recognise that the timely arrival of essential machinery can have a direct bearing on production schedules, planned shutdowns and the completion of important work on site.",
			"We have built our service around more than the ability to carry heavy loads. Our continued involvement in this sector reflects the breadth of work we are equipped to undertake and our ability to meet the changing requirements of an industry where specialised heavy haulage remains essential."
		],
		icon: Pickaxe
	}
];
function ServiceAreasAlt3() {
	return /* @__PURE__ */ jsxs("section", {
		className: "py-24 bg-background relative overflow-x-clip",
		children: [/* @__PURE__ */ jsx("div", {
			"aria-hidden": true,
			className: "pointer-events-none absolute inset-0 z-0",
			children: /* @__PURE__ */ jsx("div", {
				className: "sticky top-0 h-svh w-full overflow-hidden",
				children: /* @__PURE__ */ jsx("div", {
					className: "absolute bottom-0 left-0 w-full lg:w-1/2 h-[85%] bg-contain bg-bottom-left bg-no-repeat opacity-15 dark:opacity-25",
					style: {
						backgroundImage: `url(${abnormal_crane_cutout_default})`,
						maskImage: "linear-gradient(to top, transparent 0%, black 15%, black 90%, transparent 100%)",
						WebkitMaskImage: "linear-gradient(to top, transparent 0%, black 15%, black 90%, transparent 100%)"
					}
				})
			})
		}), /* @__PURE__ */ jsx(Wrapper, {
			className: "relative z-10",
			children: /* @__PURE__ */ jsxs("div", {
				className: "flex flex-col lg:flex-row gap-16 lg:gap-24 items-start",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "lg:w-1/3 lg:sticky lg:top-32 flex flex-col",
					children: [
						/* @__PURE__ */ jsx(SectionLabel, {
							className: "mb-8",
							children: "Industry"
						}),
						/* @__PURE__ */ jsx("h2", { children: /* @__PURE__ */ jsxs(SwipeTitle, {
							className: "text-4xl md:text-6xl font-black font-heading tracking-tight uppercase mb-6 text-foreground drop-shadow-sm",
							children: [/* @__PURE__ */ jsx(SwipeLine, { children: "Service" }), /* @__PURE__ */ jsx(SwipeLine, { children: /* @__PURE__ */ jsx("span", {
								className: "bg-linear-to-r from-primary to-primary inline-block px-1 bg-clip-text text-transparent",
								children: "Areas"
							}) })]
						}) }),
						/* @__PURE__ */ jsxs("p", {
							className: "text-lg text-muted-foreground leading-relaxed",
							children: [
								"We provide specialised lifting services across a variety of sectors.",
								/* @__PURE__ */ jsx("br", {}),
								/* @__PURE__ */ jsx("br", {}),
								/* @__PURE__ */ jsx("strong", {
									className: "text-foreground",
									children: " Note that we are not limited to these services"
								}),
								" our versatile fleet and experienced team are equipped to handle unique lifting requirements in almost any industry."
							]
						})
					]
				}), /* @__PURE__ */ jsx("div", {
					className: "lg:w-2/3 flex flex-col gap-12 md:gap-16",
					children: services.map((service, index) => {
						const Icon = service.icon;
						return /* @__PURE__ */ jsxs("div", {
							className: "flex flex-col gap-6 rounded-3xl border border-border bg-card/85 backdrop-blur-xs p-8 md:p-10 shadow-sm",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-4",
								children: [/* @__PURE__ */ jsx("div", {
									className: "bg-primary/10 p-4 rounded-2xl border border-primary/20 shrink-0",
									children: /* @__PURE__ */ jsx(Icon, {
										className: "w-8 h-8 text-primary",
										strokeWidth: 1.5
									})
								}), /* @__PURE__ */ jsx("h3", {
									className: "text-3xl font-black font-heading uppercase text-foreground",
									children: service.title
								})]
							}), /* @__PURE__ */ jsx("div", {
								className: "space-y-4 text-muted-foreground text-lg leading-relaxed",
								children: service.paragraphs.map((paragraph, pIndex) => /* @__PURE__ */ jsx("p", { children: paragraph }, pIndex))
							})]
						}, index);
					})
				})]
			})
		})]
	});
}
//#endregion
//#region resources/images/tall.webp
var tall_default = "/build/assets/tall-CSHx5bdJ.webp";
//#endregion
//#region resources/images/const.webp
var const_default = "/build/assets/const-CEQ22tYR.webp";
//#endregion
//#region resources/images/tall-2.webp
var tall_2_default = "/build/assets/tall-2-Be5qM-Xc.webp";
//#endregion
//#region resources/images/IMG-20261008-WA0040.webp
var IMG_20261008_WA0040_default = "/build/assets/IMG-20261008-WA0040-Cbx-jvQW.webp";
//#endregion
//#region resources/js/components/project-success-4.tsx
function ProjectSuccess4() {
	return /* @__PURE__ */ jsx("section", {
		className: "bg-muted py-24 lg:py-32",
		children: /* @__PURE__ */ jsxs(Wrapper, { children: [/* @__PURE__ */ jsxs("div", {
			className: "max-w-4xl mb-16 lg:mb-24",
			children: [/* @__PURE__ */ jsx(SectionLabel, {
				className: "mb-8",
				children: "Planning & Execution"
			}), /* @__PURE__ */ jsx("h2", { children: /* @__PURE__ */ jsxs(SwipeTitle, {
				className: "text-5xl md:text-7xl font-black font-heading text-foreground drop-shadow-sm uppercase tracking-tight leading-[1.1]",
				children: [/* @__PURE__ */ jsx(SwipeLine, { children: "Preparation Makes" }), /* @__PURE__ */ jsx(SwipeLine, { children: /* @__PURE__ */ jsx("span", {
					className: "bg-linear-to-r from-primary to-primary inline-block px-1 bg-clip-text text-transparent",
					children: "The Difference"
				}) })]
			}) })]
		}), /* @__PURE__ */ jsxs("div", {
			className: "grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "lg:col-span-5 space-y-6 text-base sm:text-lg text-muted-foreground leading-relaxed font-normal",
				children: [
					/* @__PURE__ */ jsx("p", { children: "A crane is only one part of a successful operation. Behind each lift is a process of assessing the site, selecting suitable equipment and coordinating the people involved. For more complex work, that preparation can include detailed lift plans, method studies and crane configurations." }),
					/* @__PURE__ */ jsx("p", { children: "Our aim is to give clients a clear path from the first discussion to the completed lift one built on practical planning and communication throughout the job." }),
					/* @__PURE__ */ jsxs("div", {
						className: "pt-2 border-t border-border/60 space-y-4",
						children: [
							/* @__PURE__ */ jsx("h3", {
								className: "text-xl font-bold font-heading uppercase text-foreground",
								children: "A Partner On Site"
							}),
							/* @__PURE__ */ jsx("p", { children: "Lifting work often happens alongside other teams and deadlines. We work with clients and site teams to understand the wider project, communicate the plan and respond to the conditions on the ground." }),
							/* @__PURE__ */ jsx("p", { children: "Whether the requirement is straightforward or technically demanding, we bring the same attention to preparation and execution." })
						]
					})
				]
			}), /* @__PURE__ */ jsx("div", {
				className: "lg:col-span-7 h-full",
				children: /* @__PURE__ */ jsxs("div", {
					className: "grid grid-cols-2 grid-rows-3 gap-3 md:gap-4 h-[400px] md:h-[500px] lg:h-full lg:min-h-[600px]",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "col-span-1 row-span-2 relative rounded-2xl md:rounded-3xl overflow-hidden shadow-lg group",
							children: /* @__PURE__ */ jsx("img", {
								src: tall_default,
								className: "absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105",
								alt: "Crane operation 1"
							})
						}),
						/* @__PURE__ */ jsx("div", {
							className: "col-span-1 row-span-1 relative rounded-2xl md:rounded-3xl overflow-hidden shadow-lg group",
							children: /* @__PURE__ */ jsx("img", {
								src: const_default,
								className: "absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105",
								alt: "Crane operation 2"
							})
						}),
						/* @__PURE__ */ jsx("div", {
							className: "col-span-1 row-span-2 relative rounded-2xl md:rounded-3xl overflow-hidden shadow-lg group",
							children: /* @__PURE__ */ jsx("img", {
								src: tall_2_default,
								className: "absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105",
								alt: "Crane operation 3"
							})
						}),
						/* @__PURE__ */ jsx("div", {
							className: "col-span-1 row-span-1 relative rounded-2xl md:rounded-3xl overflow-hidden shadow-lg group",
							children: /* @__PURE__ */ jsx("img", {
								src: IMG_20261008_WA0040_default,
								className: "absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105",
								alt: "Crane operation 4"
							})
						})
					]
				})
			})]
		})] })
	});
}
//#endregion
//#region resources/images/black-white.webp
var black_white_default = "/build/assets/black-white-EH1MbV7t.webp";
//#endregion
//#region resources/js/components/nationwide-service.tsx
var mapPath = "M172.17 140.2c12.08 14.12 18.77 8.4 26.02 29.99.62 3.5 3.61 5.38 4.97 7.33-.88 2.21.49 1.2 1.58.98 1.5.87-.5.83-.82 1.49 1.32 13.96 18.68 32.27 1.92 49.62-5.35 6.71-3.17 19.65.97 26.97 50.24-10.38 37.19 15.46 81.53-31.06 4.63-7.28 14.67-6.29 15.68-16.24 5.82-1.92.65-7.58 5.11-10.64-1.87-27.27 27.86-40.59 48.54-19.04 9.2 15.08 17.62 1.47 28.87 14.95 103.69 19.04 43.03-61.87 101.62-60.85 5.79-7.38 10.92-16.42 20.61-19.13 5.49-7.22 3.01-32.74 10.54-33.02 4.59-1.37-1.79-1.65 3.2-4.39-.68 0 .23-.77.53-1.05 3.06.57-.2-1.09.69-2.11.98-.08 1.52.96 2.05-.18.25-.64 1.14.96 1.81.08-1.9-.9.74-2.29 1.67-2.23 2.34-.43 3.94-3.3 5.43-4.82.98 4.17 2.03-2.61 3.7 1.14 6.92-4.16 5.37.09 8.99-10.5 2.64 2.29 3.98-3.22 5.79.27 1.68 1.06 2.73-2.9 2.82-3.55-2.58-2.22 7.73-3.33 8.02-6.76-.28-.72-.91-3.6.15-4.01 20.86-19.7 3.89-15.47 38.48-23.47 18.74-3.95 4.12-17.86 28.12-17.22 29.07-10.1 36.33 11.18 63.87 6.71 37.8-13.37 44.98 33.44 46.5 62.82 19.48 25.26 23.33 57.65 21.7 89.78 4.28 103.76-36.07-31.06-59.11 85.44-.49 3.91 1.71 7.19 4.65 3.04 1.26 5.9 5.32 5.76 3.61 12.58 10.24 17.4 31.73 18 49.92 17.47-3.25-8.86.7-19.02 1.07-28.06 68.59 5.1 38.73-1.51 30.19 57.49-.86 9.77-3.52 23.42-9.68 30.9 3.61 8.07-10.7 16.52-15.9 22.37-4.11-3.83-6.34 4.06-.67.34-2.41 7.44-15.66 5.86-14.14 8.09-69.7 99-137.36 216.67-253.39 274.44-12.65 9.75-51.37-12.28-48.88 14.32 11.16 13.67-27.05-4.12-33.75 1.86-4.44 4.56 1.83 2.5-5.85 9.65 5.98 6.26-14.29.24-17.5.61-13.43-7.16-29.4-7.72-43.79-10.49-19.74 2.27-3.43 15.18-29.05 2.75 3.62 4.47 1.36 2.52-3.05 3.28-13.03-3.98-3.3-4.91-7.94-5.88-3.4-.79-1.74.8-.28 2.25 2.48 1.88-6.11-1.18-6.84-1.52-3.45-1.2-5.78 2.5-8.58 3.64-4.29.87-21.37-.89-15.14 7.21-16.31 1.33-8.6 16.63-27.09 11.57-4.77-4.25-9.32 3.21-14.33 3.1-8.13-2.12-17.71-6.54-24.63-1.58 11.7 7.59-13.12-4.96-28.37 15.52-1.97 2.7-10.62 3.24-8.4 8.59-6.69 2.87-9.89-5.8-17.7-2.86-5.63 3.35-10.19-8.52-15.91-9.24-4.75 1.45-4.03.7-.72-3.63 3.46-10.91-15.5-4.44-12.26-11.1.24-.38 2.46-4.58.57-2.98-.17.23-1.21 2.36-1.68 2.38l-3.76-.25c-11.41 2.24-9.68 4.86-9.25-7.91.22-3.87 3.43-1.58-.38-6.45-13.4-5.25-20.22.4-16.94 13.96 1.83 1.16-.53.91-1.31.29-2.75-1.62-2.74-5.39-3.59-7.39-.2-2.22-5.21-3.8-1.51-5.82-.22-1.29 1.76-4.72-.54-3.12-1.26-3.73 2.3-10.63 7.13-9.63.87-18.02-19.8-35.59-24.35-47.7 2.59-.26 3.91 7.54 7.23 6.24-11.33-25.71-9.01 5.57-13.53-21.57-1.72-.99 2.38-1.43 2.31-2.68.06-3.08.37-4.83 4.08-4.63 22.23 14.18 17.65-33.97 14.49-47.26-7.76-24.18-29.04-41-36.45-65.7-22.67-32.61-20.77-78.31-46.56-108.65.69-8.54-12.51-13.46.38-17.36 7.31-8.82 4.09 5.46 10.16-8.96-5.44-10.47 2.7-1.73.52-8.53-.05-.35 1.2-.16 1.31-.2 2.44-.12-1.48-1.86.13-2.57 3.79 2.05 1.05-4.59 3.43-5.64 5.58-.2 12.53-4.26 13.46 5.54.28 8.59 7.89-1.61 10.22 9.67 2.11 6.99-6.92 4.8-1.07 12.55 7.27 2.61-6.72 12.15 10.32 6.77 2.11 5.31 1.89 5.96 8.04 3.84 38.26 18.68 39.6-3.71 64.09 10.32 3.94 4.19 8.02-1.96 11.78-2.77-1.78-2.75-3.44-11.55 2.49-8.17 14.75-4.1-.04-11.43 31.62-17.65.18-67.3-.01-134.66 0-201.96Zm442.76 229.24c-10.32-10.77-16.51-22.98-30.37-14.9-1.35 5.82-7.63 1.9-10.75 3.99-2.98 2.32-6.12 12.53-9.84 7.9-4.81.54.96 4.69-9.72 2.98.1 1.41-3.1 6.88-5.33 7.13.17.94 2.07 1.62.5 2-1.39.76-2.61 6.95-5.97 7.7.69 5.72-3.72 2.01-4.05 7.01-4.95 11.18-11.09 12.91-21.2 16.6-.58 3.02-.72 2.1 1.78 4.03 4.06 5.98 9.49 24.04 15.04 24.72 3.69.73-3.55 3.11 1 10.25 13.76 4.97 10.73 19.52 33.34 19.27 2.07 1.7.16-4.27 3.42-5.85 2.47-8.19-3.7-2.18 5.27-9.9-3.75-20.16 40.75-10.1 44.49-29.27-1.93-25.25 37.46-25.07-7.62-53.65Z";
var mapMask = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 807 711.6'%3E%3Cpath d='${mapPath}'/%3E%3C/svg%3E")`;
function NationwideService() {
	return /* @__PURE__ */ jsxs("section", {
		className: "bg-background border-t border-border py-16 lg:py-24 relative overflow-hidden",
		children: [/* @__PURE__ */ jsx("div", {
			className: "absolute top-0 left-0 w-full h-full lg:w-1/2 pointer-events-none z-0 opacity-10 dark:opacity-30",
			style: {
				backgroundImage: `url(${black_white_default})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
				maskImage: "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%), linear-gradient(to right, black 60%, transparent 100%)",
				WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%), linear-gradient(to right, black 60%, transparent 100%)",
				maskComposite: "intersect",
				WebkitMaskComposite: "source-in"
			}
		}), /* @__PURE__ */ jsx(Wrapper, {
			className: "relative z-10",
			children: /* @__PURE__ */ jsxs("div", {
				className: "flex flex-col lg:flex-row items-center gap-12",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "lg:w-1/2 space-y-6",
					children: [
						/* @__PURE__ */ jsx(SectionLabel, {
							className: "mb-8",
							children: "Target Cranes in South Africa"
						}),
						/* @__PURE__ */ jsx("h2", { children: /* @__PURE__ */ jsxs(SwipeTitle, {
							className: "text-4xl md:text-6xl font-black font-heading tracking-tighter uppercase text-balance",
							children: [/* @__PURE__ */ jsx(SwipeLine, { children: "Target Cranes" }), /* @__PURE__ */ jsx(SwipeLine, { children: /* @__PURE__ */ jsx("span", {
								className: "bg-linear-to-r from-primary to-primary inline-block px-1 bg-clip-text text-transparent",
								children: "In South Africa"
							}) })]
						}) }),
						/* @__PURE__ */ jsx("p", {
							className: "text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl",
							children: "These stats can help showcase Target Cranes’ experience, capabilities, and commitment to safety and customer satisfaction, making a strong impression on potential clients."
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "grid gap-6 mt-8",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "flex flex-col gap-1",
									children: [/* @__PURE__ */ jsx("span", {
										className: "text-3xl font-black font-heading tracking-tight text-primary",
										children: "25+ Years of Experience"
									}), /* @__PURE__ */ jsx("p", {
										className: "text-muted-foreground",
										children: "Providing exceptional crane services across multiple industries."
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "flex flex-col gap-1",
									children: [/* @__PURE__ */ jsx("span", {
										className: "text-3xl font-black font-heading tracking-tight text-primary",
										children: "500+ Successful Projects"
									}), /* @__PURE__ */ jsx("p", {
										className: "text-muted-foreground",
										children: "Completed with precision and safety, ranging from small-scale lifts to major infrastructure projects."
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "flex flex-col gap-1",
									children: [/* @__PURE__ */ jsx("span", {
										className: "text-3xl font-black font-heading tracking-tight text-primary",
										children: "24/7 Availability"
									}), /* @__PURE__ */ jsx("p", {
										className: "text-muted-foreground",
										children: "Ready to respond to your lifting needs anytime, day or night."
									})]
								})
							]
						})
					]
				}), /* @__PURE__ */ jsx("div", {
					className: "lg:w-1/2 flex justify-center items-center relative min-h-125",
					children: /* @__PURE__ */ jsxs("div", {
						className: "w-full max-w-150 aspect-8/7 relative z-10",
						children: [/* @__PURE__ */ jsx("svg", {
							xmlns: "http://www.w3.org/2000/svg",
							viewBox: "0 0 807 711.6",
							className: "absolute inset-0 w-full h-full pointer-events-none z-20",
							children: /* @__PURE__ */ jsx("path", {
								d: mapPath,
								fill: "none",
								stroke: "currentColor",
								strokeWidth: "2",
								className: "text-muted"
							})
						}), /* @__PURE__ */ jsx("div", {
							className: "absolute inset-0",
							style: {
								maskImage: mapMask,
								WebkitMaskImage: mapMask,
								maskSize: "contain",
								WebkitMaskSize: "contain",
								maskRepeat: "no-repeat",
								WebkitMaskRepeat: "no-repeat",
								maskPosition: "center",
								WebkitMaskPosition: "center"
							},
							children: /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-linear-to-tr from-primary to-primary mask-[radial-gradient(circle,white_5px,transparent_5px)] mask-size-[16px_16px]" })
						})]
					})
				})]
			})
		})]
	});
}
//#endregion
//#region resources/js/components/home-hero-split.tsx
var pillars = [
	{
		icon: Truck,
		title: "Right-Sized Fleet",
		description: "Modern mobile and all-terrain cranes matched precisely to your load, reach, and site access."
	},
	{
		icon: ClipboardCheck,
		title: "Engineered Lift Plans",
		description: "Thorough site surveys, load calculations, and rigging studies completed before the lift begins."
	},
	{
		icon: HardHat,
		title: "Managed Operations",
		description: "Certified operators, skilled riggers, and dedicated supervision keeping your schedule on track."
	},
	{
		icon: ShieldCheck,
		title: "Uncompromising Safety",
		description: "Strict compliance and zero-shortcut execution across routine lifts and complex heavy projects."
	}
];
function HomeHeroSplit() {
	return /* @__PURE__ */ jsxs("section", {
		className: "relative overflow-hidden py-10 lg:py-12 bg-linear-to-br from-zinc-950 via-primary/95 to-primary text-white border-y border-white/10",
		children: [/* @__PURE__ */ jsx("div", {
			"aria-hidden": true,
			className: "pointer-events-none opacity-20 absolute inset-0 bg-[radial-gradient(circle,#ffffff40_2px,transparent_2px)] bg-size-[16px_16px] mask-[radial-gradient(ellipse_at_top_right,black_35%,transparent_60%)]"
		}), /* @__PURE__ */ jsx(Wrapper, {
			className: "relative z-10",
			children: /* @__PURE__ */ jsxs("div", {
				className: "flex flex-col gap-6 lg:gap-8",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex flex-col lg:flex-row lg:items-end justify-between gap-4 lg:gap-8",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ jsx(SectionLabel, {
							className: "text-white",
							children: "End-to-End Lifting Partner"
						}), /* @__PURE__ */ jsx("h2", { children: /* @__PURE__ */ jsx(SwipeTitle, {
							className: "text-2xl sm:text-3xl md:text-4xl font-black font-heading tracking-tighter uppercase text-white text-balance",
							children: /* @__PURE__ */ jsx(SwipeLine, { children: "Precision Equipment & Engineered Lift Planning" })
						}) })]
					}), /* @__PURE__ */ jsx("p", {
						className: "max-w-xl text-sm sm:text-base leading-relaxed text-white/85",
						children: "From routine commercial lifts to complex multi-crane projects, Target Cranes delivers turnkey lifting solutions tailored to your site, load, and schedule."
					})]
				}), /* @__PURE__ */ jsx("div", {
					className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t border-white/15",
					children: pillars.map((pillar) => {
						const Icon = pillar.icon;
						return /* @__PURE__ */ jsxs("div", {
							className: "group flex items-start gap-3.5 rounded-xl border border-white/15 bg-white/5 p-4 backdrop-blur-xs transition-colors hover:bg-white/10 hover:border-white/25",
							children: [/* @__PURE__ */ jsx("div", {
								className: "flex size-9 shrink-0 items-center justify-center rounded-lg bg-white/15 text-white ring-1 ring-white/20 transition-transform group-hover:scale-105",
								children: /* @__PURE__ */ jsx(Icon, {
									className: "size-4",
									strokeWidth: 2
								})
							}), /* @__PURE__ */ jsxs("div", {
								className: "space-y-1",
								children: [/* @__PURE__ */ jsx("h3", {
									className: "font-heading text-base font-bold uppercase tracking-wide text-white leading-tight",
									children: pillar.title
								}), /* @__PURE__ */ jsx("p", {
									className: "text-xs leading-relaxed text-white/80",
									children: pillar.description
								})]
							})]
						}, pillar.title);
					})
				})]
			})
		})]
	});
}
HomeHeroSplit.displayName = "HomeHeroSplit";
//#endregion
//#region resources/js/pages/home.tsx
function Home() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(Seo, {}),
		/* @__PURE__ */ jsx(Hero, {}),
		/* @__PURE__ */ jsx(HomeHeroSplit, {}),
		/* @__PURE__ */ jsx(WhoWeAre, {}),
		/* @__PURE__ */ jsx(Stats, {}),
		/* @__PURE__ */ jsx(ServiceAreasAlt3, {}),
		/* @__PURE__ */ jsx(ProjectSuccess4, {}),
		/* @__PURE__ */ jsx(NationwideService, {})
	] });
}
Home.displayName = "Home";
Home.layout = AppLayout;
//#endregion
export { Home as default };
