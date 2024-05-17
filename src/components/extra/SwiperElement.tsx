// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const imgArray = [
  "https://img.freepik.com/free-photo/buying-food-grocery-store_342744-1129.jpg?t=st=1715938523~exp=1715942123~hmac=0263287c242824d3ad0503e86d6dbf0006dd85305128bd3bea8e390ca8b3bc2a&w=740",
  "https://img.freepik.com/free-photo/woman-with-tablet-checking-shopping-cart-see-if-she-has-everything-she-needs-lunch_342744-1111.jpg?t=st=1715938561~exp=1715942161~hmac=97c7a245376555d905060ee1fd454b0021bcbbec55affac611465a9b5b73a12d&w=740",
  "https://img.freepik.com/free-photo/buying-food-grocery-store_342744-1129.jpg?t=st=1715938523~exp=1715942123~hmac=0263287c242824d3ad0503e86d6dbf0006dd85305128bd3bea8e390ca8b3bc2a&w=740",
  "https://img.freepik.com/free-photo/woman-with-tablet-checking-shopping-cart-see-if-she-has-everything-she-needs-lunch_342744-1111.jpg?t=st=1715938561~exp=1715942161~hmac=97c7a245376555d905060ee1fd454b0021bcbbec55affac611465a9b5b73a12d&w=740",
];

export const SwiperElement = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        modules={[Autoplay]}
        loop={true}
        className="mySwiper "
      >
        {imgArray.map((imglink, key) => (
          <SwiperSlide
            key={key}
            className="flex h-[90vh] items-center justify-center"
          >
            <div className="mx-auto flex h-[90%] w-[90%] items-center justify-center rounded-2xl  ">
              <img
                src={imglink}
                alt=""
                className="h-full w-full rounded-lg object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
