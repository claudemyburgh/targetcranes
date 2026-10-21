import { u as cn } from "./app-layout-x3gZBI6e.js";
import { useRef, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region resources/js/components/ui/misc/stacked-card.tsx
function StackedCard({ children, className, cardClassName }) {
	const containerRef = useRef(null);
	const [pointer, setPointer] = useState({
		x: 0,
		y: 0,
		active: false
	});
	const handlePointerMove = (e) => {
		const rect = containerRef.current?.getBoundingClientRect();
		if (!rect) return;
		const nx = (e.clientX - rect.left) / rect.width * 2 - 1;
		const ny = (e.clientY - rect.top) / rect.height * 2 - 1;
		setPointer({
			x: nx,
			y: ny,
			active: true
		});
	};
	const handlePointerLeave = () => {
		setPointer({
			x: 0,
			y: 0,
			active: false
		});
	};
	const rotateX = pointer.active ? -pointer.y * 6 : 0;
	const rotateY = pointer.active ? pointer.x * 6 : 0;
	const glareX = 50 + pointer.x * 35;
	const glareY = 50 + pointer.y * 35;
	return /* @__PURE__ */ jsxs("div", {
		ref: containerRef,
		onPointerMove: handlePointerMove,
		onPointerLeave: handlePointerLeave,
		className: cn("group/stack relative isolate pt-8 perspective-[1200px]", className),
		children: [
			/* @__PURE__ */ jsx("div", {
				"aria-hidden": "true",
				style: { transform: `translate3d(${pointer.x * -6}px, ${pointer.active ? -32 : -26}px, -40px) scale(0.88)` },
				className: cn("pointer-events-none absolute inset-x-0 top-8 bottom-0 -z-20 rounded-3xl origin-top", "bg-linear-to-r from-[color-mix(in_oklch,var(--primary),black_35%)] via-primary to-[color-mix(in_oklch,var(--primary),black_35%)]", "border border-white/20 shadow-[0_-10px_30px_-10px_rgba(185,35,53,0.45)]", "transition-transform duration-300 ease-out", cardClassName),
				children: /* @__PURE__ */ jsx("div", { className: "absolute inset-x-6 top-0 h-px bg-linear-to-r from-transparent via-white/50 to-transparent" })
			}),
			/* @__PURE__ */ jsx("div", {
				"aria-hidden": "true",
				style: { transform: `translate3d(${pointer.x * -3}px, ${pointer.active ? -16 : -13}px, -20px) scale(0.94)` },
				className: cn("pointer-events-none absolute inset-x-0 top-8 bottom-0 -z-10 rounded-3xl origin-top", "bg-linear-to-r from-[color-mix(in_oklch,var(--secondary),black_40%)] via-secondary to-[color-mix(in_oklch,var(--secondary),black_40%)]", "border border-white/20 shadow-[0_-8px_28px_-12px_rgba(0,0,0,0.55)]", "transition-transform duration-300 ease-out", cardClassName),
				children: /* @__PURE__ */ jsx("div", { className: "absolute inset-x-6 top-0 h-px bg-linear-to-r from-transparent via-white/40 to-transparent" })
			}),
			/* @__PURE__ */ jsxs("div", {
				style: { transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translate3d(0, ${pointer.active ? -2 : 0}px, 0)` },
				className: "relative z-10 rounded-3xl shadow-[0_22px_45px_-15px_rgba(0,0,0,0.5)] transition-transform duration-300 ease-out transform-3d",
				children: [
					children,
					/* @__PURE__ */ jsx("div", {
						"aria-hidden": "true",
						style: {
							background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0.06) 35%, transparent 65%)`,
							opacity: pointer.active ? 1 : 0
						},
						className: "pointer-events-none absolute inset-0 z-20 rounded-3xl transition-opacity duration-300 mix-blend-overlay"
					}),
					/* @__PURE__ */ jsx("div", {
						"aria-hidden": "true",
						className: "pointer-events-none absolute inset-0 z-20 rounded-3xl ring-1 ring-inset ring-white/20"
					})
				]
			})
		]
	});
}
//#endregion
export { StackedCard as t };
