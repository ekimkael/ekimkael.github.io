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
          they can get started with you. That's why I like to work on projects
          that bring value to people.
        </p>
        <p>
          As everyone have his story but to not bordered you with that, you can
          read my story
          <Link to="/story" className="text-crimson">
            {" "}
            here{" "}
          </Link>
          to know me better or read random things about me down below.
        </p>
      </div>
      <div className="workflow">
        <h3 className="title">Random things</h3>
        <p>
          I love animes and i've watched tons, my favorite is Full Metal
          Alchemist Brotherhood. Checkout my anime list{" "}
          <Link to="/anime_list" className="text-crimson">
            here
          </Link>
        </p>
        <p>
          Je n'ai jamais aimé, voir jamais fait de mise à jour Windows de ma vie
          mais aujourd'hui je fais des mises à jour sur des applications et les
          gens sont obligés de les télécharger et je trouve ça marrant.
        </p>
        <p>
          Je ne sais pas pourquoi mais dans les batiments à plusieurs niveaux,
          j'aime le deuxième étage.
        </p>
      </div>
      <div className="workflow">
        <h3 className="title">Technologies and tools I use to work with</h3>
        <span className="subtitle">Frontend: Langauages & Libraries</span>
        <div className="stack" />
        <span className="subtitle">Design: Tools & practices</span>
        <div className="stack" />
      </div>
    </section>
  );
};

export default About;
