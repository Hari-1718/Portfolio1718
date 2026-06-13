'use client'

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Download, Menu } from "lucide-react";
import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuViewport,
} from "./ui/navigation-menu";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ThemeChanger } from "./theme-changer";
import { ModeToggle } from "./ModeToggler";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import ResumeQR from "@/assets/Hari_Resume_QR.png";

interface NavLink {
  href: string;
  label: string;
}

// Navigation links
const navLinks: NavLink[] = [
  { href: "#about-me", label: "About Me" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact-me", label: "Contact Me" },
];

// Navbar component
const Navbar: React.FC = () => {
  const highlightRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = (e: React.MouseEvent<HTMLLIElement>) => {
    const item = e.currentTarget;
    const highlight = highlightRef.current;
    if (item && highlight) {
      const left = item.offsetLeft;
      const width = item.offsetWidth;
      highlight.style.left = `${left}px`;
      highlight.style.width = `${width}px`;
      highlight.style.opacity = "1";
    }
  };

  const handleMouseLeave = () => {
    const highlight = highlightRef.current;
    if (highlight) {
      highlight.style.opacity = "0";
    }
  };

  return (
    <NavigationMenu className="bg-background/60 backdrop-blur-xs sticky top-0 z-50">
      <NavigationMenuList className="w-dvw h-[4rem] px-4 max-md:px-2 items-center">
        {/* Logo/Name */}
        <NavigationMenuItem className="mr-auto">
          <Link className="text-xl font-montserrat py-3 font-bold" href="/">
            Hari Prasad Chinimilli
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <ThemeChanger />
        </NavigationMenuItem>
        <NavigationMenuItem>
          <ModeToggle />
        </NavigationMenuItem>

        {/* Mobile menu */}
        <NavigationMenuItem className="sm:hidden">
          <Drawer>
            <DrawerTrigger asChild aria-label="Open Navigation Drawer">
              <Button size="icon" variant="ghost">
                <Menu />
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerTitle hidden>Open Navigation Drawer</DrawerTitle>
              <DrawerDescription hidden>
                Navigation for Mobile Devices
              </DrawerDescription>
              <NavigationMenuList className="flex flex-col space-y-1 py-5">
                {navLinks.map((item) => (
                  <NavigationMenuItem key={item.href}>
                    <Link
                      href={item.href}
                      className="font-normal p-3 hover:bg-accent hover:text-accent-foreground w-full block"
                    >
                      {item.label}
                    </Link>
                  </NavigationMenuItem>
                ))}
                <NavigationMenuItem>
                  <Button
                    asChild
                    variant={'outline'}
                    className="text-xs"
                    aria-label="Open Resume PDF"
                  >
                      <Link
                        href="/Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Download />
                        Resume
                      </Link>
                  </Button>
                </NavigationMenuItem>
              </NavigationMenuList>
            </DrawerContent>
          </Drawer>
        </NavigationMenuItem>

        {/* Desktop navigation */}
        <NavigationMenuItem className="max-sm:hidden">
          <NavigationMenuList
            className="relative flex gap-4 items-center"
            onMouseLeave={handleMouseLeave}
          >
            <div
              className="absolute bottom-0 h-0.5 bg-primary transition-all duration-300"
              ref={highlightRef}
              style={{ left: 0, width: 0, opacity: 0 }}
            />
            {navLinks.map((item) => (
              <NavigationMenuItem
                key={item.href}
                onMouseEnter={handleMouseEnter}
              >
                <Link
                  href={item.href}
                  className="font-normal p-3 transition-colors text-muted-foreground hover:text-primary"
                >
                  {item.label}
                </Link>
              </NavigationMenuItem>
            ))}
            <NavigationMenuItem>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant={'outline'} className="text-xs hover:text-primary" aria-label="Show resume QR">
                    <Download />
                    Resume
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="bottom" className="p-4 flex flex-col items-center gap-2">
                  <div className="rounded-xl overflow-hidden border border-primary/30 bg-background shadow-sm">
                    <Image
                      src={ResumeQR}
                      alt="Resume QR code"
                      width={180}
                      height={180}
                      className="block"
                    />
                  </div>
                  <p className="text-[0.7rem] text-primary-foreground/80">Scan this QR to access my resume</p>
                </TooltipContent>
              </Tooltip>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenuItem>
      </NavigationMenuList>
      <NavigationMenuViewport />
    </NavigationMenu>
  );
};

export default Navbar;