import * as React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  variant?: "default" | "secondary";
  size?: "sm" | "md" | "lg";
  className?: string;
  children?: React.ReactNode;
};

export function Button({ asChild, variant="default", size="md", className="", children, ...props }: ButtonProps) {
  const base = "inline-flex items-center justify-center font-medium transition rounded-md";
  const variants = {
    default: "bg-violet-600 text-white hover:bg-violet-500",
    secondary: "bg-white/10 text-white hover:bg-white/20",
  } as const;
  const sizes = {
    sm: "h-8 px-3 text-sm",
    md: "h-10 px-4",
    lg: "h-11 px-5 text-base",
  } as const;
  const cls = [base, variants[variant], sizes[size], className].join(" ");
  if (asChild) {
    return <span className={cls} {...props as any}>{children}</span>;
  }
  return <button className={cls} {...props}>{children}</button>;
}
