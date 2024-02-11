import "../assets/styles/style.css";
import blogImg1 from "../assets/images/blog-img-1.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

// import required modules
import { Grid, Pagination } from "swiper/modules";

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
            slidesPerView={2}
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
            <SwiperSlide>
              <div className="blog-slide-1 card m-0 p-3 rounded-4 border border-0 d-flex align-items-center">
                <div className="image rounded-4 overflow-hidden d-flex  justify-content-center">
                  <img src={blogImg1} alt="" className="rounded-4 w-100" />
                </div>
                <p className="w-100 m-0 p-0 text-secondary fs-6 mt-3">
                  27 April . Inspiration
                </p>
                <h5 className="m-0 p-0 mt-2">
                  How To Own Your Audience By Creating An Email List.
                </h5>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="blog-slide-1 card m-0 p-3 rounded-4 border border-0 d-flex align-items-center">
                <div className="image rounded-4 overflow-hidden d-flex  justify-content-center">
                  <img src={blogImg1} alt="" className="rounded-4 w-100" />
                </div>
                <p className="w-100 m-0 p-0 text-secondary fs-6 mt-3">
                  27 April . Inspiration
                </p>
                <h5 className="m-0 p-0 mt-2">
                  How To Own Your Audience By Creating An Email List.
                </h5>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="blog-slide-1 card m-0 p-3 rounded-4 border border-0 d-flex align-items-center">
                <div className="image rounded-4 overflow-hidden d-flex  justify-content-center">
                  <img src={blogImg1} alt="" className="rounded-4 w-100" />
                </div>
                <p className="w-100 m-0 p-0 text-secondary fs-6 mt-3">
                  27 April . Inspiration
                </p>
                <h5 className="m-0 p-0 mt-2">
                  How To Own Your Audience By Creating An Email List.
                </h5>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="blog-slide-1 card m-0 p-3 rounded-4 border border-0 d-flex align-items-center">
                <div className="image rounded-4 overflow-hidden d-flex  justify-content-center">
                  <img src={blogImg1} alt="" className="rounded-4 w-100" />
                </div>
                <p className="w-100 m-0 p-0 text-secondary fs-6 mt-3">
                  27 April . Inspiration
                </p>
                <h5 className="m-0 p-0 mt-2">
                  How To Own Your Audience By Creating An Email List.
                </h5>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="blog-slide-1 card m-0 p-3 rounded-4 border border-0 d-flex align-items-center">
                <div className="image rounded-4 overflow-hidden d-flex  justify-content-center">
                  <img src={blogImg1} alt="" className="rounded-4 w-100" />
                </div>
                <p className="w-100 m-0 p-0 text-secondary fs-6 mt-3">
                  27 April . Inspiration
                </p>
                <h5 className="m-0 p-0 mt-2">
                  How To Own Your Audience By Creating An Email List.
                </h5>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="blog-slide-1 card m-0 p-3 rounded-4 border border-0 d-flex align-items-center">
                <div className="image rounded-4 overflow-hidden d-flex  justify-content-center">
                  <img src={blogImg1} alt="" className="rounded-4 w-100" />
                </div>
                <p className="w-100 m-0 p-0 text-secondary fs-6 mt-3">
                  27 April . Inspiration
                </p>
                <h5 className="m-0 p-0 mt-2">
                  How To Own Your Audience By Creating An Email List.
                </h5>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="blog-slide-1 card m-0 p-3 rounded-4 border border-0 d-flex align-items-center">
                <div className="image rounded-4 overflow-hidden d-flex  justify-content-center">
                  <img src={blogImg1} alt="" className="rounded-4 w-100" />
                </div>
                <p className="w-100 m-0 p-0 text-secondary fs-6 mt-3">
                  27 April . Inspiration
                </p>
                <h5 className="m-0 p-0 mt-2">
                  How To Own Your Audience By Creating An Email List.
                </h5>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="blog-slide-1 card m-0 p-3 rounded-4 border border-0 d-flex align-items-center">
                <div className="image rounded-4 overflow-hidden d-flex  justify-content-center">
                  <img src={blogImg1} alt="" className="rounded-4 w-100" />
                </div>
                <p className="w-100 m-0 p-0 text-secondary fs-6 mt-3">
                  27 April . Inspiration
                </p>
                <h5 className="m-0 p-0 mt-2">
                  How To Own Your Audience By Creating An Email List.
                </h5>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="blog-slide-1 card m-0 p-3 rounded-4 border border-0 d-flex align-items-center">
                <div className="image rounded-4 overflow-hidden d-flex  justify-content-center">
                  <img src={blogImg1} alt="" className="rounded-4 w-100" />
                </div>
                <p className="w-100 m-0 p-0 text-secondary fs-6 mt-3">
                  27 April . Inspiration
                </p>
                <h5 className="m-0 p-0 mt-2">
                  How To Own Your Audience By Creating An Email List.
                </h5>
              </div>
            </SwiperSlide>{" "}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
