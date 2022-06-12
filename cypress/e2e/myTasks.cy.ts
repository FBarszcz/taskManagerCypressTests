import {
  trelloList,
  trelloTask,
  trelloTaskDescription,
} from "cypress/selectors/board";
import "../support/commands/commands";
import "@4tw/cypress-drag-drop";
import { testData } from "cypress/fixtures/testData";

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
  it("User adds a task to the list", () => {
    cy.get(trelloTask.elementTask).should("be.visible");
  });
  it("User can change order of the tasks by drag and drop", () => {
    cy.createATask();

    cy.get(trelloTask.secoundTask).click();
    cy.addTaskComment();
    cy.get(trelloTaskDescription.descriptionFilled).contains(
      testData.taskDescription
    );
    cy.get(trelloTaskDescription.threeDot).click();
    cy.get(trelloTaskDescription.closeModal).click();

    cy.get(trelloTask.secoundTask).drag(trelloList.listOfLists);
    cy.get(trelloTask.firstTask).click();
    cy.get(trelloTaskDescription.descriptionFilled).contains(
      testData.taskDescription
    );
  });

  it("User can add information inside the task", () => {
    cy.get(trelloTask.elementTask).click();
    cy.addTaskComment();
    cy.get(trelloTaskDescription.descriptionFilled).contains(
      testData.taskDescription
    );
  });
});
