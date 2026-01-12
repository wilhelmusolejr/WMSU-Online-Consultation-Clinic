import React from "react";

export default function Heading({ title, subtitle }) {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-medium leading-relaxed text-white text-center">
        {title}
      </h2>
      {/* border */}
      <div className="w-4/12 mx-auto h-3 rounded-full bg-accent mt-10"></div>
    </div>
  );
}
