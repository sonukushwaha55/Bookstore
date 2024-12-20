import React from "react";
import banner from "/banner.png";

const Banner = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto h-[600px] flex flex-col md:flex-row items-center justify-between md:px-20 px-4 my-10">
        <div className="order-2 md:order-1 w-full md:w-1/2 h-full dark:bg-slate-900 dark:text-white">
          <h1 className="text-[40px] tracking-tight mt-10 md:mt-32 leading-none font-semibold">
            Hello, Welcomes here to learn something{" "}
            <span className="text-pink-500">new everyday!!!</span>
          </h1>
          <p className="mt-8 md:mt-10 text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur, vero. Harum, dolores beatae. Magni mollitia fugiat
            nesciunt harum provident, aut incidunt molestiae necessitatibus
          </p>
          <label className="input input-bordered flex items-center gap-2 mt-20 md:mt-10 dark:bg-gray-900 dark:border-white dark:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
             
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input
              type="text"
              placeholder="Email"
              className="w-full outline-none focus:outline-none focus:shadow-none  "
            />
          </label>
          <button className="btn btn-secondary mt-6">Get Started</button>
        </div>

        <div className="order-1 w-full md:w-1/2 h-full flex items-center justify-center">
          <img className="w-92 h-92" src={banner} alt="" />
        </div>
      </div>
    </>
  );
};

export default Banner;
