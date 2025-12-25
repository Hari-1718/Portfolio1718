import { cn } from "@/lib/utils";
import React from "react";

export default function DotsBackground({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={cn("relative", className)}>
      <div className="relative z-20">
        {children}
      </div>
    </div>
  );
}