import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

import brand1 from "../assets/img/th-1/brand-1.jpg";
import brand2 from "../assets/img/th-1/brand-2.jpg";
import brand3 from "../assets/img/th-1/brand-3.jpg";
import brand5 from "../assets/img/th-1/brand-5.jpg";
import brand6 from "../assets/img/th-1/brand-6.jpg";
import brand7 from "../assets/img/th-1/brand-7.jpg";

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
            src={brand1}
            alt="brand-1"
            width={180}
            height={38}
            className="max-w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            src={brand7}
            alt="brand-1"
            width={180}
            height={38}
            className="max-w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            src={brand2}
            alt="brand-1"
            width={180}
            height={38}
            className="max-w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            src={brand3}
            alt="brand-1"
            width={180}
            height={38}
            className="max-w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            src={brand7}
            alt="brand-1"
            width={180}
            height={38}
            className="max-w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            src={brand5}
            alt="brand-1"
            width={180}
            height={38}
            className="max-w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            src={brand6}
            alt="brand-1"
            width={180}
            height={38}
            className="max-w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            src={brand7}
            alt="brand-1"
            width={180}
            height={38}
            className="max-w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            src={brand5}
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
