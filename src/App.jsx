import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Contents from './components/Contents'

function App() {

  return (
    <>
      <Navbar />
      <Sidebar />
      <Contents />
    </>
  )
}

export default App
