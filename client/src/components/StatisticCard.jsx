import React from "react";

export default function StatisticCard({ number, title }) {
  return (
    <div className="text-primary">
      <h2 className="text-5xl mb-3 font-medium ">{number}</h2>
      <p className="font-medium uppercase text-sm">{title}</p>
    </div>
  );
}
