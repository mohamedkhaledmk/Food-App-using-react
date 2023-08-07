import React from "react";
import { data } from "../data/data";
import { useState } from "react";
const Food = () => {
  const [foods, setFoods] = useState(data);

  const filterType = (category) => {
    setFoods(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  const filterPrice = (price) => {
    setFoods(
      data.filter((item) => {
        return item.price === price;
      })
    );
  };
  return (
    <div>
      <div className="m-auto px-4 py-12 max-w-[1640px]">
        <h1 className="text-orange-600 text-center font-bold text-5xl font-serif">
          Top Rated Menu Items
        </h1>
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="my-4 max-w-[700px]">
            {" "}
            <p className="font-bold text-gray-700 my-2">Filter Type</p>
            <div className=" flex gap-3 justify-between">
              <button
                className="text-orange-600 border-orange-600 border rounded-xl p-1 hover:bg-orange-600 hover:text-white"
                onClick={() => setFoods(data)}
              >
                All
              </button>
              <button
                className="text-orange-600 border-orange-600 border rounded-xl p-1 hover:bg-orange-600 hover:text-white"
                onClick={() => filterType(`burger`)}
              >
                Burgers
              </button>
              <button
                className="text-orange-600 border-orange-600 border rounded-xl p-1 hover:bg-orange-600 hover:text-white"
                onClick={() => filterType(`pizza`)}
              >
                Pizza
              </button>
              <button
                className="text-orange-600 border-orange-600 border rounded-xl p-1 hover:bg-orange-600 hover:text-white"
                onClick={() => filterType(`salad`)}
              >
                Salads
              </button>
              <button
                className="text-orange-600 border-orange-600 border rounded-xl p-1 hover:bg-orange-600 hover:text-white"
                onClick={() => filterType(`chicken`)}
              >
                Chicken
              </button>
            </div>
          </div>
          <div className="my-4 max-w-[500px]">
            {" "}
            <p className="font-bold text-gray-700 my-2">Filter Price</p>
            <div className=" flex gap-3 justify-between">
              <button
                className="text-orange-600 border-orange-600 border rounded-xl p-1 hover:bg-orange-600 hover:text-white"
                onClick={() => filterPrice(`$`)}
              >
                $
              </button>
              <button
                className="text-orange-600 border-orange-600 rounded-xl p-1 border hover:bg-orange-600 hover:text-white"
                onClick={() => filterPrice(`$$`)}
              >
                $$
              </button>
              <button
                className="text-orange-600 border-orange-600 border rounded-xl p-1  hover:bg-orange-600 hover:text-white"
                onClick={() => filterPrice(`$$$`)}
              >
                $$$
              </button>
              <button
                className="text-orange-600 border-orange-600 border rounded-xl p-1 hover:bg-orange-600 hover:text-white"
                onClick={() => filterPrice(`$$$$`)}
              >
                $$$$
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {" "}
        {foods.map((sandwich) => (
          <div
            id={sandwich.id}
            className="m-4 border rounded-xl shadow-xl hover:scale-105 hover:cursor-pointer duration-300 ease-in"
          >
            <img
              alt={sandwich.name}
              src={sandwich.image}
              className="w-full h-[200px] object-cover rounded-t-xl"
            />
            <div className="flex justify-between px-2 py-2">
              <h1 className="font-poppins">{sandwich.name}</h1>
              <p className="bg-orange-600 text-white rounded-full p-1">
                {sandwich.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;
