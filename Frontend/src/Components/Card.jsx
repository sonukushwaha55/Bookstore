import React from "react";

const Card = ({ item }) => {

  return (
    <>
      <div className="mt-4 md:mt-4 my-3 p-4 ">
        <div className="card bg-base-100 w-92 h-[500px] shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
          <figure>
            <img src={item.image} alt="img" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">${item.price}</div>
              <div className="cursor-pointer rounded-full border border-zinc-300 hover:bg-pink-500 hover:text-white duration-200 px-2 py-1">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
