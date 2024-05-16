import React from "react";
import '@/components/style.css';  // Assuming you have a separate CSS file

const Paragraph = () => {
  return (
    <section className="pt-50 pl-50 pr-40 fs-5 custom-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 custom-image">
            <img
              src="assets/img/abt-1.jpg"
              alt="about"
              className="img-fluid"
            />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 custom-content">
            <h2>Margin</h2>
            <p>
              Retail store design is everything a retailer does to set up their space when running a retail business. 
              This includes determining the store layout, displaying products, and merchandising. 
              The best retail store design is powerful and, if implemented well, can help grow your business and drive sales.
            </p>
            <p>
              This includes determining the store layout, displaying products, and merchandising. 
              The best retail store design is powerful and, if implemented well, can help grow your business and drive sales.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Paragraph;
