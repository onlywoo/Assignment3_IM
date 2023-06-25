import React, { Component } from "react";
import "../styles/intArt.css";
import Popup from "../components/Popup";
function pop() {
  {
    return (
      <div className="pop">
        <main>
          <button>Open the Game</button>
          <Popup trigger={false}>
            {" "}
            <h1>My popup</h1>
          </Popup>
        </main>
      </div>
    );
  }
}
export default pop;
