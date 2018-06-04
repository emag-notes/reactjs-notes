import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import posts from './PostsReducer';

const rootReducer = combineReducers({
  posts,
  form
});

export default rootReducer;