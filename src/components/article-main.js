import React from "react";
import Comments from "./comments";
import ArticleUser from "./article-user";
import VoteBar from "../components/vote-bar";
import { patchVotes } from "../api/api";
import { Link } from "@reach/router";
import { getArticle } from "../api/api";
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardFooter,
  CardSubtitle
} from "shards-react";

class ArticleMain extends React.Component {
  state = {
    title: "",
    author: "",
    comment_count: "",
    article_id: "",
    votes: "",
    body: ""
  };

  render() {
    const { loggedInUser } = this.props;
    const {
      title,
      author,
      comment_count,
      article_id,
      votes,
      body,
      created_at
    } = this.state;
    return title && loggedInUser ? (
      <Card style={{ marginTop: "10px" }} small={false}>
        <CardHeader>
          <ArticleUser author={author} />
        </CardHeader>

        <CardBody>
          <CardTitle>{title}</CardTitle>
          <CardSubtitle style={{ colour: "grey", fontSize: "10px" }}>
            {created_at}
          </CardSubtitle>

          <p>{`${body}`}</p>

          {loggedInUser ? (
            <Comments
              token={this.props.token}
              comment_count={comment_count}
              article_id={article_id}
            />
          ) : (
            <div>
              <Link to="/signup">Signup</Link> or <Link to="/login">login</Link>{" "}
              to see the comments
            </div>
          )}
        </CardBody>

        <CardFooter>
          <VoteBar
            style={{ transform: "translate(10px)" }}
            media_id={article_id}
            incrementVotes={this.incrementVotes}
            votes={votes}
          />
        </CardFooter>
      </Card>
    ) : (
      <CardBody className="col-6 offset-4">
        <Link to="/signup">Signup</Link> or <Link to="/login">Login</Link> to
        see the full article
      </CardBody>
    );
  }
  incrementVotes = (id, isComment, n) => {
    patchVotes(id, false, n, this.props.token).then(article => {
      const newVotes = this.state.votes + n;
      this.setState({ votes: newVotes });
    });
  };
  componentDidMount = () => {
    const { article_id } = this.props;
    getArticle(article_id).then(article => {
      this.setState({ ...article });
    });
  };
}

export default ArticleMain;
