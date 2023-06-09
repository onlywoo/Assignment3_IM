import Essay from "../assets/Essay.png";
import { Link } from "react-router-dom";

export const MenuList = [
  {
    name: "Essay",
    image: Essay,
    info: "The term “internet artwork” encompasses many -artistic avenues that make it a broad term. Internet Artwork uses the internet as the main medium and/or subject. Internet artworks include digital art, net art, interactive installations, videos, and VR experiences (virtual reality) (Nasution and Nusa, 2021). Art often focuses on the medium, technology, identity, the internet, and its impact. It's often created using different tools and techniques, specifically coding, animation, and social media. Internet art is a reflection of a constantly and ever-evolving medium as technology updates faster and faster. (Micchelli and Carrier, 2020).",
    button: (
      <Link to="/Essay">
        <button>Read More</button>
      </Link>
    ),
  },
  {
    name: "Blog 1",
    image: Essay,
    info: "The revision videos are long however I appreciate them a lot because I need to be able to go back and forward to fully grasp what I am learning. I really like them because they strengthen my foundation it wasn’t strong at first and taught me things  I know I would have appreciated last year. I  am furthering my skills to be able to learn what I need to make the websites of my dreams.",
    button: (
      <Link to="/Blog1">
        <button>Read More</button>
      </Link>
    ),
  },
  {
    name: "Blog 2",
    image: Essay,
    info: "In the essay “Convention and Context”, Steven Mailloux examines the relationship between them in literature. He argues that convention and context are shaped by external things like culture and evolution. In the same way, literature is changed and shaped by the cultural and historical contexts in which they are read.",
    button: (
      <Link to="/Blog2">
        <button>Read More</button>
      </Link>
    ),
  },
  {
    name: "Blog 3",
    image: Essay,
    info: "React is incredibly helpful and makes coding much easier, I often struggle with reading documentation as I become overwhelmed and can’t concentrate on the code, however, React documentation is easy to understand but also helps me understand other documentation for other libraries or software. Internet Artwork: The Privilege of Studying Art: Accessibility Challenges for the Less Affluent. The pursuit of art education is often regarded as a privilege, as it provides individuals with the opportunity to explore and develop their artistic talents. However, it is undeniable that...",
    button: (
      <Link to="/Blog3">
        <button>Read More</button>
      </Link>
    ),
  },
  {
    name: "Reflect",
    image: Essay,
    info: "The website takes on a retro-futuristic theme where it utilises old Windows aesthetics. I use the pixilated features for some of the websites and other fonts for the rest for ease of reading and to prevent there being an issue with font packs.I make it clear where the user is by using the heading on the homepage. I also make the Links big and bulky to be reminiscent of how Windows UIUX used to be from what. I introduced the website as a clicker game because I plan to use the idle-like game in the... ",
    button: (
      <Link to="/Relfection">
        <button>Read More</button>
      </Link>
    ),
  },
  {
    name: "Art",
    image: Essay,
    info: "My internet art is inspired by FVPA 3 Readings from Scholars such as McRobbie (2018), Leary (2019), Niels van Doorn (2017) and Casilli (2017) who write about creativity under capitalism.(Leary, 2019)(McRobbie, 2018)(Casilli, 2017)(van Doorn, 2017) https://docs.google.com/document/d/1iVQ9UA6XHtOCm67HtnyntPHhajysd6wC5GEB6a9HHgI/edit?usp=sharing (Jacpasad, 2022) My answers can be found here if you are interested. My internet art will be a commentary on the privileges almost required to pursue arts as a job, especially from the perspective of someone from multiple marginalized groups. I got the inspiration for this from r/place on Reddit (“place,” n.d.) where Reddit users we're able to...",
    button: (
      <Link to="/Art">
        <button>Read More</button>
      </Link>
    ),
  },
];
