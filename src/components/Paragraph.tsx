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
              Retail store design is everything a retailer does to set up their
              space when running a retail business. This includes determining
              the store layout, displaying products, and merchandising. The best
              retail store design is powerful and, if implemented well, can help
              grow your business and drive sales.
            </p>
            <p>
              This includes determining the store layout, displaying products,
              and merchandising. The best retail store design is powerful and,
              if implemented well, can help grow your business and drive sales.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Paragraph;
