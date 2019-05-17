import React from "react";
import { Card, CardBody, Container, Col, Row, Button } from "shards-react";
import { Link } from "@reach/router";
import Topics from "../components/topics";
const UserDash = ({ loggedInUser, avatar_url }) => {
  return (
    loggedInUser && (
      <Col md={3} lg={3}>
        <Card>
          <CardBody>
            <Container>
              <Row className="justify-content-center">
                <Col />
                <Col>{loggedInUser}</Col>
                <Col />
              </Row>
              <Row className="justify-content-center">
                <Col className="col-auto" />
                <Col>
                  <img
                    style={{ maxWidth: "150px" }}
                    src={`${avatar_url}`}
                    alt="users avatar"
                  />
                </Col>
                <Col className="col-auto" />
              </Row>
              <Row className="justify-content-center">
                <Col className="col-auto" />
                <Col className="align-self-center">
                  <Link to="/new-article">
                    <Button>
                      <strong>create new article</strong>
                    </Button>
                  </Link>
                </Col>
                <Col className="col-auto" />
              </Row>

              <Row className="justify-content-center">
                <Col>
                  <Topics />
                </Col>
              </Row>
            </Container>
          </CardBody>
        </Card>
      </Col>
    )
  );
};

export default UserDash;
