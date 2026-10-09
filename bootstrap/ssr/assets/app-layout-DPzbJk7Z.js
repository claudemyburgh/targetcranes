import { t as useAppearance } from "../ssr.js";
import { Link } from "@inertiajs/react";
import "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { Monitor, Moon, Sun } from "lucide-react";
import { Button } from "@base-ui/react/button";
import { cva } from "class-variance-authority";
import { cn } from "cn";
import { Menu } from "@base-ui/react/menu";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
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
		className: cn(buttonVariants({
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
	return /* @__PURE__ */ jsx(Menu.Root, {
		"data-slot": "dropdown-menu",
		...props
	});
}
function DropdownMenuTrigger({ ...props }) {
	return /* @__PURE__ */ jsx(Menu.Trigger, {
		"data-slot": "dropdown-menu-trigger",
		...props
	});
}
function DropdownMenuContent({ align = "start", alignOffset = 0, side = "bottom", sideOffset = 4, className, ...props }) {
	return /* @__PURE__ */ jsx(Menu.Portal, { children: /* @__PURE__ */ jsx(Menu.Positioner, {
		className: "isolate z-50 outline-none",
		align,
		alignOffset,
		side,
		sideOffset,
		children: /* @__PURE__ */ jsx(Menu.Popup, {
			"data-slot": "dropdown-menu-content",
			className: cn("z-50 max-h-(--available-height) w-(--anchor-width) min-w-32 origin-(--transform-origin) overflow-x-hidden overflow-y-auto rounded-lg bg-popover p-1 text-popover-foreground shadow-md ring-1 ring-foreground/10 duration-100 outline-none data-[side=bottom]:slide-in-from-top-2 data-[side=inline-end]:slide-in-from-left-2 data-[side=inline-start]:slide-in-from-right-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:overflow-hidden data-closed:fade-out-0 data-closed:zoom-out-95", className),
			...props
		})
	}) });
}
function DropdownMenuItem({ className, inset, variant = "default", ...props }) {
	return /* @__PURE__ */ jsx(Menu.Item, {
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
//#region resources/js/lib/utils.ts
function cn$1(...inputs) {
	return twMerge(clsx(inputs));
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
//#region resources/js/components/navigation.tsx
function Navigation() {
	return /* @__PURE__ */ jsx("nav", {
		className: "border-b border-border bg-background/75 backdrop-blur-md fixed w-full top-0 z-40",
		children: /* @__PURE__ */ jsx(Wrapper, { children: /* @__PURE__ */ jsxs("div", {
			className: "flex justify-between h-16 items-center",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex items-center gap-8",
				children: [/* @__PURE__ */ jsx(Link, {
					href: "/",
					className: "font-bold text-2xl font-heading tracking-tight text-primary uppercase",
					children: "Target Cranes"
				}), /* @__PURE__ */ jsx("div", {
					className: "hidden md:flex gap-6 text-sm font-medium",
					children: /* @__PURE__ */ jsx(Link, {
						href: "/",
						className: "text-muted-foreground hover:text-primary transition-colors",
						children: "Home"
					})
				})]
			}), /* @__PURE__ */ jsxs("div", {
				className: "flex items-center gap-4",
				children: [/* @__PURE__ */ jsx(ThemeToggle, {}), /* @__PURE__ */ jsx("a", {
					href: "/admin",
					className: buttonVariants(),
					children: "Dashboard"
				})]
			})]
		}) })
	});
}
//#endregion
//#region resources/js/components/footer.tsx
function Footer() {
	return /* @__PURE__ */ jsx("footer", {
		className: "border-t border-border py-12 mt-20 bg-background",
		children: /* @__PURE__ */ jsxs(Wrapper, {
			className: " text-center text-muted-foreground text-sm",
			children: [
				"© ",
				(/* @__PURE__ */ new Date()).getFullYear(),
				" Laravel + React + Filament Starter Kit. All rights reserved."
			]
		})
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
			/* @__PURE__ */ jsx(Footer, {})
		]
	});
}
//#endregion
export { buttonVariants as i, Wrapper as n, cn$1 as r, AppLayout as t };
