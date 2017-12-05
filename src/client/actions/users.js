import api from './../api';

export const FETCH_USER = 'FETCH_USER';

export function setUser(user) {
  return {
    type: FETCH_USER,
    payload: user,
  };
}

export function fetchUser(id) {
  return async dispatch => {
    const result = await api.users.fetchSingle(id);

    dispatch(setUser(result));
    return result;
  };
}
