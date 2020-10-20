import { ERROR, FETCH_URL, TOGGLE_HEADER } from '../types';

const initialState = {
  expandHeader: true,
  url: null,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_URL:
      console.log({ FETCH_URL })
      return {
        ...state,
        url: action.payload,
      };
    case TOGGLE_HEADER:
      console.log({ TOGGLE_HEADER, expand: state.expandHeader })
      return {
        ...state,
        expandHeader: !state.expandHeader
      }
    case ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
