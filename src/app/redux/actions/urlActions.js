import { FETCH_URL, ERROR } from '../types';
import dogAPI from '../../api';

export const fetchUrl = () => dispatch => {
  dogAPI('random')
    .then(response =>
      dispatch({
        type: FETCH_URL,
        payload: response.message,
      }),
    )
    .catch(error =>
      dispatch({
        type: ERROR,
        payload: error,
      }),
    );
};
