import { LEVEL } from "../constants/level";

export const calculateTotalPairs = (level) => {
  switch (level) {
    case LEVEL.EASY:
      return 5;
    case LEVEL.NORMAL:
      return 7;
    case LEVEL.HARD:
      return 9;
    default:
      return 5;
  }
};
