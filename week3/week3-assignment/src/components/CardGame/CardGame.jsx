import { useState } from "react";
import { CardGameWrapper, ModalBackground } from "./CardGame.styled";
import Game from "../Game/Game";
import Modal from "../Modal/Modal";
import Header from "../Header/Header";

export default function CardGame() {
  const levels = ["easy", "normal", "hard"];
  const [selectedLevel, setSelectedLevel] = useState("easy");
  const [isFinished, setIsFinished] = useState(false);
  const [resetClicked, setResetClicked] = useState(false);

  const handleLevelBtnClick = (e) => {
    setSelectedLevel(e.target.value);
  };
  const handleFinish = () => {
    setIsFinished(true);
  };
  const handleResetClick = () => {
    setResetClicked(true);
    setIsFinished(false);
  };
  const afterCardReset = () => {
    setResetClicked(false);
  };
  return (
    <CardGameWrapper>
      {isFinished && (
        <ModalBackground>
          <Modal onClick={handleResetClick} />
        </ModalBackground>
      )}
      <Header
        levels={levels}
        selectedLevel={selectedLevel}
        onLevelBtnClick={handleLevelBtnClick}
        onResetClick={handleResetClick}
      />
      <Game
        level={selectedLevel}
        handleFinish={handleFinish}
        resetClicked={resetClicked}
        afterCardReset={afterCardReset}
      />
    </CardGameWrapper>
  );
}
