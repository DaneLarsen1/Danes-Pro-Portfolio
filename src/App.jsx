import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Container from 'react-bootstrap/Container'

function App() {

  return (
   <Container className='main' variant="dark" style={{width: '100%'}}>
    <Header/>
    <Outlet/>
    <Footer/>
   </Container>
  )
}

export default App
