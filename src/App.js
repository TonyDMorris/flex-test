import React from "react";
import { Router } from "@reach/router";
import User from "./views/user";
import Signup from "./views/signup";
import Login from "./views/login";
import NavMenu from "./components/nav";
import { Container } from "shards-react";
import { navigate } from "@reach/router";
import Home from "./views/home";
import { getUserInfo } from "./api/api";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import "./style.css";

class App extends React.Component {
  state = { loggedInUser: "", token: "", avatar_url: "" };
  render() {
    const { loggedInUser, avatar_url } = this.state;
    return (
      <div>
        <NavMenu logout={this.logout} loggedInUser={this.state.loggedInUser} />

        <Container className="col-12">
          <Router>
            <Home
              avatar_url={avatar_url}
              loggedInUser={loggedInUser}
              path="/"
            />
            <User path="/user/:author" />
            <Signup path="/signup" />
            <Login login={this.login} path="/login" />
          </Router>
          ;
        </Container>
      </div>
    );
  }
  login = (username, token) => {
    this.setState({ loggedInUser: username, token });
  };
  logout = () => {
    this.setState({ loggedInUser: "", token: "" });
    navigate("/");
  };
  componentDidUpdate = () => {
    const { loggedInUser } = this.state;
    if (loggedInUser) {
      return getUserInfo(loggedInUser).then(data => {
        this.setState({ avatar_url: data.user.avatar_url });
      });
    }
  };
}

export default App;
