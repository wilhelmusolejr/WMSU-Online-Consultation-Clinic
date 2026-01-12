import React from "react";

export default function FeatureCard() {
  return (
    <div className="bg-offwhite text-primary rounded-xl p-2 border border-black/20 w-10/12 mx-auto">
      <div className="bg-white min-h-56 rounded-xl border border-black/20 py-10">
        {/* image */}
        <div className="w-30 h-30 rounded-lg border bg-offwhite border-black/20 mx-auto  "></div>
        {/* heading */}
        <div className="text-center mt-10">
          <h3 className="text-2xl font-medium">100% free</h3>
          <p className="mt-4 w-10/12 mx-auto text-sm font-light leading-relaxed">
            majonders majubis ano shala ganders makyonget
          </p>
        </div>
      </div>
    </div>
  );
}
