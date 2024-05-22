import React from "react";

const sectionImgStory = () => {
  return (
    <div className="relative mx-[5%] flex flex-col p-6 md:flex-row lg:mx-[10%]">
      <div className="relative z-10 h-auto bg-[#F8F7F5] p-10 md:w-1/2 lg:px-16 lg:py-20 ">
        <h1 className="mb-4 text-4xl font-bold text-black">
          Cumin: The Spice of India's Legacy
        </h1>
        <p className="mb-6 text-lg">
          From the fertile fields of India, each grain of rice carries a story
          of tradition and sustenance. Rooted in ancient practices, rice
          nourishes our bodies and our heritage, bridging generations with every
          harvest. Each grain is a testament to our cultural roots, embodying
          the essence of life and tradition. Celebrate the staple that unites
          us, reflecting the resilience and richness of India's agricultural
          legacy in every mouthful.
        </p>
        <p className="mb-4 ">
          Celebrate the staple that unites us, reflecting the resilience and
          richness of India's agricultural legacy in every mouthful.
        </p>
        {/* <button className=" hover:bg-green-700 bg-green-800 rounded px-4 py-2 text-white">
          Find Your Local Store
        </button> */}
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
