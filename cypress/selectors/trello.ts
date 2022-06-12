export enum trelloPage {
  createABoard = '[data-cy="create-board"]',
  nameBoard = '[data-cy="new-board-input"]',
  saveBoard = '[data-cy="new-board-create"]',
  existingBoard = '[data-cy="board-item"]',
  loginButton = '[data-cy="login-menu"]',
  loggedUser = '[data-cy="logged-user"]',
  logout = "span",
  loginMessage = "#loginMessage",
}

export enum trelloLoginModal {
  username = '[data-cy="login-email"]',
  password = '[data-cy="login-password"]',
  login = '[data-cy="login"]',
  signUp = ":nth-child(2) > .LoginModule_logSignSwitch > a",
  signUpEmail = '[data-cy="signup-email"]',
  signUpPassword = '[data-cy="signup-password"]',
  signUpButton = '[data-cy="signup"]',
}
