// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const imgArray = [
  "/mainImages/carousel1.jpg",
  "https://img.freepik.com/free-photo/top-view-wooden-bowls-with-rice-corn-seeds-pumpkin-seeds-beans-lentiles-thin-pasta-different-spices-grey-background_140725-145832.jpg?t=st=1716446566~exp=1716450166~hmac=1a95b0fcfb15fd57ca805c6a87dbecd8ca3f22fbb5ff7c17a1fb965ec1007335&w=740",
  "https://img.freepik.com/free-photo/flat-lay-tasty-jewish-food-assortment_23-2148814454.jpg?t=st=1716446670~exp=1716450270~hmac=2671e8047785ce1ddbce28fcc64fffca92b41d4a19978e47765cc5ce8f6485a1&w=996",
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
