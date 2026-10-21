import {cn} from "@/lib/utils";
import React from "react";

interface StackedCardProps {
    children: React.ReactNode;
    className?: string;
    cardClassName?: string;
}

export function StackedCard({
                                children,
                                className,
                                cardClassName,
                            }: StackedCardProps) {
    return (
        <div className={cn("group/stack relative isolate p-3 sm:p-4", className)}>
            {/* 2nd backing card (--primary, top-right counter-tilted plate) */}
            <div
                aria-hidden="true"
                className={cn(
                    "pointer-events-none absolute inset-3 sm:inset-4 -z-20 rounded-3xl bg-linear-to-bl from-primary via-[color-mix(in_oklch,var(--primary),black_25%)] to-zinc-950 border border-white/10 rotate-3 translate-x-2.5 -translate-y-2.5 shadow-xl shadow-primary/25 transition-all duration-500 ease-out group-hover/stack:rotate-5 group-hover/stack:translate-x-4 group-hover/stack:-translate-y-3.5",
                    cardClassName
                )}
            />

            {/* 1st backing card (--secondary, bottom-left tilted plate) */}
            <div
                aria-hidden="true"
                className={cn(
                    "pointer-events-none absolute inset-3 sm:inset-4 -z-10 rounded-3xl bg-linear-to-tr from-secondary via-[color-mix(in_oklch,var(--secondary),black_30%)] to-zinc-950 border border-white/10 -rotate-2 -translate-x-2.5 translate-y-2.5 shadow-2xl shadow-black/35 transition-all duration-500 ease-out group-hover/stack:-rotate-4 group-hover/stack:-translate-x-4 group-hover/stack:translate-y-3.5",
                    cardClassName
                )}
            />

            {/* Main content */}
            <div className="relative z-10 transition-transform duration-500 ease-out group-hover/stack:-translate-y-0.5">
                {children}
            </div>
        </div>
    );
}

export default StackedCard;
