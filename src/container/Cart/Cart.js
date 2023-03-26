import React from "react";
import { Col, Container, Image, ListGroup, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import { remooveCart } from "../../reducer/action";

const Cart = () => {
  const { productList, totalPrice } = useSelector((state) => state.cartList);
  console.log(totalPrice);
  const dispatch = useDispatch();
  const removeCart = (product) => {
    dispatch(remooveCart(product));
  };
  const cartList = (
    <ListGroup as="ol" numbered>
      {productList.map((item) => (
        <Container key={item.id}>
          <ListGroup.Item as="li" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Image src={item.image} style={{ width: "5rem", height: "5rem", objectFit: "contain" }} />
            <span>{item.title}</span>
            <span>{item.price}$</span>
            <span onClick={() => removeCart(item)}>
              {" "}
              <i className="bx bx-trash text-danger"></i>
            </span>
          </ListGroup.Item>
        </Container>
      ))}
    </ListGroup>
  );
  return (
    <div className="p-3 " style={{ minHeight: "80vh" }}>
      <Link to="/" className="m-3 btn btn-outline-secondary">
        بازگشت به صفحه اصلی
      </Link>
      <Row>
        <Col md={9}>{cartList}</Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item className="bg-success text-white fs-6 rounded text">جمع کل خرید شما : ${totalPrice} </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </div>
  );
};

export default Cart;
