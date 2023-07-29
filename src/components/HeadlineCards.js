import React from "react";

const HeadlineCards = () => {
  return (
    <div>
      <div className="grid md:grid-cols-3 gap-6 px-4 py-12 mx-auto max-w-[1460px]">
        <div className="relative rounded-xl">
          <div className=" flex flex-col justify-center items-center absolute w-full rounded-xl h-full max-h-[300px] bg-black/50  font-bold text-white ">
            <p className="">Sun's Out, BOGO's Out</p>
            <p className=" font-thin my-2">Through 8/26</p>
            <button className="bg-white w-[35%] text-black font-semibold rounded-md hover:bg-orange-600 hover:text-white border-2">
              Order Now
            </button>
          </div>
          <img
            className="object-cover w-full rounded-xl max-h-[300px] "
            src="https://images.unsplash.com/photo-1613769049987-b31b641f25b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGJyZWFrZmFzdHxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60"
          />
        </div>
        <div className="relative rounded-xl">
          <div className=" flex flex-col justify-center items-center absolute w-full rounded-xl h-full max-h-[300px] bg-black/50  font-bold text-white ">
            <p className="">New Restaurant</p>
            <p className=" font-thin my-2">Added Daily</p>
            <button className="bg-white w-[35%] text-black font-semibold rounded-md hover:bg-orange-600 hover:text-white border-2">
              Order Now
            </button>
          </div>
          <img
            className="object-cover w-full rounded-xl max-h-[300px] "
            src="https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJicXxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60"
          />
        </div>
        <div className="relative rounded-xl">
          <div className=" flex flex-col justify-center items-center absolute w-full rounded-xl h-full max-h-[300px] bg-black/50  font-bold text-white ">
            <p className="">We Deliver Desserts Too</p>
            <p className=" font-thin my-2">Tasty Treats</p>
            <button className="bg-white w-[35%] text-black font-semibold rounded-md hover:bg-orange-600 hover:text-white border-2">
              Order Now
            </button>
          </div>
          <img
            className="object-cover w-full rounded-xl max-h-[300px] "
            src="https://images.unsplash.com/photo-1559715745-e1b33a271c8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGRlc3NlcnR8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
          />
        </div>
      </div>
    </div>
  );
};

export default HeadlineCards;
