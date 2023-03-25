import React from "react";

import "./App.scss";
import MainLayout from "./MainLayout";
import Main from "./Main/Main";
import { Route, Router, Routes } from "react-router";
import SinglePage from "./SinglePage/SinglePage";
import Product from "../components/Product/Product";
import { useSelector } from "react-redux";

const App = () => {
  
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/product/:id" element={<SinglePage />} />
      </Routes>
    </MainLayout>
  );
};

export default App;
