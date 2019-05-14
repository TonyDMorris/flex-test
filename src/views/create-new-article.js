import React from "react";
import ArticleForm from "../components/article-form";

const CreateNewArticle = ({ loggedInUser, token }) => {
  return (
    <div className=" mt-10 col-6 offset-3">
      <ArticleForm loggedInUser={loggedInUser} token={token} />
    </div>
  );
};

export default CreateNewArticle;
