import React, { Component } from "react";
import "../styles/Blogs.css";
import { Link } from "react-router-dom";

export default class Blog1 extends Component {
  render() {
    return (
      <div className="blogCont">
        <div className="Links">
          <Link to="/Essay">Essay</Link>
        </div>
        <div className="Links">
          <Link to="/Blog1">Blog 1</Link>
        </div>
        <div className="Links">
          <Link to="/Blog2">Blog 2</Link>
        </div>
        <div className="Links">
          <Link to="/Blog3">Blog 3</Link>
        </div>
        <div className="Links">
          <Link to="/Reflection">Reflection</Link>
        </div>
        <div className="Links">
          <Link to="/Art">Internet Art</Link>
        </div>
        <div className="Essay">
          <h1>Dev Blog Week 3</h1>
          <p>
            The revision videos are long however I appreciate them a lot because
            I need to be able to go back and forward to fully grasp what I am
            learning. I really like them because they strengthen my foundation
            it wasn&rsquo;t strong at first and taught me things&nbsp; I know I
            would have appreciated last year. I&nbsp; am furthering my skills to
            be able to learn what I need to make the websites of my dreams.
          </p>
          <p>
            Web art is an incredibly interesting thing, it&rsquo;s interesting
            what can be done as well as showing that people will find a way to
            create no matter the medium. It&rsquo;s very comforting in a way
            that art will and can be found anywhere and there will be people
            trying to send a message or have their creativity sparked in
            different ways.
          </p>
          <p>
            My favourite out of all the internet art is
            <i>Exhausting a Crowd</i>. It&rsquo;s a commission by the Victoria
            and Albert Museum in London in the exhibition{" "}
            <i>&nbsp;All of this Belongs to You</i>. This piece takes in the
            public eye and how there is no privacy as the tagline is
            &ldquo;click &amp; follow everyone&rdquo;. The draw-in of the whole
            exhibition is that you can people watch, you see glimpses into
            people's lives, incidents that are never recorded. Existing just{" "}
            <i>happens</i>
            .&nbsp; (Meier, 2015).
          </p>
          <p>
            These the reasons I like this piece because it showcases untold
            stories while also opening our eyes to everyday lives and no
            privacy. This seems like a nightmare for people with anxiety though
            as people are afraid of being seen and knowing you&rsquo;re always
            being watched is a heavy feeling. This point stands to me
            specifically because the advice often given is that you should not
            worry as no one cares and is living their own life.&nbsp; A spin on
            this is that this piece shows no one does care and even if they do
            see you nothing happens.
          </p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>References</p>
          <p>
            Meier, A., 2015. An Addictive Experiment in Annotating Footage from
            a London Street [WWW Document]. Hyperallergic. URL
            http://hyperallergic.com/211950/an-addictive-experiment-in-annotating-footage-from-a-london-street/
            (accessed 3.12.23).
          </p>
          <p>&nbsp;</p>
          <p>
            <br />
            <br />
          </p>
        </div>
      </div>
    );
  }
}
