import React from "react";
import Image from "next/image";

export default function Btn({ svg, name, btnType, btnSize, disable }) {
  return (
    <button
      className={`btn btn-${btnType} btn-${btnSize} ${
        disable ? "disable" : ""
      }`}
    >
      {svg && <Image src={svg} alt="" width={btnSize === "S" ? 16 : 18} />}{" "}
      {name}
    </button>
  );
}
