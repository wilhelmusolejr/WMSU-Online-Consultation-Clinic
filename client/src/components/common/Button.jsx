import React from "react";

export default function Button({
  children,
  className = "",
  variant = "primary",
}) {
  const variantStyles = {
    primary: "bg-primary text-white",
    secondary: "bg-accent",
    tertiary: "bg-white",
  };

  const baseStyle = `px-5 py-3 border font-bold border-black/10 rounded-4xl w-fit flex items-center gap-2 shadow-md text-primary`;

  return (
    <button className={`${baseStyle} ${variantStyles[variant]} ${className}`}>
      {children}
    </button>
  );
}
