import Footer from "./views/partial/Footer"
import Header from "./views/partial/Header"
import Home from "./views/Home/Home"
function App() {

  return (
    <>
    <div className="h-full flex flex-col">
      <Header/>
        <Home/>
      <Footer/>
    </div>

    </>
  )
}

export default App
