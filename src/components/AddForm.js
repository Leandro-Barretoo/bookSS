import React from 'react';
import { useDispatch } from 'react-redux';
import { addBook, removeBook } from '../redux/books/books';

const dispatch = useDispatch();

const submitBookToStore = () => {
  const newBook = {
    id,
    title,
    author: 'unknown',
  }
}

const AddForm = () => (
  <div>
    <span>ADD NEW BOOK</span>
    <form>
      <input type="text" />
      <input />
      <button type="submit">ADD BOOK</button>
    </form>
  </div>
);

export default AddForm;
