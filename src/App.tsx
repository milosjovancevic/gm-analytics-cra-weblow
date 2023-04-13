import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Home } from "./components/Home";
import { Navigation } from "./components/Navigation";
import { Product } from "./components/Product";
import styled from "styled-components";
import { FacebookPixel } from "./analytics/FacebookPixel";
import { DocumentTitle } from "./components/DocumentTitle";

function AppRouter() {
  // FacebookPixel();
  const { pathname } = useLocation();

  return (
    <Wrapper>
      <DocumentTitle title={pathname === "/" ? "Home" : pathname} />
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
