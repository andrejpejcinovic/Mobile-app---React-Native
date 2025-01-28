describe("Quiz Progression", () => {
  it("allows players to answer questions and view results", () => {
    cy.visit("/");

    cy.get('[data-testid="player-name-input"]').type("Player 1");
    cy.get('[data-testid="start-game-button"]').click();

    function clickAnswerUntilDone() {
      cy.wait(2000);
      cy.get("body").then(($body) => {

        if ($body.find('[data-testid="answer-option"]').length > 0) {
          cy.get('[data-testid="answer-option"]').first().click();
          clickAnswerUntilDone();
        } else {
          cy.log("No more answer options left.");
        }
      });
    }

    clickAnswerUntilDone();

    cy.contains("Vježba je gotova!").should("exist");
  });
});
