import React from "react";
import { Card, CardBody } from "shards-react";
import { Link } from "@reach/router";
const UserDash = ({ loggedInUser, avatar_url }) => {
  return (
    loggedInUser && (
      <Card style={{ marginTop: "10px" }}>
        <CardBody>
          {loggedInUser}
          <br />
          <img style={{ width: "150px" }} src={`${avatar_url}`} />
          <br />

          <Link to="/new-article">create new article</Link>
        </CardBody>
      </Card>
    )
  );
};

export default UserDash;
