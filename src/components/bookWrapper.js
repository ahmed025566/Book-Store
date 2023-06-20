import React from 'react';
import { useSelector } from 'react-redux';
import BookForm from './bookForm';
import Book from './book';
import './booksWrapper.css';

const BookWrapper = () => {
  const { books } = useSelector((state) => state.books);
  return (
    <div className="bookRoute">
      <div className="booksWrapperChild">
        {books.map((book) => (
          <Book
            key={book.item_id}
            bookCatogary={book.category}
            bookName={book.title}
            bookAuthor={book.author}
            bookId={book.item_id}

          />
        ))}
      </div>
      <div className="devider2" />
      <BookForm />
    </div>
  );
};

export default BookWrapper;
