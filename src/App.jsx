import { useState } from 'react'
import { Header, Footer } from './components/index.js'
import { Outlet } from 'react-router-dom'
import BACK from './components/Back.jpg'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='w-full bg-cover h-screen bg-no-repeat z-1 bg-fixed overflow-y-scroll'
    style={{backgroundImage: `url(${BACK})`}}
    >
    <Header/>
    <Outlet/>
    <Footer/>
    </div>
  )
}

export default App
