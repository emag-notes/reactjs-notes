import * as React from 'react';
import { connect } from 'react-redux';
import { ActiveBookState } from '../types/StoreState';
import { Book } from '../types/Book';

interface Props {
  book: Book;
}

class BookDetail extends React.Component<Props, {}> {

  render() {
    if (!this.props.book) {
      return <div>Select a book to get started.</div>;
    }

    return (
      <div>
        <h3>Details for:</h3>
        <div>{this.props.book.title}</div>
        <div>Pages: {this.props.book.pages}</div>
      </div>
    );
  }

}

const mapStateToProps = (state: ActiveBookState) => ({
  book: state.activeBook
});

export default connect(mapStateToProps)(BookDetail);
