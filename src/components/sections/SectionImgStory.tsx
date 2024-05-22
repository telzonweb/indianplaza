import React from "react";

const sectionImgStory = () => {
  return (
    <div className="relative mx-[5%] flex flex-col p-6 md:flex-row lg:mx-[10%]">
      <div className="relative z-10 h-auto bg-[#F8F7F5] p-10 md:w-1/2 lg:px-16 lg:py-20 ">
        <h1 className="mb-4 text-4xl font-bold">
          Save on products that do more, this May
        </h1>
        <p className="mb-6 text-lg">
          Now's the time to stock your fridge with products that support gut
          health, with up to 20% off our top picks. Celebrate our beautiful
          planet with wallet-happy organic finds, in store and on Deliveroo.*
        </p>
        <p className="mb-4 text-sm">
          *terms and conditions apply. See in store for details.
        </p>
        <button className=" hover:bg-green-700 bg-green-800 rounded px-4 py-2 text-white">
          Find Your Local Store
        </button>
      </div>
      <div className="flex h-[90vh] items-center justify-center  md:w-1/2 ">
        <img
          src="https://img.freepik.com/free-photo/seeds-jar-arrangement_23-2148917706.jpg?t=st=1716359355~exp=1716362955~hmac=b8c8e39e66dde4e3225b0808eaffc710d24565ffbc4693d6f95e60f426cd5bda&w=360"
          alt="Promotional Product"
          className="h-full w-full  rounded-lg object-cover"
        />
      </div>
    </div>
  );
};

export default sectionImgStory;
