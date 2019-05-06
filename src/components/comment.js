import React from "react";

const Comment = props => {
  return (
    <div
      style={{ backgroundColor: "#f5f6f6" }}
      className="p-2 mt-2 border rounded"
    >
      <h5
        style={{
          colour: "grey",
          fontSize: "15px",
          marginTop: "10px",
          margin: "auto"
        }}
      >
        {props.author}
        <br />
        <span style={{ color: "grey", fontSize: "10px", margin: "auto" }}>
          {props.created_at}
        </span>
      </h5>

      <div
        style={{ backgroundColor: "#ffffff" }}
        className="p-2 mt-0 border rounded"
      >
        <p>{props.body}</p>
      </div>
    </div>
  );
};

export default Comment;
