import { n as Wrapper, t as AppLayout } from "./app-layout-a01gcPpr.js";
import { useEffect, useState } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region resources/images/hero-image.webp
var hero_image_default = "/build/assets/hero-image-BBNAoJo-.webp";
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
		className: `min-h-192 flex items-end py-12 w-full max-w-full relative overflow-hidden`,
		children: [/* @__PURE__ */ jsxs("div", {
			className: "absolute inset-0 w-full h-[130%] -top-[15%] -z-10",
			style: { transform: `translateY(${offsetY * .4}px)` },
			children: [/* @__PURE__ */ jsx("img", {
				src: hero_image_default,
				alt: "Target Cranes",
				className: "w-full h-full object-cover object-center"
			}), /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-primary/20" })]
		}), /* @__PURE__ */ jsxs(Wrapper, {
			className: "relative z-10",
			children: [/* @__PURE__ */ jsxs("div", { children: [
				/* @__PURE__ */ jsx("h2", { children: "THE TRUSTED NAME BEHIND" }),
				/* @__PURE__ */ jsx("h1", {
					className: "text-7xl font-bold tracking-tighter max-w-2xl text-balance",
					children: "THE NATIONS HEAVIEST LIFTS"
				}),
				/* @__PURE__ */ jsx("p", {})
			] }), /* @__PURE__ */ jsx("p", {
				className: `max-w-3xl text-lg leading-loose`,
				children: "Recognised Leaders for Unmatched Excellence"
			})]
		})]
	});
}
//#endregion
//#region resources/js/pages/home.tsx
function Home() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(Hero, {}), /* @__PURE__ */ jsx(Wrapper, { children: "Home page" })] });
}
Home.displayName = "Home";
Home.layout = AppLayout;
//#endregion
export { Home as default };
