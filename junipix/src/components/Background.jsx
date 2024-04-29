import React from "react";
import back from "./style/background.jpeg";
import "./images/background.css";

export default function Background() {
  return (
    <div className="backImage">
      <img src={back} alt="" />
    </div>
  );
}
