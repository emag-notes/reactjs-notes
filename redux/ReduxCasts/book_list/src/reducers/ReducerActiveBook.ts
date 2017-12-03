import { BOOK_SELECTED, BookSelectedAction } from '../actions/ActionTypes';

export default (state = null, action: BookSelectedAction) => {

  switch (action.type) {
    case BOOK_SELECTED:
      return action.payload;

    default:
      return state;
  }

};
