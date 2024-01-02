import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

function Card({ title, imageUrl, body, projectUrl }) {
  return (
    <div className="project-container">
      <div className="card-container">
        <div className="l-side">
          <div className="thumbnail-container">
            <Link to={projectUrl}>
              <img src={imageUrl} alt="thumbnail" />
            </Link>
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
            <Link to={projectUrl}>
              <button>view work</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
