import React from "react";
import { ButtonGroup, Button } from "shards-react";
const VoteBar = ({ article_id, incrementVote, votes }) => {
  return (
    <ButtonGroup>
      <Button>
        <span style={{ fontSize: "1rem" }} role="img" aria-label="muscle emoji">
          💪
          {votes >= 0 && votes}
        </span>
      </Button>
      <Button>
        <span role="img" aria-label="hate emoji">
          😠
          {votes <= -1 && votes}
        </span>
      </Button>
    </ButtonGroup>
  );
};

export default VoteBar;
