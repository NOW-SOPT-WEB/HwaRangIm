import {
  Title,
  LevelSelector,
  LevelButton,
  ResetButton,
  HeaderWrapper,
} from "./Header.styled";
import { LEVEL } from "../../constants/level";

export default function Header({
  selectedLevel,
  onLevelBtnClick,
  onResetClick,
}) {
  return (
    <HeaderWrapper>
      <Title>신발 그림 맞추기</Title>
      <LevelSelector>
        {Object.values(LEVEL).map((level, i) => (
          <LevelButton
            key={i}
            value={level}
            selectedlevel={selectedLevel}
            onClick={onLevelBtnClick}
          >
            {level}
          </LevelButton>
        ))}
      </LevelSelector>
      <ResetButton onClick={onResetClick}>Reset</ResetButton>
    </HeaderWrapper>
  );
}
