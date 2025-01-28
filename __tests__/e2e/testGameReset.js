describe("Game Reset", () => {
  it("resets the game when the reset button is pressed", () => {
    cy.visit("/");
    cy.get('[data-testid="player-name-input"]').type("Player 1");
    cy.get('[data-testid="start-game-button"]').click();
    cy.contains("Reset").click();
    cy.get('[data-testid="player-name-input"]').should("exist");
  });
});
