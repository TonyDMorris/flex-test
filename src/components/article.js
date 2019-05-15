import React from "react";
import Topic from "../components/topic";
import ArticleUser from "./article-user";
import { Link } from "@reach/router";

import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardSubtitle,
  Col,
  Row
} from "shards-react";

const Article = ({
  author,
  title,
  created_at,
  topic,
  article_id,
  votes,
  token
}) => {
  return (
    <Card style={{ marginTop: "10px" }} small={true}>
      <CardHeader>
        <Row>
          <Col className="offset-11">
            {votes}
            <span role="img" aria-label="muscle emoji">
              {votes >= 0 ? "💪" : "😠"}
            </span>
          </Col>
        </Row>
        <Row>
          <Col>
            <ArticleUser author={author} />
          </Col>
          <Col className="offset-10">
            <Topic topic={topic} />
          </Col>
        </Row>
      </CardHeader>

      <CardBody>
        <CardTitle>
          <Link to={`/articles/${article_id}`}>{title}</Link>
        </CardTitle>
        <CardSubtitle style={{ colour: "grey", fontSize: "10px" }}>
          {created_at}
        </CardSubtitle>
      </CardBody>
    </Card>
  );
};

export default Article;
