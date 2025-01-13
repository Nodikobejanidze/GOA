import React, { useState, useEffect } from 'react';
import BookList from './BookList';
import Search from './Search';

function App() {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState('');
  
  useEffect(() => {
    if (query) {
      fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
        .then(response => response.json())
        .then(data => setBooks(data.items || []));
    }
  }, [query]);

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
  };

  return (
    <div className="App">
      <h1>My Book Library</h1>
      <Search onSearch={handleSearch} />
      <BookList books={books} />
    </div>
  );
}

export default App;
