import React from "react";
import Comments from "./comments";
import ArticleUser from "./article-user";

import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardFooter,
  CardSubtitle
} from "shards-react";

const Article = ({
  author,
  title,
  created_at,
  body,
  comment_count,
  article_id
}) => {
  return (
    <Card style={{ marginTop: "10px" }} small={true}>
      <CardHeader>
        <ArticleUser author={author} />
      </CardHeader>

      <CardBody>
        <CardTitle>{title}</CardTitle>
        <CardSubtitle style={{ colour: "grey", fontSize: "10px" }}>
          {created_at}
        </CardSubtitle>
        <p>{body}</p>
        <Comments comment_count={comment_count} article_id={article_id} />
      </CardBody>

      <CardFooter />
    </Card>
  );
};

export default Article;
