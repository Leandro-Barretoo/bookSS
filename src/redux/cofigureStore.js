import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import booksReducer, { addBook } from './books/books';

const rootReducer = combineReducers({
  booksReducer,
});

const fetchBooks = () => (dispatch) => {
  fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/ym9eiorepf3iLhrJ7Q7F/books')
    .then((response) => {
      dispatch(addBook(response.json()));
    });
};

const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
);

store.subscribe(() => { console.log(store.getState()); });
store.dispatch(fetchBooks());

export default store;

// app id: ym9eiorepf3iLhrJ7Q7F
