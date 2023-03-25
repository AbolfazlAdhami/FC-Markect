import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Footer.scss";
function Footer() {
  return (
    <footer className="py-4 mt-2 bg-primery bg-secondary">
      <Container>
        <Row>
          <Col className="text-center text-light">Footer</Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
