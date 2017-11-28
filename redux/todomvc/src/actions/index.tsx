import * as constants from '../constants';

export interface AddTodoAction {
  type: constants.ADD_TODO;
  text: string;
}

export interface DeleteTodoAction {
  type: constants.DELETE_TODO;
  id: number;
}

export interface EditTodoAction {
  type: constants.EDIT_TODO;
  id: number;
  text: string;
}

export interface CompleteTodoAction {
  type: constants.COMPLETE_TODO;
  id: number;
}

export interface CompleteAllAction {
  type: constants.COMPLETE_ALL;
}

export interface ClearCompleteAction {
  type: constants.CLEAR_COMPLETED;
}

export type TodoAction =
  AddTodoAction |
  DeleteTodoAction |
  EditTodoAction |
  CompleteTodoAction |
  CompleteAllAction |
  ClearCompleteAction;

export const addTodo = (text: string): AddTodoAction => ({
  type: constants.ADD_TODO,
  text
});

export const deleteTodo = (id: number): DeleteTodoAction => ({
  type: constants.DELETE_TODO,
  id
});

export const editTodo = (id: number, text: string): EditTodoAction => ({
  type: constants.EDIT_TODO,
  id,
  text
});

export const completeTodo = (id: number): CompleteTodoAction => ({
  type: constants.COMPLETE_TODO,
  id
});

export const completeAll = (): CompleteAllAction => ({
  type: constants.COMPLETE_ALL,
});

export const clearCompleted = (): ClearCompleteAction => ({
  type: constants.CLEAR_COMPLETED,
});