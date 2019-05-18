import React from "react";
import { navigate } from "@reach/router";
import { Button, Card, CardBody, Row, Col } from "shards-react";
const ArticleDeleted = () => {
  return (
    <Row className="justify-content-center">
      <Col style={{ textAlign: "center" }} md={6}>
        <Card>
          <CardBody>
            <h1>
              Article deleted{" "}
              <Button
                onClick={() => {
                  navigate("/", { replace: true });
                }}
              >
                OK
              </Button>
            </h1>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default ArticleDeleted;
