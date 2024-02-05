import React from "react";
import { BLOGS } from "../data";
function Blog() {
  return (
    <>
      <div className="blog" id="blog">
        <h3>Blogs</h3>
        {BLOGS.map((item) => {
          return (
            <div className="card" style={{ width: "33%"}} key={item.id}>
              <img
                src={item.imageSrc}
                className="blog-img"
                alt="..."
                width="100%"
                height="300px"
              />
              <div className="blog-body">
                <h5 className="blog-title">{item.title}</h5>
                <p className="blog-text">
                  {item.desc}
                </p>
                <button type="button">Read More....</button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Blog;
