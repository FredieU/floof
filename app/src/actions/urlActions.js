import { FETCH_URL, ERROR } from '../actions/types';
import dogAPI from '../utils/api.js';

export const fetchUrl = () => dispatch => {
  console.log('ACTION - FETCH_URL');
  dogAPI('random')
  .then(response => dispatch({
    type: FETCH_URL,
    payload: response.message
  }))
  .catch(error => dispatch({
    type: ERROR,
    payload: error
  }));
}