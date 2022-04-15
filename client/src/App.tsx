import { useState } from 'react'
import logo from './logo.svg'
import Container from '@mui/material/Container';
import './App.css'
import GoogleLoginComp from './components/Google/googleLogin';
import Navbar from "./components/Navbar/Navbar"
import Category from "./components/Category/Category"

function App() {

  return (
    <div className="App">  
      <Navbar />
      <Category />
    </div>
  )
}

export default App
