import NavTab from "./Buttons/NavTab.jsx";
import DirectionSVG from "../assets/media//svg/direction-sign.svg";
import TrackSVG from "../assets/media//svg/track.svg";
import ProfileImg from '../assets/media/images/profile.jpg'
import UserImg from "../assets/media/svg/user.svg";

export default function Navbar() {
  return (
    <nav className="nav-container">
      <NavTab svg={TrackSVG} name="Track Bus" active={true} />
      <NavTab svg={DirectionSVG} name="Direction" />
      <NavTab svg={UserImg} name="Account" />
      <NavTab svg={ProfileImg} name="Profile" profile={true} hasNew={true} />
    </nav>
  );
}
