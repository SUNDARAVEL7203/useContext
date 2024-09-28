import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import Card from './Components/Card'
import Footer from './Components/Footer'


function App() {
  

  return (
    <>
    <div className='fixed-top'>
     <Navbar />
     <Header />
    </div>
    <div className="d-flex flex-column justify-content-center align-items-center cardcss">
      <Card />

    </div>
     <Footer />
    </>
  )
}

export default App
