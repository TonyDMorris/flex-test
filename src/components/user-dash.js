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
      <Col md={3} lg={3}>
        <Card>
          <CardBody>
            <Container>
              <Row>
                <Col />
                <Col>{loggedInUser}</Col>
                <Col />
              </Row>
              <Row className="justify-content-center">
                <Col className="col-auto" />
                <Col>
                  <img style={{ maxWidth: "150px" }} src={`${avatar_url}`} />
                </Col>
                <Col className="col-auto" />
              </Row>
              <Row className="justify-content-center">
                <Col className="col-auto" />
                <Col>
                  <Link to="/new-article">
                    <Button>
                      <strong>create new article</strong>
                    </Button>
                  </Link>
                </Col>
                <Col className="col-auto" />
              </Row>
            </Container>
          </CardBody>
        </Card>
      </Col>
    )
  );
};

export default UserDash;
