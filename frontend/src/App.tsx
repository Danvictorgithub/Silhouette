import { useState, useEffect } from 'react'
import axios from 'axios';
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState({message:""});
  useEffect( () => {
    console.log("This is called");
    axios.get("http://localhost:3000").then((res) => {console.log(res.data);})
  },[]);
  return (
    <>
     {data.message}
     <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    </>
  )
}

export default App
