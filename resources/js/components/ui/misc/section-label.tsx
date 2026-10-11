import {cn} from "@/lib/utils.ts";
import React from "react";

export default function SectionLabel({
                                         children,
                                         className
                                     }: {
    children: React.ReactNode,
    className?: string
}) {
    return (
        <div className={cn("flex items-center gap-4 text-primary", className)}>
            <div className="w-16 h-1     bg-current rounded-full shrink-0"></div>
            <span className=" font-bold uppercase tracking-widest text-sm">
                {children}
            </span>
        </div>
    );
}
