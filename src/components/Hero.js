import React from "react";

const Hero = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 ">
      <div className="relative max-h-[600px]">
        <div className=" absolute flex flex-col justify-center h-full w-full bg-black/40 ">
          {" "}
          <h1 className="text-white font-bold px-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            The <span className="text-orange-400 ">Best</span>
          </h1>
          <h1 className="text-white font-bold px-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            Food <span className="text-orange-400">Delivered</span>
          </h1>
        </div>
        <img
          alt="Sandwich"
          src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          className="max-h-[600px] w-full object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
