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
  Row,
  Container
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
        <Container>
          <Row className="row justify-content-end">
            <Col>
              <div role="img" aria-label="muscle emoji">
                {votes}
                {votes >= 0 ? "💪" : "😠"}
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <ArticleUser author={author} />
            </Col>
            <Col style={{ textAlign: "right" }}>
              <Topic topic={topic} />
            </Col>
          </Row>
        </Container>
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
