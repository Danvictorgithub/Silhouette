import { useState, useEffect } from 'react'
import axios from 'axios';
function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState({message:""});
  useEffect( () => {
    axios.get("http://localhost:2345/api").then((res) => {setData({message:res.data.message});})
  },[]);
  return (
    <>
    <h1 className=''>
      {data.message}
    </h1>
    </>
  )
}

export default App
