import React from "react";

const Story = () => {
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
          <span className="text-crimson"> Cameroon</span> and this is my story.
        </p>

        <p>
          I discovered design and programming at the same time in high school
          and I really liked it, so much that although I was never in computer
          class, I still had the best grades in the class. After my high school
          degree it was really hard to go to college 'cause no money, I finally
          gave up and started looking for work. At that time there was only one
          PC at home and my big brother was there all the time so you can
          imagine how hard it was to practice.
        </p>
        <blockquote>
          Some of my early codes were written on notebooks.
        </blockquote>
        <p>
          By the help of my brother, I got a job as transcriber for
          <span className="text-crimson"> Pactera Technologies.</span> When I
          finally be able to afford my own PC, not a day goes by that I don't
          make a design or write a piece of code.
        </p>
      </div>
    </section>
  );
};

export default Story;
