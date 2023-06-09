import React, { Component } from "react";
import "../styles/Blogs.css";
import { Link } from "react-router-dom";

export default class Art extends Component {
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
          <h1>Internet Art</h1>
          <p>
            My internet art is inspired by FVPA 3 Readings from Scholars such as
            McRobbie (2018), Leary (2019), Niels van Doorn (2017) and Casilli
            (2017) who write about creativity under capitalism.
          </p>
          <p>(Leary, 2019)</p>
          <p>(McRobbie, 2018)</p>
          <p>(Casilli, 2017)</p>
          <p>(van Doorn, 2017)</p>
          <p>
            <a
              href="https://docs.google.com/document/d/1iVQ9UA6XHtOCm67HtnyntPHhajysd6wC5GEB6a9HHgI/edit?usp=sharing "
              target="blank"
            >
              My exam writings
            </a>
            (Jacpasad, 2022)
          </p>
          <p>My writings can be found here if you are interested.</p>
          <p>
            My internet art will be a commentary on the privileges almost
            required to pursue arts as a job, especially from the perspective of
            someone from multiple marginalized groups. I got the inspiration for
            this from r/place on Reddit (&ldquo;place,&rdquo; n.d.) where Reddit
            users we're able to band together and create pieces of art from
            their respective fandoms. A timelapse can be found here
            <a
              href="https://www.reddit.com/r/place/comments/txufad/the_complete_rplace_timelapse/"
              target="blank"
            >
              The Complete r/Place Timelapse: r/place (reddit.com)
            </a>
            (Acidtwist, 2022). I will also be taking inspiration from the
            website by Khutso Nkadimeng (&ldquo;North-South,&rdquo; n.d.), I
            will utilise the money system they have in place so users will have
            to buy a plot on my website to create your art and can only make art
            as big equal to how much money you have.
          </p>
          <p>
            <em>&nbsp;</em>While this is ambitious I do have another idea of
            speaking on the experiences of women online by displaying tweets
            that others have received that sexualise and objectify non-men that
            are fem presenting and these tweets will display like old websites
            covered in ads and viruses. To simulate the inescapable gaze of men
            and their determination to sexualise anyone they find attractive or
            the objectification of fem presenting people.
          </p>

          <h2>References</h2>
          <p>Acidtwist, 2022. The Complete r/Place Timelapse. r/place.</p>
          <p>
            Casilli, A.A., 2017. Global Digital Culture| Digital Labor Studies
            Go Global: Toward a Digital Decolonial Turn. International Journal
            of Communication 11, 21.
          </p>
          <p>Jacpasad, A., 2022. ExamTwo.</p>
          <p>
            Leary, J.P., 2019. Keywords: The New Language of Capitalism.
            Haymarket Books.
          </p>
          <p>
            McRobbie, A., 2018. Be Creative: Making a Living in the New Culture
            Industries. John Wiley &amp; Sons.
          </p>
          <p>
            North South [WWW Document], n.d. URL
            https://nkadimengk.github.io/north-south/ (accessed 6.9.23).
          </p>
          <p>
            place [WWW Document], n.d. URL https://www.reddit.com/r/place/
            (accessed 6.9.23).
          </p>
          <p>
            van Doorn, N., 2017. Platform labour: on the gendered and racialized
            exploitation of low-income service work in the
            &lsquo;on-demand&rsquo; economy. Information, Communication &amp;
            Society 20, 898&ndash;914.
            https://doi.org/10.1080/1369118X.2017.1294194
          </p>
          <p>&nbsp;</p>
        </div>
      </div>
    );
  }
}
