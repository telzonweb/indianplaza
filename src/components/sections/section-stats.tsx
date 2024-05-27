// export const statistics = [
//   {
//     number: "36",
//     title: "Sucessful Projects",
//   },
//   {
//     number: "100%",
//     title: "Achieved ROI",
//   },
//   {
//     number: "550",
//     title: "Happy Customers",
//   },
//   {
//     number: "3x",
//     title: "Increased Profits",
//   },
// ];

// const SectionStats = () => {
//   return (
//     <section className="relative py-16 after:absolute after:inset-0 after:bg-[rgba(255,165,0,0.8)] lg:py-28">
//       <img
//         src="statistic.jpg"
//         alt="Statistics"
//         className="object-cover object-center absolute w-full h-full inset-0"
//       />
//       <div className="container relative z-[1]">
//         <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
//           {statistics.map((item, index) => (
//             <div key={index}>
//               {item.number && (
//                 <span className="mb-4 block text-3xl font-bold text-white">
//                   {item.number}
//                 </span>
//               )}
//               {item.title && (
//                 <span className="block text-md font-bold text-white">
//                   {item.title}
//                 </span>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SectionStats;


export const statistics = [
  {
    number: "3+",
    title: "Stores",
  },
  {
    number: "1000+",
    title: "Happy Customers",
  },
  {
    number: "150+",
    title: "Top Brands",
  },
  {
    number: "10+",
    title: "special Offers",
  },
];

const SectionStats = () => {
  return (
    <section className="relative py-16 after:absolute after:inset-0 after:bg-[rgba(168,162,151,0.8)] lg:py-28">
      <div className="absolute inset-0 bg-black opacity-100"></div>
      <img
        src="abt-2.jpg"
        alt="Statistics"
        className="object-cover object-center absolute w-full h-full inset-0"
      />
      <div className="container relative z-10">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {statistics.map((item, index) => (
            <div key={index} className="text-center p-6 bg-white bg-opacity-25 backdrop-blur-lg rounded-lg shadow-lg transition transform hover:scale-105">
              {item.number && (
                <span className="mb-4 block text-4xl font-extrabold text-black">
                  {item.number}
                </span>
              )}
              {item.title && (
                <span className="block text-lg font-semibold text-black">
                  {item.title}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionStats;
