import React from "react";

export function Card({ children, className = "", ...props }) {
  return (
    <div className={`bg-white shadow-lg rounded-2xl overflow-hidden flex flex-col ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CardContent({ children, className = "", ...props }) {
  return (
    <div className={`p-4 flex flex-col flex-grow ${className}`} {...props}>
      {children}
    </div>
  );
}

