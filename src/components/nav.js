import React from "react";
import { Col, Row, Navbar, NavbarBrand } from "shards-react";
import { Link } from "@reach/router";

const NavMenu = ({ loggedInUser, logout }) => {
  const linkStyle = { color: "white", margin: "10px", cursor: "pointer" };
  const navStyle = { marginBottom: "10px" };

  return !loggedInUser ? (
    <Row className="justify-content-center">
      <Col>
        <Navbar style={navStyle} type="dark" theme="primary">
          <Link className="link navbar-brand" to="/">
            <h2
              style={{
                fontStyle: "italic",
                fontWeight: "900",
                color: "#ffffff"
              }}
            >
              SameFlex
            </h2>
          </Link>
          <span>
            <Link to="/login">
              <h3 style={linkStyle}>Login</h3>
            </Link>

            <Link to="/signup">
              <h3 style={linkStyle}>Signup</h3>
            </Link>
          </span>
        </Navbar>
      </Col>
    </Row>
  ) : (
    <Row className="justify-content-center align-items-center">
      <Col>
        <Navbar style={navStyle} type="dark" theme="primary">
          <Link className="link navbar-brand" to="/">
            <h3 style={{ fontStyle: "italic", fontWeight: "600" }}>SameFlex</h3>
          </Link>

          <h3 onClick={logout} style={linkStyle}>
            Logout
          </h3>
        </Navbar>
      </Col>
    </Row>
  );
};

export default NavMenu;
