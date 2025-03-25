import './App.css'
import Button from "./Button"; 
import Counter from './Counter';
import Player from "./Player"; 
import Boller from './Boller';
import Users from "./Users"; 

function App() {
  const handleClick = (num) => {
    let newNum = num + 10; 
    alert(`${newNum}`)
  }
  return (
    <>
      <h1>Vite + React</h1>
      <Users></Users>
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
