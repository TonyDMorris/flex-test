import React from "react";

import { Container, Row, Col } from "shards-react";
import { Link } from "@reach/router";
import { getUserInfo } from "../api/api";
class ArticleUser extends React.Component {
  state = {
    username: "",
    avatar: ""
  };
  componentDidMount(props) {
    return getUserInfo(this.props.author).then(data => {
      this.setState({
        username: data.user.username,
        avatar: data.user.avatar_url
      });
    });
  }
  render() {
    const { username, avatar } = this.state;
    return (
      <Container>
        <Row>
          <Col
            md={{ size: 2, order: 1, offset: 0 }}
            lg={{ size: 2, order: 1, offset: 0 }}
          >
            <Link to={`/user/${username}`}>
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
                src={`${avatar}`}
                alt="users avatar "
              />
            </Link>
          </Col>
          <Col>
            <h2 style={{ fontSize: "20px" }}>{username}</h2>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ArticleUser;
