// import React from 'react'

// function Sectionourstore() {
//   return (
//     <section className="flex justify-center items-center flex-col px-4 md:px-8"> 
//               <h2 className="mb-12 text-center">Our Store</h2>     
//             {/* <h2 className="mb-12 text-center">
//               Do you want to{" "}<br></br>
//               <span className="text-primary">
//                 generate more traffic</span> to
//               your website? We know the solution.
//             </h2> */}
        
//   <div className="grid grid-cols-2 gap-10 max-w-screen-md">
//     <div>
//       <img src="https://img.freepik.com/free-photo/girl-red-holding-different-vegetables-fruits-store_627829-9485.jpg?t=st=1715938156~exp=1715941756~hmac=dffd9e7e15eca42e44d846837261fda2f8293cd22e13da01bc79568fe76b79f0&w=996" alt="Image 1" className="w-full h-full object-cover rounded-lg" />
//     </div>
//     <div>
//       <img src="https://img.freepik.com/free-photo/lanes-shelves-with-goods-products-inside-supermarket-variety-preserves-pasta-shelves-full-tidy_123827-27553.jpg?t=st=1715937990~exp=1715941590~hmac=c8d0b2f3211d41da9b05fb2f627c0ff2f5abbc8f6d02ce6e893431e1ccce5bcf&w=996" alt="Image 2" className="w-full h-full object-cover rounded-lg" />
//     </div>
//     <div>
//       <img src="https://img.freepik.com/free-psd/3d-illustration-supermarket_23-2150942228.jpg?t=st=1715937934~exp=1715941534~hmac=30b2cff428f9e45f60246396bd96d9687d8acff07c8a19497b3772cb9c8d3975&w=996" alt="Image 3" className="w-full h-full object-cover rounded-lg" />
//     </div>
//     <div>
//       <img src="https://img.freepik.com/free-photo/beautiful-young-family-with-child_171337-2370.jpg?t=st=1715938052~exp=1715941652~hmac=6da85e65215681ad56da87e829fc707b3364fe80ddc1d8a44facf93ac70e7364&w=996" alt="Image 4" className="w-full h-full object-cover rounded-lg" />
//     </div>
//   </div>
// </section>
//   )
// }

// export default Sectionourstore;

import React from 'react';

function Sectionourstore() {
  return (
    <section className="flex justify-center items-center flex-col px-4 md:px-8">
      <h2 className="mb-12 text-center">Our Store</h2>
      <div className="grid grid-cols-2 gap-12 max-w-screen-md">
        <div>
          <img
            src="https://img.freepik.com/free-photo/girl-red-holding-different-vegetables-fruits-store_627829-9485.jpg?t=st=1715938156~exp=1715941756~hmac=dffd9e7e15eca42e44d846837261fda2f8293cd22e13da01bc79568fe76b79f0&w=996"
            alt="Image 1"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
        <div>
          <img
            src="https://img.freepik.com/free-photo/lanes-shelves-with-goods-products-inside-supermarket-variety-preserves-pasta-shelves-full-tidy_123827-27553.jpg?t=st=1715937990~exp=1715941590~hmac=c8d0b2f3211d41da9b05fb2f627c0ff2f5abbc8f6d02ce6e893431e1ccce5bcf&w=996"
            alt="Image 2"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
        <div>
          <img
            src="https://img.freepik.com/free-psd/3d-illustration-supermarket_23-2150942228.jpg?t=st=1715937934~exp=1715941534~hmac=30b2cff428f9e45f60246396bd96d9687d8acff07c8a19497b3772cb9c8d3975&w=996"
            alt="Image 3"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
        <div>
          <img
            src="https://img.freepik.com/free-photo/beautiful-young-family-with-child_171337-2370.jpg?t=st=1715938052~exp=1715941652~hmac=6da85e65215681ad56da87e829fc707b3364fe80ddc1d8a44facf93ac70e7364&w=996"
            alt="Image 4"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}

export default Sectionourstore;
