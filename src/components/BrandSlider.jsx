import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

import th from "../assets/img/simple/brand-4.png";

const BrandSlider = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{
          delay: 2500,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          {" "}
          <img
            src={th}
            alt="brand-1"
            width={180}
            height={38}
            className="max-w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            src={th}
            alt="brand-1"
            width={180}
            height={38}
            className="max-w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            src={th}
            alt="brand-1"
            width={180}
            height={38}
            className="max-w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            src={th}
            alt="brand-1"
            width={180}
            height={38}
            className="max-w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            src={th}
            alt="brand-1"
            width={180}
            height={38}
            className="max-w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            src={th}
            alt="brand-1"
            width={180}
            height={38}
            className="max-w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            src={th}
            alt="brand-1"
            width={180}
            height={38}
            className="max-w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            src={th}
            alt="brand-1"
            width={180}
            height={38}
            className="max-w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            src={th}
            alt="brand-1"
            width={180}
            height={38}
            className="max-w-full"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default BrandSlider;
