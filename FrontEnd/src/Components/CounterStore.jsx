import {create} from "zustand"

// cerate store
export const useCounterStore=create((set)=>({

    // state
    newCounter:0,
    newCounter1:0,
    // add user state {name,email,age}
    user:{
        name:"harsha",
        email:"ha@gmail",
        age:"20"
    },
    // functions to modify the state
    incrementCounter:()=>set(state=>({newCounter:state.newCounter+1})),
    decrementCounter:()=>set(state=>({newCounter:state.newCounter-1})),
    reset:()=>set((newCounter=0)),

    // handson
    // function to change newCounter to 100
    changeTo20:()=>set((newCounter=20)),
    // functiom to decrement newCounter by 20
    dec20:()=>set(state=>({newCounter:state.newCounter-20})),

    // function to change email
    changeEmail:()=>set({...user,email:"hars@gmail"}),
    //function to change name and age
    changeNameAge:()=>set({...user,name:"hari",age:21})
}))        // set always returns an object // defaultly by using ()=>{} it returns the function body but here we have to return the object  so we use ()=>({})// here it is a js object returned
