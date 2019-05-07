import React from "react";
import Articles from "../components/articles";
import { Col } from "shards-react";

const Home = () => {
  return (
    <Col lg={{ size: 6, order: 1, offset: 0 }}>
      <Articles />
    </Col>
  );
};
export default Home;
