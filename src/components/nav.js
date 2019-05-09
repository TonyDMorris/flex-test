import React from "react";
import { Nav, NavItem, NavLink } from "shards-react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default function NavMenu() {
  return (
    <Nav>
      <NavItem>
        <NavLink href="#">
          <Link to="/">Home </Link>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">
          <Link to="/user/">user</Link>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">Another Link</NavLink>
      </NavItem>
      <NavItem>
        <NavLink disabled href="#">
          Disabled Link
        </NavLink>
      </NavItem>
    </Nav>
  );
}
