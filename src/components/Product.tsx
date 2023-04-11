import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import ReactPixel from "react-facebook-pixel";
import { useEffect, useState } from "react";

export const Product = () => {
  const { id } = useParams();
  const { pathname } = useLocation();

  const [items, setItems] = useState({ id, value: 0 });

  const addToCart = () => {
    ReactPixel.track("AddToCart");
    setItems({ id, value: Math.min(items.value + 1, 5) });
  };

  const handlePurchase = () => {
    if (items.value === 0) {
      alert("Your cart is empty");
      return;
    }
    ReactPixel.track("Purchase", { value: items.value, currency: "RSD" });
    setItems({ id, value: 0 });
    alert("Thanks for ordering!");
  };

  useEffect(() => {
    setItems({ id, value: 0 });
  }, [pathname, id]);

  return (
    <Wrapper>
      <h2>This is a page for product with ID: {id} </h2>
      <h3>
        Items with id {items.id} in cart: {items.value}
      </h3>
      <Button onClick={() => setItems({ id, value: 0 })}>Reset</Button>
      <Button onClick={addToCart}>Add to Cart</Button>
      <Button onClick={handlePurchase}>Checkout</Button>
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
