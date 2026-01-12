import React from "react";

export default function DoctorCard({ img, name }) {
  return (
    <div className="border border-black/10 rounded-lg bg-white p-2">
      {/* image */}
      <div className="h-52 bg-gray-200 rounded-lg"></div>
      {/* text */}
      <h2 className="mt-2">{name}</h2>
    </div>
  );
}
