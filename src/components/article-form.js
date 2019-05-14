import React from "react";
import { postArticle } from "../api/api";
import { navigate } from "@reach/router";
import {
  FormTextarea,
  Card,
  CardBody,
  CardTitle,
  FormInput,
  Button,
  Popover,
  PopoverBody
} from "shards-react";

class ArticleForm extends React.Component {
  state = {
    toggles: { body: false, title: false },
    body: null,
    title: null,
    topic: "cooking",
    highlighting: { body: null, title: null }
  };
  handlePopOver = e => {
    const { name } = e.target;

    this.setState(
      {
        toggles: { [name]: !this.state.toggles[name], ...this.state.toggles }
      },
      () => {
        console.log(this.state);
      }
    );
  };
  render() {
    const {
      highlighting: { body, title }
    } = this.state;
    return (
      <Card>
        <CardBody>
          <p className="mb-2">{"📖 What do you want to write about?"}</p>
          <CardTitle>
            <FormInput
              onBlur={this.handlePopOver}
              onFocus={this.handlePopOver}
              invalid={title === null ? null : !title}
              valid={title}
              onChange={this.handleChange}
              name="title"
              id="title"
            />
            <Popover
              placement="left"
              target="#title"
              open={this.state.toggles.title}
            >
              <PopoverBody>your title should be descriptive</PopoverBody>
            </Popover>
          </CardTitle>
          <p className="mb-2">{"🤔 What's the content?"}</p>
          <FormTextarea
            onBlur={this.handlePopOver}
            onFocus={this.handlePopOver}
            invalid={body === null ? null : !body}
            valid={body}
            name="body"
            id="body"
            style={{ height: "400px" }}
            onChange={this.handleChange}
          />
          <Popover
            placement="left"
            target="#body"
            open={this.state.toggles.body}
          >
            <PopoverBody>your title should be descriptive</PopoverBody>
          </Popover>
          <Button
            onClick={this.handleSubmit}
            disabled={body && title ? false : true}
            className="col-4 offset-4 mt-5"
            theme="success"
          >
            Post!
          </Button>
        </CardBody>
      </Card>
    );
  }
  handlePopOver = e => {
    const { name } = e.target;

    this.setState({
      toggles: { [name]: !this.state.toggles[name], ...this.state.toggles }
    });
  };
  handleChange = e => {
    const { name, value } = e.target;
    const { highlighting } = this.state;

    switch (name) {
      case "body":
        value.length > 25
          ? (highlighting[name] = true)
          : (highlighting[name] = false);

        break;
      default:
        value.length > 10 && value.length < 50
          ? (highlighting[name] = true)
          : (highlighting[name] = false);

        break;
    }
    this.setState({ highlighting });
    this.state.highlighting[name]
      ? this.setState({ [name]: value })
      : this.setState({ [name]: "" });

    this.setState({ highlighting });
  };
  handleSubmit = () => {
    const { body, title, topic } = this.state;
    const article = { body, title, topic, username: this.props.loggedInUser };
    postArticle(article, this.props.token).then(article => {
      navigate(`/articles/${article.article_id}`);
    });
  };
}

export default ArticleForm;
