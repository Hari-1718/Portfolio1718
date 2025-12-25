import React from "react";
import { cn } from "@/lib/utils";

interface SectionBackgroundProps {
    text: string;
    className?: string;
}

const SectionBackground: React.FC<SectionBackgroundProps> = ({ text, className }) => {
    return (
        <div
            className={cn(
                "absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none z-0",
                className
            )}
            aria-hidden="true"
        >
            <span className="text-[12vw] font-black uppercase text-foreground/10 dark:text-foreground/5 whitespace-nowrap leading-none tracking-tighter">
                {text}
            </span>
        </div>
    );
};

export default SectionBackground;
