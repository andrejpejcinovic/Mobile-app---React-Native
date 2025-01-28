describe("Player Setup", () => {
  it("allows players to set names and start the game", () => {
    cy.visit("/");
    cy.get('[data-testid="player-name-input"]').type("Player 1");
    cy.get('[data-testid="start-game-button"]').click();

    cy.contains("Quiz").should("exist");
  });
});
