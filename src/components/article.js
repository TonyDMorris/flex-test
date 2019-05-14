import React from "react";
import Comments from "./comments";
import ArticleUser from "./article-user";
import { Link } from "@reach/router";

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
  article_id,
  votes
}) => {
  return (
    <Card style={{ marginTop: "10px" }} small={true}>
      <CardHeader>
        <ArticleUser author={author} />
      </CardHeader>

      <CardBody>
        <CardTitle>
          <Link to={`/articles/${article_id}`}>{title}</Link>
        </CardTitle>
        <CardSubtitle style={{ colour: "grey", fontSize: "10px" }}>
          {created_at}
        </CardSubtitle>
      </CardBody>

      <CardFooter>
        <div className="offset-md-11">{votes}💪</div>
      </CardFooter>
    </Card>
  );
};

export default Article;
