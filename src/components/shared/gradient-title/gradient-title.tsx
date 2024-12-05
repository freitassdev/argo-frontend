import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export default function GradientTitle({ children, className }: { children: ReactNode, className?: string }) {
    return (
        <h1 className={cn("w-fit lg:leading-[1.1] text-balance bg-gradient-to-br from-primary from-55% to-primary/40 bg-clip-text py-4 px-1 text-5xl font-bold leading-none tracking-tighter text-transparent dark:from-white dark:to-black", className)}>
            {children}
        </h1>
    )
}