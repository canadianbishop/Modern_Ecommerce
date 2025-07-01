import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './Home/Home'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
    <Navbar/>
    <div className='min-vh-100'>
      <Outlet/>
    </div>
    <Footer/>
    </>
  )
}

export default App