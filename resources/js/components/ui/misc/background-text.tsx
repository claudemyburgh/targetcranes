import { cn } from "@/lib/utils";
import React from "react";

interface BackgroundTextProps {
    children: React.ReactNode;
    position?: "left" | "right" | "center";
    className?: string;
}

export function BackgroundText({
    children,
    position = "left",
    className,
}: BackgroundTextProps) {
    const positionClasses = {
        left: "left-4 sm:left-10 text-left",
        right: "right-4 sm:right-10 text-right",
        center: "left-1/2 -translate-x-1/2 text-center",
    };

    return (
        <div
            aria-hidden="true"
            className={cn(
                "absolute top-6 select-none pointer-events-none z-0 overflow-hidden font-heading font-black uppercase text-[15vw] lg:text-[180px] leading-none tracking-tighter opacity-5 dark:opacity-10 text-foreground whitespace-nowrap",
                positionClasses[position],
                className
            )}
        >
            {children}
        </div>
    );
}

export default BackgroundText;
