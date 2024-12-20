import React from 'react'
import {Link} from 'react-router-dom'
import {useForm} from 'react-hook-form'
import axios from 'axios'
import toast from 'react-hot-toast'

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = async(data) => {
    const userInfo = {
      email: data.email,
      password: data.password
    };
await axios.post("http://localhost:3000/user/login", userInfo)
.then((res) =>{
  console.log(res.data);
  if(res.data){
    toast.success('loggedin successfully');
    document.getElementById("my_modal_3").close()
setTimeout(()=>{
  window.location.reload()
},2000)
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
    <div>

<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
  
      <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
    <h3 className="font-bold text-lg">Login</h3>
    <div className='mt-3 space-y-2'>
        <span >Email</span>
        <br />
        <input type="email" placeholder='Enter your email' className='w-80 px-3 py-1 outline-none border rounded-md'
         {...register("email", { required: true })} />
         <br />
 {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
    </div>
    <div className='mt-3 space-y-2'>
    <span >Password</span>
        <br />
        <input type="password" placeholder='Enter your password' className='w-80 px-3 py-1 outline-none border rounded-md'
        {...register("password", { required: true })} />
        <br />
 {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
    </div>
    <div className='mt-5 flex justify-around'>
        <button className='bg-pink-500 text-white px-2 py-1 rounded-md'>Login</button>
        <div>
        <span className='text-zinc-500'>Not registered? </span>
         <Link to='/signup' className='text-blue-500 underline' >Signup</Link>
        </div>
    </div>
    </form>
    
  </div>
</dialog>
    </div>
  )
}

export default Login