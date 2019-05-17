import React from "react";
import { Card, CardBody, Container, Col, Row, Button } from "shards-react";
import { Link } from "@reach/router";
import Topics from "../components/topics";
const UserDash = ({ loggedInUser, avatar_url }) => {
  return (
    loggedInUser && (
      <Col md={3}>
        <Card>
          <CardBody style={{ textAlign: "center" }}>
            <Container>
              <Row className="justify-content-center">
                <Col>
                  <h5>{loggedInUser}</h5>
                </Col>
              </Row>
              <Row className="justify-content-center">
                <Col className="col-auto" />
                <Col>
                  <img
                    style={{ maxWidth: "150px", margin: "10px" }}
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
                <Col style={{ margin: "10px" }}>
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
