import React from "react";
import { WORK_DATA } from "../data";
import Image from "./Image";

function Work() {
  return (
    <>
      <div className="work-exp" id="work">
        <h3>Work Experience</h3>
        <div className="img-container">
          {WORK_DATA.map((item) => (
            <div className="project" key={item.id}>
              <Image src={item.imageSrc} alt= "image" width="30%"/>
              <h5>{item.title}</h5>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Work;
