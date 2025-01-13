import React, { useState } from 'react';

const MyComponent = () => {
  
  const [text, setText] = useState("This is the text of the paragraph.");


  const handleClick = () => {

    setText("The text is updated when the button is pressed!");
  };


  const handleCorrect = (callback) => {

    callback();
  };

  const updateText = () => {
    setText("Text updated using callback!");
  };

  return (
    <div>
      <p>{text}</p>
      <button onClick={handleClick}>Click Me!</button>
      <br />
      <button onClick={() => handleCorrect(updateText)}>Click CallBack!</button>
    </div>
  );
};

export default MyComponent;
