import React from "react";
import "./services.css";
import { Container, Row, Col } from "react-bootstrap";
import Subtitle from "../SubTitle/Subtitle";
import P1 from "../../assets/image/Cards/P1.png";
import P2 from "../../assets/image/Cards/P2.png";
import P3 from "../../assets/image/Cards/P3.png";
import P4 from "../../assets/image/Cards/P4.png";
import P5 from "../../assets/image/Cards/P5.png";
import P6 from "../../assets/image/Cards/P6.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const Services = () => {
  return (
    <div>
      <div className="services">
        <Container>
          <Subtitle title={"Services"} />
          <div className="service_title">
            <h2>We provide the best services</h2>
            <p className="st_p">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus pariatur inventore, voluptate reprehenderit odio
              error architecto sit dignissimos
            </p>
          </div>
          <div className="service_body">
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
                          <h2>Boarding</h2>
                          <p>
                            We offer spacious and comfortable boarding
                            facilities where your pet can relax and feel at home
                            while you're away.
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
                          <h2>Daycare</h2>
                          <p>
                            Socialize and play! Our daycare services provide a
                            fun-filled environment for your pet to interact with
                            other furry friends.
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
                          <h2>Grooming</h2>
                          <p>
                            Our expert groomers will pamper your pet, ensuring
                            they look and feel their best with our grooming
                            services.
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
                          <h2>Training</h2>
                          <p>
                            Whether it's obedience training or behavior
                            modification, our professional trainers can help
                            your pet become a well-behaved companion.
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
                          <h2>Veterinary Care</h2>
                          <p>
                            We work closely with trusted veterinarians to ensure
                            your pet's health and well-being are always
                            monitored.
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
                          <img src={P6} alt="" className="card-img" />
                        </div>
                        <div className="card-content">
                          <h2>Events</h2>
                          <p>
                            Celebrate special occasions with your pet at our
                            pet-friendly parties and events, creating lasting
                            memories.
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
    </div>
  );
};

export default Services;
