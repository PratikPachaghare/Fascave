import { useState } from 'react'
import Home from './Pages/Home'
import { BrowserRouter , Route , Routes } from 'react-router-dom'
import Protfolio from './Pages/Protfolio'
import Services from './Pages/Services'
import About_Us from './Pages/About_Us'
import Articles from './Pages/Articles'
import Contact_us from './Pages/Contact_us'
import Consultation from './Pages/Consultation'
import Navbar from './Componets/Home/Navbar'

function App() {

  return (
    <>
      <BrowserRouter >
      <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Portfolio' element={<Protfolio/>}/>
            <Route path='/Servises' element={<Services/>}/>
            <Route path='/About_Us' element={<About_Us/>}/>
            <Route path='/Articles' element={<Articles/>}/>
            <Route path='/Contact_Us' element={<Contact_us/>}/>
            <Route path='/consultation' element={<Consultation/>}/>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
