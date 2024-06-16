import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Events from './pages/Events'
import Conference from './pages/Event/Conference'
import Resources from './pages/Books'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className=' w-[100%]'>
    <Navbar />
    </div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/event" element={<Events />} />
      <Route path="/conference" element={<Conference/>} />
      <Route path="*" element={<div>404</div>} />
      <Route path="/resources" element={<Resources/>} />
    </Routes>
     
    </>
  )
}

export default App
