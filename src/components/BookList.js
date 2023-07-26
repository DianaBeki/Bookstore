import React from 'react';
import { useSelector } from 'react-redux';
import BookForm from './BookForm';
import Book from './Book';

function Books() {
  const { books } = useSelector((store) => store.books);
  return (
    <>
      <ul className="list">
        {books.map((book) => (
          <Book
            key={book.item_id}
            id={book.item_id}
            title={book.title}
            author={book.author}
          />
        ))}
      </ul>
      <BookForm />
    </>
  );
}

export default Books;
