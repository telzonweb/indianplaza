// import TestimonialsSliderLayout2 from "@/components/testimonials-slider-layout-2";
// import { Pagination } from "swiper/modules";
// import SectionTitle from "./section-title";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";

// export const testimonials = [
//   {
//     name: "Fruits",
//     // company: "Fruits",
//     // comment:
//     //   "Margin is one of the most exciting, if you're interested in shaping a new business model for creators, this is the team to join.",
//     image: "https://img.freepik.com/free-photo/baroque-style-with-grapes-peaches_23-2149629958.jpg?t=st=1715942975~exp=1715946575~hmac=b6268bfd20f73c67d4c9b3113e7480b328af50b43f67e537e2bd8cbbcb017c51&w=996",
//     // rating: 5,
//   },
//   {
//     name: "Dairy",
//     // company: "Entrepreneur / Manager",
//     // comment:
//     //   "Margin is one of the most exciting, if you're interested in shaping a new business model for creators, this is the team to join.",
//     image: "https://img.freepik.com/free-photo/top-view-organic-milk-with-fresh-cheese_23-2148610547.jpg?t=st=1715942729~exp=1715946329~hmac=5af7e902fff8fd8c8c609e43411eb275d82dcf1cfa32ddce776a68e48b4fd465&w=996",
//     // rating: 5,
//   },
//   {
//     name: "Snacks",
//     // company: "Founder of Pally",
//     // comment:
//     //   "Margin is one of the most exciting, if you're interested in shaping a new business model for creators, this is the team to join.",
//     image: "https://img.freepik.com/free-photo/view-bowl-with-salty-snacks_23-2148582634.jpg?t=st=1715942822~exp=1715946422~hmac=a9ce9931c49317a0d1385831d5c369bd853daa4228ec83cfbbe0a0b943ddf85b&w=996",

//     // rating: 5,
//   },
//   {
//     name: "Beverages",
//     // company: "Founder of Devhunt.org",
//     // comment:
//     //   "Margin is one of the most exciting, if you're interested in shaping a new business model for creators, this is the team to join.",
//     image: "https://img.freepik.com/free-photo/variety-fruit-juices-black-background_23-2148227516.jpg?t=st=1715942901~exp=1715946501~hmac=f2ba6cdde68733d5df8f7843fb457799d9bdbc9376a7cfddccf3266f9d7a2c8e&w=996",
//     // rating: 5,
//   },
// ];

// const SectionTestimonialsSliderLayout2 = () => {
//   return (
//     <section className="overflow-hidden bg-gradient-to-b from-[#EBE4FA]/25 to-muted/25 py-20 dark:bg-slate-900 dark:bg-none lg:py-24">
//       <div className="container overflow-hidden relative xl:left-[calc((100vw-1312px)/4)] xl:max-w-[calc(1312px+((100vw-1312px)/2))] xl:pr-[calc((100vw-1280px)/2)]">
//         <SectionTitle
//           subtitle="10,000k+ Customers those who already tried our services."
//           sectionClasses="mx-auto max-w-xl text-center mb-12"
//           titleClasses="mb-3 text-center"
//           subtitleClasses="text-md font-medium"
//         >
//           Satisfied Customers
//         </SectionTitle>
//         <TestimonialsSliderLayout2
//           testimonials={testimonials}
//           swiperParams={{
//             breakpoints: {
//               768: {
//                 slidesPerView: 2,
//               },
//               1025: {
//                 slidesPerView: 2,
//               },
//             },
//             spaceBetween: 40,
//             modules: [Pagination],
//             pagination: { clickable: true },
//           }}
//         />
//       </div>
//     </section>
  
//   );
// };

// export default SectionTestimonialsSliderLayout2;

import TestimonialsSliderLayout2 from "@/components/testimonials-slider-layout-2";
import { Pagination } from "swiper/modules";
import SectionTitle from "./section-title";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export const testimonials = [
  {
    name: "Fruits",
    image: "https://img.freepik.com/free-photo/baroque-style-with-grapes-peaches_23-2149629958.jpg?t=st=1715942975~exp=1715946575~hmac=b6268bfd20f73c67d4c9b3113e7480b328af50b43f67e537e2bd8cbbcb017c51&w=996",
  },
  {
    name: "Dairy",
    image: "https://img.freepik.com/free-photo/top-view-organic-milk-with-fresh-cheese_23-2148610547.jpg?t=st=1715942729~exp=1715946329~hmac=5af7e902fff8fd8c8c609e43411eb275d82dcf1cfa32ddce776a68e48b4fd465&w=996",
  },
  {
    name: "Snacks",
    image: "https://img.freepik.com/free-photo/view-bowl-with-salty-snacks_23-2148582634.jpg?t=st=1715942822~exp=1715946422~hmac=a9ce9931c49317a0d1385831d5c369bd853daa4228ec83cfbbe0a0b943ddf85b&w=996",
  },
  {
    name: "Beverages",
    image: "https://img.freepik.com/free-photo/variety-fruit-juices-black-background_23-2148227516.jpg?t=st=1715942901~exp=1715946501~hmac=f2ba6cdde68733d5df8f7843fb457799d9bdbc9376a7cfddccf3266f9d7a2c8e&w=996",
  },
];

const SectionTestimonialsSliderLayout2 = () => {
  return (
    <section className="overflow-hidden bg-gradient-to-b from-[#EBE4FA]/25 to-muted/25 py-20 dark:bg-slate-900 dark:bg-none lg:py-24">
      <div className="container overflow-hidden relative xl:left-[calc((100vw-1312px)/4)] xl:max-w-[calc(1312px+((100vw-1312px)/2))] xl:pr-[calc((100vw-1280px)/2)]">
        <SectionTitle
          // subtitle="10,000k+ Customers those who already tried our services."
          sectionClasses="mx-auto max-w-xl text-center mb-12"
          titleClasses="mb-3 text-center"
          subtitleClasses="text-md font-medium"
        >
         Category
        </SectionTitle>
        <TestimonialsSliderLayout2
          testimonials={testimonials}
          swiperParams={{
            breakpoints: {
              768: {
                slidesPerView: 2,
              },
              1025: {
                slidesPerView: 2,
              },
            },
            spaceBetween: 40,
            modules: [Pagination],
            pagination: { clickable: true },
          }}
        />
      </div>
    </section>
  );
};

export default SectionTestimonialsSliderLayout2;
