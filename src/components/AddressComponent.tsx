import React from 'react';

const AddressComponent = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-gray-100 h-full pt-5">
      <h1 className="text-3xl font-bold mb-3">Our Locations</h1>
      <div className="flex justify-center items-center max-w-4xl">
        <div className="flex justify-between w-full md:w-1/2 lg:w-1/4 m-4">
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transform hover:scale-105 transition-all duration-300 h-full">
            <h2 className="font-bold mb-2 text-lg">Enfield</h2>
            <p>431-435 Main North Rd</p>
            <p>ENFIELD, SA 5085</p>
          </div>
        </div>
        <div className="flex justify-between w-full md:w-1/2 lg:w-1/4 m-4">
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transform hover:scale-105 transition-all duration-300 h-full">
            <h2 className="font-bold mb-2 text-lg">Firle</h2>
            <p>1/161 Glynburn Rd</p>
            <p>FIRLE, SA 5070</p>
          </div>
        </div>
        <div className="flex justify-between w-full md:w-1/2 lg:w-1/4 m-4 lg:order-4">
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transform hover:scale-105 transition-all duration-300 h-full">
            <h2 className="font-bold mb-2 text-lg">Plympton</h2>
            <p>Indian Traders</p>
            <p>345 Anzac Hwy</p>
            <p>PLYMPTON, SA 5038</p>
          </div>
        </div>
        <div className="flex justify-between w-full md:w-1/2 lg:w-1/4 m-4">
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transform hover:scale-105 transition-all duration-300 h-full">
            <h2 className="font-bold mb-2 text-lg">Torrensville</h2>
            <p>224 Henley Beach Rd</p>
            <p>TORRENSVILLE, 5031</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressComponent;
