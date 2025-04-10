import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import FrequentSwiperCard from "./FrequentSwiperCard";
import PaginationSwiper from "./PaginationSwiper";

export default function FrequentSwiper() {
  const totalSlides = 10;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);
  
  // Update window size
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial value
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Determine slidesPerView dynamically
  const slidesPerView = windowWidth < 640 ? 1 : windowWidth < 1024 ? 2 : 3;

  return (
    <div className="container">
      <Swiper
        key={windowWidth} // Forces re-render on resize
        modules={[Pagination]}
        spaceBetween={20}
        slidesPerView={slidesPerView}
        slidesPerGroup={1}
        loop={false}
        pagination={{ clickable: true, el: ".custom-pagination" }}
        onActiveIndexChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
        observer={true}
        observeParents={true}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 },
          640: { slidesPerView: 2, spaceBetween: 15 },
          1024: { slidesPerView: 3, spaceBetween: 20 },
        }}
      >
        {[...Array(totalSlides)].map((_, index) => (
          <SwiperSlide className="py-7" key={index}>
            <FrequentSwiperCard />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Updated Pagination Component */}
      <PaginationSwiper
        currentIndex={currentIndex}
        slidesPerView={slidesPerView}
        totalSlides={totalSlides}
      />
    </div>
  );
}

