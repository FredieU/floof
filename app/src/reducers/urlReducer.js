import { FETCH_URL, ERROR } from '../actions/types';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_URL:
      console.log('REDUCER - urlReducer - FETCH_URL');
      return {
        // Spread existing state if any
        ...state,
        url: action.payload
      }
    case ERROR:
      console.log('REDUCER - urlReducer - ERROR');
      return {
        ...state,
        error: action.payload
      }
    default:
      return state;
  }
}