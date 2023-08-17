import React from "react";
import "./aboutus.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import AboutImg from "../../assets/image/About-img.png";
import Subtitle from "../SubTitle/Subtitle";

const Aboutus = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col lg="">
            <div className="about_design">
              <span class="dot" data-aos="zoom-in" data-aos-duration="1000">
                
                  <div className="about_img" data-aos="zoom-in" data-aos-duration="1500">
                    <img src={AboutImg} alt="" />
                  </div>
                  <div className="experience" data-aos="zoom-in" data-aos-duration="2000">
                    <h3>15+</h3>
                    <p>Years Experience</p>
                  </div>
                  <div className="Clients" data-aos="zoom-in" data-aos-duration="2000">
                    <h3>500+</h3>
                    <p>Happy Clients</p>
                  </div>
                  <div className="Experts" data-aos="zoom-in" data-aos-duration="2000">
                    <h3>45+</h3>
                    <p>Best Exparts</p>
                  </div>
                  <span class="dot2">
                </span>
              </span>
            </div>
          </Col>
          <Col lg="6">
            <div className="about_wording">
              <Subtitle title={"About "} />
              <h3 data-aos="zoom-in" data-aos-duration="1000">Lear About our best pet care centers</h3>
              <p data-aos="zoom-in" data-aos-duration="1200">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic,
                officia et. Assumenda tempore, hic numquam ea dolores cum
                facilis eligendi suscipit iure rerum blanditiis, odit aspernatur
                consequatur porro omnis odio.
              </p>
              <div className="feeding_cat d-flex" data-aos="zoom-in" data-aos-duration="1400">
                <div className="cat_icon">
                  <i class="fa-solid fa-cat"></i>
                </div>
                <div className="cat_wording">
                  <h4>Feeding a cat to be healthy</h4>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Dolorum aliquid sequi sit suscipit. Assumenda{" "}
                  </p>
                </div>
              </div>
              <div className="feeding_dog d-flex" data-aos="zoom-in" data-aos-duration="1600">
                <div className="cat_icon">
                  <i class="fa-solid fa-dog"></i>
                </div>
                <div className="cat_wording">
                  <h4>Feeding a cat to be healthy</h4>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Dolorum aliquid sequi sit suscipit. Assumenda{" "}
                  </p>
                </div>
              </div>
              <Button data-aos="zoom-in" data-aos-duration="2000">Discover More</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Aboutus;
