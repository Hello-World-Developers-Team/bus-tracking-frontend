import React from "react";
import Image from "next/image";
import SearchBar from "./SearchBar";
import DirectionSearch from "./DirectionSearch";
import Suggestion from "./Suggestion";
import RecentSVG from "../assets/media/svg/clock-hour-4.svg";
import CurrentLocationSVG from "../assets/media/svg/current-location.svg";
import BusStopSVG from "../assets/media/svg/bus-stop.svg";
import MapSVG from "../assets/media/svg/map.svg";
import ClickSVG from "../assets/media/svg/hand-click.svg";
import Btn from "./Buttons/Btn";
import BtnDiv from "./Buttons/BtnDiv";

export default function PopUp({ hasFocus, active, content }) {
  const containerIconSize = 20;
  return (
    <div
      className={`popUp-container ${active ? "active" : ""} ${
        hasFocus ? "hasFocus" : ""
      }`}
    >
      <div className={`mainSearchBar-container ${hasFocus ? "hasFocus" : ""}`}>
        {content === "Track Bus" ? (
          <SearchBar hasFocus={hasFocus} text="Search Bus Stops" />
        ) : (
          ""
        )}
        {content === "Direction" ? <DirectionSearch hasFocus={hasFocus} /> : ""}
        {hasFocus ? (
          <div className="contentCTA-container">
            <div className="icon-container">
              <Image src={MapSVG} alt="" width={containerIconSize} />
            </div>
            <div className="right-container">
              <h5>Choose on Map</h5>
              <Btn
                svg={ClickSVG}
                btnType={"primary"}
                name={"Map"}
                btnSize={"S"}
              />
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className={`content-container ${hasFocus ? "active" : ""}`}>
        <div className="suggestions-container">
          {/* Latest 8 suggestions (maximum) */}
          <Suggestion
            svg={CurrentLocationSVG}
            text="Your location"
            svgSize={containerIconSize}
          />
          <Suggestion
            svg={RecentSVG}
            text="University of information technologyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy"
            svgSize={containerIconSize}
          />
          <Suggestion
            svg={BusStopSVG}
            text="Nat Sin"
            svgSize={containerIconSize}
          />
          <Suggestion
            svg={BusStopSVG}
            text="Nat Sin"
            svgSize={containerIconSize}
          />
          <Suggestion
            svg={BusStopSVG}
            text="Nat Sin"
            svgSize={containerIconSize}
          />
          <Suggestion
            svg={BusStopSVG}
            text="Nat Sin"
            svgSize={containerIconSize}
          />
          <Suggestion
            svg={BusStopSVG}
            text="Nat Sin"
            svgSize={containerIconSize}
          />
          <Suggestion
            svg={BusStopSVG}
            text="Nat Sin"
            svgSize={containerIconSize}
          />
          <BtnDiv text={"More from History"} />
        </div>
      </div>
    </div>
  );
}
