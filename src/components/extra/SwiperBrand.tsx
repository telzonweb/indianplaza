// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// // import "swiper/css/pagination";
// // import "swiper/css/navigation";

// // import required modules
// import { Autoplay, Pagination, Navigation } from "swiper/modules";

// const imgArray = [
//   "https://img.freepik.com/free-photo/buying-food-grocery-store_342744-1129.jpg?t=st=1715938523~exp=1715942123~hmac=0263287c242824d3ad0503e86d6dbf0006dd85305128bd3bea8e390ca8b3bc2a&w=740",
//   "https://img.freepik.com/free-photo/woman-with-tablet-checking-shopping-cart-see-if-she-has-everything-she-needs-lunch_342744-1111.jpg?t=st=1715938561~exp=1715942161~hmac=97c7a245376555d905060ee1fd454b0021bcbbec55affac611465a9b5b73a12d&w=740",
//   "https://img.freepik.com/free-photo/buying-food-grocery-store_342744-1129.jpg?t=st=1715938523~exp=1715942123~hmac=0263287c242824d3ad0503e86d6dbf0006dd85305128bd3bea8e390ca8b3bc2a&w=740",
//   "https://img.freepik.com/free-photo/woman-with-tablet-checking-shopping-cart-see-if-she-has-everything-she-needs-lunch_342744-1111.jpg?t=st=1715938561~exp=1715942161~hmac=97c7a245376555d905060ee1fd454b0021bcbbec55affac611465a9b5b73a12d&w=740",
// ];

// export const SwiperBrand = () => {
//   return (
//     <>
//       <Swiper
//         spaceBetween={30}
//         centeredSlides={true}
//         autoplay={{
//           delay: 2000,
//           disableOnInteraction: false,
//           pauseOnMouseEnter: true,
//         }}
//         // pagination={{
//         //   clickable: true,
//         // }}
//         navigation={true}
//         modules={[Autoplay]}
//         loop={true}
//         className="mySwiper "
//       >
//         {imgArray.map((imglink, key) => (
//           <SwiperSlide
//             key={key}
//             className="flex h-[90vh] items-center justify-center"
//           >
//             <div className="mx-auto flex h-[90%] w-[90%] items-center justify-center rounded-2xl  ">
//               <img
//                 src={imglink}
//                 alt=""
//                 className="h-full w-full rounded-lg object-cover"
//               />
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </>
//   );
// };

// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import { Autoplay, Pagination, Navigation } from "swiper/modules";

// const imgArray = [
//   "https://img.freepik.com/free-photo/buying-food-grocery-store_342744-1129.jpg?t=st=1715938523~exp=1715942123~hmac=0263287c242824d3ad0503e86d6dbf0006dd85305128bd3bea8e390ca8b3bc2a&w=740",
//   "https://img.freepik.com/free-photo/woman-with-tablet-checking-shopping-cart-see-if-she-has-everything-she-needs-lunch_342744-1111.jpg?t=st=1715938561~exp=1715942161~hmac=97c7a245376555d905060ee1fd454b0021bcbbec55affac611465a9b5b73a12d&w=740",
//   "https://img.freepik.com/free-photo/buying-food-grocery-store_342744-1129.jpg?t=st=1715938523~exp=1715942123~hmac=0263287c242824d3ad0503e86d6dbf0006dd85305128bd3bea8e390ca8b3bc2a&w=740",
//   "https://img.freepik.com/free-photo/woman-with-tablet-checking-shopping-cart-see-if-she-has-everything-she-needs-lunch_342744-1111.jpg?t=st=1715938561~exp=1715942161~hmac=97c7a245376555d905060ee1fd454b0021bcbbec55affac611465a9b5b73a12d&w=740",
// ];

// export const SwiperBrand = () => {
//   // Group images into sets of four
//   const imgSets = [];
//   for (let i = 0; i < imgArray.length; i += 4) {
//     imgSets.push(imgArray.slice(i, i + 4));
//   }

//   return (
//     <>
//       <Swiper
//         spaceBetween={30}
//         centeredSlides={true}
//         autoplay={{
//           delay: 2000,
//           disableOnInteraction: false,
//           pauseOnMouseEnter: true,
//         }}
//         navigation={true}
//         modules={[Autoplay]}
//         loop={true}
//         className="mySwiper"
//       >
//         {imgSets.map((set, index) => (
//           <SwiperSlide key={index}>
//             <div className="flex justify-around">
//               {set.map((imglink, key) => (
//                 <div key={key} className="w-1/4">
//                   <img src={imglink} alt="" className="w-full" />
//                 </div>
//               ))}
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </>
//   );
// };


import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";

const imgArray = [
  "https://tse2.mm.bing.net/th?id=OIP.RI2Q9yfcstpumaM_6J4kNwHaEH&pid=Api&P=0&h=180",
  "https://1000logos.net/wp-content/uploads/2020/09/Oreo-logo.jpg",
  "https://tse1.mm.bing.net/th?id=OIP.v6GhTR_13tZjkQAKGQXYUwHaFP&pid=Api&P=0&h=180",
  "https://tse2.mm.bing.net/th?id=OIP.O4ibxk7zS7tb1LXV3kTeegHaHP&pid=Api&P=0&h=180",
  "https://tse2.mm.bing.net/th?id=OIP.RI2Q9yfcstpumaM_6J4kNwHaEH&pid=Api&P=0&h=180",
  "https://1000logos.net/wp-content/uploads/2020/09/Oreo-logo.jpg",
  "https://tse1.mm.bing.net/th?id=OIP.v6GhTR_13tZjkQAKGQXYUwHaFP&pid=Api&P=0&h=180",
  "https://tse2.mm.bing.net/th?id=OIP.O4ibxk7zS7tb1LXV3kTeegHaHP&pid=Api&P=0&h=180",
  "https://tse1.mm.bing.net/th?id=OIP.v6GhTR_13tZjkQAKGQXYUwHaFP&pid=Api&P=0&h=180",
  "https://tse2.mm.bing.net/th?id=OIP.O4ibxk7zS7tb1LXV3kTeegHaHP&pid=Api&P=0&h=180",
];

export const SwiperBrand = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const imgSets = [];
  for (let i = 0; i < imgArray.length; i += 5) {
    imgSets.push(imgArray.slice(i, i + 5));
  }
  const imgSetsMobile = [];
  for (let i = 0; i < imgArray.length; i += 3) {
    imgSetsMobile.push(imgArray.slice(i, i + 3));
  }

  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      navigation={true}
      modules={[Autoplay, Navigation]}
      loop={true}
      className="mySwiper"
      breakpoints={{
        640: {
          slidesPerView: 1,
          slidesPerGroup: 1,
        },
        641: {
          slidesPerView: 1,
          slidesPerGroup: 1,
        },
      }}
    >
      {isMobile
        ? imgSetsMobile.map((set, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-between gap-6">
                {set.map((imglink, key) => (
                  <div key={key} className="w-1/3">
                    <img
                      src={imglink}
                      alt=""
                      className="w-full h-auto"
                      style={{ maxWidth: "100px", maxHeight: "100px" }}
                    />
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))
        : imgSets.map((set, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-between gap-6">
                {set.map((imglink, key) => (
                  <div key={key} className="w-1/5">
                    <img
                      src={imglink}
                      alt=""
                      className="w-full h-auto"
                      style={{ maxWidth: "100px", maxHeight: "100px" }}
                    />
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))}
    </Swiper>
  );
};
