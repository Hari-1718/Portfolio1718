"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const Lens = ({
    children,
    hovering,
    setHovering,
    className,
    zoomFactor = 1.3,
    lensSize = 150,
    isCircle = true,
}: {
    children: React.ReactNode;
    hovering: boolean;
    setHovering: (hovering: boolean) => void;
    className?: string;
    zoomFactor?: number;
    lensSize?: number;
    isCircle?: boolean;
    position?: { x: number; y: number };
}) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setMousePosition({ x, y });
    };

    return (
        <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className={cn("relative overflow-hidden cursor-none z-20 group/lens", className)}
        >
            {children}
            {hovering && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.58 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute inset-0 overflow-hidden pointer-events-none z-50"
                    style={{
                        maskImage: isCircle
                            ? `radial-gradient(circle ${lensSize / 2}px at ${mousePosition.x}px ${mousePosition.y}px, black 100%, transparent 0)`
                            : "none",
                        WebkitMaskImage: isCircle
                            ? `radial-gradient(circle ${lensSize / 2}px at ${mousePosition.x}px ${mousePosition.y}px, black 100%, transparent 0)`
                            : "none",
                        transformOrigin: `${mousePosition.x}px ${mousePosition.y}px`,
                    }}
                >
                    <div
                        className="absolute inset-0 bg-transparent"
                        style={{
                            transform: `scale(${zoomFactor}) translate3d(0,0,0)`,
                            transformOrigin: `${mousePosition.x}px ${mousePosition.y}px`,
                        }}
                    >
                        {children}
                    </div>
                    {isCircle && (
                        <div
                            className="absolute border border-white/20 rounded-full shadow-2xl pointer-events-none"
                            style={{
                                width: lensSize,
                                height: lensSize,
                                left: mousePosition.x - lensSize / 2,
                                top: mousePosition.y - lensSize / 2,
                                boxShadow: "0 0 20px 2px rgba(255,255,255,0.2), inset 0 0 20px 2px rgba(255,255,255,0.2)"
                            }}
                        />
                    )}

                </motion.div>
            )}
        </div>
    );
};
