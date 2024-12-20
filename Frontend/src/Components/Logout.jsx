import React from 'react'
import { useAuth } from '../context/AuthProvider'
import toast from 'react-hot-toast'

const Logout = () => {
  const[authUser, setAuthUser] = useAuth()
  const handleLogout = () =>{
    try {
      setAuthUser({...authUser, user:null})
      localStorage.removeItem("User")
      toast.success("Logout Successfully")
      
      setTimeout(()=>{
        window.location.reload()
      },2000)

    } 
    catch (error) {
      toast.error("Error: " + error.message)
    }
  }
  return (
    <div>
      <button className='px-2 py-1 text-white bg-red-500 rounded-md cursor-pointer'
      onClick={handleLogout}
      >Logout</button>
    </div>
  )
}

export default Logout
