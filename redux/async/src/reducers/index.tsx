import { combineReducers } from 'redux';
import selectedReddit from './selectedReddit';
import postsByReddit from './postsByReddit';

export default combineReducers({
  selectedReddit,
  postsByReddit
});
