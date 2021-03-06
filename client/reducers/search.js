import types from '../constants/actionTypes';

const INITIAL_STATE = {
  results: undefined,
  query: undefined,
  isFetching: false,
  error: false,
};

export default function search(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.SEARCH_REQUEST:
      return {
        ...state,
        query: action.payload.query,
        isFetching: true,
      };
    case types.SEARCH_SUCCESS:
      return {
        ...state,
        results: action.payload.result,
        isFetching: false,
        error: false,
      };
    case types.SEARCH_FAILURE:
      return {
        ...state,
        error: true,
      };
    case types.SEARCH_RESET:
      return INITIAL_STATE;
    default:
      return state;
  }
}
