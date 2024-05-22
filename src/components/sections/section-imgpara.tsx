// import React from "react";
// import "@/components/style.css"; // Assuming you have a separate CSS file

// const SectionImgPara = () => {
//   return (
//     <section className="pt-12 pl-20 pr-10 text-lg custom-section">
//       <div className="container mx-auto">
//         <div className="flex flex-col md:flex-row">
//           <div className="md:w-1/2 w-full custom-image md:mr-8 mb-8 md:mb-0">
//             <img
//               src="https://tse4.mm.bing.net/th?id=OIP.HsaRHc0Y0TH64YlNcLpN0wHaEh&pid=Api&P=0&h=180"
//               alt="about"
//               className="w-full h-auto rounded-lg shadow-lg transform transition duration-500 hover:scale-105 custom-image-border"
//               style={{ maxWidth: "570px", maxHeight: "500px" }}
//             />
//           </div>

//           <div className="md:w-1/2 w-full custom-content flex flex-col justify-center">
//             <h2 className="text-3xl font-bold mb-6 text-gray-800">
//               The Power of Jeera (Cumin Seed)
//             </h2>
//             <p className="mb-6 text-gray-700 leading-relaxed">
//               Jeera or cumin seed is an ancient Indian spice, which has been
//               used since the Vedic times. Ayurveda prescribes jeera as a remedy
//               for several health problems. So wise were our grannies that they
//               decided to add it to their spice box and use it in everyday
//               cooking, to ensure its sustained health benefits to the family.
//             </p>
//             <p className="text-gray-700 leading-relaxed">
//               Jeera or cumin seed is an ancient Indian spice, which has been
//               used since the Vedic times. Ayurveda prescribes jeera as a remedy
//               for several health problems. So wise were our grannies that they
//               decided to add it to their spice box and use it in everyday
//               cooking, to ensure its sustained health benefits to the family.
//             </p>
//           </div>
//         </div>
//         <div className="flex flex-col md:flex-row">
//           <div className="md:w-1/2 w-full custom-content flex flex-col justify-center">
//             <h2 className="text-3xl font-bold mb-6 text-gray-800">
//               The Power of Jeera (Cumin Seed)
//             </h2>
//             <p className="mb-6 text-gray-700 leading-relaxed">
//               Jeera or cumin seed is an ancient Indian spice, which has been
//               used since the Vedic times. Ayurveda prescribes jeera as a remedy
//               for several health problems. So wise were our grannies that they
//               decided to add it to their spice box and use it in everyday
//               cooking, to ensure its sustained health benefits to the family.
//             </p>
//             <p className="text-gray-700 leading-relaxed">
//               Jeera or cumin seed is an ancient Indian spice, which has been
//               used since the Vedic times. Ayurveda prescribes jeera as a remedy
//               for several health problems. So wise were our grannies that they
//               decided to add it to their spice box and use it in everyday
//               cooking, to ensure its sustained health benefits to the family.
//             </p>
//           </div>
//           <div className="md:w-1/2 w-full custom-image md:mr-8 mb-8 md:mb-0">
//             <img
//               src="https://tse4.mm.bing.net/th?id=OIP.HsaRHc0Y0TH64YlNcLpN0wHaEh&pid=Api&P=0&h=180"
//               alt="about"
//               className="w-full h-auto rounded-lg shadow-lg transform transition duration-500 hover:scale-105 custom-image-border"
//               style={{ maxWidth: "570px", maxHeight: "500px" }}
//             />
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default SectionImgPara;

import React from "react";
import "@/components/style.css"; // Assuming you have a separate CSS file

const SectionImgPara = () => {
  return (
    <section className="pt-12 pb-12 pl-20 pr-20 text-lg custom-section">
      <div className="container mx-auto">
        {/* <div className="flex flex-col md:flex-row mb-6">
        <div className="md:w-1/2 w-full custom-image md:mr-0 mb-3 md:mb-3">
          <img
            src="https://tse4.mm.bing.net/th?id=OIP.HsaRHc0Y0TH64YlNcLpN0wHaEh&pid=Api&P=0&h=180"
            alt="about"
            className="w-full h-auto rounded-lg shadow-lg transform transition duration-500 hover:scale-105 custom-image-border"
            style={{ maxHeight: "600px", height: "700px", maxWidth: "680px" }}
           />
        </div>
          <div className="md:w-1/2 w-full custom-content flex flex-col justify-center bg-gray-100 p-6 border border-gray-300 rounded-lg shadow-lg">
  <h2 className="text-3xl font-bold mb-6 text-gray-800">
    The Power of Jeera (Cumin Seed)
  </h2>
  <p className="mb-6 text-gray-700 leading-relaxed">
    Jeera or cumin seed is an ancient Indian spice, which has been
    used since the Vedic times. Ayurveda prescribes jeera as a remedy
    for several health problems. So wise were our grannies that they
    decided to add it to their spice box and use it in everyday
    cooking, to ensure its sustained health benefits to the family.
  </p>
  <p className="text-gray-700 leading-relaxed">
    Jeera or cumin seed is an ancient Indian spice, which has been
    used since the Vedic times. Ayurveda prescribes jeera as a remedy
    for several health problems. So wise were our grannies that they
    decided to add it to their spice box and use it in everyday
    cooking, to ensure its sustained health benefits to the family.
  </p>
</div>

        </div> */}
        <div className="flex flex-col md:flex-row mb-6">
  <div className="md:w-1/2 w-full custom-image md:mr-0 mb-3 md:mb-3 md:ml-4">
    <img
      src="https://tse4.mm.bing.net/th?id=OIP.HsaRHc0Y0TH64YlNcLpN0wHaEh&pid=Api&P=0&h=180"
      alt="about"
      className="w-full h-auto rounded-lg shadow-lg transform transition duration-500 hover:scale-105 custom-image-border"
    style={{maxHeight: "600px", height: "700px", maxWidth: "680px" }}
    />
  </div>
  <div className="md:w-1/2 w-full custom-content flex flex-col justify-center bg-gray-100 p-6 border border-gray-300 rounded-lg shadow-lg md:ml-0 ml-0">
    <h2 className="text-3xl font-bold mb-6 text-gray-800">
      The Power of Jeera (Cumin Seed)
    </h2>
    <p className="mb-6 text-gray-700 leading-relaxed">
      Jeera or cumin seed is an ancient Indian spice, which has been used since the Vedic times. Ayurveda prescribes jeera as a remedy for several health problems. So wise were our grannies that they decided to add it to their spice box and use it in everyday cooking, to ensure its sustained health benefits to the family.
    </p>
    <p className="text-gray-700 leading-relaxed">
      Jeera or cumin seed is an ancient Indian spice, which has been used since the Vedic times. Ayurveda prescribes jeera as a remedy for several health problems. So wise were our grannies that they decided to add it to their spice box and use it in everyday cooking, to ensure its sustained health benefits to the family.
    </p>
  </div>
</div>


<br/>
        {/* <div className="flex flex-col md:flex-row mb-8">
          <div className="md:w-1/2 w-full custom-content flex flex-col justify-center mt-20">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Salt (Sodium chloride)
            </h2>
            <p className="mb-6 text-gray-700 leading-relaxed">
            In common usage, salt is a mineral composed primarily of sodium chloride (NaCl). When used in food, especially in granulated form, it is more formally called table salt. In the form of a natural crystalline mineral, salt is also known as rock salt or halite. Salt is essential for life in general, and saltiness is one of the basic human tastes.
            </p>
            <p className="text-gray-700 leading-relaxed">
            In common usage, salt is a mineral composed primarily of sodium chloride (NaCl). When used in food, especially in granulated form, it is more formally called table salt. In the form of a natural crystalline mineral, salt is also known as rock salt or halite. Salt is essential for life in general, and saltiness is one of the basic human tastes.
            </p>
          </div>

          <div className="md:w-1/2 w-full custom-image md:ml-20 md:mt-20">
            <img
              src="https://www.canr.msu.edu/outreach/uploads/images/salt-6728600_1280.jpg?language_id=1"
              alt="about"
              className="w-full h-auto rounded-lg shadow-lg transform transition duration-500 hover:scale-105 custom-image-border"
              style={{ maxWidth: "570px", maxHeight: "500px" }}
            />
          </div>
        </div> */}
        <div className="flex flex-col md:flex-row mb-5  bg-gray-100">
    <div className="md:w-1/2 w-full custom-content flex flex-col justify-center mt-20 bg-white p-8 rounded-lg shadow-md ml-6">
        <h2 className="text-1xl font-bold mb-7 text-gray-800">
            Salt (Sodium chloride)
        </h2>
        <p className="mb-6  text-gray-700 leading-relaxed">
            In common usage, salt is a mineral composed primarily of sodium chloride (NaCl). When used in food, especially in granulated form, it is more formally called table salt. In the form of a natural crystalline mineral, salt is also known as rock salt or halite. Salt is essential for life in general, and saltiness is one of the basic human tastes.
        </p>
        <p className="text-gray-700 leading-relaxed">
            In common usage, salt is a mineral composed primarily of sodium chloride (NaCl). When used in food, especially in granulated form, it is more formally called table salt. In the form of a natural crystalline mineral, salt is also known as rock salt or halite. Salt is essential for life in general, and saltiness is one of the basic human tastes.
        </p>
    </div>
    <div className="md:w-1/2 w-full custom-image md:ml-20 md:mt-20">
        <img
            src="https://www.canr.msu.edu/outreach/uploads/images/salt-6728600_1280.jpg?language_id=1"
            alt="about"
            className="w-full h-auto rounded-lg shadow-lg transform transition duration-500 hover:scale-105 custom-image-border"
            style={{ maxWidth: "570px", maxHeight: "500px" }}
        />
    </div>
</div>

      </div>
    </section>
  );
};

export default SectionImgPara;
