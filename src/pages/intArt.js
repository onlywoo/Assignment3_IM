import React, { Component, useState } from "react";
import { PopupList } from "../helpers/PopupList";
import popupItems from "../components/popupItems";
import "../styles/intArt.css";

export default class popupAds extends Component {
  render() {
    return (
      <div className="ads">
        <h1 className="adTitles">Play game</h1>
        <div>
          {PopupList.map((PopupItem, value) => {
            return (
              <popupItems
                value={value}
                name={PopupItem.name}
                image={PopupItem.image}
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
