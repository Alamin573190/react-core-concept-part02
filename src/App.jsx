import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './counter'
import Users from './users'

function App() {
function handleClick(){
  alert('button clicked')
}
const handleClick2 = () =>{
  alert('button 2')
}

const handle2 = (num) =>{
alert(num + 5)
}
  return (
    <>
   
      <h1>Vite + React</h1>
        <Users></Users>
        <Counter></Counter>
     <button onClick={handleClick}>click me</button>
     <button onClick={handleClick2}> click 2</button>
     {/* <button onClick={handle2(3)}> click03</button> */}
    </>
  )
}

export default App
