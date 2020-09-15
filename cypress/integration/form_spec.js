describe("Tesing the Pizza Form", () => {
  beforeEach(() => {
    cy.visit("/");
  })

  it("Tests form and form submission", () => {
    cy.get("[data-cy=pizzaFormButton]").click();

    cy.url().should("include", "/pizza");

    cy.get("#name").type("Mychael").should("have.value", "Mychael");

    cy.get("#pizzaSize").select("medium").should('have.value', 'medium');

    cy.get("#pepperoni").check().should("be.checked");
    cy.get("#grilledChicken").check().should("be.checked");

    cy.get("#specialInstructions")
      .type("Please do the thing")
      .should("have.value", "Please do the thing");

    // cy.get("[data-cy=addToOrderButton]").click();
    cy.get("form").submit();
  })
})