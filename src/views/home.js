import React from "react";

import NavMenu from "../components/nav";
import { Container, Row, Col } from "shards-react";
import Articles from "../components/articles";

const Home = () => {
  return (
    <Container className="col-12">
      <Row>
        <NavMenu />
      </Row>
      <Row>
        <Col cols="12" md="4" lg="3">
          userinfo
        </Col>
        <Col cols="12" md="4" lg="6">
          <Articles />;
        </Col>
      </Row>
    </Container>
  );
};
export default Home;
