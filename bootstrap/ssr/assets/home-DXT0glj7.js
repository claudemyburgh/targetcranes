import { n as Wrapper, r as cn, t as AppLayout } from "./app-layout-DPzbJk7Z.js";
import { useEffect, useState } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Anchor, HardHat, Pickaxe, Wind } from "lucide-react";
//#region resources/images/hero-bigger.webp
var hero_bigger_default = "/build/assets/hero-bigger-CZlAwTII.webp";
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
		className: `h-svh  pb-12 pt-24 w-full max-w-full relative overflow-clip`,
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "absolute inset-0 w-full h-full transform-gpu",
				style: {
					transform: `scale(${1 + offsetY * 5e-4})`,
					transformOrigin: "center center"
				},
				children: /* @__PURE__ */ jsx("img", {
					src: hero_bigger_default,
					alt: "Target Cranes",
					className: "w-full h-full mx-auto object-cover object-center"
				})
			}),
			/* @__PURE__ */ jsxs(Wrapper, {
				className: "relative z-10 text-white flex items-end h-full",
				children: [/* @__PURE__ */ jsx("div", {
					"aria-hidden": true,
					className: `text-white border border-white h-full rounded-3xl absolute inset-0 p-6 mask-[radial-gradient(circle_at_bottom_left,transparent_250px,black_450px)]`
				}), /* @__PURE__ */ jsxs("div", {
					className: ` drop-shadow-black drop-shadow-xl`,
					children: [
						/* @__PURE__ */ jsx("h2", {
							className: `text-xl md:text-2xl font-heading tracking-widest `,
							children: "THE TRUSTED NAME BEHIND"
						}),
						/* @__PURE__ */ jsxs("h1", {
							className: "text-6xl md:text-8xl font-black font-heading tracking-tighter max-w-3xl text-balance uppercase",
							children: ["THE NATIONS ", /* @__PURE__ */ jsx("span", {
								className: `bg-linear-to-r from-primary to-orange-500 inline-block px-1  bg-clip-text text-transparent`,
								children: "HEAVIEST LIFTS"
							})]
						}),
						/* @__PURE__ */ jsx("p", {
							className: `max-w-3xl text-md md:text-xl leading-loose mt-4`,
							children: "Recognised Leaders for Unmatched Excellence"
						})
					]
				})]
			}),
			/* @__PURE__ */ jsx("div", { className: `absolute bottom-0 inset-x-0 h-2/5 bg-linear-to-t from-foreground to-transparent` })
		]
	});
}
//#endregion
//#region resources/js/components/ui/misc/section-label.tsx
function SectionLabel({ children, className }) {
	return /* @__PURE__ */ jsxs("div", {
		className: cn("flex items-center gap-4", className),
		children: [/* @__PURE__ */ jsx("div", { className: "w-16 h-1.5 bg-linear-to-l from-primary to-orange-500 rounded-full shrink-0" }), /* @__PURE__ */ jsx("span", {
			className: "text-primary font-bold uppercase tracking-widest text-sm",
			children
		})]
	});
}
//#endregion
//#region resources/images/IMG-20261008-WA0038.webp
var IMG_20261008_WA0038_default = "/build/assets/IMG-20261008-WA0038-jyIrIZ_-.webp";
//#endregion
//#region resources/images/IMG-20261008-WA0039.webp
var IMG_20261008_WA0039_default = "/build/assets/IMG-20261008-WA0039-tLkp7Uy_.webp";
//#endregion
//#region resources/images/IMG-20261008-WA0040.webp
var IMG_20261008_WA0040_default = "/build/assets/IMG-20261008-WA0040-Cbx-jvQW.webp";
//#endregion
//#region resources/js/components/service-areas-alt-1.tsx
var services = [
	{
		title: "Maritime",
		description: "Our experience in the maritime industry spans many shipyard, port, and offshore projects. Whether it’s vessel launches, dry-dock work, or harbour operations, we take pride in playing a part in projects that support the ongoing growth of the maritime sector.",
		image: IMG_20261008_WA0038_default,
		icon: Anchor
	},
	{
		title: "Construction",
		description: "With years of experience in the construction sector, we’ve contributed to many of the nation’s most notable infrastructure and building projects. From large-scale civil works to landmark high-rise developments, our team provides complete crane hire solutions that keep progress on track. Supported by a versatile fleet and the capability to handle both everyday and specialised lifting requirements, we remain a trusted partner to the construction industry.",
		image: IMG_20261008_WA0039_default,
		icon: HardHat
	},
	{
		title: "Renewable Energy",
		description: "We’re proud to be part of renewable energy projects that are transforming Africa’s power landscape. From wind and solar installations to hydro developments, our crane hire services provide the strength and reliability needed for large-scale energy work. Supported by specialised equipment and a dedicated team, we continue to play a role in building a cleaner, more sustainable future.",
		image: IMG_20261008_WA0040_default,
		icon: Wind
	},
	{
		title: "Mining",
		description: "With extensive experience in the mining sector, we’ve supported operations that drive growth and development across the industry. From installing heavy plant infrastructure to relocating oversized machinery, our team provides dependable crane hire solutions designed for the unique demands of mining. Equipped with specialised gear and the capability to perform in the toughest conditions, we continue to deliver lifting services that keep projects moving and remain a reliable partner to mining operations across the region.",
		image: "/build/assets/IMG-20261008-WA0041-voCRLuil.webp",
		icon: Pickaxe
	}
];
function ServiceAreasAlt1() {
	return /* @__PURE__ */ jsx("section", {
		className: "py-24 bg-background",
		children: /* @__PURE__ */ jsx(Wrapper, { children: /* @__PURE__ */ jsxs("div", {
			className: "flex flex-col lg:flex-row gap-16 lg:gap-24 items-start",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "lg:w-1/3 lg:sticky lg:top-32 flex flex-col",
				children: [
					/* @__PURE__ */ jsx(SectionLabel, {
						className: "mb-8",
						children: "Industry"
					}),
					/* @__PURE__ */ jsxs("h2", {
						className: "text-4xl md:text-6xl font-black font-heading tracking-tight uppercase mb-6 text-foreground drop-shadow-sm ",
						children: ["Service ", /* @__PURE__ */ jsx("span", {
							className: `bg-linear-to-r from-primary to-orange-500 inline-block px-1  bg-clip-text text-transparent`,
							children: "Areas"
						})]
					}),
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
				className: "lg:w-2/3 flex flex-col gap-16 md:gap-24",
				children: services.map((service, index) => {
					const Icon = service.icon;
					return /* @__PURE__ */ jsxs("div", {
						className: "flex flex-col gap-8 group",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "relative h-[300px] md:h-[450px] w-full rounded-3xl overflow-hidden bg-card border border-border shadow-sm",
							children: [
								/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-primary/10 mix-blend-overlay z-10 transition-opacity duration-500 group-hover:opacity-0" }),
								/* @__PURE__ */ jsx("img", {
									src: service.image,
									alt: service.title,
									className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
								}),
								/* @__PURE__ */ jsx("div", {
									className: "absolute top-6 left-6 z-20 bg-background/95 backdrop-blur-md p-4 rounded-2xl border border-border shadow-lg",
									children: /* @__PURE__ */ jsx(Icon, {
										className: "w-8 h-8 text-primary",
										strokeWidth: 1.5
									})
								})
							]
						}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
							className: "text-3xl font-black font-heading uppercase mb-4 text-foreground",
							children: service.title
						}), /* @__PURE__ */ jsx("p", {
							className: "text-muted-foreground text-lg leading-relaxed",
							children: service.description
						})] })]
					}, index);
				})
			})]
		}) })
	});
}
//#endregion
//#region resources/images/IMG-20261008-WA0054.webp
var IMG_20261008_WA0054_default = "/build/assets/IMG-20261008-WA0054-DTrbVS2T.webp";
//#endregion
//#region resources/js/components/project-success-4.tsx
function ProjectSuccess4() {
	return /* @__PURE__ */ jsx("section", {
		className: "bg-muted py-24 lg:py-32",
		children: /* @__PURE__ */ jsxs(Wrapper, { children: [/* @__PURE__ */ jsxs("div", {
			className: "max-w-4xl mb-16 lg:mb-24",
			children: [/* @__PURE__ */ jsx(SectionLabel, {
				className: "mb-8",
				children: "Our Approach"
			}), /* @__PURE__ */ jsxs("h2", {
				className: "text-5xl md:text-7xl font-black font-heading text-foreground drop-shadow-sm uppercase tracking-tight leading-[1.1]",
				children: [
					"Every Successful Project ",
					/* @__PURE__ */ jsx("br", {}),
					/* @__PURE__ */ jsx("span", {
						className: `bg-linear-to-r from-primary to-orange-500 inline-block px-1  bg-clip-text text-transparent`,
						children: "Begins With Us"
					})
				]
			})]
		}), /* @__PURE__ */ jsxs("div", {
			className: "grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "lg:col-span-5 space-y-8 text-xl text-muted-foreground leading-relaxed font-medium",
				children: [
					/* @__PURE__ */ jsx("p", { children: "With services available for both short and long-term hire, Target Cranes provides fully managed lifting solutions tailored to each project’s scope and scale. Every operation begins long before the first lift, through detailed planning, site analysis, and equipment selection that ensure complete readiness from the ground up." }),
					/* @__PURE__ */ jsx("p", { children: "Safety lies at the heart of our operations. Before any project begins, our teams carry out comprehensive risk assessments and method studies to safeguard our people, our clients, and the environments in which we work." }),
					/* @__PURE__ */ jsx("p", { children: "For complex lifts, we implement engineered lift plans, CAD drawings, and precise crane configurations to guarantee safe, efficient lifting operations that meet the highest industry standards." })
				]
			}), /* @__PURE__ */ jsx("div", {
				className: "lg:col-span-7 h-full",
				children: /* @__PURE__ */ jsxs("div", {
					className: "grid grid-cols-2 grid-rows-3 gap-3 md:gap-4 h-[400px] md:h-[500px] lg:h-full lg:min-h-[600px]",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "col-span-1 row-span-2 relative rounded-2xl md:rounded-[2rem] overflow-hidden shadow-lg group",
							children: /* @__PURE__ */ jsx("img", {
								src: IMG_20261008_WA0054_default,
								className: "absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105",
								alt: "Crane operation 1"
							})
						}),
						/* @__PURE__ */ jsx("div", {
							className: "col-span-1 row-span-1 relative rounded-2xl md:rounded-[2rem] overflow-hidden shadow-lg group",
							children: /* @__PURE__ */ jsx("img", {
								src: IMG_20261008_WA0038_default,
								className: "absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105",
								alt: "Crane operation 2"
							})
						}),
						/* @__PURE__ */ jsx("div", {
							className: "col-span-1 row-span-2 relative rounded-2xl md:rounded-[2rem] overflow-hidden shadow-lg group",
							children: /* @__PURE__ */ jsx("img", {
								src: IMG_20261008_WA0039_default,
								className: "absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105",
								alt: "Crane operation 3"
							})
						}),
						/* @__PURE__ */ jsx("div", {
							className: "col-span-1 row-span-1 relative rounded-2xl md:rounded-[2rem] overflow-hidden shadow-lg group",
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
//#region resources/js/pages/home.tsx
function Home() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(Hero, {}),
		/* @__PURE__ */ jsx(ServiceAreasAlt1, {}),
		/* @__PURE__ */ jsx(ProjectSuccess4, {})
	] });
}
Home.displayName = "Home";
Home.layout = AppLayout;
//#endregion
export { Home as default };
