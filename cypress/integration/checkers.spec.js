describe("Checkers", () => {
  beforeEach(() => {
    cy.visit("https://www.gamesforthebrain.com/game/checkers/");
  });

  it("Doing two moves and loosing a peace", () => {
    cy.get('[name="space62"]').click();
    cy.get('[name="space53"]').click();
  });
});
