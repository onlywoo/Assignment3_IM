import React, { Component } from "react";
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import ManageSearchSharpIcon from "@mui/icons-material/ManageSearchSharp";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openLinks: false,
    };
    this.toggleNav = this.toggleNav.bind(this);
  }
  toggleNav() {
    this.setState((prevState) => ({
      openLinks: !prevState.openLinks,
    }));
  }
  render() {
    return (
      <div className="navBar">
        <div className="leftSide" id={this.state.openLinks ? "open" : "close"}>
          <img src={Logo} />

          <div className="hiddenLinks">
            {" "}
            <Link to="/">Home</Link>
            <Link to="/Menu">Writings</Link>
            <Link to="/Design">Designs</Link>
            <Link to="/intArt">Art</Link>
          </div>
        </div>

        <div className="rightSide">
          <Link to="/">Home</Link>
          <Link to="/Menu">Writings</Link>
          <Link to="/Design">Designs</Link>
          <Link to="/intArt">Art</Link>
          <div className="icon">
            <ManageSearchSharpIcon />
          </div>
          <button onClick={this.toggleNav}>
            <ManageSearchSharpIcon />
          </button>
        </div>
      </div>
    );
  }
}
