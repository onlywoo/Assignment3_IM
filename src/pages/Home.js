import React, { Component } from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";
import Play from "../assets/playButton.png";
export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <h1>SidDaSleuth's Homepage</h1>
        <div className="headerCont">
          <h2>Welcome to the Clicker game</h2>
          <p>You can play by clicking the button down below</p>
          <p></p>
          <div className="playImg">
            <img src={Play} />
          </div>
          <div className="button">
            <Link to="/intArt">Yes</Link>
          </div>
        </div>
      </div>
    );
  }
}
