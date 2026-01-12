import React from "react";

import logoImg from "../assets/logo.png";

export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="h-16 w-16 rounded-full border border-black/50">
        <img src={logoImg} alt="" />
      </div>
      <p className="font-bold text-xl uppercase text-[#0B5534]">
        Home economics
      </p>
    </div>
  );
}
