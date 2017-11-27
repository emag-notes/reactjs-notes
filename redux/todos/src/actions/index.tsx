import * as constants from '../constants';

export interface AddTodo {
  type: constants.ADD_TODO;
  id: number;
  text: string;
}

export interface ToggleTodo {
  type: constants.TOGGLE_TODO;
  id: number;
}

export type TodoAction = AddTodo | ToggleTodo;

let nextTodoId = 0;

export function addTodo(text: string): AddTodo {
  return {
    type: constants.ADD_TODO,
    id: nextTodoId++,
    text
  };
}

export function toggleTodo(id: number): ToggleTodo {
  return {
    type: constants.TOGGLE_TODO,
    id
  };
}

export interface SetVisibilityFilter {
  type: constants.SET_VISIBILITY_FILTER;
  filter: string;
}

export function setVisibilityFilter(filter: string): SetVisibilityFilter {
  return {
    type: constants.SET_VISIBILITY_FILTER,
    filter
  };
}