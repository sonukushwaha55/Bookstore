import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'
import {Link} from 'react-router-dom'
import axios from 'axios'

const Course = () => {
    const [book, setBook] = useState([])
    useEffect(() =>{
      const getBook= async() =>{
        try {
          const res = await axios.get("http://localhost:3000/book")
          setBook(res.data)
          
        } catch (error) {
          console.log(error);
          
        }
      }
      getBook();
    },[])
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 '>
      <div className='pt-5 md:pt-32 items-center justify-center text-center '>
      <h1 className='text-2xl md:text-4xl'>We're delighted to have you <span className='text-pink-500'>Here! :)</span></h1>
      <p className='mt-12'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur, debitis. Fugit nam inventore laborum soluta quibusdam laboriosam adipisci ratione sint nemo minima tenetur odit quo, mollitia deleniti quia! Officia dolore assumenda soluta esse maiores facere distinctio iste reiciendis, omnis quibusdam debitis dignissimos expedita, quae aliquam nihil asperiores reprehenderit!</p>
      <Link to="/">
      <button className='bg-pink-500 text-white text-2xl rounded-md hover:bg-pink-700 duration-300 px-3 py-1 mt-6'>Back</button>
      </Link>

      </div>      
      <div className='mt-5 grid grid-cols-1 md:grid-cols-4'>
        {
          book.map((item) =>(
            <Card key={item.id} item={item} />
          ))
        }
      </div>
  </div>
    </>
  )
}

export default Course
