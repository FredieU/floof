import { FETCH_URL, ERROR } from '../types';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_URL:
      return {
        // Spread existing state if any
        ...state,
        url: action.payload,
      };
    case ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
