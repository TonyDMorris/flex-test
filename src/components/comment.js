import React from "react";
import ArticleUser from "./article-user";
const Comment = props => {
  return (
    <div
      style={{ backgroundColor: "#f5f6f6" }}
      className="p-2 mt-2 border rounded"
    >
      <ArticleUser author={props.author} />

      <div
        style={{ backgroundColor: "#ffffff" }}
        className="p-2 mt-3 border rounded"
      >
        <p>{props.body}</p>
      </div>
    </div>
  );
};

export default Comment;
