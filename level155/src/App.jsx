// შექმენით პროექტი შექმენით Book Library App პროექტი თქვენი დავალებაა წამოიღოთ წიგნები შემდეგი api-დან
// წამოღებული წიგნები უნდა დაარენდეროთ ისე, რომ თითოეულ წიგნს ჰქონდეს თავისი ღილაკი. ამ ღილაკზე დაკლიკებისას კონკრეტული წიგნი უნდა ჩაემატოს MyLibrary სექციაში(განათავსეთ სასურველ ადგილას)


import { useState } from 'react';
import SearchBooks from "./Components/SearchBooks";
import Mylibrary from "./Components/Mylibrary";
import "./styles.css";

const App = () => {
  const [MyLibrary, setMylibrary] = useState([]);

  const addToLibrary = (book) => {
    if (!MyLibrary.some((b) => b.id === book.id)) {
      setMylibrary([...MyLibrary, book]);

   

    }
  };


  return (
    <div className="app-container">
      <h1>Book Library App</h1>
      <SearchBooks addToLibrary={addToLibrary} />
      <MyLibrary MyLibrary={MyLibrary} />
    </div>
  );
};

export default App

