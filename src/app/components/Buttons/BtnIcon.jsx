import React from "react";
import Image from "next/image";

export default function BtnIcon({ svg, shadow }) {
  return (
    <button className={`btnIcon ${shadow ? "shadow" : ""}`}>
      <Image src={svg} alt="" width={18} />
    </button>
  );
}
