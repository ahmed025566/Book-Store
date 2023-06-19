import React, { useState } from 'react';
import './bookForm.css';

const BookForm = ({ addBook }) => {
  const [value, setValue] = useState('');
  const [choice, setChoice] = useState('science Fiction');
  const handleSubmit = (e) => {
    e.preventDefault();
    addBook(value, choice);
    setValue('');
  };
  return (
    <form className="bookForm" onSubmit={handleSubmit}>
      <h2 className="formTitle">ADD NEW BOOK</h2>
      <div className="inputs">
        <input
          type="text"
          className="bookName"
          value={value}
          placeholder="Book Title"
          onChange={(e) => setValue(e.target.value)}
        />
        <select className="catogary" onChange={(e) => setChoice(e.target.value)}>
          <option className="catogaryItem" value="science Fiction">science Fiction</option>
          <option className="catogaryItem" value="Action">Action</option>
          <option className="catogaryItem" value="Economy">Economy</option>
          <option className="catogaryItem" value="Fantazia">Fantazia</option>
          <option className="catogaryItem" value="soical">soical</option>
        </select>
        <button type="submit" className="submit-btn">ADD BOOK</button>
      </div>
    </form>
  );
};

export default BookForm;
