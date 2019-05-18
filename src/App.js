import React from "react";
import { Router } from "@reach/router";
import User from "./views/user";
import Signup from "./views/signup";
import Login from "./views/login";
import NavMenu from "./components/nav";
import { Container } from "shards-react";
import { navigate } from "@reach/router";
import Home from "./views/home";
import SingleArticle from "./views/single-article";
import CreateNewArticle from "./views/create-new-article";
import { getUserInfo } from "./api/api";
import ArticleDeleted from "./views/article-deleted";
import ArticlesByTopic from "./views/articles-by-topic";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import "./style.css";
import ErrorView from "./views/error-view";

class App extends React.Component {
  state = { loggedInUser: false, token: "", avatar_url: "" };
  render() {
    const { loggedInUser, avatar_url, token } = this.state;
    return (
      <Container className="col-12 align-content-center">
        <NavMenu logout={this.logout} loggedInUser={this.state.loggedInUser} />

        <Router>
          <Home
            avatar_url={avatar_url}
            token={token}
            loggedInUser={loggedInUser}
            path="/"
          />
          <SingleArticle
            token={token}
            loggedInUser={loggedInUser}
            path="articles/:article_id"
          />
          <User
            token={token}
            loggedInUser={loggedInUser}
            path="/user/:author"
          />
          <Signup path="/signup" />
          <Login login={this.login} path="/login" />
          {loggedInUser && (
            <CreateNewArticle
              token={token}
              loggedInUser={loggedInUser}
              path="/new-article"
            />
          )}
          <ArticleDeleted path="/article-deleted" />
          <ArticlesByTopic loggedInUser={loggedInUser} path="topics/:topic" />
          <ErrorView default path="/error" />
        </Router>
      </Container>
    );
  }
  login = (username, token) => {
    this.setState({ loggedInUser: username, token });
    localStorage.setItem("loggedInUser", username);
    localStorage.setItem("token", token);
  };
  logout = () => {
    this.setState({ loggedInUser: "", token: "" });
    localStorage.clear();
    navigate("/login");
  };
  componentDidUpdate = () => {
    const { loggedInUser } = this.state;
    if (loggedInUser) {
      return getUserInfo(loggedInUser).then(data => {
        this.setState({ avatar_url: data.user.avatar_url });
      });
    }
  };
  componentDidMount = () => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    const token = localStorage.getItem("token");

    loggedInUser && token && this.login(loggedInUser, token);
  };
}

export default App;
