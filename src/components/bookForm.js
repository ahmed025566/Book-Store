import React, { useRef } from 'react';
import './bookForm.css';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/bookSlice';
import Button from './Button';

const BookForm = () => {
  const dispatch = useDispatch();
  const title = useRef();
  const author = useRef();
  const category = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook({
      item_id: Date.now(),
      title: title.current.value,
      author: author.current.value,
      category: category.current.value,
    }));
    title.current.value = '';
    author.current.value = '';
    title.current.focus();
  };
  return (
    <form className="bookForm" onSubmit={handleSubmit}>
      <h2 className="formTitle">ADD NEW BOOK</h2>
      <div className="inputs">
        <input
          type="text"
          className="bookName"
          placeholder="Book Title"
          ref={title}
        />
        <input
          type="text"
          className="bookAuthor"
          placeholder="Book Author"
          ref={author}
        />
        <select className="catogary" ref={category}>
          <option className="catogaryItem" value="science Fiction">science Fiction</option>
          <option className="catogaryItem" value="Action">Action</option>
          <option className="catogaryItem" value="Economy">Economy</option>
          <option className="catogaryItem" value="Fantazia">Fantazia</option>
          <option className="catogaryItem" value="soical">soical</option>
        </select>
        <Button className="submit-btn" label="ADD BOOK" onclick={handleSubmit} />
      </div>
    </form>
  );
};

export default BookForm;
