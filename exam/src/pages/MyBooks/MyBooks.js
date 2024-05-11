import React, { Component } from 'react';
import BookForm from './BookForm'; 
import './MyBooks.css';

class MyBooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [
        { id: 1, title: "Mara and Morok", genre: "Fantasy", description: "Welcome to the world of belligerent kingdoms of Serat and Araken, where on the border of good and evil Mara is resurrected for revenge. Grey haired, wearing a scarlet cape, she is tied to the one who has brought her from the grave." },
        { id: 2, title: "The First: Science Fiction and Fantasy Stories", genre: "Science Fiction", description: "These stories visit undiscovered countries and shadowy avenues of the heart, lands and times where night never ends and matter doesn't matter. Features the six-story Aeropagan cycle where time is literally money." },
        { id: 3, title: "Binary code: Mystery number one", genre: "Mystery", description: "Accordingly, the center Zero controls everything and everyone in the world. But it turns out that for many years this is not the main concern of the collegium, but something else, labeled by the secret term " },
      ],
      showForm: false,
      deleteCount: 0
    };
  }

  handleDelete = (id) => {
    console.log(`Deleting book with id ${id}`);
    this.setState(prevState => ({
      books: prevState.books.filter(book => book.id !== id),
      deleteCount: prevState.deleteCount + 1
    }));
  };

  handleAdd = (newBook) => {
    this.setState(prevState => ({
      books: [...prevState.books, { ...newBook, id: Date.now() }],
      showForm: false
    }));
  };

  handleUpdate = (id, newTitle) => {
    this.setState(prevState => ({
      books: prevState.books.map(book =>
        book.id === id ? { ...book, title: newTitle } : book
      )
    }));
  };

  render() {
    const { books, showForm, deleteCount } = this.state;

    return (
      <div>
        <h1>My Books</h1>
        <button onClick={() => this.setState({ showForm: !showForm })}>Add Book</button>
        {showForm && <BookForm onSubmit={this.handleAdd} />}
        <p>Удалено книг: {deleteCount}</p> 
        <ul>
          {books.map(book => (
            <li key={book.id}>
              <h3>{book.title}</h3>
              <p>Genre: {book.genre}</p>
              <p>Description: {book.description}</p>
              <div> 
                <button onClick={() => this.handleDelete(book.id)}>Delete</button>
                <button onClick={() => {
                  const newTitle = prompt("Enter new title:", book.title);
                  if (newTitle !== null) {
                    this.handleUpdate(book.id, newTitle);
                  }
                }}>Update</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default MyBooks;
