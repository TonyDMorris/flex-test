import React from "react";
import ArticleMain from "../components/article-main";
const SingleArticle = ({ article_id, loggedInUser, token }) => {
  return (
    <div className="col-8 offset-2">
      <ArticleMain
        token={token}
        loggedInUser={loggedInUser}
        article_id={article_id}
      />
    </div>
  );
};

export default SingleArticle;
