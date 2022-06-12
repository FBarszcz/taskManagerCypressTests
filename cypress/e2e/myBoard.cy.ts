import { testData } from "cypress/fixtures/testData";
import { trelloBoard } from "cypress/selectors/board";
import { trelloPage } from "cypress/selectors/trello";
import "../support/commands/commands";

describe("Trello Board tests", () => {
  beforeEach(() => {
    cy.checkIfBoardExists();
  });

  it("User is able to create a new board", () => {
    cy.url().should("include", "/board/");
    cy.get(trelloPage.createABoard).should("be.visible");
  });

  it.only("User is able to remove new board", () => {
    cy.get(trelloBoard.threeDot).click();
    cy.get(trelloBoard.dropdownDeleteOption).click();
    cy.url().should("eq", testData.url);
  });
});
