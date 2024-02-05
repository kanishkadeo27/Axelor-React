import React from "react";
import aboutImage from "./../images/about.avif";
import Image from "./Image";

function AboutMe(props) {
  return (
    <>
      <div className="self-intro" id="about">
        <div className="cont1">
          <h3>About Me</h3>
          <Image src={aboutImage} alt="myProfilePhoto" />
        </div>
        <div className="cont2">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            pariatur recusandae dolorem aliquid assumenda earum, sapiente
            voluptates ratione ab alias. Ullam consectetur dignissimos
            voluptatibus iure perspiciatis accusantium id laboriosam placeat!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            pariatur recusandae dolorem aliquid assumenda earum, sapiente
            voluptates ratione ab alias. Ullam consectetur dignissimos
            voluptatibus iure perspiciatis accusantium id laboriosam placeat!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            pariatur recusandae dolorem aliquid assumenda earum, sapiente
            voluptates ratione ab alias. Ullam consectetur dignissimos
            voluptatibus iure perspiciatis accusantium id laboriosam placeat!
          </p>
          <a href="#" className="download-btn">
            Download CV!
          </a>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
