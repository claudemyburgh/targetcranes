"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

export type Tab = {
    title: string;
    value: string;
    icon?: React.ComponentType<{ className?: string; strokeWidth?: number }>;
    content?: string | React.ReactNode | any;
};

export const Tabs = ({
    tabs: propTabs,
    containerClassName,
    activeTabClassName,
    tabClassName,
    contentClassName,
}: {
    tabs: Tab[];
    containerClassName?: string;
    activeTabClassName?: string;
    tabClassName?: string;
    contentClassName?: string;
}) => {
    const [active, setActive] = useState<Tab>(propTabs[0]);
    const [tabs, setTabs] = useState<Tab[]>(propTabs);
    const [animatingValue, setAnimatingValue] = useState<string | null>(null);

    const moveSelectedTabToTop = (idx: number) => {
        const newTabs = [...propTabs];
        const selectedTab = newTabs.splice(idx, 1);
        newTabs.unshift(selectedTab[0]);
        setTabs(newTabs);
        setActive(newTabs[0]);
        setAnimatingValue(newTabs[0].value);
        window.setTimeout(() => {
            setAnimatingValue(null);
        }, 350);
    };

    const [hovering, setHovering] = useState(false);

    return (
        <div className="flex flex-col w-full">
            <div
                className={cn(
                    "flex flex-row flex-wrap items-center justify-start gap-2 [perspective:1000px] relative z-20 max-w-full w-full",
                    containerClassName
                )}
            >
                {propTabs.map((tab, idx) => {
                    const Icon = tab.icon;
                    const isSelected = active.value === tab.value;
                    return (
                        <button
                            key={tab.value}
                            type="button"
                            onClick={() => {
                                moveSelectedTabToTop(idx);
                            }}
                            onMouseEnter={() => setHovering(true)}
                            onMouseLeave={() => setHovering(false)}
                            className={cn(
                                "relative px-5 py-3 rounded-full font-heading uppercase font-bold tracking-wider text-sm sm:text-base transition-all duration-300 cursor-pointer",
                                tabClassName
                            )}
                            style={{
                                transformStyle: "preserve-3d",
                            }}
                        >
                            <span
                                className={cn(
                                    "absolute inset-0 rounded-full transition-all duration-300 ease-out",
                                    isSelected
                                        ? "bg-primary scale-100 opacity-100 shadow-md shadow-primary/25"
                                        : "bg-transparent scale-95 opacity-0",
                                    isSelected && activeTabClassName
                                )}
                            />

                            <span
                                className={cn(
                                    "relative z-10 flex items-center gap-2 transition-colors duration-300",
                                    isSelected
                                        ? "text-primary-foreground"
                                        : "text-foreground/80 hover:text-foreground"
                                )}
                            >
                                {Icon && <Icon className="w-4 h-4 shrink-0" strokeWidth={2} />}
                                <span>{tab.title}</span>
                            </span>
                        </button>
                    );
                })}
            </div>
            <FadeInDiv
                tabs={tabs}
                active={active}
                hovering={hovering}
                animatingValue={animatingValue}
                className={cn("mt-6", contentClassName)}
            />
        </div>
    );
};

export const FadeInDiv = ({
    className,
    tabs,
    hovering,
    animatingValue,
}: {
    className?: string;
    tabs: Tab[];
    active: Tab;
    hovering?: boolean;
    animatingValue?: string | null;
}) => {
    return (
        <div className={cn("relative z-10 w-full pb-12", className)}>
            {tabs.map((tab, idx) => {
                const isFrontBounce = idx === 0 && animatingValue === tab.value;
                return (
                    <div
                        key={tab.value}
                        style={{
                            transform: `translateY(${isFrontBounce ? 12 : 0}px) scale(${1 - idx * 0.04})`,
                            top: hovering ? idx * 22 : idx * 10,
                            zIndex: 10 - idx,
                            opacity: idx < 3 ? 1 - idx * 0.2 : 0,
                        }}
                        className={cn(
                            "w-full transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] origin-bottom",
                            idx === 0 ? "relative" : "absolute inset-x-0 top-0 pointer-events-none"
                        )}
                    >
                        {tab.content}
                    </div>
                );
            })}
        </div>
    );
};
