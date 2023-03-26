import React, { useEffect, useState } from "react";

import { Button, Col, Image, ListGroup, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import { addCart, productDetailsAction } from "../../reducer/action";

function SinglePage() {
  const { id } = useParams();
  const { loading, product } = useSelector((state) => state.detailsReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productDetailsAction(id));
  }, [dispatch, id]);
  const addProduct = () => {
    dispatch(addCart(product));
    navigate("/cart");
  };

  const detailsProduct = (
    <Row>
      <Col md={6}>
        <Image fluid src={product.image} />
      </Col>
      <Col md={3}>
        <ListGroup variant="flush">
          <h5>
            <ListGroup.Item>{product.title}</ListGroup.Item>
          </h5>
          <ListGroup.Item>{product.price}</ListGroup.Item>
          <ListGroup.Item>{product.description}</ListGroup.Item>
        </ListGroup>
      </Col>
      <Col md={3}>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <Button variant="btn btn-outline-success" onClick={addProduct}>
              افزودن به سبد خرید
            </Button>
          </ListGroup.Item>
        </ListGroup>
      </Col>
    </Row>
  );
  return (
    <div className="p-3 " style={{ minHeight: "80vh" }}>
      <Link to="/" className="m-3 btn btn-outline-secondary">
        بازگشت به صفحه اصلی
      </Link>
      {loading ? <p className="text-secondary text-center align-top fs-3">اطلاعات درحال بارگزاری</p> : detailsProduct}
    </div>
  );
}

export default SinglePage;
