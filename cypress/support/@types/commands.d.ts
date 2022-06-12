declare namespace Cypress {
  interface Chainable {
    /**
     * create new board via API
     */
    addBoardApi(value: string): Chainable<Element>;

    createNewBoard(): Chainable<Element>;

    /**
     * Creates a new board in e2e
     */
    checkIfBoardExists(): Chainable<Element>;
    /**
     * Checks if there is unnecassery board
     */

    createAList(): Chainable;
    /**
     * Creates a new list on the board
     * @param value
     */

    createATask(): Chainable;
    /**
     * Creates a new task in the list
     * @param value
     */
     clientLogin(): Chainable;
     /**
      * Client login process
      * @param value
      */

    signupApi(options: { email: string; password: string }): Chainable<Element>;
      /**
     * Signup via API
     */
    addTaskComment() :Chainable;
    /**
     * Add comment to already created task in the list
     */
  }
}
