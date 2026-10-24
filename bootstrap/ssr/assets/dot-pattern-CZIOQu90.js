import { u as cn } from "./app-layout-W-CJAxuG.js";
import { jsx } from "react/jsx-runtime";
// resources/images/dot-pattern.svg
var dot_pattern_default = "/build/assets/dot-pattern-wkNqCRmb.svg";
// resources/js/components/ui/misc/dot-pattern.tsx
var cornerClasses = {
	"top-left": "top-0 left-0 -translate-x-1/2 -translate-y-1/2",
	"top-right": "top-0 right-0 translate-x-1/2 -translate-y-1/2",
	"bottom-left": "bottom-0 left-0 -translate-x-1/2 translate-y-1/2",
	"bottom-right": "bottom-0 right-0 translate-x-1/2 translate-y-1/2"
};
function DotPattern({ corner = "top-right", className }) {
	return /* @__PURE__ */ jsx("img", {
		src: dot_pattern_default,
		alt: "",
		"aria-hidden": true,
		className: cn("pointer-events-none select-none absolute z-0 size-80 lg:size-110 scale-110 opacity-12 dark:opacity-18", cornerClasses[corner], className)
	});
}
export { DotPattern as t };
