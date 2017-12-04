import api from './../api';

export const FETCH_POSTS = 'FETCH_POSTS';

export function setPosts(posts) {
  return {
    type: FETCH_POSTS,
    payload: posts,
  };
}

export function fetchPosts(page = 1) {
  return async dispatch => {
    const posts = await api.posts.fetchPosts(page);

    dispatch(setPosts(posts));

    return posts;
  };
}
