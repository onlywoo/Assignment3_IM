import React, { Component } from "react";
import "../styles/Blogs.css";
import { Link } from "react-router-dom";

export default class Blog3 extends Component {
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
          <Link to="/Reflection">Reflection</Link>
        </div>
        <div className="Links">
          <Link to="/Art">Old Internet Art</Link>
        </div>
        <div className="Essay">
          <h1>Ethnocomputing and Digital Art</h1>
          <p>
            Our definition of Ethnocomputing refers to the local systems of
            computational knowledge, starting from its very basic ideas and
            advancing to more sophisticated concepts. Ethnocomputing refers to
            local points of entry to:
          </p>
          <ul>
            <li>
              Organized structures and models used to represent information
              (data structures);
            </li>
            <li>Ways of manipulating organized information (algorithms);</li>
            <li>
              Mechanical and linguistic realizations of the above (tools and
              theory); and
            </li>
            <li>Applications of all of the above (uses).</li>
          </ul>
          <p>-(Tedre et al., 2006)</p>
          <p>
            Ethnomathematics turns into enthnocomputing according to Bill
            Babbitt, Dan Lyles, and Ron Eglash. Ethnomathematics is said to face
            two major challenges, investigating mathematics within cultural
            contexts as they are often not seen as maths and secondly, even when
            this is proven, it becomes difficult to integrate into
            children&rsquo;s education (Babbitt et al., 2012).
          </p>
          <p>
            The advent of technology has brought about a myriad of possibilities
            in the world of art, revolutionizing the way we create, experience,
            and interpret artistic expressions. Ethnocomputing, a term coined to
            describe the intersection of computing and ethnography, has emerged
            as a powerful tool to explore and preserve cultural heritage in the
            digital realm. When combined with digital art, it opens up new
            avenues for cultural expression and cross-cultural collaborations
            (Babbitt et al., 2012).
          </p>
          <p>
            Ethnocomputing involves employing computational methods to study,
            document, and represent cultural practices and traditions. Through
            this approach, researchers and artists can delve into the rich
            tapestry of diverse cultures, unveiling narratives and traditions
            that might otherwise remain hidden or inaccessible. By leveraging
            technology, Ethnocomputing allows for the creation of interactive
            digital experiences that engage and educate audiences about
            different cultural perspectives (Babbitt et al., 2012).
          </p>
          <p>
            Digital art encompasses a wide range of artistic practices that
            utilize digital tools and techniques. From digital painting and 3D
            modelling to interactive installations and virtual reality
            experiences, digital art offers artists a versatile medium to
            explore their creative visions. When combined with Ethnocomputing,
            digital art becomes a potent means of cultural expression, enabling
            artists to bridge the gap between traditional and contemporary forms
            of art.
          </p>
          <p>
            One of the key benefits of Ethnocomputing and digital art is their
            ability to facilitate cross-cultural collaborations. Artists and
            researchers from different backgrounds can come together to explore
            shared themes, drawing from their respective cultural perspectives.
            By merging traditional techniques and digital technologies, they can
            create unique artworks that blend cultural traditions with
            contemporary aesthetics, fostering dialogue and understanding among
            diverse communities.
          </p>
          <p>
            Furthermore, Ethnocomputing and digital art can contribute to the
            preservation and revitalization of cultural heritage. By digitally
            documenting cultural practices, artefacts, and oral traditions,
            these fields ensure that they are not lost to time or inaccessible
            to future generations. Moreover, through interactive digital
            installations or virtual museums, cultural heritage can be
            experienced and appreciated by a global audience, transcending
            geographical and temporal boundaries.
          </p>
          <p>References</p>
          <p>
            Babbitt, B., Lyles, D., Eglash, R., 2012. From Ethnomathematics to
            Ethnocomputing: Indigenous Algorithms in Traditional Context &amp;
            Contemporary Simulation, in: Mukhopadhyay, S., Roth, W.-M. (Eds.),
            Alternative Forms of Knowing (in) Mathematics. SensePublishers,
            Rotterdam, pp. 205&ndash;219.
            https://doi.org/10.1007/978-94-6091-921-3_10
          </p>
          <p>
            Tedre, M., Sutinen, E., K&auml;hk&ouml;nen, E., Kommers, P., 2006.
            Ethnocomputing: ICT in cultural and social context. Commun. ACM 49,
            126&ndash;130. https://doi.org/10.1145/1107458.1107466
          </p>
          <p>
            <br />
            &nbsp;
          </p>
        </div>
      </div>
    );
  }
}
