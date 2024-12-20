import React from 'react'
import Home from './home/Home'
import Courses from './courses/courses'
import { Navigate, Route, Routes } from 'react-router-dom'
import  { Toaster } from 'react-hot-toast';
import Signup from './Components/Signup'
import { useAuth } from './context/AuthProvider';
const App = () => {
  const [authUser, setAuthUser] = useAuth()
  console.log(authUser)
  return (
  <>
  {/* <Home/>
  <Course/> */}
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/course' element={authUser ? <Courses/> : <Navigate to="/signup" />} />
    <Route path='/signup' element={<Signup/>} />
  </Routes>
  <Toaster />
  </>
  )
}

export default App