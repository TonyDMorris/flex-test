import React from "react";
import Article from "./article";
import InfiniteScroll from "react-infinite-scroller";
import DropDownSort from "./drop-down-sort";
import { getArticles } from "../api/api";
import { navigate } from "@reach/router";

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
          <DropDownSort handleSort={this.handleSort} />
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
      topic: this.props.topic,
      author: this.props.author,
      page,
      sort_by,
      order
    };
    getArticles(config)
      .then(articles => {
        if (articles.length === 0) {
          navigate("/error", {
            replace: true,
            state: {
              msg: "nothing here"
            }
          });
        }
        this.setState({ articles });
      })
      .catch(() => {
        navigate("/error", {
          replace: true,
          state: {
            msg:
              "whataver you looked for doesnt exist stop messing with the url"
          }
        });
      });
  };
}

export default Articles;
