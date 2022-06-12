import { testData } from "cypress/fixtures/testData";
import { trelloBoard } from "cypress/selectors/board";
import { trelloLoginModal, trelloPage } from "cypress/selectors/trello";
import { createEmail } from "cypress/support/commands/commands";

describe("Client creation process", () => {
  it("Anonymous client wants to create an account", () => {
    const clientEmail = createEmail(5);
    console.log(clientEmail);

    cy.visit(testData.url);
    cy.get(trelloPage.loginButton).click();
    cy.get(trelloLoginModal.signUp).click();
    cy.get(trelloLoginModal.signUpEmail).click().clear().type(clientEmail);
    cy.get(trelloLoginModal.signUpPassword)
      .click()
      .clear()
      .type(testData.testingPass);
    cy.get(trelloLoginModal.signUpButton).click();
    cy.get(trelloPage.loggedUser).should("be.visible");
    cy.get(trelloPage.loginMessage).should("be.visible");
    cy.get(trelloPage.loginButton).should("not.be.visible");
  });
});

describe("Login process", () => {
  it("Client user wants to login into the system", () => {
    cy.clientLogin();
    cy.get(trelloPage.loggedUser).should("be.visible");
    cy.get(trelloPage.loginMessage).should("be.visible");
    cy.get(trelloPage.loginButton).should("not.be.visible");
  });
  it("Client user wants to logout", () => {
    cy.clientLogin();
    cy.get(trelloPage.loggedUser).should("not.be.visible");
    cy.wait(1000);
    cy.get(trelloPage.loggedUser).click();
    cy.get(trelloPage.logout).click();
    cy.get(trelloPage.loginButton).should("be.visible");
  });
});
