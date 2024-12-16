import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0);

  const handleclick = () => {
    setCount(count + 1);
  }

  return (
    <div>
      <p>{count}</p>
      <button onClick={handleclick}>Count</button>
   </div>  
  )
}

export default App;
