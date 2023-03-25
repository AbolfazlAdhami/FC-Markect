import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Header.scss";
function Header() {
  return (
    <Navbar className="navbar d-flex" variant="dark">
      <Container>
        <Navbar.Brand href="/">FC Market</Navbar.Brand>
        <Nav.Item className="d-flex">
          <Nav.Link href="/cart" variant="dark">
            <i className="bx bx-cart"></i>
          </Nav.Link>
          <Nav.Link href="/account" variant="dark">
            <i className="bx bxs-user"></i>
          </Nav.Link>
        </Nav.Item>
      </Container>
    </Navbar>
  );
}

export default Header;
