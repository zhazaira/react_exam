import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home/Home';
import BookList from './pages/BookList/BookList';
import BookDetail from './pages/BookDetail/BookDetail';
import MyBooks from './pages/MyBooks/MyBooks'; 

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/books" element={<BookList />} />
          <Route exact path="/books/:id" element={<BookDetail />} />
          <Route exact path="/my-books" element={<MyBooks />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
