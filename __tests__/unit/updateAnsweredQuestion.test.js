jest.mock("../../Main", () => {
  const updateAnsweredQuestions = (previousState, screenIndex, questionsPerQuiz) => {
      const newAnsweredCount = [...previousState];
      newAnsweredCount[screenIndex] += 1;
      return newAnsweredCount;
  };

  return {
      updateAnsweredQuestions,
  };
});

import { updateAnsweredQuestions } from "../../Main";

test("updateAnsweredQuestions updates answered count and detects completed screens", () => {
  const previousState = [1, 0, 0];
  const result = updateAnsweredQuestions(previousState, 0, 2);

  expect(result).toEqual([2, 0, 0]);
});
