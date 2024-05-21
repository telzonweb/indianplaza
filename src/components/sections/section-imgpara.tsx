import React from "react";
import "@/components/style.css"; // Assuming you have a separate CSS file

const SectionImgPara = () => {
  return (
    <section className="pt-12 pl-12 pr-10 text-lg custom-section">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 w-full custom-image md:mr-8 mb-8 md:mb-0">
            <img
              src="https://tse4.mm.bing.net/th?id=OIP.HsaRHc0Y0TH64YlNcLpN0wHaEh&pid=Api&P=0&h=180"
              alt="about"
              className="w-full h-auto rounded-lg shadow-lg transform transition duration-500 hover:scale-105 custom-image-border"
              style={{ width: "100%", maxWidth: "570px", height: "500px", maxHeight: "450px" }}
            />
          </div>

          <div className="md:w-1/2 w-full custom-content flex flex-col justify-center">
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
        </div>
      </div>
    </section>
  );
};

export default SectionImgPara;
