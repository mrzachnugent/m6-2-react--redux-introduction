import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { removeItem, updateQuantity } from "../actions";

export const CartItem = ({ name, quantity, id, price }) => {
  const dispatch = useDispatch();
  const [quantityInput, setQuantityInput] = React.useState(quantityInput);

  const handleOnInputChange = (e) => {
    setQuantityInput(e.target.value);
    dispatch(updateQuantity({ id, quantity: quantityInput }));
  };

  return (
    <ItemBox>
      <ItemNameBox>
        <ItemName>{name}</ItemName>
        <RemoveButton onClick={() => dispatch(removeItem({ id }))}>
          ✖
        </RemoveButton>
      </ItemNameBox>
      <QuantityBox>
        <label>Quantity:</label>
        <QuantityInput
          value={quantity}
          type="number"
          min={1}
          onChange={handleOnInputChange}
        />
      </QuantityBox>
    </ItemBox>
  );
};

const ItemBox = styled.div`
  border: 1px dashed rgba(236, 236, 236, 0.26);
  margin: 20px 0;
`;

const ItemName = styled.p`
  padding: 0 15px;
  font-weight: 700;
  letter-spacing: 2px;
`;
const ItemNameBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const QuantityBox = styled.div`
  background: rgba(0, 0, 0, 0.2);
  padding: 15px;
  color: #ccc;
`;
const RemoveButton = styled.button`
  border: none;
  background: transparent;
  color: #fff;
  cursor: pointer;
  padding: 0 15px;
`;

const QuantityInput = styled.input`
  background: transparent;
  border: none;
  border-bottom: 3px solid #fff;
  margin-right: 5px;
  width: 45px;
  text-align: center;
  color: #fff;
  font-weight: 700;
  padding: 5px;
`;
