import React, { Children } from 'react'
import { createContext ,useState} from 'react'

export const counterContextObj=createContext()

function ContextProvider({children}) {
    // state
    const [counter, setCounter]= useState(10)
    // const [counter, setCounter]= useState(20)
    // function to change state
    const changeCounter =()=>{
        setCounter(counter+1)
    }// till now it is like water


  return (
    <counterContextObj.Provider value={{counter,changeCounter}} >
       {children}
    </counterContextObj.Provider>          // through the value property we can give the counter and changeCounter to all the components of the react application 
  )
}

export default ContextProvider;