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
    order: "desc",
    article_count: 0
  };
  render() {
    const { articles, moreArticles } = this.state;

    return articles.length ? (
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
    ) : (
      <small>Loading ....</small>
    );
  }

  componentDidMount = () => {
    this.fetchArticles();
  };
  changePage = p => {
    const { article_count } = this.state;
    if (p <= Math.ceil(article_count / 10)) {
      let config = {
        author: this.props.author,
        page: p,
        topic: this.props.topic
      };
      getArticles(config)
        .then(([articles, article_count]) => {
          this.setState({ articles: [...this.state.articles, ...articles] });
        })
        .catch(({ response: { data } }) => {
          navigate("/error", {
            replace: true,
            state: {
              msg: ` sorry 😔 ${data.error}`
            }
          });
        });
    } else {
      this.setState({ moreArticles: false });
    }
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
      .then(([articles, article_count]) => {
        if (articles.length === 0) {
          navigate("/error", {
            replace: true,
            state: {
              msg: "nothing here"
            }
          });
        }
        this.setState({ articles, article_count });
      })
      .catch(({ response: { data } }) => {
        navigate("/error", {
          replace: true,
          state: {
            msg: ` sorry 😔 ${data.error}`
          }
        });
      });
  };
  componentDidUpdate = prevProps => {
    if (this.props.topic !== prevProps.topic) {
      this.fetchArticles();
    }
  };
}

export default Articles;
