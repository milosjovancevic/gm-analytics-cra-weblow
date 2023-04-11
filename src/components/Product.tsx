import { useParams } from "react-router-dom";
import styled from "styled-components";

export const Product = () => {
  const { id } = useParams();

  const handleClick = () => {
    console.log("click");
  };
  return (
    <Wrapper>
      <h2>This is a page for product with ID: {id} </h2>
      <Button onClick={handleClick}>Buy product {id}</Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

const Button = styled.button`
  border: none;
  width: 100%;
  max-width: 320px;
  background-color: palevioletred;
  color: #fff;
  padding: 15px 20px;
  text-transform: uppercase;
  cursor: pointer;
`;
