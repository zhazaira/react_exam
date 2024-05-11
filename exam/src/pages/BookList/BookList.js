import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './BookList.css';
import withBookSearch from './withBookSearch';

function BookList({ searchResult, onSearchInputChange }) {
  const [genre, setGenre] = useState('fantasy');

  useEffect(() => {
    onSearchInputChange({ target: { value: genre } });
  }, [genre, onSearchInputChange]);

  return (
    <div className="book-list-container">
      <h2>Book List</h2>
      <div>
        <label htmlFor="genre">Choose a genre:</label>
        <select id="genre" value={genre} onChange={(e) => setGenre(e.target.value)}>
          <option value="fantasy">Fantasy</option>
          <option value="comedy">Comedy</option>
          <option value="mystery">Mystery</option>
          <option value="horror">Horror</option>
          <option value="fairytale">Fairy Tale</option>
          <option value="Fiction in Verse">Fiction in Verse</option>
          <option value="Folklore">Folklore</option>
          <option value="Historical Fiction">Historical Fiction</option>
        </select>
      </div>
      <div>
        <input
          type="text"
          placeholder="Search books by title"
          onChange={onSearchInputChange}
        />
      </div>
      <div className="book-list">
        {searchResult.map((book, index) => (
          <div key={index} className="book-item">
            <Link to={`/books/${book.id}`}>
              <img src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title} />
              <h3>{book.volumeInfo.title}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default withBookSearch(BookList);
