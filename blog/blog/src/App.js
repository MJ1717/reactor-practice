import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

let post = "Today's trend";
let [first_state,a] = useState("Women's fashion");
let [second_state,b] = useState("Men's fashion");
let [third_state,c] = useState("Children's fashion");
let[combined_state, d] = useState(["Men", "Women"]);

let [likes, setLikes] = useState(0);


  return (
    <div className="App">
      
      <div className="black-nav">
        <h4>Blog</h4>
      
      </div>

      <h4>{post}</h4>
      
      <div className="list">
        <h4>{ first_state } <span onClick={function() { setLikes(likes + 1) }} style={{cursor: 'pointer'}}>👍</span> {likes}</h4>
        <p>2월 17일 발행</p>
      
      </div>
      
      <div className="list">
        <h4>{ second_state }</h4>
        <p>3월 11일 발행</p>
      
      </div>
      
      <div className="list">
        <h4>{ third_state }</h4>
        <p>12월 9일 발행</p>
      </div>


      <div className="list">
        <h4>{ combined_state[0] } <span onClick={ ()=> {d([combined_state[1], combined_state[0]])}}
          style={{cursor:'pointer'}}>Change</span></h4>
        <p>12월 9일 발행</p>
      </div>

      
    </div>
  );
}

export default App;
