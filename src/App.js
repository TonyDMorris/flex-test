import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import Articles from "./components/articles";
import { Row, Col, Container } from "shards-react";
import "./style.css";
const axios = require("axios");
class App extends React.Component {
  state = {
    articles: []
  };
  render() {
    return (
      <Container>
        <Row>
          <Col lg={{ size: 6, order: 3, offset: 3 }}>
            <Articles articles={this.state.articles} />
          </Col>
        </Row>
      </Container>
    );
  }
  componentDidMount = () => {
    return axios
      .get("https://pure-falls-39051.herokuapp.com/api/articles")
      .then(({ data }) => {
        this.setState({ articles: data.articles });
      });
  };
}

export default App;
