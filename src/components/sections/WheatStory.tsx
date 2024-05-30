import React from "react";
import SectionTitle from "./section-title";

export const WheatStory = () => {
  return (
    <div className="lg:p-10">
      <SectionTitle
        subtitle="Exploring an Essential Crop"
        sectionClasses="mx-auto max-w-xl text-center mb-12"
        titleClasses="mb-3 text-center "
        subtitleClasses="text-md font-large "
      >
        Wheat Wonders
      </SectionTitle>

      <div className="relative mx-[5%] flex flex-col gap-1 rounded-xl shadow-sm md:flex-row lg:mx-[7%] lg:p-6">
        <div className="flex items-center justify-center md:w-1/2  lg:h-[70vh] ">
          {/* <img
            src="https://img.freepik.com/free-photo/sunset-golden-wheat-field-nature-bountiful-harvest-generated-by-artificial-intelligence_25030-60668.jpg?t=st=1716796861~exp=1716800461~hmac=cb547bbfc43ed4715fdba186c5890a726d2d7d779d149d4e079d776ae9e111a4&w=826"
            className="h-full w-full  rounded-lg object-cover"
          /> */}
          <img
            src="/mainImages/wheat.jpg"
            className="h-full w-full  rounded-lg object-cover"
          />
        </div>
        <div className="lg:py-15 relative z-10  h-auto rounded-lg bg-[#ffd9a191]  p-5 md:w-1/2 lg:p-10 lg:px-16 ">
          <h1 className="mb-4 font-Libre text-3xl font-bold">
            Wheat: The Golden Harvest of India's Heart
          </h1>
          <p className="mb-6 font-satisfy text-lg text-[#000]">
            Grown in the fertile fields of India, wheat represents the strength
            and perseverance of our farmers. This staple grain has nourished
            generations, embodying our agricultural heritage. Every grain of
            wheat tells a story of dedication and hard work, rooted in the soil
            of our ancestors. Celebrate wheat, a symbol of India's prosperity
            and the heart of our farmers' legacy, bringing sustenance and unity
            to our nation.
          </p>

          {/* <button className=" hover:bg-green-700 bg-green-800 rounded px-4 py-2 text-white">
          Find Your Local Store
        </button> */}
        </div>
      </div>
    </div>
  );
};
