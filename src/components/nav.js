import React from "react";
import { Nav, NavItem, NavLink } from "shards-react";
import { Router, Link } from "@reach/router";

const NavMenu = () => {
  return (
    <Nav>
      <NavItem>
        <NavLink href="#">
          <Link to="/">Home </Link>
        </NavLink>
      </NavItem>
      <NavItem />
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
};

export default NavMenu;
