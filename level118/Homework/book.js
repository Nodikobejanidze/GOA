// Book.js

const LibraryItem = require('./LibraryItem');

class Book extends LibraryItem {
  constructor(title, year, author, genre) {
    super(title, year); // Inherits title and year from LibraryItem
    this.author = author;
    this.genre = genre;
  }

  getSummary() {
    return `${this.title} (Year: ${this.year}) - Author: ${this.author}, Genre: ${this.genre}`;
  }
}

module.exports = Book;
