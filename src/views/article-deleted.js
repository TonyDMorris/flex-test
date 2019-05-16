import React from "react";
import { navigate } from "@reach/router";
import { Button, Card, CardBody } from "shards-react";
const ArticleDeleted = () => {
  return (
    <Card className="col-6 offset-3">
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
  );
};

export default ArticleDeleted;
