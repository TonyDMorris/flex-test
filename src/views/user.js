import React from "react";
import NavMenu from "../components/nav";
import { Container, Row, Col } from "shards-react";
import Articles from "../components/articles";

const User = props => {
  return (
    <Row>
      <Col cols="12" md="4" lg="3">
        userinfo
      </Col>
      <Col cols="12" md="4" lg="6">
        <Articles username={"weegembump"} />;
      </Col>
    </Row>
  );
};

export default User;
