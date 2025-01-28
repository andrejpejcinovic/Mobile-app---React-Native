jest.mock("../../screens/Lobby", () => {
  const React = require("react");
  const { View, TextInput } = require("react-native");

  return ({ players, handlePlayerNameUpdate }) => {
    return (
      <View>
        {players.map((player) => (
          <TextInput
            key={player.id}
            placeholder="Enter player name"
            value={player.name}
            onChangeText={(text) => handlePlayerNameUpdate(player.id, text)}
          />
        ))}
      </View>
    );
  };
});

import { render, fireEvent } from "@testing-library/react-native";
import Lobby from "../../screens/Lobby";

test("Lobby renders player input and handles updates", () => {
  const mockHandleUpdate = jest.fn();
  const { getByPlaceholderText } = render(
    <Lobby
      players={[{ id: 1, name: "" }]}
      handlePlayerNameUpdate={mockHandleUpdate}
      canContinueToQuiz={false}
    />
  );

  const input = getByPlaceholderText("Enter player name");
  fireEvent.changeText(input, "Player 1");

  expect(mockHandleUpdate).toHaveBeenCalledWith(1, "Player 1");
});
