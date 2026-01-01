import React from "react";
import DirectionSearch from "./DirectionSearch";
import Suggestion from "./Suggestion";
import RecentSVG from "../assets/media/svg/clock-hour-4.svg";
import CurrentLocationSVG from "../assets/media/svg/current-location.svg";
import BusStopSVG from "../assets/media/svg/bus-stop.svg";
import MapSVG from "../assets/media/svg/map.svg";
import Btn from "./Buttons/Btn";

export default function PopUp({ hasFocus }) {
  return (
    <div className="popUp-container">
      <div className={`mainSearchBar-container ${hasFocus && 'hasFocus'}`}>
        {/* <SearchBar hasFocus={true} text="Search Here" /> */}
        <DirectionSearch hasFocus={hasFocus} />
      </div>
      <div className={`content-container ${hasFocus && "active"}`}>
        <div className="suggestions-container">
          <Suggestion svg={CurrentLocationSVG} text="Your location" />
          <Suggestion
            svg={RecentSVG}
            text="University of information technologyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy"
          />
          <Suggestion svg={BusStopSVG} text="Nat Sin" />
          <Suggestion svg={BusStopSVG} text="Nat Sin" />
          <Suggestion svg={BusStopSVG} text="Nat Sin" />
          <Suggestion svg={BusStopSVG} text="Nat Sin" />
          <Suggestion svg={BusStopSVG} text="Nat Sin" />
          <Suggestion svg={BusStopSVG} text="Nat Sin" />
          <Suggestion svg={BusStopSVG} text="Nat Sin" />
          <Suggestion svg={BusStopSVG} text="Nat Sin" />
          <Suggestion svg={BusStopSVG} text="Nat Sin" />
          <Suggestion svg={BusStopSVG} text="Nat Sin" />
          <Suggestion svg={BusStopSVG} text="Nat Sin" />
          <Suggestion svg={BusStopSVG} text="Nat Sin" />
        </div>
        <div className="contentCTA-container">
          <Btn svg={MapSVG} btnType={"primary"} name={"Choose on Map"} />
        </div>
      </div>
    </div>
  );
}
