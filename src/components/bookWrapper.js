import React, { useState } from 'react';
import BookForm from './bookForm';
import Book from './book';
import './booksWrapper.css';

const BookWrapper = () => {
  const [books, setBooks] = useState([]);
  const addBook = (book, choice) => {
    setBooks([...books, {
      id: Date.now(), name: book, catogary: choice, author: 'Charles Dickens',
    }]);
  };
  // const deleteBook = (id) => {
  //   setBooks(books.filter((book) => book.id !== id));
  // };
  return (
    <div className="bookRoute">
      <div className="booksWrapperChild">
        {books.map((book) => (
          <Book
            key={book.id}
            bookCatogary={book.catogary}
            bookName={book.name}
            bookAuthor={book.author}

          />
        ))}
      </div>
      <div className="devider2" />
      <BookForm addBook={addBook} />
    </div>
  );
};

export default BookWrapper;
