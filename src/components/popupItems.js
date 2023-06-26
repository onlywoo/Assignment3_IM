import React, { Component } from "react";

export default class popupItem extends Component {
  render() {
    return (
      <div className="popupItem">
        <div style={{ backgroundImage: `url(${this.props.image})` }}></div>
        <h1>{this.props.name}</h1>
        <p>{this.props.price}</p>
      </div>
    );
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    var randomOrder = function (element) {
      // Viewport Dimensions
      var vpHeight = window.innerHeight;
      var vpWidth = window.innerWidth;

      // Image Position
      var xPos = getRandomInt(0, vpWidth - element.offsetWidth);
      var yPos = getRandomInt(0, vpHeight - element.offsetHeight);
      var zIndex = getRandomInt(0, 13);

      element.style.cssText +=
        "--x-position:" +
        xPos +
        "px; --y-position:" +
        yPos +
        "px; z-index:" +
        zIndex;
    };

    //Setup
    var imgs = document.querySelectorAll("img");

    imgs.forEach((the_img) => {
      window.addEventListener("load", function () {
        randomOrder(the_img);
      });
    }); //end foreach
  }
}
