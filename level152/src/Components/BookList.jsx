import React from 'react';

function BookList({ books }) {
  return (
    <div>
      {books.length === 0 ? (
        <p>No books found</p>
      ) : (
        <ul>
          {books.map((book) => (
            <li key={book.id}>
              <img
                src={book.volumeInfo.imageLinks?.thumbnail}
                alt={book.volumeInfo.title}
              />
              <h3>{book.volumeInfo.title}</h3>
              <p>{book.volumeInfo.authors?.join(', ')}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default BookList;
