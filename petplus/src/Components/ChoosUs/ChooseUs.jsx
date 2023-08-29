import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Subtitle from "../SubTitle/Subtitle";
import "./chooseus.css";

const ChooseUs = () => {
  return (
    <div className="CU-container">
      <Container>
        <Row>
          <Col lg="6">
            <div className="CU_title">
              <Subtitle title={"Why Choose US"} />
              <h1 data-aos="zoom-in" data-aos-duration="800">
                We Are Petsy Best Pet
                <br /> Care Center
              </h1>
              <p
                className="CU_title-p"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas sunt totam dolorem molestiae asperiores facilis
                explicabo incidunt mollitia, accusantium laboriosam.
              </p>
            </div>
            <div
              className="CU_list"
              data-aos="zoom-in"
              data-aos-duration="1200"
            >
              <Row>
                <Col lg="6">
                  <p>
                    <i class="fa-solid fa-shield-dog"></i>Passionate Pet Lovers
                  </p>
                  <p>
                    <i class="fa-solid fa-shield-dog"></i>Safe and Caring
                    Environment
                  </p>
                  <p>
                    <i class="fa-solid fa-shield-dog"></i>Tailored Care
                  </p>
                  <p>
                    <i class="fa-solid fa-shield-dog"></i>Professional Expert
                    Team
                  </p>
                </Col>
                <Col lg="6">
                  <p>
                    <i class="fa-solid fa-shield-dog"></i>Comprehensive Services
                  </p>
                  <p>
                    <i class="fa-solid fa-shield-dog"></i>Convenient Location
                  </p>
                </Col>
              </Row>
              <button>Book Now</button>
            </div>
          </Col>
          <Col lg="6 mt-4">
            <div className="CUP-1 d-flex gap-4">
              <div
                className="Choose01"
                data-aos="fade-up"
                data-aos-duration="1000"
              />
              <div
                className="choose-041"
                data-aos="fade-up"
                data-aos-duration="1500"
              />
            </div>
            <div className="CUP-2 d-flex gap-4 mt-4">
              <div
                className="choose-021 "
                data-aos="fade-up"
                data-aos-duration="2000"
              />
              <div
                className="choose-031"
                data-aos="fade-up"
                data-aos-duration="2500"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ChooseUs;
