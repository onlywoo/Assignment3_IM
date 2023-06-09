import React, { Component } from "react";
import "../styles/Blogs.css";
import { Link } from "react-router-dom";

export default class Blog2 extends Component {
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
          <h1>Dev Blog Week 4</h1>
          <p>
            In the essay &ldquo;Convention and Context&rdquo;, Steven Mailloux
            examines the relationship between them in literature. He argues that
            convention and context are shaped by external things like culture
            and evolution. In the same way, literature is changed and shaped by
            the cultural and historical contexts in which they are read.
          </p>
          <p>
            Literature allows for interpretation, &ldquo;reading between the
            lines&rdquo; where readers don&rsquo;t have to be explicitly told.
            An example to understand better is poems and sonnets, while they do
            not say the exact words, the reader can use interpretation, and
            context clues to understand the deeper meaning.
          </p>
          <p>
            He does, however, argue that literary conventions are not able to be
            neutral or objective in terms of interpretation because there is a
            much larger cultural and historical force that dictates that. For
            example, tragedy and comedy themes are decided by how we view bad
            and good things in the human experience and world.
          </p>
          <p>
            Mailloux makes the argument that when creating, literary
            interpretation must take into account the conventions and cultural
            and historical contexts. He argues that literature can be seen as
            &ldquo;historical artefacts&rdquo; that mirror the cultural context
            of the time it was created, the interpretation takes into
            consideration the cultural context of the author and reader.
          </p>
          <p>
            Mailloux&rsquo;s essay emphasises the importance of understanding
            the literary conventions and historical, and cultural context
            constructed so that there is a suggestion as to how to interpret the
            piece.
          </p>
        </div>
      </div>
    );
  }
}
