// import { cn } from "@/lib/utils";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export function Card({ children, className }: { children: ReactNode; className?: string }) {
    return (
        <div className={cn("rounded-xl shadow-lg border border-gray-200 dark:border-gray-700", className)}>
            {children}
        </div>
    );
}

export function CardContent({ children, className }: { children: ReactNode; className?: string }) {
    return <div className={cn("p-4", className)}>{children}</div>;
}
