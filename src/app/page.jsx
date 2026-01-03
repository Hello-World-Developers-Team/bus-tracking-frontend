import Image from "next/image";
import Navbar from "./components/Navbar";
import PopUp from "./components/PopUp";
import Modal from "./components/Modal";
import BottomSheet from "./components/BottomSheet";
import Elements from "./components/elements";

export default function Home() {
  const navBars = ["Track Bus", "Direction", "Account", "Profile"];

  return (
    <>
      {/* <Elements /> */}
      <PopUp hasFocus={false} active={true} content={navBars[1]} />
      <Navbar />
      {/* <Modal
        active={true}
        title="Request to use your current location."
        description={`We need to get access your current location to show the nearest bus
          stop's location.`}
      /> */}
      <BottomSheet active={true} content={navBars[0]} />
    </>
  );
}
