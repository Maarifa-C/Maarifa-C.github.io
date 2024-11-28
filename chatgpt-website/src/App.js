import Board from './components/board';
import { Leaderboard } from './database';
import './components/style.css';
import React, { useEffect, useState } from "react";


function App() {

  
const [data, setData] = useState([{}])
const [message, setMessage] = useState([{}])
useEffect(() => {
  fetch('http://localhost:5000/get').then(res => res.json()).then(data => {
    setData(data)
    
      function pushData(val) {
          Leaderboard.length = 0
          console.log(val.messages)
         Leaderboard.push(val)
        }

    data.map(pushData)



    });
}, []);

  return (
    
    <div className="App" id='main'>
        <Board></Board>
    </div>
    
  )
}

export default App;
