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
          <h1>Dev Blog Week 12</h1>
          <p>
            React is incredibly helpful and makes coding much easier, I often
            struggle with reading documentation as I become overwhelmed and
            can&rsquo;t concentrate on the code, however, React documentation is
            easy to understand but also helps me understand other documentation
            for other libraries or software.
          </p>
          <p>
            <u>
              Internet Artwork: The Privilege of Studying Art: Accessibility
              Challenges for the Less Affluent
            </u>
          </p>
          <p>
            The pursuit of art education is often regarded as a privilege, as it
            provides individuals with the opportunity to explore and develop
            their artistic talents. However, it is undeniable that the financial
            aspect of studying art can present significant challenges for those
            who are less affluent. My internet art would explore this by making
            the user play a clicker-like/idle game where they will have to earn
            money to &ldquo;buy property&rdquo; to be able to create their art.
          </p>
          <ol>
            <li>
              Financial Barriers: Art education encompasses various costs that
              can be daunting for individuals with limited financial resources.
              Tuition fees for art schools, private lessons, or specialized
              workshops can be prohibitively expensive. The costs of art
              supplies, materials, and equipment further compound the financial
              burden. For aspiring artists from low-income backgrounds, these
              expenses can be overwhelming, making it difficult to pursue their
              artistic aspirations.
            </li>
            <li>
              Access to Resources: Wealthier individuals have greater access to
              resources that can enhance their art education. They can afford to
              visit prestigious art institutions, museums, galleries, and
              exhibitions, where they can immerse themselves in the works of
              renowned artists and gain inspiration. Furthermore, they may have
              the means to travel to different artistic destinations, attend
              workshops, and engage in networking opportunities that can foster
              artistic growth. These privileges are often out of reach for those
              who lack the financial means to access such resources.
            </li>
            <li>
              Opportunity Costs: Studying art requires time and dedication,
              which can be challenging for individuals who face financial
              constraints. Many aspiring artists from low-income backgrounds are
              compelled to prioritize their economic stability over pursuing an
              art education. The need to work multiple jobs or support their
              families can limit the time and energy they can dedicate to
              artistic endeavours. Consequently, the opportunity to fully
              immerse themselves in the study of art becomes a luxury that only
              the financially privileged can afford.
            </li>
            <li>
              Socioeconomic Bias: The art world often perpetuates a
              socioeconomic bias, where artists from affluent backgrounds
              receive more opportunities for recognition and success.
              Prestigious art schools and institutions may favour students from
              privileged backgrounds due to their financial stability,
              networking connections, and exposure to high-quality art education
              from a young age. This bias further widens the gap between the
              affluent and the less affluent, making it even more challenging
              for individuals without financial means to establish themselves as
              artists.
            </li>
          </ol>
          <p>
            While art is often celebrated as a means of self-expression and
            cultural enrichment, it remains a privilege that is easier to pursue
            for those who are financially well-off. The significant financial
            barriers, limited access to resources, opportunity costs, and
            socioeconomic bias all contribute to the challenges faced by
            aspiring artists from less affluent backgrounds. Society must
            recognize and address these inequalities, ensuring that artistic
            opportunities are accessible to all, regardless of their financial
            status. By doing so, we can foster a more inclusive and diverse art
            world that embraces talent from all walks of life.
          </p>
          <p>
            <u>AI ART</u>
          </p>
          <p>
            I feel as though AI art is dangerous as it reproduces art at a speed
            no artist could and can be customised as one desires. As
            &lsquo;nice&rsquo; as this is, this begs the question of the emotion
            and humanness behind art creation and imagination.
          </p>
          <p>
            AI art would not be able to exist without real artists. I have
            started to see non-artists present AI art as a better version of
            another piece of art without looking closely at the piece. There are
            art mistakes, anatomy is way off regardless of art style.
          </p>
          <p>
            I dislike AI art and it will require there to be a rise in internet
            literacy as people will fall for fake images and believe them,
            creating political and social divides.
          </p>
        </div>
      </div>
    );
  }
}
