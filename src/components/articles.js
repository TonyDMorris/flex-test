import React from "react";
import Article from "./article";
import InfiniteScroll from "react-infinite-scroller";
import { getArticles } from "../api/api";

class Articles extends React.Component {
  state = {
    articles: [],
    moreArticles: true
  };
  render() {
    const { articles, moreArticles } = this.state;

    return (
      articles.length && (
        <InfiniteScroll
          pageStart={1}
          loadMore={this.changePage}
          hasMore={moreArticles}
          loader={
            <div className="loader" key={1000}>
              Loading ...
            </div>
          }
        >
          {articles.map(article => {
            const {
              topic,
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
                token={this.props.token}
                topic={topic}
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
          })}
        </InfiniteScroll>
      )
    );
  }

  componentDidMount = () => {
    let config = { author: this.props.author, page: this.state.page };
    getArticles(config).then(articles => {
      this.setState({ articles });
    });
  };
  changePage = p => {
    let config = { author: this.props.author, page: p };
    getArticles(config)
      .then(articles => {
        this.setState({ articles: [...this.state.articles, ...articles] });
      })
      .catch(({ error }) => {
        this.setState({ moreArticles: false });
      });
  };
}

export default Articles;
