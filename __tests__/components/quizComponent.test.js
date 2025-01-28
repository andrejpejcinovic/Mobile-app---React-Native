jest.mock("../../screens/Quiz", () => {
  const React = require("react");
  const { View, Text, Button } = require("react-native");

  return ({ screens, questions, currentQuestions, handleChoiceSelect }) => {
    const question = questions[currentQuestions[0]];
    return (
      <View>
        <Text>{question.text}</Text>
        <Button
          title={question.correct.toString()}
          onPress={() => handleChoiceSelect(0)}
        />
      </View>
    );
  };
});

import { render, fireEvent } from "@testing-library/react-native";
import Quiz from "../../screens/Quiz";

test("Quiz displays questions and handles choices", () => {
  const mockHandleChoice = jest.fn();

  const { getByText } = render(
    <Quiz
      screens={1}
      questions={[{ text: "What is 2+2?", correct: 4 }]}
      currentQuestions={[0]}
      handleChoiceSelect={mockHandleChoice}
    />
  );

  const questionText = getByText("What is 2+2?");
  expect(questionText).toBeTruthy();

  const answerButton = getByText("4");
  fireEvent.press(answerButton);

  expect(mockHandleChoice).toHaveBeenCalledWith(0);
});
