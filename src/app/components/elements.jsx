import Btn from "./Buttons/Btn";
import LogoutSVG from "../assets/media/svg/logout.svg";

export default function elements() {
  return (
    <>
      <div className="btns-container">
        <Btn svg={LogoutSVG} name="Logout" btnType="primary" />
        <Btn svg={LogoutSVG} name="Logout" btnType="secondary" />
      </div>
    </>
  );
}
