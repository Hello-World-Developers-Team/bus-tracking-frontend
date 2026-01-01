import React from "react";
import Image from "next/image";
import CurrentLocationSVG from "../assets/media/svg/current-location.svg";
import CircleSVG from "../assets/media/svg/circle.svg";
import LocationSVG from "../assets/media/svg/map-pin.svg";
import PlusPlaceSVG from "../assets/media/svg/map-pin-plus.svg";
import ExchangeSVG from "../assets/media/svg/exchange.svg";
import DeleteSVG from "../assets/media/svg/circle-x.svg";
import DotsSVG from "../assets/media/svg/dots-vertical.svg";

export default function DirectionSearch({ hasFocus }) {
  const svgSize = 18;
  return (
    <div className={`directionSearch-wrapper ${hasFocus && "hasFocus"}`}>
      <div className="directionSearch-form-container">
        <form action="">
          <div className="dots-container">
            <Image src={DotsSVG} alt="" width={svgSize} />
            <span className="separator"></span>
          </div>
          <div className="input-field">
            <Image src={CircleSVG} alt="" width={svgSize} />
            <input
              type="text"
              placeholder="Choose starting point, or click on the map"
            />
            <Image
              src={DeleteSVG}
              alt=""
              className="delete-btn"
              width={svgSize}
            />
          </div>
          <div className="input-field">
            <Image src={LocationSVG} alt="" width={svgSize} />
            <input
              type="text"
              placeholder="Choose destination, or click on the map"
            />
            <Image
              src={DeleteSVG}
              alt=""
              className="delete-btn"
              width={svgSize}
            />
          </div>
        </form>
        <div className="placeExchange-container">
          <Image src={ExchangeSVG} alt="" width={svgSize} />
        </div>
      </div>
    </div>
  );
}
