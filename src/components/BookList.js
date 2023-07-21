import React from 'react';
import Book from './Book';
import BookForm from './BookForm';

function Books() {
  return (
    <>
      <ul className="title-author">
        <Book tittle="Pride and Prejuduce" author="Jane Austen" />
        <Book tittle="To Kill a Mockingbird" author="Harper Lee" />
        <Book tittle="The Great Gatsby" author="F.Scott Fitzgerald" />
      </ul>
      <BookForm />
    </>
  );
}

export default Books;
