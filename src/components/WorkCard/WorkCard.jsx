import React from "react";
import Link from "react-router-dom/Link";
import Style from './style.css';

let WorkCard = ({ work }) => (
  <Link to={`/works/${work.id}`}>
    <div className={Style.work}>
      <section>
        <h2 className={Style.title}>{work.name}</h2>
        <span className={Style.category}>{work.category}</span>
      </section>
    </div>
  </Link>
);

export default WorkCard
