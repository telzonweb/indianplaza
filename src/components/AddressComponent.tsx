// import React from 'react'

// const AddressComponent = () => {
//   return (
//     <div className="flex flex-col justify-center items-center bg-gray-100 h-full pt-5">
//       <h1 className="text-3xl font-bold mb-3">Our Locations</h1>
//       <div className="flex justify-center items-center max-w-4xl">
//       <div className="flex justify-between w-full md:w-1/2 lg:w-1/4 m-4">
//         <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transform hover:scale-105 transition-all duration-300 h-full">
//         <h2 className="font-bold mb-2 text-lg">Enfield</h2>
//           <p>431-435 Main North Rd</p>
//           <p>ENFIELD, SA 5085</p>
//             <a href="https://www.google.co.in/maps/" target="_blank" rel="noopener noreferrer">
//              <button className="mt-4 text-center bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-all duration-300">
//               Get Directions
//             </button>
//             </a>
//           </div>
//         </div>

//         <div className="flex justify-between w-full md:w-1/2 lg:w-1/4 m-4">
//           <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transform hover:scale-105 transition-all duration-300 h-full">
//             <h2 className="font-bold mb-2 text-lg">Firle</h2>
//             <p>1/161 Glynburn</p>
//             <p>Rd</p>
//             <p>FIRLE, SA 5070</p>
//             <a href="https://www.google.co.in/maps/" target="_blank" rel="noopener noreferrer">
//              <button className="mt-4 text-center bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-all duration-300">
//               Get Directions
//             </button>
//             </a>
//           </div>
//         </div>
//         <div className="flex justify-between w-full md:w-1/2 lg:w-1/4 m-4 lg:order-4">
//           <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transform hover:scale-105 transition-all duration-300 h-full">
//             <h2 className="font-bold mb-2 text-lg">Plympton</h2>
//             <p>Indian Traders</p>
//             <p>345 Anzac Hwy</p>
//             <p>PLYMPTON, SA 5038</p>
//             <a href="https://www.google.co.in/maps/" target="_blank" rel="noopener noreferrer">
//              <button className="mt-4 text-center bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-all duration-300">
//               Get Directions
//             </button>
//             </a>
//           </div>
//         </div>
//         <div className="flex justify-between w-full md:w-1/2 lg:w-1/4 m-4">
//           <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transform hover:scale-105 transition-all duration-300 h-full">
//             <h2 className="font-bold mb-2 text-lg">Torrensville</h2>
//             <p>224 Henley Beach Rd</p>
//             <p>TORRENSVILLE, 5031</p>
//             <a href="https://www.google.co.in/maps/" target="_blank" rel="noopener noreferrer">
//              <button className="mt-4 text-center bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-all duration-300">
//               Get Directions
//             </button>
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddressComponent;

import React from "react";
import SectionTitle from "./sections/section-title";

// Address data
export const SectionAddresses = [
  {
    title: "Enfield",
    address: "431-435 Main North Rd ENFIELD, SA 5085",
    buttonText: "Get Directions",
    buttonLink: "https://www.google.co.in/maps",
  },
  {
    title: "Firle",
    address: "1/161 Glynburn Rd FIRLE, SA 5070",
    buttonText: "Get Directions",
    buttonLink: "https://www.google.co.in/maps",
  },
  {
    title: "Torrensville",
    address: "224 Henley Beach Rd TORRENSVILLE, 5031",
    buttonText: "Get Directions",
    buttonLink: "https://www.google.co.in/maps",
  },
  {
    title: "Plympton",
    address: "Indian Traders 345 Anzac Hwy PLYMPTON, SA 5038",
    buttonText: "Get Directions",
    buttonLink: "https://www.google.co.in/maps",
  },
];

const AddressComponent = () => {
  return (
    <section className="from-[#EBE4FA]/26 to-muted/26 my-10 overflow-hidden bg-gradient-to-b py-20 dark:bg-slate-900 dark:bg-none lg:py-24">
      <div className="container relative overflow-hidden xl:left-[calc((100vw-1312px)/4)] xl:max-w-[calc(1312px+((100vw-1312px)/2))] xl:pr-[calc((100vw-1280px)/2)]">
        <SectionTitle
          subtitle="Explore Our Stores"
          sectionClasses="mx-auto max-w-xl text-center mb-12"
          titleClasses="mb-3 text-center"
          subtitleClasses="text-md font-medium"
        >
          Visit Us
        </SectionTitle>
        <div className="my-10 grid grid-cols-1 gap-8 text-center md:grid-cols-2 lg:grid-cols-4">
          {SectionAddresses.map((address, index) => (
            <div
              key={index}
              className="rounded-lg border bg-white p-6 font-Caveat text-lg font-bold shadow-lg dark:bg-gray-800"
            >
              <p className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
                {address.title}
              </p>
              <p className="mb-4 text-lg font-medium text-gray-900 dark:text-white">
                {address.address}
              </p>
              <a
                href={address.buttonLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-md bg-red-600 px-6 py-2 text-white hover:bg-blue-600"
              >
                {address.buttonText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AddressComponent;
