import { t as useAppearance } from "../ssr.js";
import { Link, usePage } from "@inertiajs/react";
import React, { useEffect, useRef, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { Mail, MapPin, Menu, Monitor, Moon, Phone, PhoneCall, Sun, XIcon } from "lucide-react";
import { Button } from "@base-ui/react/button";
import { cva } from "class-variance-authority";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Menu as Menu$1 } from "@base-ui/react/menu";
import { cn } from "cn";
import { Dialog } from "@base-ui/react/dialog";
import { Mesh, Program, Renderer, Triangle } from "ogl";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
//#region resources/js/lib/utils.ts
function cn$1(...inputs) {
	return twMerge(clsx(inputs));
}
//#endregion
//#region resources/js/components/ui/button.tsx
var buttonVariants = cva("group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground hover:bg-primary/80",
			outline: "border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
			secondary: "bg-secondary text-secondary-foreground hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
			ghost: "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
			destructive: "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
			xs: "h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
			sm: "h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
			lg: "h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
			icon: "size-8",
			"icon-xs": "size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
			"icon-sm": "size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg",
			"icon-lg": "size-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function Button$1({ className, variant = "default", size = "default", ...props }) {
	return /* @__PURE__ */ jsx(Button, {
		"data-slot": "button",
		className: cn$1(buttonVariants({
			variant,
			size,
			className
		})),
		...props
	});
}
//#endregion
//#region resources/js/components/ui/dropdown-menu.tsx
function DropdownMenu({ ...props }) {
	return /* @__PURE__ */ jsx(Menu$1.Root, {
		"data-slot": "dropdown-menu",
		...props
	});
}
function DropdownMenuTrigger({ ...props }) {
	return /* @__PURE__ */ jsx(Menu$1.Trigger, {
		"data-slot": "dropdown-menu-trigger",
		...props
	});
}
function DropdownMenuContent({ align = "start", alignOffset = 0, side = "bottom", sideOffset = 4, className, ...props }) {
	return /* @__PURE__ */ jsx(Menu$1.Portal, { children: /* @__PURE__ */ jsx(Menu$1.Positioner, {
		className: "isolate z-50 outline-none",
		align,
		alignOffset,
		side,
		sideOffset,
		children: /* @__PURE__ */ jsx(Menu$1.Popup, {
			"data-slot": "dropdown-menu-content",
			className: cn("z-50 max-h-(--available-height) w-(--anchor-width) min-w-32 origin-(--transform-origin) overflow-x-hidden overflow-y-auto rounded-lg bg-popover p-1 text-popover-foreground shadow-md ring-1 ring-foreground/10 duration-100 outline-none data-[side=bottom]:slide-in-from-top-2 data-[side=inline-end]:slide-in-from-left-2 data-[side=inline-start]:slide-in-from-right-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:overflow-hidden data-closed:fade-out-0 data-closed:zoom-out-95", className),
			...props
		})
	}) });
}
function DropdownMenuItem({ className, inset, variant = "default", ...props }) {
	return /* @__PURE__ */ jsx(Menu$1.Item, {
		"data-slot": "dropdown-menu-item",
		"data-inset": inset,
		"data-variant": variant,
		className: cn("group/dropdown-menu-item relative flex cursor-default items-center gap-1.5 rounded-md px-1.5 py-1 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground data-inset:pl-7 data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive dark:data-[variant=destructive]:focus:bg-destructive/20 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 data-[variant=destructive]:*:[svg]:text-destructive", className),
		...props
	});
}
//#endregion
//#region resources/js/components/theme-toggle.tsx
function ThemeToggle() {
	const { setAppearance } = useAppearance();
	return /* @__PURE__ */ jsxs(DropdownMenu, { children: [/* @__PURE__ */ jsx(DropdownMenuTrigger, {
		asChild: true,
		children: /* @__PURE__ */ jsxs(Button$1, {
			variant: "ghost",
			size: "icon",
			children: [
				/* @__PURE__ */ jsx(Sun, { className: "h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" }),
				/* @__PURE__ */ jsx(Moon, { className: "absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" }),
				/* @__PURE__ */ jsx("span", {
					className: "sr-only",
					children: "Toggle theme"
				})
			]
		})
	}), /* @__PURE__ */ jsxs(DropdownMenuContent, {
		align: "end",
		children: [
			/* @__PURE__ */ jsxs(DropdownMenuItem, {
				onClick: () => setAppearance("light"),
				children: [/* @__PURE__ */ jsx(Sun, { className: "mr-2 h-4 w-4" }), /* @__PURE__ */ jsx("span", { children: "Light" })]
			}),
			/* @__PURE__ */ jsxs(DropdownMenuItem, {
				onClick: () => setAppearance("dark"),
				children: [/* @__PURE__ */ jsx(Moon, { className: "mr-2 h-4 w-4" }), /* @__PURE__ */ jsx("span", { children: "Dark" })]
			}),
			/* @__PURE__ */ jsxs(DropdownMenuItem, {
				onClick: () => setAppearance("system"),
				children: [/* @__PURE__ */ jsx(Monitor, { className: "mr-2 h-4 w-4" }), /* @__PURE__ */ jsx("span", { children: "System" })]
			})
		]
	})] });
}
//#endregion
//#region resources/js/components/ui/misc/wrapper.tsx
function Wrapper({ className, as, children, ...props }) {
	return /* @__PURE__ */ jsx(as || "div", {
		className: cn$1("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8", className),
		...props,
		children
	});
}
Wrapper.displayName = "Wrapper";
//#endregion
//#region resources/js/components/logo.tsx
function Logo(props) {
	return /* @__PURE__ */ jsxs("svg", {
		id: "Layer_1",
		"data-name": "Layer 1",
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 301.9 65.2",
		...props,
		children: [
			/* @__PURE__ */ jsx("path", {
				fill: "#b92335",
				d: "M43.9,27.4h0l-9.1-9.1c-1.4-1.4-3.1-2-4.9-2H6.9C3.2,16.3.1,19.3.1,23.1s3,6.8,6.8,6.8h20.4l5.3,5.3v23.2c0,3.7,3,6.8,6.8,6.8s6.8-3,6.8-6.8v-26c0-1.9-.8-3.7-2.1-4.9h-.2v-.1ZM39.9,25.5h-.7.7ZM41.2,25.8h0ZM40.6,25.6h-.2.2Z"
			}),
			/* @__PURE__ */ jsx("path", {
				className: "fill-black dark:fill-white",
				d: "M88,29.8l3.2,3.2h15.6v-.8c0-1.9-.8-3.7-2.1-4.9h0l-9.1-9.1c-1.4-1.4-3.2-2-5.1-2h-34.6c-3.7,0-6.8,3-6.8,6.8v25.9c0,1.9.8,3.7,2.1,4.9h0l8.8,8.8.3.3c1.3,1.3,2.9,1.9,4.6,2h31.9c4.9,0,8.9-4,8.9-8.9v-3.8c0-.5-.4-.8-.8-.8h-36.9l-5.4-5.4h0v-16.3h25.4v.1Z"
			}),
			/* @__PURE__ */ jsx("path", {
				fill: "#b92335",
				d: "M92,11.1h0l-9.1-9.1c-1.4-1.4-3.2-2-5-2H6.8C3.1,0,0,3,0,6.8h0c0,3.8,3,6.9,6.8,6.9h86.8c-.4-1-.9-1.8-1.7-2.5h0l.1-.1Z"
			}),
			/* @__PURE__ */ jsx("path", {
				fill: "#b92335",
				d: "M120.6,1.1h26.9v7.1h-9v21.6h-8.9V8.2h-9V1.1Z"
			}),
			/* @__PURE__ */ jsx("path", {
				fill: "#b92335",
				d: "M166.5,25h-10.1l-1.4,4.7h-9l10.8-28.7h9.7l10.8,28.7h-9.3l-1.4-4.7h-.1ZM164.7,18.8l-3.2-10.3-3.1,10.3h6.3Z"
			}),
			/* @__PURE__ */ jsx("path", {
				fill: "#b92335",
				d: "M180.2,29.8V1.1h14.8c2.7,0,4.8.2,6.3.7,1.4.5,2.6,1.3,3.5,2.6.9,1.3,1.3,2.8,1.3,4.6s-.3,3-1,4.1-1.6,2.1-2.8,2.8c-.8.5-1.8.8-3.1,1.1,1.1.4,1.8.7,2.3,1.1.3.2.8.7,1.4,1.5s1,1.4,1.2,1.8l4.3,8.3h-10l-4.7-8.8c-.6-1.1-1.1-1.9-1.6-2.2-.6-.4-1.4-.7-2.2-.7h-.8v11.6h-8.9v.2ZM189.1,12.7h3.7c.4,0,1.2,0,2.3-.4.6,0,1.1-.4,1.4-.9.4-.5.6-1,.6-1.7s-.3-1.6-.9-2.1-1.7-.7-3.3-.7h-3.9v5.8h.1Z"
			}),
			/* @__PURE__ */ jsx("path", {
				fill: "#b92335",
				d: "M224.9,19.4v-6h13.7v12.2c-2.6,1.8-4.9,3-7,3.6-2,.6-4.4,1-7.2,1s-6.2-.6-8.3-1.7-3.8-2.9-5-5.2-1.8-4.9-1.8-7.9.6-5.9,1.9-8.2c1.3-2.3,3.2-4.1,5.7-5.3,1.9-.9,4.6-1.4,7.8-1.4s5.5.3,7.1.9,2.9,1.5,3.9,2.7,1.8,2.7,2.3,4.6l-8.5,1.5c-.4-1.1-.9-1.9-1.8-2.5-.8-.6-1.9-.9-3.2-.9-1.9,0-3.5.7-4.6,2-1.1,1.3-1.7,3.5-1.7,6.4s.6,5.3,1.8,6.7c1.2,1.3,2.8,2,4.9,2s1.9,0,2.8-.4c.9-.3,1.9-.8,3.1-1.5v-2.7h-5.9v.1Z"
			}),
			/* @__PURE__ */ jsx("path", {
				fill: "#b92335",
				d: "M243.8,1.1h23.8v6.1h-14.9v4.6h13.8v5.8h-13.8v5.7h15.3v6.5h-24.2V1.1h0Z"
			}),
			/* @__PURE__ */ jsx("path", {
				fill: "#b92335",
				d: "M270.8,1.1h26.9v7.1h-9v21.6h-8.9V8.2h-9V1.1Z"
			}),
			/* @__PURE__ */ jsx("path", {
				fill: "#b92335",
				d: "M141.7,53.1l7.7,2.3c-.5,2.2-1.3,4-2.5,5.4s-2.5,2.6-4.2,3.3-3.8,1.1-6.3,1.1-5.6-.5-7.6-1.4-3.7-2.5-5.1-4.8-2.1-5.2-2.1-8.7,1.3-8.4,3.8-10.9,6.1-3.8,10.7-3.8,6.4.7,8.5,2.2,3.6,3.7,4.6,6.7l-7.8,1.7c-.3-.9-.6-1.5-.9-1.9-.5-.7-1.1-1.2-1.8-1.6s-1.5-.5-2.4-.5c-2,0-3.5.8-4.6,2.4-.8,1.2-1.2,3.1-1.2,5.6s.5,5.3,1.4,6.5c1,1.2,2.3,1.8,4.1,1.8s3-.5,3.8-1.4c.9-.9,1.5-2.3,1.9-4.1h0v.1Z"
			}),
			/* @__PURE__ */ jsx("path", {
				fill: "#b92335",
				d: "M153.8,64.8v-28.6h14.7c2.7,0,4.8.2,6.3.7,1.4.5,2.6,1.3,3.5,2.6s1.3,2.8,1.3,4.6-.3,3-1,4.1-1.6,2.1-2.8,2.8c-.8.5-1.8.8-3.1,1.1,1.1.4,1.8.7,2.3,1.1.3.2.8.7,1.4,1.5s1,1.4,1.2,1.8l4.3,8.3h-10l-4.7-8.7c-.6-1.1-1.1-1.9-1.6-2.2-.6-.4-1.4-.7-2.2-.7h-.8v11.6h-8.9.1ZM162.6,47.9h3.7c.4,0,1.2,0,2.3-.4.6,0,1.1-.4,1.4-.9s.6-1,.6-1.7-.3-1.6-.9-2.1c-.6-.5-1.7-.7-3.3-.7h-3.9v5.8h.1Z"
			}),
			/* @__PURE__ */ jsx("path", {
				fill: "#b92335",
				d: "M202.2,60.1h-10l-1.4,4.7h-9l10.7-28.6h9.6l10.7,28.6h-9.2l-1.4-4.7h0ZM200.4,53.9l-3.2-10.3-3.1,10.3h6.3Z"
			}),
			/* @__PURE__ */ jsx("path", {
				fill: "#b92335",
				d: "M215.8,36.3h8.2l10.8,15.8v-15.8h8.3v28.6h-8.3l-10.7-15.7v15.7h-8.3v-28.6Z"
			}),
			/* @__PURE__ */ jsx("path", {
				fill: "#b92335",
				d: "M248.9,36.3h23.6v6.1h-14.8v4.5h13.7v5.8h-13.7v5.6h15.2v6.5h-24.1v-28.6h0l.1.1Z"
			}),
			/* @__PURE__ */ jsx("path", {
				fill: "#b92335",
				d: "M276.2,55.4l8.4-.5c.2,1.4.6,2.4,1.1,3.1.9,1.2,2.2,1.7,3.9,1.7s2.2-.3,2.9-.9,1-1.3,1-2.1-.3-1.4-1-2c-.6-.6-2.2-1.1-4.5-1.7-3.9-.9-6.6-2-8.3-3.5-1.7-1.4-2.5-3.3-2.5-5.5s.4-2.9,1.3-4.2,2.1-2.3,3.8-3.1c1.7-.7,4-1.1,7-1.1s6.4.7,8.3,2c1.9,1.4,3.1,3.5,3.4,6.5l-8.3.5c-.2-1.3-.7-2.2-1.4-2.8-.7-.6-1.7-.9-2.9-.9s-1.8.2-2.3.7c-.5.4-.8,1-.8,1.6s.2.9.6,1.2c.4.4,1.4.7,3,1.1,3.9.8,6.6,1.7,8.3,2.5,1.7.9,2.9,1.9,3.6,3.2s1.1,2.7,1.1,4.2-.5,3.5-1.5,5.1c-1,1.5-2.4,2.7-4.2,3.5-1.8.8-4.1,1.2-6.9,1.2-4.9,0-8.2-.9-10.1-2.8s-2.9-4.2-3.2-7.1h.2v.1Z"
			})
		]
	});
}
//#endregion
//#region resources/js/components/ui/sheet.tsx
function Sheet({ ...props }) {
	return /* @__PURE__ */ jsx(Dialog.Root, {
		"data-slot": "sheet",
		...props
	});
}
function SheetTrigger({ ...props }) {
	return /* @__PURE__ */ jsx(Dialog.Trigger, {
		"data-slot": "sheet-trigger",
		...props
	});
}
function SheetPortal({ ...props }) {
	return /* @__PURE__ */ jsx(Dialog.Portal, {
		"data-slot": "sheet-portal",
		...props
	});
}
function SheetOverlay({ className, ...props }) {
	return /* @__PURE__ */ jsx(Dialog.Backdrop, {
		"data-slot": "sheet-overlay",
		className: cn("fixed inset-0 z-50 bg-black/10 transition-opacity duration-150 data-ending-style:opacity-0 data-starting-style:opacity-0 supports-backdrop-filter:backdrop-blur-xs", className),
		...props
	});
}
function SheetContent({ className, children, side = "right", showCloseButton = true, ...props }) {
	return /* @__PURE__ */ jsxs(SheetPortal, { children: [/* @__PURE__ */ jsx(SheetOverlay, {}), /* @__PURE__ */ jsxs(Dialog.Popup, {
		"data-slot": "sheet-content",
		"data-side": side,
		className: cn("fixed z-50 flex flex-col gap-4 bg-popover bg-clip-padding text-sm text-popover-foreground shadow-lg transition duration-200 ease-in-out data-ending-style:opacity-0 data-starting-style:opacity-0 data-[side=bottom]:inset-x-0 data-[side=bottom]:bottom-0 data-[side=bottom]:h-auto data-[side=bottom]:border-t data-[side=bottom]:data-ending-style:translate-y-[2.5rem] data-[side=bottom]:data-starting-style:translate-y-[2.5rem] data-[side=left]:inset-y-0 data-[side=left]:left-0 data-[side=left]:h-full data-[side=left]:w-3/4 data-[side=left]:border-r data-[side=left]:data-ending-style:translate-x-[-2.5rem] data-[side=left]:data-starting-style:translate-x-[-2.5rem] data-[side=right]:inset-y-0 data-[side=right]:right-0 data-[side=right]:h-full data-[side=right]:w-3/4 data-[side=right]:border-l data-[side=right]:data-ending-style:translate-x-[2.5rem] data-[side=right]:data-starting-style:translate-x-[2.5rem] data-[side=top]:inset-x-0 data-[side=top]:top-0 data-[side=top]:h-auto data-[side=top]:border-b data-[side=top]:data-ending-style:translate-y-[-2.5rem] data-[side=top]:data-starting-style:translate-y-[-2.5rem] data-[side=left]:sm:max-w-sm data-[side=right]:sm:max-w-sm", className),
		...props,
		children: [children, showCloseButton && /* @__PURE__ */ jsxs(Dialog.Close, {
			"data-slot": "sheet-close",
			render: /* @__PURE__ */ jsx(Button$1, {
				variant: "ghost",
				className: "absolute top-3 right-3",
				size: "icon-sm"
			}),
			children: [/* @__PURE__ */ jsx(XIcon, {}), /* @__PURE__ */ jsx("span", {
				className: "sr-only",
				children: "Close"
			})]
		})]
	})] });
}
function SheetTitle({ className, ...props }) {
	return /* @__PURE__ */ jsx(Dialog.Title, {
		"data-slot": "sheet-title",
		className: cn("font-heading text-base font-medium text-foreground", className),
		...props
	});
}
function SheetDescription({ className, ...props }) {
	return /* @__PURE__ */ jsx(Dialog.Description, {
		"data-slot": "sheet-description",
		className: cn("text-sm text-muted-foreground", className),
		...props
	});
}
//#endregion
//#region resources/js/wayfinder/index.ts
var getValue = (value) => {
	if (value === true) return "1";
	if (value === false) return "0";
	return value.toString();
};
var addNestedParams = (obj, prefix, params) => {
	Object.entries(obj).forEach(([subKey, value]) => {
		if (value === void 0) return;
		const paramKey = `${prefix}[${subKey}]`;
		if (Array.isArray(value)) value.forEach((v) => params.append(`${paramKey}[]`, getValue(v)));
		else if (value !== null && typeof value === "object") addNestedParams(value, paramKey, params);
		else if ([
			"string",
			"number",
			"boolean"
		].includes(typeof value)) params.set(paramKey, getValue(value));
	});
};
var clearParamFamily = (params, key) => {
	const toDelete = /* @__PURE__ */ new Set();
	params.forEach((_, paramKey) => {
		if (paramKey === key || paramKey.startsWith(`${key}[`)) toDelete.add(paramKey);
	});
	toDelete.forEach((paramKey) => params.delete(paramKey));
};
var queryParams = (options) => {
	if (!options || !options.query && !options.mergeQuery) return "";
	const query = options.query ?? options.mergeQuery;
	const includeExisting = options.mergeQuery !== void 0;
	const params = new URLSearchParams(includeExisting && typeof window !== "undefined" ? window.location.search : "");
	for (const key in query) {
		const queryValue = query[key];
		if (includeExisting) clearParamFamily(params, key);
		if (queryValue === void 0 || queryValue === null) continue;
		if (Array.isArray(queryValue)) queryValue.forEach((value) => {
			params.append(`${key}[]`, value.toString());
		});
		else if (typeof queryValue === "object") addNestedParams(queryValue, key, params);
		else params.set(key, getValue(queryValue));
	}
	const str = params.toString();
	return str.length > 0 ? `?${str}` : "";
};
//#endregion
//#region resources/js/routes/index.ts
/**
* @see \App\Http\Controllers\HomeIndexController::__invoke
* @see app/Http/Controllers/HomeIndexController.php:13
* @route '/'
*/
var home = (options) => ({
	url: home.url(options),
	method: "get"
});
home.definition = {
	methods: ["get", "head"],
	url: "/"
};
/**
* @see \App\Http\Controllers\HomeIndexController::__invoke
* @see app/Http/Controllers/HomeIndexController.php:13
* @route '/'
*/
home.url = (options) => {
	return home.definition.url + queryParams(options);
};
/**
* @see \App\Http\Controllers\HomeIndexController::__invoke
* @see app/Http/Controllers/HomeIndexController.php:13
* @route '/'
*/
home.get = (options) => ({
	url: home.url(options),
	method: "get"
});
/**
* @see \App\Http\Controllers\HomeIndexController::__invoke
* @see app/Http/Controllers/HomeIndexController.php:13
* @route '/'
*/
home.head = (options) => ({
	url: home.url(options),
	method: "head"
});
/**
* @see \App\Http\Controllers\AboutUsIndexController::__invoke
* @see app/Http/Controllers/AboutUsIndexController.php:13
* @route '/about-us'
*/
var aboutUs = (options) => ({
	url: aboutUs.url(options),
	method: "get"
});
aboutUs.definition = {
	methods: ["get", "head"],
	url: "/about-us"
};
/**
* @see \App\Http\Controllers\AboutUsIndexController::__invoke
* @see app/Http/Controllers/AboutUsIndexController.php:13
* @route '/about-us'
*/
aboutUs.url = (options) => {
	return aboutUs.definition.url + queryParams(options);
};
/**
* @see \App\Http\Controllers\AboutUsIndexController::__invoke
* @see app/Http/Controllers/AboutUsIndexController.php:13
* @route '/about-us'
*/
aboutUs.get = (options) => ({
	url: aboutUs.url(options),
	method: "get"
});
/**
* @see \App\Http\Controllers\AboutUsIndexController::__invoke
* @see app/Http/Controllers/AboutUsIndexController.php:13
* @route '/about-us'
*/
aboutUs.head = (options) => ({
	url: aboutUs.url(options),
	method: "head"
});
/**
* @see \App\Http\Controllers\SafetyIndexController::__invoke
* @see app/Http/Controllers/SafetyIndexController.php:14
* @route '/safety'
*/
var safety = (options) => ({
	url: safety.url(options),
	method: "get"
});
safety.definition = {
	methods: ["get", "head"],
	url: "/safety"
};
/**
* @see \App\Http\Controllers\SafetyIndexController::__invoke
* @see app/Http/Controllers/SafetyIndexController.php:14
* @route '/safety'
*/
safety.url = (options) => {
	return safety.definition.url + queryParams(options);
};
/**
* @see \App\Http\Controllers\SafetyIndexController::__invoke
* @see app/Http/Controllers/SafetyIndexController.php:14
* @route '/safety'
*/
safety.get = (options) => ({
	url: safety.url(options),
	method: "get"
});
/**
* @see \App\Http\Controllers\SafetyIndexController::__invoke
* @see app/Http/Controllers/SafetyIndexController.php:14
* @route '/safety'
*/
safety.head = (options) => ({
	url: safety.url(options),
	method: "head"
});
/**
* @see \App\Http\Controllers\ContactUsIndexController::__invoke
* @see app/Http/Controllers/ContactUsIndexController.php:13
* @route '/contact-us'
*/
var contactUs = (options) => ({
	url: contactUs.url(options),
	method: "get"
});
contactUs.definition = {
	methods: ["get", "head"],
	url: "/contact-us"
};
/**
* @see \App\Http\Controllers\ContactUsIndexController::__invoke
* @see app/Http/Controllers/ContactUsIndexController.php:13
* @route '/contact-us'
*/
contactUs.url = (options) => {
	return contactUs.definition.url + queryParams(options);
};
/**
* @see \App\Http\Controllers\ContactUsIndexController::__invoke
* @see app/Http/Controllers/ContactUsIndexController.php:13
* @route '/contact-us'
*/
contactUs.get = (options) => ({
	url: contactUs.url(options),
	method: "get"
});
/**
* @see \App\Http\Controllers\ContactUsIndexController::__invoke
* @see app/Http/Controllers/ContactUsIndexController.php:13
* @route '/contact-us'
*/
contactUs.head = (options) => ({
	url: contactUs.url(options),
	method: "head"
});
/**
* @see \App\Http\Controllers\PrivacyPolicyController::__invoke
* @see app/Http/Controllers/PrivacyPolicyController.php:14
* @route '/privacy-policy'
*/
var privacyPolicy = (options) => ({
	url: privacyPolicy.url(options),
	method: "get"
});
privacyPolicy.definition = {
	methods: ["get", "head"],
	url: "/privacy-policy"
};
/**
* @see \App\Http\Controllers\PrivacyPolicyController::__invoke
* @see app/Http/Controllers/PrivacyPolicyController.php:14
* @route '/privacy-policy'
*/
privacyPolicy.url = (options) => {
	return privacyPolicy.definition.url + queryParams(options);
};
/**
* @see \App\Http\Controllers\PrivacyPolicyController::__invoke
* @see app/Http/Controllers/PrivacyPolicyController.php:14
* @route '/privacy-policy'
*/
privacyPolicy.get = (options) => ({
	url: privacyPolicy.url(options),
	method: "get"
});
/**
* @see \App\Http\Controllers\PrivacyPolicyController::__invoke
* @see app/Http/Controllers/PrivacyPolicyController.php:14
* @route '/privacy-policy'
*/
privacyPolicy.head = (options) => ({
	url: privacyPolicy.url(options),
	method: "head"
});
/**
* @see \App\Http\Controllers\TermsOfServiceController::__invoke
* @see app/Http/Controllers/TermsOfServiceController.php:14
* @route '/terms-of-service'
*/
var termsOfService = (options) => ({
	url: termsOfService.url(options),
	method: "get"
});
termsOfService.definition = {
	methods: ["get", "head"],
	url: "/terms-of-service"
};
/**
* @see \App\Http\Controllers\TermsOfServiceController::__invoke
* @see app/Http/Controllers/TermsOfServiceController.php:14
* @route '/terms-of-service'
*/
termsOfService.url = (options) => {
	return termsOfService.definition.url + queryParams(options);
};
/**
* @see \App\Http\Controllers\TermsOfServiceController::__invoke
* @see app/Http/Controllers/TermsOfServiceController.php:14
* @route '/terms-of-service'
*/
termsOfService.get = (options) => ({
	url: termsOfService.url(options),
	method: "get"
});
/**
* @see \App\Http\Controllers\TermsOfServiceController::__invoke
* @see app/Http/Controllers/TermsOfServiceController.php:14
* @route '/terms-of-service'
*/
termsOfService.head = (options) => ({
	url: termsOfService.url(options),
	method: "head"
});
/**
* @see \App\Http\Controllers\SitemapController::__invoke
* @see app/Http/Controllers/SitemapController.php:13
* @route '/sitemap.xml'
*/
var sitemap = (options) => ({
	url: sitemap.url(options),
	method: "get"
});
sitemap.definition = {
	methods: ["get", "head"],
	url: "/sitemap.xml"
};
/**
* @see \App\Http\Controllers\SitemapController::__invoke
* @see app/Http/Controllers/SitemapController.php:13
* @route '/sitemap.xml'
*/
sitemap.url = (options) => {
	return sitemap.definition.url + queryParams(options);
};
/**
* @see \App\Http\Controllers\SitemapController::__invoke
* @see app/Http/Controllers/SitemapController.php:13
* @route '/sitemap.xml'
*/
sitemap.get = (options) => ({
	url: sitemap.url(options),
	method: "get"
});
/**
* @see \App\Http\Controllers\SitemapController::__invoke
* @see app/Http/Controllers/SitemapController.php:13
* @route '/sitemap.xml'
*/
sitemap.head = (options) => ({
	url: sitemap.url(options),
	method: "head"
});
//#endregion
//#region resources/js/components/navigation.tsx
var navLinks = [
	{
		name: "Home",
		href: home.url()
	},
	{
		name: "About Us",
		href: aboutUs.url()
	},
	{
		name: "Safety",
		href: safety.url()
	},
	{
		name: "Contact Us",
		href: contactUs.url()
	}
];
function Navigation() {
	const { url } = usePage();
	const currentPath = (url.split("?")[0] || "/").replace(/\/+$/, "") || "/";
	return /* @__PURE__ */ jsx("nav", {
		className: "border-b border-border bg-background/75 backdrop-blur-md fixed w-full top-0 z-40",
		children: /* @__PURE__ */ jsx(Wrapper, { children: /* @__PURE__ */ jsxs("div", {
			className: "flex justify-between h-16 items-center",
			children: [/* @__PURE__ */ jsx("div", {
				className: "flex items-center",
				children: /* @__PURE__ */ jsx(Link, {
					href: home.url(),
					className: "flex items-center",
					children: /* @__PURE__ */ jsx(Logo, { className: "h-8 w-auto" })
				})
			}), /* @__PURE__ */ jsxs("div", {
				className: "flex items-center gap-6",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "hidden md:flex gap-2 text-sm font-medium items-center",
						children: navLinks.map((link) => {
							const targetPath = link.href.replace(/\/+$/, "") || "/";
							const isActive = targetPath === "/" ? currentPath === "/" : currentPath === targetPath || currentPath.startsWith(targetPath + "/");
							return /* @__PURE__ */ jsx(Link, {
								href: link.href,
								className: cn$1("px-4 py-1.5 rounded-lg text-sm transition-colors", isActive ? "bg-primary text-primary-foreground font-semibold shadow-xs" : "text-muted-foreground hover:text-foreground hover:bg-muted/50 font-medium"),
								children: link.name
							}, link.name);
						})
					}),
					/* @__PURE__ */ jsx(ThemeToggle, {}),
					/* @__PURE__ */ jsx("div", {
						className: "md:hidden",
						children: /* @__PURE__ */ jsxs(Sheet, { children: [/* @__PURE__ */ jsx(SheetTrigger, {
							className: "flex items-center justify-center p-2",
							children: /* @__PURE__ */ jsx(Menu, { className: "h-6 w-6" })
						}), /* @__PURE__ */ jsxs(SheetContent, {
							side: "right",
							className: "p-8",
							children: [
								/* @__PURE__ */ jsx(SheetTitle, {
									className: "sr-only",
									children: "Menu"
								}),
								/* @__PURE__ */ jsx(SheetDescription, {
									className: "sr-only",
									children: "Navigation Menu"
								}),
								/* @__PURE__ */ jsx("div", {
									className: "flex items-center mb-8 mt-4",
									children: /* @__PURE__ */ jsx(Logo, { className: "h-8 w-auto" })
								}),
								/* @__PURE__ */ jsx("div", {
									className: "flex flex-col gap-2",
									children: navLinks.map((link) => {
										const targetPath = link.href.replace(/\/+$/, "") || "/";
										const isActive = targetPath === "/" ? currentPath === "/" : currentPath === targetPath || currentPath.startsWith(targetPath + "/");
										return /* @__PURE__ */ jsx(Link, {
											href: link.href,
											className: cn$1("text-base transition-colors py-2.5 px-4 rounded-xl font-medium", isActive ? "bg-primary text-primary-foreground font-semibold shadow-xs" : "text-muted-foreground hover:text-foreground hover:bg-muted/50"),
											children: link.name
										}, link.name);
									})
								})
							]
						})] })
					})
				]
			})]
		}) })
	});
}
//#endregion
//#region resources/js/components/footer.tsx
function Footer() {
	return /* @__PURE__ */ jsx("footer", {
		className: "border-t border-border bg-card/60 backdrop-blur-md pt-12 pb-8 text-foreground transition-colors",
		children: /* @__PURE__ */ jsxs(Wrapper, { children: [/* @__PURE__ */ jsxs("div", {
			className: "grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-10 items-start",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "md:col-span-5 space-y-4",
					children: [
						/* @__PURE__ */ jsx(Link, {
							href: home.url(),
							className: "inline-block",
							children: /* @__PURE__ */ jsx(Logo, { className: "h-8 w-auto" })
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-muted-foreground text-sm leading-relaxed max-w-sm",
							children: "Specialized mobile crane hire, heavy rigging, and precision lifting services across Cape Town and South Africa."
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-3 pt-1",
							children: [/* @__PURE__ */ jsx("a", {
								href: "https://www.facebook.com/Targetcranes/",
								target: "_blank",
								rel: "noopener noreferrer",
								"aria-label": "Target Cranes on Facebook",
								className: "w-9 h-9 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground text-muted-foreground flex items-center justify-center transition-all hover:scale-105 shadow-xs",
								children: /* @__PURE__ */ jsx(FacebookIcon, { className: "w-4 h-4 fill-current" })
							}), /* @__PURE__ */ jsx("a", {
								href: "https://wa.me/27636737500",
								target: "_blank",
								rel: "noopener noreferrer",
								"aria-label": "Target Cranes on WhatsApp",
								className: "w-9 h-9 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground text-muted-foreground flex items-center justify-center transition-all hover:scale-105 shadow-xs",
								children: /* @__PURE__ */ jsx(WhatsAppIcon, { className: "w-4 h-4 fill-current" })
							})]
						})
					]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "md:col-span-3 space-y-3",
					children: [/* @__PURE__ */ jsx("h4", {
						className: "text-xs font-bold uppercase tracking-widest text-primary font-heading",
						children: "Navigation"
					}), /* @__PURE__ */ jsxs("ul", {
						className: "space-y-2 text-sm font-medium",
						children: [
							/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
								href: home.url(),
								className: "text-muted-foreground hover:text-primary transition-colors",
								children: "Home"
							}) }),
							/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
								href: aboutUs.url(),
								className: "text-muted-foreground hover:text-primary transition-colors",
								children: "About Us"
							}) }),
							/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
								href: safety.url(),
								className: "text-muted-foreground hover:text-primary transition-colors",
								children: "Safety"
							}) }),
							/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
								href: contactUs.url(),
								className: "text-muted-foreground hover:text-primary transition-colors",
								children: "Contact Us"
							}) })
						]
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "md:col-span-4 space-y-3",
					children: [/* @__PURE__ */ jsx("h4", {
						className: "text-xs font-bold uppercase tracking-widest text-primary font-heading",
						children: "Contact"
					}), /* @__PURE__ */ jsxs("ul", {
						className: "space-y-2.5 text-sm",
						children: [
							/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", {
								href: "tel:0636737500",
								className: "group inline-flex items-center gap-2.5 text-muted-foreground hover:text-primary transition-colors",
								children: [/* @__PURE__ */ jsx(Phone, { className: "w-4 h-4 text-primary shrink-0" }), /* @__PURE__ */ jsx("span", {
									className: "font-semibold text-foreground group-hover:text-primary transition-colors",
									children: "063 673 7500"
								})]
							}) }),
							/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", {
								href: "mailto:enquiries@targetcranes.co.za",
								className: "group inline-flex items-center gap-2.5 text-muted-foreground hover:text-primary transition-colors",
								children: [/* @__PURE__ */ jsx(Mail, { className: "w-4 h-4 text-primary shrink-0" }), /* @__PURE__ */ jsx("span", {
									className: "font-semibold text-foreground group-hover:text-primary transition-colors break-all",
									children: "enquiries@targetcranes.co.za"
								})]
							}) }),
							/* @__PURE__ */ jsxs("li", {
								className: "flex items-center gap-2.5 text-muted-foreground",
								children: [/* @__PURE__ */ jsx(MapPin, { className: "w-4 h-4 text-primary shrink-0" }), /* @__PURE__ */ jsx("span", { children: "Fabriek St, Bellville South, Cape Town, 7530" })]
							})
						]
					})]
				})
			]
		}), /* @__PURE__ */ jsxs("div", {
			className: "border-t border-border pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left",
				children: [/* @__PURE__ */ jsxs("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Target Cranes (Pty) Ltd. All rights reserved."
				] }), /* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-3",
					children: [
						/* @__PURE__ */ jsx(Link, {
							href: privacyPolicy.url(),
							className: "hover:text-primary transition-colors hover:underline",
							children: "Privacy Policy"
						}),
						/* @__PURE__ */ jsx("span", { children: "•" }),
						/* @__PURE__ */ jsx(Link, {
							href: termsOfService.url(),
							className: "hover:text-primary transition-colors hover:underline",
							children: "Terms of Service"
						})
					]
				})]
			}), /* @__PURE__ */ jsxs("p", {
				className: "flex items-center gap-1",
				children: [
					"Designed and developed by",
					" ",
					/* @__PURE__ */ jsx("a", {
						href: "https://designbycode.co.za",
						target: "_blank",
						rel: "noopener noreferrer",
						className: "font-semibold text-foreground hover:text-primary transition-colors underline-offset-4 hover:underline",
						children: "designbycode"
					})
				]
			})]
		})] })
	});
}
function FacebookIcon({ className }) {
	return /* @__PURE__ */ jsx("svg", {
		viewBox: "0 0 24 24",
		className,
		fill: "currentColor",
		"aria-hidden": "true",
		children: /* @__PURE__ */ jsx("path", { d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" })
	});
}
function WhatsAppIcon({ className }) {
	return /* @__PURE__ */ jsx("svg", {
		viewBox: "0 0 24 24",
		className,
		fill: "currentColor",
		"aria-hidden": "true",
		children: /* @__PURE__ */ jsx("path", { d: "M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.64c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.03-1.25-.75-.67-1.26-1.5-1.41-1.75-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.87.85-.87 2.08s.89 2.42 1.01 2.59c.13.17 1.76 2.69 4.26 3.77.6.26 1.06.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.23-.17-.48-.29Z" })
	});
}
//#endregion
//#region resources/js/components/ui/swipe-title.tsx
function SwipeTitle({ children, className = "" }) {
	const [isRevealed, setIsRevealed] = useState(false);
	const ref = useRef(null);
	useEffect(() => {
		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) setIsRevealed(true);
			else setIsRevealed(false);
		}, { threshold: .1 });
		if (ref.current) observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);
	return /* @__PURE__ */ jsx("div", {
		ref,
		className: `flex flex-col items-start ${className}`,
		children: React.Children.map(children, (child, index) => {
			if (React.isValidElement(child)) return React.cloneElement(child, {
				isRevealed,
				delay: index
			});
			return child;
		})
	});
}
function SwipeLine({ children, delay = 0, isRevealed = false, className = "" }) {
	const baseDelay = delay * 200;
	return /* @__PURE__ */ jsxs("span", {
		className: `relative inline-block overflow-hidden pb-1 ${className}`,
		children: [
			/* @__PURE__ */ jsx("span", {
				className: `block transition-opacity duration-0`,
				style: {
					opacity: isRevealed ? 1 : 0,
					transitionDelay: isRevealed ? `${baseDelay + 150 + 500}ms` : "0ms"
				},
				children
			}),
			/* @__PURE__ */ jsx("span", {
				className: `absolute inset-0 bg-foreground/90 z-10 transition-transform duration-1000 ease-in-out ${isRevealed ? "translate-x-full" : "-translate-x-full"}`,
				style: { transitionDelay: isRevealed ? `${baseDelay}ms` : "0ms" }
			}),
			/* @__PURE__ */ jsx("span", {
				className: `absolute inset-0 bg-linear-to-r from-primary to-primary z-20 transition-transform duration-1000 ease-in-out ${isRevealed ? "translate-x-full" : "-translate-x-full"}`,
				style: { transitionDelay: isRevealed ? `${baseDelay + 150}ms` : "0ms" }
			})
		]
	});
}
//#endregion
//#region resources/js/components/Grainient.tsx
var parseColor = (colorStr) => {
	if (typeof document !== "undefined") {
		const div = document.createElement("div");
		div.style.color = colorStr;
		div.style.display = "none";
		document.body.appendChild(div);
		const computedStr = window.getComputedStyle(div).color;
		document.body.removeChild(div);
		const canvas = document.createElement("canvas");
		canvas.width = 1;
		canvas.height = 1;
		const ctx = canvas.getContext("2d", { willReadFrequently: true });
		if (ctx) {
			ctx.fillStyle = computedStr;
			ctx.fillRect(0, 0, 1, 1);
			const data = ctx.getImageData(0, 0, 1, 1).data;
			return [
				data[0] / 255,
				data[1] / 255,
				data[2] / 255
			];
		}
	}
	return [
		1,
		1,
		1
	];
};
var vertex = `#version 300 es
in vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`;
var fragment = `#version 300 es
precision highp float;
uniform vec2 iResolution;
uniform float iTime;
uniform float uTimeSpeed;
uniform float uColorBalance;
uniform float uWarpStrength;
uniform float uWarpFrequency;
uniform float uWarpSpeed;
uniform float uWarpAmplitude;
uniform float uBlendAngle;
uniform float uBlendSoftness;
uniform float uRotationAmount;
uniform float uNoiseScale;
uniform float uGrainAmount;
uniform float uGrainScale;
uniform float uGrainAnimated;
uniform float uContrast;
uniform float uGamma;
uniform float uSaturation;
uniform vec2 uCenterOffset;
uniform float uZoom;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;
uniform float uLightMode;
out vec4 fragColor;
#define S(a,b,t) smoothstep(a,b,t)
mat2 Rot(float a){float s=sin(a),c=cos(a);return mat2(c,-s,s,c);} 
vec2 hash(vec2 p){p=vec2(dot(p,vec2(2127.1,81.17)),dot(p,vec2(1269.5,283.37)));return fract(sin(p)*43758.5453);} 
float noise(vec2 p){vec2 i=floor(p),f=fract(p),u=f*f*(3.0-2.0*f);float n=mix(mix(dot(-1.0+2.0*hash(i+vec2(0.0,0.0)),f-vec2(0.0,0.0)),dot(-1.0+2.0*hash(i+vec2(1.0,0.0)),f-vec2(1.0,0.0)),u.x),mix(dot(-1.0+2.0*hash(i+vec2(0.0,1.0)),f-vec2(0.0,1.0)),dot(-1.0+2.0*hash(i+vec2(1.0,1.0)),f-vec2(1.0,1.0)),u.x),u.y);return 0.5+0.5*n;}
void mainImage(out vec4 o, vec2 C){
  float t=iTime*uTimeSpeed;
  vec2 uv=C/iResolution.xy;
  float ratio=iResolution.x/iResolution.y;
  vec2 tuv=uv-0.5+uCenterOffset;
  tuv/=max(uZoom,0.001);

  float degree=noise(vec2(t*0.1,tuv.x*tuv.y)*uNoiseScale);
  tuv.y*=1.0/ratio;
  tuv*=Rot(radians((degree-0.5)*uRotationAmount+180.0));
  tuv.y*=ratio;

  float frequency=uWarpFrequency;
  float ws=max(uWarpStrength,0.001);
  float amplitude=uWarpAmplitude/ws;
  float warpTime=t*uWarpSpeed;
  tuv.x+=sin(tuv.y*frequency+warpTime)/amplitude;
  tuv.y+=sin(tuv.x*(frequency*1.5)+warpTime)/(amplitude*0.5);

  vec3 colLav=uColor1;
  vec3 colOrg=uColor2;
  vec3 colDark=uColor3;
  float b=uColorBalance;
  float s=max(uBlendSoftness,0.0);
  mat2 blendRot=Rot(radians(uBlendAngle));
  float blendX=(tuv*blendRot).x;
  float edge0=-0.3-b-s;
  float edge1=0.2-b+s;
  float v0=0.5-b+s;
  float v1=-0.3-b-s;
  vec3 layer1=mix(colDark,colOrg,S(edge0,edge1,blendX));
  vec3 layer2=mix(colOrg,colLav,S(edge0,edge1,blendX));
  vec3 col=mix(layer1,layer2,S(v0,v1,tuv.y));

  vec2 grainUv=uv*max(uGrainScale,0.001);
  if(uGrainAnimated>0.5){grainUv+=vec2(iTime*0.05);} 
  float grain=fract(sin(dot(grainUv,vec2(12.9898,78.233)))*43758.5453);
  col+=(grain-0.5)*uGrainAmount;

  col=(col-0.5)*uContrast+0.5;
  float luma=dot(col,vec3(0.2126,0.7152,0.0722));
  col=mix(vec3(luma),col,uSaturation);
  col=pow(max(col,0.0),vec3(1.0/max(uGamma,0.001)));
  col=clamp(col,0.0,1.0);
  if(uLightMode>0.5){
    float energy=max(max(col.r,col.g),col.b);
    vec3 hue=col/max(energy,0.001);
    float chroma=length(col-vec3(dot(col,vec3(0.333333))));
    float coverage=clamp(0.12+chroma*1.15+energy*0.18,0.0,0.88);
    col=mix(vec3(1.0),clamp(hue*0.58+col*0.18,0.0,1.0),coverage);
  }

  o=vec4(col,1.0);
}
void main(){
  vec4 o=vec4(0.0);
  mainImage(o,gl_FragCoord.xy);
  fragColor=o;
}
`;
var ctxMap = /* @__PURE__ */ new WeakMap();
var Grainient = ({ timeSpeed = .25, colorBalance = 0, warpStrength = 1, warpFrequency = 5, warpSpeed = 2, warpAmplitude = 50, blendAngle = 0, blendSoftness = .05, rotationAmount = 500, noiseScale = 2, grainAmount = .1, grainScale = 2, grainAnimated = false, contrast = 1.5, gamma = 1, saturation = 1, centerX = 0, centerY = 0, zoom = .9, color1 = "#FF9FFC", color2 = "#5227FF", color3 = "#B497CF", lightMode = false, className = "" }) => {
	const containerRef = useRef(null);
	useEffect(() => {
		const container = containerRef.current;
		if (!container) return;
		const renderer = new Renderer({
			webgl: 2,
			alpha: true,
			antialias: false,
			dpr: Math.min(window.devicePixelRatio || 1, 2)
		});
		const gl = renderer.gl;
		const canvas = gl.canvas;
		canvas.style.width = "100%";
		canvas.style.height = "100%";
		canvas.style.display = "block";
		container.appendChild(canvas);
		const geometry = new Triangle(gl);
		const program = new Program(gl, {
			vertex,
			fragment,
			uniforms: {
				iTime: { value: 0 },
				iResolution: { value: new Float32Array([1, 1]) },
				uTimeSpeed: { value: .25 },
				uColorBalance: { value: 0 },
				uWarpStrength: { value: 1 },
				uWarpFrequency: { value: 5 },
				uWarpSpeed: { value: 2 },
				uWarpAmplitude: { value: 50 },
				uBlendAngle: { value: 0 },
				uBlendSoftness: { value: .05 },
				uRotationAmount: { value: 500 },
				uNoiseScale: { value: 2 },
				uGrainAmount: { value: .1 },
				uGrainScale: { value: 2 },
				uGrainAnimated: { value: 0 },
				uContrast: { value: 1.5 },
				uGamma: { value: 1 },
				uSaturation: { value: 1 },
				uCenterOffset: { value: new Float32Array([0, 0]) },
				uZoom: { value: .9 },
				uColor1: { value: new Float32Array([
					1,
					1,
					1
				]) },
				uColor2: { value: new Float32Array([
					1,
					1,
					1
				]) },
				uColor3: { value: new Float32Array([
					1,
					1,
					1
				]) },
				uLightMode: { value: 0 }
			}
		});
		const mesh = new Mesh(gl, {
			geometry,
			program
		});
		ctxMap.set(container, {
			renderer,
			program,
			mesh
		});
		const setSize = () => {
			const rect = container.getBoundingClientRect();
			const w = Math.max(1, Math.floor(rect.width));
			const h = Math.max(1, Math.floor(rect.height));
			renderer.setSize(w, h);
			const res = program.uniforms.iResolution.value;
			res[0] = gl.drawingBufferWidth;
			res[1] = gl.drawingBufferHeight;
			renderer.render({ scene: mesh });
		};
		const ro = new ResizeObserver(setSize);
		ro.observe(container);
		setSize();
		let raf = 0;
		let isVisible = true;
		let isPageVisible = !document.hidden;
		const t0 = performance.now();
		const loop = (t) => {
			program.uniforms.iTime.value = (t - t0) * .001;
			renderer.render({ scene: mesh });
			raf = requestAnimationFrame(loop);
		};
		const tryStart = () => {
			if (isVisible && isPageVisible && raf === 0) raf = requestAnimationFrame(loop);
		};
		const tryStop = () => {
			if (raf !== 0) {
				cancelAnimationFrame(raf);
				raf = 0;
			}
		};
		const io = new IntersectionObserver(([entry]) => {
			isVisible = entry.isIntersecting;
			isVisible ? tryStart() : tryStop();
		}, { threshold: 0 });
		io.observe(container);
		const onVisibility = () => {
			isPageVisible = !document.hidden;
			isPageVisible ? tryStart() : tryStop();
		};
		document.addEventListener("visibilitychange", onVisibility);
		tryStart();
		return () => {
			tryStop();
			ro.disconnect();
			io.disconnect();
			document.removeEventListener("visibilitychange", onVisibility);
			ctxMap.delete(container);
			try {
				container.removeChild(canvas);
			} catch {}
		};
	}, []);
	useEffect(() => {
		const container = containerRef.current;
		if (!container) return;
		const ctx = ctxMap.get(container);
		if (!ctx) return;
		const { program } = ctx;
		const u = program.uniforms;
		u.uTimeSpeed.value = timeSpeed;
		u.uColorBalance.value = colorBalance;
		u.uWarpStrength.value = warpStrength;
		u.uWarpFrequency.value = warpFrequency;
		u.uWarpSpeed.value = warpSpeed;
		u.uWarpAmplitude.value = warpAmplitude;
		u.uBlendAngle.value = blendAngle;
		u.uBlendSoftness.value = blendSoftness;
		u.uRotationAmount.value = rotationAmount;
		u.uNoiseScale.value = noiseScale;
		u.uGrainAmount.value = grainAmount;
		u.uGrainScale.value = grainScale;
		u.uGrainAnimated.value = grainAnimated ? 1 : 0;
		u.uContrast.value = contrast;
		u.uGamma.value = gamma;
		u.uSaturation.value = saturation;
		u.uCenterOffset.value = new Float32Array([centerX, centerY]);
		u.uZoom.value = zoom;
		u.uColor1.value = new Float32Array(parseColor(color1));
		u.uColor2.value = new Float32Array(parseColor(color2));
		u.uColor3.value = new Float32Array(parseColor(color3));
		u.uLightMode.value = lightMode ? 1 : 0;
	}, [
		timeSpeed,
		colorBalance,
		warpStrength,
		warpFrequency,
		warpSpeed,
		warpAmplitude,
		blendAngle,
		blendSoftness,
		rotationAmount,
		noiseScale,
		grainAmount,
		grainScale,
		grainAnimated,
		contrast,
		gamma,
		saturation,
		centerX,
		centerY,
		zoom,
		color1,
		color2,
		color3,
		lightMode
	]);
	return /* @__PURE__ */ jsx("div", {
		ref: containerRef,
		className: `relative h-full w-full overflow-hidden ${className}`.trim()
	});
};
//#endregion
//#region resources/js/components/ui/misc/section-label.tsx
function SectionLabel({ children, className }) {
	return /* @__PURE__ */ jsxs("div", {
		className: cn$1("flex items-center gap-4 text-primary", className),
		children: [/* @__PURE__ */ jsx("div", { className: "w-16 h-1     bg-current rounded-full shrink-0" }), /* @__PURE__ */ jsx("span", {
			className: " font-bold uppercase tracking-widest text-sm",
			children
		})]
	});
}
//#endregion
//#region resources/images/crane-half-cut.webp
var crane_half_cut_default = "/build/assets/crane-half-cut-Cxi4Fc3U.webp";
//#endregion
//#region resources/js/components/emergency-support.tsx
function EmergencySupport() {
	return /* @__PURE__ */ jsxs("section", {
		className: "bg-primary/5 border-t border-primary/10 py-16 lg:py-24 relative overflow-hidden ",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "absolute top-0 left-0 w-full h-full lg:w-1/2 pointer-events-none z-0 opacity-10 dark:opacity-20",
				style: {
					backgroundImage: `url(${crane_half_cut_default})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
					maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
					WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)"
				}
			}),
			/* @__PURE__ */ jsx("div", {
				className: "absolute top-1/2 -translate-y-1/2 -right-24 size-270 opacity-40 pointer-events-none mix-blend-plus-lighter mask-[radial-gradient(circle_at_center,black_10%,transparent_70%)]",
				children: /* @__PURE__ */ jsx(Grainient, {
					color1: "#b91c1c",
					color2: "#ea580c",
					color3: "#f97316",
					timeSpeed: 4,
					colorBalance: -.11,
					warpStrength: 1.55,
					warpFrequency: 3.7,
					warpSpeed: 7,
					warpAmplitude: 76,
					blendAngle: 0,
					blendSoftness: .09,
					rotationAmount: 510,
					noiseScale: 1.25,
					grainAmount: .07,
					grainScale: 2.2,
					grainAnimated: false,
					contrast: 1.5,
					gamma: 1,
					saturation: 1,
					centerX: .44,
					centerY: .46,
					zoom: .75
				})
			}),
			/* @__PURE__ */ jsx(Wrapper, {
				className: "relative z-10",
				children: /* @__PURE__ */ jsxs("div", {
					className: "flex flex-col lg:flex-row items-start lg:items-center gap-12 justify-between",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "max-w-3xl",
						children: [
							/* @__PURE__ */ jsx(SectionLabel, {
								className: "mb-8",
								children: "Emergencies can happen anytime"
							}),
							/* @__PURE__ */ jsx("h2", {
								className: "mb-6",
								children: /* @__PURE__ */ jsx(SwipeTitle, {
									className: "text-4xl md:text-6xl font-black font-heading tracking-tighter uppercase text-balance",
									children: /* @__PURE__ */ jsxs(SwipeLine, { children: ["24/7 ", /* @__PURE__ */ jsx("span", {
										className: "bg-linear-to-r from-primary to-primary inline-block px-1 bg-clip-text text-transparent",
										children: "SERVICE SUPPORT"
									})] })
								})
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl",
								children: "That’s why we offer 24/7 emergency response services for urgent lifting needs. Whether it’s an equipment failure or an unforeseen event, we’re here to provide immediate support, minimizing downtime and potential losses."
							})
						]
					}), /* @__PURE__ */ jsx("div", {
						className: "shrink-0 w-full lg:w-auto",
						children: /* @__PURE__ */ jsxs("a", {
							href: "#contact",
							className: "inline-flex items-center justify-center gap-3 rounded-full bg-primary hover:bg-primary/90 dark:bg-white dark:hover:bg-white/90 text-primary-foreground dark:text-black px-8 py-5 font-bold uppercase tracking-wider transition-all hover:scale-105 shadow-xl shadow-primary/20 hover:shadow-primary/40 dark:shadow-white/10 dark:hover:shadow-white/20",
							children: [/* @__PURE__ */ jsx(PhoneCall, {
								size: 24,
								className: "animate-pulse"
							}), /* @__PURE__ */ jsx("span", { children: "Request Emergency Lift" })]
						})
					})]
				})
			})
		]
	});
}
//#endregion
//#region resources/js/components/address-map.tsx
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
	iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
	iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
	shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png"
});
function AddressMap() {
	const position = [-33.92100507840956, 18.646894441076522];
	return /* @__PURE__ */ jsx("section", {
		className: "bg-background border-t border-border py-16 lg:py-24",
		children: /* @__PURE__ */ jsx(Wrapper, { children: /* @__PURE__ */ jsxs("div", {
			className: "flex flex-col lg:flex-row gap-12 items-center",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "lg:w-1/3 space-y-4",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-4",
						children: [/* @__PURE__ */ jsx("div", { className: "w-16 h-1.5 bg-linear-to-r from-primary to-primary rounded-full" }), /* @__PURE__ */ jsx("span", {
							className: "text-primary font-bold uppercase tracking-widest text-sm",
							children: "Find Us"
						})]
					}),
					/* @__PURE__ */ jsx("h2", {
						className: "text-4xl md:text-5xl font-black font-heading uppercase tracking-tighter text-balance",
						children: /* @__PURE__ */ jsx(SwipeTitle, {
							className: "text-4xl md:text-6xl font-black font-heading tracking-tighter uppercase text-balance",
							children: /* @__PURE__ */ jsxs(SwipeLine, { children: ["Our ", /* @__PURE__ */ jsx("span", {
								className: "bg-linear-to-r from-primary to-primary inline-block px-1 bg-clip-text text-transparent",
								children: "Location"
							})] })
						})
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "text-lg text-muted-foreground leading-relaxed",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "font-bold text-foreground",
								children: "Target Cranes"
							}),
							/* @__PURE__ */ jsx("p", { children: "Fabriek St" }),
							/* @__PURE__ */ jsx("p", { children: "Bellville South" }),
							/* @__PURE__ */ jsx("p", { children: "Cape Town, 7530" }),
							/* @__PURE__ */ jsx("p", { children: "South Africa" })
						]
					})
				]
			}), /* @__PURE__ */ jsx("div", {
				className: "lg:w-2/3 w-full",
				children: /* @__PURE__ */ jsx("div", {
					className: "w-full h-100 rounded-xl overflow-hidden shadow-lg border border-border relative z-0",
					children: /* @__PURE__ */ jsxs(MapContainer, {
						center: position,
						zoom: 17,
						scrollWheelZoom: false,
						className: "w-full h-full relative z-0",
						style: {
							height: "100%",
							width: "100%",
							zIndex: 0
						},
						children: [/* @__PURE__ */ jsx(TileLayer, {
							attribution: "© <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors",
							url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
						}), /* @__PURE__ */ jsx(Marker, {
							position,
							children: /* @__PURE__ */ jsxs(Popup, { children: [
								/* @__PURE__ */ jsx("strong", { children: "Target Cranes" }),
								/* @__PURE__ */ jsx("br", {}),
								"Fabriek St",
								/* @__PURE__ */ jsx("br", {}),
								"Bellville South",
								/* @__PURE__ */ jsx("br", {}),
								"Cape Town, 7530"
							] })
						})]
					})
				})
			})]
		}) })
	});
}
//#endregion
//#region resources/js/layouts/app-layout.tsx
function AppLayout({ children }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "min-h-screen bg-background flex flex-col text-foreground selection:bg-primary/30 transition-colors duration-300",
		children: [
			/* @__PURE__ */ jsx(Navigation, {}),
			/* @__PURE__ */ jsx("main", {
				className: `flex-1`,
				children
			}),
			/* @__PURE__ */ jsx(EmergencySupport, {}),
			/* @__PURE__ */ jsx(AddressMap, {}),
			/* @__PURE__ */ jsx(Footer, {})
		]
	});
}
//#endregion
export { contactUs as a, Button$1 as c, SwipeTitle as i, buttonVariants as l, SectionLabel as n, queryParams as o, SwipeLine as r, Wrapper as s, AppLayout as t, cn$1 as u };
