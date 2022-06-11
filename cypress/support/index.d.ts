declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to select DOM element by data-cy attribute.
     * @example cy.dataCy('greeting')
     * @param
     * @keyof
     *
     */
    createNewBoard(value: string): Chainable<Element>;
  }
}
