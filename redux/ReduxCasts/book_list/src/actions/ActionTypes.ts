import { Book } from '../types/Book';

export const BOOK_SELECTED = 'BOOK_SELECTED';
export type BOOK_SELECTED = typeof BOOK_SELECTED;

export interface BookSelectedAction {
  type: BOOK_SELECTED;
  payload: Book;
}
