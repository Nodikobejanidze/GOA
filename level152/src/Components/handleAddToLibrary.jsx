function handleAddToLibrary(book) {
    let library = JSON.parse(localStorage.getItem('library')) || [];
    library.push(book);
    localStorage.setItem('library', JSON.stringify(library));
  }
  