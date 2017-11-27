import { TodoType } from '../types/TodoType';
import { TodoAction } from '../actions';
import { ADD_TODO, TOGGLE_TODO } from '../constants';

const todos = (state: TodoType[] = [], action: TodoAction) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    case TOGGLE_TODO:
      return state.map(todo =>
        (todo.id === action.id)
        ? {...todo, completed: !todo.completed}
        : todo
      );
    default:
      return state;
  }
};

export default todos;