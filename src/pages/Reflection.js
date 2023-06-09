import React, { Component } from "react";
import "../styles/Blogs.css";
import { Link } from "react-router-dom";

export default class Reflection extends Component {
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
          <h1>Reflection on UI and UX</h1>
          <p></p>
          <h2>Overall Website</h2>
          <p>
            The website takes on a retro-futuristic theme where it utilises old
            Windows aesthetics. I use the pixilated features for some of the
            websites and other fonts for the rest for ease of reading and to
            prevent there being an issue with font packs.
          </p>
          <h2>Homepage</h2>
          <p>
            I make it clear where the user is by using the heading on the
            homepage. I also make the Links big and bulky to be reminiscent of
            how Windows UIUX used to be from what. I introduced the website as a
            clicker game because I plan to use the idle-like game in the
            Internet Art section. Despite a game like Universal Paperclips being
            from 2017, the website is somewhat inspired by that as well as
            another Windows-themed idle game I have made. Idle games are the
            same age as me as the first known one was created in 2002.
          </p>
          <p>
            I used this aesthetic because idle games are very simple in the
            sense you are just clicking on buttons and not much more and that is
            something I remember from childhood about these games. It works out
            well as the unstyled buttons of websites fit the aesthetic well.
          </p>
          <h2>Writings</h2>
          <p>
            The writings page has all the blogs on display with a snippet of
            them in view and the read more button layered over them, so users
            know there is more information and have to navigate there to get the
            entire reading. The website can seem convoluted, but it is intended
            based on the websites from &ldquo;the beginning of the
            internet&rdquo; or the early 2000s as this is what I remember and
            have found through research. Although I did not want to go overboard
            as it would impact the integrity of the website as an assignment.
          </p>
          <p>
            Each writings page has access to all the other blogs for the
            convenience of the user and to ensure that they do not have to go
            back and forth like mentioned above how old websites would often do.
          </p>
          <h2>UIUX</h2>
          <p>
            In the digital age, user experience (UX) and user interface (UI)
            design play an important role in web design. UI refers to the visual
            elements and interactive components that users interact with, while
            UX encompasses the overall experience and satisfaction users derive
            from using a website. A well-designed UI/UX not only enhances
            usability but also engages users, promotes conversions, and builds
            brand loyalty. Let's explore the key aspects of website UI/UX and
            how they contribute to a positive user experience.
          </p>
          <ol>
            <li>
              Intuitive Navigation: Effective UI/UX design prioritizes intuitive
              navigation, allowing users to easily find the information or
              features they are seeking. Clear and consistent navigation menus,
              breadcrumbs, and search functionality help users navigate through
              the website effortlessly. Logical information architecture and
              organized content further contribute to a smooth and seamless user
              experience.
            </li>
            <li>
              Responsive and Adaptive Design: In today's mobile-centric world,
              responsive and adaptive design is crucial for a successful
              website. UI/UX designers ensure that websites are optimized for
              various devices and screen sizes, allowing users to access content
              and interact with features seamlessly across desktops, tablets,
              and smartphones. Responsive design ensures that the website's
              layout, images, and interactive elements adapt to different screen
              resolutions, delivering a consistent and engaging experience.
            </li>
            <li>
              Visual Hierarchy and Readability: UI/UX design focuses on
              establishing a clear visual hierarchy to guide users through the
              website's content. This involves using typography, colour schemes,
              and visual cues to highlight important information, headings and
              calls to action. Proper spacing, font sizes, and contrast ensure
              readability, making it easy for users to consume and comprehend
              the website's content.
            </li>
            <li>
              Consistent Branding and Visual Identity: A well-executed UI/UX
              design aligns with the brand's visual identity and conveys a
              cohesive message. Consistent branding elements, such as colour
              schemes, typography, and imagery, create a recognizable and
              memorable experience for users. This consistency across the
              website establishes trust, reinforces brand recognition, and
              enhances the overall user experience.
            </li>
            <li>
              Engaging and Interactive Elements: Interactive elements, such as
              animations, sliders, and interactive forms, enhance user
              engagement and encourage interaction. Thoughtfully implemented
              UI/UX design incorporates these elements in a way that complements
              the overall user experience, avoiding distractions or overwhelming
              the user. Micro-interactions, such as subtle hover effects or
              loading animations, add polish and delight, making the website
              feel dynamic and responsive.
            </li>
            <li>
              Performance and Loading Speed: UI/UX design takes into
              consideration the website's performance and loading speed. A
              well-optimized website loads quickly, minimizing the waiting time
              for users and reducing bounce rates. Smooth transitions,
              responsive interactions, and efficient code contribute to a
              seamless and enjoyable user experience.
            </li>
            <li>
              User Feedback and Iterative Improvements: UI/UX design is an
              iterative process that involves gathering user feedback, analysing
              user behaviour, and continuously refining the design based on
              insights. User testing, heat mapping, and analytics help identify
              pain points, usability issues, or areas for improvement. By
              actively seeking and incorporating user feedback, UI/UX designers
              can create websites that evolve to meet user needs and
              preferences.
            </li>
          </ol>
          <p>
            On my website, I prioritized navigation as it&rsquo;s possible to
            access the whole website at any moment due to the consistent
            JavaScript Script navigation. The responsiveness of the website is
            not throughout and really only works well on the home page. The
            information hierarchy needs some obvious work as a lot of the
            colours blend into each other and make it a little hard to read
            everything clearly and identify the buttons from the rest of the
            website. I&rsquo;ve tried to make it obvious by placing a border
            similar to the default JavaScript Script buttons. The website is
            consistent with the aesthetic however I feel I could make the
            navigation buttons just default buttons to feel closer to the
            aesthetic. Due to the very basic nature of the website because it
            follows the aesthetic the load times are not very long.
          </p>
        </div>
      </div>
    );
  }
}
