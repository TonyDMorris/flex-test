import React from "react";

import { Row, Col, Card, CardBody } from "shards-react";
import Articles from "../components/articles";
import ArticleUser from "../components/article-user";

const User = props => {
  return (
    <Row>
      <Col lg="3">
        <Card>
          <CardBody>
            <ArticleUser author={props.author} />
          </CardBody>
        </Card>
      </Col>
      <Col lg="6">
        <Articles author={props.author} />;
      </Col>
    </Row>
  );
};

export default User;
