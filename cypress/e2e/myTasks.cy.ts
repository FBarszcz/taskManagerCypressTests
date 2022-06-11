import { testData } from "cypress/fixtures/testData";
import { trelloBoard, trelloTask } from "cypress/selectors/board";
import { trelloPage } from "cypress/selectors/trello";
import "../support/commands/commands";

describe("Trello Board tests", () => {
  beforeEach(() => {
    cy.checkIfBoardExists();
    cy.createATask();
  });

  it("User creates a task", () => {
    cy.get(trelloTask.listOfTasks).should("be.visible");
    cy.get(trelloTask.createNewTask).should('be.visible');
  });
  it("User delete a task", () => {
    cy.get(trelloTask.taskThreeDot).click();
    cy.get(trelloTask.deleteTask).click();
    cy.get(trelloTask.createNewTask).should('be.visible');
  });
});
