import "../assets/styles/style.css";
import clientLogo1 from "../assets/images/client-logo-1.png";
import clientLogo2 from "../assets/images/client-logo-2.png";
import clientLogo3 from "../assets/images/client-logo-3.png";
import clientLogo4 from "../assets/images/client-logo-4.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

const About = () => {

  return (
    <div className="about m-0 p-0 col-12 col-md-8  d-flex justify-content-center">
      <div className="card rounded-4 m-0 p-2 pt-5 p-md-5 bg-light col-12 col-md-11 border-0 ">
        <div className="heading row m-0 p-0 d-flex align-items-center">
          <h1 className="m-0 p-0 w-auto">About</h1>
          <div className="line bg-primary rounded-5 col-6 m-0 p-0 ms-3"></div>
        </div>
        <p className="m-0 p-0 mb-3 mt-3 text-secondary ">
          I'm Creative Director and UI/UX Designer from Sydney, Australia,
          working in web development and print media. I enjoy turning complex
          problems into simple, beautiful and intuitive designs.
        </p>
        <p className="m-0 p-0 mb-5 text-secondary ">
          My aim is to bring across your message and identity in the most
          creative way. I created web design for many famous brand companies.
        </p>

        <p className="fs-3">What I Do!</p>
        <div className="row m-0 p-0 justify-content-between ">
          <div className="col-12 col-md-6 pt-3 pb-3">
            <div className="card rounded-4 p-3 border-0  col-12 m-0 p-0 d-flex  flex-row ">
              <div className="col-2 d-flex  ">
                <i class="fa-solid fa-swatchbook fs-2 w-auto h-auto"></i>
              </div>
              <div className="col-10">
                <p className="fs-5">Ui/Ux Design</p>
                <p className="text-secondary">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Porro soluta accusamus saepe ipsum molestiae modi sunt tempora
                  facere voluptates, maiores vero provident illo accusantium ab
                  excepturi tempore esse eius nesciunt!
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 pt-3 pb-3">
            <div className="card rounded-4 p-3 border-0  col-12 m-0 p-0 d-flex  flex-row ">
              <div className="col-2 d-flex  ">
                <i class="bi bi-grid fs-2 w-auto h-auto"></i>
              </div>
              <div className="col-10">
                <p className="fs-5">App Development</p>
                <p className="text-secondary">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Porro soluta accusamus saepe ipsum molestiae modi sunt tempora
                  facere voluptates, maiores vero provident illo accusantium ab
                  excepturi tempore esse eius nesciunt!
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 pt-3 pb-3">
            <div className="card rounded-4 p-3 border-0  col-12 m-0 p-0 d-flex  flex-row ">
              <div className="col-2 d-flex  ">
                <i class="fa-solid fa-camera-retro fs-2 w-auto h-auto"></i>
              </div>
              <div className="col-10">
                <p className="fs-5">Photography</p>
                <p className="text-secondary">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Porro soluta accusamus saepe ipsum molestiae modi sunt tempora
                  facere voluptates, maiores vero provident illo accusantium ab
                  excepturi tempore esse eius nesciunt!
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 pt-3 pb-3">
            <div className="card rounded-4 p-3 border-0  col-12 m-0 p-0 d-flex  flex-row ">
              <div className="col-2 d-flex  ">
                <i class="bi bi-code-slash fs-2 w-auto h-auto"></i>
              </div>
              <div className="col-10">
                <p className="fs-5">Web Development</p>
                <p className="text-secondary">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Porro soluta accusamus saepe ipsum molestiae modi sunt tempora
                  facere voluptates, maiores vero provident illo accusantium ab
                  excepturi tempore esse eius nesciunt!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="client row m-0 p-0">
          <p className="fs-3">Client</p>
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            ...
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default About;
