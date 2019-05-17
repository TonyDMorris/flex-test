import React from "react";
import { Nav, NavItem } from "shards-react";
import { Link } from "@reach/router";

const NavMenu = ({ loggedInUser, logout }) => {
  const linkStyle = { color: "white", margin: "10px", cursor: "pointer" };
  const navStyle = { backgroundColor: "#027bfd", marginBottom: "10px" };

  return !loggedInUser ? (
    <Nav style={navStyle} fill>
      <NavItem>
        <Link to="/">
          <h5 style={linkStyle}>Home</h5>
        </Link>
      </NavItem>
      <NavItem />
      <NavItem>
        <Link to="/signup">
          {" "}
          <h5 style={linkStyle}>Signup</h5>
        </Link>
      </NavItem>
      <NavItem>
        <Link to="/login">
          {" "}
          <h5 style={linkStyle}>Login</h5>
        </Link>
      </NavItem>
    </Nav>
  ) : (
    <Nav style={navStyle} fill>
      <NavItem>
        <Link to="/">
          {" "}
          <h5 style={linkStyle}>Home</h5>
        </Link>
      </NavItem>
      <NavItem />

      <NavItem>
        <h5 onClick={logout} style={linkStyle}>
          Logout
        </h5>
      </NavItem>
    </Nav>
  );
};

export default NavMenu;
