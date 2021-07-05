import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

const players = ["David Warner", "Mitchel Starch", "Steven Smith", "Adam Zam", "Kane Williamson"];
const heros = [{name: "Fahad Fassil", age: 34},{name:"Dulkar Salman", age: 23},{name:"Nivin Pauly", age: 22}]

function App() {
  const movieNumber = [100, 55, 30];
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => setUsers(data));
  }, []);
  return (
    <div className="App">
      <header>
        {
          users.map(person => <Heros name = {person.name} key = {person.id}></Heros>)
        }
        <MovieCounter></MovieCounter>
        {<ul>
          {players.map(player => <li style={{color: "#8e44ad"}}>{player}</li>)}
        </ul>}
        <Player></Player>
        {heros.map(heroDetail=> <Heros name = {heroDetail.name} number = {heroDetail.age}></Heros>)}
        <Heros name = "Shakib Khan" number = {movieNumber[0]}></Heros>
        <Heros name = "Salmon Khan" number = {movieNumber[1]}></Heros>
        <Heros name = "Aamir Khan" number = {movieNumber[2]}></Heros>
        {/* <RandomUser></RandomUser> */}
      </header>
    </div>
  );
}
// function RandomUser () {
//   const [users, setUsers] = useState([]);
//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then(res => res.json())
//     .then(data => setUsers(data));
//   }, []);
//   return(
//     <ul>
//     {
//       users.map(person => <li>{person.name}</li>)
//     }
//   </ul>
//   )
// }
function Player () {
  return (
    <div style={{color: "#16a085"}}>
      <ul>
        {players.map(player => <li>{player}</li>)}
      </ul>
    </div>
  )
}
function MovieCounter () {
  const [count, setCount] = useState(5);
  const handleClick = () => {
    //console.log("clicked");
    // const newCount = count + 1;
    setCount(count + 1);
  };
  return (
    <div>
      <h3 style={{color:"#2980b9"}}>Number of movies: <span style={{color:"#d35400"}}>{count}</span></h3>
      <button style = {{marginRight:"10px"}} onClick={ () => setCount(count - 1)}>Number decrease</button>
      <button onClick={handleClick}>Number increase</button>
      <MovieWatched watchLIst = {count}></MovieWatched>
      <MovieWatched watchLIst = {count + 5}></MovieWatched>
      <MovieWatched watchLIst = {count + 10}></MovieWatched>
    </div>
  )
}
function MovieWatched (props) {
  return (
    <h3 style = {{color:"#8e44ad"}}>Number of movies I watched: <span style = {{color: "#d35400"}}>{props.watchLIst}</span></h3>
  )
}
function Heros (props) {
  const heroStyle = {
    border: "2px solid #d35400",
    borderRadius: "5px",
    margin: "10px",
    color: "#1abc9c"
  }
  return (
    <div style = {heroStyle}>
      <h2>Hero name: {props.name}</h2>
      <h3>Movie's number: {props.number}</h3>
    </div>
  )
}

export default App;
