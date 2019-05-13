import React from "react";
import { Router } from "@reach/router";
import User from "./views/user";
import "bootstrap/dist/css/bootstrap.min.css";
import Signup from "./views/signup";
import Login from "./views/login";
import "shards-ui/dist/css/shards.min.css";
import NavMenu from "./components/nav";
import { Container, Row } from "shards-react";
import Home from "./views/home";

import "./style.css";

class App extends React.Component {
  state = { username: "", token: "" };
  render() {
    return (
      <Container className="col-12">
        <Row>
          <NavMenu />
        </Row>
        <Router>
          <Home path="/" />
          <User path="/user/:author" />
          <Signup path="/signup" />
          <Login login={this.login} path="/login" />
        </Router>
        ;
      </Container>
    );
  }
  login = (username, token) => {
    console.log(username, token);
    this.setState({ loggedInUser: username, token });
  };
}

export default App;
