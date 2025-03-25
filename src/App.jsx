import './App.css'
import Button from "./Button"; 
import Counter from './Counter';
import Player from "./Player"; 
import Boller from './Boller';
import Users from "./Users"; 
import { Suspense } from 'react';


const fetchUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  const promise = await (res.json());
  return promise;
}; 

function App() {
  const handleClick = (num) => {
    let newNum = num + 10; 
    alert(`${newNum}`)
  }; 

  const usersPromise = fetchUsers(); 
  return (
    <>
      <h1>Vite + React</h1>
      
      <Suspense fallback={"Data Loading"}>
        <Users usersPromise={usersPromise}></Users>
      </Suspense>
      
      <Boller></Boller>
      <Player></Player>
      <Player></Player>
      <Counter></Counter>
      <Button></Button>
      <Button count='1' content='Ghuta mara hoiche button 1 ke '></Button>
      <button onClick={() => handleClick(10)}>clicke me 2</button>
    </>
  )
}

export default App
