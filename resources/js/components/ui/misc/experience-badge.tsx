export default function ExperienceBadge({className = ""}: { className?: string }) {
    return (
        <div
            className={`opacity-0 animate-[slide-up-fade_1s_ease-out_forwards] inline-flex items-center gap-2 rounded-full border border-primary/30 bg-linear-to-r from-primary/50 to-primary/50 px-4 py-1.5 text-white shadow-[0_0_15px_rgba(255,255,255,0.1)] backdrop-blur-md ${className}`}
        >
            <span className="relative flex h-2 w-2">
                <span
                    className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            <span className="font-semibold tracking-wider uppercase text-xs">53 YEARS MANAGEMENT EXPERIENCE</span>
        </div>
    );
}
