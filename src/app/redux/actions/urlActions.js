import { ERROR, FETCH_URL, TOGGLE_HEADER } from '../types';
import dogAPI from '../../api';

export const fetchUrl = () => dispatch => {
  dogAPI('random')
    .then(({ message }) =>
      dispatch({ type: FETCH_URL, payload: message }),
    )
    .catch(error =>
      dispatch({ type: ERROR, payload: error }),
    );
};

export const toggleHeader = () => dispatch => {
  dispatch({ type: TOGGLE_HEADER })
}