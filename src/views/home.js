import React from "react";
import { Row, Col } from "shards-react";
import Articles from "../components/articles";

const Home = () => {
  return (
    <Row>
      <Col cols="12" md="4" lg="3">
        userinfo
      </Col>
      <Col cols="12" md="4" lg="6">
        <Articles />;
      </Col>
    </Row>
  );
};
export default Home;
