import React from "react";
import Article from "./article";
import InfiniteScroll from "react-infinite-scroller";
import DropDownSort from "./drop-down-sort";
import { getArticles } from "../api/api";

class Articles extends React.Component {
  state = {
    articles: [],
    moreArticles: true,
    sort_by: "created_at",
    order: "desc"
  };
  render() {
    const { articles, moreArticles } = this.state;

    return (
      articles.length && (
        <React.Fragment>
          <DropDownSort handleSort={this.handleSort} />
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
        </React.Fragment>
      )
    );
  }

  componentDidMount = () => {
    this.fetchArticles();
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
  handleSort = sort_by => {
    this.setState({ sort_by }, () => {
      this.fetchArticles();
    });
  };
  fetchArticles = () => {
    const { page, sort_by, order } = this.state;
    let config = {
      author: this.props.author,
      page,
      sort_by,
      order
    };
    getArticles(config).then(articles => {
      this.setState({ articles });
    });
  };
}

export default Articles;
