import React, {useEffect, useRef, useState} from "react";

export function SwipeTitle({
                               children,
                               className = ""
                           }: {
    children: React.ReactNode,
    className?: string
}) {
    const [isRevealed, setIsRevealed] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsRevealed(true);
                else setIsRevealed(false);
            },
            {threshold: 0.1}
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div ref={ref} className={`flex flex-col items-start ${className}`}>
            {React.Children.map(children, (child, index) => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child as React.ReactElement<any>, {isRevealed, delay: index});
                }
                return child;
            })}
        </div>
    );
}

export function SwipeLine({
                              children,
                              delay = 0,
                              isRevealed = false,
                              className = ""
                          }: {
    children: React.ReactNode,
    delay?: number,
    isRevealed?: boolean,
    className?: string
}) {
    const baseDelay = delay * 200;

    return (
        <span className={`relative inline-block overflow-hidden pb-1 ${className}`}>
            <span
                className={`block transition-opacity duration-0`}
                style={{
                    opacity: isRevealed ? 1 : 0,
                    transitionDelay: isRevealed ? `${baseDelay + 150 + 500}ms` : '0ms'
                }}
            >
                {children}
            </span>
            {/* Block 1 (muted) */}
            <span
                className={`absolute inset-0 bg-foreground/90 z-10 transition-transform duration-1000 ease-in-out ${isRevealed ? "translate-x-full" : "-translate-x-full"}`}
                style={{transitionDelay: isRevealed ? `${baseDelay}ms` : '0ms'}}
            />
            {/* Block 2 (gradient) */}
            <span
                className={`absolute inset-0 bg-linear-to-r from-primary to-primary z-20 transition-transform duration-1000 ease-in-out ${isRevealed ? "translate-x-full" : "-translate-x-full"}`}
                style={{transitionDelay: isRevealed ? `${baseDelay + 150}ms` : '0ms'}}
            />
        </span>
    );
}

export default SwipeTitle;
