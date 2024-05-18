// import React from 'react';

// const SectionPartnersLayout2 = () => {
//   return (
//     <section className="pb-16 pt-6">
//       <div className="container relative">
//         <div className="flex flex-wrap justify-center">
//           <img
//             src="partners/partner_logo_1.png"
//             alt="partner 1"
//             width={173}
//             height={103}
//             className="m-2 md:mx-8 md:my-5"
//           />
//           <img
//             src="partners/partner_logo_2.png"
//             alt="partner 2"
//             width={173}
//             height={103}
//             className="m-2 md:mx-8 md:my-5"
//           />
//           <img
//             src="partners/partner_logo_3.png"
//             alt="partner 3"
//             width={173}
//             height={103}
//             className="m-2 md:mx-8 md:my-5"
//           />
//           <img
//             src="partners/partner_logo_4.png"
//             alt="partner 4"
//             width={173}
//             height={103}
//             className="m-2 md:mx-8 md:my-5"
//           />
//           <img
//             src="partners/partner_logo_5.png"
//             alt="partner 5"
//             width={173}
//             height={103}
//             className="m-2 md:mx-8 md:my-5"
//           />
//         </div>
//       </div>
//     </section>  


// /* <section className="flex justify-center items-center flex-col px-4 md:px-8"> 
//               <h2 className="mb-12 text-center">Our Store</h2>     
//             <h2 className="mb-12 text-center">
//               Do you want to{" "}<br></br>
//               <span className="text-primary">
//                 generate more traffic</span> to
//               your website? We know the solution.
//             </h2>
        
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
// </section> */

//   );
// };

// export default SectionPartnersLayout2;

import React from 'react'
import TestimonialsSliderLayout2 from "@/components/testimonials-slider-layout-2";
import { Pagination } from "swiper/modules";
import SectionTitle from "./section-title";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export const testimonials = [
  {
    // name: "Fruits",
    image: "https://s.yimg.com/fz/api/res/1.2/fdmWe0djizOJqBXAhBCgIg--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTI2MDtxPTgwO3c9MzMy/https://s.yimg.com/zb/imgv1/c190d85d-73d0-34b0-8fbe-bd2fe48609a3/t_500x300",
  },
  {
    // name: "Dairy",
    image: "https://s.yimg.com/fz/api/res/1.2/kDUVktKZs8pZ0PMKPrFdeA--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTI0MDtxPTgwO3c9MjQw/https://s.yimg.com/zb/imgv1/221312f4-7292-3999-836b-84b9646e9030/t_500x300",
  },
  {
    // name: "Snacks",
    image: "http://tous-logos.com/wp-content/uploads/2018/01/Nestl%C3%A9-Logo.png",
  },
  {
    // name: "Beverages",
    image: "https://tse1.mm.bing.net/th?id=OIP.zGQwN2HFcUmfKtOKaEU1bAHaE8&pid=Api&P=0&h=180",
  },
  {
    // name: "Beverages",
    image: "https://tse4.mm.bing.net/th?id=OIP.ToJ2sR_uR8tfMPC2oT0YWAHaD2&pid=Api&P=0&h=180",
  },
];

function SectionPartnersLayout2() {
    
  return (
    <section className="overflow-hidden bg-gradient-to-b from-[#EBE4FA]/25 to-muted/25 py-20 dark:bg-slate-900 dark:bg-none lg:py-24">
      <div className="container overflow-hidden relative xl:left-[calc((100vw-1312px)/4)] xl:max-w-[calc(1312px+((100vw-1312px)/2))] xl:pr-[calc((100vw-1280px)/2)]">
        <SectionTitle
          // subtitle="10,000k+ Customers those who already tried our services."
          sectionClasses="mx-auto max-w-xl text-center mb-12"
          titleClasses="mb-3 text-center"
          subtitleClasses="text-md font-medium"
        >
         Our Top Brands
        </SectionTitle>
        <TestimonialsSliderLayout2
          testimonials={testimonials}
          swiperParams={{
            breakpoints: {
              768: {
                slidesPerView: 3,
              },
              1025: {
                slidesPerView: 3,
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
  
}

export default SectionPartnersLayout2;

