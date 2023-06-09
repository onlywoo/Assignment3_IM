import React, { Component } from "react";
import Twitter from "../assets/Twt.png";
import Insta from "../assets/Ig.png";
import Twitch from "../assets/Twitch.png";
import follow from "../assets/follow.png";
import "../styles/Footer.css";
import { Link } from "react-router-dom";

export default class Footer extends Component {
  render() {
    return (
      <div className="foot">
        <div className="follow">
          <img src={follow} />
        </div>
        <div className="icons">
          <a href="https://twitter.com/yoongibbyyy" target="_blank">
            <img src={Twitter} />
          </a>
          <a href="https://www.instagram.com/ariana__tae/" target="_blank">
            <img src={Insta} />
          </a>
          <a href="https://twitch.tv/SidDaSleuth" target="_blank">
            <img src={Twitch} />
          </a>
        </div>
      </div>
    );
  }
}
