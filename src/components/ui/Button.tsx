import { ButtonHTMLAttributes, forwardRef } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant = "primary", size = "md", ...props }, ref) => {
  const variants = {
    primary: "bg-primary-600 hover:bg-primary-500 text-white shadow-lg hover:shadow-xl hover:-translate-y-1",
    secondary: "bg-secondary-500 hover:bg-secondary-400 text-white shadow-lg hover:shadow-xl hover:-translate-y-1",
    outline: "border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white",
    ghost: "text-primary-600 hover:bg-primary-50",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button ref={ref} className={cn("inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none", variants[variant], sizes[size], className)} {...props} />
  );
});

Button.displayName = "Button";

export { Button, cn };
