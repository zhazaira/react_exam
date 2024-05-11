import React, { useState, useEffect, useCallback } from 'react';

const withBookSearch = (WrappedComponent) => {
  const WithBookSearch = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    
    const searchBooks = useCallback(async () => {
      try {
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=intitle:${searchQuery}`);
        const data = await response.json();
        setSearchResult(data.items || []);
      } catch (error) {
        console.error('Ошибка при поиске книг:', error);
      }
    }, [searchQuery]);
    
    useEffect(() => {
      searchBooks();
    }, [searchBooks]);

    const handleSearchInputChange = (event) => {
      setSearchQuery(event.target.value);
    };

    return <WrappedComponent searchResult={searchResult} onSearchInputChange={handleSearchInputChange} />;
  };

  return WithBookSearch;
};

export default withBookSearch;
