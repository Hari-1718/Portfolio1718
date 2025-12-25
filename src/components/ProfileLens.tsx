"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Lens } from "./ui/lens";

export function ProfileLens() {
    const [hovering, setHovering] = useState(false);

    return (
        <div className="flex justify-center items-center">
            <Lens hovering={hovering} setHovering={setHovering} lensSize={150} zoomFactor={1.2} isCircle={true} className="rounded-full">
                <div className="relative w-[300px] h-[300px] max-sm:w-[250px] max-sm:h-[250px] rounded-full overflow-hidden border-4 border-primary/20 shadow-lg">
                    <Image
                        src="/hari-profile.jpg"
                        alt="Hari Prasad Chinimilli"
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 250px, 300px"
                        priority
                    />
                </div>
            </Lens>
        </div>
    );
}
