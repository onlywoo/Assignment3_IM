import React, { Component, useState } from "react";
import { PopupList } from "../helpers/PopupList";
import PopupItems from "../components/PopupItems";
import Playbtn from "../assets/playButton.png";
import "../styles/intArt.css";

export default class popupAds extends Component {
  render() {
    return (
      <div className="menutwo">
        <div className="menuTitle">
          <button>
            <img src={Playbtn} id="myButton" onClick={"butClick()"} />
          </button>
        </div>
        <div>
          {PopupList.map((popupItem, value) => {
            return (
              <PopupItems
                name={popupItem.name}
                button={popupItem.button}
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
