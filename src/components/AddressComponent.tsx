import React from 'react'

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
            <a href="https://www.google.co.in/maps/" target="_blank" rel="noopener noreferrer">
             <button className="mt-4 text-center bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-all duration-300">
              Google Map
            </button>
            </a>
          </div>
        </div>

        <div className="flex justify-between w-full md:w-1/2 lg:w-1/4 m-4">
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transform hover:scale-105 transition-all duration-300 h-full">
            <h2 className="font-bold mb-2 text-lg">Firle</h2>
            <p>1/161 Glynburn Rd</p>
            <p>FIRLE, SA 5070</p>
            <a href="https://www.google.co.in/maps/" target="_blank" rel="noopener noreferrer">
             <button className="mt-4 text-center bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-all duration-300">
              Google Map
            </button>
            </a>
          </div>
        </div>
        <div className="flex justify-between w-full md:w-1/2 lg:w-1/4 m-4 lg:order-4">
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transform hover:scale-105 transition-all duration-300 h-full">
            <h2 className="font-bold mb-2 text-lg">Plympton</h2>
            <p>Indian Traders</p>
            <p>345 Anzac Hwy</p>
            <p>PLYMPTON, SA 5038</p>
            <a href="https://www.google.co.in/maps/" target="_blank" rel="noopener noreferrer">
             <button className="mt-4 text-center bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-all duration-300">
              Google Map
            </button>
            </a>
          </div>
        </div>
        <div className="flex justify-between w-full md:w-1/2 lg:w-1/4 m-4">
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transform hover:scale-105 transition-all duration-300 h-full">
            <h2 className="font-bold mb-2 text-lg">Torrensville</h2>
            <p>224 Henley Beach Rd</p>
            <p>TORRENSVILLE, 5031</p>
            <a href="https://www.google.co.in/maps/" target="_blank" rel="noopener noreferrer">
             <button className="mt-4 text-center bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-all duration-300">
              Google Map
            </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressComponent;

// import React from 'react';

// const AddressComponent = () => {
//   return (
//     <div className="flex flex-col justify-center items-center bg-gray-100 h-full pt-6">
//       <h1 className="text-3xl font-bold mb-3 text-center">Our Locations</h1>
//       <div className="flex flex-wrap md:flex-nowrap justify-between">
//         <div className="w-full md:w-auto p-2 mb-4 border rounded-lg shadow-md">
//           <address className="not-italic">
//             123 Main St.<br />
//             Springfield, IL 62701
//             <iframe
//              className="w-full h-40 mt-2 rounded-lg"
//              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3068.760899707831!2d-89.6437113846185!3d39.78172127944225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8874ad3ab1e0e6af%3A0x7e2f4d5dfc5d6c8!2s123%20Main%20St%2C%20Springfield%2C%20IL%2062701%2C%20USA!5e0!3m2!1sen!2sus!4v1629712174620!5m2!1sen!2sus"           
//              loading="lazy"
//             ></iframe>
//           </address>
//         </div>
//         <div className="w-full md:w-auto p-2 mb-4 border rounded-lg shadow-md">
//           <address className="not-italic">
//             456 Elm St.<br />
//             Springfield, IL 62702
//             <iframe
//               className="w-full h-40 mt-2 rounded-lg"
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3068.760899707831!2d-89.6437113846185!3d39.78172127944225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8874ad3ab1e0e6af%3A0x7e2f4d5dfc5d6c8!2s456%20Elm%20St%2C%20Springfield%2C%20IL%2062702%2C%20USA!5e0!3m2!1sen!2sus!4v1629712174620!5m2!1sen!2sus"           
//               loading="lazy"
//             ></iframe>
//           </address>
//         </div>
//         <div className="w-full md:w-auto p-2 mb-4 border rounded-lg shadow-md">
//           <address className="not-italic">
//             789 Oak St.<br />
//             Springfield, IL 62703
//             <iframe
//               className="w-full h-40 mt-2 rounded-lg"
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3068.760899707831!2d-89.6437113846185!3d39.78172127944225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8874ad3ab1e0e6af%3A0x7e2f4d5dfc5d6c8!2s789%20Oak%20St%2C%20Springfield%2C%20IL%2062703%2C%20USA!5e0!3m2!1sen!2sus!4v1629712174620!5m2!1sen!2sus"           
//               loading="lazy"
//             ></iframe>
//           </address>
//         </div>
//         <div className="w-full md:w-auto p-2 mb-4 border rounded-lg shadow-md">
//           <address className="not-italic">
//             101 Pine St.<br />
//             Springfield, IL 62704
//             <iframe
//               className="w-full h-40 mt-2 rounded-lg"
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3068.760899707831!2d-89.6437113846185!3d39.78172127944225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8874ad3ab1e0e6af%3A0x7e2f4d5dfc5d6c8!2s101%20Pine%20St%2C%20Springfield%2C%20IL%2062704%2C%20USA!5e0!3m2!1sen!2sus!4v1629712174620!5m2!1sen!2sus"           
//               loading="lazy"
//             ></iframe>
//           </address>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddressComponent;

// import React from 'react';

// const AddressComponent = () => {
//   return (
//     <div className="flex flex-col justify-center items-center bg-gray-100 h-full pt-5">
//       <h1 className="text-3xl font-bold mb-3">Our Locations</h1>
//       <div className="flex flex-wrap justify-center items-center max-w-6xl">
//         <div className="flex flex-col justify-between w-full md:w-1/2 lg:w-1/4 m-4">
//           <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transform hover:scale-105 transition-all duration-300">
//             <h2 className="font-bold mb-2 text-lg">Enfield</h2>
//             <p>431-435 Main North Rd</p>
//             <p>ENFIELD, SA 5085</p>
//             <iframe
//               className="w-full h-40 mt-2 rounded-lg"
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3156.732607614021!2d138.60521701531824!3d-34.841306780390144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ab0ced0e37ec8cf%3A0x8a9e2d37d823df7e!2s431-435%20Main%20North%20Rd%2C%20Enfield%20SA%205085%2C%20Australia!5e0!3m2!1sen!2sus!4v1629712126612!5m2!1sen!2sus"              
//               loading="lazy"
//             ></iframe>
//           </div>
//         </div>
//         <div className="flex flex-col justify-between w-full md:w-1/2 lg:w-1/4 m-4">
//           <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transform hover:scale-105 transition-all duration-300">
//             <h2 className="font-bold mb-2 text-lg">Firle</h2>
//             <p>1/161 Glynburn Rd</p>
//             <p>FIRLE, SA 5070</p>
//             <iframe
//               className="w-full h-40 mt-2 rounded-lg"
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3156.760899707831!2d138.64034631531816!3d-34.83981658038956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ab0d8b16669a6cf%3A0x809b9872fbcf3036!2s161%20Glynburn%20Rd%2C%20Firle%20SA%205070%2C%20Australia!5e0!3m2!1sen!2sus!4v1629712174620!5m2!1sen!2sus"           
//               loading="lazy"
//             ></iframe>
//           </div>
//         </div>
//         <div className="flex flex-col justify-between w-full md:w-1/2 lg:w-1/4 m-4">
//           <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transform hover:scale-105 transition-all duration-300">
//             <h2 className="font-bold mb-2 text-lg">Plympton</h2>
//             <p>Indian Traders</p>
//             <p>345 Anzac Hwy</p>
//             <p>PLYMPTON, SA 5038</p>
//             <iframe
//               className="w-full h-40 mt-2 rounded-lg"
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3156.5124792982873!2d138.5534692153185!3d-34.95445828039248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ab0ba4000000001%3A0x91823c21b1c5ae64!2s345%20Anzac%20Hwy%2C%20Plympton%20SA%205038%2C%20Australia!5e0!3m2!1sen!2sus!4v1629712223614!5m2!1sen!2sus"             
//               loading="lazy"
//             ></iframe>
//           </div>
//         </div>
//         <div className="flex flex-col justify-between w-full md:w-1/2 lg:w-1/4 m-4">
//           <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transform hover:scale-105 transition-all duration-300">
//             <h2 className="font-bold mb-2 text-lg">Torrensville</h2>
//             <p>224 Henley Beach Rd</p>
//             <p>TORRENSVILLE, SA 5031</p>
//             <iframe
//               className="w-full h-40 mt-2 rounded-lg"
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3156.363309140186!2d138.57124711531884!3d-34.92639498039137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ab0cedd456789ab%3A0x9820734e0fb72c0d!2s224%20Henley%20Beach%20Rd%2C%20Torrensville%20SA%205031%2C%20Australia!5e0!3m2!1sen!2sus!4v1629712272617!5m2!1sen!2sus"              
//               loading="lazy"
//             ></iframe>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddressComponent;


// import React from 'react';

// const AddressList = () => {
//   return (
//     <div className="container mx-auto p-4">
//      <h1 className="text-3xl font-bold mb-3 text-center">Our Locations</h1>
//       <div className="flex flex-wrap md:flex-nowrap justify-between">
//         <div className="w-full md:w-auto p-2 mb-4 border rounded-lg shadow-md">
//           <address className="not-italic">
//             123 Main St.<br />
//             Springfield, IL 62701
//             <iframe
//              className="w-full h-40 mt-2 rounded-lg"
//              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3068.760899707831!2d-89.6437113846185!3d39.78172127944225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8874ad3ab1e0e6af%3A0x7e2f4d5dfc5d6c8!2s123%20Main%20St%2C%20Springfield%2C%20IL%2062701%2C%20USA!5e0!3m2!1sen!2sus!4v1629712174620!5m2!1sen!2sus"           
//              loading="lazy"
//             ></iframe>
//           </address>
//         </div>
//         <div className="w-full md:w-auto p-2 mb-4 border rounded-lg shadow-md">
//           <address className="not-italic">
//             456 Elm St.<br />
//             Springfield, IL 62702
//             <iframe
//               className="w-full h-40 mt-2 rounded-lg"
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3068.760899707831!2d-89.6437113846185!3d39.78172127944225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8874ad3ab1e0e6af%3A0x7e2f4d5dfc5d6c8!2s456%20Elm%20St%2C%20Springfield%2C%20IL%2062702%2C%20USA!5e0!3m2!1sen!2sus!4v1629712174620!5m2!1sen!2sus"           
//               loading="lazy"
//             ></iframe>
//           </address>
//         </div>
//         <div className="w-full md:w-auto p-2 mb-4 border rounded-lg shadow-md">
//           <address className="not-italic">
//             789 Oak St.<br />
//             Springfield, IL 62703
//             <iframe
//               className="w-full h-40 mt-2 rounded-lg"
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3068.760899707831!2d-89.6437113846185!3d39.78172127944225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8874ad3ab1e0e6af%3A0x7e2f4d5dfc5d6c8!2s789%20Oak%20St%2C%20Springfield%2C%20IL%2062703%2C%20USA!5e0!3m2!1sen!2sus!4v1629712174620!5m2!1sen!2sus"           
//               loading="lazy"
//             ></iframe>
//           </address>
//         </div>
//         <div className="w-full md:w-auto p-2 mb-4 border rounded-lg shadow-md">
//           <address className="not-italic">
//             101 Pine St.<br />
//             Springfield, IL 62704
//             <iframe
//               className="w-full h-40 mt-2 rounded-lg"
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3068.760899707831!2d-89.6437113846185!3d39.78172127944225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8874ad3ab1e0e6af%3A0x7e2f4d5dfc5d6c8!2s101%20Pine%20St%2C%20Springfield%2C%20IL%2062704%2C%20USA!5e0!3m2!1sen!2sus!4v1629712174620!5m2!1sen!2sus"           
//               loading="lazy"
//             ></iframe>
//           </address>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddressList;
