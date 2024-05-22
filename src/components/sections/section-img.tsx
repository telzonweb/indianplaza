// import React from 'react';

// interface ImageCardProps {
//   src: string;
//   alt: string;
// }

// const ImageCard: React.FC<ImageCardProps> = ({ src, alt }) => (
//   <div className="relative p-4 bg-white rounded-lg">
//     <img src={src} alt={alt} className="w-full h-auto rounded-md" />
//   </div>
// );

// const ImageRow: React.FC = () => {
//   const images = [
//     { src: 'https://media.starquik.com/bannerslider/m/a/may_24_celebration_01.png', alt: 'Image 1' },
//     { src: 'https://media.starquik.com/bannerslider/m/a/may_br_24_celebration_02.png', alt: 'Image 2' },
//     { src: 'https://media.starquik.com/bannerslider/m/a/may_br_24_celebration_03.png', alt: 'Image 3' },
//     { src: 'https://media.starquik.com/bannerslider/m/a/may_br_24_celebration_03.png', alt: 'Image 4' },
//   ];

//   return (
//     <div className="flex justify-center p-4 overflow-x-auto">
//       {images.map((image, index) => (
//         <ImageCard key={index} src={image.src} alt={image.alt} />
//       ))}
//     </div>
//   );
// };

// export default ImageRow;

import TestimonialsSliderLayout2 from "@/components/testimonials-slider-layout-2";
import { Pagination } from "swiper/modules";
import SectionTitle from "./section-title";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export const testimonials = [
  {
    image: "https://media.starquik.com/bannerslider/m/a/may_24_celebration_01.png",
  },
  {
    image: "https://media.starquik.com/bannerslider/m/a/may_br_24_celebration_02.png",
  },
  {
    image: "https://media.starquik.com/bannerslider/m/a/may_br_24_celebration_03.png",
  },
  {
    image: "https://media.starquik.com/bannerslider/m/a/may_br_24_celebration_03.png",
  },
];

const SectionImg = () => {
  return (
    <section className="overflow-hidden bg-gradient-to-b from-[#EBE4FA]/25 to-muted/25 py-20 dark:bg-slate-900 dark:bg-none lg:py-24">
      <div className="container overflow-hidden relative xl:left-[calc((100vw-1312px)/4)] xl:max-w-[calc(1312px+((100vw-1312px)/2))] xl:pr-[calc((100vw-1280px)/2)]">
        <SectionTitle
          // subtitle="10,000k+ Customers those who already tried our services."
          sectionClasses="mx-auto max-w-xl text-center mb-12"
          titleClasses="mb-3 text-center"
          subtitleClasses="text-md font-medium"
        >
         Combo
        </SectionTitle>
        <TestimonialsSliderLayout2
          testimonials={testimonials}
          swiperParams={{
            breakpoints: {
              768: {
                slidesPerView: 4,
              },
              1025: {
                slidesPerView: 4,
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

export default SectionImg;