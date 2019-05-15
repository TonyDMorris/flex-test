import React from "react";
import {
  Card,
  CardBody,
  Container,
  Col,
  Row,
  Button,
  ButtonGroup
} from "shards-react";
import { Link } from "@reach/router";
const UserDash = ({ loggedInUser, avatar_url }) => {
  return (
    loggedInUser && (
      <Col className="col-3 mt-5">
        <Card>
          <CardBody>
            <Container>
              <Row>
                <Col />
                <Col>{loggedInUser}</Col>
                <Col />
              </Row>
              <Row>
                <Col />
                <Col>
                  <img style={{ maxWidth: "150px" }} src={`${avatar_url}`} />
                </Col>
                <Col />
              </Row>
              <Link to="/new-article">
                <Button>
                  <strong>create new article</strong>
                </Button>
              </Link>
            </Container>
          </CardBody>
        </Card>
      </Col>
    )
  );
};

export default UserDash;
