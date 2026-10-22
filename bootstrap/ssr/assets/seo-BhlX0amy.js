import { Head } from "@inertiajs/react";
import { jsx, jsxs } from "react/jsx-runtime";
// resources/js/components/seo.tsx
function Seo({ title = "Crane Hire & Managed Lifting in South Africa", description = "Target Cranes provides crane hire and planned lifting solutions across South Africa for construction, mining, maritime and renewable energy projects. Enquire about your lift.", image = "/images/og-image.webp", url, type = "website" }) {
	const fullTitle = `${title} | Target Cranes`;
	return /* @__PURE__ */ jsxs(Head, {
		title,
		children: [
			/* @__PURE__ */ jsx("meta", {
				name: "description",
				content: description,
				"head-key": "description"
			}),
			/* @__PURE__ */ jsx("link", {
				rel: "icon",
				type: "image/x-icon",
				href: "/favicon.ico?v=2",
				"head-key": "favicon"
			}),
			/* @__PURE__ */ jsx("link", {
				rel: "shortcut icon",
				type: "image/x-icon",
				href: "/favicon.ico?v=2",
				"head-key": "shortcut-icon"
			}),
			/* @__PURE__ */ jsx("link", {
				rel: "icon",
				type: "image/png",
				sizes: "32x32",
				href: "/favicon-32x32.png?v=2",
				"head-key": "icon-32"
			}),
			/* @__PURE__ */ jsx("link", {
				rel: "icon",
				type: "image/png",
				sizes: "16x16",
				href: "/favicon-16x16.png?v=2",
				"head-key": "icon-16"
			}),
			/* @__PURE__ */ jsx("link", {
				rel: "apple-touch-icon",
				sizes: "180x180",
				href: "/apple-touch-icon.png?v=2",
				"head-key": "apple-icon"
			}),
			/* @__PURE__ */ jsx("meta", {
				property: "og:type",
				content: type,
				"head-key": "og:type"
			}),
			/* @__PURE__ */ jsx("meta", {
				property: "og:title",
				content: fullTitle,
				"head-key": "og:title"
			}),
			/* @__PURE__ */ jsx("meta", {
				property: "og:description",
				content: description,
				"head-key": "og:description"
			}),
			/* @__PURE__ */ jsx("meta", {
				property: "og:image",
				content: image,
				"head-key": "og:image"
			}),
			/* @__PURE__ */ jsx("meta", {
				property: "og:site_name",
				content: "Target Cranes",
				"head-key": "og:site_name"
			}),
			/* @__PURE__ */ jsx("meta", {
				property: "og:locale",
				content: "en_ZA",
				"head-key": "og:locale"
			}),
			url && /* @__PURE__ */ jsx("meta", {
				property: "og:url",
				content: url,
				"head-key": "og:url"
			}),
			/* @__PURE__ */ jsx("meta", {
				name: "twitter:card",
				content: "summary_large_image",
				"head-key": "twitter:card"
			}),
			/* @__PURE__ */ jsx("meta", {
				name: "twitter:title",
				content: fullTitle,
				"head-key": "twitter:title"
			}),
			/* @__PURE__ */ jsx("meta", {
				name: "twitter:description",
				content: description,
				"head-key": "twitter:description"
			}),
			/* @__PURE__ */ jsx("meta", {
				name: "twitter:image",
				content: image,
				"head-key": "twitter:image"
			})
		]
	});
}
export { Seo as t };
