describe("Second Test", () => {
  it("Visit the app", () => {
    cy.visit("localhost:3000/login")
      .get("#username")
      .type("demoperson")
      .should("have.value", "demoperson")
      .get("#password")
      .type("password123")
      .get(".btn")
      .eq(1)
      .click();
  });
});
