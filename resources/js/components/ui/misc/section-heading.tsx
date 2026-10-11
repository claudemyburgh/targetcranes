import React from "react";
import SectionLabel from "@/components/ui/misc/section-label";
import { SwipeLine, SwipeTitle } from "@/components/ui/swipe-title";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
    title: string;
    label?: string;
    align?: "left" | "center" | "right";
    className?: string;
}

export function SectionHeading({
    title,
    label,
    align = "left",
    className,
}: SectionHeadingProps) {
    const alignClasses = {
        left: "text-left items-start",
        center: "text-center items-center mx-auto",
        right: "text-right items-end ml-auto",
    };

    return (
        <div className={cn("space-y-4 flex flex-col", alignClasses[align], className)}>
            {label && <SectionLabel className={align === "center" ? "mx-auto" : ""}>{label}</SectionLabel>}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading tracking-tight uppercase text-foreground">
                <SwipeTitle className="text-balance">
                    <SwipeLine>{title}</SwipeLine>
                </SwipeTitle>
            </h2>
        </div>
    );
}

export default SectionHeading;
