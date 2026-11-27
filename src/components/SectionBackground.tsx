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
                "pointer-events-none absolute right-0 top-6 z-0 select-none px-6 sm:px-10",
                className
            )}
            aria-hidden="true"
        >
            <span className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground/50">
                {text}
            </span>
        </div>
    );
};

export default SectionBackground;
