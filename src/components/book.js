import React from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import './book.css';

const Book = ({
  bookCatogary, bookName, bookAuthor, bookId, deleteBook,
}) => (
  <div className="book">
    <div className="bookData">
      <div className="bookDataFirst">
        <p className="bookCatogary">{bookCatogary}</p>
        <h2 className="bookName">{bookName}</h2>
        <p className="bookAuthor">{bookAuthor}</p>
      </div>
      <div className="bookDataSecond">
        <button type="button" className="comments">Comments</button>
        <div className="line" />
        <button type="button" className="remove" onClick={() => deleteBook(bookId)}>Remove</button>
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

export default Book;
