import React from "react";
import { Card, CardBody } from "shards-react";
const UserDash = ({ loggedInUser, avatar_url }) => {
  return (
    loggedInUser && (
      <Card style={{ marginTop: "10px" }}>
        <CardBody>
          {loggedInUser}
          <br />
          <img style={{ width: "150px" }} src={`${avatar_url}`} />
        </CardBody>
      </Card>
    )
  );
};

export default UserDash;
