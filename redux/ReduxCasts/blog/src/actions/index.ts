import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export type FETCH_POSTS = typeof FETCH_POSTS;

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=EMAG1234';

export interface FetchPostsAction {
  type: FETCH_POSTS;
  payload: any;
}

export const fetchPosts = (): FetchPostsAction => {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request
  };
};
