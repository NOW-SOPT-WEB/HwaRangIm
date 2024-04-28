import styled from "styled-components";
import img1 from "../assets/images/acne-sneakers.png";
import img2 from "../assets/images/dries-loafer.png";
import img3 from "../assets/images/grds-derby.png";
import img4 from "../assets/images/grds-slider.png";
import img5 from "../assets/images/kiko-shoes.png";
import img6 from "../assets/images/magliano-upower.png";
import img7 from "../assets/images/roa-loafer.png";
import img8 from "../assets/images/bottega-boots.png";
import img9 from "../assets/images/toga-loafer.png";
import { useEffect, useState } from "react";
import Card from "./Card";
import { CARD_LIST } from "../constants/card";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

export default function Game({
  level,
  handleFinish,
  resetClicked,
  afterCardReset,
}) {
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [matchedScore, setMatchedScore] = useState(0);
  const [totalPairs, setTotalPairs] = useState(5);

  useEffect(() => {
    setTotalPairs(calculateTotalPairs(level));
  }, [level]);

  useEffect(() => {
    setCards(generateCards());
  }, [totalPairs]);

  useEffect(() => {
    if (matchedScore === totalPairs) {
      handleFinish();
    }
  }, [matchedScore]);

  useEffect(() => {
    setCards(generateCards());
    setMatchedScore(0);
    afterCardReset();
  }, [resetClicked]);

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
    const selectedImages = CARD_LIST.sort((a, b) => 0.5 - Math.random()).slice(
      0,
      totalPairs
    );
    console.log(selectedImages);

    //카드 두배로 늘리고 랜덤정렬
    let shuffledcards = [...selectedImages, ...selectedImages].sort(
      (a, b) => 0.5 - Math.random()
    );

    //랜덤정렬된 카드마다 객체로 만들어서 속성 추가
    shuffledcards = shuffledcards.map((image, index) => ({
      id: index,
      imgSrc: image.imgSrc,
      imgAlt: image.imgAlt,
      isOpen: false,
      isMatched: false,
    }));
    console.log(shuffledcards);
    return shuffledcards;
  };

  const handleCardClick = (id) => {
    const selected = cards.find((card) => card.id === id);
    if (!selected.isOpen && !selected.isMatched) {
      //첫번째 카드 선택
      if (selectedCard === null) {
        setSelectedCard(selected);
        const updatedCards = cards.map((card) =>
          card.id === id ? { ...card, isOpen: true } : card
        );
        setCards(updatedCards);
      }
      //두번째 카드 선택
      else {
        const updatedCards = cards.map((card) =>
          card.id === id ? { ...card, isOpen: true } : card
        );
        setCards(updatedCards);
        if (selectedCard.imgSrc === selected.imgSrc) {
          setTimeout(() => {
            const matchedCards = updatedCards.map((card) =>
              card.imgSrc === selected.imgSrc
                ? { ...card, isMatched: true }
                : card
            );
            setCards(matchedCards);
            setSelectedCard(null);
            setMatchedScore((prev) => prev + 1);
          }, 500);
        } else {
          setTimeout(() => {
            const resetCards = updatedCards.map((card) =>
              card.isOpen ? { ...card, isOpen: false } : card
            );
            setCards(resetCards);
            setSelectedCard(null);
          }, 500);
        }
      }
    }
  };

  return (
    <GameWrapper>
      <ScoreWrapper>{`${matchedScore} / ${totalPairs}`}</ScoreWrapper>
      {cards.map((card) => (
        <Card
          key={card.id}
          imgSrc={card.imgSrc}
          imgAlt={card.imgAlt}
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

const ScoreWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100dvw;
  padding: 2rem;
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.Pink};
`;