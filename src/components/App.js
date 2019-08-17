import React, { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
     <h2 >This is a sample React Application </h2>
      <br />
     <h3>Add number by two every time you click.
      Am running on port 4242</h3> 
      <br />
      <button style={{backgroundColor:'red',padding :'15px',color:'white'}} onClick={() => setCount(count + 2)}>{count}</button>
    </div>
  );
}