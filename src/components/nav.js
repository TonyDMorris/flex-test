import React from "react";
import { Nav, NavItem, NavLink } from "shards-react";
import { Link } from "@reach/router";

const NavMenu = () => {
  return (
    <Nav>
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
        <NavLink disabled href="#">
          Disabled Link
        </NavLink>
      </NavItem>
    </Nav>
  );
};

export default NavMenu;
