import React from "react";
import ArticleUser from "./article-user";
import VoteBar from "../components/vote-bar";
const Comment = ({ author, body, votes }) => {
  return (
    <div
      style={{ backgroundColor: "#f5f6f6" }}
      className="p-2 mt-2 border rounded"
    >
      <ArticleUser author={author} />

      <div
        style={{ backgroundColor: "#ffffff" }}
        className="p-2 mt-3 border rounded"
      >
        <p>{body}</p>
        <VoteBar votes={votes} />
        <div className="offset-md-11" />
      </div>
    </div>
  );
};

export default Comment;
