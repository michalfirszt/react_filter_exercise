import * as types from '../types/people';

export const updateQuery = (payload) => ({
  type: types.UPDATE_QUERY,
  payload: payload
});

// ...
