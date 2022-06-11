function createNewBoard() {
  cy.get('[data-cy="create-board"]').click();
  cy.get('[data-cy="new-board-input"]').click().clear().type("testing board");
  cy.get('[data-cy="new-board-create"]').click();
  cy.url().should("include", "/board/");
}

function checkIfBoardExists() {
  cy.visit("http://localhost:3000/");
  cy.get("body").then((body) => {
    const numberOfBoards = body.find('[data-cy="board-item"]').length;
    const doesBoardExist: boolean = numberOfBoards > 0;
    console.log(doesBoardExist);

    if (doesBoardExist) {
      let i = numberOfBoards;
      while (i > 0) {
        cy.get('[data-cy="board-item"]').first().click();
        cy.get('[data-cy="board-options"] > .options').click();
        cy.get('[data-cy="board-options"] > #myDropdown > .delete').click();
        i--;
      }
      createNewBoard();
    } else {
      createNewBoard();
    }
  });
}

describe("Trello Board tests", () => {
  it("User is able to create a new board", () => {
    checkIfBoardExists();

    cy.url().should("include", "/board/");
    cy.get('[data-cy="add-list"]').should("be.visible");
  });
  it("User is able to remove new board", () => {
    checkIfBoardExists();

    cy.get('[data-cy="board-options"] > .options').click();
    cy.get('[data-cy="board-options"] > #myDropdown > .delete').click();
  });
});
