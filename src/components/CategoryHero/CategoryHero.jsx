import React from "react";
import "./CategoryHero.css";

function CategoryHero({ title, imageUrl, body }) {
  return (
    <section className="category-wrapper">
      <div className="paddings innerWidth flexCenter category-container">
        {/*left side*/}
        <div className="flexColStart category-left">
          <div className="category-title">
            <h1>{title}</h1>
          </div>
          <div className=" category-des">
            <span>{body}</span>
          </div>
        </div>
        {/*right side*/}
        <div className="flexCenter category-right">
          <div className="categoryimg-container">
            <img src={imageUrl} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CategoryHero;
