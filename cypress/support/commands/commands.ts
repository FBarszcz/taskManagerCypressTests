/// <reference types="cypress" />

import { testData } from "cypress/fixtures/testData";
import { trelloBoard, trelloList, trelloTask, trelloTaskDescription } from "cypress/selectors/board";
import { trelloLoginModal, trelloPage } from "cypress/selectors/trello";

// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }
Cypress.Commands.add("createNewBoard", () => {
  cy.get(trelloPage.createABoard).click();
  cy.get(trelloPage.nameBoard).click().clear().type(testData.boardName);
  cy.get(trelloPage.saveBoard).click();
  cy.url().should("include", "/board/");
});

Cypress.Commands.add("checkIfBoardExists", () => {
  cy.visit(testData.url);
  cy.get("body").then((body) => {
    const numberOfBoards = body.find(trelloPage.existingBoard).length;
    const doesBoardExist: boolean = numberOfBoards > 0;
    console.log(doesBoardExist);

    if (doesBoardExist) {
      let i = numberOfBoards;
      while (i > 0) {
        cy.get(trelloPage.existingBoard).first().click();
        cy.get(trelloBoard.threeDot).click();
        cy.get(trelloBoard.dropdownDeleteOption).click();
        i--;
      }
      cy.createNewBoard();
    } else {
      cy.createNewBoard();
    }
  });
});
Cypress.Commands.add("createAList", () => {
  cy.get(trelloList.createNewList).click();
  cy.get(trelloList.nameList).click().clear().type(testData.listName);
  cy.get(trelloList.saveList).click();
});

Cypress.Commands.add("createATask", () => {
  cy.get(trelloTask.newTask).click();
  cy.get(trelloTask.descriptionTask).clear().type(createTaskName(5));
  cy.get(trelloTask.saveTask).click();
});

Cypress.Commands.add("signupApi", ({ email, password }) => {
  cy.request("POST", "localhost:3000/api/signup", {
    email,
    password,
  }).then(({ body }) => {
    Cypress.env("users").push(body);
  });
});

Cypress.Commands.add("clientLogin", () => {
  cy.visit(testData.url);
  cy.get(trelloPage.loginButton).click();
  cy.get(trelloLoginModal.username).click().clear().type(testData.testingEmail);
  cy.get(trelloLoginModal.password)
    .click()
    .clear()
    .type(testData.testingPass);
  cy.get(trelloLoginModal.login).click();
});
Cypress.Commands.add("addTaskComment", () => {
cy.get(trelloTaskDescription.listName).contains(testData.taskName);
    cy.get(trelloTaskDescription.description).click();
    cy.get(trelloTaskDescription.textField)
      .click()
      .clear()
      .type(testData.taskDescription);
    cy.get(trelloTaskDescription.saveDescription).click()});

const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
const charactersLength = characters.length;

export function createTaskName(nameLength) {
  let taskName = "";
  for (let i = 0; i < nameLength; i++) {
    taskName += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return taskName;
}

export function createEmail(emailLength) {
  let email = "";
  for (let i = 0; i < emailLength; i++) {
    email += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  const fullEmail = email.concat("@example.com");
  return fullEmail;
}
