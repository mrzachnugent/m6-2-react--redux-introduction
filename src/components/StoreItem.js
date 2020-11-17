import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { addItem } from "../actions";

import Button from "./Button";

const StoreItem = ({ id, title, src, price }) => {
  const dispatch = useDispatch();

  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price / 100);

  return (
    <Wrapper>
      <ImageWrapper>
        <Image src={src} alt={`${title} sticker`} />
      </ImageWrapper>
      <Title>{title}</Title>
      <Button onClick={() => dispatch(addItem({ id, title, price }))}>
        Add to Cart — {formattedPrice}
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  padding: 16px;
  background: #fff;
  box-shadow: 3px 2.8px 2.2px rgba(0, 0, 0, 0.07),
    3px 6.7px 5.3px rgba(0, 0, 0, 0.05), 3px 12.5px 10px rgba(0, 0, 0, 0.042),
    3px 22.3px 17.9px rgba(0, 0, 0, 0.035),
    3px 41.8px 33.4px rgba(0, 0, 0, 0.028), 3px 100px 80px rgba(0, 0, 0, 0.02);
  border-radius: 16px;
  text-align: center;
`;

const ImageWrapper = styled.div`
  overflow: hidden;
  border-radius: 12px;
  border: 3px solid rgba(0, 0, 0, 0.1);
`;

const Image = styled.img`
  display: block;
  max-width: 100%;
`;

const Title = styled.h2`
  margin: 0;
  margin-bottom: 16px;
  margin-top: 8px;
  font-size: 22px;
  font-weight: 600;
`;

export default StoreItem;
