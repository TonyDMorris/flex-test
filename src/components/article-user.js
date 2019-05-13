import React from "react";
import axios from "axios";
import { Container, Row, Col } from "shards-react";
import { Link } from "@reach/router";
class ArticleUser extends React.Component {
  state = {
    username: "",
    avatar: ""
  };
  componentDidMount(props) {
    return axios
      .get(
        `https://pure-falls-39051.herokuapp.com/api/users/${this.props.author}`
      )
      .then(({ data }) => {
        this.setState({
          username: data.user.username,
          avatar: data.user.avatar_url
        });
      });
  }
  render() {
    return (
      <Container>
        <Row>
          <Col
            md={{ size: 2, order: 1, offset: 0 }}
            lg={{ size: 2, order: 1, offset: 0 }}
          >
            <Link to={`/user/${this.state.username}`}>
              {" "}
              <img
                style={{
                  margin: "auto",
                  height: "50px",
                  width: "50px",
                  border: "solid 1px red",
                  borderRadius: "5px",
                  backgroundColor: "white"
                }}
                src={`${this.state.avatar}`}
                alt="users avatar "
              />
            </Link>
          </Col>
          <Col>
            <h2 style={{ fontSize: "20px" }}>{this.state.username}</h2>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ArticleUser;
