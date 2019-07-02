import React from "react";

const CaseStudy = ({ match }) => {
  return (
    <section className="about">
      <div className="about-story">
        <h1 className="cs-title">{match.params.id}</h1>
        <p>
          In other words I make interfaces like what you see here and I focus on
          what are essential for your users to quickly understand what you do so
          they can get started with you.
        </p>
        <p>
          As everyone have his story and to not bored you with that, you can
          read my story here if you want but here are random things to know
          about me.
        </p>
      </div>
    </section>
  );
};

export default CaseStudy;
