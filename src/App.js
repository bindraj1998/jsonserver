import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import Todos from './componets/Todos';

function App() {
  
  // fetch("https://ibk3c6.sse.codesandbox.io/todos").then((e)=>
  //     e.json()
  // ).then((d)=>{
  //   console.log(d)
  // })

  

  return (
    <div className="App">
      <Todos/>
     
    </div>
  );
}

export default App;
