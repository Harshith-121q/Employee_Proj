import React from 'react'
import { useContext } from 'react'
import {counterContextObj} from '../contexts/ContextProvider'
import { useCounterStore } from './CounterStore'; // it is of zustand 

export default function Home() {
  // call useCounterStore hook to get 
 const {newCounter}=useCounterStore((state)=>state.newCounter)
  const {incrementCounter}=useCounterStore((state)=>state.incrementCounter)

  const {counter,changeCounter} = useContext(counterContextObj);

  console.log("home")
  
  return (
    <div>
      <h1>Counter : {counter}</h1>
      <button onClick={changeCounter} className='bg-amber-300'>change</button>

      <h1>New Counter : {newCounter}</h1>
      <button onClick={incrementCounter} className='bg-amber-300'>incremet Counter</button>
    </div>
  )
}
