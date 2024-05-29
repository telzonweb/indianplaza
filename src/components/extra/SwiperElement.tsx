// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const imgArray = [
  "/mainImages/carausel/img1.jpg",
  "/mainImages/carausel/img4.jpg",
  "/mainImages/carausel/img2.jpg",
  "/mainImages/carausel/img3.jpg",
];

export const SwiperElement = () => {
  return (
    <div className="">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination]}
        loop={true}
        className="mySwiper "
      >
        {imgArray.map((imglink, key) => (
          <SwiperSlide key={key} className="flex  items-center justify-center">
            <div className="mx-auto flex h-[50vh]  items-center justify-center rounded-2xl lg:h-[90vh] ">
              <img
                src={imglink}
                alt="SwiperImg"
                className="h-full w-full rounded-lg object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
