import { FETCH_POSTS } from './../actions/posts';

function postsReducer(state = [], action = {}) {
  switch (action.type) {
    case FETCH_POSTS:
      return [...state, ...action.payload];

    default:
      return state;
  }
}

export default postsReducer;
