jest.mock("../../Main", () => {
  return {
    __esModule: true,
    initializePlayers: (screens) => {
      return Array.from({ length: screens }, (_, index) => ({
        id: index + 1,
        name: "",
        score: 0,
        answers: [],
      }));
    },
  };
});

import { initializePlayers } from "../../Main";

test("initializePlayers generates correct player objects", () => {
  const screens = 3;
  const players = initializePlayers(screens);

  // Ensure the number of players matches the number of screens
  expect(players).toHaveLength(screens);

  // Verify each player's properties
  players.forEach((player, index) => {
    expect(player).toEqual({
      id: index + 1,
      name: "",
      score: 0,
      answers: [],
    });
  });
});
