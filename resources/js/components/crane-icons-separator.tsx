import Wrapper from "@/components/ui/misc/wrapper.tsx";
import {Carne2Icon, Crane1Icon, Crane3Icon, Crane5Icon, CraneTruckIcon} from "@/components/icons";

interface CraneIconsSeparatorProps {
    className?: string;
}

export default function CraneIconsSeparator({className = ""}: CraneIconsSeparatorProps) {
    return (
        <section className={`py-8 bg-background border-y border-border/60 ${className}`}>
            <Wrapper>
                <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14 lg:gap-20">
                    <div
                        className="flex items-center justify-center p-2 rounded-xl transition-all duration-300 hover:scale-110">
                        <CraneTruckIcon
                            size={100}
                            className="text-muted-foreground hover:text-primary transition-colors duration-300"
                        />
                    </div>
                    <div
                        className="flex items-center justify-center p-2 rounded-xl transition-all duration-300 hover:scale-110">
                        <Crane1Icon
                            size={100}
                            className="text-muted-foreground hover:text-secondary transition-colors duration-300"
                        />
                    </div>
                    <div
                        className="flex items-center justify-center p-2 rounded-xl transition-all duration-300 hover:scale-110">
                        <Crane3Icon
                            size={100}
                            className="text-muted-foreground hover:text-primary transition-colors duration-300"
                        />
                    </div>
                    <div
                        className="flex items-center justify-center p-2 rounded-xl transition-all duration-300 hover:scale-110">
                        <Carne2Icon
                            size={100}
                            className="text-muted-foreground hover:text-secondary transition-colors duration-300"
                        />
                    </div>
                    <div
                        className="flex items-center justify-center p-2 rounded-xl transition-all duration-300 hover:scale-110">
                        <Crane5Icon
                            size={100}
                            className="text-muted-foreground hover:text-primary transition-colors duration-300"
                        />
                    </div>
                </div>
            </Wrapper>
        </section>
    );
}
