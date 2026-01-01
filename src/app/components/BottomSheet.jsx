import React from "react";
import Image from "next/image";
import SearchBar from "./SearchBar";
import BusTrackResult from "./BusTrackResult";
import Btn from "./Buttons/Btn";
import Suggestion from "./Suggestion";
import BusStopSVG from "../assets/media/svg/bus-stop.svg";
import RecentSVG from "../assets/media/svg/clock-hour-4.svg";

export default function BottomSheet({ hasActive, content }) {
  const busStops = [
    {
      id: 1,
      name_en: "Nat Sin",
      name_mm: "နတ်စင်",
      road_en: "No. 2 Main Road",
      road_mm: "အမှတ်(၂)လမ်းမ",
      township_en: "South Dagon",
      township_mm: "တောင်ဒဂုံ",
      latitude: 16.868886,
      longitude: 96.222571,
    },
    {
      id: 2,
      name_en: "Nat Sin",
      name_mm: "နတ်စင်",
      road_en: "No. 2 Main Road",
      road_mm: "အမှတ်(၂)လမ်းမ",
      township_en: "South Dagon",
      township_mm: "တောင်ဒဂုံ",
      latitude: 16.868886,
      longitude: 96.222571,
    },
    {
      id: 3,
      name_en: "Nat Sin",
      name_mm: "နတ်စင်",
      road_en: "No. 2 Main Road",
      road_mm: "အမှတ်(၂)လမ်းမ",
      township_en: "South Dagon",
      township_mm: "တောင်ဒဂုံ",
      latitude: 16.868886,
      longitude: 96.222571,
    },
    {
      id: 4,
      name_en: "Nat Sin",
      name_mm: "နတ်စင်",
      road_en: "No. 2 Main Road",
      road_mm: "အမှတ်(၂)လမ်းမ",
      township_en: "South Dagon",
      township_mm: "တောင်ဒဂုံ",
      latitude: 16.868886,
      longitude: 96.222571,
    },
  ];
  return (
    <>
      <div className={`overlay ${hasActive && "active"}`}></div>
      <div className={`bottomSheet-container ${hasActive && "active"}`}>
        <div className="grabHandle-container">
          <span className="grabHandle"></span>
        </div>
        <div className="busTrack-search-container">
          <SearchBar text="Search Other Bus Stops" />
        </div>
        <div className="busTrack-recent-container">
          <h3>Recent</h3>
          <div className="busTrack-recent-wrapper">
            <Suggestion svg={RecentSVG} text={"Nat Sin"} />
            <Suggestion svg={RecentSVG} text={"Nat Sin"} />
          </div>
          <div className="busTrack-recent-CTA">
            <Btn name={"More from history"} />
          </div>
        </div>
        <div className="results-container">
          <h3>Nearest Bus stops ({`${busStops.length}`} found)</h3>
          <div className="busTrackResults-container">
            {busStops.map((busStop) => (
              <BusTrackResult
                key={busStop.id}
                busStopName_inEnglish={busStop.name_en}
                busStopName_inMyanmar={busStop.name_mm}
                busLines={[5, 105, 3]}
              />
            ))}
          </div>
          <div className="resultCTA-container">
            <Btn name="Track buses" />
          </div>
        </div>
      </div>
    </>
  );
}
