import React from "react";
import Image from "next/image";

export default function Step({ svg, instruction, distance }) {
  return (
    <div className="directionStep">
      <div>
        <Image src={svg} alt="" width={20} />
      </div>
      <div className="directionStep-content">
        <h5>{instruction}</h5>
        <span>{distance}</span>
      </div>
    </div>
  );
}
