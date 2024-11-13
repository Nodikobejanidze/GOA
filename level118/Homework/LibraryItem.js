// LibraryItem.js

class LibraryItem {
    constructor(title, year) {
      this.title = title;
      this.year = year;
      this.isAvailable = true;
    }
  
    borrowItem() {
      if (this.isAvailable) {
        this.isAvailable = false;
        console.log(`${this.title} has been successfully borrowed!`);
      } else {
        console.log(`${this.title} is not available.`);
      }
    }
  
    returnItem() {
      this.isAvailable = true;
      console.log(`${this.title} has been successfully returned!`);
    }
  }
  
  module.exports = LibraryItem;
  