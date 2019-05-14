import React from "react";
import { Row, Col } from "shards-react";
import Articles from "../components/articles";
import UserDash from "../components/user-dash";
const Home = ({ loggedInUser, avatar_url }) => {
  return (
    <Row>
      <Col cols="3" md="3" lg="3">
        <UserDash avatar_url={avatar_url} loggedInUser={loggedInUser} />
      </Col>
      <Col cols="6" md="6" lg="6">
        <Articles loggedInUser={loggedInUser} />
      </Col>
    </Row>
  );
};
export default Home;
