import React, { useState } from "react";

import { Badge, Tooltip } from "shards-react";
import { navigate } from "@reach/router";

const Topic = ({ toolTip, handleClick, topic, description }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <React.Fragment>
      <Badge
        id={`${topic.replace(/\s/g, "-")}`}
        style={{
          backgroundColor: "#80FFF9",
          border: "solid 1px #74CFE8",
          marginRight: "3px"
        }}
      >
        <div
          className="link"
          onClick={e => {
            handleClick ? handleClick(topic) : navigate(`/topics/${topic}`);
          }}
        >
          {topic}
        </div>
      </Badge>
      {toolTip && (
        <Tooltip
          open={toggle}
          target={`#${topic.replace(/\s/g, "-")}`}
          toggle={() => {
            setToggle(!toggle);
          }}
        >
          {description}
        </Tooltip>
      )}
    </React.Fragment>
  );
};
export default Topic;
