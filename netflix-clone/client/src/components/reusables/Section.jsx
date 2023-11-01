import React from "react";
import ".//Section.css";
const Section = ({ title, desc, image }) => {
  return (
    <>
      <section className="section-heros">
        <div className="container">
          <div className="section-text">
            <h1>{title}</h1>
            <p>{desc}</p>
          </div>
          <img src={image} alt="" />
        </div>
      </section>
    </>
  );
};

export default Section;
