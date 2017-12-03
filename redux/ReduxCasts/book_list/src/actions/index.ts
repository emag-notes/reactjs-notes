import { Book } from '../types/Book';
import { BOOK_SELECTED, BookSelectedAction } from './ActionTypes';

export const selectBook = (book: Book): BookSelectedAction => ({
  type: BOOK_SELECTED,
  payload: book
});
