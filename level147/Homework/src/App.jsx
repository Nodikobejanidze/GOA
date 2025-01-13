import axios from 'axios';

export const fetchBooks = async (searchTerm) => {
  const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`);
  return response.data.items;
};
