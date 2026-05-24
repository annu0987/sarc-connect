import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "../styles/slider.css";

function Slider() {
  return (
    <div className="slider-container">
      <Swiper spaceBetween={30} slidesPerView={1} loop={true}>
        <SwiperSlide>
          <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slider;