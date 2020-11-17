import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { CartItem } from "./CartItem";
import { getStoreItemArray } from "../reducers";

export const Cart = () => {
  const storeItems = useSelector(getStoreItemArray);
  const [totalPrice, setTotalPrice] = React.useState(0);
  let total = 0;
  storeItems.forEach((item) => {
    total += (item.price * item.quantity) / 100;
    return total;
  });

  const state = useSelector((state) => state);
  console.log(state);
  return (
    <CartContainer>
      <YourCart>Your Cart</YourCart>
      <ItemCount>{storeItems.length} item</ItemCount>
      {storeItems.length > 0 && (
        <>
          {storeItems.map((item) => {
            return (
              <CartItem
                name={item.title}
                quantity={item.quantity}
                key={item.id}
                id={item.id}
                price={item.price}
              />
            );
          })}
        </>
      )}

      <TotalAndPurchase>
        <TotalText>
          Total: $<span>{total.toFixed(2)}</span>
        </TotalText>
        <PurchaseButton>Purchase</PurchaseButton>
      </TotalAndPurchase>
    </CartContainer>
  );
};

const CartContainer = styled.div`
  min-height: 100%;
  width: 300px;
  background: #401f43;
  color: #fff;
  padding: 20px 20px 200px 20px;
  position: relative;
`;

const YourCart = styled.h2`
  margin: 0;
`;

const ItemCount = styled.p`
  margin: 5px 0;
  padding-bottom: 15px;
  opacity: 0.8;
`;

const TotalAndPurchase = styled.div`
  position: fixed;
  width: 270px;
  bottom: 45px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.5);
  padding: 25px;
  border-radius: 15px;
  background: #401f43;
`;

const TotalText = styled.p`
  font-weight: 700;
  letter-spacing: 3px;
  font-size: 21px;
`;

const PurchaseButton = styled.button`
  padding: 0 25px;
  border: none;
  background: #ff406e;
  border-radius: 12px;
  font-weight: 700;
  color: #fff;
  font-size: 21px;
  height: 40px;
  cursor: pointer;
`;
