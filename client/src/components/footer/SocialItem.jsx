import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SocialItem({ icon, link }) {
  return (
    <a
      href={link}
      className="w-10 h-10 border border-black/10 rounded-full flex items-center justify-center"
    >
      <FontAwesomeIcon icon={icon} />
    </a>
  );
}
