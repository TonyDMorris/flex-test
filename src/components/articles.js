import React from "react";
import Article from "./article";

const Articles = props => {
  return props.articles.map(article => {
    return (
      <Article
        key={article.article_id}
        comment_count={article.comment_count}
        article_id={article.article_id}
        author={article.author}
        title={article.title}
        body={article.body}
        created_at={article.created_at}
      />
    );
  });
};

export default Articles;
