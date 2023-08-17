import React from "react";
import Subtitle from "../SubTitle/Subtitle";
import { Container } from "react-bootstrap";

import P1 from "../../assets/image/Team/alex.png";
import P2 from "../../assets/image/Team/emili.png";
import P3 from "../../assets/image/Team/daniel.png";
import P4 from "../../assets/image/Team/marcus.png";
import P5 from "../../assets/image/Team/esabella.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

function Team() {
  return (
    <div>
      <Container>
        <div className="S_subtitle">
          <Subtitle title={"Our Team"} />
        </div>
        <div className="service_title">
          <h2 data-aos="fade-up" data-aos-duration="1000">
            Professional expert team
          </h2>
          <p className="st_p" data-aos="fade-up" data-aos-duration="1000">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus pariatur inventore, voluptate reprehenderit odio error
            architecto sit dignissimos
          </p>
        </div>
        <div
          className="service_body"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <Swiper
            modules={[Autoplay]}
            autoplay={{
              delay: 3000,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              {" "}
              <div className="slide_content">
                <div className="card_wrapper">
                  <div className="card">
                    <div className="image_content">
                      <div className="card-image">
                        <img src={P1} alt="" className="card-img" />
                      </div>
                      <div className="card-content">
                        <h2>Grooming Specialist</h2>
                        <h3>Alex Turner</h3>
                        <p>
                          Meet Alex Turner, our grooming guru with a keen eye
                          for making pets look their best.
                        </p>
                        <button>
                          View More <i class="fa-solid fa-arrow-right"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="slide_content">
                <div className="card_wrapper">
                  <div className="card">
                    <div className="image_content">
                      <div className="card-image">
                        <img src={P3} alt="" className="card-img" />
                      </div>
                      <div className="card-content">
                        <h2>Training Specialist</h2>
                        <h3>Emily Rodriguez</h3>
                        <p>
                          Our expert dog whisperer who knows
                          just how to bring out the best in every pup.
                        </p>
                        <button>
                          View More <i class="fa-solid fa-arrow-right"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="slide_content">
                <div className="card_wrapper">
                  <div className="card">
                    <div className="image_content">
                      <div className="card-image">
                        <img src={P2} alt="" className="card-img" />
                      </div>
                      <div className="card-content">
                        <h2>Veterinary Care Specialist</h2>
                        <h3>Daniel Nguyen</h3>
                        <p>
                        
                          Ensuring the health and well-being of every pet under
                          our care.
                        </p>
                        <button>
                          View More <i class="fa-solid fa-arrow-right"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="slide_content">
                <div className="card_wrapper">
                  <div className="card">
                    <div className="image_content">
                      <div className="card-image">
                        <img src={P4} alt="" className="card-img" />
                      </div>
                      <div className="card-content">
                        <h2>Playtime Supervisor</h2>
                        <h3>Olivia Williams</h3>
                        <p>
                          The ultimate playtime expert at PetPals
                          Pet Care Center. 
                        </p>
                        <button>
                          View More <i class="fa-solid fa-arrow-right"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="slide_content">
                <div className="card_wrapper">
                  <div className="card">
                    <div className="image_content">
                      <div className="card-image">
                        <img src={P5} alt="" className="card-img" />
                      </div>
                      <div className="card-content">
                        <h2>Cat Whisperer</h2>
                        <h3>Isabella Johnson</h3>
                        <p>
                          Understanding of feline
                          behavior, making her our resident "Cat Whisperer."
                        </p>
                        <button>
                          View More <i class="fa-solid fa-arrow-right"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="slide_content">
                <div className="card_wrapper">
                  <div className="card">
                    <div className="image_content">
                      <div className="card-image">
                        <img src={P5} alt="" className="card-img" />
                      </div>
                      <div className="card-content">
                        <h2>Customer Care Specialist</h2>
                        <h3>Marcus Lee</h3>
                        <p>
                          Marcus Lee is the friendly face you'll first encounter
                          at PetPals Pet Care Center.
                        </p>
                        <button>
                          View More <i class="fa-solid fa-arrow-right"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </Container>
    </div>
  );
}

export default Team;
