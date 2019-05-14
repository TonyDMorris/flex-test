import React from "react";
import Article from "./article";
const axios = require("axios");
class Articles extends React.Component {
  state = {
    articles: []
  };
  render() {
    const { articles } = this.state;
    return articles.map(article => {
      const {
        votes,
        article_id,
        comment_count,
        author,
        title,
        body,
        created_at
      } = article;
      return (
        <Article
          key={article_id}
          comment_count={comment_count}
          article_id={article_id}
          author={author}
          title={title}
          body={body}
          created_at={created_at}
          votes={votes}
        />
      );
    });
  }
  componentDidMount = () => {
    const authorQuery = this.props.author ? `?author=${this.props.author}` : "";
    return axios
      .get(`https://pure-falls-39051.herokuapp.com/api/articles${authorQuery}`)
      .then(({ data }) => {
        this.setState({ articles: data.articles });
      });
  };
}

export default Articles;
