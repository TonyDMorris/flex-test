import React from "react";

import { Row, Col, Card, CardBody } from "shards-react";
import Articles from "../components/articles";
import Topics from "../components/topics";

const ArticlesByTopic = props => {
  return (
    <Row>
      <Col lg="3">
        <Card>
          <CardBody style={{ textAlign: "center" }}>
            <Row>
              <Col>
                <h5>Other topics you may like</h5>{" "}
              </Col>
            </Row>
            <Row>
              <Col>
                <Topics />
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
      <Col lg="6">
        <Articles topic={props.topic} />;
      </Col>
    </Row>
  );
};

export default ArticlesByTopic;
