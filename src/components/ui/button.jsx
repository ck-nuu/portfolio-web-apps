import React from "react";

export function Button({ children, asChild, variant = "default", className = "", ...props }) {
  const baseClass = "px-4 py-2 rounded-lg font-semibold transition-colors duration-200";
  const variantClass = variant === "outline"
    ? "border border-gray-400 text-gray-700 hover:bg-gray-100"
    : "bg-blue-600 text-white hover:bg-blue-700";

  const finalClass = `${baseClass} ${variantClass} ${className}`;

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, { className: finalClass, ...props });
  }

  return <button className={`${finalClass}`} {...props}>{children}</button>;
}
