import React from "react";
import leftImage from "./adult-art-artistic-917594.jpg";
import rightImage from "./art-artistic-blur-2234685.jpg";
import { Link } from "@reach/router";
import { Col } from "shards-react";
const SideBanner = ({ leftOrRight }) => {
  const banner = {
    left: leftImage,
    right: rightImage
  };
  return (
    <Col md={3}>
      <div
        style={{
          top: "0",
          position: "sticky",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          borderRadius: "10px",
          display: "flex",
          backgroundImage: `url(${banner[leftOrRight]})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "-100px",
          width: "100%",
          height: "100vh"
        }}
      >
        <Link to="/signup">
          <div
            style={{
              cursor: "pointer",
              backgroundColor: "#027bfd",
              borderRadius: "5px",
              padding: "3px",
              boxShadow: "2px 2px rgba(1, 89, 253, 0.2)",
              border: "solid 1px #0159fd"
            }}
          >
            <h4 style={{ color: "white", margin: "0" }}>Sign up</h4>
          </div>
        </Link>
      </div>
    </Col>
  );
};

export default SideBanner;
