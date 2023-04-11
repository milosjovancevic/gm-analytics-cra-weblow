import { Link } from "react-router-dom";
import styled from "styled-components";

export const Navigation = () => {
  return (
    <nav>
      <Wrapper>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products/1">First Product</Link>
        </li>
        <li>
          <Link to="/products/2">Second Product</Link>
        </li>
      </Wrapper>
    </nav>
  );
};

const Wrapper = styled.ul`
  display: flex;
  gap: 50px;
  list-style: none;
`;
