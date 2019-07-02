import React from "react";
import Link from "react-router-dom/Link";

const About = () => {
  return (
    <section className="about">
      <div className="about-story">
        <p>
          Hello I'm <span className="text-crimson">Kael</span>, a self-taught
          <span className="text-crimson">
            {" "}
            UI|UX designer and Frontend developer{" "}
          </span>
          from
          <span className="text-crimson"> Cameroon</span>. <br />
          In other words I make interfaces like what you see here and I focus on
          what are essential for your users to quickly understand what you do so
          they can get started with you.
        </p>
        <p>
          As everyone have his story and to not bored you with that, you can
          read my story
          <Link to="/story" className="text-crimson">
            {" "}
            here{" "}
          </Link>
          if you want but here are random things to know about me.
        </p>
      </div>
      <div className="workflow">
        <h3 className="title">Random things</h3>
        <p>
          I love animes and i've watched tons. Checkout the list{" "}
          <Link to="/anime_list" className="text-crimson">
            here
          </Link>
        </p>
      </div>
      <div className="workflow">
        <h3 className="title">Stack</h3>
        <span className="subtitle">Frontend: Langauages & Libraries</span>
        <div className="stack" />
        <span className="subtitle">Design: Tools & practices</span>
        <div className="stack" />
      </div>
    </section>
  );
};

export default About;
