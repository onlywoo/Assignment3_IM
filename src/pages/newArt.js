import React, { Component } from "react";
import "../styles/Blogs.css";
import { Link } from "react-router-dom";

export default class newArt extends Component {
  render() {
    return (
      <div className="blogCont">
        <div className="Links">
          <Link to="/Essay">Essay</Link>
        </div>
        <div className="Links">
          <Link to="/Blog1">React</Link>
        </div>
        <div className="Links">
          <Link to="/Blog2">Convention and Context</Link>
        </div>
        <div className="Links">
          <Link to="/Blog3">AI</Link>
        </div>
        <div className="Links">
          <Link to="/Blog4">Ethnocomputing and Digital Art</Link>
        </div>
        <div className="Links">
          <Link to="/Blog5">Interaction Design</Link>
        </div>
        <div className="Links">
          <Link to="/Blog6">African Digital Art</Link>
        </div>
        <div className="Links">
          <Link to="/newArt">internet Art</Link>
        </div>
        <div className="Links">
          <Link to="/Art">Old Internet Art</Link>
        </div>
        <div className="Links">
          <Link to="/Reflection">Reflection</Link>
        </div>

        <div className="Essay">
          <h1> New Internet Art</h1>
          <p>
            My new internet art takes inspiration from pop-up ads and viruses
            that were impossible to get rid of once they were clicked. My
            internet art is to simulate the experience I have online as someone
            who is fem presenting as well as someone who plays video games and
            makes it appear on my profile. This art is inspired by my
            experiences and many others, it is motivated by my research project
            where I investigated the role anonymity plays in misogyny online
            specifically in the gaming sphere as it is male-dominated. I speak
            about geek masculinity, hegemonic masculinity and the
            objectification and simultaneous harassment of women in the gaming
            community.
          </p>
          <p>
            I made the background of my internet art a gif of someone playing a
            simple game of universal paperclips and is overlayed with a bunch of
            pop-up/virus-looking ads that show the comments I have received for
            simply being someone who exists online, these are from people who
            sexualise my interest in gaming and my images of my face to which
            they then over sexualise and make unwanted comments. I made the ads
            cover up the gameplay because this is often how I feel when I see
            men play video games like Valiant, it&rsquo;s so close and looks
            like something I would enjoy but I&rsquo;m met by this wall of
            cyber-harassment that I&rsquo;m afraid to cross because, like
            getting rid of viruses and dealing it to them, it is exhausting to
            have to deal with it and off-putting. I get discouraged to play. I
            got the inspiration for this from the Body Anxiety internet art I
            investigated in my essay. The ads have these &ldquo;close&rdquo;
            buttons however, they can&rsquo;t be clicked or used, and nothing
            gets rid of the ads. This is because many say to &ldquo;just
            mute&rdquo; or &ldquo;ignore&rdquo; when it comes to playing online
            however this is a temporary and hindering fix as communication is
            necessary in games. It completely disregards the cultural and
            institutional misogyny that exists where this harassment continues
            outside of the game. Online misogyny stems from that real-life
            misogyny. This can all be found in my paper
            (&ldquo;ResearchProject_Exam_2396624.docx,&rdquo; n.d.).
          </p>
          <p>
            I will present my research paper as evidence to back up my claims
            that this is a common experience that fem presenting people
            experience online. &nbsp;I feel it is important to read because
            I&rsquo;m passionate about this issue and want people to have this
            information available to them.
          </p>
          <p>
            <a href="https://drive.google.com/file/d/12lHUR7PALasj7Whffqz8GSaMaBqdiwK9/view?usp=sharing">
              https://drive.google.com/file/d/12lHUR7PALasj7Whffqz8GSaMaBqdiwK9/view?usp=sharing
            </a>
          </p>
          <p>References</p>
          <p>ResearchProject_Exam_2396624.docx, n.d.</p>
        </div>
      </div>
    );
  }
}
