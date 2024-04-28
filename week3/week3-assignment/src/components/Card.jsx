import { useState } from "react";
import styled from "styled-components";

export default function Card({ image, isOpen, isMatched, onClick }) {
  return (
    <CardWrapper onClick={onClick} isOpen={isOpen} isMatched={isMatched}>
      <CardBack />
      <CardFront>
        <img src={image} alt="card" />
      </CardFront>
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  position: relative;
  width: 20rem;
  height: 25rem;
  margin: 1rem;
  cursor: pointer;
  transform-style: preserve-3d;
  transition: transform 0.5s ease;
  transform: ${({ isOpen, isMatched }) =>
    isOpen || isMatched ? "rotateY(180deg)" : "rotateY(0deg)"};
`;

const CardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-color: gray;
`;

const CardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  img {
    width: 100%;
    height: 100%;
  }
`;
