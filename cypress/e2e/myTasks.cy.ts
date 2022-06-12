import { testData } from "cypress/fixtures/testData";
import { trelloBoard, trelloList, trelloTask } from "cypress/selectors/board";
import { trelloPage } from "cypress/selectors/trello";
import "../support/commands/commands";

describe("Trello Board tests", () => {
  beforeEach(() => {
    cy.checkIfBoardExists();
    cy.createAList();
  });

  it("User creates a list", () => {
    cy.get(trelloList.listOfLists).should("be.visible");
    cy.get(trelloList.createNewList).should("be.visible");
  });
  it("User delete a list", () => {
    cy.get(trelloList.threeDotList).click();
    cy.get(trelloList.deleteList).click();
    cy.get(trelloList.createNewList).should("be.visible");
  });
});

describe("User is able to work with tasks", () => {
  beforeEach(() => {
    cy.checkIfBoardExists();
    cy.createAList();
    cy.createATask();
  });
  it("User ads task to list", () => {
    cy.get(trelloTask.elementTask).should("be.visible");
  });
  it.only("User can change order of the tasks", () => {
    cy.createATask();
    const dataTransfer = new DataTransfer();
    cy.get('[data-cy="tasks-list"]').last().trigger("dragstart", {
      dataTransfer,
    });
    cy.get('[data-cy="list"]').trigger("drop", {
      dataTransfer,
    });
  });
  it("User can check information inside the task", () => {});
});
