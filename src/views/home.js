import React from "react";
import { Row, Col } from "shards-react";
import Articles from "../components/articles";
import UserDash from "../components/user-dash";
const Home = ({ loggedInUser, avatar_url }) => {
  return (
    <Row className="justify-content-center">
      {loggedInUser && (
        <UserDash avatar_url={avatar_url} loggedInUser={loggedInUser} />
      )}
      <Col md={6}>
        <Articles loggedInUser={loggedInUser} />
      </Col>
    </Row>
  );
};
export default Home;
