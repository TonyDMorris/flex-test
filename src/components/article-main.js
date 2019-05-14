import React from "react";
import Comments from "./comments";
import ArticleUser from "./article-user";
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

            <Comments comment_count={comment_count} article_id={article_id} />
          </CardBody>

          <CardFooter>
            <div className="offset-11">💪{votes}</div>
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
