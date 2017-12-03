import { combineReducers } from 'redux';
import BooksReducer from './ReducerBooks';
import ActiveBook from './ReducerActiveBook';

const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;