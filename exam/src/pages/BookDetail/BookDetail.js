import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './BookDetail.css'; 
function BookDetail() {
  const [book, setBook] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes/${id}`);
        const data = await response.json();
        setBook(data);
      } catch (error) {
        console.error('Ошибка загрузки книги:', error);
      }
    };

    fetchBook(); 
  }, [id]); 

  return (
    <div className="book-detail-container">
      {book ? (
        <div className="book-detail-content">
          <div className="book-detail-image">
            <img src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title} />
          </div>
          <div className="book-detail-info">
            <h2>{book.volumeInfo.title}</h2>
            <p>{book.volumeInfo.description}</p>
          </div>
        </div>
      ) : (
        <p>Загрузка...</p>
      )}
    </div>
  );
}

export default BookDetail;
