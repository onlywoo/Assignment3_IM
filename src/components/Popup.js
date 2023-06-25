import React from "react";
import "../styles/intArt.css";

function Popup(props) {
  return props.trigger ? (
    <div className="Popup">
      <div className="popup-inner">
        <button className="closebtn">Close</button>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}

export default Popup;
