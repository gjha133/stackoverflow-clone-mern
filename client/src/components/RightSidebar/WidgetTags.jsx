import React from "react";
import { Link } from 'react-router-dom'

const WidgetTags = () => {
  const tags = [
    "c",
    "css",
    "express",
    "firebase",
    "html",
    "java",
    "javascript",
    "mern",
    "mongodb",
    "mysql",
    "next.js",
    "node.js",
    "php",
    "python",
    "reactjs",
  ];

  return (
    <div className="widget-tags">
      <h4>Watched tags</h4>
      <div className="widget-tags-div">
        {tags.map((tag) => (
          <Link key = {tag} style={{ textDecoration: 'none'}} to={'/Tags'}>
            <p>{tag}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default WidgetTags;
