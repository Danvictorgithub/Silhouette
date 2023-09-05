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
    <img src="https://rvuojwvsivfhmjauwyby.supabase.co/storage/v1/object/public/UserStorage/public/2023-09-05_09-21-05.png" alt="" />
    </>
  )
}

export default App
