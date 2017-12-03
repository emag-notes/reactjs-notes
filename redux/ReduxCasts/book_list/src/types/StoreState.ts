import { Book } from './Book';

export interface BooksState {
  books: Book[];
}

export interface ActiveBookState {
  activeBook: Book;
}
