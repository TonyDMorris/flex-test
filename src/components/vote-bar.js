import { ButtonGroup, Button } from "shards-react";
import React, { useState } from "react";
const VoteBar = ({ media_id, incrementVotes, votes, style }) => {
  const [threeWaySwitch, setSwitch] = useState(0);

  return (
    <ButtonGroup className="col-3 offset-9">
      <Button
        disabled={threeWaySwitch === 1}
        onClick={e => {
          setSwitch(threeWaySwitch + 1);
          incrementVotes(media_id, true, 1);
        }}
      >
        <span role="img" aria-label="muscle emoji">
          💪
        </span>
      </Button>
      <Button theme={votes < 0 ? "danger" : "success"}>
        <strong>{votes}</strong>
      </Button>
      <Button
        disabled={threeWaySwitch === -1}
        onClick={e => {
          setSwitch(threeWaySwitch - 1);
          incrementVotes(media_id, true, -1);
        }}
      >
        <span role="img" aria-label="hate emoji">
          😠
        </span>
      </Button>
    </ButtonGroup>
  );
};

export default VoteBar;
