import React from "react";

import { Badge } from "shards-react";

const Topic = ({ topic }) => {
  return (
    <Badge
      style={{
        backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(16)}`
      }}
    >
      {topic}
    </Badge>
  );
};
export default Topic;
