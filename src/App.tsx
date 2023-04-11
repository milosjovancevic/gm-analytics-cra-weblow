import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Navigation } from "./components/Navigation";
import { Product } from "./components/Product";
import styled from "styled-components";
import { FacebookPixel } from "./analytics/FacebookPixel";

function AppRouter() {
  FacebookPixel();
  return (
    <Wrapper>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<Product />} />
      </Routes>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default AppRouter;
