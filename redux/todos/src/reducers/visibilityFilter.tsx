import { SetVisibilityFilter } from '../actions';
import { SET_VISIBILITY_FILTER } from '../constants/index';

const visibilityFilter = (state = 'SHOW_ALL', action: SetVisibilityFilter) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};

export default visibilityFilter;