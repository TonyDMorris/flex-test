import React from "react";
import { NavItem, Col, Row, Navbar, NavbarBrand } from "shards-react";
import { Link } from "@reach/router";

const NavMenu = ({ loggedInUser, logout }) => {
  const linkStyle = { color: "white", margin: "10px", cursor: "pointer" };
  const navStyle = { marginBottom: "10px" };

  return !loggedInUser ? (
    <Row className="justify-content-center">
      <Col md={10}>
        <Navbar style={navStyle} type="dark" theme="primary">
          <NavItem>
            <NavbarBrand>
              <Link to="/">
                <h2 style={{ fontStyle: "italic", fontWeight: "600" }}>
                  SameFlex
                </h2>
              </Link>
            </NavbarBrand>
          </NavItem>

          <NavItem>
            <NavbarBrand />
          </NavItem>
          <NavItem>
            <NavbarBrand>
              <Link to="/login">
                <h5 style={linkStyle}>Login</h5>
              </Link>
              <Link to="/signup">
                <h5 style={linkStyle}>Signup</h5>
              </Link>
            </NavbarBrand>
          </NavItem>
        </Navbar>
      </Col>
    </Row>
  ) : (
    <Row className="justify-content-center">
      <Col md={9}>
        <Navbar style={navStyle} type="dark" theme="primary">
          <NavItem>
            <NavbarBrand>
              <Link to="/">
                <h2 style={{ fontStyle: "italic", fontWeight: "600" }}>
                  SameFlex
                </h2>
              </Link>
            </NavbarBrand>
          </NavItem>
          <NavItem />

          <NavItem>
            <NavbarBrand>
              <h5 onClick={logout} style={linkStyle}>
                Logout
              </h5>
            </NavbarBrand>
          </NavItem>
        </Navbar>
      </Col>
    </Row>
  );
};

export default NavMenu;
