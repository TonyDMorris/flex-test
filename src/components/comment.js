import React from "react";
import ArticleUser from "./article-user";
import VoteBar from "../components/vote-bar";

import { Container, Row, Col, Button } from "shards-react";
const Comment = ({
  loggedInUser,
  removeComment,
  author,
  body,
  votes,
  incrementVotes,
  comment_id
}) => {
  return (
    <div
      style={{ backgroundColor: "#f5f6f6" }}
      className="p-2 mt-2 border rounded"
    >
      <Container>
        <Row>
          <Col>
            <ArticleUser author={author} />
          </Col>
          <Col className=" col-1 align-self-end">
            {loggedInUser === author && (
              <Button
                onClick={() => {
                  removeComment(comment_id);
                }}
              >
                X
              </Button>
            )}
          </Col>
        </Row>
      </Container>

      <div
        style={{ backgroundColor: "#ffffff" }}
        className="p-2 mt-3 border rounded"
      >
        <p>{body}</p>

        <VoteBar
          media_id={comment_id}
          incrementVotes={incrementVotes}
          votes={votes}
        />

        <div className="offset-md-11" />
      </div>
    </div>
  );
};

export default Comment;
