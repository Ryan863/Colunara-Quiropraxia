import React from "react";
import { cn } from "@/lib/utils";

export function BentoGrid({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-3 gap-5 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
}

export function BentoCard({
  className,
  title,
  description,
  header,
  icon,
  badge,
  footer,
}: {
  className?: string;
  title: string;
  description: string;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  badge?: string;
  footer?: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "rounded-3xl group/bento hover:shadow-2xl hover:shadow-teal-950/40 transition duration-300 p-6 md:p-8 bg-slate-900/70 backdrop-blur-md border border-white/10 justify-between flex flex-col space-y-4 relative overflow-hidden",
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 via-transparent to-transparent opacity-0 group-hover/bento:opacity-100 transition-opacity duration-500 pointer-events-none" />
      {header && <div className="w-full relative z-10">{header}</div>}
      <div className="group-hover/bento:translate-x-1 transition duration-200 z-10 flex-1 flex flex-col justify-end">
        <div className="flex items-center justify-between gap-2 mb-3">
          {icon}
          {badge && (
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-teal-500/10 text-teal-300 border border-teal-500/20">
              {badge}
            </span>
          )}
        </div>
        <h3 className="font-bold text-white mb-2 text-xl tracking-tight">{title}</h3>
        <p className="font-normal text-slate-300 text-sm leading-relaxed">{description}</p>
        {footer && <div className="mt-4 pt-3 border-t border-white/10">{footer}</div>}
      </div>
    </div>
  );
}
