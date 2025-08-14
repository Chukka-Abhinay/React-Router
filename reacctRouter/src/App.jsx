import React from 'react'
import Home from './component/Home/Home'
import Header from './component/Header/Header'
import Footer from './component/Footer/Footer'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default App