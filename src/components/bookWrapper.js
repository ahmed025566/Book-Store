import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BookForm from './bookForm';
import Book from './book';
import './booksWrapper.css';
import { fetchBooks } from '../redux/books/bookSlice';

const BookWrapper = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, []);
  const { books } = useSelector((state) => state.books);
  const booksCollection = books[0];
  console.log(books[0]);
  if (typeof booksCollection !== 'undefined') {
    return (
      <div className="bookRoute">
        <div className="booksWrapperChild">

          {booksCollection.map((book) => (
            <Book
              key={book[0].id}
              bookCatogary={book[0].category}
              bookName={book[0].title}
              bookAuthor={book[0].author}
              bookId={book[0].id}

            />
          ))}
        </div>
        <div className="devider2" />
        <BookForm />
      </div>
    );
  }
};

export default BookWrapper;
/* eslint consistent-return: "off" */
