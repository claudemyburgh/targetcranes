import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionContextType {
    openValue: string | null;
    toggleValue: (val: string) => void;
}

const AccordionContext = React.createContext<AccordionContextType>({
    openValue: null,
    toggleValue: () => {},
});

const AccordionItemContext = React.createContext<{ value: string; isOpen: boolean }>({
    value: "",
    isOpen: false,
});

export function Accordion({
    children,
    className,
    defaultValue,
    collapsible = true,
}: {
    children: React.ReactNode;
    className?: string;
    defaultValue?: string;
    collapsible?: boolean;
}) {
    const [openValue, setOpenValue] = React.useState<string | null>(() => {
        if (defaultValue !== undefined) return defaultValue;
        return "item-0";
    });

    const toggleValue = React.useCallback(
        (val: string) => {
            setOpenValue((prev) => {
                if (prev === val) {
                    return collapsible ? null : prev;
                }
                return val;
            });
        },
        [collapsible]
    );

    return (
        <AccordionContext.Provider value={{ openValue, toggleValue }}>
            <div className={cn("divide-y divide-border border-b border-border", className)}>
                {children}
            </div>
        </AccordionContext.Provider>
    );
}

export function AccordionItem({
    value,
    className,
    children,
}: {
    value: string;
    className?: string;
    children: React.ReactNode;
}) {
    const { openValue } = React.useContext(AccordionContext);
    const isOpen = openValue === value;

    return (
        <AccordionItemContext.Provider value={{ value, isOpen }}>
            <div
                data-state={isOpen ? "open" : "closed"}
                className={cn("group border-b border-border last:border-b-0", className)}
            >
                {children}
            </div>
        </AccordionItemContext.Provider>
    );
}

export function AccordionTrigger({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) {
    const { toggleValue } = React.useContext(AccordionContext);
    const { value, isOpen } = React.useContext(AccordionItemContext);

    return (
        <button
            type="button"
            onClick={() => toggleValue(value)}
            aria-expanded={isOpen}
            className={cn(
                "flex w-full items-center justify-between gap-4 text-left font-bold transition-all hover:text-primary cursor-pointer",
                className
            )}
        >
            <div className="flex-1">{children}</div>
            <span
                className={cn(
                    "flex size-9 shrink-0 items-center justify-center rounded-xl border border-border bg-muted/60 text-muted-foreground transition-all duration-300 group-hover:border-primary/40 group-hover:text-primary",
                    isOpen && "border-primary bg-primary text-primary-foreground group-hover:text-primary-foreground shadow-sm shadow-primary/25"
                )}
            >
                <ChevronDown
                    className={cn(
                        "size-4 transition-transform duration-300",
                        isOpen && "rotate-180"
                    )}
                />
            </span>
        </button>
    );
}

export function AccordionContent({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) {
    const { isOpen } = React.useContext(AccordionItemContext);

    return (
        <div
            className={cn(
                "grid transition-all duration-300 ease-in-out",
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
            )}
        >
            <div className="overflow-hidden">
                <div className={className}>{children}</div>
            </div>
        </div>
    );
}

export default Accordion;
