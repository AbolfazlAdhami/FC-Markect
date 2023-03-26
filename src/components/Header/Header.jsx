import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Header.scss";
import { Link, NavLink } from "react-router-dom";
function Header() {
  return (
    <Navbar className="navbar d-flex" variant="dark">
      <Container>
        <NavLink to="/">
          <Navbar.Brand>FC Market</Navbar.Brand>
        </NavLink>
        <Nav.Item className="d-flex">
          <NavLink to="/cart" variant="dark">
            <i className="bx bx-cart"></i>
          </NavLink>
          <NavLink to="/account" variant="dark">
            <i className="bx bxs-user"></i>
          </NavLink>
        </Nav.Item>
      </Container>
    </Navbar>
  );
}

export default Header;
