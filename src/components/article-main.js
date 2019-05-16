import React from "react";
import Comments from "./comments";
import ArticleUser from "./article-user";
import VoteBar from "../components/vote-bar";

import Topic from "./topic";
import { patchVotes, getArticle, deleteArticle } from "../api/api";
import { Link, navigate } from "@reach/router";

import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardFooter,
  CardSubtitle,
  Row,
  Col,
  Container,
  Button
} from "shards-react";

class ArticleMain extends React.Component {
  state = {
    title: "",
    author: "",
    comment_count: "",
    article_id: "",
    votes: "",
    body: "",
    topic: ""
  };

  render() {
    const { loggedInUser, token } = this.props;
    const {
      title,
      author,
      comment_count,
      article_id,
      votes,
      body,
      created_at,
      topic
    } = this.state;
    return (
      title && (
        <Card style={{ marginTop: "10px" }} small={false}>
          <CardHeader>
            <Container>
              <Row>
                <Col>
                  <ArticleUser author={author} />
                </Col>
                <Col className=" col-1 align-self-end">
                  {loggedInUser === author && (
                    <Button
                      onClick={() => {
                        this.removeArticle();
                      }}
                    >
                      X
                    </Button>
                  )}
                </Col>
              </Row>
            </Container>
          </CardHeader>

          <CardBody>
            <CardTitle>{title}</CardTitle>

            <CardSubtitle style={{ colour: "grey", fontSize: "10px" }}>
              {created_at}
            </CardSubtitle>

            <p>{`${body}`}</p>

            {loggedInUser ? (
              <Comments
                increaseCommentCount={this.increaseCommentCount}
                loggedInUser={loggedInUser}
                token={token}
                comment_count={comment_count}
                article_id={article_id}
              />
            ) : (
              <div>
                <Link to="/signup">Signup</Link> or{" "}
                <Link to="/login">login</Link> to see the comments
              </div>
            )}
          </CardBody>

          <CardFooter>
            <Container>
              <Row>
                <Col>
                  <Topic topic={topic} />
                </Col>
                <Col className="col-auto">
                  <VoteBar
                    media_id={article_id}
                    incrementVotes={this.incrementVotes}
                    votes={votes}
                  />
                </Col>
              </Row>
            </Container>
          </CardFooter>
        </Card>
      )
    );
  }
  incrementVotes = (id, isComment, n) => {
    patchVotes(id, false, n, this.props.token)
      .then(article => {
        const newVotes = this.state.votes + n;
        this.setState({ votes: newVotes });
      })
      .catch(() => {
        navigate("/error", {
          replace: true,
          state: { msg: "dunno why this would error" }
        });
      });
  };
  componentDidMount = () => {
    const { article_id } = this.props;
    getArticle(article_id)
      .then(article => {
        this.setState({ ...article });
      })
      .catch(() => {
        navigate("/error", {
          replace: true,
          state: { msg: "you know full well this doesn't exist" }
        });
      });
  };
  removeArticle = () => {
    const { article_id } = this.props;
    deleteArticle(article_id, this.props.token);
    navigate("/article-deleted", { replace: true });
  };

  increaseCommentCount = () => {
    let { comment_count } = this.state;
    const newCount = +comment_count + 1;
    this.setState({ comment_count: newCount });
  };
}

export default ArticleMain;
