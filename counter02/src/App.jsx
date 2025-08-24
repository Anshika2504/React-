//REACT INTERVIEW
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  let  [counter, setCounter] = useState(15) // this is a hook which will be used to manage state in functional components; u can give any default value to it
  //counter :- variable and setCounter :- function to update the value of counter (wherever counter variable is founded, it will be updated)
 //let counter = 5 // this varibale will be injected in return statement
 const addValue = () =>{
   //counter = counter + 1; 
   setCounter(prevCounter=> prevCounter + 1) // here, prevConter is last updated value) 
   setCounter(prevCounter=> prevCounter + 1)
   setCounter(prevCounter=> prevCounter + 1)
   setCounter(prevCounter=> prevCounter + 1)
  //setCounter(counter); // this will update the value of counter in the UI
    //setCounter(counter + 1); // this will also work
    console.log("value added", counter);
 }

 const removeValue = () =>{
  setCounter(counter-1); //setCounter(counter - 1); // this will also work
 }

  return (
    <>
      <h1> WELCOME!!!!!</h1>
      <h2>Counter value: {counter} </h2> 
      <button onClick={addValue}> Add value</button>
  <br></br>
       <button onClick = {removeValue}> Remove value</button>
       <p>footer: {counter}</p>
    </>
  )
}

export default App
