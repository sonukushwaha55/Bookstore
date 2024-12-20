import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Login from '../Components/Login'
import {useForm} from 'react-hook-form'
import axios from "axios"
import toast from 'react-hot-toast'

const Signup = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const from = location.state?.from?.pathname || "/"
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password
    };
await axios.post("http://localhost:3000/user/signup", userInfo)
.then((res) =>{
  console.log(res.data);
  if(res.data){
    toast.success('signup successfully');
   navigate(from, {replace: true});
  }
  localStorage.setItem("User", JSON.stringify(res.data.user))
})
.catch((err) =>{
 if(err.response){
  console.log(err);
  toast.error("Error: " +err.response.data.message);
}
});
   
  }
  return (
    <>
      <div className=" h-screen flex justify-center items-center">
      <div className='w-[600px]' >
  <div className="modal-box">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
  
      <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
    <h3 className="font-bold text-lg">Signup</h3>
    <div className='mt-3 space-y-2'>
        <span >Name</span>
        <br />

        <input  type="text" {...register("fullname", { required: true })} placeholder='Enter your fullname' className='w-80 px-3 py-1 outline-none border rounded-md'  />
        <br />
        {errors.name && <span className='text-sm text-red-500'>This field is required</span>}
    </div>
    <div className='mt-3 space-y-2'>
        <span >Email</span>
        <br />
      
        <input   {...register("email", { required: true })} type="email" placeholder='Enter your email' className='w-80 px-3 py-1 outline-none border rounded-md' />
        <br />
        {errors.name && <span className='text-sm text-red-500'>This field is required</span>}
    </div>
    <div className='mt-3 space-y-2'>
    <span >Password</span>
        <br />
        <input type="password" placeholder='Enter your password' className='w-80 px-3 py-1 outline-none border rounded-md' 
        {...register("password", { required: true })} />
        <br />
 {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
    </div>
    <div className='mt-5 flex justify-around text-lg'>
        <button className='bg-pink-500 text-white px-2 py-1 rounded-md'>Signup</button>
        <div>
        <span className='text-zinc-500 '>Already have account? </span>
         <button  className='text-blue-500 underline' 
          onClick={()=> document.getElementById("my_modal_3").showModal()}>Login</button>
        </div>
    </div>
    </form>
          <Login/>  
  </div>
</div>
      </div>
    </>
  )
}

export default Signup