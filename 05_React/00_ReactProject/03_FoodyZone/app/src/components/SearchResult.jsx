import React from "react";
import { BASE_URL } from "../App";

const SearchResult = ({ data }) => {
  return (
    <div className="flex flex-wrap md:grid-rows-2 items-center justify-center gap-12 pt-20">
      {data?.map((food, index) => (
        <div key={index} className="flex gap-4 text-white max-w-[500px] items-center backdrop-blur-xs backdrop-brightness-70 p-5 rounded-xl ">
          <div className="w-1/2">
            <img src={`${BASE_URL}${food.image}`} alt="food img" />
          </div>

          <div className="pt-4 flex flex-col gap-4">
            <h1 className="text-2xl font-medium">{food.name}</h1>
            <p>{food.text}</p>

            <div className="flex w-full items-end justify-end">
              <button className="bg-red-500 text-white px-5 py-2 rounded">
                {`$${food.price.toFixed(2)}`}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchResult;
