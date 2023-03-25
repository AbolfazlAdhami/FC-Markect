import React, { useState, useEffect } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Product from "../../components/Product/Product";

import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { productListAction } from "../../reducer/action";

const Main = () => {
  const { products, loading } = useSelector((state) => state.productReducer);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productListAction());
  }, [dispatch]);
  const productList = products.map((item) => (
    <Col key={item.id}>
      <Product product={item} />
    </Col>
  ));
  return (
    <main className="main mt-4">
      <Container>
        <Row xs={1} md={2} lg={3} className="justify-content-between align-items-center g-3">
          {loading ? <p className="text-secondary text-center align-top fs-3">اطلاعات در حال بارگزاری است</p> : productList}
        </Row>
      </Container>
    </main>
  );
};

export default Main;
