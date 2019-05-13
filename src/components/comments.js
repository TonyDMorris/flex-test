import React from "react";
import axios from "axios";
import Comment from "./comment";
import { Collapse } from "shards-react";

class Comments extends React.Component {
  state = { comments: [], collapse: false };
  render() {
    const { comments, collapse } = this.state;
    return comments.length > 0 ? (
      <React.Fragment>
        <h5 style={{ fontSize: "15px", padding: "0px", margin: "auto" }}>
          {this.props.comment_count} comments
        </h5>
        <h5
          style={{ fontSize: "14px", padding: "0px", margin: "auto" }}
          className="link"
          onClick={e => {
            this.toggle();
          }}
        >
          {collapse ? "hide" : "show"}
        </h5>

        <Collapse open={collapse}>
          {comments.map(comment => {
            return (
              <Comment
                key={comment.comment_id}
                created_at={comment.created_at}
                author={comment.author}
                body={comment.body}
              />
            );
          })}
        </Collapse>
      </React.Fragment>
    ) : (
      <h5 style={{ fontSize: "14px", padding: "0px", margin: "auto" }}>
        no comments yet
      </h5>
    );
  }
  componentDidMount() {
    return axios
      .get(
        `https://pure-falls-39051.herokuapp.com/api/articles/${
          this.props.article_id
        }/comments`
      )
      .then(({ data }) => {
        this.setState({ comments: data.comments });
      });
  }
  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }
}

export default Comments;
