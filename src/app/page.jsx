import Image from "next/image";
import Navbar from "./components/Navbar";
import PopUp from "./components/PopUp";
import Modal from "./components/Modal";
import BottomSheet from "./components/BottomSheet";

export default function Home() {
  return (
    <>
      {/* <Elements /> */}
      {/* remove search bar when track bus is active */}
      {/* <PopUp hasFocus={true} /> */}
      <Navbar />
      {/* <Modal
        active={false}
        title="Request to use your current location."
        description={`We need to get access your current location to show the nearest bus
          stop's location.`}
      /> */}
      <BottomSheet hasActive={true} content="track bus" />
    </>
  );
}
