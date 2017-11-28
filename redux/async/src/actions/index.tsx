import { INVALIDATE_REDDIT, RECEIVE_POSTS, REQUEST_POSTS, SELECT_REDDIT } from '../constants/index';

export interface SelectRedditAction {
  type: SELECT_REDDIT;
  reddit: string;
}

export interface InvalidateRedditAction {
  type: INVALIDATE_REDDIT;
  reddit: string;
}

export interface RequestPostsAction {
  type: REQUEST_POSTS;
  reddit: string;
}

export interface ReceivePostsAction {
  type: RECEIVE_POSTS;
  reddit: string;
  posts: [{
    title: string
  }];
  receivedAt: number;
}

export type PostsAction = InvalidateRedditAction | ReceivePostsAction | RequestPostsAction;

export const selectReddit = (reddit: string): SelectRedditAction => ({
  type: SELECT_REDDIT,
  reddit
});

export const invalidateReddit = (reddit: string): InvalidateRedditAction => ({
  type: INVALIDATE_REDDIT,
  reddit
});

export const requestPosts = (reddit: string): RequestPostsAction => ({
  type: REQUEST_POSTS,
  reddit
});

export const receivePosts = (reddit: string, json: any): ReceivePostsAction => ({
  type: RECEIVE_POSTS,
  reddit,
  posts: json.data.children.map((child: any) => child.data),
  receivedAt: Date.now()
});

export const fetchPostsIfNeeded = (reddit: string) => (dispatch: any, getState: any) => {
  if (shouldFetchPosts(getState(), reddit)) {
    return dispatch(fetchPosts(reddit));
  }
};

const shouldFetchPosts = (state: any, reddit: string) => {
  const posts = state.postsByReddit[reddit];
  if (!posts) {
    return true;
  }
  if (posts.isFetching) {
    return true;
  }
  return posts.didInvalidate;
};

const fetchPosts = (reddit: string) => (dispatch: any) => {
  dispatch(requestPosts(reddit));
  return fetch(`https://www.reddit.com/r/${reddit}.json`)
    .then(response => response.json())
    .then(json => dispatch(receivePosts(reddit, json)));
};
