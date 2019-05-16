import React from "react";
import axios from "axios";
import Comment from "./comment";

import { Collapse, FormTextarea, Button } from "shards-react";
import {
  patchVotes,
  submitComment,
  deleteComment,
  getArticleComments
} from "../api/api";

class Comments extends React.Component {
  state = {
    comments: [],
    collapse: false,
    commentBody: "",
    show: false
  };
  render() {
    const { comments, collapse, show } = this.state;

    return show ? (
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
                loggedInUser={this.props.loggedInUser}
                removeComment={this.removeComment}
                key={comment.comment_id}
                comment_id={comment.comment_id}
                created_at={comment.created_at}
                author={comment.author}
                body={comment.body}
                votes={comment.votes}
                incrementVotes={this.incrementVotes}
              />
            );
          })}
          <br />
          <FormTextarea
            onChange={e => {
              this.setState({ commentBody: e.target.value });
            }}
            value={this.state.commentBody}
          />
          <br />

          <Button onClick={this.handleSubmit} theme="success">
            Post Comment
          </Button>
        </Collapse>
      </React.Fragment>
    ) : (
      <h5 style={{ fontSize: "14px", padding: "0px", margin: "auto" }}>
        no comments yet{" "}
        <span
          style={{ fontSize: "14px", padding: "0px", margin: "auto" }}
          className="link"
          onClick={e => {
            this.toggleShow();
          }}
        >
          make one
        </span>
      </h5>
    );
  }
  componentDidMount() {
    getArticleComments(this.props.article_id).then(comments => {
      comments.length > 0
        ? this.setState({ comments, show: true })
        : this.setState({ comments });
    });
  }
  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }
  incrementVotes = (id, isComment, n) => {
    patchVotes(id, isComment, n, this.props.token).then(comment => {
      const newComments = this.state.comments.map(oldComment => {
        if (oldComment.comment_id === id) {
          oldComment.votes += n;
          return oldComment;
        } else {
          return oldComment;
        }
      });
      this.setState({ comments: newComments });
    });
  };

  handleSubmit = () => {
    if (this.state.commentBody.length > 0) {
      const { article_id, token, loggedInUser } = this.props;
      const comment = {
        body: this.state.commentBody,
        article_id,
        username: loggedInUser
      };

      submitComment(comment, token).then(comment => {
        this.setState({
          comments: [...this.state.comments, comment],
          commentBody: ""
        });
        this.props.increaseCommentCount();
      });
    }
  };
  removeComment = comment_id => {
    const { token } = this.props;
    deleteComment(comment_id, token);
    const newComments = this.state.comments.filter(comment => {
      return comment.comment_id !== comment_id;
    });
    this.setState({ comments: newComments });
  };
  toggleShow = () => {
    this.setState({ show: true, collapse: true });
  };
}

export default Comments;
