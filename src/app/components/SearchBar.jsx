import React from "react";
import Image from "next/image";
import BackSVG from "../assets/media/svg/arrow-left.svg";
import SearchSVG from "../assets/media/svg/search.svg";
import DeleteSVG from "../assets/media/svg/circle-x.svg";
import BtnIcon from "./Buttons/BtnIcon";

export default function SearchBar({ hasFocus, text }) {
  return (
    <div className={`searchBar-wrapper ${hasFocus ? "hasFocus" : ""}`}>
      {hasFocus && <BtnIcon svg={BackSVG} shadow={false} />}
      <form action="">
        <input type="text" placeholder={text} />
      </form>
      <BtnIcon svg={hasFocus ? DeleteSVG : SearchSVG} shadow={false} />
    </div>
  );
}
