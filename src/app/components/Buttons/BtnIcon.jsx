import React from "react";
import Image from "next/image";

export default function BtnIcon({ svg }) {
  return (
    <button className="btnIcon">
      <Image src={svg} alt="" width={18} />
    </button>
  );
}
