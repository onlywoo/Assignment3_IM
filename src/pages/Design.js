import React, { Component } from "react";
import page1 from "../assets/1.png";
import page2 from "../assets/2.png";
import page3 from "../assets/3.png";
import page4 from "../assets/4.png";
import homePageWF from "../assets/HPWireframe.png";
import BlogWF from "../assets/blogWirefream.png";
import BlogWF2 from "../assets/blog2WF.png";
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
import "../styles/Design.css";

export default class Design extends Component {
  render() {
    return (
      <div className="design">
        <div className="logo">
          <img src={Logo} />
        </div>

        <h1>Logo</h1>
        <p>
          This logo is inspired by the "sleuth" in my alias. I also found Icons
          on Canva that gave me the idea and therefore created this. The font
          used was so that it can be read well from far as the logo is small.
        </p>
        <div className="images">
          <img src={page1} />
        </div>
        <h1>Templates</h1>
        <p>
          This is the inpiration and template of my website of what colours I
          will use as well as the design I want.
        </p>
        <div className="images">
          <img src={page2} />
        </div>
        <h1>Buttons</h1>
        <p>
          {" "}
          These are the buttons I made for my website that I use for specific
          things on my website that I want to look like a videogame as well as
          the old Windows aesthetics.
        </p>
        <div className="images">
          <img src={page3} />
        </div>
        <h1> real buttons</h1>
        <p>
          I use the default button style because it aligns with the aesthetic as
          it looks 'simple'.
        </p>
        <div className="images">
          <img src={page4} />
        </div>
        <h1>Blog posts</h1>
        <p>
          {" "}
          This is the set up for the blog post where the page follows the
          aesthetic and shows snippets of the website.
        </p>
        <h1>Font </h1>
        <p>
          {" "}
          I used the Courier font because it looks like a typewriting text and
          close to pixelated text without sacrificing the readability of the
          words and the risk of font packs not working.
        </p>
        <h1>Colours</h1>
        <p>
          The colours are from the Windows old aesthetic. I use a variety of
          greys so that the information hierarchy does not become unclear and
          users can identify buttons from website descoration.
        </p>
        <div className="Wireframes">
          <h1>Wireframes</h1>
        </div>
        <div className="images">
          <img src={homePageWF} />
        </div>
        <div className="images">
          <img src={BlogWF} />
        </div>
        <div className="images">
          <img src={BlogWF2} />
        </div>
      </div>
    );
  }
}
