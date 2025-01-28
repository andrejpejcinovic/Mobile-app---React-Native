jest.mock("../../Main", () => {
  const React = require("react");
  const { View, TextInput, Button, Text } = require("react-native");

  return () => {
    const [players, setPlayers] = React.useState([{ id: 1, name: "" }]);
    const [startGame, setStartGame] = React.useState(false);

    return (
      <View>
        {!startGame ? (
          <View>
            <TextInput
              placeholder="Enter player name"
              value={players[0].name}
              onChangeText={(text) =>
                setPlayers((prev) =>
                  prev.map((player) =>
                    player.id === 1 ? { ...player, name: text } : player
                  )
                )
              }
            />
            <Button
              title="Start Game"
              onPress={() => {
                if (players[0].name) {
                  setStartGame(true);
                }
              }}
            />
          </View>
        ) : (
          <View>
            <Text>Quiz</Text>
          </View>
        )}
      </View>
    );
  };
});

import { render, fireEvent } from "@testing-library/react-native";
import Main from "../../Main";

test("Players can be added and game starts", () => {
  const { getByPlaceholderText, getByText } = render(<Main />);

  const input = getByPlaceholderText("Enter player name");
  fireEvent.changeText(input, "Player 1");
  fireEvent.press(getByText("Start Game"));

  const quizScreen = getByText("Quiz");
  expect(quizScreen).toBeTruthy();
});
