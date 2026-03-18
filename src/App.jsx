import React from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <div>
      <Header/>
      <Home/>
      <ToastContainer/>
    </div>
  )
}

export default App
