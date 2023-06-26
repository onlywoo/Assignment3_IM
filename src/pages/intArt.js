import React, { Component, useState } from "react";
import { PopupList } from "../helpers/PopupList";
import PopupItems from "../components/PopupItems";
import "../styles/intArt.css";

export default class popupAds extends Component {
  render() {
    return (
      <div className="menu">
        <h1 className="menuTitle">Play game</h1>
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
