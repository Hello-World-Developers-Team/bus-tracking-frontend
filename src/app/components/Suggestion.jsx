import Image from "next/image";

export default function Suggestion({ svg, text, svgSize }) {
  return (
    <div className="suggestion">
      <div className="icon-container shadow">
        <Image src={svg} alt="" width={svgSize} />
      </div>
      <h5>{text}</h5>
    </div>
  );
}
