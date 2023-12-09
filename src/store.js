// src/store.js
import { createStore, combineReducers } from 'redux';
import birdReducer from './redux/reducer';

// Combine reducers if you have multiple reducers
const rootReducer = combineReducers({
  birds: birdReducer,
  // Add other reducers as needed
});

// Create the Redux store
const store = createStore(rootReducer);

export default store;
