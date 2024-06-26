import React from "react";
import SectionTitle from "./section-title";

const RiceStory = () => {
  return (
    <div className="lg:p-10">
      <SectionTitle
        subtitle=" Exploring the World of Rice"
        sectionClasses="mx-auto max-w-xl text-center mb-12"
        titleClasses="mb-3 text-center "
        subtitleClasses="text-md font-large "
      >
        The Versatile Grain
      </SectionTitle>

      <div className="relative mx-[5%] flex flex-col gap-1 rounded-xl shadow-sm md:flex-row lg:mx-[7%] lg:p-6">
        <div className="flex items-center justify-center md:w-1/2  lg:h-[80vh] ">
          {/* <img
            src="https://img.freepik.com/free-photo/high-angle-hand-holding-bowl-with-rice-grains_23-2149359496.jpg?t=st=1716458664~exp=1716462264~hmac=687ed4533cb274758b1497d22e240caafe4bf5fbde03dd4da5ccf631f848cc12&w=360"
            alt="Promotional Product"
            className="h-full w-full  rounded-lg object-cover"
          /> */}
          <img
            src="/mainImages/rice.jpg"
            alt="Promotional Product"
            className="h-full w-full  rounded-xl object-cover"
          />
        </div>
        <div className="relative self-center rounded-2xl bg-[#ffd9a1] p-5 shadow-lg md:w-1/2 lg:ml-[-40px]  lg:px-10 lg:py-8 ">
          <h1 className="mb-4 font-Libre text-3xl font-bold">
            Rice: The Essence of India's Heritage
          </h1>
          <p className="mb-6 font-satisfy text-lg text-[#000]">
            Nestled in India's green fields, each grain of rice symbolizes our
            enduring heritage and agricultural skill. Cultivated through
            centuries-old traditions, rice sustains our bodies and connects with
            our cultural identity. From rituals to family recipes, rice embodies
            our history and nourishes our nation. Celebrate the resilience and
            abundance of our land, where every harvest tells tales of unity and
            the bond between humanity and nature.
          </p>

          {/* <button className=" hover:bg-green-700 bg-green-800 rounded px-4 py-2 text-white">
          Find Your Local Store
        </button> */}
        </div>
      </div>
    </div>
  );
};

export default RiceStory;
