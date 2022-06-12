import { testData } from "cypress/fixtures/testData";
import { createEmail } from "cypress/support/commands/commands";

describe("Client creation process", () => {
  it("Anonymous client wants to create an account", () => {
    const clientEmail = createEmail(5);
    console.log(clientEmail);

    cy.visit(testData.url);
    cy.get('[data-cy="login-menu"]').click();
    cy.get(":nth-child(2) > .LoginModule_logSignSwitch > a").click();
    cy.get('[data-cy="signup-email"]').click().clear().type(clientEmail);
    cy.get('[data-cy="signup-password"]').click().clear().type("toto1234");
    cy.get('[data-cy="signup"]').click();
    cy.get('[data-cy="logged-user"]').should("be.visible");
    cy.get("#loginMessage").should("be.visible");
    cy.get('[data-cy="login-module"]').should("not.be.visible");
  });
});

describe("Login process", () => {
  it("Client user wants to login into the system", () => {
    cy.clientLogin();
    cy.get('[data-cy="logged-user"]').should("be.visible");
    cy.get("#loginMessage").should("be.visible");
    cy.get('[data-cy="login-module"]').should("not.be.visible");
  });
  it.only("Client user wants to logout", () => {
    cy.clientLogin();
    cy.get('[data-cy="login-module"]').should("not.be.visible");
    cy.get('[data-cy="logged-user"]').click();
    cy.get("span").click();
    cy.get('[data-cy="login-menu"]').should("be.visible");
  });
});
