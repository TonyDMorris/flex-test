import React from "react";
import Comments from "./comments";
import ArticleUser from "./article-user";
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
    return (
      title && (
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
              <Comments comment_count={comment_count} article_id={article_id} />
            ) : (
              <div>
                <Link to="/signup">Signup</Link> or{" "}
                <Link to="/login">login</Link> to see the comments
              </div>
            )}
          </CardBody>

          <CardFooter>
            <div className="offset-11">
              <span role="img" aria-label="muscle emoji">
                💪
              </span>
              {votes}
            </div>
          </CardFooter>
        </Card>
      )
    );
  }
  componentDidMount = () => {
    const { article_id } = this.props;
    getArticle(article_id).then(article => {
      this.setState({ ...article });
    });
  };
}

export default ArticleMain;
