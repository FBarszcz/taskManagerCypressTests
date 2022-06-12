export enum trelloBoard {
  threeDot = '[data-cy="board-options"] > .options',
  dropdownDeleteOption = '[data-cy="board-options"] > #myDropdown > .delete',
}
export enum trelloList {
  createNewList= '[data-cy="add-list"]',
  nameList = '[data-cy="add-list-input"]',
  saveList = '[data-cy="save"]',
  threeDotList = '[data-cy="list"] > .dropdown > .options',
  deleteList = '[data-cy="list"] > .dropdown > #myDropdown > .delete',
  listOfLists = '[data-cy="list"]',
  
}

export enum trelloTask {
  newTask = '[data-cy="new-task"]',
  descriptionTask = '[data-cy="task-input"]',
  saveTask = '[data-cy="add-task"]',
  elementTask ='[data-cy="task"]',
  firstTask = '[data-cy="tasks-list"] > :nth-child(1)',
  secoundTask = '[data-cy="tasks-list"] > :nth-child(2)',
}

export enum trelloTaskDescription{
  listName = '.TaskModule_list',
  description = '[data-cy="task-description"]',
  descriptionFilled = '.TaskModule_description',
  textField = '[data-cy="task-description-input"]',
  saveDescription = '[data-cy="task-description-save"]',
  threeDot = '[data-cy="task-module-close"] > .options',
  closeModal = '[data-cy="task-dropdown"] > :nth-child(1)',
  

}
