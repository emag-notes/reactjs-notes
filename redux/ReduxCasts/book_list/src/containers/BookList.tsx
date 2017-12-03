import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { Book } from '../types/Book';
import { BooksState } from '../types/StoreState';
import { bindActionCreators } from 'redux';
import { selectBook } from '../actions/index';
import { BookSelectedAction } from '../actions/ActionTypes';

interface Props {
  books: Book[];
  selectBook: (book: Book) => BookSelectedAction;
}

class BookList extends React.Component<Props, {}> {

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }

  renderList() {
    return this.props.books.map((book: Book) => {
      return (
        <li
          onClick={() => this.props.selectBook(book)}
          key={book.title}
          className="list-group-item"
        >
          {book.title}
        </li>
      );
    });
  }

}

const mapStateToProps = (state: BooksState) => ({
  books: state.books
});

const mapDispatchToProps = (dispatch: Dispatch<BookSelectedAction>) => {
  return bindActionCreators({selectBook: selectBook}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
