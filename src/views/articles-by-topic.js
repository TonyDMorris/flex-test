import React from "react";

import { Row, Col } from "shards-react";
import Articles from "../components/articles";

const ArticlesByTopic = props => {
  return (
    <Row>
      <Col cols="12" md="4" lg="3">
        topic info
      </Col>
      <Col cols="12" md="4" lg="6">
        <Articles topic={props.topic} />;
      </Col>
    </Row>
  );
};

export default ArticlesByTopic;
