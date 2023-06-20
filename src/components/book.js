import React from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import './book.css';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/bookSlice';
import Button from './Button';

const Book = ({
  bookCatogary, bookName, bookAuthor, bookId,
}) => {
  const dispatch = useDispatch();
  return (
    <div className="book" data-id={bookId}>
      <div className="bookData">
        <div className="bookDataFirst">
          <p className="bookCatogary">{bookCatogary}</p>
          <h2 className="bookName">{bookName}</h2>
          <p className="bookAuthor">{bookAuthor}</p>
        </div>
        <div className="bookDataSecond">
          <button type="button" className="comments">Comments</button>
          <div className="line" />
          <Button onclick={() => dispatch(removeBook(bookId))} label="Remove" className="remove" />
          <div className="line" />
          <button type="button" className="edit">Edit</button>
        </div>
      </div>
      <div className="progress">
        <AiOutlineLoading3Quarters className="Quarters" />
        <div className="progressText">
          <p className="percentage">83%</p>
          <p className="completed">Completed</p>
        </div>
      </div>
      <div className="devider" />
      <div>
        <p className="current">Current Chapter</p>
        <p className="currentChapter">Chapter 17</p>
        <button className="update" type="button">UPDATE PROGRESS</button>
      </div>
    </div>
  );
};

export default Book;
