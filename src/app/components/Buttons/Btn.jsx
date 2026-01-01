import React from "react";
import Image from "next/image";

export default function Btn({ svg, name, btnType, btnSize }) {
  return (
    <button className={`btn btn-${btnType}`}>
      {svg && <Image src={svg} alt="" />} {name}
    </button>
  );
}
