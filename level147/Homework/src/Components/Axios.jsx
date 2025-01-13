useEffect(() => {
    const savedLibrary = JSON.parse(localStorage.getItem('library')) || [];
    setLibrary(savedLibrary);
  }, []);
  
  useEffect(() => {
    localStorage.setItem('library', JSON.stringify(library));
  }, [library]);
  