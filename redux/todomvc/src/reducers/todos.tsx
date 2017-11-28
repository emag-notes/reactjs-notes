import { Todo } from '../type/Todo';
import { TodoAction } from '../actions';
import { ADD_TODO, CLEAR_COMPLETED, COMPLETE_ALL, COMPLETE_TODO, DELETE_TODO, EDIT_TODO } from '../constants/index';

const initialState: Todo[] = [
  {
    id: 0,
    text: 'Use Redux',
    completed: false
  }
];

export default function todos(state: Todo[] = initialState, action: TodoAction) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
          text: action.text,
          completed: false
        }
      ];

    case DELETE_TODO:
      return state.filter(todo =>
        todo.id !== action.id
      );

    case EDIT_TODO:
      return state.map(todo =>
        todo.id === action.id
          ? {...todo, text: action.text}
          : todo
      );

    case COMPLETE_TODO:
      return state.map(todo =>
        todo.id === action.id
          ? {...todo, completed: !todo.completed}
          : todo
      );

    case COMPLETE_ALL:
      const areAllMarked = state.every(todo => todo.completed);
      return state.map(todo => ({
        ...todo,
        completed: !areAllMarked
      }));

    case CLEAR_COMPLETED:
      return state.filter(todo => todo.completed === false);

    default:
      return state;
  }
}