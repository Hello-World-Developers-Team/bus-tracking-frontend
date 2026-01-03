import React from "react";
import Image from "next/image";
import BusStopSVG from "../assets/media/svg/bus-stop.svg";
import Btn from "./Buttons/Btn";

export default function BusTrackResult({
  busLines,
  busStopName_inEnglish,
  busStopName_inMyanmar,
  hasChosen,
}) {
  return (
    <div className={`busTrackResult-container ${hasChosen ? "active" : ""}`}>
      <div className="svg-container">
        <Image src={BusStopSVG} alt="" width={18} />
      </div>
      <div className="resultInfo-container">
        <h4>
          {busStopName_inEnglish} <br /> (
          <span className="myanmar">{busStopName_inMyanmar}</span>)
        </h4>
        <p>5 mins &bull; 10 km</p>
        <div className="resultBusLines-container">
          {busLines.slice(0, 3).map((busLine, index) => (
            <span key={index}>{busLine}</span>
          ))}
          {busLines.length > 4 ? (
            <span className="busLine-plus">+{busLines.length - 3}</span>
          ) : (
            ""
          )}
        </div>
        {/* <Btn btnType={"secondary"} name={"See Details"} btnSize={"S"} /> */}
      </div>
    </div>
  );
}
