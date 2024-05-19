// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import AdminDashboard from './admin/AdminDashboard'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<AdminDashboard/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
