import React from "react";
import SectionTitle from "./section-title";

const CuminStory = () => {
  return (
    <div className="lg:p-10">
      <SectionTitle
        subtitle="Taste, Tradition, and Wellness"
        sectionClasses="mx-auto  max-w-xl text-center "
        titleClasses="mb-3 text-center "
        subtitleClasses="text-md font-large "
      >
        Exploring Cumin
      </SectionTitle>
      <div className="relative mx-[5%] flex flex-col gap-1 rounded-xl shadow-sm md:flex-row lg:mx-[7%] lg:p-6">
        <div className="relative z-10 h-auto  rounded-lg bg-[#ffd9a191] p-5 md:w-1/2 lg:p-10 lg:px-16 lg:py-20 ">
          <h1 className="mb-4 font-Libre text-3xl font-bold">
            Cumin: The Spice of India's Legacy
          </h1>
          <p className=" mb-6 font-satisfy text-lg text-[#000]">
            From the heart of India's vibrant fields, cumin seeds capture the
            essence of our rich heritage. Infusing flavor into every dish, these
            tiny seeds carry centuries of tradition, connecting past and
            present. Each seed tells a story of ancient culinary artistry and
            medicinal wisdom, integral to our culture. Celebrate the spice that
            embodies the warmth, depth, and richness of Indian heritage, uniting
            generations through its unmistakable aroma and taste.
          </p>

          {/* <button className=" hover:bg-green-700 bg-green-800 rounded px-4 py-2 text-white">
          Find Your Local Store
        </button> */}
        </div>
        <div className="flex items-center justify-center md:w-1/2  lg:h-[90vh] ">
          {/* <img
            src="https://img.freepik.com/free-photo/seeds-jar-arrangement_23-2148917706.jpg?t=st=1716359355~exp=1716362955~hmac=b8c8e39e66dde4e3225b0808eaffc710d24565ffbc4693d6f95e60f426cd5bda&w=360"
            alt="Promotional Product"
            className="h-full w-full  rounded-lg object-cover"
          /> */}
          <img
            src="/mainImages/cumin.jpg"
            alt="Promotional Product"
            className="h-full w-full  rounded-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default CuminStory;
