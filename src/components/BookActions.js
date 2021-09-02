import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const dispatch = useDispatch();

const removeBookFromStore = () => {
  
}

const BookActions = () => (
  <div>
    <span>Comments</span>
    <span>Remove</span>
    <span>Edit</span>
  </div>
);

export default BookActions;
