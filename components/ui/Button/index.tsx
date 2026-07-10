import { ButtonHTMLAttributes, ReactNode } from "react";
import { design } from "@/config/design";

type ButtonVariant = "primary" | "secondary";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
}

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const variantClass =
    variant === "primary"
      ? design.button.primary
      : design.button.secondary;

  return (
    <button
      className={`${variantClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}