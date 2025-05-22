import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Contacts from './pages/Contacts'
import Message from './pages/Message'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path = "/" element={<Home />}></Route>
        <Route path = "/about" element={<About/>}></Route>
        <Route path = "/contacts" element={<Contacts/>}></Route>
        <Route path = "/message" element={<Message></Message>}></Route>
        <Route path = "/Login" element={<Login></Login>}></Route>
        <Route path = "/Register" element={<Register></Register>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
