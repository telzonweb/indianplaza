import React from "react";
import SectionTitle from "./section-title";

const AboutPara = () => {
  return (
    <div className="lg:p-10">
      <SectionTitle
        subtitle="Where Tradition Meets Service"
        sectionClasses="mx-auto  max-w-xl text-center "
        titleClasses="mb-3 text-center "
        subtitleClasses="text-md font-large "
      >
        About Indian Plaza
      </SectionTitle>
      <div className="relative mx-[5%] flex flex-col gap-1 rounded-xl shadow-sm md:flex-row lg:mx-[7%] lg:p-6">
        <div className="relative self-center rounded-2xl bg-[#ffd9a1] p-5 shadow-lg md:w-1/2 lg:mr-[-40px]  lg:px-10 lg:py-8">
          <h1 className="mb-4 font-Libre text-3xl font-bold">Indian Plaza</h1>
          <p className=" mb-6 font-satisfy text-lg text-[#000]">
            Indian Plaza is a beloved grocery store chain in Australia,
            dedicated to bringing a slice of India to your doorstep.
            Specializing in authentic Indian groceries and products, we strive
            to fulfill the needs and nostalgia of the Indian community. With a
            deep-rooted commitment to quality and tradition, Indian Plaza
            ensures you feel connected to your homeland, offering everything
            from spices and snacks to daily essentials. Let us be your trusted
            partner in recreating the flavors and memories of India, right here
            in Australia.
          </p>

          {/* <button className=" hover:bg-green-700 bg-green-800 rounded px-4 py-2 text-white">
          Find Your Local Store
        </button> */}
        </div>
        <div className="flex items-center justify-center md:w-1/2  lg:h-[80vh] ">
          {/* <img
            src="https://img.freepik.com/free-photo/seeds-jar-arrangement_23-2148917706.jpg?t=st=1716359355~exp=1716362955~hmac=b8c8e39e66dde4e3225b0808eaffc710d24565ffbc4693d6f95e60f426cd5bda&w=360"
            alt="Promotional Product"
            className="h-full w-full  rounded-lg object-cover"
          /> */}
          <img
            src="/aboutimg/aboutImg.jpg"
            alt="Promotional Product"
            className="h-full w-full  rounded-xl object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutPara;
