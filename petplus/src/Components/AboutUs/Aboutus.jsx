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
          <Col lg="6">
            <div className="about_design">
              <span class="dot"></span>
              <span class="dot2"></span>
              <div className="about_img">
                <img src={AboutImg} alt="" />
              </div>
              <div className="experience">
                <h3>15+</h3>
                <p>Years Experience</p>
              </div>
              <div className="Clients">
                <h3>500+</h3>
                <p>Happy Clients</p>
              </div>
              <div className="Experts">
                <h3>45+</h3>
                <p>Best Exparts</p>
              </div>
            </div>
          </Col>
          <Col lg="6">
            <div className="about_wording">
                <Subtitle title={'About '}/>
              <h3>Lear About our best pet care centers</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic,
                officia et. Assumenda tempore, hic numquam ea dolores cum
                facilis eligendi suscipit iure rerum blanditiis, odit aspernatur
                consequatur porro omnis odio.
              </p>
              <div className="feeding_cat d-flex">
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
              <div className="feeding_dog d-flex">
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
              <Button>Discover More</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Aboutus;
