import React from "react";
import Article from "./article";
const axios = require("axios");
class Articles extends React.Component {
  state = {
    articles: []
  };
  render() {
    return this.state.articles.map(article => {
      return (
        <Article
          key={article.article_id}
          comment_count={article.comment_count}
          article_id={article.article_id}
          author={article.author}
          title={article.title}
          body={article.body}
          created_at={article.created_at}
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
