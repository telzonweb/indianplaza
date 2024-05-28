import React from "react";
import "@/components/style.css"; // Assuming you have a separate CSS file

const Paragraph = () => {
  return (
    <section className="custom-section mt-10 pl-12 pr-10 pt-12 text-lg">
      <div className="relative mx-[5%] flex flex-col gap-1 rounded-xl shadow-sm md:flex-row lg:mx-[7%] lg:p-6">
        <div className="flex items-center justify-center md:w-1/2  lg:h-[90vh] ">
          <img
            src="mainImages/about/basket.jpg"
            alt="about"
            className="h-auto w-full"
            // style={{ width: "570px", height: "450px" }}
          />
        </div>
        <div className="relative z-10 h-auto  rounded-lg bg-[#ffd9a191] p-5 md:w-1/2 lg:p-10 lg:px-16 lg:py-20 ">
          <h1 className="mb-4 font-Libre text-3xl font-bold">
            Indian Plaza Grocery Store
          </h1>
          <p className="mb-6 font-satisfy text-lg text-[#000]">
            Welcome to our Indian grocery store, where every shelf holds more
            than just ingredients. it cradles stories of home, whispers of
            nostalgia, and the warmth of tradition. With each spice jar, every
            grain of rice, and the scent of freshly ground masalas, we invite
            you to embark on a journey through the flavors of India.Step into
            our Indian grocery store and feel the warmth of tradition envelop
            you. Our shelves aren't just stocked with spices and grains; they're
            laden with memories of home-cooked meals, shared laughter, and
            cherished family gatherings. From the aroma of freshly ground
            masalas to the vibrant colors of assorted lentils, each aisle tells
            a story of heritage and flavor.
          </p>

          {/* <button className=" hover:bg-green-700 bg-green-800 rounded px-4 py-2 text-white">
          Find Your Local Store
        </button> */}
        </div>
      </div>
    </section>
  );
};

export default Paragraph;
