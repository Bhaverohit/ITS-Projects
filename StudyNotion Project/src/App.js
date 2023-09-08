import React, { useState } from 'react'
import "./App.css"
import Navbar from "./Components/Navbar"
import PrivateRoute from "./Components/PrivateRoute"
import { Route, Routes } from 'react-router-dom'
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <div className='w-screen h-screen bg-richblack-900 flex flex-col'>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path='/signup' element={<Signup setIsLoggedIn={setIsLoggedIn} />} />
        <Route path='/dashboard' element={
          <PrivateRoute isLoggedIn={isLoggedIn}>
            <Dashboard />
          </PrivateRoute>
        }
        />
      </Routes>

    </div>
  )
}

export default App