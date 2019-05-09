import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import User from "./views/user";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import Home from "./views/home";

import "./style.css";

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/user/" component={User} />;
    </Router>
  );
};

export default App;
