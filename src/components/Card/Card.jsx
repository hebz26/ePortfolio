import React from "react";
import "./Card.css";

function Card({ title, imageUrl, body }) {
  return (
    <div className="project-container">
      <div className="l-side">
        <div className="thumbnail-container">
          <img src={imageUrl} alt="thumbnail" />
        </div>
      </div>
      <div className="r-side">
        <div className="project-title">
          <h1>{title}</h1>
        </div>
        <div className="project-body">
          <h5>{body}</h5>
        </div>
        <div className="workBtn">
          <button>view work</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
