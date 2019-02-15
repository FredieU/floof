import { combineReducers } from 'redux';
import urlReducer from './urlReducer';

export default combineReducers({
  imageUrl: urlReducer
});