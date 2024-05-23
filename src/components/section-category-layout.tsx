// import { motion } from "framer-motion";
// import IconBoxLayout2 from "@/components/icon-box-layout-2";
// import ContactsLineIcon from "remixicon-react/ContactsLineIcon";
// import Message2LineIcon from "remixicon-react/Message2LineIcon";
// import ListSettingsLineIcon from "remixicon-react/ListSettingsLineIcon";
// import FileTextLineIcon from "remixicon-react/FileTextLineIcon";
// import Database2LineIcon from "remixicon-react/Database2LineIcon";
// import Key2LineIcon from "remixicon-react/Key2LineIcon";
// import IconCategory from "@/components/icon-category-details";

// export const iconBoxes = [
//   {
//     src:"https://tse3.mm.bing.net/th?id=OIP.zUuS7Z7vcsYzutwcqM5J3AAAAA&pid=Api&P=0&h=180",
//     title: "Everest Spices",
//     description:
//       "Everest Food Products Pvt Ltd (Everest Spices) is an Indian manufacturer, distributor and exporter of ground spices and spice mixtures under the brand name Everest.",
//     shadow: "shadow-[0_1px_6px_rgba(61,65,84,.15),0_5px_0_0_#FA6262]",
//   },
//   {
//     src:"https://tse2.mm.bing.net/th?id=OIP.bxMpKkyfj40uyheELfdihgHaEY&pid=Api&P=0&h=180",
//     title: "Maggi",
//     description:
//       "Maggi is an international brand of seasonings, instant soups, and noodles that originated in Switzerland in the late 19th century.",
//     shadow: "shadow-[0_1px_6px_rgba(61,65,84,.15),0_5px_0_0_#ffef00]",
//   },
//   {
//    src:"https://tse1.mm.bing.net/th?id=OIP.v6GhTR_13tZjkQAKGQXYUwHaFP&pid=Api&P=0&h=180",
//     title: "Cadbury Dairy Milk",
//     description:
//       "Cadbury Dairy Milk is a brand of milk chocolate currently manufactured by Cadbury, except in the United States where it is made by Mondelēz International.",
//     shadow: "shadow-[0_1px_6px_rgba(61,65,84,.15),0_5px_0_0_#4C86E7]",
//   },
//   {
//     src:"https://s.yimg.com/fz/api/res/1.2/sQQ5KuqYjKceyJingNtq8w--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTI2MDtxPTgwO3c9MjYw/https://s.yimg.com/zb/imgv1/2f90303b-3546-3502-97e1-a6dad04b1d73/t_500x300",
//     title: "Parle-G",
//     description:
//       "Parle-G is a brand of biscuits manufactured by Parle Products in India. A 2011 Nielsen survey reported that it is the best-selling brand of biscuits in the world.",
//     shadow: "shadow-[0_1px_6px_rgba(61,65,84,.15),0_5px_0_0_#7444FF]",
//   },
//   {
//     src:"https://tse4.mm.bing.net/th?id=OIP.CDGMboUoAYeBqU1GVmr-vwHaJ0&pid=Api&P=0&h=180",
//     title: "Mix Farsan",
//     description:
//       "Farsans are a very important part of Marwari cuisine, Gujarati cuisine, Marathi cuisine and Sindhi cuisine, wherein a wide variety of them are prepared on special occasions and to entertain guests, and are also enjoyed with tea.",
//     shadow: "shadow-[0_1px_6px_rgba(61,65,84,.15),0_5px_0_0_#FFAF13]",
//   },
//   {
//     src:"https://logos-world.net/wp-content/uploads/2020/12/Lays-Logo-700x394.png",
//     title: "Lay's",
//     description:
//       "Lay's was introduced in 1940 in the United States. This logo was briefly revived in 2021 for limited-edition Lay's retro throwback products.",
//     shadow: "shadow-[0_1px_6px_rgba(61,65,84,.15),0_5px_0_0_#B939E5]",
//    },
// ];

// const fadeInAnimationVariants = {
//   initial: {
//     opacity: 0,
//     y: 60,
//   },
//   animate: (index: number) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: 0.05 * index,
//     },
//   }),
// };

// const SectioncategoryLayout = () => {
//   return (
// //     <section className="py-16 lg:py-24">
// //       <div className="container">
// //         <div className="flex justify-center">
// //           <div className="text-center lg:w-3/5">
// //             <h2 className="mb-12">
// //               Our Product{" "}
// //             </h2>
// //           </div>
// //         </div>
// //         {/* <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-10">
// //           {iconBoxes.map((iconBox, index) => {
// //             return (
// //               <motion.div
// //                 key={iconBox.title}
// //                 variants={fadeInAnimationVariants}
// //                 initial="initial"
// //                 whileInView="animate"
// //                 viewport={{ once: true }}
// //                 transition={{
// //                   delay: 0.5,
// //                 }}
// //                 custom={index}
// //               >
// //                 <IconBoxLayout2 iconBox={iconBox} />
// //               </motion.div>
// //             );
// //           })}
// //         </div> */}
// //         <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-10">
// //   {iconBoxes.map((iconBox, index) => {
// //     return (
// //       <motion.div
// //         key={iconBox.title}
// //         variants={fadeInAnimationVariants}
// //         initial="initial"
// //         whileInView="animate"
// //         viewport={{ once: true }}
// //         transition={{
// //           delay: 0.5,
// //         }}
// //         custom={index}
// //       >
// //         <div className={`bg-white rounded-lg p-8 ${iconBox.shadow}`}>
// //           <img src={iconBox.src} alt={iconBox.title} className="mx-auto mb-6" />
// //           <h3 className="text-lg font-semibold mb-4">{iconBox.title}</h3>
// //           <p className="text-gray-600">{iconBox.description}</p>
// //         </div>
// //       </motion.div>
// //     );
// //   })}
// // </div>
// //       </div>
// //     </section>

// <section className="py-16 lg:py-24">
// <div className="container">
//   <div className="flex justify-center">
//     <div className="text-center lg:w-3/5">
//       <h2 className="mb-12">Our Product</h2>
//     </div>
//   </div>
//   <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-10">
//     {iconBoxes.map((iconBox, index) => (
//       <motion.div
//         key={iconBox.title}
//         variants={fadeInAnimationVariants}
//         initial="initial"
//         whileInView="animate"
//         viewport={{ once: true }}
//         transition={{
//           delay: 0.5,
//         }}
//         custom={index}
//       >
//         <div className={`bg-white rounded-lg p-8 ${iconBox.shadow} hover:shadow-md hover:scale-105 transition-shadow duration-300`}>
//           <img src={iconBox.src} alt={iconBox.title} className="mx-auto mb-6" />
//           <h3 className="text-lg font-semibold mb-4">{iconBox.title}</h3>
//           <p className="text-gray-600">{iconBox.description}</p>
//         </div>
//       </motion.div>
//     ))}
//   </div>
// </div>
// </section>

//   );
// };

// export default SectioncategoryLayout;

// import { motion } from "framer-motion";

// export const iconBoxes = [
//   {
//     src:"https://m.media-amazon.com/images/S/aplus-media-library-service-media/35900930-39fc-4f51-861a-fa5fdfcd6e56.__CR0,0,970,300_PT0_SX970_V1___.png",
//     title: "Everest Spices",
//     description:
//       "Everest Food Products Pvt Ltd (Everest Spices) is an Indian manufacturer, distributor and exporter of ground spices and spice mixtures under the brand name Everest.",
//     shadow: "shadow-[0_1px_6px_rgba(61,65,84,.15),0_5px_0_0_#FA6262]",
//   },
//   {
//     src:"https://tse3.mm.bing.net/th?id=OIP.kz0YK5KH_vPajd6gN_jd9QHaC9&pid=Api&P=0&h=180",
//     title: "Noodles",
//     description:
//       "Maggi is an international brand of seasonings, instant soups, and noodles that originated in Switzerland in the late 19th century.",
//     shadow: "shadow-[0_1px_6px_rgba(61,65,84,.15),0_5px_0_0_#ffef00]",
//   },
//   {
//     src:"https://tse4.mm.bing.net/th?id=OIP.InYi0kHXXn2-BKqflSEr7QHaD9&pid=Api&P=0&h=180",
//     title: "Cadbury Dairy Milk",
//     description:
//       "Cadbury Dairy Milk is a brand of milk chocolate currently manufactured by Cadbury, except in the United States where it is made by Mondelēz International.",
//     shadow: "shadow-[0_1px_6px_rgba(61,65,84,.15),0_5px_0_0_#4C86E7]",
//   },
//   {
//     src:"https://5.imimg.com/data5/LT/TI/MY-29443006/cream-biscuits-2c-chocolate-biscuits-2c-glucose-biscuits-2c-butter-biscuits-and-many-more-1000x1000.jpg",
//     title: "Biscuits",
//     description:
//       "Parle-G is a brand of biscuits manufactured by Parle Products in India. A 2011 Nielsen survey reported that it is the best-selling brand of biscuits in the world.",
//     shadow: "shadow-[0_1px_6px_rgba(61,65,84,.15),0_5px_0_0_#7444FF]",
//   },
//   {
//     src:"https://tse3.mm.bing.net/th?id=OIP.WV4itkdFHeRl-MJ1ITmu9wHaE8&pid=Api&P=0&h=180",
//     title: "Mix Farsan",
//     description:
//       "Farsans are a very important part of Marwari cuisine, Gujarati cuisine, Marathi cuisine and Sindhi cuisine, wherein a wide variety of them are prepared on special occasions and to entertain guests, and are also enjoyed with tea.",
//     shadow: "shadow-[0_1px_6px_rgba(61,65,84,.15),0_5px_0_0_#FFAF13]",
//   },
//   {
//     src:"https://logos-world.net/wp-content/uploads/2020/12/Lays-Logo-700x394.png",
//     title: "Lay's",
//     description:
//       "Lay's was introduced in 1940 in the United States. This logo was briefly revived in 2021 for limited-edition Lay's retro throwback products.",
//     shadow: "shadow-[0_1px_6px_rgba(61,65,84,.15),0_5px_0_0_#B939E5]",
//   },
// ];

// const fadeInAnimationVariants = {
//   initial: {
//     opacity: 0,
//     y: 60,
//   },
//   animate: (index: number) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: 0.05 * index,
//     },
//   }),
// };

// const SectioncategoryLayout = () => {
//   return (
//     <section className="py-16 lg:py-24">
//       <div className="container">
//         <div className="flex justify-center">
//           <div className="text-center lg:w-3/5">
//             <h2 className="mb-12">explore category</h2>
//           </div>
//         </div>
//         <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8 mr-10 ml-10">
//           {iconBoxes.map((iconBox, index) => (
//             <motion.div
//               key={iconBox.title}
//               variants={fadeInAnimationVariants}
//               initial="initial"
//               whileInView="animate"
//               viewport={{ once: true }}
//               transition={{
//                 delay: 0.5,
//               }}
//               custom={index}
//             >
//               <div className={`bg-white rounded-lg p-10 ${iconBox.shadow} hover:shadow-md hover:scale-105 transition-shadow duration-300`} style={{ height: "300px" }}>
//                 <div className="flex flex-col items-center justify-center h-full text-center">
//                   <img src={iconBox.src} alt={iconBox.title} className="mb-4 h-24 w-auto" />
//                   <h3 className="text-lg font-semibold mb-4">{iconBox.title}</h3>
//                   <p className="text-gray-600">{iconBox.description}</p>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SectioncategoryLayout;

// import { motion } from "framer-motion";

// export const iconBoxes = [
//   {
//     src: "https://m.media-amazon.com/images/S/aplus-media-library-service-media/35900930-39fc-4f51-861a-fa5fdfcd6e56.__CR0,0,970,300_PT0_SX970_V1___.png",
//     title: "Everest Spices",
//     shadow: "shadow-[0_1px_6px_rgba(61,65,84,.15),0_5px_0_0_#FA6262]",
//   },
//   {
//     src: "https://tse3.mm.bing.net/th?id=OIP.kz0YK5KH_vPajd6gN_jd9QHaC9&pid=Api&P=0&h=180",
//     title: "Noodles",
//     shadow: "shadow-[0_1px_6px_rgba(61,65,84,.15),0_5px_0_0_#ffef00]",
//   },
//   {
//     src: "https://tse4.mm.bing.net/th?id=OIP.InYi0kHXXn2-BKqflSEr7QHaD9&pid=Api&P=0&h=180",
//     title: "Cadbury Dairy Milk",
//     shadow: "shadow-[0_1px_6px_rgba(61,65,84,.15),0_5px_0_0_#4C86E7]",
//   },
//   {
//     src: "https://5.imimg.com/data5/LT/TI/MY-29443006/cream-biscuits-2c-chocolate-biscuits-2c-glucose-biscuits-2c-butter-biscuits-and-many-more-1000x1000.jpg",
//     title: "Biscuits",
//     shadow: "shadow-[0_1px_6px_rgba(61,65,84,.15),0_5px_0_0_#7444FF]",
//   },
//   {
//     src: "https://tse3.mm.bing.net/th?id=OIP.WV4itkdFHeRl-MJ1ITmu9wHaE8&pid=Api&P=0&h=180",
//     title: "Mix Farsan",
//     shadow: "shadow-[0_1px_6px_rgba(61,65,84,.15),0_5px_0_0_#FFAF13]",
//   },
//   {
//     src: "https://logos-world.net/wp-content/uploads/2020/12/Lays-Logo-700x394.png",
//     title: "Lay's",
//     shadow: "shadow-[0_1px_6px_rgba(61,65,84,.15),0_5px_0_0_#B939E5]",
//   },
//   {
//     src: "https://logos-world.net/wp-content/uploads/2020/12/Lays-Logo-700x394.png",
//     title: "Lay's",
//     shadow: "shadow-[0_1px_6px_rgba(61,65,84,.15),0_5px_0_0_#B939E5]",
//   },
//   {
//     src: "https://logos-world.net/wp-content/uploads/2020/12/Lays-Logo-700x394.png",
//     title: "Lay's",
//     shadow: "shadow-[0_1px_6px_rgba(61,65,84,.15),0_5px_0_0_#B939E5]",
//   },
//   {
//     src: "https://logos-world.net/wp-content/uploads/2020/12/Lays-Logo-700x394.png",
//     title: "Lay's",
//     shadow: "shadow-[0_1px_6px_rgba(61,65,84,.15),0_5px_0_0_#B939E5]",
//   },
//   {
//     src: "https://logos-world.net/wp-content/uploads/2020/12/Lays-Logo-700x394.png",
//     title: "Lay's",
//     shadow: "shadow-[0_1px_6px_rgba(61,65,84,.15),0_5px_0_0_#B939E5]",
//   },
//   {
//     src: "https://logos-world.net/wp-content/uploads/2020/12/Lays-Logo-700x394.png",
//     title: "Lay's",
//     shadow: "shadow-[0_1px_6px_rgba(61,65,84,.15),0_5px_0_0_#B939E5]",
//   },
//   {
//     src: "https://logos-world.net/wp-content/uploads/2020/12/Lays-Logo-700x394.png",
//     title: "Lay's",
//     shadow: "shadow-[0_1px_6px_rgba(61,65,84,.15),0_5px_0_0_#B939E5]",
//   },
//   {
//     src: "https://logos-world.net/wp-content/uploads/2020/12/Lays-Logo-700x394.png",
//     title: "Lay's",
//     shadow: "shadow-[0_1px_6px_rgba(61,65,84,.15),0_5px_0_0_#B939E5]",
//   },
//   {
//     src: "https://logos-world.net/wp-content/uploads/2020/12/Lays-Logo-700x394.png",
//     title: "Lay's",
//     shadow: "shadow-[0_1px_6px_rgba(61,65,84,.15),0_5px_0_0_#B939E5]",
//   },
//   {
//     src: "https://logos-world.net/wp-content/uploads/2020/12/Lays-Logo-700x394.png",
//     title: "Lay's",
//     shadow: "shadow-[0_1px_6px_rgba(61,65,84,.15),0_5px_0_0_#B939E5]",
//   },
//   // Add more categories as needed
// ];

// const fadeInAnimationVariants = {
//   initial: {
//     opacity: 0,
//     y: 60,
//   },
//   animate: (index: number) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: 0.05 * index,
//     },
//   }),
// };

// const SectioncategoryLayout = () => {
//   return (
//     <section className="py-16 lg:py-24">
//       <div className="container">
//         <div className="flex justify-center">
//           <div className="text-center lg:w-3/5">
//             <h2 className="mb-12">Explore Category</h2>
//           </div>
//         </div>
//         <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-8 2xl:grid-cols-12 mr-10 ml-10">
//           {iconBoxes.map((iconBox, index) => (
//             <motion.div
//               key={iconBox.title}
//               variants={fadeInAnimationVariants}
//               initial="initial"
//               whileInView="animate"
//               viewport={{ once: true }}
//               transition={{
//                 delay: 0.5,
//               }}
//               custom={index}
//             >
//               <div className={`bg-white rounded-lg p-4 ${iconBox.shadow} hover:shadow-md hover:scale-105 transition-shadow duration-300`}>
//                 <div className="flex flex-col items-center justify-center text-center">
//                   <img src={iconBox.src} alt={iconBox.title} className="mb-2 h-16 w-auto" />
//                   <h3 className="text-sm font-semibold">{iconBox.title}</h3>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SectioncategoryLayout;

// import { motion } from "framer-motion";

// export const iconBoxes = [
//   {
//     src: "https://m.media-amazon.com/images/S/aplus-media-library-service-media/35900930-39fc-4f51-861a-fa5fdfcd6e56.__CR0,0,970,300_PT0_SX970_V1___.png",
//     title: "Everest Spices",
//   },
//   {
//     src: "https://tse3.mm.bing.net/th?id=OIP.kz0YK5KH_vPajd6gN_jd9QHaC9&pid=Api&P=0&h=180",
//     title: "Noodles",
//   },
//   {
//     src: "https://tse4.mm.bing.net/th?id=OIP.InYi0kHXXn2-BKqflSEr7QHaD9&pid=Api&P=0&h=180",
//     title: "Cadbury Dairy Milk",
//   },
//   {
//     src: "https://5.imimg.com/data5/LT/TI/MY-29443006/cream-biscuits-2c-chocolate-biscuits-2c-glucose-biscuits-2c-butter-biscuits-and-many-more-1000x1000.jpg",
//     title: "Biscuits",
//   },
//   {
//     src: "https://tse3.mm.bing.net/th?id=OIP.WV4itkdFHeRl-MJ1ITmu9wHaE8&pid=Api&P=0&h=180",
//     title: "Mix Farsan",
//   },
//   {
//     src: "https://logos-world.net/wp-content/uploads/2020/12/Lays-Logo-700x394.png",
//     title: "Lay's",
//   },
//   {
//     src: "https://5.imimg.com/data5/LT/TI/MY-29443006/cream-biscuits-2c-chocolate-biscuits-2c-glucose-biscuits-2c-butter-biscuits-and-many-more-1000x1000.jpg",
//     title: "Biscuits",
//   },
//   {
//     src: "https://tse3.mm.bing.net/th?id=OIP.WV4itkdFHeRl-MJ1ITmu9wHaE8&pid=Api&P=0&h=180",
//     title: "Mix Farsan",
//   },
//   {
//     src: "https://logos-world.net/wp-content/uploads/2020/12/Lays-Logo-700x394.png",
//     title: "Lay's",
//   },
//   {
//     src: "https://5.imimg.com/data5/LT/TI/MY-29443006/cream-biscuits-2c-chocolate-biscuits-2c-glucose-biscuits-2c-butter-biscuits-and-many-more-1000x1000.jpg",
//     title: "Biscuits",
//   },
//   {
//     src: "https://tse3.mm.bing.net/th?id=OIP.WV4itkdFHeRl-MJ1ITmu9wHaE8&pid=Api&P=0&h=180",
//     title: "Mix Farsan",
//   },
//   {
//     src: "https://logos-world.net/wp-content/uploads/2020/12/Lays-Logo-700x394.png",
//     title: "Lay's",
//   },
//   // Add more categories as needed
// ];

// const fadeInAnimationVariants = {
//   initial: {
//     opacity: 0,
//     y: 60,
//   },
//   animate: (index: number) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: 0.05 * index,
//     },
//   }),
// };

// const SectioncategoryLayout = () => {
//   return (
//     <section className="py-16 lg:py-24">
//       <div className="container">
//         <div className="flex justify-center">
//           <div className="text-center lg:w-3/5">
//             <h2 className="mb-12">Explore Category</h2>
//           </div>
//         </div>
//         <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-8 2xl:grid-cols-12 mr-10 ml-10">
//           {iconBoxes.map((iconBox, index) => (
//             <motion.div
//               key={iconBox.title}
//               variants={fadeInAnimationVariants}
//               initial="initial"
//               whileInView="animate"
//               viewport={{ once: true }}
//               transition={{
//                 delay: 0.5,
//               }}
//               custom={index}
//             >
//               <div className="bg-white rounded-lg p-4 hover:shadow-md hover:scale-105 transition-shadow duration-300">
//                 <div className="flex flex-col items-center justify-center text-center">
//                   <img src={iconBox.src} alt={iconBox.title} className="mb-2 h-20 w-20 object-contain" />
//                   <h3 className="text-sm font-semibold">{iconBox.title}</h3>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SectioncategoryLayout;

// import { motion } from "framer-motion";

// export const iconBoxes = [
//   {
//     src: "https://m.media-amazon.com/images/S/aplus-media-library-service-media/35900930-39fc-4f51-861a-fa5fdfcd6e56.__CR0,0,970,300_PT0_SX970_V1___.png",
//     title: "Everest Spices",
//   },
//   {
//     src: "https://tse3.mm.bing.net/th?id=OIP.kz0YK5KH_vPajd6gN_jd9QHaC9&pid=Api&P=0&h=180",
//     title: "Noodles",
//   },
//   {
//     src: "https://tse4.mm.bing.net/th?id=OIP.InYi0kHXXn2-BKqflSEr7QHaD9&pid=Api&P=0&h=180",
//     title: "Cadbury Dairy Milk",
//   },
//   {
//     src: "https://5.imimg.com/data5/LT/TI/MY-29443006/cream-biscuits-2c-chocolate-biscuits-2c-glucose-biscuits-2c-butter-biscuits-and-many-more-1000x1000.jpg",
//     title: "Biscuits",
//   },
//   {
//     src: "https://tse3.mm.bing.net/th?id=OIP.WV4itkdFHeRl-MJ1ITmu9wHaE8&pid=Api&P=0&h=180",
//     title: "Mix Farsan",
//   },
//   {
//     src: "https://logos-world.net/wp-content/uploads/2020/12/Lays-Logo-700x394.png",
//     title: "Lay's",
//   },
//   {
//     src: "https://5.imimg.com/data5/LT/TI/MY-29443006/cream-biscuits-2c-chocolate-biscuits-2c-glucose-biscuits-2c-butter-biscuits-and-many-more-1000x1000.jpg",
//     title: "Biscuits",
//   },
//   {
//     src: "https://tse3.mm.bing.net/th?id=OIP.WV4itkdFHeRl-MJ1ITmu9wHaE8&pid=Api&P=0&h=180",
//     title: "Mix Farsan",
//   },
//   {
//     src: "https://logos-world.net/wp-content/uploads/2020/12/Lays-Logo-700x394.png",
//     title: "Lay's",
//   },
//   {
//     src: "https://5.imimg.com/data5/LT/TI/MY-29443006/cream-biscuits-2c-chocolate-biscuits-2c-glucose-biscuits-2c-butter-biscuits-and-many-more-1000x1000.jpg",
//     title: "Biscuits",
//   },
//   {
//     src: "https://tse3.mm.bing.net/th?id=OIP.WV4itkdFHeRl-MJ1ITmu9wHaE8&pid=Api&P=0&h=180",
//     title: "Mix Farsan",
//   },
//   {
//     src: "https://logos-world.net/wp-content/uploads/2020/12/Lays-Logo-700x394.png",
//     title: "Lay's",
//   },
//   // Add more categories as needed
// ];

// const fadeInAnimationVariants = {
//   initial: {
//     opacity: 0,
//     y: 60,
//   },
//   animate: (index: number) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: 0.05 * index,
//     },
//   }),
// };

// const SectioncategoryLayout = () => {
//   return (
//     <section className="py-16 lg:py-24">
//       <div className="container mx-auto px-4">
//         <div className="flex justify-center">
//           <div className="text-center lg:w-3/5">
//             <h2 className="mb-12">Explore Category</h2>
//           </div>
//         </div>
//         <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-8 2xl:grid-cols-12">
//           {iconBoxes.map((iconBox, index) => (
//             <motion.div
//               key={iconBox.title}
//               variants={fadeInAnimationVariants}
//               initial="initial"
//               whileInView="animate"
//               viewport={{ once: true }}
//               custom={index}
//             >
//               <div className="bg-white rounded-lg p-4 hover:shadow-md hover:scale-105 transition-shadow duration-300">
//                 <div className="flex flex-col items-center justify-center text-center">
//                   <img src={iconBox.src} alt={iconBox.title} className="mb-2 h-20 w-20 object-contain" />
//                   <h3 className="text-sm font-semibold">{iconBox.title}</h3>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SectioncategoryLayout;

import { motion } from "framer-motion";
import SectionTitle from "./sections/section-title";

export const iconBoxes = [
  {
    src: "https://img1.exportersindia.com/product_images/bc-full/2020/11/7759953/everest-spices-1606386515-5641404.jpeg",
    title: "Everest Spices",
  },
  {
    src: "https://vegecravings.com/wp-content/uploads/2020/01/Vegetable-Masala-Maggi-Recipe-Step-By-Step-Instructions-scaled.jpg",
    title: "Noodles",
  },
  {
    src: "https://tse3.mm.bing.net/th?id=OIP.WV4itkdFHeRl-MJ1ITmu9wHaE8&pid=Api&P=0&h=180",
    title: "Mix Farsan",
  },
  {
    src: "https://tse4.mm.bing.net/th?id=OIP.BM-LStUWJ5TjQHIcD2pQ_QHaFj&pid=Api&P=0&h=180",
    title: "Lay's",
  },
  {
    src: "https://wallpapercave.com/wp/wp2422343.jpg",
    title: "Biscuits",
  },
  {
    src: "https://tse3.mm.bing.net/th?id=OIP.WV4itkdFHeRl-MJ1ITmu9wHaE8&pid=Api&P=0&h=180",
    title: "Mix Farsan",
  },
  {
    src: "https://tse4.mm.bing.net/th?id=OIP.BM-LStUWJ5TjQHIcD2pQ_QHaFj&pid=Api&P=0&h=180",
    title: "Lay's",
  },
  {
    src: "https://wallpapercave.com/wp/wp2422343.jpg",
    title: "Biscuits",
  },
  {
    src: "https://img1.exportersindia.com/product_images/bc-full/2020/11/7759953/everest-spices-1606386515-5641404.jpeg",
    title: "Everest Spices",
  },
  {
    src: "https://vegecravings.com/wp-content/uploads/2020/01/Vegetable-Masala-Maggi-Recipe-Step-By-Step-Instructions-scaled.jpg",
    title: "Noodles",
  },
  {
    src: "https://img1.exportersindia.com/product_images/bc-full/2020/11/7759953/everest-spices-1606386515-5641404.jpeg",
    title: "Everest Spices",
  },
  {
    src: "https://vegecravings.com/wp-content/uploads/2020/01/Vegetable-Masala-Maggi-Recipe-Step-By-Step-Instructions-scaled.jpg",
    title: "Noodles",
  },
  // Add more categories as needed
];

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 60,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const SectioncategoryLayout = () => {
  return (
    <section className="py-16 lg:mx-[10%] lg:py-24 ">
      <div className="container mx-auto px-4">
        <SectionTitle
          // subtitle="Truly Indian"
          sectionClasses="mx-auto max-w-xl text-center mb-12"
          titleClasses="mb-3 text-center "
          subtitleClasses="text-md font-large "
        >
          Wide Range Of Categories
        </SectionTitle>
        <div className="2xl:grid-cols-8 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 ">
          {iconBoxes.map((iconBox, index) => (
            <motion.div
              key={iconBox.title}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={index}
            >
              <div className="rounded-lg bg-white p-4 shadow-sm transition-shadow duration-300 hover:scale-105 hover:shadow-lg">
                <div className="flex flex-col items-center justify-center text-center">
                  <img
                    src={iconBox.src}
                    alt={iconBox.title}
                    className="mb-2 h-24 w-auto max-w-full rounded-xl object-contain"
                  />
                  <h3 className="text-sm font-semibold">{iconBox.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectioncategoryLayout;
