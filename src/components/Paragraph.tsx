import React from "react";
import "@/components/style.css"; // Assuming you have a separate CSS file

const Paragraph = () => {
  return (
    <section className="custom-section pl-12 pr-10 pt-12 text-lg">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row">
          {/* <div className="md:w-1/2 w-full custom-image md:mr-8 mb-8 md:mb-0">
            <img
              src="https://img.freepik.com/premium-photo/there-is-large-store-with-variety-fruits-vegetables-generative-ai_901003-169177.jpg?w=740"
              alt="about"
              className="w-full h-auto"
            />
          </div> */}
          <div className="custom-image mb-8 w-full md:mb-0 md:mr-8 md:w-1/2">
            <img
              src="mainImages/about/basket.jpg"
              alt="about"
              className="h-auto w-full"
              style={{ width: "570px", height: "450px" }}
            />
          </div>

          <div className="custom-content w-full md:w-1/2">
            <h2 className="mb-4 text-2xl font-bold">Indian Plaza</h2>
            <p className="mb-4">
            Welcome to our Indian grocery store, where every shelf holds more than just ingredients; it cradles stories of home, whispers of nostalgia, and the warmth of tradition. With each spice jar, every grain of rice, and the scent of freshly ground masalas, we invite you to embark on a journey through the flavors of India.
            </p>
            <p>
            Step into our Indian grocery store and feel the warmth of tradition envelop you. Our shelves aren't just stocked with spices and grains; they're laden with memories of home-cooked meals, shared laughter, and cherished family gatherings. From the aroma of freshly ground masalas to the vibrant colors of assorted lentils, each aisle tells a story of heritage and flavor.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Paragraph;
