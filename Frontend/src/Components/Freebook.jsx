import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from 'axios'


import Card from './Card';

const Freebook = () => {
  const [book, setBook] = useState([])
  useEffect(() =>{
    const getBook= async() =>{
      try {
        const res = await axios.get("http://localhost:3000/book")
        const data = res.data.filter((data) => data.category === "Free")
          setBook(data)
        
      } catch (error) {
        console.log(error);
        
      }
    }
    getBook();
  },[])
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    
   
    
  return (
    <>
<div className="max-w-screen-2xl container mx-auto px-4 md:px-10 lg:px-20">
  <div>
    <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold pb-4 mt-6 md:mt-10 text-center md:text-left">
      Free Offered Courses
    </h1>
    <p className="text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed text-center md:text-left">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur
      provident quisquam quo commodi consequatur esse ab enim labore dolorem!
      Dolorum, voluptas repellendus. Assumenda architecto delectus quod sit
      voluptates distinctio iusto?
    </p>
  </div>
    <div>
    <Slider {...settings}>
      
        {book.map((item) =>(
          <Card item={item} key={item.id}/>
        ))}
        
      </Slider>
      </div>
    </div>
    </>
  )
}

export default Freebook
