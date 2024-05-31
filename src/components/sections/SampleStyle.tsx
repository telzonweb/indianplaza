import React from "react";
import SectionTitle from "./section-title";

export const SampleStyle = () => {
  return (
    <div className="lg:p-10">
      <SectionTitle
        subtitle="A Spice with a Rich Heritage"
        sectionClasses="mx-auto max-w-xl text-center mb-12"
        titleClasses="mb-3 text-center "
        subtitleClasses="text-md font-large "
      >
        The Essence of Cardamom
      </SectionTitle>

      <div className="relative mx-[5%] flex flex-col gap-1 rounded-xl shadow-sm md:flex-row lg:mx-[7%] lg:p-6">
        <div className="relative self-center rounded-2xl bg-[#ffd9a1] p-5 shadow-lg md:w-1/2 lg:mr-[-40px]  lg:px-10 lg:py-8">
          <h1 className="mb-4 font-Libre text-3xl font-bold">
            Cardamom: The Jewel of India's Heritage
          </h1>
          <p className="my-6 font-satisfy text-lg text-[#000]">
            {/* From the lush forests of India, cardamom shines as the "Queen of
            Spices." Treasured for centuries, its aromatic pods enrich our
            cuisine and traditions. From Ayurvedic practices to culinary
            delights, cardamom embodies health and flavor, encapsulating the
            elegance and depth of India's heritage with its timeless allure. */}
            From the lush forests of India, cardamom, the "Queen of Spices," has
            been treasured for centuries. Its aromatic pods enrich our cuisine
            and traditions, from Ayurvedic practices to culinary delights.
            Cardamom embodies health and flavor, capturing the elegance and
            depth of India's heritage with its timeless allure and unique taste.
          </p>

          {/* <button className=" hover:bg-green-700 bg-green-800 rounded px-4 py-2 text-white">
          Find Your Local Store
        </button> */}
        </div>
        <div className="flex items-center justify-center md:w-1/2  lg:h-[80vh] ">
          {/* <img
            src="https://img.freepik.com/free-photo/flat-lay-bowl-with-seeds_23-2148917702.jpg?t=st=1716458947~exp=1716462547~hmac=64efc2cedcb2b1b5cbd253e6afb79ffdfd5e96e679bcfa3810be9737d4794730&w=740"
            className="h-full w-full  rounded-lg object-cover"
          /> */}
          <img
            src="/mainImages/cardamom.jpg"
            className="h-full w-full  rounded-xl object-cover"
          />
        </div>
      </div>
    </div>
  );
};
