import React from "react";
// images
import avatar from "../avatar.jpg";

function Aside() {
  return (
    <aside className="me">
      <img src={avatar} alt="avatar" />
      <section>
        <h1 className="name">Kael</h1>
        <h3 className="job">UI / UX Designer & Frontend Developer</h3>
        <div>
          <blockquote>I love when beautiful things are usefull.</blockquote>
        </div>
        <section className="cv">
          <a
            href="https://drive.google.com/file/d/1PVi2REVP4G-wzhsiIyBv55akYsRlRZ9P/view?usp=sharing"
            rel="noreferrer noopener"
          >
            Here is my resume
          </a>
        </section>
      </section>
    </aside>
  );
}

export default Aside;
