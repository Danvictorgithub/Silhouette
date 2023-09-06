import { useState, useEffect } from 'react'
import axios from 'axios';
function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState({message:""});
  useEffect( () => {
  },[]);
  return (
    <>
      <div className='container flex justify-between items-center px-8 h-12 bg-cyan-500 drop-shadow'>
        <div>
          <img src="/" alt="" />
          <h1 className="font-black">Silhouette</h1>
        </div>
        <div>
          <ul className='container flex gap-4 font-medium'>
            <li>Login</li>
            <li>Signup</li>
            <li>
            <span className="material-symbols-outlined">dark_mode</span>
            </li>
          </ul>
        </div>

      </div>
    
    </>
  )
}

export default App
