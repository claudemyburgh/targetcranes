import { u as cn } from "./app-layout-W-CJAxuG.js";
import * as React$1 from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { ChevronDown } from "lucide-react";
// resources/js/components/ui/accordion.tsx
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
			className: cn("divide-y divide-border border-b border-border", className),
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
			"data-state": isOpen ? "open" : "closed",
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
		className: cn("flex w-full items-center justify-between gap-4 text-left font-bold transition-all hover:text-primary cursor-pointer", className),
		children: [/* @__PURE__ */ jsx("div", {
			className: "flex-1",
			children
		}), /* @__PURE__ */ jsx("span", {
			className: cn("flex size-9 shrink-0 items-center justify-center rounded-xl border border-border bg-muted/60 text-muted-foreground transition-all duration-300 group-hover:border-primary/40 group-hover:text-primary", isOpen && "border-primary bg-primary text-primary-foreground group-hover:text-primary-foreground shadow-sm shadow-primary/25"),
			children: /* @__PURE__ */ jsx(ChevronDown, { className: cn("size-4 transition-transform duration-300", isOpen && "rotate-180") })
		})]
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
export { AccordionTrigger as i, AccordionContent as n, AccordionItem as r, Accordion as t };
