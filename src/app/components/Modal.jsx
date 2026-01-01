import React from "react";
import Btn from "./Buttons/Btn";

export default function Modal({ active, title, description }) {
  return (
    <>
      <div className={`overlay ${active && "active"}`}></div>
      <div className={`modal-container ${active && "active"}`}>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="modalCTA-container">
          <Btn name="Decline" btnType="secondary" />
          <Btn name="Accept" btnType="primary" />
        </div>
      </div>
    </>
  );
}
