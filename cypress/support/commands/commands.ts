/// <reference types="cypress" />

import { testData } from "cypress/fixtures/testData";
import { trelloBoard, trelloTask } from "cypress/selectors/board";
import { trelloPage } from "cypress/selectors/trello";

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
Cypress.Commands.add("createATask", () => {
  cy.get(trelloTask.createNewTask).click();
  cy.get(trelloTask.taskName).click().clear().type(testData.taskName);
  cy.get(trelloTask.saveTask).click();
})