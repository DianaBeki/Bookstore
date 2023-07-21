import React from 'react';

function BookForm() {
  return (
    <div>
      <h2 className="form-heading">ADD NEW BOOK</h2>
      <form className="form-input">
        <input type="text" id="input-tittle" placeholder="Tittle" />
        <input type="text" id="input-author" placeholder="Author" />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default BookForm;
