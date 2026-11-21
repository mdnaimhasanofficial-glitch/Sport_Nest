"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutGrid, ArrowLeftRight, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface NavItem {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

const navItems: NavItem[] = [
  {
    label: "Services",
    href: "/services",
    icon: LayoutGrid,
  },
  {
    label: "Compare",
    href: "/compare",
    icon: ArrowLeftRight,
  },
  {
    label: "About Us",
    href: "/about",
    icon: Info,
  },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Primary Navigation"
      className="sticky top-20 z-40 w-full border-b border-slate-200 bg-white text-slate-800 shadow-[0_1px_2px_rgba(0,0,0,0.03)]"
    >
      <div className="mx-auto flex min-h-16 max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-2.5 sm:h-20 sm:px-8 sm:py-0 lg:px-12">
        {/* Left Navigation Links */}
        <ul className="flex flex-wrap items-center gap-4 sm:gap-8 md:gap-11">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "group inline-flex items-center gap-2 text-sm font-normal tracking-tight transition-colors sm:text-[15px]",
                    isActive
                      ? "font-medium text-[#162A65]"
                      : "text-[#27272A] hover:text-[#162A65]",
                  )}
                >
                  <Icon
                    className={cn(
                      "h-4 w-4 shrink-0 stroke-[1.7] transition-transform duration-150 group-hover:scale-105",
                      isActive
                        ? "text-[#162A65]"
                        : "text-[#3F3F46] group-hover:text-[#162A65]",
                    )}
                  />
                  <span>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Right Primary CTA Button */}
        <div className="flex shrink-0 items-center">
          <Button className="h-10 rounded-[10px] bg-[#FFC700] px-5 text-sm font-medium text-white shadow-none transition-colors hover:bg-[#F0B900] focus-visible:ring-2 focus-visible:ring-[#FFC700]/50 sm:h-11 sm:px-8 sm:text-[15px]">
            <Link href="/book-now">Book Now</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
