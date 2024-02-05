import React from "react";
import { SKILLS_DATA, SKILLS_IMAGES } from "../data";

function Skills() {
  return (
    <>
      <div className="skills-container">
      
        <div className="main-container">
          <h3>Skills</h3>
          {SKILLS_DATA.map((item) => (
            <span className="wrapper" key={item.id}>
              <p>{item.title}</p>
              <div className="container">
                <div className={item.className}>{item.knowledge}</div>
              </div>
            </span>
          ))}
        </div>

        <div className="container-2">
          {SKILLS_IMAGES.map((item) => {
            return (
              <div className="gallary" key={item.id}>
                <img src={item.imageSrc} alt={"skills"} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Skills;
