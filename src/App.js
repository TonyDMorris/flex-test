import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container, Row, Col } from "shards-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import Home from "./views/home";
import NavMenu from "./components/nav";
import "./style.css";

const App = () => {
  return (
    <Router>
      <Container>
        <Row>
          <Col lg={{ size: 3, order: 0, offset: 0 }}>
            <NavMenu />
          </Col>
          <Route path="/" exact component={Home} />
          <Col lg={{ size: 3, order: 1, offset: 0 }} />
        </Row>
      </Container>
    </Router>
  );
};

export default App;
