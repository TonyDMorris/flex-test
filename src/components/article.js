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

const Article = props => {
  return (
    <Card lg="12" style={{ marginTop: "10px" }}>
      <CardHeader>
        <ArticleUser author={props.author} />
      </CardHeader>

      <CardBody>
        <CardTitle>{props.title}</CardTitle>
        <CardSubtitle style={{ colour: "grey", fontSize: "10px" }}>
          {props.created_at}
        </CardSubtitle>
        <p>{props.body}</p>
        <Comments
          comment_count={props.comment_count}
          article_id={props.article_id}
        />
      </CardBody>

      <CardFooter />
    </Card>
  );
};

export default Article;
