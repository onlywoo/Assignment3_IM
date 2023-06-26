import React, { Component, useState } from "react";
import { PopupList } from "../helpers/PopupList";
import PopupItems from "../components/PopupItems";
import "../styles/intArt.css";
import Play from "../assets/playButton.png";
import firstAd from "../assets/5.png";
import secAd from "../assets/6.png";
import thirdAd from "../assets/7.png";
import fourthAd from "../assets/8.png";
import fifthAd from "../assets/9.png";
import sixthAd from "../assets/10.png";
import seventhAd from "../assets/11.png";
import eigthAd from "../assets/12.png";
import nineAd from "../assets/13.png";
import tenAd from "../assets/14.png";
import elevenAd from "../assets/15.png";
import twelveAd from "../assets/16.png";

export default class popupAds extends Component {
  render() {
    return (
      <div className="menu">
        <h1 className="menuTitle">
          <div class="grid-container">
            <img src={firstAd} />
          </div>
          <img src={Play} />
        </h1>
        <div>
          {PopupList.map((popupItem, value) => {
            return (
              <PopupItems
                name={popupItem.name}
                price={popupItem.price}
                image={popupItem.image}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

//import Popup from "../components/Popup";
//import { Modal } from "./components/Modal";
//import { useState } from "react";
//
//function pop() {
//  const [openModal, setOpenModal] = useState(false);
//  return (
//    <div className="pop">
//      <button className="open-popup">Open the Game</button>
//      <Modal openModal={openModal} setOpenModal={setOpenModal} />
//    </div>
//  );
//}
//export default pop;
//
