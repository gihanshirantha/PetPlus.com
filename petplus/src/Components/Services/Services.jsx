import React from "react";
import "./services.css";
import { Container, Row, Col } from "react-bootstrap";
import Subtitle from "../SubTitle/Subtitle";
import P1 from '../../assets/image/Cards/P1.png'

const Services = () => {
  return (
    <div>
      <div className="services">
        <Container>
          <Subtitle title={"Service"} />
          <div className="service_title">
            <h2>We provide the best services</h2>
            <p className="st_p">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus pariatur inventore, voluptate reprehenderit odio
              error architecto sit dignissimos
            </p>
          </div>
          <div className="service_body">
            <div className="slide_container">
              <div className="slide_content">
                <div className="card_wrapper">
                  <div className="card">
                    <div className="image_content">
                      <span className="overlay"></span>
                      <div className="card-image">
                        <img src={P1} alt="" className="card-img" />
                      </div>
                      <div className="card-content">
                        <h2>Boarding</h2>
                        <p>We offer spacious and comfortable boarding facilities where your pet can relax and feel at home while you're away.</p>
                        <button>View More <i class="fa-solid fa-arrow-right"></i></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Services;
