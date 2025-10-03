import React, { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div className="w-full bg-red-800 h-screen duration-200"
         style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap bottom-12 text-3xl justify-center inset-x-0 px-2">
        <div classNmae="flex flex-wrap justify-center
        gap-3 shadow-lg bg-white px-3 py-3 
        rounded-3xl">test
        <button
        onClick={() => setColor("red")}
        className="outline-none px-4 py-1 rounded-full
         text-white shadow-lg"
        style={{backgroundColor:"red"}}
        >Red</button>
        <button 
        onClick={() => setColor("green")}
        className="outline-none px-4 py-1 rounded-full
         text-white shadow-lg"
        style={{backgroundColor:"green"}}
        >Green</button>
        <button 
        onClick={() => setColor("yellow")}
        className="outline-none px-4 py-1 rounded-full
         text-white shadow-lg"
        style={{backgroundColor:"yellow"}}
        >Yellow</button>
        <button 
        onClick={() => setColor("pink")}
        className="outline-none px-4 py-1 rounded-full
         text-white shadow-lg"
        style={{backgroundColor:"pink"}}
        >Pink</button>
        <button 
        onClick={() => setColor("violet")}
        className="outline-none px-4 py-1 rounded-full
         text-white shadow-lg"
        style={{backgroundColor:"violet"}}
        >Violet</button>
        </div>
      </div>

    </div>
  );
}

export default App;
