import { FETCH_POSTS, FetchPostsAction } from '../actions';
import * as _ from 'lodash';

export default (state = {}, action: FetchPostsAction) => {

  switch (action.type) {
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id');

    default:
      return state;
  }
};
