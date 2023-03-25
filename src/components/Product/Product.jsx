import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router";

const Product = ({ product }) => {
  const navigate = useNavigate();
  return (
    <Card style={{ width: "100%", height: "100%" }}>
      <Card.Img variant="top" src={product.image} style={{ width: "100%", height: "20rem", objectFit: "contain", objectPosition: "top" }} />
      <Card.Body className="p-1">
        <Card.Title className="fs-6">{product.title}</Card.Title>
        <Card.Title>{product.price}$</Card.Title>
        <Button variant="primary" onClick={() => navigate(`/product/${product.id}`)}>
          Show more
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Product;
