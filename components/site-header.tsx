"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Compass, Sparkles, SquarePen, UserRound } from "lucide-react";

import { currentUser, navItems } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

const icons = {
  "/explore": Compass,
  "/match": Sparkles,
  "/post": SquarePen,
  "/profile": UserRound
} as const;

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/60 bg-background/85 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary text-sm font-bold text-primary-foreground shadow-warm">
            SS
          </div>
          <div>
            <p className="text-base font-bold">SkillSwap</p>
            <p className="text-xs text-muted-foreground">技能互换</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  isActive ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 rounded-full border bg-card px-3 py-2 md:flex">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-sm font-semibold text-primary">
            {currentUser.avatar}
          </div>
          <div>
            <p className="text-sm font-semibold">{currentUser.name}</p>
            <p className="text-xs text-muted-foreground">{currentUser.city}</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/60 bg-background/95 md:hidden">
        <div className="container grid grid-cols-4 gap-1 py-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = icons[item.href];
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex flex-col items-center justify-center gap-1 rounded-2xl px-2 py-2 text-xs font-medium transition-colors",
                  isActive ? "bg-primary/10 text-primary" : "text-muted-foreground"
                )}
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
}
