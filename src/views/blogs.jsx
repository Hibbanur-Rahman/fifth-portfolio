import "../assets/styles/style.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';


// import required modules
import { Grid, Pagination } from 'swiper/modules';


const Blogs = () => {
  return (
    <div className="blogs m-0 p-0 col-12 col-md-8  d-flex justify-content-center">
      <div className="card rounded-4 m-0 p-2 pt-5 p-md-5 bg-light col-12 col-md-11 border-0 ">
        <div className="heading row m-0 p-0 d-flex align-items-center">
          <h1 className="m-0 p-0 w-auto">Blogs</h1>
          <div className="line bg-primary rounded-5 col-6 m-0 p-0 ms-3"></div>
        </div>
        <div className="row m-0 p-0">
          <Swiper
            slidesPerView={3}
            grid={{
              rows: 2,
            }}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Grid, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
