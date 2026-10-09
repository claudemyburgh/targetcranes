import { cn } from "@/lib/utils.ts";
import React from "react";

export default function SectionLabel({ 
    children, 
    className 
}: { 
    children: React.ReactNode,
    className?: string
}) {
    return (
        <div className={cn("flex items-center gap-4", className)}>
            <div className="w-16 h-1.5 bg-linear-to-l from-primary to-orange-500 rounded-full shrink-0"></div>
            <span className="text-primary font-bold uppercase tracking-widest text-sm">
                {children}
            </span>
        </div>
    );
}
