import React from "react";

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
      <span className="p0">
        <Link className={"offset-0"} to={`/user/${username}`}>
          {" "}
          <img
            style={{
              padding: "0px",
              margin: "0",
              height: "50px",
              width: "50px",
              border: "solid 2px green",
              borderRadius: "5px",
              backgroundColor: "white"
            }}
            src={`${avatar}`}
            alt="users avatar "
          />
        </Link>
        <strong className="col-2 offset-0" style={{ fontSize: "20px" }}>
          {username}
        </strong>
      </span>
    );
  }
}

export default ArticleUser;
