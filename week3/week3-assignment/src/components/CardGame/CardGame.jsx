import { useState } from "react";
import {
  CardGameWrapper,
  Header,
  LevelButton,
  LevelSelector,
  ModalBackground,
  ResetButton,
  Title,
} from "./CardGame.styled";
import Game from "../Game/Game";
import Modal from "../Modal/Modal";

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
      <Header>
        <Title>신발 그림 맞추기</Title>
        <LevelSelector>
          {levels.map((level, i) => (
            <LevelButton
              key={i}
              value={level}
              selectedlevel={selectedLevel}
              onClick={handleLevelBtnClick}
            >
              {level}
            </LevelButton>
          ))}
        </LevelSelector>
        <ResetButton onClick={handleResetClick}>Reset</ResetButton>
      </Header>
      <Game
        level={selectedLevel}
        handleFinish={handleFinish}
        resetClicked={resetClicked}
        afterCardReset={afterCardReset}
      />
    </CardGameWrapper>
  );
}
