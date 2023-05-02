import { React, useState } from 'react'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import Layout from './Layout'
import './App.css'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={
            <HomePage   />
        }>       
        </Route>
        <Route path='/login' element={
          <LoginPage/>
        }></Route>
        <Route path='/register' element={
          <RegisterPage/>
        }></Route>
      </Route>
      
    </Routes>
    
  )
}

export default App
