import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/books';

const BookActions = (props) => {
  const dispatch = useDispatch();

  const removeBookFromStore = (e) => {
    dispatch(removeBook(e.target.id));
  };

  const { actionid } = props;
  return (
    <div>
      <button type="button">Comments</button>
      <button type="button" id={actionid} onClick={removeBookFromStore}>Remove</button>
      <button type="button">Edit</button>
    </div>
  );
};

BookActions.defaultProps = {
  actionid: '',
};

BookActions.propTypes = {
  actionid: PropTypes.string,
};

export default BookActions;
