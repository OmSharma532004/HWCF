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
import ConferenceFee from './components/Conference/Fee'
import PrivacyPolicy from './pages/Privacy'
import DisclaimerPolicy from './pages/Disclaimer'
import RefundPolicy from './pages/Refund'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className=' w-[100%]'>
    <Navbar />
    {/* Add a contact email at right side */}
    <div>
  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=Info@healthandwellbeingcoachingforum.com" className="text-white bg-purple-800 z-10 md:bottom-[250px] bottom-[50px] p-5 rounded-lg right-0 fixed r text-lg font-bold" target="_blank">
    Contact Us
  </a>
</div>
    </div>
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/event" element={<Events />} />
      <Route path="/conference" element={<Conference/>} /> */}
      <Route path="*" element={<div>404 Not Found</div>} />
      {/* <Route path="/resources" element={<Resources/>} />
      <Route path="/checkout" element={<ConferenceFee/>} />
      <Route path="/privacy" element={<PrivacyPolicy/>} />
      <Route path="/disclaimer" element={<DisclaimerPolicy/>} />
      <Route path="/refund" element={<RefundPolicy/>} /> */}
    </Routes>
     
    </>
  )
}

export default App
