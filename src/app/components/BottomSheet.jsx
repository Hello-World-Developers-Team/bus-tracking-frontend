import React from "react";
import Image from "next/image";
import SearchBar from "./SearchBar";
import BusTrackResult from "./BusTrackResult";
import Btn from "./Buttons/Btn";
import Suggestion from "./Suggestion";
import RecentSVG from "../assets/media/svg/clock-hour-4.svg";
import BtnIcon from "./Buttons/BtnIcon";
import CloseSVG from "../assets/media/svg/circle-x.svg";
import Step from "./Step";
import CurrentLocationSVGFilled from "../assets/media/svg/current-location-filled.svg";
import ArrowUpSVG from "../assets/media/svg/arrow-up.svg";
import TurnRightSVG from "../assets/media/svg/turn-right.svg";
import LocationSVGFilled from "../assets/media/svg/map-pin-filled.svg";
import InfoSVG from "../assets/media/svg/info-circle.svg";
import SaveSVG from "../assets/media/svg/bookmark.svg";

export default function BottomSheet({ active, content }) {
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
    {
      id: 5,
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
      <div className={`bottomSheet-container ${active ? "active" : ""}`}>
        <div className="grabHandle-container">
          <span className="grabHandle"></span>
        </div>

        {/* for track bus */}
        <div className="busTrack-container">
          <div className="results-container">
            <div className="resultsContent-container">
              <h3>
                {content === "Track Bus"
                  ? `Nearest Bus stops (${busStops.length} found)`
                  : ""}

                {content === "Direction"
                  ? `To destination with Bus Line (4)`
                  : ""}
              </h3>
              <div className="resultActions-container">
                {content === "Direction" ? (
                  <BtnIcon svg={SaveSVG} shadow={true} />
                ) : (
                  ""
                )}
                <BtnIcon svg={CloseSVG} shadow={true} />
              </div>
            </div>

            {/* for Track Bus */}
            {content === "Track Bus" ? (
              <div className="busTrackResults-wrapper">
                <div className="busTrackResults">
                  {busStops.map((busStop) => (
                    <BusTrackResult
                      key={busStop.id}
                      busStopName_inEnglish={busStop.name_en}
                      busStopName_inMyanmar={busStop.name_mm}
                      busLines={[5, 5, 4, 4, 4, 4, 4]}
                      hasChosen={true}
                    />
                  ))}
                </div>
                <div className="busTrackResultCTA-container">
                  <Btn name="Track buses" disable={true} />
                </div>
              </div>
            ) : (
              ""
            )}

            {/* for direction */}
            {content === "Direction" ? (
              <div className="directionResults-wrapper">
                <div className="directionTime-container">
                  <h4>
                    <span className="color-100">10 mins</span> (1.9 mi)
                  </h4>
                  <span>Fastest route, the good bus line</span>
                </div>
                <div className="directionSteps-container">
                  <h4>Steps</h4>
                  <div className="directionSteps">
                    <Step
                      svg={CurrentLocationSVGFilled}
                      instruction={"You location"}
                    />
                    <Step
                      svg={ArrowUpSVG}
                      instruction={"Head north"}
                      distance={"10yd"}
                    />
                    <Step
                      svg={TurnRightSVG}
                      instruction={"Turn right"}
                      distance={"1.3mi"}
                    />
                    <div className="destination">
                      <div>
                        <Image src={LocationSVGFilled} alt="" width={20} />
                      </div>
                      <div className="destination-content">
                        <h5>Destination</h5>
                        <span>
                          <Image src={InfoSVG} alt="" width={14} /> Destination
                          will be right or left.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
}
