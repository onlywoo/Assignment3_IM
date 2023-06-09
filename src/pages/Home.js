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
          <p>
            Here you can play a clicker game where you can buy property on a
          </p>
          <p>canvas to create your own art... as long as your rich enough</p>
          <p>In the meantime, explore the rest of the website</p>
          <div className="playImg">
            <img src={Play} />
          </div>
          <Link to="/Art">
            <button>Yes</button>
          </Link>
        </div>
      </div>
    );
  }
}
