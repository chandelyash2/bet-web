import React from "react";

export const SportPlayLayout = () => {
  return (
    <div>
      <div className="relative">
        <div className="items-center flex w-full bg-secondary p-2 px-4 rounded-lg lg:before:content-[''] lg:before:absolute lg:before:right-0 lg:before:w-[55%] lg:before:top-0 lg:before:h-[100%] lg:before:bg-primary lg:before:rounded-r-lg font-bold">
          <div className="flex-[1.5]">
            <h1>ABD V ZYX</h1>
            <h2>Saturday, 9:00PM</h2>
          </div>
          <div className="hidden lg:grid flex-[1.5] z-[999]  grid-cols-2 lg:grid-cols-6">
            <span></span>
            <span></span>
            <span>Back</span>
            <span>Lay</span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <div className=" bg-white text-primary rounded-b-lg p-4 font-bold">
        <div className="flex">
          <div className="flex-[1.5]">
            <h1>ABD</h1>
          </div>
          <div className="flex-[1.5]  grid grid-cols-2 lg:grid-cols-6">
            <span className="hidden lg:flex">a</span>
            <span className="hidden lg:flex">a</span>
            <span>Back</span>
            <span>Lay</span>
            <span className="hidden lg:flex">a</span>
            <span className="hidden lg:flex">a</span>
          </div>
        </div>
        <hr className="m-2" />
        <div className="flex">
          <div className="flex-[1.5]">
            <h1>zyx</h1>
          </div>
          <div className="flex-[1.5] grid grid-cols-2 lg:grid-cols-6">
            <span className="hidden lg:flex">a</span>
            <span className="hidden lg:flex">a</span>
            <span>Back</span>
            <span>Lay</span>
            <span className="hidden lg:flex">a</span>
            <span className="hidden lg:flex">a</span>
          </div>
        </div>
      </div>
    </div>
  );
};
