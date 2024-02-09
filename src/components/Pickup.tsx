"use client";

import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Pickup = () => {
  const slideSettings = {
    0: {
      slidesPerView: 1.4,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
  };

  return (
    <div className="flex flex-col items-center mt-10 w-[100vw] overflow-hidden">
      <p className="text-[2em]">Pickup</p>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        breakpoints={slideSettings}
        slidesPerView={0}
        centeredSlides={true}
        loop={true}
        speed={1000}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation
        pagination={{
          clickable: true,
        }}
        className="max-w-[100%] h-[200px]"
      >
        {[...Array(9)].map((_, index: number) => (
          <SwiperSlide key={index}>
            <img
              src={`/images/pickup${index + 1}.jpg`}
              alt="Slider Image"
              style={{ aspectRatio: 1 / 1, objectFit: "cover" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Pickup;
