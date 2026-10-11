import { t as Seo } from "./seo-C6a5S63n.js";
import { t as AppLayout } from "./app-layout-vr0g2HT6.js";
import { jsx, jsxs } from "react/jsx-runtime";
//#region resources/js/pages/about-us.tsx
function AboutUs() {
	return /* @__PURE__ */ jsxs(AppLayout, { children: [/* @__PURE__ */ jsx(Seo, {
		title: "About Us",
		description: "Learn more about Target Cranes, Cape Town's premier mobile crane hire, rigging, and precision lifting service company with 25+ years of excellence."
	}), /* @__PURE__ */ jsx("div", {
		className: "py-24",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-7xl mx-auto sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ jsx("h1", {
				className: "text-4xl font-bold",
				children: "About Us"
			}), /* @__PURE__ */ jsx("p", {
				className: "mt-4",
				children: "This is the about us page."
			})]
		})
	})] });
}
//#endregion
export { AboutUs as default };
