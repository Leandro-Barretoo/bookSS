import React from 'react';
import PropTypes from 'prop-types';
import BookActions from './BookActions';

const BookInfo = (props) => {
  const {
    id,
    categorie,
    title,
    author,
  } = props;

  return (
    <div>
      <span>{categorie}</span>
      <span>{title}</span>
      <span>{author}</span>
      <BookActions actionid={id} />
    </div>
  );
};

BookInfo.defaultProps = {
  id: '',
  categorie: '',
  title: '',
  author: '',
};

BookInfo.propTypes = {
  id: PropTypes.string,
  categorie: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
};

export default BookInfo;
