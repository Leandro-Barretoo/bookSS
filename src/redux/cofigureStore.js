import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import booksReducer from './books/books';

const rootReducer = combineReducers({
  booksReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(logger),
);

window.store = store;

export default store;
