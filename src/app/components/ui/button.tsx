// import { cn } from "@/lib/utils";
import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "default" | "outline" | "ghost" | "gradient";
    size?: "sm" | "md" | "lg";
}

export function Button({
    className,
    variant = "default",
    size = "md",
    ...props
}: ButtonProps) {
    return (
        <button
            className={cn(
                "font-medium transition-all duration-300 shadow-lg hover:shadow-xl",
                // Size variants
                size === "sm" && "px-4 py-2 text-sm rounded-full",
                size === "md" && "px-6 py-3 rounded-full",
                size === "lg" && "px-8 py-4 text-lg rounded-full",
                // Style variants
                variant === "default" && "bg-blue-600 text-white hover:bg-blue-700",
                variant === "outline" && "border-2 border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800",
                variant === "ghost" && "bg-transparent text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20",
                variant === "gradient" && "bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white",
                className
            )}
            {...props}
        />
    );
}
