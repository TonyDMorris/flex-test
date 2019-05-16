import React from "react";
import { InputGroup, FormInput, Button, InputGroupAddon } from "shards-react";
import Topics from "./topics";
import { postTopic } from "../api/api";

class TopicForm extends React.Component {
  state = {
    description: null,
    topic: "pick a topic or make one",
    more: false,
    error: ""
  };
  render() {
    const { topic, more, error } = this.state;

    return (
      <React.Fragment>
        <InputGroup className="mt-1">
          <FormInput
            onChange={e => {
              this.setState({ topic: e.target.value });
              this.props.placeTopic(e.target.value);
            }}
            valid={topic ? true : false}
            invalid={topic ? false : true}
            value={topic}
          />
          <FormInput
            onChange={e => {
              this.setState({ description: e.target.value });
            }}
            placeholder="new topics need a description , add one here"
          />
          <InputGroupAddon type="append">
            <Button
              onClick={e => {
                this.getNewTopic();
              }}
            >
              Add
            </Button>
          </InputGroupAddon>
        </InputGroup>
        <small>{error}</small>
        <div className="border rounded mt-5">
          <Topics
            more={more}
            placeTopic={this.props.placeTopic}
            setTopic={this.setTopic}
          />
        </div>
      </React.Fragment>
    );
  }

  getNewTopic = () => {
    const { topic, description } = this.state;
    postTopic(topic, description, this.props.token)
      .then(topic => {
        this.setState({ more: true });
        this.setState({ more: false });
      })
      .catch(() => {
        const err = !this.state.description
          ? "you need to add a description"
          : "this topic already exists";
        this.setState({ error: err });
      });
  };
  setTopic = topic => {
    this.setState({ topic, description: topic });
  };
}

export default TopicForm;
