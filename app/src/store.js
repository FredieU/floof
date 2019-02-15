import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

// Initial state of app
const initialState = {};
// Array of middleware
const middleware = [thunk];

const store = createStore(
  rootReducer, // Main reducer linking all necessary reducer functions
  initialState, // Initial state
  applyMiddleware(...middleware) // Enhancers/middleware
);

export default store;