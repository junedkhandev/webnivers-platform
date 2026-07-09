import React, { ReactNode } from "react";
import { design } from "@/config/design";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Container({
  children,
  className = "",
}: ContainerProps) {
  return React.createElement(
    "div",
    { className: `${design.container} ${className}` },
    children
  );
}