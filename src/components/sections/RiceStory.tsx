import React from "react";
import SectionTitle from "./section-title";

const RiceStory = () => {
  return (
    <div className="p-10">
      <SectionTitle
        subtitle="Truly Indian"
        sectionClasses="mx-auto max-w-xl text-center mb-12"
        titleClasses="mb-3 text-center "
        subtitleClasses="text-md font-large "
      >
        Our Roots
      </SectionTitle>

      <div className="relative mx-[5%] flex flex-col gap-1 rounded-xl p-6 shadow-sm md:flex-row lg:mx-[10%]">
        <div className="flex items-center justify-center md:w-1/2  lg:h-[90vh] ">
          <img
            src="https://img.freepik.com/free-photo/young-lady-covered-by-red-jacket-with-green-field_181624-29480.jpg?t=st=1716364119~exp=1716367719~hmac=63945a30c0ee8895283ad98ad46dcc576f3bdbbec3b613148aef6afd0490d063&w=740"
            alt="Promotional Product"
            className="h-full w-full  rounded-lg object-cover"
          />
        </div>
        <div className="relative z-10 h-auto  rounded-lg bg-[#ffd9a191] p-5 md:w-1/2 lg:p-10 lg:px-16 lg:py-20 ">
          <h1 className="mb-4 font-Caveat text-4xl font-bold">
            Rice: The Essence of India's Heritage
          </h1>
          <p className="mb-6 text-lg text-[#000]">
            Nestled in the verdant fields of India, each grain of rice emerges
            as a symbol of our enduring heritage and agricultural prowess.
            Cultivated through centuries-old traditions, rice not only sustains
            our bodies but also intertwines with our cultural identity. From
            intricate rituals to familial recipes passed down through
            generations, rice embodies the very essence of our collective
            history and nourishes the soul of our nation. Celebrate the
            resilience and abundance of our land, where every harvest whispers
            tales of resilience, unity, and the timeless bond between humanity
            and nature.
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
