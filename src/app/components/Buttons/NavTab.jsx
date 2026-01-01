import Image from "next/image";

export default function NavTab({ svg, name, active, hasNew, profile }) {
  return (
    <button className={`btn-nav ${active && "active"} ${hasNew && "has-new"}`}>
      <div className="icon-container">
        <Image src={svg} alt="" className={`img svg ${profile && "profile"}`} />
      </div>
      <span>{name}</span>
    </button>
  );
}
