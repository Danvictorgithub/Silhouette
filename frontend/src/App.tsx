function App() {

  return (
    <>
      <div className='container flex justify-between items-center px-8 h-12 bg-white drop-shadow-sm'>
        <div>
          <img src="/" alt="" />
          <h1 className="font-black text-white text-gray-700">Silhouette</h1>  
        </div>
        <div>
          <ul className='container flex gap-4 font-medium text-gray-700'>
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
