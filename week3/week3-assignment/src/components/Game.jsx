import styled from "styled-components";
import img1 from "../assets/acne-sneakers.png";
import img2 from "../assets/dries-loafer.png";
import img3 from "../assets/grds-derby.png";
import img4 from "../assets/grds-slider.png";
import img5 from "../assets/kiko-shoes.png";
import img6 from "../assets/magliano-upower.png";
import img7 from "../assets/roa-loafer.png";
import img8 from "../assets/bottega-boots.png";
import img9 from "../assets/toga-loafer.png";
import { useEffect, useState } from "react";
import Card from "./Card";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

export default function Game({ level }) {
  const [cards, setCards] = useState([]);
  const [totalPairs, setTotalPairs] = useState(5);

  useEffect(() => {
    setTotalPairs(calculateTotalPairs(level));
  }, [level]);

  useEffect(() => {
    setCards(generateCards());
  }, [totalPairs]);

  const calculateTotalPairs = (level) => {
    switch (level) {
      case "easy":
        return 5;
      case "normal":
        return 7;
      case "hard":
        return 9;
      default:
        return 5;
    }
  };

  const generateCards = () => {
    //이미지 9개중 랜덤으로 totalPairs만큼 가져옴
    const selectedImages = images
      .sort((a, b) => 0.5 - Math.random())
      .slice(0, totalPairs);

    //카드 두배로 늘리고 랜덤정렬
    let shuffledcards = [...selectedImages, ...selectedImages].sort(
      (a, b) => 0.5 - Math.random()
    );

    //랜덤정렬된 카드마다 객체로 만들어서 속성 추가
    shuffledcards = shuffledcards.map((image, index) => ({
      id: index,
      image,
      isOpen: false,
      isMatched: false,
    }));

    return shuffledcards;
  };

  const handleCardClick = (id) => {};

  console.log(cards);

  return (
    <GameWrapper>
      {cards.map((card) => (
        <Card
          key={card.id}
          image={card.image}
          isOpen={card.isOpen}
          isMatched={card.isMatched}
          onClick={() => handleCardClick(card.id)}
        />
      ))}
    </GameWrapper>
  );
}

const GameWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
