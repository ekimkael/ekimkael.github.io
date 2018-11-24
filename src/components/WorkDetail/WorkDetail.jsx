import React from "react";
import Carousel from "../WorkCarousel";
import Section from "../MoreInfo";
import Style from './style.css';

let WorkDetail = ({work}) => (
  <div className={Style.cover}>
    <Carousel />
    <section className={Style.detail}>
      <h3 className={Style.title}>{work.name}</h3>
      <div className={Style.description}>{work.desc}</div>
      <div className={Style.row}>
        <Section title="Client" subtitle={work.client} />
        <Section title="Role" subtitle="fullstack" />
        <Section type="url" title="URL" subtitle={work.url} />
      </div>
    </section>
  </div>
);

export default WorkDetail