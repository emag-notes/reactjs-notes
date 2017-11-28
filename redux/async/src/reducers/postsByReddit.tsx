import { INVALIDATE_REDDIT, RECEIVE_POSTS, REQUEST_POSTS } from '../constants';
import { PostsAction } from '../actions/index';

const postsByReddit = (state = {}, action: PostsAction) => {
  switch (action.type) {
    case INVALIDATE_REDDIT:
    case RECEIVE_POSTS:
    case REQUEST_POSTS:
      return {
        ...state,
        [action.reddit]: posts(state[action.reddit], action)
      };
    default:
      return state;
  }
};

export default postsByReddit;

const posts = (state = {
  isFetching: false,
  didInvalidate: false,
  items: []
}, action: PostsAction) => {
  switch (action.type) {
    case INVALIDATE_REDDIT:
      return {
        ...state,
        didInvalidate: true
      };
    case REQUEST_POSTS:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false
      };
    case RECEIVE_POSTS:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        items: action.posts,
        lastUpdated: action.receivedAt
      };
    default:
      return state;
  }
};
