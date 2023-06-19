import { NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import { VscAccount } from 'react-icons/vsc';
import BookWrapper from './components/bookWrapper';
import Catogries from './components/catogries';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1 className="logo">Bookstore CMS</h1>
        <nav className="navMenu">
          <NavLink to="/">Books</NavLink>
          <NavLink to="/catogries">Catogries</NavLink>
        </nav>
        <VscAccount className="account" />
      </header>
      <Routes>
        <Route path="/" element={<BookWrapper />} />
        <Route path="/catogries" element={<Catogries />} />
      </Routes>
    </div>
  );
}

export default App;
