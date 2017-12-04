import api from './../api';

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_ERROR = 'FETCH_ERROR';

export function setPosts(posts) {
  return {
    type: FETCH_POSTS,
    payload: posts,
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
