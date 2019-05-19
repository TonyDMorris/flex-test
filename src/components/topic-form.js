import React from "react";
import { getTopics, postTopic } from "../api/api";
import Topic from "./topic";
import {
  Collapse,
  InputGroup,
  FormInput,
  InputGroupAddon,
  Button
} from "shards-react";
class TopicForm extends React.Component {
  state = {
    topics: [],
    selectedTopic: false,
    toggle: false,
    newSlug: false,
    newDescription: false,
    error: ""
  };
  render() {
    const { topics, selectedTopic, toggle, error } = this.state;

    return (
      <div style={{ padding: "10px" }}>
        <div>
          {selectedTopic ? (
            selectedTopic.map(topic => {
              return (
                <Topic
                  key={`${topic.slug}selection`}
                  topic={topic.slug}
                  description={topic.description}
                  handleClick={this.handleRemove}
                />
              );
            })
          ) : (
            <small>Please select a topic from below</small>
          )}
        </div>
        <div className="border rounded p-2 mt-5">
          {topics.map(topic => {
            return (
              <Topic
                key={topic.slug}
                handleClick={this.handleClick}
                topic={topic.slug}
                description={topic.description}
              />
            );
          })}
        </div>
        {!toggle && (
          <small>
            Dont see anything that matches? create a new topic{" "}
            <span className="link" onClick={this.toggle}>
              here
            </span>
          </small>
        )}
        {error && <small style={{ color: "red" }}>{error}</small>}
        <Collapse className="mt-3" open={toggle}>
          <small>Add a name and a brief description to your new topic</small>
          <InputGroup className="mt-1">
            <FormInput
              onChange={e => {
                this.handleChange("newSlug", e.target.value);
              }}
              placeholder="Name"
            />
            <FormInput
              onChange={e => {
                this.handleChange("newDescription", e.target.value);
              }}
              placeholder="Description"
            />
            <InputGroupAddon type="append">
              <Button onClick={this.handleSubmit}>Add</Button>
            </InputGroupAddon>
          </InputGroup>
        </Collapse>
      </div>
    );
  }
  componentDidMount = () => {
    getTopics().then(topics => {
      this.setState({ topics });
    });
  };
  handleClick = topic => {
    const { topics } = this.state;
    const { setTopic } = this.props;
    const selectedTopic = topics.filter(oldTopic => {
      return oldTopic.slug === topic;
    });
    setTopic(topic);
    this.setState({ selectedTopic });
  };
  toggle = () => {
    const { toggle } = this.state;
    this.setState({ toggle: !toggle });
  };
  handleChange = (input, value) => {
    this.setState({ [input]: value });
  };
  handleSubmit = () => {
    const { newSlug, newDescription, topics } = this.state;

    if (newSlug && newDescription) {
      postTopic(newSlug, newDescription, this.props.token)
        .then(newTopic => {
          this.setState({ topics: [...topics, newTopic], error: "" });
        })
        .catch(() => {
          this.setState({ error: "this topic already exists" });
        });
    } else {
      this.setState({ error: "All fields are required" });
    }
  };
}

export default TopicForm;
