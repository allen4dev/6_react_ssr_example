export const FETCH_COMMENTS = 'FETCH_COMMENTS';

export function setComments(comments) {
  return {
    type: FETCH_COMMENTS,
    payload: comments,
  };
}
