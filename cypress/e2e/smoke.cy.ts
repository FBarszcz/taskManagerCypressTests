import { testData } from "cypress/fixtures/testData";
import { trelloPage } from "cypress/selectors/trello";

describe("Smoke test", () => {
  beforeEach(() => {
    cy.checkIfBoardExists();
  });

  it("passes", () => {
    cy.visit(testData.url);
    cy.get(trelloPage.title).contains("My Board");
    cy.get(trelloPage.createABoard).should('be.visible');
    cy.get(trelloPage.loginButton).should('be.visible');
  });
});
