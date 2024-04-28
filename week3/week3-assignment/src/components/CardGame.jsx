import { useState } from "react";
import styled from "styled-components";
import Game from "./Game";
import Modal from "./Modal";

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

const CardGameWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.MainBack};
  width: 100dvw;
  min-height: 100dvh;
`;

const Header = styled.header`
  background-color: ${({ theme }) => theme.colors.SkyBlue};
  width: 100dvw;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const Title = styled.h1`
  font-size: 4rem;
  color: ${({ theme }) => theme.colors.White};
`;

const LevelSelector = styled.div`
  display: flex;
  gap: 1rem;
`;

const LevelButton = styled.button`
  background-color: ${({ value, selectedlevel, theme }) =>
    value === selectedlevel ? theme.colors.LightPurple : theme.colors.Violet};
  color: ${({ theme }) => theme.colors.White};
  width: 10rem;
  height: 4rem;
  border-radius: 5px;
`;

const ResetButton = styled.button`
  background-color: ${({ theme }) => theme.colors.Pink};
  color: white;
  position: fixed;
  top: 1rem;
  right: 1rem;
  width: 8rem;
  height: 5rem;
  border-radius: 5px;
  font-size: 2rem;
  font-weight: bold;
`;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 5;
`;
