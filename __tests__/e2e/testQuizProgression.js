describe("Quiz Progression", () => {
  it("allows players to answer questions and view results", () => {
    cy.visit("/");
    cy.get('[data-testid="player-name-input"]').type("Player 1");
    cy.get('[data-testid="start-game-button"]').click();

    cy.contains("What is 2+2?").should("exist");
    cy.get('[data-testid="answer-option"]').first().click();

    cy.contains("Next Question").click();
    cy.contains("Game Over").should("exist");
  });
});
