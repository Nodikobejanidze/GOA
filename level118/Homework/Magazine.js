// Magazine.js

const LibraryItem = require('./LibraryItem');

class Magazine extends LibraryItem {
  constructor(title, year, issueNumber) {
    super(title, year);
    this.issueNumber = issueNumber;
  }

  getSummary() {
    return `${this.title} (Year: ${this.year}) - Issue: ${this.issueNumber}`;
  }
}

module.exports = Magazine;
