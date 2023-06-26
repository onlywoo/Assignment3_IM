import Essay from "../assets/Essay.png";
import { Link } from "react-router-dom";

export const MenuList = [
  {
    name: "Essay",
    image: Essay,
    info: "The term “internet artwork” encompasses many -artistic avenues that make it a broad term. Internet Artwork uses the internet as the main medium and/or subject. Internet artworks include digital art, net art, interactive installations, videos, and VR experiences (virtual reality) (Nasution and Nusa, 2021). Art often focuses on the medium, technology, identity, the internet, and its impact. It's often created using different tools and techniques, specifically coding, animation, and social media. Internet art is a…",
    button: (
      <Link to="/Essay">
        <button>Read More</button>
      </Link>
    ),
  },
  {
    name: "React",
    image: Essay,
    info: "The revision videos are long however I appreciate them a lot because I need to be able to go back and forward to fully grasp what I am learning. I really like them because they strengthen my foundation it wasn’t strong at first and taught me things  I know I would have appreciated last year. I  am furthering my skills to be able to learn what I need to make the websites of my dreams.",
    button: (
      <Link to="/Blog1">
        <button>Read More</button>
      </Link>
    ),
  },
  {
    name: "Convention and context",
    image: Essay,
    info: "In the essay “Convention and Context”, Steven Mailloux examines the relationship between them in literature. He argues that convention and context are shaped by external things like culture and evolution. In the same way, literature is changed and shaped by the cultural and historical contexts in which they are read.",
    button: (
      <Link to="/Blog2">
        <button>Read More</button>
      </Link>
    ),
  },
  {
    name: "AI",
    image: Essay,
    info: "React is incredibly helpful and makes coding much easier, I often struggle with reading documentation as I become overwhelmed and can’t concentrate on the code, however, React documentation is easy to understand but also helps me understand other documentation for other libraries or software. Internet Artwork: The Privilege of Studying Art: Accessibility Challenges for the Less Affluent. The pursuit of art education is often regarded as a privilege, as it provides individuals with the opportunity",
    button: (
      <Link to="/Blog3">
        <button>Read More</button>
      </Link>
    ),
  },
  {
    name: "Ethnocomputing and Digital Art ",
    image: Essay,
    info: "Ethnomathematics turns into enthnocomputing according to Bill Babbitt, Dan Lyles, and Ron Eglash. Ethnomathematics is said to face two major challenges, investigating mathematics within cultural contexts as they are often not seen as maths and secondly, even when this is proven, it becomes difficult to integrate into children’s education (Babbitt et al., 2012)... ",
    button: (
      <Link to="/Blog4">
        <button>Read More</button>
      </Link>
    ),
  },
  {
    name: "Interaction Design ",
    image: Essay,
    info: "In our increasingly digital world, interaction design has become a critical discipline in shaping the way we interact with technology and engage with digital experiences. It focuses on creating intuitive, meaningful, and user-centred interactions that enhance the usability and overall experience of products, services, and interfaces. By considering the needs, behaviours, and preferences of users, interaction designers play a pivotal role in shaping engaging and efficient digital experiences...",
    button: (
      <Link to="/Blog5">
        <button>Read More</button>
      </Link>
    ),
  },
  {
    name: "African Digital art ",
    image: Essay,
    info: "Afropolitan deals with the identification of African people and the complexity of it because of the experiences of African people and the many African nations to which people belong to more than one of them (Ede, 2016). Afropolitanism is a huge range of ‘cultural complexity while taking into consideration the history that resulted in “blackness” as well as not allowing people’s identities to be simplified to what is considered ‘to be African...",
    button: (
      <Link to="/Blog6">
        <button>Read More</button>
      </Link>
    ),
  },
  {
    name: "Internet Art",
    image: Essay,
    info: "My new internet art takes inspiration from pop-up ads and viruses that were impossible to get rid of once they were clicked. My internet art is to simulate the experience I have online as someone who is fem presenting as well as someone who plays video games and makes it appear on my profile. This art is inspired by my experiences and many others, it is motivated by my research project where I investigated the...",
    button: (
      <Link to="/newArt">
        <button>Read More</button>
      </Link>
    ),
  },
  {
    name: "Old Internet Art",
    image: Essay,
    info: "My internet art is inspired by FVPA 3 Readings from Scholars such as McRobbie (2018), Leary (2019), Niels van Doorn (2017) and Casilli (2017) who write about creativity...",
    button: (
      <Link to="/Art">
        <button>Read More</button>
      </Link>
    ),
  },
  {
    name: "Reflect",
    image: Essay,
    info: "The website takes on a retro-futuristic theme where it utilises old Windows aesthetics. I use the pixilated features for some of the websites and other fonts for the rest for ease of reading and to prevent there being an issue with font packs.I make it clear where the user is by using the heading on the homepage. I also make the Links big and bulky to be reminiscent of how Windows UIUX used to be... ",
    button: (
      <Link to="/Relfection">
        <button>Read More</button>
      </Link>
    ),
  },
];
