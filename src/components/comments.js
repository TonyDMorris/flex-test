import React from "react";
import axios from "axios";
import Comment from "./comment";
import { Collapse } from "shards-react";

class Comments extends React.Component {
  state = { comments: [], collapse: false };
  render() {
    return (
      <React.Fragment>
        <h5
          onClick={e => {
            this.toggle();
          }}
        >
          {this.props.comment_count} comments
        </h5>
        <Collapse open={this.state.collapse}>
          {this.state.comments.map(comment => {
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
