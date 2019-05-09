import React from "react";
import Comments from "./comments";
import ArticleUser from "./article-user";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardFooter,
  CardSubtitle
} from "shards-react";

export default function Article(props) {
  return (
    <Card lg="12" style={{ marginTop: "10px" }}>
      <CardHeader>
        <Link to="/user/">
          <ArticleUser author={props.author} />
        </Link>
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
}
