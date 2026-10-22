import Wrapper from "@/components/ui/misc/wrapper.tsx";
import {SwipeLine, SwipeTitle} from "@/components/ui/swipe-title.tsx";
import SectionLabel from "@/components/ui/misc/section-label.tsx";
import {siteStats} from "@/lib/site-stats.ts";
// @ts-ignore
import bgImg from "../../images/black-white.webp";

const mapPath = "M172.17 140.2c12.08 14.12 18.77 8.4 26.02 29.99.62 3.5 3.61 5.38 4.97 7.33-.88 2.21.49 1.2 1.58.98 1.5.87-.5.83-.82 1.49 1.32 13.96 18.68 32.27 1.92 49.62-5.35 6.71-3.17 19.65.97 26.97 50.24-10.38 37.19 15.46 81.53-31.06 4.63-7.28 14.67-6.29 15.68-16.24 5.82-1.92.65-7.58 5.11-10.64-1.87-27.27 27.86-40.59 48.54-19.04 9.2 15.08 17.62 1.47 28.87 14.95 103.69 19.04 43.03-61.87 101.62-60.85 5.79-7.38 10.92-16.42 20.61-19.13 5.49-7.22 3.01-32.74 10.54-33.02 4.59-1.37-1.79-1.65 3.2-4.39-.68 0 .23-.77.53-1.05 3.06.57-.2-1.09.69-2.11.98-.08 1.52.96 2.05-.18.25-.64 1.14.96 1.81.08-1.9-.9.74-2.29 1.67-2.23 2.34-.43 3.94-3.3 5.43-4.82.98 4.17 2.03-2.61 3.7 1.14 6.92-4.16 5.37.09 8.99-10.5 2.64 2.29 3.98-3.22 5.79.27 1.68 1.06 2.73-2.9 2.82-3.55-2.58-2.22 7.73-3.33 8.02-6.76-.28-.72-.91-3.6.15-4.01 20.86-19.7 3.89-15.47 38.48-23.47 18.74-3.95 4.12-17.86 28.12-17.22 29.07-10.1 36.33 11.18 63.87 6.71 37.8-13.37 44.98 33.44 46.5 62.82 19.48 25.26 23.33 57.65 21.7 89.78 4.28 103.76-36.07-31.06-59.11 85.44-.49 3.91 1.71 7.19 4.65 3.04 1.26 5.9 5.32 5.76 3.61 12.58 10.24 17.4 31.73 18 49.92 17.47-3.25-8.86.7-19.02 1.07-28.06 68.59 5.1 38.73-1.51 30.19 57.49-.86 9.77-3.52 23.42-9.68 30.9 3.61 8.07-10.7 16.52-15.9 22.37-4.11-3.83-6.34 4.06-.67.34-2.41 7.44-15.66 5.86-14.14 8.09-69.7 99-137.36 216.67-253.39 274.44-12.65 9.75-51.37-12.28-48.88 14.32 11.16 13.67-27.05-4.12-33.75 1.86-4.44 4.56 1.83 2.5-5.85 9.65 5.98 6.26-14.29.24-17.5.61-13.43-7.16-29.4-7.72-43.79-10.49-19.74 2.27-3.43 15.18-29.05 2.75 3.62 4.47 1.36 2.52-3.05 3.28-13.03-3.98-3.3-4.91-7.94-5.88-3.4-.79-1.74.8-.28 2.25 2.48 1.88-6.11-1.18-6.84-1.52-3.45-1.2-5.78 2.5-8.58 3.64-4.29.87-21.37-.89-15.14 7.21-16.31 1.33-8.6 16.63-27.09 11.57-4.77-4.25-9.32 3.21-14.33 3.1-8.13-2.12-17.71-6.54-24.63-1.58 11.7 7.59-13.12-4.96-28.37 15.52-1.97 2.7-10.62 3.24-8.4 8.59-6.69 2.87-9.89-5.8-17.7-2.86-5.63 3.35-10.19-8.52-15.91-9.24-4.75 1.45-4.03.7-.72-3.63 3.46-10.91-15.5-4.44-12.26-11.1.24-.38 2.46-4.58.57-2.98-.17.23-1.21 2.36-1.68 2.38l-3.76-.25c-11.41 2.24-9.68 4.86-9.25-7.91.22-3.87 3.43-1.58-.38-6.45-13.4-5.25-20.22.4-16.94 13.96 1.83 1.16-.53.91-1.31.29-2.75-1.62-2.74-5.39-3.59-7.39-.2-2.22-5.21-3.8-1.51-5.82-.22-1.29 1.76-4.72-.54-3.12-1.26-3.73 2.3-10.63 7.13-9.63.87-18.02-19.8-35.59-24.35-47.7 2.59-.26 3.91 7.54 7.23 6.24-11.33-25.71-9.01 5.57-13.53-21.57-1.72-.99 2.38-1.43 2.31-2.68.06-3.08.37-4.83 4.08-4.63 22.23 14.18 17.65-33.97 14.49-47.26-7.76-24.18-29.04-41-36.45-65.7-22.67-32.61-20.77-78.31-46.56-108.65.69-8.54-12.51-13.46.38-17.36 7.31-8.82 4.09 5.46 10.16-8.96-5.44-10.47 2.7-1.73.52-8.53-.05-.35 1.2-.16 1.31-.2 2.44-.12-1.48-1.86.13-2.57 3.79 2.05 1.05-4.59 3.43-5.64 5.58-.2 12.53-4.26 13.46 5.54.28 8.59 7.89-1.61 10.22 9.67 2.11 6.99-6.92 4.8-1.07 12.55 7.27 2.61-6.72 12.15 10.32 6.77 2.11 5.31 1.89 5.96 8.04 3.84 38.26 18.68 39.6-3.71 64.09 10.32 3.94 4.19 8.02-1.96 11.78-2.77-1.78-2.75-3.44-11.55 2.49-8.17 14.75-4.1-.04-11.43 31.62-17.65.18-67.3-.01-134.66 0-201.96Zm442.76 229.24c-10.32-10.77-16.51-22.98-30.37-14.9-1.35 5.82-7.63 1.9-10.75 3.99-2.98 2.32-6.12 12.53-9.84 7.9-4.81.54.96 4.69-9.72 2.98.1 1.41-3.1 6.88-5.33 7.13.17.94 2.07 1.62.5 2-1.39.76-2.61 6.95-5.97 7.7.69 5.72-3.72 2.01-4.05 7.01-4.95 11.18-11.09 12.91-21.2 16.6-.58 3.02-.72 2.1 1.78 4.03 4.06 5.98 9.49 24.04 15.04 24.72 3.69.73-3.55 3.11 1 10.25 13.76 4.97 10.73 19.52 33.34 19.27 2.07 1.7.16-4.27 3.42-5.85 2.47-8.19-3.7-2.18 5.27-9.9-3.75-20.16 40.75-10.1 44.49-29.27-1.93-25.25 37.46-25.07-7.62-53.65Z";
const mapMask = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 807 711.6'%3E%3Cpath d='${mapPath}'/%3E%3C/svg%3E")`;

export function NationwideService() {
    return (
        <section className="bg-background border-t border-border py-16 lg:py-24 relative overflow-hidden">
            <div
                className="absolute top-0 left-0 w-full h-full lg:w-1/2 pointer-events-none z-0 opacity-10 dark:opacity-30"
                style={{
                    backgroundImage: `url(${bgImg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    maskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%), linear-gradient(to right, black 60%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%), linear-gradient(to right, black 60%, transparent 100%)',
                    maskComposite: 'intersect',
                    WebkitMaskComposite: 'source-in',
                }}
            />
            <Wrapper className="relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    {/* Left side: Text */}
                    <div className="lg:w-1/2 space-y-6">
                        <SectionLabel className="mb-8">Target Cranes in South Africa</SectionLabel>

                        <h2>
                            <SwipeTitle
                                className="text-4xl md:text-6xl font-black font-heading tracking-tighter uppercase text-balance">
                                <SwipeLine>Target Cranes</SwipeLine>
                                <SwipeLine><span
                                    className="bg-linear-to-r from-primary to-primary inline-block px-1 bg-clip-text text-transparent">In South Africa</span></SwipeLine>
                            </SwipeTitle>
                        </h2>
                        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
                            These stats can help showcase Target Cranes&rsquo; experience, capabilities, and commitment
                            to safety and customer satisfaction, making a strong impression on potential clients.
                        </p>

                        <div className="grid gap-6 mt-8">
                            <div className="flex flex-col gap-1">
                                <span className="text-3xl font-black font-heading tracking-tight text-primary">{siteStats.yearsInBusiness} Years in Business</span>
                                <p className="text-muted-foreground">Providing exceptional crane services across
                                    multiple industries.</p>
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="text-3xl font-black font-heading tracking-tight text-primary">{siteStats.successfulProjects} Successful Projects</span>
                                <p className="text-muted-foreground">Completed with precision and safety, ranging from
                                    small-scale lifts to major infrastructure projects.</p>
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="text-3xl font-black font-heading tracking-tight text-primary">{siteStats.availability} Availability</span>
                                <p className="text-muted-foreground">Ready to respond to your lifting needs anytime, day
                                    or night.</p>
                            </div>
                        </div>
                    </div>

                    {/* Right side: Masked DotGrid Map */}
                    <div className="lg:w-1/2 flex justify-center items-center relative min-h-125">
                        {/* Decorative background glow */}


                        <div className="w-full max-w-150 aspect-8/7 relative z-10">
                            {/* SVG stroke overlay */}
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 807 711.6"
                                 className="absolute inset-0 w-full h-full pointer-events-none z-20">
                                <path d={mapPath} fill="none" stroke="currentColor" strokeWidth="2"
                                      className="text-muted"/>
                            </svg>

                            <div
                                className="absolute inset-0"
                                style={{
                                    maskImage: mapMask,
                                    WebkitMaskImage: mapMask,
                                    maskSize: 'contain',
                                    WebkitMaskSize: 'contain',
                                    maskRepeat: 'no-repeat',
                                    WebkitMaskRepeat: 'no-repeat',
                                    maskPosition: 'center',
                                    WebkitMaskPosition: 'center'
                                }}
                            >
                                <div
                                    className="absolute inset-0 bg-linear-to-tr from-primary to-primary mask-[radial-gradient(circle,white_5px,transparent_5px)] mask-size-[16px_16px]"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </section>
    );
}

export default NationwideService;
