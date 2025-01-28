jest.mock("../../Main", () => {
  return {
    __esModule: true,
    generateNewQuestions: (previousState, screenIndex, questions) => {
      const newQuestions = [...previousState];
      let newIndex;
      do {
        newIndex = Math.floor(Math.random() * questions.length);
      } while (newIndex === previousState[screenIndex]);
      newQuestions[screenIndex] = newIndex;
      return newQuestions;
    },
  };
});

import { generateNewQuestions } from "../../Main";

test("generateNewQuestions generates unique questions", () => {
  const previousState = [1, 2, 3];
  const questions = [0, 1, 2, 3, 4];
  const screenIndex = 1;

  const newQuestions = generateNewQuestions(
    previousState,
    screenIndex,
    questions
  );
  expect(newQuestions[screenIndex]).not.toEqual(previousState[screenIndex]);
});
