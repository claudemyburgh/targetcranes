import {cn} from "@/lib/utils";
// @ts-ignore
import dotPatternSvg from "@/../images/dot-pattern.svg";

export type DotPatternCorner = "top-left" | "top-right" | "bottom-left" | "bottom-right";

const cornerClasses: Record<DotPatternCorner, string> = {
    "top-left": "top-0 left-0 -translate-x-1/2 -translate-y-1/2",
    "top-right": "top-0 right-0 translate-x-1/2 -translate-y-1/2",
    "bottom-left": "bottom-0 left-0 -translate-x-1/2 translate-y-1/2",
    "bottom-right": "bottom-0 right-0 translate-x-1/2 translate-y-1/2",
};

export function DotPattern({
    corner = "top-right",
    className,
}: {
    corner?: DotPatternCorner;
    className?: string;
}) {
    return (
        <img
            src={dotPatternSvg}
            alt=""
            aria-hidden={true}
            className={cn(
                "pointer-events-none select-none absolute z-0 size-80 lg:size-110 scale-110 opacity-12 dark:opacity-18",
                cornerClasses[corner],
                className
            )}
        />
    );
}

export default DotPattern;
