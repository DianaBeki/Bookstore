import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';
import Button from './Button';

function Book({ id, title, author }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    console.log(id);
    dispatch(removeBook(id));
  };

  return (
    <li>
      <div className="book">
        <h3>{title}</h3>
        <p>{author}</p>
        <Button
          type="button"
          onClick={handleDelete}
          btnValue="Delete"
          btnName="remove"
        />
      </div>
    </li>
  );
}

export default Book;

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
