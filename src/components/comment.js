import React from "react";

const Comment = props => {
  return (
    <div className="p-2 mt-3 border rounded">
      <h5 style={{ colour: "grey", fontSize: "15px", marginTop: "10px" }}>
        {props.author}
      </h5>
      <h4 style={{ colour: "grey", fontSize: "10px", marginTop: "10px" }}>
        {props.created_at}
      </h4>
      <div className="p-2 mt-0 border rounded">
        <p>{props.body}</p>
      </div>
    </div>
  );
};

export default Comment;
