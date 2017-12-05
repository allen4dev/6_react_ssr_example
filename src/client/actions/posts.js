import api from './../api';

import * as comments from './comments';

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST = 'FETCH_POST';
export const FETCH_ERROR = 'FETCH_ERROR';

export function setPosts(posts) {
  return {
    type: FETCH_POSTS,
    payload: posts,
  };
}

export function setPost(post) {
  return {
    type: FETCH_POST,
    payload: post,
  };
}

export function setError(error) {
  return {
    type: FETCH_ERROR,
    payload: error || 'something goes wrong',
  };
}

export function fetchPosts(page = 1) {
  return async dispatch => {
    const result = await api.posts.fetchPosts(page);

    if (result.error) {
      return dispatch(setError(result.error));
    }

    dispatch(setPosts(result));
    return result;
  };
}

export function fetchSingle(id) {
  return async dispatch => {
    const result = await api.posts.fetchSingle(id);
    if (result.error) {
      return dispatch(setError(result.error));
    }
    dispatch(setPost(result));
    return result;
  };
}

export function fetchPostComments(id) {
  return async dispatch => {
    const result = await api.posts.fetchComments(id);

    if (result.error) {
      return dispatch(setError(result.error));
    }

    dispatch(comments.setComments(result));
    return result;
  };
}

// ToDo: Put this in users feature
export function fetchUserPosts(uid) {
  return async dispatch => {
    const result = await api.users.fetchPosts(uid);

    if (result.error) {
      return dispatch(setError(result.error));
    }

    dispatch(setPosts(result));
    return result;
  };
}
