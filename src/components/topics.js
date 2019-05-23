import React from "react";
import Topic from "./topic";
import { getTopics } from "../api/api";

class Topics extends React.Component {
  state = { topics: [] };

  render() {
    const { toolTip } = this.props;
    const { topics } = this.state;
    return topics ? (
      topics.map(topic => {
        return (
          <Topic
            toolTip={toolTip}
            key={topic.slug}
            placeTopic={this.props.placeTopic}
            setTopic={this.props.setTopic}
            topic={topic.slug}
            description={topic.description}
          />
        );
      })
    ) : (
      <h1>nothing yet</h1>
    );
  }

  fetchTopics = () => {
    getTopics().then(topics => {
      this.setState({ topics });
    });
  };
  componentDidUpdate = ({ more }) => {
    if (more) {
      this.fetchTopics();
    }
  };
  componentDidMount = () => {
    this.fetchTopics();
  };
}

export default Topics;
