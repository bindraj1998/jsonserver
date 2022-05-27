import React, { useEffect, useState } from 'react'

const Todos = () => {

//     //    fetch("http://localhost:8080/todos")
//     fetch("https://ibk3c6.sse.codesandbox.io/todos").then((e)=>
//     e.json()
// ).then((d)=>{
//   console.log(d)
// })
const [newtodo,setnewtodo]=useState("")
 const[todos,settodos]=useState([])
 const saveInfo=()=>{
    fetch("http://localhost:8080/todos",{
      method:"POST",
      headers:{
          "content-type":"application/json"
      },
      body:JSON.stringify({
          value:newtodo,
          iscomp:false,

      }),

    }).then((e)=>
    e.json()
).then((d)=>{
    settodos([...todos,d])
  setnewtodo("")
}) 

}

useEffect(()=>{
    fetch("http://localhost:8080/todos").then((e)=>
    e.json()
).then((d)=>{
  console.log(d)
  settodos(d)
}) 
},[])


  return (
    <div>Todos
        <div>
            <div>
            <input onChange={(e)=>setnewtodo(e.target.value)}/>

         <button onClick={saveInfo}>+</button>
           </div>

            {
                todos.map((todo)=>(
                
                    <div key ={todo.id}>{todo.value}</div>
                ))
            }
        </div>

    </div>
  )
}

export default Todos