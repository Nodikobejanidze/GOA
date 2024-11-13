// main.js

const Book = require('./Book');
const Magazine = require('./Magazine');

// Create a book
const book1 = new Book("Harry Potter", 1997, "J.K. Rowling", "Fantasy");
console.log(book1.getSummary());
book1.borrowItem(); // Borrow item
book1.borrowItem(); // Try borrowing again (not available)
book1.returnItem(); // Return item
book1.borrowItem(); // Borrow item again (after return)

// Create a magazine
const magazine1 = new Magazine("National Geographic", 2024, 5);
console.log(magazine1.getSummary());
magazine1.borrowItem(); // Borrow item
magazine1.returnItem(); // Return item
magazine1.borrowItem(); // Borrow item again
