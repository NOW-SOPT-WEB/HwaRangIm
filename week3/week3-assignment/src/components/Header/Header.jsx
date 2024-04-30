import {
  Title,
  LevelSelector,
  LevelButton,
  ResetButton,
  HeaderWrapper,
} from "./Header.styled";

export default function Header({
  levels,
  selectedLevel,
  onLevelBtnClick,
  onResetClick,
}) {
  return (
    <HeaderWrapper>
      <Title>신발 그림 맞추기</Title>
      <LevelSelector>
        {levels.map((level, i) => (
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
