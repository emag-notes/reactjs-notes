import { SELECT_REDDIT } from '../constants';
import { SelectRedditAction } from '../actions';

const selectedReddit = (state: string = 'reactjs', action: SelectRedditAction) => {
  switch (action.type) {
    case SELECT_REDDIT:
      return action.reddit;
    default:
      return state;
  }
};

export default selectedReddit;