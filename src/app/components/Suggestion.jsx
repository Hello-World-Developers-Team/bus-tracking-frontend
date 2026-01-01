import Image from "next/image";

export default function Suggestion({ svg, text }) {
  return (
    <div className="suggestion">
      <div className="icon-container">
        <Image src={svg} alt="" />
      </div>
      <h5>{text}</h5>
    </div>
  );
}
