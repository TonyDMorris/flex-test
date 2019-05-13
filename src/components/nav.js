import React from "react";
import { Nav, NavItem, NavLink } from "shards-react";
import { Link } from "@reach/router";

const NavMenu = ({ loggedInUser, logout }) => {
  return !loggedInUser ? (
    <Nav fill>
      <NavItem>
        <NavLink className="" href="#">
          <Link to="/">Home</Link>
        </NavLink>
      </NavItem>
      <NavItem />
      <NavItem>
        <NavLink href="#">
          <Link to="/signup">Signup</Link>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">
          <Link to="/login">Login</Link>
        </NavLink>
      </NavItem>
    </Nav>
  ) : (
    <Nav fill>
      <NavItem>
        <NavLink className="" href="#">
          <Link to="/">Home</Link>
        </NavLink>
      </NavItem>
      <NavItem />

      <NavItem>
        <NavLink onClick={logout} href="#">
          logout
        </NavLink>
      </NavItem>
    </Nav>
  );
};

export default NavMenu;
