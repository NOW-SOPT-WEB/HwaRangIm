import { CardBack, CardFront, CardWrapper } from "./Card.styled";

export default function Card({ imgSrc, imgAlt, isOpen, isMatched, onClick }) {
  return (
    <CardWrapper onClick={onClick} isOpen={isOpen} isMatched={isMatched}>
      <CardBack />
      <CardFront>
        <img src={imgSrc} alt={imgAlt} />
      </CardFront>
    </CardWrapper>
  );
}
