import { useMemo, useEffect, useState, useCallback } from "react";
import { CARD_LIST } from "../../constants/card";
import Card from "../Card/Card";
import { GameWrapper, ScoreWrapper } from "./Game.styled";
import { calculateTotalPairs } from "../../util/calculateTotalPairs";

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
    setMatchedScore(0);
    setCards(generateCards);
  }, [level, totalPairs]);

  useEffect(() => {
    if (matchedScore === totalPairs) {
      handleFinish();
    }
  }, [matchedScore]);

  useEffect(() => {
    setCards(generateCards);
    setMatchedScore(0);
    afterCardReset();
  }, [resetClicked]);

  const generateCards = useMemo(() => {
    const selectedImages = CARD_LIST.sort((a, b) => 0.5 - Math.random()).slice(
      0,
      totalPairs
    );

    let shuffledcards = [...selectedImages, ...selectedImages].sort(
      (a, b) => 0.5 - Math.random()
    );

    shuffledcards = shuffledcards.map((image, index) => ({
      id: index,
      imgSrc: image.imgSrc,
      imgAlt: image.imgAlt,
      isOpen: false,
      isMatched: false,
    }));
    return shuffledcards;
  }, [totalPairs, resetClicked]);

  // const handleCardClick = (id) => {
  //   const selected = cards.find((card) => card.id === id);
  //   if (!selected.isOpen && !selected.isMatched) {
  //     //첫번째 카드 선택
  //     if (selectedCard === null) {
  //       setSelectedCard(selected);
  //       const updatedCards = cards.map((card) =>
  //         card.id === id ? { ...card, isOpen: true } : card
  //       );
  //       setCards(updatedCards);
  //     }
  //     //두번째 카드 선택
  //     else {
  //       const updatedCards = cards.map((card) =>
  //         card.id === id ? { ...card, isOpen: true } : card
  //       );
  //       setCards(updatedCards);
  //       if (selectedCard.imgSrc === selected.imgSrc) {
  //         setTimeout(() => {
  //           const matchedCards = updatedCards.map((card) =>
  //             card.imgSrc === selected.imgSrc
  //               ? { ...card, isMatched: true }
  //               : card
  //           );
  //           setCards(matchedCards);
  //           setSelectedCard(null);
  //           setMatchedScore((prev) => prev + 1);
  //         }, 500);
  //       } else {
  //         setTimeout(() => {
  //           const resetCards = updatedCards.map((card) =>
  //             card.isOpen ? { ...card, isOpen: false } : card
  //           );
  //           setCards(resetCards);
  //           setSelectedCard(null);
  //         }, 500);
  //       }
  //     }
  //   }
  // };
  const handleCardClick = useCallback(
    (id) => {
      const selected = cards.find((card) => card.id === id);
      console.log("실행됨");

      if (selected.isOpen || selected.isMatched) {
        return;
      }

      const flipCard = (cardsToUpdate) => {
        const updatedCards = cardsToUpdate.map((card) =>
          card.id === id ? { ...card, isOpen: true } : card
        );
        setCards(updatedCards);
        return updatedCards;
      };

      // 첫번째 카드 선택
      if (selectedCard === null) {
        setSelectedCard(selected);
        flipCard(cards);
      }
      // 두번째 카드 선택
      else {
        flipCard(cards);

        setTimeout(() => {
          const isMatch = selectedCard.imgSrc === selected.imgSrc;

          const updatedCards = cards.map((card) =>
            card.imgSrc === selected.imgSrc
              ? { ...card, isMatched: isMatch }
              : { ...card, isOpen: false }
          );

          setCards(updatedCards);
          setSelectedCard(null);
          setMatchedScore((prev) => prev + (isMatch ? 1 : 0));
        }, 500);
      }
    },
    [cards, selectedCard, matchedScore]
  );

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
