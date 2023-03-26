import React from "react";
import MainLayout from "./MainLayout";
import Main from "./Main/Main";
import { Route, Routes } from "react-router";
import SinglePage from "./SinglePage/SinglePage";

import "./App.scss";

import Cart from "./Cart/Cart";

const App = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/product/:id" element={<SinglePage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </MainLayout>
  );
};

export default App;
